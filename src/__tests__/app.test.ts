import request from 'supertest';
import app from '../../index';

describe('GET /', () => {
  it('should return a greeting message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, TDD!' });
  });
});