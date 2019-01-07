export interface LinksSchema {
	bugs: string;
	homepage: string;
	npm: string;
	repository: string;
}

export interface MaintainerElement {
	email: string;
	username: string;
}

export interface PublisherSchema {
	email: string;
	username: string;
}

export interface ScoreSchema {
	detail: DetailSchema;
	final: number;
}

export interface DetailSchema {
	maintenance: number;
	popularity: number;
	quality: number;
}
