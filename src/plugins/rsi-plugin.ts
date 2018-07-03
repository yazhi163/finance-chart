import { ExclusiveDrawerPlugin, ExclusiveDrawerPluginConstructor } from '../chart/drawer-plugin';
import { createLinePlugin, DatumColorMap, TitleBarTheme  } from './line-indicator-plugin';

export function createRSIPlugin(lineData: DatumColorMap[], dataObjectKey = 'rsi'): ExclusiveDrawerPluginConstructor {
  return class RSIPlugin extends createLinePlugin(
    {
      dataObjectKey,
      title: 'RSI',
      lineData,
      detailMapper(key, datum, i) {
        return {
          x: i * 80 + 50,
          label: `RSI: ${key}: ${datum === 0 ? 0 : datum.toFixed(2)}`,
        };
      },
    },
  ) {
    public onSetRange() {
      let { minValue, maxValue } = this.pluginHost;
      const data = this.pluginHost.range.visible();
      const all = [
        ...data.map((item) => (item as any)[dataObjectKey]['1']),
        ...data.map((item) => (item as any)[dataObjectKey]['2']),
        ...data.map((item) => (item as any)[dataObjectKey]['3']),
      ];
      for (let i = 0, len = all.length; i < len; ++i) {
        const v = all[i];
        if (v < minValue) {
          minValue = v;
        } else if (v > maxValue) {
          maxValue = v;
        }
      }
      this.pluginHost.minValue = minValue;
      this.pluginHost.maxValue = maxValue;
    }
  };
}
