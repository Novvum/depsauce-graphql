import { Context } from '../utils/getContext'

export const NPMSIO = {
  async search(_, args, ctx: Context, info) {
    const search = await ctx.npms.api.search.req({
      ...args,
    })
    return search
  },
  async suggestions(_, args, ctx: Context, info) {
    const suggestions = await ctx.npms.api.search.suggestions({
      ...args,
    })
    return suggestions
  },

  async package(_, args, ctx: Context, info) {
    const pkg = await ctx.npms.api.pkg.req(args.name)
    return pkg
  },
  async packages(_, args, ctx: Context, info) {
    const pkgs = await ctx.npms.api.pkg.mget(args.names)
    return pkgs
  },
}
