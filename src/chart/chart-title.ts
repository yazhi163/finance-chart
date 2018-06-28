import { Rect } from '../graphic/primitive';
import { drawText } from '../paint-utils/index';
import { autoResetStyle } from './chart';

export class ChartTitle {
  constructor(
    public context: CanvasRenderingContext2D,
    public title: string,
    public labels: Array<{ x: number; label: string, color: string }>,
    public background = 'black',
    public titleColor = 'white',
    public resolution = 1,
  ) {

  }
  public setLabel(i: number, label: string) {
    this.labels[i].label = label;
  }
  @autoResetStyle()
  public draw(frame: Rect) {
    const { context: ctx, background, title, titleColor, resolution } = this;
    ctx.fillStyle = background;
    ctx.fillRect(frame.x, frame.y, frame.width, frame.height);
    if (title) {
      drawText(ctx, title, {
        x: 8 * resolution,
        y: frame.y + 6 * resolution,
      }, {
        font: `${11 * resolution}px sans-serif`,
        color: titleColor,
      });
    }
    this.labels.forEach(({ label, x, color }) => {
      drawText(ctx, label, {
        x: x * resolution,
        y: frame.y + 6 * resolution,
      }, {
        font: `${11 * resolution}px sans-serif`,
        color,
      });
    });
  }
}
