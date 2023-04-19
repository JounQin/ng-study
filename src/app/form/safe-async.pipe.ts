import { AsyncPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Subscribable } from 'rxjs';

export const isSubscribable = <T>(obj: object): obj is Subscribable<T> =>
  'subscribe' in obj && typeof obj.subscribe === 'function';

export const isPromiseLike = <T>(obj: object): obj is PromiseLike<T> =>
  'then' in obj && typeof obj.then === 'function';

@Pipe({
  name: 'safeAsync',
  pure: false,
  standalone: true,
})
export class SafeAsyncPipe extends AsyncPipe implements PipeTransform {
  override transform<T>(
    obj: T | Subscribable<T> | Promise<T> | null | undefined
  ): T | null {
    if (obj && (isSubscribable<T>(obj) || isPromiseLike<T>(obj))) {
      return super.transform(obj);
    }
    return obj ?? null;
  }
}
