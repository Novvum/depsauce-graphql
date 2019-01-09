import { RequestService } from './APIClient'
import {
  FilterOptions,
  SearchParams,
  SearchCoordinate,
  ResultElement,
} from './interfaces'
import oChain from '../../utils/oChain'

export class SearchModel extends RequestService {
  constructor() {
    super()
  }
  addFilterParams(q: string, filters: FilterOptions) {
    const filterString: string = Object.keys(filters)
      .map((key) => {
        if (filters[key] instanceof Array) {
          const keyVals = filters[key].map((k: string) => k)
          ;`${key}:${keyVals.join(',')}`
          return keyVals
        }
        return key + ':' + filters[key]
      })
      .join('+')
    console.log('filterString', filterString)
    return `q=${q}+${filterString}`
  }
  async formatSearchParams(args: {
    query: string
    options?: SearchParams
    filters?: FilterOptions
  }) {
    const { query } = args
    let q: string

    if (args.filters) {
      q = this.addFilterParams(query, args.filters)
    } else {
      q = query
    }
    const params = await this.createParams({
      q,
      ...args.options,
    })
    return params
  }
  async req(args: {
    query: string
    options?: SearchParams
    filters?: FilterOptions
  }): Promise<SearchCoordinate> {
    try {
      const params = await this.formatSearchParams(args)
      const results = await this.npms.get(`/search?${params}`)
      const search = await this.mapFlags(results.data.results)
      return {
        ...results.data,
        results: search,
      }
    } catch (e) {
      console.log(e)
      return e
    }
  }

  async suggestions(args: {
    query: string
    options?: SearchParams
    filters?: FilterOptions
  }): Promise<ResultElement[]> {
    try {
      const params = await this.formatSearchParams(args)
      const results = await this.npms.get(`/search/suggestions?${params}`)
      const suggestions = await this.mapFlags(results.data)
      console.log(suggestions)
      return suggestions
    } catch (e) {
      console.log(e)
      return e
    }
  }

  async mapFlags(data: ResultElement[]): Promise<ResultElement[]> {
    return await data.map((d: ResultElement) => {
      const flags = oChain(d.flags)
      return {
        ...d,
        flags: {
          deprecated: flags.k('deprecated').getOrElse('n/a'),
          insecure: flags.k('insecure').getOrElse(false),
          unstable: flags.k('unstable').getOrElse(false),
        },
      }
    })
  }
}
