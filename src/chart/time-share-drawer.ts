import uniq from 'lodash.uniq'
import { Chart, autoResetStyle, Drawer, YAxisDetail } from "./chart"
import { ScaleLinear } from "../../node_modules/@types/d3-scale/index"
import { area } from 'd3-shape'
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale'
import { drawLine, drawYAxis, drawXAxis } from "../paint-utils/index";
import { Rect, Point } from "../graphic/primitive";
import { ChartTitle } from "./chart-title";
import { divide } from "../algorithm/divide";
import { formateDate } from "../algorithm/date";
import { TITLE_HEIGHT, X_AXIS_HEIGHT } from '../constants/constants';

export const TimeShareWhiteTheme = {
  price: '#4B99FB',
  rise: '#F55559',
  fall: '#7DCE8D',
  same: '#7DCE8D',
  linearGradient: [
    'rgba(75, 153, 251, 0.4)',
    'rgba(75, 153, 251, 0)'
  ],
  avg: '#F89D37',
  titleBackground: '#F2F4F4',
  gridLine: '#E7EAEB',
  xTick: '#5E667F'
}
export const TimeShareBlackTheme = {
  price: '#4B99FB',
  rise: '#F55559',
  fall: '#7DCE8D',
  same: '#7DCE8D',
  linearGradient: [
    'rgba(75, 153, 251, 0.4)',
    'rgba(75, 153, 251, 0)'
  ],
  avg: '#F89D37',
  titleBackground: '#22252B',
  gridLine: '#282D38',
  xTick: '#AEB4BE'
}

export interface TimeShareData {
  price: number;
  avg: number;
  time: number;
}

export class TimeShareDrawer extends Drawer {
  static theme = TimeShareWhiteTheme
  titleDrawer: ChartTitle
  protected data: TimeShareData[]
  constructor(chart: Chart, data: TimeShareData[] = []) {
    super(chart, data)
    this.xTickFormatter = this.xTickFormatter.bind(this)
    this.context = chart.context
    this.titleDrawer = new ChartTitle(
      this.context,
      null, [
        {
          x: 5 * this.chart.options.resolution,
          label: '分时走势',
          color: TimeShareDrawer.theme.price
        },
        {
          x: 50 + 5 * this.chart.options.resolution,
          label: '均线',
          color: TimeShareDrawer.theme.avg
        }
      ],
      TimeShareDrawer.theme.titleBackground,
      'white',
      this.chart.options.resolution
    );
    this.setData(data)
  }
  public setData(data: TimeShareData[]) {
    this.data = data;
    const merge = [...data.map(d => d.price), ...data.map(d => d.avg)]
    this.minValue = min(merge)
    this.maxValue = max(merge)
    this.resetYScale()
  }
  public draw(){
    if (this.data && this.data.length > 0) {
      const { frame } = this;
      this.drawAxes();
      this.titleDrawer.draw({
        ...frame,
        height: this.titleHeight
      })
      this.drawTimeShare()
    }
  }
  @autoResetStyle()
  public drawFrontSight() {
    const { context: ctx, yScale, data } = this
    const { xScale } = this.chart
    const selectedIndex = this.selectedIndex
    const x = xScale(selectedIndex)
    const size = 5 * this.chart.options.resolution
    ctx.beginPath()
    ctx.arc(x, yScale(data[selectedIndex].price), size, 0, Math.PI * 2)
    ctx.fillStyle = TimeShareDrawer.theme.price
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x, yScale(data[selectedIndex].avg), size, 0, Math.PI * 2)
    ctx.fillStyle = TimeShareDrawer.theme.avg
    ctx.fill()
  }
  public resize(frame: Rect) {
    super.resize(frame)
    this.resetYScale()
  }
  public getYAxisDetail(y: number): YAxisDetail {
    const value = this.yScale.invert(y)
    return {
      left: value.toFixed(2),
      right: this.deltaInPercentage(value)
    }
  }
  public getXAxisDetail(i: number): string {
    return this.xTickFormatter(i)
  }
  protected xTickFormatter(value: number, i?: number) {
    const d = new Date()
    const data = this.data[value]
    if (data) {
      d.setTime(data.time * 60 * 1000)
      return formateDate(d, 'HH:mm')
    } else {
      return ''
    }
  }
  protected drawYAxis() {
    const lastPrice = this.chart.lastPrice
    const tickValues = divide(this.bottomValue(), this.topValue()).map(n => ({
        value: n,
        color: n > lastPrice ? TimeShareDrawer.theme.rise : TimeShareDrawer.theme.fall
    }));
    drawYAxis(
      this.context,
      tickValues,
      this.frame,
      this.yScale,
      this.chart.options.resolution,
      true,
      TimeShareDrawer.theme.gridLine,
    )
    drawYAxis(
      this.context,
      tickValues,
      this.frame,
      this.yScale,
      this.chart.options.resolution,
      false,
      TimeShareDrawer.theme.gridLine,
      (v) => this.deltaInPercentage(v),
      'right'
    )
  }
  protected deltaInPercentage(value: number): string {
    const lastPrice = this.chart.lastPrice
    return `${((value - lastPrice) / lastPrice * 100).toFixed(2)}%`
  }
  protected drawXAxis() {
    let tickValues = uniq(divide(0, this.chart.options.count - 1, 5)
      .map(t => Math.floor(t)))
    drawXAxis(
      this.context,
      tickValues,
      this.chartFrame,
      this.chart.xScale,
      this.chart.options.resolution,
      true,
      TimeShareDrawer.theme.gridLine,
      this.xTickFormatter,
      TimeShareDrawer.theme.xTick
    )
  }
  protected drawAxes() {
    this.drawXAxis()
    this.drawYAxis()
  }
  @autoResetStyle()
  protected drawTimeShare() {
    const { frame } = this
    const { xScale } = this.chart
    const { context: ctx, yScale } = this
    const drawArea = area<TimeShareData>()
      .x((d, i) => xScale(i))
      .y0(d => yScale(d.price))
      .y1(frame.height - this.xAxisTickHeight)
      .context(ctx)
    ctx.beginPath()
    drawArea(this.data)
    const linearGradient = ctx.createLinearGradient(0, 0, 0, frame.height)
    TimeShareDrawer.theme.linearGradient.forEach((color, i) =>
      linearGradient.addColorStop(i, color))
    ctx.fillStyle = linearGradient
    ctx.fill()
    this.drawLine('price', TimeShareDrawer.theme.price)
    this.drawLine('avg', TimeShareDrawer.theme.avg)
  }
  @autoResetStyle()
  protected drawLine(key: keyof TimeShareData, color = 'black') {
    const { yScale, context: ctx } = this
    const { xScale } = this.chart
    drawLine(
      ctx,
      this.data.map((item, i) => ({
        x: xScale(i),
        y: yScale(item[key]),
      })),
      color
    )
  }
}