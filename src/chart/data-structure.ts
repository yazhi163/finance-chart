export interface VolumeData {
  volume: number;
}

export interface CandleStickData extends VolumeData {
  time: string;
  open: number;
  close: number;
  high: number;
  low: number;
}

export interface TimeShareData extends VolumeData {
  price: number;
  avg: number;
  time: number;
}
