import uniq from 'lodash.uniq'
import { Chart, autoResetStyle, YAxisDetail } from "./chart";
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { Rect } from "../graphic/primitive";
import { ChartTitle } from "./chart-title";
import { drawYAxis, drawXAxis } from "../paint-utils/index";
import { divide } from "../algorithm/divide";
import { TITLE_MARGIN_BOTTOM } from '../constants/constants';
import { Drawer } from './drawer';
import { MovableRange } from '../algorithm/range';
import { VolumeData, CandleStickData, TimeShareData } from './data-structure';
import { determineCandleColor } from '../algorithm/color';

export const VolumeWhiteTheme = {
  rise: '#F55559',
  fall: '#7DCE8D',
  same: '#5E6572',
  volumeText: '#F78081',
  titleBackground: '#F2F4F4',
  title: '#5E667F',
  gridLine: '#E7EAEB',
  yTick: '#5E667F'
}
export const VolumeBlackTheme = {
  rise: '#F55559',
  fall: '#7DCE8D',
  same: '#5E6572',
  volumeText: '#F78081',
  titleBackground: '#22252B',
  title: '#AEB4BE',
  gridLine: '#282D38',
  yTick: '#AEB4BE'
}

const shortenVolume = (v: number) => {
  const scaleV = v / VolumeDrawer.proportion
  if (scaleV > 10000) {
    return (scaleV / 10000).toFixed(2)
  }
  return scaleV.toFixed(2)
}
const volumeLabel = (v: number) => {
  const scaleV = v / VolumeDrawer.proportion
  if (scaleV > 10000) {
    return `VOL: ${(scaleV / 10000).toFixed(2)}万`
  }
  return `VOL: ${scaleV.toFixed(2)}`
}
/**
 * Volume chart drawer
 */
export class VolumeDrawer extends Drawer {
  static theme = VolumeWhiteTheme
  static proportion = 100
  static unit = '手'
  titleDrawer: ChartTitle
  protected range: MovableRange<VolumeData>
  constructor(chart: Chart) {
    super(chart)
    this.xAxisTickHeight = 0
    this.context = chart.context
    this.titleDrawer = new ChartTitle(
      this.context,
      '成交量', [
        {
          x: 60,
          label: volumeLabel(0),
          color: VolumeDrawer.theme.volumeText
        }
      ],
      VolumeDrawer.theme.titleBackground,
      VolumeDrawer.theme.title,
      this.chart.options.resolution
    )
  }
  public resize(frame: Rect): void {
    super.resize(frame)
    this.resetYScale()
  }
  public draw() {
    const data = this.range.visible()
    this.drawAxes()
    this.drawTitle(this.selectedIndex || data.length - 1)
    this.drawVolumes()
  }
  public setRange(range: MovableRange<VolumeData>) {
    super.setRange(range)
    const data = this.range.visible()
    if (data.length > 0) {
      this.maxValue = max(data, d => d.volume)
    } else {
      this.maxValue = 1000 * VolumeDrawer.proportion
    }
    this.resetYScale()
  }
  public getYAxisDetail(y: number): YAxisDetail {
    return {
      left: shortenVolume(this.yScale.invert(y))
    }
  }
  private drawTitle(i: number) {
    const data = this.range.visible()
    const d = data[i]
    this.titleDrawer.setLabel(0, volumeLabel(d ? data[i].volume : 0))
    this.titleDrawer.draw({
      ...this.frame,
      height: this.titleHeight
    })
  }
  protected drawXAxis() {
    const tickValues = divide(0, this.chart.count() - 1, 5)
    drawXAxis(
      this.context,
      tickValues,
      this.chartFrame,
      this.chart.xScale,
      this.chart.options.resolution,
      false,
      VolumeDrawer.theme.gridLine
    )
  }
  protected drawAxes() {
    this.drawXAxis()
    this.drawYAxis()
  }
  protected drawYAxis() {
    const tickValues = uniq(divide(0, this.maxValue, 3)).map(n => ({ value: Math.round(n), color: VolumeDrawer.theme.yTick }));
    tickValues.shift() // remove first item, 0 volume
    const maxTickValue =
      max(tickValues, d => d.value) / VolumeDrawer.proportion
    const useWUnit = maxTickValue > 10000
    drawYAxis(
      this.context,
      tickValues,
      this.frame,
      this.yScale,
      this.chart.options.resolution,
      true,
      VolumeDrawer.theme.gridLine,
      (v, i) => {
        // const scaledV = v / VolumeDrawer.proportion
        let r = shortenVolume(v)
        if (useWUnit && i === tickValues.length - 1) {
          r =  `${r}万${VolumeDrawer.unit}`
        }
        return r
      }
    )
  }
  @autoResetStyle()
  protected drawVolumes() {
    const {  } = this
    const { xScale } = this.chart
    const { context: ctx, yScale, chartFrame, range } = this
    const data = range.visible()
    data.forEach((d, i) => {
      const deltaPrice = this.calcDeltaPrice(d, i, data)
      if (deltaPrice > 0) {
        ctx.fillStyle = VolumeDrawer.theme.rise
      } else if (deltaPrice < 0) {
        ctx.fillStyle = VolumeDrawer.theme.fall
      } else {
        ctx.fillStyle = VolumeDrawer.theme.same
      }
      const x = xScale(i),
            y = yScale(d.volume),
            height = chartFrame.height - (y - chartFrame.y)
      let width = xScale(1) - xScale(0)
      width -= width * 0.2
      ctx.fillRect(x - width / 2, y, width, height)
    });
  }
  protected resetYScale() {
    const { chartFrame } = this;
    this.yScale = scaleLinear()
      .domain([0, this.maxValue])
      .range([
        chartFrame.y + chartFrame.height,
        chartFrame.y + TITLE_MARGIN_BOTTOM * this.chart.options.resolution
      ])
  }
  calcDeltaPrice(currentValue: Object, currentIndex: number, data: Object[]): number {
    return 1
  }
}
export class TimeShareVolumeDrawer extends VolumeDrawer {
  calcDeltaPrice(currentValue: TimeShareData, currentIndex: number, data: TimeShareData[]): number {
    if (currentIndex === 0) {
      return 1
    }
    return currentValue.price - data[currentIndex - 1].price
  }
}
export class CandleStickVolumeDrawer extends VolumeDrawer {
  protected range: MovableRange<CandleStickData>
  calcDeltaPrice(currentValue: CandleStickData, currentIndex: number): number {
    const range = this.range
    return determineCandleColor(currentValue, currentIndex, range)
  }
}