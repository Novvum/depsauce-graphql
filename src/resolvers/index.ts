import { Query } from './Query'
import { makeExecutableSchema } from 'graphql-tools'
import GraphQLJSON from 'graphql-type-json'
import { NPMSIO } from './NPMSIO'
import { LibrariesIO } from './LibrariesIO'
import { GithubRepository, GithubUser } from './Github'
import typeDefs from '../schemas/typeDefs';

const resolvers: any = {
  Query,
  LibrariesIO,
  NPMSIO,
  GithubRepository,
  GithubUser,
  JSON: GraphQLJSON,
}

export const schema: any = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  } as any,
})