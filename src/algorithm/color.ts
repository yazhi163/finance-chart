import { CandleStickData } from '../chart/data-structure'
import { MovableRange } from './range';

export function determineCandleColor(current: CandleStickData, currentIndex: number, range: MovableRange<CandleStickData>) {
  if (current.close > current.open) {
    return 1
  } else if (current.close < current.open) {
    return -1
  } else {
    const yesterday = range.data[range.visibleStartIndex() + currentIndex - 1]
    if (yesterday) {
      return current.close >= yesterday.close ? 1 : -1
    } else {
      return 1
    }
  }
}