import uniq from 'lodash.uniq';
import { trimNulls } from '../algorithm/arrays';
import { determineCandleColor } from '../algorithm/color';
import { formateDate } from '../algorithm/date';
import { divide } from '../algorithm/divide';
import { MovableRange } from '../algorithm/range';
import { Rect } from '../graphic/primitive';
import { drawLine, drawXAxis, drawYAxis } from '../paint-utils/index';
import { autoResetStyle, Chart, YAxisDetail } from './chart';
import { ChartTitle } from './chart-title';
import { CandleStickData } from './data-structure';
import { Drawer } from './drawer';

export const CandleStickWhiteTheme = {
  rise: '#F55559',
  fall: '#7DCE8D',
  titleBackground: '#F2F4F4',
  title: '#5E667F',
  gridLine: '#E7EAEB',
  yTick: '#5E667F',
  xTick: '#5E667F',
};

export const CandleStickBlackTheme = {
  rise: '#F55559',
  fall: '#7DCE8D',
  titleBackground: '#22252B',
  title: '#AEB4BE',
  gridLine: '#282D38',
  yTick: '#AEB4BE',
  xTick: '#AEB4BE',
};

export interface MAIndicator {
  key: string;
  color: string;
}

export class CandleStickDrawer extends Drawer {
  public static theme = CandleStickWhiteTheme;
  public static MAIndicators: MAIndicator[] = [];

  public titleDrawer: ChartTitle;
  protected range: MovableRange<CandleStickData>;
  private _count: number;
  constructor(chart: Chart, data: CandleStickData[] = []) {
    super(chart);
    this._count = chart.options.count;
    this.xTickFormatter = this.xTickFormatter.bind(this);
    this.context = chart.context;
    this.titleDrawer = new ChartTitle(
      this.context,
      'MA', this.MAIndicators.map(({key, color}, i) => ({
        x: i * 80 + 60,
        label: `${key.toUpperCase()}: 0`,
        color,
      })),
      CandleStickDrawer.theme.titleBackground,
      CandleStickDrawer.theme.title,
      this.chart.options.resolution,
    );
  }
  public count() {
    return this._count;
  }
  public setRange(range: MovableRange<CandleStickData>) {
    super.setRange(range);
    const data = range.visible();
    if (data.length > 0) {
      const keys = this.MAIndicators.map((d) => d.key);
      keys.push('low', 'high');
      let minV = Number.MAX_VALUE;
      let maxV = Number.MIN_VALUE;
      for (let i = 0, lenI = data.length; i < lenI; ++i) {
        keys.forEach((key) => {
          const v = data[i][key] as number;
          // ma data may be null, ignore it
          if (v === null) { return; }
          if (v < minV) {
            minV = v;
          } else if (v > maxV) {
            maxV = v;
          }
        });
      }
      this.minValue = minV;
      this.maxValue = maxV;
    } else {
      this.minValue = this.chart.lastPrice;
      this.maxValue = this.chart.lastPrice;
    }
    this.resetYScale();
  }
  public resize(frame: Rect) {
    super.resize(frame);
    this.resetYScale();
  }
  public draw() {
    this.drawTitle(this.selectedIndex || this.range.visible().length - 1);
    this.drawAxes();
    this.drawCandles();
    this.drawMA();
  }
  public getYAxisDetail(y: number): YAxisDetail {
    return {
      left: this.yScale.invert(y).toFixed(2),
    };
  }
  public getXAxisDetail(i: number): string {
    return this.xTickDetailFormatter(i, this.range.visible());
  }
  get MAIndicators() {
    return Object.getPrototypeOf(this).constructor.MAIndicators as MAIndicator[];
  }
  protected drawYAxis() {
    drawYAxis(
      this.context,
      divide(this.bottomValue(), this.topValue()).map((n) => ({ value: n, color: CandleStickDrawer.theme.yTick})),
      this.frame,
      this.yScale,
      this.chart.options.resolution,
      true,
      CandleStickDrawer.theme.gridLine,
    );
  }
  protected drawXAxis() {
    const tickValues = uniq(divide(0, this.count() - 1, 4)
      .map((t) => Math.floor(t)));
    drawXAxis(
      this.context,
      tickValues,
      this.chartFrame,
      this.chart.xScale,
      this.chart.options.resolution,
      true,
      CandleStickDrawer.theme.gridLine,
      (v: number) => {
        return this.xTickFormatter(v, this.range.visible());
      },
      CandleStickDrawer.theme.xTick,
    );
  }
  protected xTickFormatter(i: number, data: CandleStickData[]) {
    const d = data[i];
    if (d) {
      return formateDate(d.time, this.xTickFormat());
    }
    return '';
  }
  protected xTickFormat() {
    return 'yyyy/MM';
  }
  protected xTickDetailFormatter(i: number, data: CandleStickData[]) {
    const d = data[i];
    if (d) {
      return formateDate(data[i].time, this.xTickDetailFormat());
    }
    return '';
  }
  protected xTickDetailFormat() {
    return 'yyyy/MM/dd';
  }
  protected drawAxes() {
    this.drawXAxis();
    this.drawYAxis();
  }
  protected drawMA() {
    const { yScale, range } = this;
    const { xScale } = this.chart;
    this.MAIndicators.forEach(({key, color}) => {
      const trimed = trimNulls(range.visible().map((d) => d[key] as number));
      drawLine(
        this.context,
        trimed.result.map((d, i) => ({
          x: xScale(i + trimed.deleted),
          y: yScale(d),
        })),
        color,
        1 * this.chart.options.resolution,
      );
    });
  }
  @autoResetStyle()
  protected drawCandles() {
    const { xScale } = this.chart;
    const { context: ctx, yScale, range } = this;
    const { resolution } = this.chart.options;
    range.visible().forEach((d, i) => {
      const maxV = Math.max(d.close, d.open);
      const minV = Math.min(d.close, d.open);
      const y = yScale(maxV);
      const height = Math.max(
              Math.abs(yScale(d.close) - yScale(d.open)), 1 * resolution,
            );
      let width = xScale(1) - xScale(0);
      width -= width * 0.2;
      const x = xScale(i) - width / 2;
      ctx.fillStyle = determineCandleColor(d, i, range) > 0 ?
        CandleStickDrawer.theme.rise : CandleStickDrawer.theme.fall;
      ctx.fillRect(x, y, width, height);
      const lineWidth = 1 * resolution;
      ctx.fillRect(x + width / 2 - lineWidth / 2, yScale(d.high), lineWidth, yScale(maxV) - yScale(d.high));
      ctx.fillRect(x + width / 2 - lineWidth / 2, yScale(minV), lineWidth, yScale(d.low) - yScale(minV));
    });
  }
  private drawTitle(i: number) {
    const { context: ctx, frame, range } = this;
    const data = range.visible();
    const d = data[i];
    if (data.length > 0) {
      this.MAIndicators.forEach(({ key }, i) => {
        const m = ((d[key] as number) || 0).toFixed(2);
        this.titleDrawer.setLabel(i, `${key.toUpperCase()}: ${m}`);
      });
      ctx.clearRect(0, frame.y, frame.width, this.titleHeight);
      this.titleDrawer.draw({
        ...this.frame,
        height: this.titleHeight,
      });
    }
  }
}
