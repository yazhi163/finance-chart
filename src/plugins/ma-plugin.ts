import { ExclusiveDrawerPluginConstructor } from '../index';
import { createLinePlugin, DatumColorMap, TitleBarTheme  } from './line-indicator-plugin';

export function createMAPlugin(lineData: DatumColorMap[]): ExclusiveDrawerPluginConstructor {
  return createLinePlugin(
    {
      dataObjectKey: 'ma',
      title: 'MA',
      lineData,
      detailMapper(key, datum, i) {
        return {
          x: i * 80 + 50,
          label: `MA${key}: ${datum === 0 ? 0 : datum.toFixed(2)}`,
        };
      },
    },
  );
}
