import express, { response, Response } from 'express'
import morgan from 'morgan'
import * as env from 'dotenv'
import imageService from './services/ImageService'
import imageValidator from './middlewares/ImageValidator'
import convertorService from './services/ConvertorService'

function getPort() {
  env.config()
  return process.env.PORT || 3000
}

const PORT = getPort()
const app = express()

//use libs
app.use(morgan('dev'))

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ message: 'welcome to our image processing project ^_^' })
})

app.get(
  '/api/image/resize',
  imageValidator.validate,
  (req: express.Request, res: express.Response) => {
    return convertorService.resize(req, res)

    // res.json({
    //   message: 'it resized ^_^ ',
    //   file: imageService.isImageExists(imageService.getOriginalImagePath('cat'))
    // })
  }
)

app.listen(PORT, () => {
  console.log('welcome to our app entry point')
})
export default {
  app,
}
