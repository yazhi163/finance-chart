import { max, min } from 'd3-array';
import { area } from 'd3-shape';
import uniq from 'lodash.uniq';
import { formateDate } from '../algorithm/date';
import { divide } from '../algorithm/divide';
import { MovableRange } from '../algorithm/range';
import { Rect } from '../graphic/primitive';
import { drawLine, drawXAxis, drawYAxis } from '../paint-utils/index';
import { autoResetStyle, Chart, YAxisDetail } from './chart';
import { ChartTitle } from './chart-title';
import { TimeShareData } from './data-structure';
import { Drawer, DrawerOptions } from './drawer';

export const TimeShareWhiteTheme = {
  price: '#4B99FB',
  rise: '#F55559',
  fall: '#7DCE8D',
  same: '#7DCE8D',
  linearGradient: [
    'rgba(75, 153, 251, 0.4)',
    'rgba(75, 153, 251, 0)',
  ],
  avg: '#F89D37',
  titleBackground: '#F2F4F4',
  gridLine: '#E7EAEB',
  xTick: '#5E667F',
};
export const TimeShareBlackTheme = {
  price: '#4B99FB',
  rise: '#F55559',
  fall: '#7DCE8D',
  same: '#7DCE8D',
  linearGradient: [
    'rgba(75, 153, 251, 0.4)',
    'rgba(75, 153, 251, 0)',
  ],
  avg: '#F89D37',
  titleBackground: '#22252B',
  gridLine: '#282D38',
  xTick: '#AEB4BE',
};

export class TimeShareDrawer extends Drawer {
  public static theme = TimeShareWhiteTheme;
  public titleDrawer: ChartTitle;
  public range: MovableRange<TimeShareData>;
  protected topValue = ((lastTopValue = Number.MIN_VALUE) =>
    () => {
      if (this.maxValue > lastTopValue) {
        lastTopValue = this.maxValue * (1.01);
      }
      return lastTopValue;
    }
  )();
  protected bottomValue = ((lastBottomValue = Number.MAX_VALUE) =>
    () => {
      if (this.minValue < lastBottomValue) {
        lastBottomValue = this.minValue * (0.99);
      }
      return lastBottomValue;
    }
  )();
  constructor(chart: Chart, options: DrawerOptions) {
    super(chart, options);
    this.xTickFormatter = this.xTickFormatter.bind(this);
    this.context = chart.context;
    this.titleDrawer = new ChartTitle(
      this.context,
      null, [
        {
          x: 5 * this.chart.options.resolution,
          label: '分时走势',
          color: TimeShareDrawer.theme.price,
        },
        {
          x: 50 + 5 * this.chart.options.resolution,
          label: '均线',
          color: TimeShareDrawer.theme.avg,
        },
      ],
      TimeShareDrawer.theme.titleBackground,
      'white',
      this.chart.options.resolution,
    );
  }
  public count() {
    return this.tradeTime.totalMinutes();
  }
  public setRange(range: MovableRange<TimeShareData>) {
    super.setRange(range);
    const data = this.range.data;
    if (data.length > 0) {
      const merge = [...data.map((d) => d.price), ...data.map((d) => d.avg)];
      this.minValue = min(merge);
      this.maxValue = max(merge);
    } else {
      this.minValue = this.chart.lastPrice;
      this.maxValue = this.chart.lastPrice;
    }
    this.resetYScale();
  }
  @autoResetStyle()
  public drawFrontSight() {
    const { context: ctx, yScale, range } = this;
    const { xScale } = this.chart;
    const data = range.visible();
    const selectedIndex = this.selectedIndex;
    const x = xScale(selectedIndex);
    const size = 5 * this.chart.options.resolution;
    ctx.beginPath();
    ctx.arc(x, yScale(data[selectedIndex].price), size, 0, Math.PI * 2);
    ctx.fillStyle = TimeShareDrawer.theme.price;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, yScale(data[selectedIndex].avg), size, 0, Math.PI * 2);
    ctx.fillStyle = TimeShareDrawer.theme.avg;
    ctx.fill();
  }
  public resize(frame: Rect) {
    super.resize(frame);
    this.resetYScale();
  }
  public getYAxisDetail(y: number): YAxisDetail {
    const value = this.yScale.invert(y);
    return {
      left: value.toFixed(2),
      right: this.deltaInPercentage(value),
    };
  }
  public getXAxisDetail(i: number): string {
    return this.xTickFormatter(i);
  }
  protected draw() {
    super.draw();
    const { frame } = this;
    this.drawAxes();
    this.titleDrawer.draw({
      ...frame,
      height: this.titleHeight,
    });
    this.drawTimeShare();
  }
  protected xTickFormatter(value: number, i?: number) {
    const d = new Date();
    const minute = this.tradeTime.getMinute(value);
    d.setTime(minute * 60 * 1000);
    return formateDate(d, 'HH:mm');
  }
  protected drawYAxis() {
    const lastPrice = this.chart.lastPrice;
    const tickValues = divide(this.bottomValue(), this.topValue()).map((n) => ({
        value: n,
        color: n > lastPrice ? TimeShareDrawer.theme.rise : TimeShareDrawer.theme.fall,
    }));
    drawYAxis(
      this.context,
      tickValues,
      this.frame,
      this.yScale,
      this.chart.options.resolution,
      true,
      TimeShareDrawer.theme.gridLine,
    );
    drawYAxis(
      this.context,
      tickValues,
      this.frame,
      this.yScale,
      this.chart.options.resolution,
      false,
      TimeShareDrawer.theme.gridLine,
      (v) => this.deltaInPercentage(v),
      'right',
    );
  }
  protected deltaInPercentage(value: number): string {
    const lastPrice = this.chart.lastPrice;
    return `${((value - lastPrice) / lastPrice * 100).toFixed(2)}%`;
  }
  protected drawXAxis() {
    const tickValues = uniq(divide(0, this.chart.count() - 1, 5)
      .map((t) => Math.floor(t)));
    drawXAxis(
      this.context,
      tickValues,
      this.chartFrame,
      this.chart.xScale,
      this.chart.options.resolution,
      true,
      TimeShareDrawer.theme.gridLine,
      this.xTickFormatter,
      TimeShareDrawer.theme.xTick,
    );
  }
  protected drawAxes() {
    this.drawXAxis();
    this.drawYAxis();
  }
  @autoResetStyle()
  protected drawTimeShare() {
    const { frame } = this;
    const { xScale } = this.chart;
    const { context: ctx, yScale, range } = this;
    const drawArea = area<TimeShareData>()
      .x((d, i) => xScale(i))
      .y0((d) => yScale(d.price))
      .y1(frame.height - this.xAxisTickHeight)
      .context(ctx);
    ctx.beginPath();
    drawArea(range.visible());
    const linearGradient = ctx.createLinearGradient(0, 0, 0, frame.height);
    TimeShareDrawer.theme.linearGradient.forEach((color, i) =>
      linearGradient.addColorStop(i, color));
    ctx.fillStyle = linearGradient;
    ctx.fill();
    this.drawLine('price', TimeShareDrawer.theme.price);
    this.drawLine('avg', TimeShareDrawer.theme.avg);
  }
  @autoResetStyle()
  protected drawLine(key: keyof TimeShareData, color = 'black') {
    const { yScale, context: ctx,  range } = this;
    const { xScale } = this.chart;
    drawLine(
      ctx,
      range.visible().map((item, i) => ({
        x: xScale(i),
        y: yScale(item[key]),
      })),
      color,
      1 * this.chart.options.resolution,
    );
  }
}
