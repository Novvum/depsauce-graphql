import { Context } from '../utils/getContext';

export const LibrariesIO = {
	async getContributors(_, args, ctx: Context, info) {
		return await ctx.libs.api.project
			.getContributors(args.platform, args.projectName, args.options)
			.then((res) => res.data);
	},
	async getDependendentRepositories(_, args, ctx: Context, info) {
		return await ctx.libs.api.project
			.getDependendentRepositories(
				args.platform,
				args.projectName,
				args.options
			)
			.then((res) => res.data);
	},
	async getDependendents(_, args, ctx: Context, info) {
		return await ctx.libs.api.project
			.getDependendents(args.platform, args.projectName, args.options)
			.then((res) => res.data);
	},
	async getProject(_, args, ctx: Context, info) {
		if (args.projectVersion) {
			return await ctx.libs.api.project
				.getProjectWithDependencies(
					args.platform,
					args.projectName,
					args.projectVersion
				)
				.then((res) => res.data);
		}
		return await ctx.libs.api.project
			.getProject(args.platform, args.projectName)
			.then((res) => res.data);
	},
	async getSourceRank(_, args, ctx: Context, info) {
		return await ctx.libs.api.project
			.getSourceRank(args.platform, args.projectName)
			.then((res) => res.data);
	},
	async getUsage(_, args, ctx: Context, info) {
		return await ctx.libs.api.project
			.getUsage(args.platform, args.projectName)
			.then((res) => res.data);
	},
	async search(_, args, ctx: Context, info) {
		return await ctx.libs.api.project
			.search(args.query, args.options)
			.then((res) => res.data);
	},
	async getPlatforms(_, args, ctx: Context, info) {
		return await ctx.libs.api.platform
			.getPlatforms(...args)
			.then((res) => res.data);
	},
	githubRepository: () => ({}),
	githubUser: () => ({})
};
