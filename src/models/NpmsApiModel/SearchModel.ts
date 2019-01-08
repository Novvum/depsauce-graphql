import { RequestService } from './APIClient';
import { FilterOptions, SearchParams, SearchCoordinate } from './interfaces';

export class SearchModel extends RequestService {
	constructor() {
		super();
	}
	addFilterParams(q: string, filters: FilterOptions) {
		const filterString: string = Object.keys(filters)
			.map((key) => {
				if (filters[key] instanceof Array) {
					const keyVals = filters[key].map((k: string) => k);
					`${key}:${keyVals.join(',')}`;
					return keyVals;
				}
				return key + ':' + filters[key];
			})
			.join('+');
		console.log('filterString', filterString);
		return `q=${q}+${filterString}`;
	}
	async formatSearchParams(args: {
		query: string;
		options?: SearchParams;
		filters?: FilterOptions;
	}) {
		const { query } = args;
		let q: string;

		if (args.filters) {
			q = this.addFilterParams(query, args.filters);
		} else {
			q = query;
		}
		const searchParams = {
			...args.options,
			q
		};
		const params = await this.createParams({
			...searchParams
		});
		return params;
	}
	async req(args: {
		query: string;
		options?: SearchParams;
		filters?: FilterOptions;
	}): Promise<SearchCoordinate> {
		try {
			const params = this.formatSearchParams(args);
			return await this.npms.get(`/search?${params}`);
		} catch (e) {
			return e;
		}
	}

	async suggestions(args: {
		query: string;
		options?: SearchParams;
		filters?: FilterOptions;
	}) {
		try {
			const params = this.formatSearchParams(args);
			return await this.npms.get(`/search/suggestions?${params}`);
		} catch (e) {
			return e;
		}
	}
}
