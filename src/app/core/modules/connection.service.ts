import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ConnectionService {
  connection$ = new Observable<NetworkInformation>(subscriber => {
    const { connection } = navigator
    const onChange = () => subscriber.next(connection)
    connection.addEventListener('change', onChange)
    onChange()
    return () => {
      connection.removeEventListener('change', onChange)
      subscriber.complete()
    }
  })

  isFast$ = this.connection$.pipe(
    map(connection => /3g|4g/.test(connection.effectiveType)),
  )
}
