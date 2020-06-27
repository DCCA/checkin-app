import request from 'supertest';
import app from './app';

it('fails when the response is not 404', async () => {
  await request(app).get('/fake/url').expect(404);
});
