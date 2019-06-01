import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  IterableDiffers,
  DoCheck,
  TrackByFunction,
  IterableDiffer,
  IterableChanges,
  NgIterable,
  IterableChangeRecord,
  EmbeddedViewRef,
} from '@angular/core'

class AppForContext<T> {
  get first() {
    return this.index === 0
  }

  get last() {
    return this.index === this.count - 1
  }

  get even() {
    // tslint:disable-next-line: no-bitwise
    return (this.index & 1) === 0
  }

  get odd() {
    // tslint:disable-next-line: no-bitwise
    return (this.index & 1) === 1
  }

  constructor(
    public $implicit: T,
    public appForOf: NgIterable<T>,
    public count: number,
    public index: number,
  ) {}
}

// tslint:disable-next-line: max-classes-per-file
class AppForInsertedRecord<T> {
  constructor(
    public record: IterableChangeRecord<T>,
    public view: EmbeddedViewRef<AppForContext<T>>,
  ) {}
}

// tslint:disable-next-line: max-classes-per-file
@Directive({
  selector: '[appFor][appForOf]',
})
export class ForDirective<T> implements DoCheck {
  private iterable: NgIterable<T>
  private trackByFn: TrackByFunction<T>
  private differ: IterableDiffer<T>

  @Input()
  set appForOf(iterable: T[] | Iterable<T>) {
    this.iterable = iterable
  }

  @Input()
  set appForTrackBy(trackByFn: TrackByFunction<T>) {
    this.trackByFn = trackByFn
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<AppForContext<T>>,
    private differs: IterableDiffers,
  ) {}

  ngDoCheck() {
    if (!this.differ && this.iterable) {
      this.differ = this.differs.find(this.iterable).create(this.trackByFn)
    }
    if (this.differ) {
      const changes = this.differ.diff(this.iterable)
      if (changes) {
        this.applyChanges(changes)
      }
    }
  }

  applyChanges(changes: IterableChanges<T>) {
    const insertedRecords: AppForInsertedRecord<T>[] = []
    changes.forEachOperation((record, prevIndex, currIndex) => {
      if (currIndex === null) {
        this.viewContainerRef.remove(prevIndex)
      } else if (record.previousIndex === null) {
        const view = this.viewContainerRef.createEmbeddedView(
          this.templateRef,
          new AppForContext(null, this.iterable, -1, -1),
        )
        insertedRecords.push(new AppForInsertedRecord(record, view))
      } else {
        const view = this.viewContainerRef.get(prevIndex) as EmbeddedViewRef<
          AppForContext<T>
        >
        this.viewContainerRef.move(view, currIndex)
        insertedRecords.push(new AppForInsertedRecord(record, view))
      }
    })
    insertedRecords.forEach(({ record, view }) => {
      view.context.$implicit = record.item
    })
    const len = this.viewContainerRef.length
    for (let i = 0; i < len; i++) {
      const view = this.viewContainerRef.get(i) as EmbeddedViewRef<
        AppForContext<T>
      >
      const { context } = view
      context.index = i
      context.count = len
      context.appForOf = this.iterable
    }
    changes.forEachIdentityChange(record => {
      const view = this.viewContainerRef.get(
        record.currentIndex,
      ) as EmbeddedViewRef<AppForContext<T>>
      view.context.$implicit = record.item
    })
  }
}
