import { trimNulls } from '../algorithm/arrays';
import { ChartTitle } from '../chart/chart-title';
import { Drawer, ExclusiveDrawerPlugin, ExclusiveDrawerPluginConstructor } from '../index';
import { drawLine } from '../paint-utils/index';

interface MALike {
  ma: {
    [key: number]: number;
  };
}

export function createMaPlugin(
  ma: Array<{ key: number; color: string; }>,
  theme: {
    title: string;
    background: string;
  },
): ExclusiveDrawerPluginConstructor {
  return class MaPlugin extends ExclusiveDrawerPlugin {
    public titleDrawer: ChartTitle;
    constructor(protected pluginHost: Drawer) {
      super(pluginHost);
      this.titleDrawer = new ChartTitle(
        this.pluginHost.context,
        'MA', ma.map(({key, color}, i) => ({
          x: i * 80 + 60,
          label: `MA${key}: 0`,
          color,
        })),
        theme.background,
        theme.title,
        this.pluginHost.chart.options.resolution,
      );
    }
    public draw() {
      this.drawTitle(
        this.pluginHost.selectedIndex || this.pluginHost.range.visible().length - 1,
      );
    }
    public postdraw() {
      const { yScale, range } = this.pluginHost;
      const { xScale } = this.pluginHost.chart;
      ma.forEach(({key, color}) => {
        const maData = range.visible().map((d) => (d as MALike).ma[key]);
        const trimed = trimNulls(maData);
        drawLine(
          this.pluginHost.context,
          trimed.result.map((d, i) => ({
            x: xScale(i + trimed.deleted),
            y: yScale(d),
          })),
          color,
          1 * this.pluginHost.chart.options.resolution,
        );
      });
    }
    protected drawTitle(i: number) {
      const { context: ctx, frame, range } = this.pluginHost;
      const data = range.visible();
      const d = data[i];
      if (data.length > 0) {
        ma.forEach(({ key }, i) => {
          const n = ((d as MALike).ma[key] || 0).toFixed(2);
          this.titleDrawer.setLabel(i, `MA${n}: ${n}`);
        });
        ctx.clearRect(0, frame.y, frame.width, this.pluginHost.titleHeight);
        this.titleDrawer.draw({
          ...this.frame,
          height: this.pluginHost.titleHeight,
        });
      }
    }
  };
}
