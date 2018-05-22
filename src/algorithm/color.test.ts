import { determineCandleColor } from './color'
import { MovableRange } from './range';
import { CandleStickData } from '../chart/data-structure';

const data = [
  {
    "time": "2017-9-27 0:0:0",
    "open": 7,
    "high": 7,
    "low": 7,
    "close": 7,
    "volume": 9727281,
    "amount": 70035488
  },
  {
    "time": "2017-9-28 0:0:0",
    "open": 7.199999809265137,
    "high": 7.199999809265137,
    "low": 7.199999809265137,
    "close": 7.199999809265137,
    "volume": 14950276,
    "amount": 108804280
  },
  {
    "time": "2017-10-9 0:0:0",
    "open": 7.1,
    "high": 7.1,
    "low": 7.1,
    "close": 7.1,
    "volume": 27332564,
    "amount": 203059104
  },
  {
    "time": "2017-10-10 0:0:0",
    "open": 7.529999732971191,
    "high": 7.789999961853027,
    "low": 7.440000057220459,
    "close": 7.630000114440918,
    "volume": 40204836,
    "amount": 308382144,
    "ma5": 7.392000007629394
  },
  {
    "time": "2017-10-10 0:0:0",
    "open": 7.630000114440918,
    "high": 7.789999961853027,
    "low": 7.440000057220459,
    "close": 7.529999732971191,
    "volume": 40204836,
    "amount": 308382144,
    "ma5": 7.392000007629394
  }
]
let range: MovableRange<CandleStickData>

beforeEach(() => {
  range = new MovableRange(
    data,
    100
  )
})

describe('close price is not the same as open price', () => {
  test('Should be less than 0 when close < open', () => {
    expect(determineCandleColor(
      range.data[range.data.length - 1],
      range.data.length - 1,
      range
    )).toBeLessThan(0)
  })
  test('Should be greater than 0 when close > open', () => {
    expect(determineCandleColor(
      range.data[range.data.length - 2],
      range.data.length - 2,
      range
    )).toBeGreaterThan(0)
  })
})

describe('close price is the same as open price', () => {
  test('Should be less tran 0 when today close < yesterday close', () => {
    expect(determineCandleColor(
      range.data[range.data.length - 3],
      range.data.length - 3,
      range
    )).toBeLessThan(0)
  })
  test('Should greater than 0 when today close > yesterday close', () => {
    expect(determineCandleColor(
      range.data[range.data.length - 4],
      range.data.length - 4,
      range
    )).toBeGreaterThan(0)
  })
  test('Should greater than 0 when current index is the first item', () => {
    expect(determineCandleColor(
      range.data[0],
      0,
      range
    )).toBeGreaterThan(0)
  })
})
