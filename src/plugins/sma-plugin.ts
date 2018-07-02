import { ExclusiveDrawerPluginConstructor } from '../index';
import { createLinePlugin, DatumColorMap, TitleBarTheme  } from './line-indicator-plugin';

export function createSMAPlugin(lineData: DatumColorMap[]): ExclusiveDrawerPluginConstructor {
  return createLinePlugin(
    {
      dataObjectKey: 'sma',
      title: 'SMA',
      lineData,
      detailMapper(key, datum, i) {
        return {
          x: i * 80 + 80,
          label: `SMA ${key}: ${datum === 0 ? 0 : datum.toFixed(2)}`,
        };
      },
    },
  );
}
