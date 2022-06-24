import { Image } from '../utilities/Image'
import imageService from './ImageService'
import sharp from 'sharp'

export async function resizeImage(image: Image): Promise<string> {
  const imagePath: string = imageService.getOriginalImagePath(image.name)
  const newPath: string = imageService.getResizedImagePath(image)
  try {
    await sharp(imagePath).resize(image.width, image.hieght).toFile(newPath)
    return newPath
  } catch (e) {
    console.log('error in resize operation =>', e)
    return ''
  }
}
