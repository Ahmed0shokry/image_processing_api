import { Request, Response, NextFunction } from 'express'
import imageService from '../services/ImageService'

function validate(req: Request, res: Response, next: NextFunction): void {
  if (isParametersExist(req)) {
    if (
      imageService.isImageExists(
        imageService.getOriginalImagePath(req.query.name as string)
      )
    ) {
      next()
    } else {
      res.status(404).send('image not found')
    }
  } else {
    res.status(422).send('check your params again')
  }
}

function isParametersExist(req: Request): unknown | boolean {
  return (
    req.query.name &&
    req.query.width &&
    req.query.hieght &&
    !isNaN(Number(req.query.width)) &&
    !isNaN(Number(req.query.hieght))
  )
}

export default {
  validate,
}
