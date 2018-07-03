import { ExclusiveDrawerPlugin, ExclusiveDrawerPluginConstructor } from '../chart/drawer-plugin';
import { createLinePlugin, DatumColorMap, TitleBarTheme  } from './line-indicator-plugin';

export function createBOLLPlugin(lineData: DatumColorMap[]): ExclusiveDrawerPluginConstructor {
  return createLinePlugin(
    {
      dataObjectKey: 'boll',
      title: 'BOLL(20,2)',
      lineData,
      detailMapper(key, datum, i) {
        return {
          x: i * 80 + 80,
          label: `${key.toUpperCase()}: ${datum === 0 ? 0 : datum.toFixed(2)}`,
        };
      },
    },
  );
}
