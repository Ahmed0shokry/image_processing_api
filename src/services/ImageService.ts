import path from 'path'
import fs from 'fs'
import { Image } from '../utilities/Image'

function getResizedImagePath(image: Image) {
  return (
    path.resolve('./') +
    '/src/assets/images/resized/' +
    image.name +
    '_' +
    image.hieght +
    '_' +
    image.width +
    '.jpg'
  )
}

function getOriginalImagePath(imageName: string): string {
  return (
    path.resolve('./') + '/src/assets/images/original/' + imageName + '.jpg'
  )
}

function isImageExists(imagePath: string) {
  return fs.existsSync(imagePath)
}

export default {
  getResizedImagePath,
  getOriginalImagePath,
  isImageExists,
}
