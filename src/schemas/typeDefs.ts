import { gql } from 'apollo-server';

export default gql`
	scalar JSON

	scalar DateTime

	type Query {
		lib: LibrariesIO
		npm: NPMSIO
	}

	type LibrariesIO {
		getContributors(
			platform: PlatformType!
			projectName: String!
			options: PaginationOptions
		): [Contributor]
		getDependendentRepositories(
			platform: PlatformType!
			projectName: String!
			options: PaginationOptions
		): [Repository]
		getDependendents(
			platform: PlatformType!
			projectName: String!
			options: PaginationOptions
		): [Project]
		getProject(
			platform: PlatformType!
			projectName: String!
			projectVersion: String
		): Project
		getSourceRank(platform: PlatformType!, projectName: String!): ProjectUsage
		getUsage(platform: PlatformType!, projectName: String!): ProjectUsage
		search(query: String!, options: SearchOptions): [Project]
		getPlatforms(options: PaginationOptions): [Platform]
		githubRepository: GithubRepository
		githubUser: GithubUser
	}

	type NPMSIO {
		search(
			query: String!
			options: SearchParams
			filter: Filters
		): SearchCoordinate
		suggestions(
			query: String!
			options: SuggestionParams
			filter: Filters
		): [ResultElement]
		package(name: String!): PackageCoordinates
		packages(names: [String!]): [Package]
	}

	input SuggestionParams {
		size: String
	}
	# @desc A schema to represent npms.io's api

	type Popularity {
		communityInterest: Int
		dependentsCount: Int
		downloadsAcceleration: Int
		downloadsCount: Int
	}

	type Quality {
		branding: Int
		carefulness: Int
		health: Int
		tests: Int
	}

	type Maintenance {
		commitsFrequency: Int
		issuesDistribution: Int
		openIssues: Int
		releasesFrequency: Int
	}

	type Evaluation {
		maintenance: Maintenance
		popularity: Popularity
		quality: Quality
	}

	type Files {
		hasNpmIgnore: Boolean
		readmeSize: Int
		testsSize: Int
	}

	type Urls {
		content: String
		original: String
		service: String
		shields: String
	}

	type Modifiers {
		branch: String
	}

	type Info {
		modifiers: Modifiers
		service: String
		type: String
	}

	type BadgeElement {
		info: Info
		urls: Urls
	}

	type Source {
		badges: [BadgeElement]
		coverage: [Int]
		files: Files
		linters: [String]
	}

	type DownloadElement {
		count: Int
		from: String
		to: String
	}

	type Npm {
		dependentsCount: Int
		downloads: [DownloadElement]
		starsCount: Int
	}

	type ReleaseElement {
		count: Int
		from: String
		to: String
	}

	type Metadata {
		date: DateTime
		dependencies: JSON
		bundledDependencies: Boolean
		description: String
		devDependencies: JSON
		hasTestScript: Boolean
		keywords: [String]
		license: String
		links: Links
		maintainers: [MaintainerElement]
		name: String
		publisher: Publisher
		readme: String
		releases: [ReleaseElement]
		repository: Repository
		scope: String
		version: String
	}

	type StatusElement {
		context: String
		state: String
	}

	type Issues {
		count: Int
		distribution: JSON
		isDisabled: Boolean
		openCount: Int
	}

	type ContributorElement {
		commitsCount: Int
		username: String
	}

	type CommitElement {
		count: Int
		from: String
		to: String
	}

	type PackageCoordinates {
		analyzedAt: DateTime
		collected: Collected
		evaluation: Evaluation
		score: Score
	}

	type Collected {
		github: Github
		metadata: Metadata
		npm: Npm
		source: Source
	}

	type Github {
		commits: [CommitElement]
		contributors: [ContributorElement]
		forksCount: Int
		homepage: String
		issues: Issues
		starsCount: Int
		statuses: [StatusElement]
		subscribersCount: Int
	}

	input PackageParams {
		name: String
	}

	input SearchParams {
		from: String
		size: String
	}

	type SearchCoordinate {
		results: [ResultElement]
		total: Int
	}

	input Filters {
		author: String
		maintainer: String
		keywords: [String]
		not: [SearchNotType]
		is: [SearchIsType]
		boostExact: Boolean
		scoreEffect: Int
		qualityWeight: Int
		popularityWeight: Int
		maintenanceWeight: Int
	}

	enum SearchNotType {
		unstable
		insecure
	}

	enum SearchIsType {
		deprecated
		unstable
		insecure
	}

	type ResultElement {
		package: Package
		score: Score
		flags: FlagsElement
		searchScore: Float
		highlight: String
	}

	type FlagsElement {
		deprecated: String
		insecure: Boolean
		unstable: Boolean
	}

	type Package {
		author: Author
		date: DateTime
		description: String
		keywords: [String]
		links: Links
		maintainers: [MaintainerElement]
		name: String
		publisher: Publisher
		scope: String
		version: String
	}

	type Author {
		email: String
		name: String
	}

	type Links {
		bugs: String
		homepage: String
		npm: String
		repository: String
	}

	type MaintainerElement {
		email: String
		username: String
	}

	type Publisher {
		email: String
		username: String
	}

	type Score {
		detail: Detail
		final: Float
	}

	type Detail {
		maintenance: Float
		popularity: Float
		quality: Float
	}
	# @desc A schema to represent libraries.io's api

	type GithubRepository {
		getRepository(
			repositoryOwner: String!
			repositoryName: String!
			withDependencies: Boolean
		): Repository
		getProjects(
			repositoryOwner: String!
			repositoryName: String!
			options: PaginationOptions
		): [Project]
	}

	type GithubUser {
		getUser(username: String!): Contributor
		getRepositories(username: String!, options: PaginationOptions): [Repository]
		getProjects(username: String!, options: PaginationOptions): [Project]
		getContributedProjects(
			username: String!
			options: PaginationOptions
		): [Project]
		getContributedRepositories(
			username: String!
			options: PaginationOptions
		): [Repository]
		getDependencies(
			username: String!
			platform: PlatformType
			options: PaginationOptions
		): [Project]
	}

	input SearchOptions {
		page: Int
		perPage: Int
		sortBy: SortType
		filter: FilterOptions
	}

	input PaginationOptions {
		page: Int
		perPage: Int
	}

	type Subscription {
		include_prerelease: Boolean
		created_at: DateTime
		updated_at: DateTime
		project: Project
	}

	type Contributor {
		bio: String
		blog: String
		company: String
		created_at: String
		email: String
		followers: Int
		following: Int
		github_id: String
		hidden: Boolean
		host_type: String
		last_synced_at: String
		location: String
		login: String
		name: String
		updated_at: DateTime
		user_type: String
		uuid: String
	}

	type Project {
		dependent_repos_count: Int
		dependents_count: Int
		description: String
		forks: Int
		homepage: String
		keywords: [String]
		language: String
		latest_download_url: String
		latest_release_number: String
		latest_release_published_at: String
		latest_stable_release: ProjectRelease
		name: String
		normalized_licenses: [String]
		package_manager_url: String
		platform: String
		rank: Int
		repository_url: String
		stars: Int
		status: String
		versions: [ProjectVersion]
		dependencies_for_version: String
		dependencies: [ProjectDependency]
	}

	type ProjectUsage {
		version: String
		usage: Int
	}

	enum ProjectDependencyKind {
		Development
		runtime
		Optional
	}

	type ProjectDependency {
		deprecated: Boolean
		filepath: String
		kind: ProjectDependencyKind
		latest_stable: String
		latest: String
		name: String
		outdated: Boolean
		platform: PlatformType
		project_name: String
		requirements: String
	}

	type ProjectRelease {
		created_at: String
		id: Int
		number: String
		project_id: Int
		published_at: String
		runtime_dependencies_count: Int
		updated_at: DateTime
	}

	type ProjectVersion {
		published_at: String
		number: String
	}

	type Repository {
		contributions_count: Int
		created_at: String
		default_branch: String
		description: String
		fork_policy: String
		fork: Boolean
		forks_count: Int
		full_name: String
		github_contributions_count: Int
		github_id: String
		has_audit: String
		has_changelog: String
		has_coc: String
		has_contributing: String
		has_issues: Boolean
		has_license: String
		has_pages: Boolean
		has_readme: String
		has_threat_model: String
		has_wiki: Boolean
		homepage: String
		host_domain: String
		host_type: String
		keywords: [String]
		language: String
		last_synced_at: String
		license: String
		logo_url: String
		mirror_url: String
		name: String
		open_issues_count: Int
		private: Boolean
		pull_requests_enabled: String
		pushed_at: String
		rank: Int
		scm: String
		size: Int
		source_name: String
		stargazers_count: Int
		status: String
		subscribers_count: Int
		updated_at: DateTime
		uuid: String
		dependencies: [ProjectDependency]
	}

	enum SortType {
		contributions_count
		created_at
		dependent_repos_count
		dependents_count
		latest_release_published_at
		rank
		stars
	}

	input FilterOptions {
		keywords: [String]
		languages: [LanguageType]
		licenses: [String]
		platforms: [PlatformType]
	}

	type Platform {
		color: String
		default_language: String
		homepage: String
		name: String
		project_count: Int
	}

	enum PlatformType {
		alcatraz
		atom
		bower
		cargo
		carthage
		clojars
		cocoapods
		cpan
		cran
		dub
		elm
		emacs
		go
		hackage
		haxelib
		hex
		homebrew
		inqlude
		julia
		maven
		meteor
		nimble
		npm
		nuget
		packagist
		platformio
		pub
		puppet
		purescript
		pypi
		racket
		rubygems
		sublime
		swiftpm
		wordpress
	}


	enum LanguageType {
		JavaScript
		TypeScript
		Go
		PHP
		Python
		Java
		C
		Clojure
		Ruby
		Rust
		Shell
		Swift
		Elixir
		HTML
		OCaml
		Scala
		Elm
		Vue
		CoffeeScript
		Dart
		CSS
		Kotlin
		Erlang
		F
		Perl
		D
		Emacs Lisp
		Haskell
		Makefile
	}
`