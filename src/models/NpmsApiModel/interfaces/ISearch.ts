import {
	ScoreSchema,
	LinksSchema,
	PublisherSchema,
	MaintainerElement
} from './ICommon';

export interface SearchParams {
	from?: string;
	size?: string;
}

export interface SearchCoordinate {
	results?: ResultElement[];
	total?: number;
}

export interface FilterOptions {
	author?: string;
	maintainer?: string;
	keywords?: string[];
	not?: SearchNotType[];
	is?: SearchIsType[];
	'boost-exact'?: boolean;
	'score-effect'?: number;
	'quality-weight'?: number;
	'popularity-weight'?: number;
	'maintenance-weight'?: number;
}

export enum SearchNotType {
	'unstable',
	'insecure'
}

export enum SearchIsType {
	'deprecated',
	'unstable',
	'insecure'
}

export interface ResultElement {
	package: PackageSchema;
	score: ScoreSchema;

	flags?: FlagsElement;
	searchScore: number;
}

export interface FlagsElement {
	deprecated?: string;
	insecure?: any;
	unstable?: any;
}

export interface PackageSchema {
	author: AuthorSchema;
	date: string;
	description: string;
	keywords: string[];
	links: LinksSchema;
	maintainers: MaintainerElement[];
	name: string;
	publisher: PublisherSchema;
	scope: string;
	version: string;
}

export interface AuthorSchema {
	email: string;
	name: string;
}
