# Introduction

Awesome finance chart


## Install

```shell
npm install @dz-web/finance-chart
```

## Usage

```jsx
import FinanceChart from '@dz-web/finance-chart';
import '@dz-web/finance-chart/dist/finance-chart.css';


```


## How to build to project


### prerequisite

In order to install [node-canvas](https://www.npmjs.com/package/canvas) successfully.

If you use osx system, just following commands on below. Get more detail at [node-canvas wiki](https://github.com/Automattic/node-canvas/wiki/_pages)

```shell
brew install pkg-config
brew install pixman
brew install cairo
```

### build

```shell
npm run dist
```

### TODO

- [ ] 分离主题颜色配置
- [ ] 分时图支持读取金融商品当日交易时间段，绘制x轴
- [ ] 实现滑动查看更多k线数据事件
- [ ] 实现缩放事件
- [ ] 开发与示例文档