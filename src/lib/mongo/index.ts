import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGO_URI as string
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

const globalWithMongo = global as typeof globalThis & {
  _mongoClient?: MongoClient
}

if (!globalWithMongo._mongoClient) {
  globalWithMongo._mongoClient = new MongoClient(uri, options)
}
const client = globalWithMongo._mongoClient

export default client