import express, { Request, Response } from 'express'
import morgan from 'morgan'
import * as env from 'dotenv'
import imageValidator from './middlewares/ImageValidator'
import convertorService from './services/ConvertorService'

function getPort() {
  env.config()
  return process.env.PORT || 3030
}

const PORT = getPort()
const app = express()

//use libs
app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'welcome to our image processing project ^_^' })
})

app.get(
  '/api/image/resize',
  imageValidator.validate,
  (req: Request, res: Response): Promise<unknown> => {
    return convertorService.resize(req, res)
  }
)

app.listen(PORT, () => {
  console.log('welcome to our app entry point')
})
export default app
