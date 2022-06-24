import { Request } from 'express'

export class Image {
  name = ''
  width = 0
  hieght = 0

  constructor(req: Request) {
    this.name = req.query.name as string
    this.hieght = parseInt(req.query.hieght as string)
    this.width = parseInt(req.query.width as string)
  }
}
