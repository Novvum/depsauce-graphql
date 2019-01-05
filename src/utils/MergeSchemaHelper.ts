import { mergeSchemas, addMockFunctionsToSchema } from 'graphql-tools'
import { IResolvers, MergeInfo, UnitOrList, IMocks } from 'graphql-tools/dist/Interfaces'
import { GraphQLNamedType, GraphQLSchema } from 'graphql';

const objectAssignDeep = require(`object-assign-deep`)

export class MergeSchemaHelper {
    schemas: Array<GraphQLSchema | string>;
    onTypeConflict?: (left: GraphQLNamedType, right: GraphQLNamedType) => GraphQLNamedType;
    resolvers?: Array<IResolvers | ((mergeInfo: MergeInfo) => IResolvers)>;
    constructor() {
        this.schemas = [];
        this.resolvers = [];
    }
    addSchema(schema: GraphQLSchema | string): void {
        this.schemas.push(schema);
    }
    addSchemas(schemas: Array<GraphQLSchema | string>): void {
        this.schemas.push(...schemas);
    }
    addResolver(resolvers: ((mergeInfo: MergeInfo) => IResolvers) | IResolvers): void {
        this.resolvers.push(resolvers);
    }
    addResolvers(resolvers: Array<((mergeInfo: MergeInfo) => IResolvers) | IResolvers>): void {
        this.resolvers.push(...resolvers);
    }
    getSchema(): GraphQLSchema {
        return mergeSchemas({
            schemas: this.schemas,
            resolvers: this.resolvers,
        })
    }
    getMockedSchema(mocks: IMocks): GraphQLSchema {
        const mockedSchema = this.getSchema();
        addMockFunctionsToSchema({
            schema: mockedSchema,
            mocks,
        })
        return mockedSchema;
    }
}

export { GraphQLSchema }
