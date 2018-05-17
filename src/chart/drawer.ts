import { Rect } from "../graphic/primitive";
import { ScaleLinear, scaleLinear } from 'd3-scale'
import { X_AXIS_HEIGHT, TITLE_HEIGHT, TITLE_MARGIN_BOTTOM } from "../constants/constants";
import { Chart, YAxisDetail } from "./chart";
import { TradeTime } from "../index";

export class Drawer {
  context: CanvasRenderingContext2D
  frame: Rect = { x: 0, y: 0, width: 0, height: 0}
  chartFrame: Rect = { x: 0, y: 0, width: 0, height: 0}
  protected data: Object[]
  protected selectedIndex: number
  protected minValue = 0
  protected maxValue = 0
  protected yScale: ScaleLinear<number, number>
  protected tradeTime: TradeTime
  private _xAxisTickHeight = X_AXIS_HEIGHT
  constructor(public chart: Chart, data: Object[]) {
    this.context = chart.context
    this.selectedIndex = null
    this.tradeTime = new TradeTime(chart.options.tradeTimes)
    this.data = data
  }
  draw() {

  }
  drawFrontSight() {

  }
  resize(frame: Rect) {
    const { resolution } = this.chart.options
    this.frame = frame
    this.chartFrame = {
      ...frame,
      y: frame.y + this.titleHeight,
      height: frame.height -
        this.titleHeight -
        this.xAxisTickHeight
    }
  }
  setData(data: Object[]) {
    this.data = data;
  }
  select(i: number) {
    this.selectedIndex = i
  }
  getYAxisDetail(y: number): YAxisDetail {
    return {
      left: null,
      right: null
    }
  }
  getXAxisDetail(i: number): string {
    return null
  }
  count(): number {
    return 0
  }
  protected get titleHeight() {
    return TITLE_HEIGHT * this.chart.options.resolution
  }
  protected set xAxisTickHeight(value) {
    this._xAxisTickHeight = value
  }
  protected get xAxisTickHeight() {
    return this._xAxisTickHeight * this.chart.options.resolution
  }
  protected topValue = () => {
    return this.maxValue * (1.01)
  }
  protected bottomValue = () => {
    return this.minValue * (0.99)
  }
  protected resetYScale() {
    const { chartFrame } = this;
    const resolution = this.chart.options.resolution
    this.yScale = scaleLinear()
      .domain([this.bottomValue(), this.topValue()])
      .range([chartFrame.y + chartFrame.height, chartFrame.y + TITLE_MARGIN_BOTTOM * resolution])
  }
}