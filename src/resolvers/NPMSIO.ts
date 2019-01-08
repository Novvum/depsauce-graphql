import { Context } from '../utils/getContext';

export const NPMSIO = {
	async search(_, args, ctx: Context, info) {
		const search = await ctx.npms.api.search.req({
			...args
		});
		console.log(search.data.results);
		return search.data;
	}
};
