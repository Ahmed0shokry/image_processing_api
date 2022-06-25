import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('testing the end point of image resizing', () => {
  it('if all parameters are correct expect 200', async () => {
    await request
      .get('/api/image/resize?name=cat&hieght=55&width=55')
      .expect(200)
  })
  it('if any param missed or has incorrect value expect 422', async () => {
    await request.get('/api/image/resize?hieght=55&width=55').expect(422)
  })
  it('if image name is not exist expect 404', async () => {
    await request
      .get('/api/image/resize?name=coco&hieght=55&width=55')
      .expect(404)
  })
})
