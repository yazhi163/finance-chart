import { ExclusiveDrawerPluginConstructor } from '../index';
import { createLinePlugin, DatumColorMap, TitleBarTheme  } from './line-indicator-plugin';

export function createEMAPlugin(lineData: DatumColorMap[], theme: TitleBarTheme): ExclusiveDrawerPluginConstructor {
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
      theme,
    },
  );
}
