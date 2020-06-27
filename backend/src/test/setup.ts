import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { Collection } from 'mongoose';
import app from '../app';
import request from 'supertest';

// Create mongoDB for tests
let mongo: any;
// Set up - BeforeAll tests start running
beforeAll(async () => {
  //   Set up the secret key
  process.env.JWT_KEY = 'asdf';
  //   Start the mongoDB for tests
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Set up - BeforeEach test start running
beforeEach(async () => {
  // Reset the dataBase
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

// Run after all tests
afterAll(async () => {
  // Close DB
  await mongo.stop();
  await mongoose.connection.close();
});
