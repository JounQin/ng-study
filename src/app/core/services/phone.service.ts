import { Injectable } from '@angular/core'

import { delay } from 'app/utils'

export interface Phone {
  name: string
  snippet: string
}

@Injectable()
export class PhoneService {
  async getPhones(): Promise<Phone[]> {
    await delay(100)
    return [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
      },
      {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
      },
      {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
      },
    ]
  }
}
