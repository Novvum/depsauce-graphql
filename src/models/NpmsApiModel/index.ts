import { SearchModel } from './SearchModel';
import { PackageModel } from './PackageModel';

export class NpmsApiModel {
	public readonly api;

	constructor() {
		this.api = {
			search: new SearchModel(),
			pkg: new PackageModel()
		};
	}
}
