import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('testing the end point of image resizing', () => {
  it('if all parameters are correct expect 200', async () => {
    await request
      .get('/api/image/resize?name=cat&hieght=55&width=55')
      .expect(200)
  })
})
