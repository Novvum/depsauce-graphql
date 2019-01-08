import { Context } from '../utils/getContext';

export const NPMSIO = {
	async search(_, args, ctx: Context, info) {
		const search = await ctx.npms.api.search.req({
			...args
		});
		return search.data;
	},
	async suggestions(_, args, ctx: Context, info) {
		const suggestions = await ctx.npms.api.search.suggestions({
			...args
		});
		return suggestions.data;
	},

	async package(_, args, ctx: Context, info) {
		const pkg = await ctx.npms.api.pkg.req(args.name);
		return pkg.data;
	},
	async packages(_, args, ctx: Context, info) {
		const pkgs = await ctx.npms.api.pkg.mget(args.names);
		const keys = Object.values(pkgs.data);
		return keys.map((key: any) => pkgs.data[key]);
	}
};
