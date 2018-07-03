import { Rect } from '../graphic/primitive';
import { Drawer } from './drawer';

export class DrawerPlugin {
  protected frame: Rect;
  protected chartFrame: Rect;
  constructor(protected pluginHost: Drawer) {
    this.frame = pluginHost.frame;
    this.chartFrame = pluginHost.chartFrame;
  }
  public onSetRange() {
    // implement nothing
  }
  public predraw() {
    // implement nothing
  }
  public draw() {
    // implement nothing
  }
  public postdraw() {
    // implement nothing
  }
}
export class ExclusiveDrawerPlugin extends DrawerPlugin {}

export type DrawerPluginConstructor = typeof DrawerPlugin;
export type ExclusiveDrawerPluginConstructor = typeof ExclusiveDrawerPlugin;
