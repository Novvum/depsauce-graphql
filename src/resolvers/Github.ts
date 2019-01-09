import { Context } from '../utils/getContext'

export const GithubRepository = {
  async getRepository(_, args, ctx: Context, info) {
    if (args.withDependencies) {
      return await ctx.libs.api.github.repository
        .getRepositoryWithDependencies(
          args.repositoryOwner,
          args.repositoryName
        )
        .then((res) => res.data)
    }
    return await ctx.libs.api.github.repository
      .getRepository(args.repositoryOwner, args.repositoryName)
      .then((res) => res.data)
  },
  async getProjects(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.repository
      .getProjects(args.repositoryOwner, args.repositoryName, args.options)
      .then((res) => res.data)
  },
}

export const GithubUser = {
  async getUser(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.user
      .getUser(args.username)
      .then((res) => res.data)
  },
  async getProjects(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.user
      .getProjects(args.username, args.options)
      .then((res) => res.data)
  },
  async getRepositories(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.user
      .getRepositories(args.username, args.options)
      .then((res) => res.data)
  },
  async getContributedProjects(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.user
      .getContributedProjects(args.username, args.options)
      .then((res) => res.data)
  },
  async getContributedRepositories(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.user
      .getContributedRepositories(args.username, args.options)
      .then((res) => res.data)
  },
  async getDependencies(_, args, ctx: Context, info) {
    return await ctx.libs.api.github.user
      .getDependencies(args.username, args.platform, args.options)
      .then((res) => res.data)
  },
}
