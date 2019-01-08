import {
	ScoreSchema,
	LinksSchema,
	PublisherSchema,
	MaintainerElement
} from './ICommon';

export interface PackageParams {
	name?: string;
}
export interface PackageCoordinate {
	analyzedAt?: string;
	collected?: CollectedSchema;
	evaluation?: EvaluationSchema;
	score?: ScoreSchema;
}

export interface CollectedSchema {
	github: GithubSchema;
	metadata: MetadataSchema;
	npm: NpmSchema;
	source: SourceSchema;
}

export interface GithubSchema {
	commits: CommitElement[];
	contributors: ContributorElement[];
	forksCount: number;
	homepage: string;
	issues: IssuesSchema;
	starsCount: number;
	statuses: StatusElement[];
	subscribersCount: number;
}

export interface CommitElement {
	count: number;
	from: string;
	to: string;
}

export interface ContributorElement {
	commitsCount: number;
	username: string;
}

export interface IssuesSchema {
	count: number;
	distribution: DistributionSchema;
	isDisabled: boolean;
	openCount: number;
}

export interface DistributionSchema {
	[version: string]: number;
}

export interface StatusElement {
	context: string;
	state: string;
}

export interface MetadataSchema {
	date: string;
	dependencies: DependenciesSchema;
	description: string;
	devDependencies: DevdependenciesSchema;
	hasTestScript: boolean;
	keywords: string[];
	license: string;
	links: LinksSchema;
	maintainers: MaintainerElement[];
	name: string;
	publisher: PublisherSchema;
	readme: string;
	releases: ReleaseElement[];
	repository: RepositorySchema;
	scope: string;
	version: string;
}

export interface DependenciesSchema {
	iterall: string;
}

export interface DevdependenciesSchema {
	babelCLI: string;
	babelCore: string;
	babelPluginProposalClassProperties: string;
	babelPluginProposalObjectRESTSpread: string;
	babelPluginSyntaxAsyncGenerators: string;
	babelPluginTransformClasses: string;
	babelPluginTransformDestructuring: string;
	babelPluginTransformFlowStripTypes: string;
	babelPluginTransformSpread: string;
	babelPolyfill: string;
	babelPresetEnv: string;
	babelRegister: string;
	babelEslint: string;
	beautifyBenchmark: string;
	benchmark: string;
	chai: string;
	coveralls: string;
	eslint: string;
	eslintPluginFlowtype: string;
	eslintPluginPrettier: string;
	flowBin: string;
	mocha: string;
	nyc: string;
	prettier: string;
	sane: string;
}

export interface ReleaseElement {
	count: number;
	from: string;
	to: string;
}

export interface RepositorySchema {
	type: string;
	url: string;
}

export interface NpmSchema {
	dependentsCount: number;
	downloads: DownloadElement[];
	starsCount: number;
}

export interface DownloadElement {
	count: number;
	from: string;
	to: string;
}

export interface SourceSchema {
	badges: BadgeElement[];
	coverage: number;
	files: FilesSchema;
	linters: string[];
}

export interface BadgeElement {
	info: InfoSchema;
	urls: UrlsSchema;
}

export interface InfoSchema {
	modifiers: ModifiersSchema;
	service: string;
	type: string;
}

export interface ModifiersSchema {
	branch: string;
}

export interface UrlsSchema {
	content: string;
	original: string;
	service: string;
	shields: string;
}

export interface FilesSchema {
	hasNpmIgnore: boolean;
	readmeSize: number;
	testsSize: number;
}

export interface EvaluationSchema {
	maintenance: MaintenanceSchema;
	popularity: PopularitySchema;
	quality: QualitySchema;
}

export interface MaintenanceSchema {
	commitsFrequency: number;
	issuesDistribution: number;
	openIssues: number;
	releasesFrequency: number;
}

export interface PopularitySchema {
	communityInterest: number;
	dependentsCount: number;
	downloadsAcceleration: number;
	downloadsCount: number;
}

export interface QualitySchema {
	branding: number;
	carefulness: number;
	health: number;
	tests: number;
}
