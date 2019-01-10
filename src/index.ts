import { ApolloServer } from 'apollo-server'
import { schema } from './resolvers'
import { LibrariesIO } from './models/LibrariesIOModel'
import { NpmsApiModel } from './models/NpmsApiModel'

const server = new ApolloServer({
  schema,
  context: (req) => ({
    ...req,
    libs: new LibrariesIO(process.env.DEPSAUCE_LIBIO_KEY),
    npms: new NpmsApiModel(),
  }),
  tracing: process.env.DEPSAUCE_APP_STAGE === 'production' ? false : true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    schemaTag: process.env.ENGINE_SCHEMA_TAG,
  },
})
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
