import '@testing-library/jest-dom'
import getHotel from '@/libs/getHotel'

describe('Get Hotel by ID', () => {
  var hotelByIdPromise:Promise<Object>
  var hotelJsonResult:Object
  beforeEach(async () => {
    hotelByIdPromise = getHotel('66034a90444832000d483982')
    hotelJsonResult = await hotelByIdPromise
  })

  it('getHotel must return correct result', () => {
    const resultData = hotelJsonResult.data
    expect(resultData.name).toMatch(/Sunset is good/i) 
  })
})