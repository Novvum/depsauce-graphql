import { ApolloServer } from 'apollo-server'
import { schema } from './resolvers'
import { LibrariesIO } from './models/LibrariesIOModel'

const server = new ApolloServer({
  schema,
  context: req => ({
    ...req,
    libs: new LibrariesIO('24f103aa26ca1bf89661c060b0bdb1d9'), //(process.env.PRISMA_LIBIO_KEY)
  }),
  engine: {
    apiKey: 'service:graphql-directory-7184:hV9MEAbFVyJMOFdI-bCbGA',
  },
})
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
