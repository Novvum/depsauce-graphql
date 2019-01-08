import { ApolloServer } from 'apollo-server';
import { schema } from './resolvers';
import { LibrariesIO } from './models/LibrariesIOModel';
import { NpmsApiModel } from './models/NPMsAPIModel';

const server = new ApolloServer({
	schema,
	context: (req) => ({
		...req,
		libs: new LibrariesIO(process.env.PRISMA_LIBIO_KEY),
		npms: new NpmsApiModel()
	}),
	engine: {
		apiKey: 'service:graphql-directory-7184:hV9MEAbFVyJMOFdI-bCbGA'
	}
});
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
