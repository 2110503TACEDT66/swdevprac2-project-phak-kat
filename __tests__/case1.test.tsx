import '@testing-library/jest-dom'
import getHotels from '@/libs/getHotels'

describe('Get Hotels', () => {
  var hotelPromise: Promise<HotelJson>
  var hostelsJsonResult: HotelJson
  beforeEach(async () => {
    hotelPromise = getHotels()
    hostelsJsonResult = await hotelPromise
    console.log(hostelsJsonResult)
  })

  it('getHotels must return correct results', () => {
    const resultData = hostelsJsonResult.data
    expect(hostelsJsonResult.count).toBe(4) 
    expect(resultData).toHaveLength(4)
    const ids = ["66034790303118bdb6b19859", "66034a90444832000d483982", "66003c4d4079a0ac5ab51af7", "66034971303118bdb6b19876"]
    expect(ids).toContain(resultData[0]._id)  
  })
})
