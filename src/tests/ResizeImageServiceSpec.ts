import { resizeImage } from '../services/ResizeService'
import imageService from '../services/ImageService'
import { Image } from '../utilities/Image'

describe('tesitng resize service process', () => {
  let image: Image
  let newPath: string
  beforeEach(() => {
    image = new Image('cat', 500, 400)
    newPath = imageService.getResizedImagePath(image)
  })
  it('return full path of resize image if everything is good', async () => {
    expect(await resizeImage(image)).toEqual(newPath)
  })
  it('return empty path if anything goes wrong', async () => {
    image.name = 'any wrong name'
    expect(await resizeImage(image)).toEqual('')
  })
})
