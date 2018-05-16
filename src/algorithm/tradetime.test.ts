import { TradeTime } from './tradetime';

const A_STOCK_TRADE_TIMES = [
  {
      "open": 90,
      "close": 210
  },
  {
      "open": 300,
      "close": 421
  }
]
let tradeTime: TradeTime

beforeEach(() => {
  tradeTime = new TradeTime(A_STOCK_TRADE_TIMES)
})

test('Should create TradeTime without exception', () => {
  expect(() => {
    new TradeTime(A_STOCK_TRADE_TIMES)
  })
    .not.toThrow()
})

describe('TradeTime#getMinute', () => {
  test('basic', () => {
    expect(tradeTime.getMinute(0)).toBe(90)
    expect(tradeTime.getMinute(1)).toBe(91)
    expect(tradeTime.getMinute(119)).toBe(209) // Beijing time 11: 29
    expect(tradeTime.getMinute(120)).toBe(300) // Beijing time 13: 00
    expect(tradeTime.getMinute(239)).toBe(419) // Beijing time 14:59
    expect(tradeTime.getMinute(240)).toBe(420) // Beijing time 15:00
  })
  test('exception', () => {
    expect(() => {
      tradeTime.getMinute(-1)
    }).toThrow('parameter fromIndex expect to be greater than 0')
    expect(() => {
      tradeTime.getMinute(241)
    }).toThrow('data index not in trade time')
  })
})

describe('TradeTime#isTrading', () => {
  test('Should return correct trade status', () => {
    expect(tradeTime.isTrading(0)).toBeFalsy()
    expect(tradeTime.isTrading(90)).toBeTruthy()
    expect(tradeTime.isTrading(210)).toBeFalsy()
    expect(tradeTime.isTrading(300)).toBeTruthy()
    expect(tradeTime.isTrading(420)).toBeTruthy()
    expect(tradeTime.isTrading(421)).toBeFalsy()
  })
})

describe('TradeTime#totalMinitues', () => {
  test('Should return correct total minutes', () => {
    expect(tradeTime.totalMinutes()).toBe(241)
  })
})