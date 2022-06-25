import { Request, Response } from 'express'
import imageService from './ImageService'
import { Image } from '../utilities/Image'
import fs from 'fs'
import { resizeImage } from './ResizeService'

async function resize(req: Request, res: Response): Promise<unknown> {
  const image = createImageObject(req)

  if (!isImageAlreadyResized(image)) {
    await resizeImage(image)
  }
  return showImage(image, res)
}

function createImageObject(req: Request): Image {
  const name = req.query.name as string
  const hieght = parseInt(req.query.hieght as string)
  const width = parseInt(req.query.width as string)
  return new Image(name, hieght, width)
}

function isImageAlreadyResized(image: Image): boolean {
  return imageService.isImageExists(imageService.getResizedImagePath(image))
}

function showImage(image: Image, res: Response): Response {
  res.setHeader('content-type', 'image/jpeg')
  return res
    .status(200)
    .send(getImageFile(imageService.getResizedImagePath(image)))
}

function getImageFile(path: string): object {
  const image = fs.readFileSync(path)
  return Buffer.from(image)
}

export default {
  resize,
  showImage,
  getImageFile,
  isImageAlreadyResized,
}
