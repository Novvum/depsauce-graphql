import { RequestService } from './APIClient';
import {
	FilterOptions,
	SearchParams,
	SearchCoordinate,
	PackageParams
} from './interfaces';

export class PackageModel extends RequestService {
	constructor() {
		super();
	}

	async req(name: string) {
		return await this.npms.get(`/package/${name}`);
	}

	async mget(names: string[]) {
		try {
			return await this.npms.post('/package/mget', names);
		} catch (e) {
			return e;
		}
	}
}