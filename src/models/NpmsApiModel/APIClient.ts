import axios from 'axios'
import { SearchParams, PackageParams } from './interfaces'
import qs from 'qs'

export interface RequestParams extends SearchParams, PackageParams {
  q?: string
}

export class RequestService {
  private apiUrl: string = 'https://api.npms.io/v2'

  npms

  constructor() {
    this.npms = axios.create({ baseURL: this.apiUrl })
  }

  async createParams(args: RequestParams) {
    if (args.q) {
      const q = args.q
      delete args['q']
      const string = await qs.stringify({ ...args })
      return `q=${q}${string !== '' ? '&' + string : ''}`
    }
    return await qs.stringify({ ...args })
  }
}
