import { ExclusiveDrawerPlugin, ExclusiveDrawerPluginConstructor } from '../chart/drawer-plugin';
import { createLinePlugin, DatumColorMap, TitleBarTheme  } from './line-indicator-plugin';

export function createEMAPlugin(lineData: DatumColorMap[]): ExclusiveDrawerPluginConstructor {
  return createLinePlugin(
    {
      dataObjectKey: 'ema',
      title: 'EMA',
      lineData,
      detailMapper(key, datum, i) {
        return {
          x: i * 80 + 80,
          label: `EMA ${key}: ${datum === 0 ? 0 : datum.toFixed(2)}`,
        };
      },
    },
  );
}
