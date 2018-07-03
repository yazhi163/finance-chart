(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FinanceChart"] = factory();
	else
		root["FinanceChart"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/scripts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/scripts/index.scss":
/*!************************************!*\
  !*** ./example/scripts/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./index.scss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./example/scripts/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./example/scripts/index.ts":
/*!**********************************!*\
  !*** ./example/scripts/index.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_algorithm_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/algorithm/date */ "./src/algorithm/date.ts");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/index */ "./src/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./example/scripts/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mock_kline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-kline */ "./example/scripts/mock-kline.ts");
/* harmony import */ var _mock_time_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-time-share */ "./example/scripts/mock-time-share.ts");





_src_index__WEBPACK_IMPORTED_MODULE_1__["VolumeDrawer"].proportion = 100;
_src_index__WEBPACK_IMPORTED_MODULE_1__["VolumeDrawer"].unit = '手';
function createTimeShare() {
    var timeShareChart = new _src_index__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
        selector: '#time-share',
        resolution: (window.devicePixelRatio || 1),
        count: 0,
        lastPrice: 15.2,
        data: _mock_time_share__WEBPACK_IMPORTED_MODULE_4__["default"],
        tradeTimes: [
            {
                open: 90,
                close: 210,
            },
            {
                open: 300,
                close: 421,
            },
        ],
        mainDrawer: {
            constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["TimeShareDrawer"],
        },
        auxiliaryDrawers: [
            {
                constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["TimeShareVolumeDrawer"],
            },
        ],
        detailProvider: function (i, data) {
            var date = new Date();
            date.setTime(data[i].time * 60 * 1000);
            return {
                title: Object(_src_algorithm_date__WEBPACK_IMPORTED_MODULE_0__["formateDate"])(date, 'HH:mm'),
                tables: [
                    {
                        color: 'green',
                        name: '开盘',
                        value: '10353',
                    },
                    {
                        color: '#7B7E8D',
                        name: '开盘',
                        value: '10353',
                    },
                ],
            };
        },
    });
    function autoUpdateTimeShare() {
        if (_mock_time_share__WEBPACK_IMPORTED_MODULE_4__["default"].length < 240 - 1) {
            setTimeout(autoUpdateTimeShare, 500);
        }
        var last = _mock_time_share__WEBPACK_IMPORTED_MODULE_4__["default"][_mock_time_share__WEBPACK_IMPORTED_MODULE_4__["default"].length - 1];
        var next = {
            time: last.time + 1,
            price: last.price * (Math.random() * 0.02 - 0.01 + 1),
            avg: last.avg * (Math.random() * 0.02 - 0.01 + 1),
            volume: Math.round(last.volume * (Math.random() * 0.6 - 0.3 + 1)),
            holdAmount: Math.round(last.holdAmount * (Math.random() * 0.6 - 0.3 + 1)),
        };
        _mock_time_share__WEBPACK_IMPORTED_MODULE_4__["default"].push(next);
        timeShareChart.setData(_mock_time_share__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
    autoUpdateTimeShare();
}
function createKLine() {
    window.klineChart = new _src_index__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
        selector: '#candle-stick',
        count: 50,
        lastPrice: 50.49999809265137,
        data: _mock_kline__WEBPACK_IMPORTED_MODULE_3__["default"],
        tradeTimes: [],
        mainDrawer: {
            constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["CandleStickDrawer"],
            options: {
                plugins: [
                    Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createYAxisPlugin"])(),
                ],
                exclusivePlugins: [
                    Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createMAPlugin"])([
                        {
                            key: '5',
                            color: '#FF8E29',
                        },
                        {
                            key: '10',
                            color: '#ADE3F3',
                        },
                        {
                            key: '20',
                            color: '#EC6ED9',
                        },
                        {
                            key: '60',
                            color: '#01F46A',
                        },
                    ]),
                    Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createEMAPlugin"])([
                        {
                            key: '12',
                            color: '#FF8E29',
                        },
                        {
                            key: '50',
                            color: '#ADE3F3',
                        },
                    ]),
                    Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createSMAPlugin"])([
                        {
                            key: '5',
                            color: '#FF8E29',
                        },
                        {
                            key: '10',
                            color: '#ADE3F3',
                        },
                        {
                            key: '20',
                            color: '#EC6ED9',
                        },
                    ]),
                    Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createBOLLPlugin"])(),
                    Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createSARPlugin"])(),
                ],
            },
        },
        auxiliaryDrawers: [
            {
                constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["CandleStickVolumeDrawer"],
            },
            {
                constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["Drawer"],
                options: {
                    plugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createKDJYAxisPlugin"])(),
                    ],
                    exclusivePlugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createKDJPlugin"])(),
                    ],
                },
            },
            {
                constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["Drawer"],
                options: {
                    plugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createRSIYAxisPlugin"])(),
                    ],
                    exclusivePlugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createRSIPlugin"])(),
                    ],
                },
            },
            {
                constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["Drawer"],
                options: {
                    plugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createYAxisPlugin"])(),
                    ],
                    exclusivePlugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createDMAPlugin"])(),
                    ],
                },
            },
            {
                constructor: _src_index__WEBPACK_IMPORTED_MODULE_1__["Drawer"],
                options: {
                    plugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createYAxisPlugin"])(),
                    ],
                    exclusivePlugins: [
                        Object(_src_index__WEBPACK_IMPORTED_MODULE_1__["createMACDPlugin"])(),
                    ],
                },
            },
        ],
        detailProvider: function (i, data) {
            var WEEK_DAY_MAP = {
                0: '周日',
                1: '周一',
                2: '周二',
                3: '周三',
                4: '周四',
                5: '周五',
                6: '周六',
            };
            var date = new Date(data[i].time.replace(/-/g, '/'));
            return {
                title: Object(_src_algorithm_date__WEBPACK_IMPORTED_MODULE_0__["formateDate"])(date, 'yyyy/MM/dd') + " " + WEEK_DAY_MAP[date.getDay()],
                tables: [
                    {
                        color: 'green',
                        name: '开盘',
                        value: '10353',
                    },
                    {
                        color: '#7B7E8D',
                        name: '开盘',
                        value: '10353',
                    },
                ],
            };
        },
    });
}
createTimeShare();
createKLine();


/***/ }),

/***/ "./example/scripts/mock-kline.ts":
/*!***************************************!*\
  !*** ./example/scripts/mock-kline.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// tslint:disable
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        "time": "2017-6-23 0:0:0",
        "open": 9.229998588562012,
        "high": 9.270001411437988,
        "low": 9.15999984741211,
        "close": 9.25,
        "volume": 58400440,
        "amount": 538303552,
        "ma": {
            "5": 9.25,
            "10": 9.25,
            "20": 9.25,
            "60": 9.25,
            "120": 9.25
        },
        "boll": {
            "mid": 9.25,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.25,
            "50": 9.25
        },
        "sma": {
            "5": 9.25,
            "10": 9.25,
            "20": 9.25
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 42.307678,
            "d": 42.307678,
            "j": 42.307678
        },
        "rsi": {
            "1": null,
            "2": null,
            "3": null
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0,
            "dea": 0,
            "macd": 0
        }
    },
    {
        "time": "2017-6-26 0:0:0",
        "open": 9.260001182556152,
        "high": 9.399999618530273,
        "low": 9.260001182556152,
        "close": 9.300000190734863,
        "volume": 64944716,
        "amount": 606642880,
        "ma": {
            "5": 9.25,
            "10": 9.25,
            "20": 9.25,
            "60": 9.25,
            "120": 9.25
        },
        "boll": {
            "mid": 9.25,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.25,
            "50": 9.25
        },
        "sma": {
            "5": 9.25,
            "10": 9.25,
            "20": 9.25
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 42.307678,
            "d": 42.307678,
            "j": 42.307678
        },
        "rsi": {
            "1": null,
            "2": null,
            "3": null
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0,
            "dea": 0,
            "macd": 0
        }
    },
    {
        "time": "2017-6-27 0:0:0",
        "open": 9.300000190734863,
        "high": 9.390000343322754,
        "low": 9.270001411437988,
        "close": 9.359999656677246,
        "volume": 54601612,
        "amount": 509161984,
        "ma": {
            "5": 9.266666,
            "10": 9.266666,
            "20": 9.266666,
            "60": 9.266666,
            "120": 9.266666
        },
        "boll": {
            "mid": 9.266666,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.257692,
            "50": 9.251961
        },
        "sma": {
            "5": 9.26,
            "10": 9.255,
            "20": 9.252501
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 48.717976,
            "d": 44.444443,
            "j": 57.265045
        },
        "rsi": {
            "1": 100,
            "2": 100,
            "3": 100
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.003988,
            "dea": 0.000798,
            "macd": 0.006381
        }
    },
    {
        "time": "2017-6-28 0:0:0",
        "open": 9.350000381469727,
        "high": 9.489998817443848,
        "low": 9.329999923706055,
        "close": 9.430000305175781,
        "volume": 116879624,
        "amount": 1102438144,
        "ma": {
            "5": 9.29,
            "10": 9.29,
            "20": 9.29,
            "60": 9.29,
            "120": 9.29
        },
        "boll": {
            "mid": 9.29,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.273432,
            "50": 9.256198
        },
        "sma": {
            "5": 9.280001,
            "10": 9.2655,
            "20": 9.257875
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 60.683765,
            "d": 49.857548,
            "j": 82.336205
        },
        "rsi": {
            "1": 100,
            "2": 100,
            "3": 100
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.011854,
            "dea": 0.003009,
            "macd": 0.01769
        }
    },
    {
        "time": "2017-6-29 0:0:0",
        "open": 9.430000305175781,
        "high": 9.449999809265137,
        "low": 9.369999885559082,
        "close": 9.430000305175781,
        "volume": 48880456,
        "amount": 459810400,
        "ma": {
            "5": 9.318,
            "10": 9.318,
            "20": 9.318,
            "60": 9.318,
            "120": 9.318
        },
        "boll": {
            "mid": 9.318,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.29752,
            "50": 9.263014
        },
        "sma": {
            "5": 9.31,
            "10": 9.28195,
            "20": 9.266481
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 68.075012,
            "d": 55.930035,
            "j": 92.364967
        },
        "rsi": {
            "1": 100,
            "2": 100,
            "3": 100
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.023466,
            "dea": 0.0071,
            "macd": 0.032731
        }
    },
    {
        "time": "2017-6-30 0:0:0",
        "open": 9.399999618530273,
        "high": 9.430000305175781,
        "low": 9.310001373291016,
        "close": 9.390000343322754,
        "volume": 49963348,
        "amount": 468003520,
        "ma": {
            "5": 9.354,
            "10": 9.336667,
            "20": 9.336667,
            "60": 9.336667,
            "120": 9.336667
        },
        "boll": {
            "mid": 9.336667,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.317901,
            "50": 9.269562
        },
        "sma": {
            "5": 9.334001,
            "10": 9.296755,
            "20": 9.274656
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 73.00251,
            "d": 61.620861,
            "j": 95.765816
        },
        "rsi": {
            "1": 100,
            "2": 100,
            "3": 100
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.032296,
            "dea": 0.01214,
            "macd": 0.040313
        }
    },
    {
        "time": "2017-7-3 0:0:0",
        "open": 9.399999618530273,
        "high": 9.430000305175781,
        "low": 9.34000015258789,
        "close": 9.399999618530273,
        "volume": 38834936,
        "amount": 364465856,
        "ma": {
            "5": 9.382,
            "10": 9.344286,
            "20": 9.344286,
            "60": 9.344286,
            "120": 9.344286
        },
        "boll": {
            "mid": 9.344286,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.328993,
            "50": 9.274285
        },
        "sma": {
            "5": 9.345201,
            "10": 9.306079,
            "20": 9.280424
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 72.477966,
            "d": 65.239899,
            "j": 86.954102
        },
        "rsi": {
            "1": 72.871483,
            "2": 77.819481,
            "3": 79.926735
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.035655,
            "dea": 0.016843,
            "macd": 0.037625
        }
    },
    {
        "time": "2017-7-4 0:0:0",
        "open": 9.399999618530273,
        "high": 9.40999984741211,
        "low": 9.300000190734863,
        "close": 9.34000015258789,
        "volume": 48836252,
        "amount": 456577024,
        "ma": {
            "5": 9.402,
            "10": 9.351251,
            "20": 9.351251,
            "60": 9.351251,
            "120": 9.351251
        },
        "boll": {
            "mid": 9.351251,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.339917,
            "50": 9.279215
        },
        "sma": {
            "5": 9.35616,
            "10": 9.315471,
            "20": 9.286403
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 73.080589,
            "d": 67.853462,
            "j": 83.534836
        },
        "rsi": {
            "1": 74.913048,
            "2": 79.084618,
            "3": 80.925507
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.038678,
            "dea": 0.02121,
            "macd": 0.034937
        }
    },
    {
        "time": "2017-7-5 0:0:0",
        "open": 9.289999961853027,
        "high": 9.380000114440918,
        "low": 9.270001411437988,
        "close": 9.369999885559082,
        "volume": 56772000,
        "amount": 529294112,
        "ma": {
            "5": 9.398001,
            "10": 9.350001,
            "20": 9.350001,
            "60": 9.350001,
            "120": 9.350001
        },
        "boll": {
            "mid": 9.350001,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.33993,
            "50": 9.281599
        },
        "sma": {
            "5": 9.352928,
            "10": 9.317923,
            "20": 9.289083
        },
        "sar": {
            "BB": null
        },
        "kdj": {
            "k": 67.768074,
            "d": 67.825005,
            "j": 67.654221
        },
        "rsi": {
            "1": 48.585716,
            "2": 57.584656,
            "3": 61.702858
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.03582,
            "dea": 0.024132,
            "macd": 0.023376
        }
    },
    {
        "time": "2017-7-6 0:0:0",
        "open": 9.359999656677246,
        "high": 9.40999984741211,
        "low": 9.310001373291016,
        "close": 9.399999618530273,
        "volume": 73891184,
        "amount": 691387200,
        "ma": {
            "5": 9.386,
            "10": 9.352001,
            "20": 9.352001,
            "60": 9.352001,
            "120": 9.352001
        },
        "boll": {
            "mid": 9.352001,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.344556,
            "50": 9.285066
        },
        "sma": {
            "5": 9.356342,
            "10": 9.323131,
            "20": 9.293128
        },
        "sar": {
            "BB": 9.14
        },
        "kdj": {
            "k": 66.390907,
            "d": 67.346977,
            "j": 64.478775
        },
        "rsi": {
            "1": 57.539146,
            "2": 63.062084,
            "3": 65.925728
        },
        "dma": {
            "dif": 0,
            "ama": 0
        },
        "macd": {
            "dif": 0.035565,
            "dea": 0.026419,
            "macd": 0.018294
        }
    },
    {
        "time": "2017-7-7 0:0:0",
        "open": 9.369999885559082,
        "high": 9.479998588562012,
        "low": 9.34000015258789,
        "close": 9.470001220703125,
        "volume": 76036960,
        "amount": 717084288,
        "ma": {
            "5": 9.38,
            "10": 9.367,
            "20": 9.356365,
            "60": 9.356365,
            "120": 9.356365
        },
        "boll": {
            "mid": 9.356365,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.353086,
            "50": 9.289573
        },
        "sma": {
            "5": 9.365074,
            "10": 9.330817,
            "20": 9.298471
        },
        "sar": {
            "BB": 9.159201
        },
        "kdj": {
            "k": 64.550438,
            "d": 66.414795,
            "j": 60.821716
        },
        "rsi": {
            "1": 64.878525,
            "2": 67.623253,
            "3": 69.441757
        },
        "dma": {
            "dif": 0.010634,
            "ama": 0.001063
        },
        "macd": {
            "dif": 0.037354,
            "dea": 0.028606,
            "macd": 0.017496
        }
    },
    {
        "time": "2017-7-10 0:0:0",
        "open": 9.449999809265137,
        "high": 9.65999984741211,
        "low": 9.439998626708984,
        "close": 9.59000015258789,
        "volume": 136081584,
        "amount": 1303090048,
        "ma": {
            "5": 9.396001,
            "10": 9.389,
            "20": 9.365834,
            "60": 9.365834,
            "120": 9.365834
        },
        "boll": {
            "mid": 9.365834,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.371073,
            "50": 9.296648
        },
        "sma": {
            "5": 9.38606,
            "10": 9.344736,
            "20": 9.307048
        },
        "sar": {
            "BB": 9.189297
        },
        "kdj": {
            "k": 73.336983,
            "d": 68.722191,
            "j": 82.566574
        },
        "rsi": {
            "1": 76.333191,
            "2": 75.366295,
            "3": 75.577774
        },
        "dma": {
            "dif": 0.023166,
            "ama": 0.00338
        },
        "macd": {
            "dif": 0.043913,
            "dea": 0.031667,
            "macd": 0.024492
        }
    },
    {
        "time": "2017-7-11 0:0:0",
        "open": 9.609999656677246,
        "high": 10.460000038146973,
        "low": 9.609999656677246,
        "close": 10.25,
        "volume": 381208672,
        "amount": 3842010368,
        "ma": {
            "5": 9.434,
            "10": 9.418001,
            "20": 9.383078,
            "60": 9.383078,
            "120": 9.383078
        },
        "boll": {
            "mid": 9.383078,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.404754,
            "50": 9.308152
        },
        "sma": {
            "5": 9.426847,
            "10": 9.369263,
            "20": 9.321196
        },
        "sar": {
            "BB": 9.235809
        },
        "kdj": {
            "k": 76.241753,
            "d": 71.228706,
            "j": 86.267838
        },
        "rsi": {
            "1": 85.835915,
            "2": 82.97879,
            "3": 82.031616
        },
        "dma": {
            "dif": 0.034924,
            "ama": 0.006872
        },
        "macd": {
            "dif": 0.058125,
            "dea": 0.036959,
            "macd": 0.042332
        }
    },
    {
        "time": "2017-7-12 0:0:0",
        "open": 10.270000457763672,
        "high": 10.579999923706055,
        "low": 10.199999809265137,
        "close": 10.34000015258789,
        "volume": 299884416,
        "amount": 3113681152,
        "ma": {
            "5": 9.616,
            "10": 9.507001,
            "20": 9.445001,
            "60": 9.445001,
            "120": 9.445001
        },
        "boll": {
            "mid": 9.445001,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.534792,
            "50": 9.345087
        },
        "sma": {
            "5": 9.591478,
            "10": 9.457336,
            "20": 9.367636
        },
        "sar": {
            "BB": 9.320647
        },
        "kdj": {
            "k": 78.278809,
            "d": 73.578743,
            "j": 87.67894
        },
        "rsi": {
            "1": 96.119492,
            "2": 94.036407,
            "3": 92.860184
        },
        "dma": {
            "dif": 0.062,
            "ama": 0.013072
        },
        "macd": {
            "dif": 0.121246,
            "dea": 0.053816,
            "macd": 0.134861
        }
    },
    {
        "time": "2017-7-13 0:0:0",
        "open": 10.300000190734863,
        "high": 10.899999618530273,
        "low": 10.239998817443848,
        "close": 10.899999618530273,
        "volume": 299453440,
        "amount": 3180144640,
        "ma": {
            "5": 9.809999,
            "10": 9.598,
            "20": 9.504667,
            "60": 9.504667,
            "120": 9.504667
        },
        "boll": {
            "mid": 9.504667,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.65867,
            "50": 9.384104
        },
        "sma": {
            "5": 9.741182,
            "10": 9.545603,
            "20": 9.416254
        },
        "sar": {
            "BB": 9.548518
        },
        "kdj": {
            "k": 79.412331,
            "d": 75.523277,
            "j": 87.190445
        },
        "rsi": {
            "1": 96.531563,
            "2": 94.561943,
            "3": 93.424072
        },
        "dma": {
            "dif": 0.093332,
            "ama": 0.022406
        },
        "macd": {
            "dif": 0.176498,
            "dea": 0.078353,
            "macd": 0.196292
        }
    },
    {
        "time": "2017-7-14 0:0:0",
        "open": 10.8100004196167,
        "high": 10.9399995803833,
        "low": 10.65999984741211,
        "close": 10.899999618530273,
        "volume": 172257024,
        "amount": 1864449152,
        "ma": {
            "5": 10.110001,
            "10": 9.745001,
            "20": 9.591875,
            "60": 9.591875,
            "120": 9.591875
        },
        "boll": {
            "mid": 9.591875,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 9.849644,
            "50": 9.44355
        },
        "sma": {
            "5": 9.972946,
            "10": 9.681043,
            "20": 9.490441
        },
        "sar": {
            "BB": 9.754814
        },
        "kdj": {
            "k": 86.274879,
            "d": 79.107147,
            "j": 100.610352
        },
        "rsi": {
            "1": 98.06543,
            "2": 96.597328,
            "3": 95.653122
        },
        "dma": {
            "dif": 0.153126,
            "ama": 0.037718
        },
        "macd": {
            "dif": 0.262447,
            "dea": 0.115171,
            "macd": 0.294552
        }
    },
    {
        "time": "2017-7-17 0:0:0",
        "open": 10.949999809265137,
        "high": 11.329999923706055,
        "low": 10.720000267028809,
        "close": 10.8100004196167,
        "volume": 327312320,
        "amount": 3608691968,
        "ma": {
            "5": 10.396001,
            "10": 9.896001,
            "20": 9.668823,
            "60": 9.668823,
            "120": 9.668823
        },
        "boll": {
            "mid": 9.668823,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 10.011237,
            "50": 9.500667
        },
        "sma": {
            "5": 10.158358,
            "10": 9.802938,
            "20": 9.560919
        },
        "sar": {
            "BB": 9.983851
        },
        "kdj": {
            "k": 90.051514,
            "d": 82.755272,
            "j": 104.643997
        },
        "rsi": {
            "1": 98.065422,
            "2": 96.597328,
            "3": 95.653114
        },
        "dma": {
            "dif": 0.227178,
            "ama": 0.060436
        },
        "macd": {
            "dif": 0.326797,
            "dea": 0.157497,
            "macd": 0.3386
        }
    },
    {
        "time": "2017-7-18 0:0:0",
        "open": 10.75,
        "high": 11.140000343322754,
        "low": 10.619999885559082,
        "close": 11.050000190734863,
        "volume": 234943184,
        "amount": 2558434048,
        "ma": {
            "5": 10.64,
            "10": 10.037001,
            "20": 9.732222,
            "60": 9.732222,
            "120": 9.732222
        },
        "boll": {
            "mid": 9.732222,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 10.134124,
            "50": 9.552012
        },
        "sma": {
            "5": 10.288687,
            "10": 9.903645,
            "20": 9.623373
        },
        "sar": {
            "BB": 10.175081
        },
        "kdj": {
            "k": 84.953438,
            "d": 83.487999,
            "j": 87.884323
        },
        "rsi": {
            "1": 88.96067,
            "2": 90.144226,
            "3": 90.296967
        },
        "dma": {
            "dif": 0.304779,
            "ama": 0.090914
        },
        "macd": {
            "dif": 0.366308,
            "dea": 0.199259,
            "macd": 0.334099
        }
    },
    {
        "time": "2017-7-19 0:0:0",
        "open": 10.989999771118164,
        "high": 11.1899995803833,
        "low": 10.880000114440918,
        "close": 11.09000015258789,
        "volume": 193307584,
        "amount": 2131336448,
        "ma": {
            "5": 10.8,
            "10": 10.208,
            "20": 9.801579,
            "60": 9.801579,
            "120": 9.801579
        },
        "boll": {
            "mid": 9.801579,
            "upper": null,
            "lower": null
        },
        "ema": {
            "12": 10.275028,
            "50": 9.610757
        },
        "sma": {
            "5": 10.440949,
            "10": 10.01828,
            "20": 9.694704
        },
        "sar": {
            "BB": 10.406065
        },
        "kdj": {
            "k": 85.348503,
            "d": 84.108162,
            "j": 87.829178
        },
        "rsi": {
            "1": 91.489235,
            "2": 91.74794,
            "3": 91.605034
        },
        "dma": {
            "dif": 0.406422,
            "ama": 0.131556
        },
        "macd": {
            "dif": 0.412236,
            "dea": 0.241854,
            "macd": 0.340764
        }
    },
    {
        "time": "2017-7-20 0:0:0",
        "open": 11.079999923706055,
        "high": 11.220000267028809,
        "low": 10.90999984741211,
        "close": 10.970000267028809,
        "volume": 153733856,
        "amount": 1695060992,
        "ma": {
            "5": 10.95,
            "10": 10.38,
            "20": 9.865999,
            "60": 9.865999,
            "120": 9.865999
        },
        "boll": {
            "mid": 9.865999,
            "upper": 11.27529,
            "lower": 8.456708
        },
        "ema": {
            "12": 10.400408,
            "50": 9.668767
        },
        "sma": {
            "5": 10.57076,
            "10": 10.125452,
            "20": 9.764468
        },
        "sar": {
            "BB": 10.552852
        },
        "kdj": {
            "k": 86.212242,
            "d": 84.809517,
            "j": 89.017685
        },
        "rsi": {
            "1": 91.862038,
            "2": 91.985069,
            "3": 91.79734
        },
        "dma": {
            "dif": 0.514001,
            "ama": 0.182956
        },
        "macd": {
            "dif": 0.446712,
            "dea": 0.282826,
            "macd": 0.327772
        }
    },
    {
        "time": "2017-7-21 0:0:0",
        "open": 10.829999923706055,
        "high": 10.949999809265137,
        "low": 10.6899995803833,
        "close": 10.890000343322754,
        "volume": 150102000,
        "amount": 1625416448,
        "ma": {
            "5": 10.964,
            "10": 10.537001,
            "20": 9.951999,
            "60": 9.918571,
            "120": 9.918571
        },
        "boll": {
            "mid": 9.951999,
            "upper": 11.41202,
            "lower": 8.491978
        },
        "ema": {
            "12": 10.488038,
            "50": 9.719795
        },
        "sma": {
            "5": 10.650608,
            "10": 10.209907,
            "20": 9.824745
        },
        "sar": {
            "BB": 10.680282
        },
        "kdj": {
            "k": 84.458961,
            "d": 84.692665,
            "j": 83.991562
        },
        "rsi": {
            "1": 79.349251,
            "2": 84.078194,
            "3": 85.654831
        },
        "dma": {
            "dif": 0.618429,
            "ama": 0.243736
        },
        "macd": {
            "dif": 0.45906,
            "dea": 0.318073,
            "macd": 0.281974
        }
    },
    {
        "time": "2017-7-24 0:0:0",
        "open": 10.819999694824219,
        "high": 11.0600004196167,
        "low": 10.729999542236328,
        "close": 10.949999809265137,
        "volume": 169266432,
        "amount": 1846886784,
        "ma": {
            "5": 10.962,
            "10": 10.679001,
            "20": 10.033998,
            "60": 9.962727,
            "120": 9.962727
        },
        "boll": {
            "mid": 10.033998,
            "upper": 11.512129,
            "lower": 8.555868
        },
        "ema": {
            "12": 10.549878,
            "50": 9.765686
        },
        "sma": {
            "5": 10.698486,
            "10": 10.277916,
            "20": 9.878008
        },
        "sar": {
            "BB": 11.33
        },
        "kdj": {
            "k": 81.112183,
            "d": 83.499168,
            "j": 76.338211
        },
        "rsi": {
            "1": 71.552193,
            "2": 79.131294,
            "3": 81.845055
        },
        "dma": {
            "dif": 0.716274,
            "ama": 0.313046
        },
        "macd": {
            "dif": 0.457121,
            "dea": 0.345882,
            "macd": 0.222477
        }
    },
    {
        "time": "2017-7-25 0:0:0",
        "open": 10.979999542236328,
        "high": 11.270000457763672,
        "low": 10.949999809265137,
        "close": 11,
        "volume": 195476832,
        "amount": 2172114688,
        "ma": {
            "5": 10.99,
            "10": 10.815,
            "20": 10.1165,
            "60": 10.005651,
            "120": 10.005651
        },
        "boll": {
            "mid": 10.1165,
            "upper": 11.60624,
            "lower": 8.62676
        },
        "ema": {
            "12": 10.611435,
            "50": 9.81213
        },
        "sma": {
            "5": 10.748789,
            "10": 10.345124,
            "20": 9.931607
        },
        "sar": {
            "BB": 11.304399
        },
        "kdj": {
            "k": 76.198677,
            "d": 81.065674,
            "j": 66.464691
        },
        "rsi": {
            "1": 73.863586,
            "2": 80.089745,
            "3": 82.45575
        },
        "dma": {
            "dif": 0.809348,
            "ama": 0.390489
        },
        "macd": {
            "dif": 0.455178,
            "dea": 0.367741,
            "macd": 0.174874
        }
    },
    {
        "time": "2017-7-26 0:0:0",
        "open": 10.920000076293945,
        "high": 11.180000305175781,
        "low": 10.65999984741211,
        "close": 10.739999771118164,
        "volume": 169741216,
        "amount": 1846281984,
        "ma": {
            "5": 10.98,
            "10": 10.889999,
            "20": 10.1985,
            "60": 10.047083,
            "120": 10.047083
        },
        "boll": {
            "mid": 10.1985,
            "upper": 11.693447,
            "lower": 8.703552
        },
        "ema": {
            "12": 10.671214,
            "50": 9.858713
        },
        "sma": {
            "5": 10.799031,
            "10": 10.410612,
            "20": 9.985026
        },
        "sar": {
            "BB": 11.281424
        },
        "kdj": {
            "k": 74.040718,
            "d": 78.724022,
            "j": 64.674118
        },
        "rsi": {
            "1": 75.827629,
            "2": 80.887733,
            "3": 82.954353
        },
        "dma": {
            "dif": 0.842916,
            "ama": 0.468581
        },
        "macd": {
            "dif": 0.452457,
            "dea": 0.384685,
            "macd": 0.135546
        }
    },
    {
        "time": "2017-7-27 0:0:0",
        "open": 10.720000267028809,
        "high": 10.770000457763672,
        "low": 10.529999732971191,
        "close": 10.59000015258789,
        "volume": 119449040,
        "amount": 1273888896,
        "ma": {
            "5": 10.910001,
            "10": 10.929999,
            "20": 10.264,
            "60": 10.0748,
            "120": 10.0748
        },
        "boll": {
            "mid": 10.264,
            "upper": 11.731717,
            "lower": 8.796283
        },
        "ema": {
            "12": 10.681797,
            "50": 9.893273
        },
        "sma": {
            "5": 10.787226,
            "10": 10.443551,
            "20": 10.022776
        },
        "sar": {
            "BB": 11.25491
        },
        "kdj": {
            "k": 54.994278,
            "d": 70.81411,
            "j": 23.354614
        },
        "rsi": {
            "1": 51.621811,
            "2": 65.903793,
            "3": 71.871353
        },
        "dma": {
            "dif": 0.8552,
            "ama": 0.544767
        },
        "macd": {
            "dif": 0.42443,
            "dea": 0.392634,
            "macd": 0.063592
        }
    },
    {
        "time": "2017-7-28 0:0:0",
        "open": 10.609999656677246,
        "high": 10.8100004196167,
        "low": 10.579999923706055,
        "close": 10.739999771118164,
        "volume": 81919536,
        "amount": 877769280,
        "ma": {
            "5": 10.834001,
            "10": 10.898999,
            "20": 10.322001,
            "60": 10.094615,
            "120": 10.094615
        },
        "boll": {
            "mid": 10.322001,
            "upper": 11.741858,
            "lower": 8.902143
        },
        "ema": {
            "12": 10.667674,
            "50": 9.920596
        },
        "sma": {
            "5": 10.747781,
            "10": 10.458196,
            "20": 10.051137
        },
        "sar": {
            "BB": 11.18352
        },
        "kdj": {
            "k": 39.162868,
            "d": 60.263699,
            "j": -3.038795
        },
        "rsi": {
            "1": 42.278351,
            "2": 59.022556,
            "3": 66.521072
        },
        "dma": {
            "dif": 0.804384,
            "ama": 0.609893
        },
        "macd": {
            "dif": 0.385668,
            "dea": 0.391241,
            "macd": -0.011145
        }
    },
    {
        "time": "2017-7-31 0:0:0",
        "open": 10.800000190734863,
        "high": 10.819999694824219,
        "low": 10.449999809265137,
        "close": 10.670000076293945,
        "volume": 157586432,
        "amount": 1671814144,
        "ma": {
            "5": 10.804001,
            "10": 10.882999,
            "20": 10.389501,
            "60": 10.118518,
            "120": 10.118518
        },
        "boll": {
            "mid": 10.389501,
            "upper": 11.74992,
            "lower": 9.029081
        },
        "ema": {
            "12": 10.678802,
            "50": 9.952729
        },
        "sma": {
            "5": 10.746225,
            "10": 10.486376,
            "20": 10.085581
        },
        "sar": {
            "BB": 11.105098
        },
        "kdj": {
            "k": 35.568031,
            "d": 52.031811,
            "j": 2.640472
        },
        "rsi": {
            "1": 52.578259,
            "2": 63.212822,
            "3": 68.934235
        },
        "dma": {
            "dif": 0.764482,
            "ama": 0.663624
        },
        "macd": {
            "dif": 0.362869,
            "dea": 0.385566,
            "macd": -0.045394
        }
    },
    {
        "time": "2017-8-1 0:0:0",
        "open": 10.640000343322754,
        "high": 11.079999923706055,
        "low": 10.600000381469727,
        "close": 11.039999961853027,
        "volume": 203571008,
        "amount": 2222887936,
        "ma": {
            "5": 10.747999,
            "10": 10.868999,
            "20": 10.453001,
            "60": 10.138214,
            "120": 10.138214
        },
        "boll": {
            "mid": 10.453001,
            "upper": 11.735233,
            "lower": 9.170769
        },
        "ema": {
            "12": 10.677447,
            "50": 9.980858
        },
        "sma": {
            "5": 10.73098,
            "10": 10.504738,
            "20": 10.114801
        },
        "sar": {
            "BB": 11.021082
        },
        "kdj": {
            "k": 32.655113,
            "d": 45.57291,
            "j": 6.819519
        },
        "rsi": {
            "1": 47.801598,
            "2": 60.084904,
            "3": 66.596695
        },
        "dma": {
            "dif": 0.730785,
            "ama": 0.706224
        },
        "macd": {
            "dif": 0.335288,
            "dea": 0.375511,
            "macd": -0.080445
        }
    },
    {
        "time": "2017-8-2 0:0:0",
        "open": 11.050000190734863,
        "high": 11.34000015258789,
        "low": 10.960000038146973,
        "close": 11.149999618530273,
        "volume": 206206912,
        "amount": 2307726592,
        "ma": {
            "5": 10.756,
            "10": 10.867999,
            "20": 10.538,
            "60": 10.169311,
            "120": 10.169311
        },
        "boll": {
            "mid": 10.538,
            "upper": 11.731957,
            "lower": 9.344043
        },
        "ema": {
            "12": 10.733225,
            "50": 10.022392
        },
        "sma": {
            "5": 10.792784,
            "10": 10.558264,
            "20": 10.161061
        },
        "sar": {
            "BB": 10.45
        },
        "kdj": {
            "k": 45.753803,
            "d": 45.633209,
            "j": 45.994995
        },
        "rsi": {
            "1": 66.88427,
            "2": 68.945602,
            "3": 71.859764
        },
        "dma": {
            "dif": 0.698689,
            "ama": 0.735451
        },
        "macd": {
            "dif": 0.339374,
            "dea": 0.368283,
            "macd": -0.057819
        }
    },
    {
        "time": "2017-8-3 0:0:0",
        "open": 11.140000343322754,
        "high": 11.220000267028809,
        "low": 10.970000267028809,
        "close": 11.010000228881836,
        "volume": 98421936,
        "amount": 1090954112,
        "ma": {
            "5": 10.838,
            "10": 10.874,
            "20": 10.627,
            "60": 10.202,
            "120": 10.202
        },
        "boll": {
            "mid": 10.627,
            "upper": 11.715025,
            "lower": 9.538975
        },
        "ema": {
            "12": 10.797344,
            "50": 10.066612
        },
        "sma": {
            "5": 10.864227,
            "10": 10.617437,
            "20": 10.210508
        },
        "sar": {
            "BB": 10.5004
        },
        "kdj": {
            "k": 56.719746,
            "d": 49.32872,
            "j": 71.501801
        },
        "rsi": {
            "1": 70.704994,
            "2": 71.031258,
            "3": 73.171143
        },
        "dma": {
            "dif": 0.672,
            "ama": 0.751251
        },
        "macd": {
            "dif": 0.347482,
            "dea": 0.364123,
            "macd": -0.033282
        }
    },
    {
        "time": "2017-8-4 0:0:0",
        "open": 11,
        "high": 11.289999961853027,
        "low": 10.930000305175781,
        "close": 11.170000076293945,
        "volume": 135395152,
        "amount": 1511389824,
        "ma": {
            "5": 10.922,
            "10": 10.878,
            "20": 10.7075,
            "60": 10.228065,
            "120": 10.228065
        },
        "boll": {
            "mid": 10.7075,
            "upper": 11.640493,
            "lower": 9.774506
        },
        "ema": {
            "12": 10.83006,
            "50": 10.103608
        },
        "sma": {
            "5": 10.893382,
            "10": 10.656694,
            "20": 10.250483
        },
        "sar": {
            "BB": 10.567568
        },
        "kdj": {
            "k": 58.786953,
            "d": 52.481464,
            "j": 71.397926
        },
        "rsi": {
            "1": 60.112606,
            "2": 64.972679,
            "3": 68.906555
        },
        "dma": {
            "dif": 0.649936,
            "ama": 0.754401
        },
        "macd": {
            "dif": 0.338706,
            "dea": 0.35904,
            "macd": -0.040667
        }
    },
    {
        "time": "2017-8-7 0:0:0",
        "open": 11.0600004196167,
        "high": 11.170000076293945,
        "low": 10.899999618530273,
        "close": 11,
        "volume": 86064424,
        "amount": 946975680,
        "ma": {
            "5": 11.008,
            "10": 10.906,
            "20": 10.7925,
            "60": 10.257501,
            "120": 10.257501
        },
        "boll": {
            "mid": 10.7925,
            "upper": 11.542609,
            "lower": 10.04239
        },
        "ema": {
            "12": 10.882359,
            "50": 10.145428
        },
        "sma": {
            "5": 10.948706,
            "10": 10.708025,
            "20": 10.296458
        },
        "sar": {
            "BB": 10.64586
        },
        "kdj": {
            "k": 66.157593,
            "d": 57.040173,
            "j": 84.392433
        },
        "rsi": {
            "1": 66.91095,
            "2": 68.3395,
            "3": 70.927246
        },
        "dma": {
            "dif": 0.648499,
            "ama": 0.747624
        },
        "macd": {
            "dif": 0.340734,
            "dea": 0.355379,
            "macd": -0.029288
        }
    },
    {
        "time": "2017-8-8 0:0:0",
        "open": 11,
        "high": 11.109999656677246,
        "low": 10.90999984741211,
        "close": 11.050000190734863,
        "volume": 68956744,
        "amount": 758872000,
        "ma": {
            "5": 11.073999,
            "10": 10.911,
            "20": 10.862999,
            "60": 10.280001,
            "120": 10.280001
        },
        "boll": {
            "mid": 10.862999,
            "upper": 11.359408,
            "lower": 10.36659
        },
        "ema": {
            "12": 10.900457,
            "50": 10.17894
        },
        "sma": {
            "5": 10.958964,
            "10": 10.737223,
            "20": 10.331635
        },
        "sar": {
            "BB": 10.723157
        },
        "kdj": {
            "k": 64.704308,
            "d": 59.594883,
            "j": 74.923149
        },
        "rsi": {
            "1": 54.966278,
            "2": 61.488907,
            "3": 66.160294
        },
        "dma": {
            "dif": 0.631,
            "ama": 0.729789
        },
        "macd": {
            "dif": 0.32488,
            "dea": 0.349279,
            "macd": -0.048798
        }
    },
    {
        "time": "2017-8-9 0:0:0",
        "open": 10.960000038146973,
        "high": 11.020000457763672,
        "low": 10.680000305175781,
        "close": 10.729999542236328,
        "volume": 104232184,
        "amount": 1126512128,
        "ma": {
            "5": 11.076,
            "10": 10.916,
            "20": 10.902999,
            "60": 10.302648,
            "120": 10.302648
        },
        "boll": {
            "mid": 10.902999,
            "upper": 11.312789,
            "lower": 10.493209
        },
        "ema": {
            "12": 10.923464,
            "50": 10.213099
        },
        "sma": {
            "5": 10.977171,
            "10": 10.7685,
            "20": 10.367554
        },
        "sar": {
            "BB": 10.776778
        },
        "kdj": {
            "k": 65.608124,
            "d": 61.599293,
            "j": 73.625786
        },
        "rsi": {
            "1": 57.635487,
            "2": 62.688976,
            "3": 66.844193
        },
        "dma": {
            "dif": 0.613353,
            "ama": 0.706833
        },
        "macd": {
            "dif": 0.312743,
            "dea": 0.341972,
            "macd": -0.058457
        }
    },
    {
        "time": "2017-8-10 0:0:0",
        "open": 10.699999809265137,
        "high": 10.819999694824219,
        "low": 10.539999961853027,
        "close": 10.619999885559082,
        "volume": 95988000,
        "amount": 1026675968,
        "ma": {
            "5": 10.992,
            "10": 10.915001,
            "20": 10.922499,
            "60": 10.314857,
            "120": 10.314857
        },
        "boll": {
            "mid": 10.922499,
            "upper": 11.24789,
            "lower": 10.597107
        },
        "ema": {
            "12": 10.893701,
            "50": 10.23337
        },
        "sma": {
            "5": 10.927736,
            "10": 10.76465,
            "20": 10.385675
        },
        "sar": {
            "BB": 11.34
        },
        "kdj": {
            "k": 54.225628,
            "d": 59.141403,
            "j": 44.394073
        },
        "rsi": {
            "1": 39.606476,
            "2": 51.487221,
            "3": 58.895248
        },
        "dma": {
            "dif": 0.600143,
            "ama": 0.681327
        },
        "macd": {
            "dif": 0.274145,
            "dea": 0.328406,
            "macd": -0.108522
        }
    },
    {
        "time": "2017-8-11 0:0:0",
        "open": 10.479999542236328,
        "high": 10.539999961853027,
        "low": 9.989998817443848,
        "close": 10.020001411437988,
        "volume": 244064336,
        "amount": 2501779712,
        "ma": {
            "5": 10.914,
            "10": 10.918,
            "20": 10.908499,
            "60": 10.323334,
            "120": 10.323334
        },
        "boll": {
            "mid": 10.908499,
            "upper": 11.261003,
            "lower": 10.555994
        },
        "ema": {
            "12": 10.851592,
            "50": 10.248531
        },
        "sma": {
            "5": 10.866189,
            "10": 10.750185,
            "20": 10.397391
        },
        "sar": {
            "BB": 11.2872
        },
        "kdj": {
            "k": 42.51746,
            "d": 53.600086,
            "j": 20.352211
        },
        "rsi": {
            "1": 35.079971,
            "2": 48.253838,
            "3": 56.485836
        },
        "dma": {
            "dif": 0.594666,
            "ama": 0.660355
        },
        "macd": {
            "dif": 0.232003,
            "dea": 0.309126,
            "macd": -0.154245
        }
    },
    {
        "time": "2017-8-14 0:0:0",
        "open": 10.130000114440918,
        "high": 10.25,
        "low": 10.039999961853027,
        "close": 10.220001220703125,
        "volume": 115766464,
        "amount": 1175479168,
        "ma": {
            "5": 10.684,
            "10": 10.846002,
            "20": 10.864499,
            "60": 10.315135,
            "120": 10.315135
        },
        "boll": {
            "mid": 10.864499,
            "upper": 11.395836,
            "lower": 10.333162
        },
        "ema": {
            "12": 10.723656,
            "50": 10.23957
        },
        "sma": {
            "5": 10.696951,
            "10": 10.677167,
            "20": 10.378522
        },
        "sar": {
            "BB": 11.197536
        },
        "kdj": {
            "k": 29.085777,
            "d": 45.42865,
            "j": -3.599968
        },
        "rsi": {
            "1": 20.067942,
            "2": 35.127335,
            "3": 45.817383
        },
        "dma": {
            "dif": 0.530867,
            "ama": 0.636994
        },
        "macd": {
            "dif": 0.148481,
            "dea": 0.276997,
            "macd": -0.257031
        }
    },
    {
        "time": "2017-8-15 0:0:0",
        "open": 10.239998817443848,
        "high": 10.510000228881836,
        "low": 10.210000038146973,
        "close": 10.3100004196167,
        "volume": 107516232,
        "amount": 1116749952,
        "ma": {
            "5": 10.528,
            "10": 10.801001,
            "20": 10.834999,
            "60": 10.312632,
            "120": 10.312632
        },
        "boll": {
            "mid": 10.834999,
            "upper": 11.439532,
            "lower": 10.230466
        },
        "ema": {
            "12": 10.64617,
            "50": 10.238802
        },
        "sma": {
            "5": 10.601561,
            "10": 10.631451,
            "20": 10.370596
        },
        "sar": {
            "BB": 11.052631
        },
        "kdj": {
            "k": 25.069586,
            "d": 38.642296,
            "j": -2.075836
        },
        "rsi": {
            "1": 31.750553,
            "2": 40.9669,
            "3": 49.157421
        },
        "dma": {
            "dif": 0.488369,
            "ama": 0.612752
        },
        "macd": {
            "dif": 0.097304,
            "dea": 0.241058,
            "macd": -0.287508
        }
    },
    {
        "time": "2017-8-16 0:0:0",
        "open": 10.289999961853027,
        "high": 10.369999885559082,
        "low": 10.149999618530273,
        "close": 10.34000015258789,
        "volume": 75680600,
        "amount": 778517632,
        "ma": {
            "5": 10.38,
            "10": 10.728001,
            "20": 10.797999,
            "60": 10.312564,
            "120": 10.312564
        },
        "boll": {
            "mid": 10.797999,
            "upper": 11.436762,
            "lower": 10.159237
        },
        "ema": {
            "12": 10.594452,
            "50": 10.241594
        },
        "sma": {
            "5": 10.543249,
            "10": 10.599306,
            "20": 10.367566
        },
        "sar": {
            "BB": 10.931115
        },
        "kdj": {
            "k": 24.918219,
            "d": 34.067604,
            "j": 6.619446
        },
        "rsi": {
            "1": 36.74305,
            "2": 43.465137,
            "3": 50.5877
        },
        "dma": {
            "dif": 0.415437,
            "ama": 0.584427
        },
        "macd": {
            "dif": 0.06328,
            "dea": 0.205503,
            "macd": -0.284445
        }
    },
    {
        "time": "2017-8-17 0:0:0",
        "open": 10.350000381469727,
        "high": 10.420000076293945,
        "low": 10.289999961853027,
        "close": 10.420000076293945,
        "volume": 55364212,
        "amount": 573093952,
        "ma": {
            "5": 10.302,
            "10": 10.647,
            "20": 10.7605,
            "60": 10.31325,
            "120": 10.31325
        },
        "boll": {
            "mid": 10.7605,
            "upper": 11.414907,
            "lower": 10.106093
        },
        "ema": {
            "12": 10.555305,
            "50": 10.245454
        },
        "sma": {
            "5": 10.5026,
            "10": 10.573375,
            "20": 10.366187
        },
        "sar": {
            "BB": 10.815737
        },
        "kdj": {
            "k": 25.586533,
            "d": 31.24058,
            "j": 14.278439
        },
        "rsi": {
            "1": 38.541348,
            "2": 44.321957,
            "3": 51.066513
        },
        "dma": {
            "dif": 0.333751,
            "ama": 0.550602
        },
        "macd": {
            "dif": 0.038295,
            "dea": 0.172061,
            "macd": -0.267533
        }
    },
    {
        "time": "2017-8-18 0:0:0",
        "open": 10.359999656677246,
        "high": 10.600000381469727,
        "low": 10.289999961853027,
        "close": 10.4399995803833,
        "volume": 61652040,
        "amount": 643188736,
        "ma": {
            "5": 10.262001,
            "10": 10.588,
            "20": 10.733,
            "60": 10.315854,
            "120": 10.315854
        },
        "boll": {
            "mid": 10.733,
            "upper": 11.396455,
            "lower": 10.069545
        },
        "ema": {
            "12": 10.534489,
            "50": 10.252298
        },
        "sma": {
            "5": 10.486079,
            "10": 10.558037,
            "20": 10.368877
        },
        "sar": {
            "BB": 10.709219
        },
        "kdj": {
            "k": 29.204605,
            "d": 30.56192,
            "j": 26.489975
        },
        "rsi": {
            "1": 43.666138,
            "2": 46.673103,
            "3": 52.351307
        },
        "dma": {
            "dif": 0.272146,
            "ama": 0.512823
        },
        "macd": {
            "dif": 0.024664,
            "dea": 0.142582,
            "macd": -0.235835
        }
    },
    {
        "time": "2017-8-21 0:0:0",
        "open": 10.430000305175781,
        "high": 10.520000457763672,
        "low": 10.390000343322754,
        "close": 10.460000038146973,
        "volume": 39915488,
        "amount": 417653120,
        "ma": {
            "5": 10.346,
            "10": 10.514999,
            "20": 10.7105,
            "60": 10.31881,
            "120": 10.31881
        },
        "boll": {
            "mid": 10.7105,
            "upper": 11.382055,
            "lower": 10.038944
        },
        "ema": {
            "12": 10.519952,
            "50": 10.259659
        },
        "sma": {
            "5": 10.476863,
            "10": 10.546233,
            "20": 10.372434
        },
        "sar": {
            "BB": 10.642144
        },
        "kdj": {
            "k": 32.862606,
            "d": 31.328817,
            "j": 35.93018
        },
        "rsi": {
            "1": 45.040947,
            "2": 47.280235,
            "3": 52.675446
        },
        "dma": {
            "dif": 0.19619,
            "ama": 0.467592
        },
        "macd": {
            "dif": 0.015299,
            "dea": 0.117125,
            "macd": -0.203653
        }
    },
    {
        "time": "2017-8-22 0:0:0",
        "open": 10.479999542236328,
        "high": 10.65999984741211,
        "low": 10.369999885559082,
        "close": 10.649999618530273,
        "volume": 87568184,
        "amount": 922881856,
        "ma": {
            "5": 10.394,
            "10": 10.461,
            "20": 10.686,
            "60": 10.322093,
            "120": 10.322093
        },
        "boll": {
            "mid": 10.686,
            "upper": 11.356483,
            "lower": 10.015516
        },
        "ema": {
            "12": 10.510729,
            "50": 10.267516
        },
        "sma": {
            "5": 10.47349,
            "10": 10.53761,
            "20": 10.376812
        },
        "sar": {
            "BB": 10.585801
        },
        "kdj": {
            "k": 37.118774,
            "d": 33.258804,
            "j": 44.838715
        },
        "rsi": {
            "1": 46.604736,
            "2": 47.927025,
            "3": 53.009022
        },
        "dma": {
            "dif": 0.138907,
            "ama": 0.418383
        },
        "macd": {
            "dif": 0.009384,
            "dea": 0.095577,
            "macd": -0.172386
        }
    },
    {
        "time": "2017-8-23 0:0:0",
        "open": 10.630000114440918,
        "high": 10.979999542236328,
        "low": 10.59000015258789,
        "close": 10.899999618530273,
        "volume": 131915192,
        "amount": 1430051968,
        "ma": {
            "5": 10.462,
            "10": 10.421,
            "20": 10.6685,
            "60": 10.329545,
            "120": 10.329545
        },
        "boll": {
            "mid": 10.6685,
            "upper": 11.322593,
            "lower": 10.014407
        },
        "ema": {
            "12": 10.532155,
            "50": 10.282516
        },
        "sma": {
            "5": 10.508792,
            "10": 10.548849,
            "20": 10.390471
        },
        "sar": {
            "BB": 9.989999
        },
        "kdj": {
            "k": 51.251881,
            "d": 39.256496,
            "j": 75.242653
        },
        "rsi": {
            "1": 59.68235,
            "2": 53.800888,
            "3": 56.077938
        },
        "dma": {
            "dif": 0.091455,
            "ama": 0.366193
        },
        "macd": {
            "dif": 0.019798,
            "dea": 0.080421,
            "macd": -0.121246
        }
    },
    {
        "time": "2017-8-24 0:0:0",
        "open": 10.890000343322754,
        "high": 11.109999656677246,
        "low": 10.84000015258789,
        "close": 10.930000305175781,
        "volume": 92424864,
        "amount": 1014933632,
        "ma": {
            "5": 10.574,
            "10": 10.438001,
            "20": 10.6765,
            "60": 10.342222,
            "120": 10.342222
        },
        "boll": {
            "mid": 10.6765,
            "upper": 11.338156,
            "lower": 10.014845
        },
        "ema": {
            "12": 10.588747,
            "50": 10.30673
        },
        "sma": {
            "5": 10.587033,
            "10": 10.583964,
            "20": 10.415947
        },
        "sar": {
            "BB": 10.043599
        },
        "kdj": {
            "k": 64.807655,
            "d": 47.773548,
            "j": 98.875877
        },
        "rsi": {
            "1": 70.92585,
            "2": 60.238827,
            "3": 59.692295
        },
        "dma": {
            "dif": 0.095778,
            "ama": 0.315757
        },
        "macd": {
            "dif": 0.047676,
            "dea": 0.073872,
            "macd": -0.052392
        }
    },
    {
        "time": "2017-8-25 0:0:0",
        "open": 10.9399995803833,
        "high": 11.170000076293945,
        "low": 10.899999618530273,
        "close": 11.109999656677246,
        "volume": 96394000,
        "amount": 1068994560,
        "ma": {
            "5": 10.676,
            "10": 10.469001,
            "20": 10.6935,
            "60": 10.355,
            "120": 10.355
        },
        "boll": {
            "mid": 10.6935,
            "upper": 11.363215,
            "lower": 10.023784
        },
        "ema": {
            "12": 10.641247,
            "50": 10.331172
        },
        "sma": {
            "5": 10.655626,
            "10": 10.618567,
            "20": 10.441648
        },
        "sar": {
            "BB": 10.155967
        },
        "kdj": {
            "k": 70.930977,
            "d": 55.492691,
            "j": 101.807556
        },
        "rsi": {
            "1": 72.048355,
            "2": 60.951191,
            "3": 60.103405
        },
        "dma": {
            "dif": 0.114001,
            "ama": 0.26769
        },
        "macd": {
            "dif": 0.071366,
            "dea": 0.073371,
            "macd": -0.004009
        }
    },
    {
        "time": "2017-8-28 0:0:0",
        "open": 11.100000381469727,
        "high": 11.539999961853027,
        "low": 11.100000381469727,
        "close": 11.350000381469727,
        "volume": 160393824,
        "amount": 1828380032,
        "ma": {
            "5": 10.81,
            "10": 10.578,
            "20": 10.712,
            "60": 10.371063,
            "120": 10.371063
        },
        "boll": {
            "mid": 10.712,
            "upper": 11.406995,
            "lower": 10.017005
        },
        "ema": {
            "12": 10.713363,
            "50": 10.361714
        },
        "sma": {
            "5": 10.746501,
            "10": 10.667711,
            "20": 10.475066
        },
        "sar": {
            "BB": 10.308612
        },
        "kdj": {
            "k": 78.659851,
            "d": 63.215076,
            "j": 109.5494
        },
        "rsi": {
            "1": 78.128113,
            "2": 65.04966,
            "3": 62.498081
        },
        "dma": {
            "dif": 0.206937,
            "ama": 0.235297
        },
        "macd": {
            "dif": 0.103474,
            "dea": 0.079392,
            "macd": 0.048164
        }
    },
    {
        "time": "2017-8-29 0:0:0",
        "open": 11.300000190734863,
        "high": 11.739999771118164,
        "low": 11.279999732971191,
        "close": 11.670000076293945,
        "volume": 135798368,
        "amount": 1569230080,
        "ma": {
            "5": 10.988001,
            "10": 10.691,
            "20": 10.746,
            "60": 10.391458,
            "120": 10.391458
        },
        "boll": {
            "mid": 10.746,
            "upper": 11.496685,
            "lower": 9.995316
        },
        "ema": {
            "12": 10.811307,
            "50": 10.400471
        },
        "sma": {
            "5": 10.867201,
            "10": 10.73594,
            "20": 10.518813
        },
        "sar": {
            "BB": 10.480889
        },
        "kdj": {
            "k": 81.216888,
            "d": 69.215675,
            "j": 105.219315
        },
        "rsi": {
            "1": 83.774773,
            "2": 69.678703,
            "3": 65.388466
        },
        "dma": {
            "dif": 0.299542,
            "ama": 0.216415
        },
        "macd": {
            "dif": 0.146595,
            "dea": 0.092832,
            "macd": 0.107526
        }
    },
    {
        "time": "2017-8-30 0:0:0",
        "open": 11.680000305175781,
        "high": 11.699999809265137,
        "low": 11.350000381469727,
        "close": 11.430000305175781,
        "volume": 109667472,
        "amount": 1264128128,
        "ma": {
            "5": 11.191999,
            "10": 10.827,
            "20": 10.777501,
            "60": 10.417551,
            "120": 10.417551
        },
        "boll": {
            "mid": 10.777501,
            "upper": 11.626528,
            "lower": 9.928474
        },
        "ema": {
            "12": 10.943414,
            "50": 10.450256
        },
        "sma": {
            "5": 11.027761,
            "10": 10.829346,
            "20": 10.576372
        },
        "sar": {
            "BB": 10.692712
        },
        "kdj": {
            "k": 85.868736,
            "d": 74.766693,
            "j": 108.072815
        },
        "rsi": {
            "1": 88.517754,
            "2": 74.576492,
            "3": 68.740479
        },
        "dma": {
            "dif": 0.409449,
            "ama": 0.215816
        },
        "macd": {
            "dif": 0.204236,
            "dea": 0.115113,
            "macd": 0.178246
        }
    },
    {
        "time": "2017-8-31 0:0:0",
        "open": 11.390000343322754,
        "high": 11.4399995803833,
        "low": 11.149999618530273,
        "close": 11.279999732971191,
        "volume": 115178648,
        "amount": 1297730560,
        "ma": {
            "5": 11.297999,
            "10": 10.936,
            "20": 10.791499,
            "60": 10.4378,
            "120": 10.4378
        },
        "boll": {
            "mid": 10.791499,
            "upper": 11.675011,
            "lower": 9.907988
        },
        "ema": {
            "12": 11.018273,
            "50": 10.488678
        },
        "sma": {
            "5": 11.108209,
            "10": 10.889411,
            "20": 10.619054
        },
        "sar": {
            "BB": 10.902169
        },
        "kdj": {
            "k": 83.452736,
            "d": 77.662041,
            "j": 95.034134
        },
        "rsi": {
            "1": 70.080368,
            "2": 65.870926,
            "3": 63.897495
        },
        "dma": {
            "dif": 0.498199,
            "ama": 0.232261
        },
        "macd": {
            "dif": 0.227923,
            "dea": 0.137675,
            "macd": 0.180497
        }
    },
    {
        "time": "2017-9-1 0:0:0",
        "open": 11.279999732971191,
        "high": 11.390000343322754,
        "low": 11.149999618530273,
        "close": 11.210000038146973,
        "volume": 95997688,
        "amount": 1080996352,
        "ma": {
            "5": 11.367999,
            "10": 11.021999,
            "20": 10.805,
            "60": 10.454314,
            "120": 10.454314
        },
        "boll": {
            "mid": 10.805,
            "upper": 11.710485,
            "lower": 9.899516
        },
        "ema": {
            "12": 11.058538,
            "50": 10.51971
        },
        "sma": {
            "5": 11.142567,
            "10": 10.92847,
            "20": 10.652102
        },
        "sar": {
            "BB": 11.061735
        },
        "kdj": {
            "k": 77.776276,
            "d": 77.700119,
            "j": 77.928589
        },
        "rsi": {
            "1": 60.611706,
            "2": 61.014687,
            "3": 61.090511
        },
        "dma": {
            "dif": 0.543598,
            "ama": 0.259406
        },
        "macd": {
            "dif": 0.231918,
            "dea": 0.156524,
            "macd": 0.150789
        }
    },
    {
        "time": "2017-9-4 0:0:0",
        "open": 11.180000305175781,
        "high": 11.720000267028809,
        "low": 11.170000076293945,
        "close": 11.720000267028809,
        "volume": 135232560,
        "amount": 1551874944,
        "ma": {
            "5": 11.388,
            "10": 11.099,
            "20": 10.807,
            "60": 10.468847,
            "120": 10.468847
        },
        "boll": {
            "mid": 10.807,
            "upper": 11.716042,
            "lower": 9.897959
        },
        "ema": {
            "12": 11.081841,
            "50": 10.54678
        },
        "sma": {
            "5": 11.156054,
            "10": 10.956622,
            "20": 10.679996
        },
        "sar": {
            "BB": 11.137388
        },
        "kdj": {
            "k": 72.288811,
            "d": 75.896355,
            "j": 65.073715
        },
        "rsi": {
            "1": 56.348289,
            "2": 58.807545,
            "3": 59.811062
        },
        "dma": {
            "dif": 0.5814,
            "ama": 0.297927
        },
        "macd": {
            "dif": 0.226822,
            "dea": 0.170583,
            "macd": 0.112477
        }
    },
    {
        "time": "2017-9-5 0:0:0",
        "open": 11.680000305175781,
        "high": 11.9399995803833,
        "low": 11.600000381469727,
        "close": 11.640000343322754,
        "volume": 128751872,
        "amount": 1513759488,
        "ma": {
            "5": 11.462,
            "10": 11.225,
            "20": 10.843,
            "60": 10.492454,
            "120": 10.492454
        },
        "boll": {
            "mid": 10.843,
            "upper": 11.837248,
            "lower": 9.848753
        },
        "ema": {
            "12": 11.180019,
            "50": 10.592789
        },
        "sma": {
            "5": 11.268843,
            "10": 11.03296,
            "20": 10.731997
        },
        "sar": {
            "BB": 11.74
        },
        "kdj": {
            "k": 80.946175,
            "d": 77.579628,
            "j": 87.679276
        },
        "rsi": {
            "1": 72.970634,
            "2": 68.00621,
            "3": 65.331169
        },
        "dma": {
            "dif": 0.659,
            "ama": 0.349936
        },
        "macd": {
            "dif": 0.260928,
            "dea": 0.188652,
            "macd": 0.144552
        }
    },
    {
        "time": "2017-9-6 0:0:0",
        "open": 11.59000015258789,
        "high": 11.880000114440918,
        "low": 11.479999542236328,
        "close": 11.699999809265137,
        "volume": 79162152,
        "amount": 925519040,
        "ma": {
            "5": 11.455999,
            "10": 11.323999,
            "20": 10.8725,
            "60": 10.513704,
            "120": 10.513704
        },
        "boll": {
            "mid": 10.8725,
            "upper": 11.925847,
            "lower": 9.819154
        },
        "ema": {
            "12": 11.250785,
            "50": 10.633856
        },
        "sma": {
            "5": 11.343074,
            "10": 11.093664,
            "20": 10.777396
        },
        "sar": {
            "BB": 10.59
        },
        "kdj": {
            "k": 78.206558,
            "d": 77.788605,
            "j": 79.042465
        },
        "rsi": {
            "1": 68.090019,
            "2": 65.50312,
            "3": 63.894661
        },
        "dma": {
            "dif": 0.7124,
            "ama": 0.412031
        },
        "macd": {
            "dif": 0.278293,
            "dea": 0.20658,
            "macd": 0.143425
        }
    },
    {
        "time": "2017-9-7 0:0:0",
        "open": 11.649999618530273,
        "high": 11.75,
        "low": 11.390000343322754,
        "close": 11.4399995803833,
        "volume": 61418724,
        "amount": 711036416,
        "ma": {
            "5": 11.51,
            "10": 11.403999,
            "20": 10.921,
            "60": 10.535274,
            "120": 10.535274
        },
        "boll": {
            "mid": 10.921,
            "upper": 12.034353,
            "lower": 9.807646
        },
        "ema": {
            "12": 11.319895,
            "50": 10.675665
        },
        "sma": {
            "5": 11.414459,
            "10": 11.154298,
            "20": 10.823526
        },
        "sar": {
            "BB": 10.644
        },
        "kdj": {
            "k": 77.77874,
            "d": 77.785316,
            "j": 77.765579
        },
        "rsi": {
            "1": 69.90181,
            "2": 66.511604,
            "3": 64.505455
        },
        "dma": {
            "dif": 0.747,
            "ama": 0.477153
        },
        "macd": {
            "dif": 0.293513,
            "dea": 0.223967,
            "macd": 0.139093
        }
    },
    {
        "time": "2017-9-8 0:0:0",
        "open": 11.460000038146973,
        "high": 11.640000343322754,
        "low": 11.380000114440918,
        "close": 11.489999771118164,
        "volume": 48127616,
        "amount": 553644544,
        "ma": {
            "5": 11.542,
            "10": 11.455,
            "20": 10.962,
            "60": 10.55143,
            "120": 10.55143
        },
        "boll": {
            "mid": 10.962,
            "upper": 12.088972,
            "lower": 9.835028
        },
        "ema": {
            "12": 11.338373,
            "50": 10.705639
        },
        "sma": {
            "5": 11.419567,
            "10": 11.182868,
            "20": 10.85435
        },
        "sar": {
            "BB": 10.69344
        },
        "kdj": {
            "k": 65.344536,
            "d": 73.63839,
            "j": 48.756821
        },
        "rsi": {
            "1": 53.967876,
            "2": 58.435852,
            "3": 59.921783
        },
        "dma": {
            "dif": 0.7578,
            "ama": 0.541533
        },
        "macd": {
            "dif": 0.281353,
            "dea": 0.235444,
            "macd": 0.091818
        }
    },
    {
        "time": "2017-9-11 0:0:0",
        "open": 11.539999961853027,
        "high": 11.6899995803833,
        "low": 11.300000190734863,
        "close": 11.380000114440918,
        "volume": 69947272,
        "amount": 801825024,
        "ma": {
            "5": 11.598,
            "10": 11.492999,
            "20": 11.035501,
            "60": 10.567896,
            "120": 10.567896
        },
        "boll": {
            "mid": 11.035501,
            "upper": 12.093406,
            "lower": 9.977597
        },
        "ema": {
            "12": 11.3617,
            "50": 10.736399
        },
        "sma": {
            "5": 11.433653,
            "10": 11.213581,
            "20": 10.886133
        },
        "sar": {
            "BB": 10.735703
        },
        "kdj": {
            "k": 57.909023,
            "d": 68.395271,
            "j": 36.936523
        },
        "rsi": {
            "1": 56.268311,
            "2": 59.4683,
            "3": 60.485237
        },
        "dma": {
            "dif": 0.753799,
            "ama": 0.596219
        },
        "macd": {
            "dif": 0.272608,
            "dea": 0.242877,
            "macd": 0.059462
        }
    },
    {
        "time": "2017-9-12 0:0:0",
        "open": 11.380000114440918,
        "high": 11.539999961853027,
        "low": 11.270000457763672,
        "close": 11.539999961853027,
        "volume": 84618344,
        "amount": 962032128,
        "ma": {
            "5": 11.53,
            "10": 11.496,
            "20": 11.093501,
            "60": 10.581898,
            "120": 10.581898
        },
        "boll": {
            "mid": 11.093501,
            "upper": 12.088451,
            "lower": 10.098551
        },
        "ema": {
            "12": 11.364515,
            "50": 10.761638
        },
        "sma": {
            "5": 11.422922,
            "10": 11.230223,
            "20": 10.910827
        },
        "sar": {
            "BB": 10.808046
        },
        "kdj": {
            "k": 48.31068,
            "d": 61.700409,
            "j": 21.531219
        },
        "rsi": {
            "1": 49.70998,
            "2": 56.122543,
            "3": 58.594173
        },
        "dma": {
            "dif": 0.717201,
            "ama": 0.637985
        },
        "macd": {
            "dif": 0.253874,
            "dea": 0.245076,
            "macd": 0.017595
        }
    },
    {
        "time": "2017-9-13 0:0:0",
        "open": 11.489999771118164,
        "high": 11.539999961853027,
        "low": 11.34000015258789,
        "close": 11.430000305175781,
        "volume": 66823744,
        "amount": 765028160,
        "ma": {
            "5": 11.51,
            "10": 11.483,
            "20": 11.155001,
            "60": 10.598136,
            "120": 10.598136
        },
        "boll": {
            "mid": 11.155001,
            "upper": 12.096702,
            "lower": 10.2133
        },
        "ema": {
            "12": 11.391513,
            "50": 10.792162
        },
        "sma": {
            "5": 11.446338,
            "10": 11.261201,
            "20": 10.942286
        },
        "sar": {
            "BB": 10.878603
        },
        "kdj": {
            "k": 48.66283,
            "d": 57.354549,
            "j": 31.279396
        },
        "rsi": {
            "1": 58.211487,
            "2": 59.718628,
            "3": 60.470009
        },
        "dma": {
            "dif": 0.660201,
            "ama": 0.66306
        },
        "macd": {
            "dif": 0.249067,
            "dea": 0.245874,
            "macd": 0.006386
        }
    },
    {
        "time": "2017-9-14 0:0:0",
        "open": 11.430000305175781,
        "high": 11.59000015258789,
        "low": 11.239999771118164,
        "close": 11.319999694824219,
        "volume": 88308776,
        "amount": 1005775488,
        "ma": {
            "5": 11.456,
            "10": 11.483,
            "20": 11.2095,
            "60": 10.612,
            "120": 10.612
        },
        "boll": {
            "mid": 11.2095,
            "upper": 12.07581,
            "lower": 10.34319
        },
        "ema": {
            "12": 11.397434,
            "50": 10.817175
        },
        "sma": {
            "5": 11.44307,
            "10": 11.278081,
            "20": 10.966672
        },
        "sar": {
            "BB": 10.931515
        },
        "kdj": {
            "k": 44.25626,
            "d": 52.988453,
            "j": 26.791878
        },
        "rsi": {
            "1": 51.086658,
            "2": 56.260414,
            "3": 58.56657
        },
        "dma": {
            "dif": 0.619,
            "ama": 0.67514
        },
        "macd": {
            "dif": 0.233688,
            "dea": 0.243437,
            "macd": -0.019498
        }
    },
    {
        "time": "2017-9-15 0:0:0",
        "open": 11.289999961853027,
        "high": 11.319999694824219,
        "low": 11.149999618530273,
        "close": 11.289999961853027,
        "volume": 64609480,
        "amount": 726061120,
        "ma": {
            "5": 11.432,
            "10": 11.487,
            "20": 11.254499,
            "60": 10.646501,
            "120": 10.623608
        },
        "boll": {
            "mid": 11.254499,
            "upper": 12.037648,
            "lower": 10.471351
        },
        "ema": {
            "12": 11.385521,
            "50": 10.836894
        },
        "sma": {
            "5": 11.418456,
            "10": 11.282273,
            "20": 10.984339
        },
        "sar": {
            "BB": 11.004533
        },
        "kdj": {
            "k": 35.997669,
            "d": 47.32486,
            "j": 13.343292
        },
        "rsi": {
            "1": 44.544182,
            "2": 52.917439,
            "3": 56.704052
        },
        "dma": {
            "dif": 0.584599,
            "ama": 0.67924
        },
        "macd": {
            "dif": 0.2102,
            "dea": 0.23679,
            "macd": -0.053179
        }
    },
    {
        "time": "2017-9-18 0:0:0",
        "open": 11.25,
        "high": 11.319999694824219,
        "low": 11.199999809265137,
        "close": 11.25,
        "volume": 60761296,
        "amount": 684223040,
        "ma": {
            "5": 11.392,
            "10": 11.495,
            "20": 11.297001,
            "60": 10.680499,
            "120": 10.634356
        },
        "boll": {
            "mid": 11.297001,
            "upper": 11.97979,
            "lower": 10.614212
        },
        "ema": {
            "12": 11.370826,
            "50": 10.854663
        },
        "sma": {
            "5": 11.392765,
            "10": 11.283046,
            "20": 10.999621
        },
        "sar": {
            "BB": 11.074789
        },
        "kdj": {
            "k": 29.905634,
            "d": 41.518452,
            "j": 6.68
        },
        "rsi": {
            "1": 42.752346,
            "2": 51.998203,
            "3": 56.19548
        },
        "dma": {
            "dif": 0.556201,
            "ama": 0.67672
        },
        "macd": {
            "dif": 0.187011,
            "dea": 0.226834,
            "macd": -0.079647
        }
    },
    {
        "time": "2017-9-19 0:0:0",
        "open": 11.25,
        "high": 11.34000015258789,
        "low": 11.079999923706055,
        "close": 11.130000114440918,
        "volume": 76421264,
        "amount": 853816000,
        "ma": {
            "5": 11.366,
            "10": 11.448,
            "20": 11.3365,
            "60": 10.712999,
            "120": 10.644127
        },
        "boll": {
            "mid": 11.3365,
            "upper": 11.895738,
            "lower": 10.777263
        },
        "ema": {
            "12": 11.352237,
            "50": 10.870166
        },
        "sma": {
            "5": 11.364212,
            "10": 11.279741,
            "20": 11.01214
        },
        "sar": {
            "BB": 11.104215
        },
        "kdj": {
            "k": 24.503313,
            "d": 35.846737,
            "j": 1.816467
        },
        "rsi": {
            "1": 40.167107,
            "2": 50.716721,
            "3": 55.502872
        },
        "dma": {
            "dif": 0.476001,
            "ama": 0.65842
        },
        "macd": {
            "dif": 0.163519,
            "dea": 0.214171,
            "macd": -0.101304
        }
    },
    {
        "time": "2017-9-20 0:0:0",
        "open": 11.140000343322754,
        "high": 11.369999885559082,
        "low": 11.050000190734863,
        "close": 11.289999961853027,
        "volume": 78715472,
        "amount": 884640960,
        "ma": {
            "5": 11.284,
            "10": 11.396999,
            "20": 11.3605,
            "60": 10.742498,
            "120": 10.651719
        },
        "boll": {
            "mid": 11.3605,
            "upper": 11.829568,
            "lower": 10.891433
        },
        "ema": {
            "12": 11.318047,
            "50": 10.880356
        },
        "sma": {
            "5": 11.317369,
            "10": 11.264767,
            "20": 11.018034
        },
        "sar": {
            "BB": 11.88
        },
        "kdj": {
            "k": 18.823114,
            "d": 30.172195,
            "j": -3.875046
        },
        "rsi": {
            "1": 32.986252,
            "2": 46.931446,
            "3": 53.440994
        },
        "dma": {
            "dif": 0.407401,
            "ama": 0.62792
        },
        "macd": {
            "dif": 0.133678,
            "dea": 0.198073,
            "macd": -0.128788
        }
    },
    {
        "time": "2017-9-21 0:0:0",
        "open": 11.260000228881836,
        "high": 11.510000228881836,
        "low": 11.199999809265137,
        "close": 11.460000038146973,
        "volume": 69240792,
        "amount": 788605312,
        "ma": {
            "5": 11.256001,
            "10": 11.356001,
            "20": 11.38,
            "60": 10.773499,
            "120": 10.661538
        },
        "boll": {
            "mid": 11.38,
            "upper": 11.798182,
            "lower": 10.961818
        },
        "ema": {
            "12": 11.313732,
            "50": 10.89642
        },
        "sma": {
            "5": 11.311895,
            "10": 11.26729,
            "20": 11.031632
        },
        "sar": {
            "BB": 11.816
        },
        "kdj": {
            "k": 25.048742,
            "d": 28.464378,
            "j": 18.217468
        },
        "rsi": {
            "1": 47.891369,
            "2": 52.128433,
            "3": 55.729156
        },
        "dma": {
            "dif": 0.347401,
            "ama": 0.587961
        },
        "macd": {
            "dif": 0.121539,
            "dea": 0.182766,
            "macd": -0.122453
        }
    },
    {
        "time": "2017-9-22 0:0:0",
        "open": 11.430000305175781,
        "high": 11.520000457763672,
        "low": 11.3100004196167,
        "close": 11.4399995803833,
        "volume": 59392760,
        "amount": 677622464,
        "ma": {
            "5": 11.284,
            "10": 11.358,
            "20": 11.4065,
            "60": 10.807332,
            "120": 10.673636
        },
        "boll": {
            "mid": 11.4065,
            "upper": 11.767932,
            "lower": 11.045068
        },
        "ema": {
            "12": 11.336235,
            "50": 10.918521
        },
        "sma": {
            "5": 11.341516,
            "10": 11.286561,
            "20": 11.053051
        },
        "sar": {
            "BB": 11.75472
        },
        "kdj": {
            "k": 38.053341,
            "d": 31.6607,
            "j": 50.838619
        },
        "rsi": {
            "1": 59.40382,
            "2": 57.008392,
            "3": 58.016724
        },
        "dma": {
            "dif": 0.3382,
            "ama": 0.546
        },
        "macd": {
            "dif": 0.124205,
            "dea": 0.171054,
            "macd": -0.093698
        }
    },
    {
        "time": "2017-9-25 0:0:0",
        "open": 11.4399995803833,
        "high": 11.449999809265137,
        "low": 11.180000305175781,
        "close": 11.289999961853027,
        "volume": 53239104,
        "amount": 602270272,
        "ma": {
            "5": 11.314,
            "10": 11.353,
            "20": 11.423,
            "60": 10.841498,
            "120": 10.685075
        },
        "boll": {
            "mid": 11.423,
            "upper": 11.75632,
            "lower": 11.089681
        },
        "ema": {
            "12": 11.352199,
            "50": 10.938972
        },
        "sma": {
            "5": 11.361213,
            "10": 11.301905,
            "20": 11.072398
        },
        "sar": {
            "BB": 11.710342
        },
        "kdj": {
            "k": 49.442932,
            "d": 37.588108,
            "j": 73.15258
        },
        "rsi": {
            "1": 57.606995,
            "2": 56.27216,
            "3": 57.651012
        },
        "dma": {
            "dif": 0.3224,
            "ama": 0.502861
        },
        "macd": {
            "dif": 0.123281,
            "dea": 0.161499,
            "macd": -0.076435
        }
    },
    {
        "time": "2017-9-26 0:0:0",
        "open": 11.260000228881836,
        "high": 11.300000190734863,
        "low": 10.960000038146973,
        "close": 11.050000190734863,
        "volume": 96746088,
        "amount": 1074228224,
        "ma": {
            "5": 11.322001,
            "10": 11.344,
            "20": 11.42,
            "60": 10.872998,
            "120": 10.693971
        },
        "boll": {
            "mid": 11.42,
            "upper": 11.757244,
            "lower": 11.082756
        },
        "ema": {
            "12": 11.342629,
            "50": 10.952737
        },
        "sma": {
            "5": 11.346971,
            "10": 11.300714,
            "20": 11.083278
        },
        "sar": {
            "BB": 11.662301
        },
        "kdj": {
            "k": 47.776752,
            "d": 40.984325,
            "j": 61.36161
        },
        "rsi": {
            "1": 45.28064,
            "2": 50.894623,
            "3": 54.940754
        },
        "dma": {
            "dif": 0.303801,
            "ama": 0.46152
        },
        "macd": {
            "dif": 0.109188,
            "dea": 0.151037,
            "macd": -0.083698
        }
    },
    {
        "time": "2017-9-27 0:0:0",
        "open": 11.010000228881836,
        "high": 11.079999923706055,
        "low": 10.899999618530273,
        "close": 10.930000305175781,
        "volume": 72718816,
        "amount": 798377280,
        "ma": {
            "5": 11.306,
            "10": 11.295,
            "20": 11.388999,
            "60": 10.901499,
            "120": 10.69913
        },
        "boll": {
            "mid": 11.388999,
            "upper": 11.743192,
            "lower": 11.034806
        },
        "ema": {
            "12": 11.297609,
            "50": 10.956552
        },
        "sma": {
            "5": 11.287577,
            "10": 11.275643,
            "20": 11.081614
        },
        "sar": {
            "BB": 11.585133
        },
        "kdj": {
            "k": 36.613079,
            "d": 39.527241,
            "j": 30.784752
        },
        "rsi": {
            "1": 32.095051,
            "2": 43.618942,
            "3": 50.942345
        },
        "dma": {
            "dif": 0.2548,
            "ama": 0.42098
        },
        "macd": {
            "dif": 0.077756,
            "dea": 0.136381,
            "macd": -0.11725
        }
    },
    {
        "time": "2017-9-28 0:0:0",
        "open": 10.979999542236328,
        "high": 10.979999542236328,
        "low": 10.819999694824219,
        "close": 10.880000114440918,
        "volume": 51722000,
        "amount": 563485120,
        "ma": {
            "5": 11.233999,
            "10": 11.245001,
            "20": 11.364,
            "60": 10.927499,
            "120": 10.702428
        },
        "boll": {
            "mid": 11.364,
            "upper": 11.772283,
            "lower": 10.955718
        },
        "ema": {
            "12": 11.241055,
            "50": 10.95551
        },
        "sma": {
            "5": 11.216062,
            "10": 11.241079,
            "20": 11.074033
        },
        "sar": {
            "BB": 11.460106
        },
        "kdj": {
            "k": 26.021658,
            "d": 35.025379,
            "j": 8.014214
        },
        "rsi": {
            "1": 27.321491,
            "2": 40.463741,
            "3": 49.078793
        },
        "dma": {
            "dif": 0.208001,
            "ama": 0.37988
        },
        "macd": {
            "dif": 0.042672,
            "dea": 0.117639,
            "macd": -0.149934
        }
    },
    {
        "time": "2017-9-29 0:0:0",
        "open": 10.920000076293945,
        "high": 11.15999984741211,
        "low": 10.859999656677246,
        "close": 11.109999656677246,
        "volume": 68228008,
        "amount": 753852544,
        "ma": {
            "5": 11.118,
            "10": 11.201,
            "20": 11.344,
            "60": 10.952166,
            "120": 10.704929
        },
        "boll": {
            "mid": 11.344,
            "upper": 11.805378,
            "lower": 10.882622
        },
        "ema": {
            "12": 11.185508,
            "50": 10.952549
        },
        "sma": {
            "5": 11.148849,
            "10": 11.204971,
            "20": 11.064331
        },
        "sar": {
            "BB": 11.348084
        },
        "kdj": {
            "k": 20.204931,
            "d": 30.08523,
            "j": 0.444332
        },
        "rsi": {
            "1": 25.430328,
            "2": 39.175644,
            "3": 48.310413
        },
        "dma": {
            "dif": 0.1658,
            "ama": 0.338
        },
        "macd": {
            "dif": 0.010709,
            "dea": 0.096253,
            "macd": -0.171088
        }
    },
    {
        "time": "2017-10-9 0:0:0",
        "open": 11.569999694824219,
        "high": 11.640000343322754,
        "low": 11.260000228881836,
        "close": 11.300000190734863,
        "volume": 132522728,
        "amount": 1520609536,
        "ma": {
            "5": 11.052,
            "10": 11.183001,
            "20": 11.339001,
            "60": 10.979498,
            "120": 10.710555
        },
        "boll": {
            "mid": 11.339001,
            "upper": 11.808507,
            "lower": 10.869494
        },
        "ema": {
            "12": 11.173891,
            "50": 10.958723
        },
        "sma": {
            "5": 11.14108,
            "10": 11.195475,
            "20": 11.066614
        },
        "sar": {
            "BB": 11.242468
        },
        "kdj": {
            "k": 27.279459,
            "d": 29.149973,
            "j": 23.538433
        },
        "rsi": {
            "1": 46.045555,
            "2": 47.553642,
            "3": 51.923309
        },
        "dma": {
            "dif": 0.1434,
            "ama": 0.29672
        },
        "macd": {
            "dif": 0.003892,
            "dea": 0.077781,
            "macd": -0.147778
        }
    },
    {
        "time": "2017-10-10 0:0:0",
        "open": 11.329999923706055,
        "high": 11.5,
        "low": 11.329999923706055,
        "close": 11.470000267028809,
        "volume": 74792528,
        "amount": 853665856,
        "ma": {
            "5": 11.054,
            "10": 11.188001,
            "20": 11.318001,
            "60": 11.007998,
            "120": 10.71863
        },
        "boll": {
            "mid": 11.318001,
            "upper": 11.752009,
            "lower": 10.883992
        },
        "ema": {
            "12": 11.193293,
            "50": 10.972107
        },
        "sma": {
            "5": 11.172864,
            "10": 11.205927,
            "20": 11.078283
        },
        "sar": {
            "BB": 10.82
        },
        "kdj": {
            "k": 37.698505,
            "d": 31.999483,
            "j": 49.096554
        },
        "rsi": {
            "1": 57.65134,
            "2": 53.344963,
            "3": 54.655361
        },
        "dma": {
            "dif": 0.1414,
            "ama": 0.26326
        },
        "macd": {
            "dif": 0.013664,
            "dea": 0.064957,
            "macd": -0.102586
        }
    },
    {
        "time": "2017-10-11 0:0:0",
        "open": 11.479999542236328,
        "high": 11.579999923706055,
        "low": 11.34000015258789,
        "close": 11.529999732971191,
        "volume": 65807760,
        "amount": 756203392,
        "ma": {
            "5": 11.138,
            "10": 11.222,
            "20": 11.3095,
            "60": 11.028331,
            "120": 10.728783
        },
        "boll": {
            "mid": 11.3095,
            "upper": 11.723135,
            "lower": 10.895864
        },
        "ema": {
            "12": 11.235863,
            "50": 10.991632
        },
        "sma": {
            "5": 11.232291,
            "10": 11.232334,
            "20": 11.097869
        },
        "sar": {
            "BB": 10.852799
        },
        "kdj": {
            "k": 51.555103,
            "d": 38.518024,
            "j": 77.629265
        },
        "rsi": {
            "1": 65.59684,
            "2": 57.884262,
            "3": 56.939941
        },
        "dma": {
            "dif": 0.166001,
            "ama": 0.23912
        },
        "macd": {
            "dif": 0.034725,
            "dea": 0.058911,
            "macd": -0.048372
        }
    },
    {
        "time": "2017-10-12 0:0:0",
        "open": 11.539999961853027,
        "high": 11.579999923706055,
        "low": 11.470000267028809,
        "close": 11.550000190734863,
        "volume": 57806532,
        "amount": 667148352,
        "ma": {
            "5": 11.258,
            "10": 11.246,
            "20": 11.301001,
            "60": 11.048166,
            "120": 10.739466
        },
        "boll": {
            "mid": 11.301001,
            "upper": 11.686756,
            "lower": 10.915245
        },
        "ema": {
            "12": 11.281115,
            "50": 11.012745
        },
        "sma": {
            "5": 11.291833,
            "10": 11.2621,
            "20": 11.119475
        },
        "sar": {
            "BB": 10.904575
        },
        "kdj": {
            "k": 63.231838,
            "d": 46.755962,
            "j": 96.183586
        },
        "rsi": {
            "1": 68.129364,
            "2": 59.404991,
            "3": 57.724373
        },
        "dma": {
            "dif": 0.1742,
            "ama": 0.2218
        },
        "macd": {
            "dif": 0.055616,
            "dea": 0.058252,
            "macd": -0.005271
        }
    },
    {
        "time": "2017-10-13 0:0:0",
        "open": 11.5600004196167,
        "high": 11.5600004196167,
        "low": 11.25,
        "close": 11.359999656677246,
        "volume": 73737600,
        "amount": 839662720,
        "ma": {
            "5": 11.392,
            "10": 11.255,
            "20": 11.306501,
            "60": 11.058999,
            "120": 10.750131
        },
        "boll": {
            "mid": 11.306501,
            "upper": 11.703654,
            "lower": 10.909348
        },
        "ema": {
            "12": 11.322482,
            "50": 11.033813
        },
        "sma": {
            "5": 11.343466,
            "10": 11.290891,
            "20": 11.141002
        },
        "sar": {
            "BB": 10.95861
        },
        "kdj": {
            "k": 71.829353,
            "d": 55.113758,
            "j": 105.260551
        },
        "rsi": {
            "1": 69.040985,
            "2": 59.931122,
            "3": 57.99057
        },
        "dma": {
            "dif": 0.164001,
            "ama": 0.20438
        },
        "macd": {
            "dif": 0.072948,
            "dea": 0.061191,
            "macd": 0.023513
        }
    },
    {
        "time": "2017-10-16 0:0:0",
        "open": 11.359999656677246,
        "high": 11.600000381469727,
        "low": 11.289999961853027,
        "close": 11.59000015258789,
        "volume": 103625064,
        "amount": 1190724224,
        "ma": {
            "5": 11.441999,
            "10": 11.247001,
            "20": 11.3,
            "60": 11.066665,
            "120": 10.758051
        },
        "boll": {
            "mid": 11.3,
            "upper": 11.688782,
            "lower": 10.911219
        },
        "ema": {
            "12": 11.328254,
            "50": 11.046605
        },
        "sma": {
            "5": 11.346773,
            "10": 11.297802,
            "20": 11.151952
        },
        "sar": {
            "BB": 11.008321
        },
        "kdj": {
            "k": 69.837433,
            "d": 60.021648,
            "j": 89.469002
        },
        "rsi": {
            "1": 52.064091,
            "2": 52.834629,
            "3": 54.583572
        },
        "dma": {
            "dif": 0.143601,
            "ama": 0.186501
        },
        "macd": {
            "dif": 0.070536,
            "dea": 0.06306,
            "macd": 0.014951
        }
    },
    {
        "time": "2017-10-17 0:0:0",
        "open": 11.619999885559082,
        "high": 11.649999618530273,
        "low": 11.479999542236328,
        "close": 11.510000228881836,
        "volume": 50637232,
        "amount": 585334016,
        "ma": {
            "5": 11.5,
            "10": 11.277,
            "20": 11.310501,
            "60": 11.079665,
            "120": 10.768718
        },
        "boll": {
            "mid": 11.310501,
            "upper": 11.719135,
            "lower": 10.901867
        },
        "ema": {
            "12": 11.368523,
            "50": 11.067915
        },
        "sma": {
            "5": 11.395418,
            "10": 11.327022,
            "20": 11.173854
        },
        "sar": {
            "BB": 11.074522
        },
        "kdj": {
            "k": 77.859093,
            "d": 65.967461,
            "j": 101.642349
        },
        "rsi": {
            "1": 64.680191,
            "2": 59.21257,
            "3": 57.721149
        },
        "dma": {
            "dif": 0.1552,
            "ama": 0.17164
        },
        "macd": {
            "dif": 0.086191,
            "dea": 0.067686,
            "macd": 0.03701
        }
    },
    {
        "time": "2017-10-18 0:0:0",
        "open": 11.529999732971191,
        "high": 11.699999809265137,
        "low": 11.510000228881836,
        "close": 11.6899995803833,
        "volume": 87136536,
        "amount": 1011050944,
        "ma": {
            "5": 11.508,
            "10": 11.323,
            "20": 11.309,
            "60": 11.087333,
            "120": 10.778101
        },
        "boll": {
            "mid": 11.309,
            "upper": 11.714401,
            "lower": 10.903599
        },
        "ema": {
            "12": 11.390288,
            "50": 11.085252
        },
        "sma": {
            "5": 11.418335,
            "10": 11.34532,
            "20": 11.19066
        },
        "sar": {
            "BB": 11.158599
        },
        "kdj": {
            "k": 79.616928,
            "d": 70.517281,
            "j": 97.816223
        },
        "rsi": {
            "1": 58.27824,
            "2": 56.322628,
            "3": 56.309242
        },
        "dma": {
            "dif": 0.191799,
            "ama": 0.16534
        },
        "macd": {
            "dif": 0.091093,
            "dea": 0.072368,
            "macd": 0.037451
        }
    },
    {
        "time": "2017-10-19 0:0:0",
        "open": 11.640000343322754,
        "high": 11.720000267028809,
        "low": 11.569999694824219,
        "close": 11.630000114440918,
        "volume": 72276480,
        "amount": 841546816,
        "ma": {
            "5": 11.54,
            "10": 11.399001,
            "20": 11.322001,
            "60": 11.097333,
            "120": 10.789499
        },
        "boll": {
            "mid": 11.322001,
            "upper": 11.759125,
            "lower": 10.884876
        },
        "ema": {
            "12": 11.436398,
            "50": 11.108967
        },
        "sma": {
            "5": 11.472668,
            "10": 11.379788,
            "20": 11.215628
        },
        "sar": {
            "BB": 11.256879
        },
        "kdj": {
            "k": 86.014458,
            "d": 75.683006,
            "j": 106.677353
        },
        "rsi": {
            "1": 67.076698,
            "2": 60.995274,
            "3": 58.682106
        },
        "dma": {
            "dif": 0.257,
            "ama": 0.17024
        },
        "macd": {
            "dif": 0.108253,
            "dea": 0.079545,
            "macd": 0.057417
        }
    },
    {
        "time": "2017-10-20 0:0:0",
        "open": 11.59000015258789,
        "high": 11.59000015258789,
        "low": 11.40999984741211,
        "close": 11.479999542236328,
        "volume": 46180808,
        "amount": 529747040,
        "ma": {
            "5": 11.556,
            "10": 11.474001,
            "20": 11.3375,
            "60": 11.108334,
            "120": 10.799876
        },
        "boll": {
            "mid": 11.3375,
            "upper": 11.795748,
            "lower": 10.879251
        },
        "ema": {
            "12": 11.466183,
            "50": 11.129399
        },
        "sma": {
            "5": 11.504134,
            "10": 11.40481,
            "20": 11.236346
        },
        "sar": {
            "BB": 11.345503
        },
        "kdj": {
            "k": 84.29332,
            "d": 78.553108,
            "j": 95.773743
        },
        "rsi": {
            "1": 61.858707,
            "2": 58.711288,
            "3": 57.59412
        },
        "dma": {
            "dif": 0.3196,
            "ama": 0.18562
        },
        "macd": {
            "dif": 0.115679,
            "dea": 0.086772,
            "macd": 0.057814
        }
    },
    {
        "time": "2017-10-23 0:0:0",
        "open": 11.390000343322754,
        "high": 11.399999618530273,
        "low": 11.149999618530273,
        "close": 11.1899995803833,
        "volume": 107446504,
        "amount": 1206888320,
        "ma": {
            "5": 11.58,
            "10": 11.511,
            "20": 11.347,
            "60": 11.118167,
            "120": 10.80817
        },
        "boll": {
            "mid": 11.347,
            "upper": 11.808957,
            "lower": 10.885043
        },
        "ema": {
            "12": 11.468308,
            "50": 11.143148
        },
        "sma": {
            "5": 11.499308,
            "10": 11.412329,
            "20": 11.248529
        },
        "sar": {
            "BB": 11.72
        },
        "kdj": {
            "k": 72.507561,
            "d": 76.537926,
            "j": 64.446823
        },
        "rsi": {
            "1": 50.153931,
            "2": 53.271008,
            "3": 54.937004
        },
        "dma": {
            "dif": 0.350402,
            "ama": 0.20632
        },
        "macd": {
            "dif": 0.108212,
            "dea": 0.09106,
            "macd": 0.034305
        }
    },
    {
        "time": "2017-10-24 0:0:0",
        "open": 11.199999809265137,
        "high": 11.420000076293945,
        "low": 11.180000305175781,
        "close": 11.390000343322754,
        "volume": 61887192,
        "amount": 700896896,
        "ma": {
            "5": 11.5,
            "10": 11.5,
            "20": 11.344,
            "60": 11.122167,
            "120": 10.812771
        },
        "boll": {
            "mid": 11.344,
            "upper": 11.809416,
            "lower": 10.878584
        },
        "ema": {
            "12": 11.425491,
            "50": 11.144986
        },
        "sma": {
            "5": 11.437446,
            "10": 11.390097,
            "20": 11.245604
        },
        "sar": {
            "BB": 11.6952
        },
        "kdj": {
            "k": 50.677551,
            "d": 67.917801,
            "j": 16.197052
        },
        "rsi": {
            "1": 34.853718,
            "2": 44.562176,
            "3": 50.259262
        },
        "dma": {
            "dif": 0.335601,
            "ama": 0.225741
        },
        "macd": {
            "dif": 0.077995,
            "dea": 0.088447,
            "macd": -0.020903
        }
    },
    {
        "time": "2017-10-25 0:0:0",
        "open": 11.359999656677246,
        "high": 11.369999885559082,
        "low": 11.25,
        "close": 11.270000457763672,
        "volume": 41857360,
        "amount": 472708192,
        "ma": {
            "5": 11.476,
            "10": 11.492,
            "20": 11.357,
            "60": 11.128666,
            "120": 10.819643
        },
        "boll": {
            "mid": 11.357,
            "upper": 11.811691,
            "lower": 10.902309
        },
        "ema": {
            "12": 11.420032,
            "50": 11.154594
        },
        "sma": {
            "5": 11.427957,
            "10": 11.390087,
            "20": 11.252824
        },
        "sar": {
            "BB": 11.651584
        },
        "kdj": {
            "k": 47.820148,
            "d": 61.218582,
            "j": 21.023285
        },
        "rsi": {
            "1": 47.985695,
            "2": 50.633995,
            "3": 53.131191
        },
        "dma": {
            "dif": 0.3208,
            "ama": 0.24122
        },
        "macd": {
            "dif": 0.069386,
            "dea": 0.084635,
            "macd": -0.030497
        }
    },
    {
        "time": "2017-10-26 0:0:0",
        "open": 11.25,
        "high": 11.319999694824219,
        "low": 11.119999885559082,
        "close": 11.180000305175781,
        "volume": 92899608,
        "amount": 1041707008,
        "ma": {
            "5": 11.392,
            "10": 11.466001,
            "20": 11.356,
            "60": 11.137501,
            "120": 10.824941
        },
        "boll": {
            "mid": 11.356,
            "upper": 11.811413,
            "lower": 10.900587
        },
        "ema": {
            "12": 11.39695,
            "50": 11.159121
        },
        "sma": {
            "5": 11.396365,
            "10": 11.378079,
            "20": 11.253683
        },
        "sar": {
            "BB": 11.613857
        },
        "kdj": {
            "k": 38.897686,
            "d": 53.778286,
            "j": 9.136482
        },
        "rsi": {
            "1": 41.90398,
            "2": 47.246922,
            "3": 51.277573
        },
        "dma": {
            "dif": 0.284001,
            "ama": 0.252201
        },
        "macd": {
            "dif": 0.052279,
            "dea": 0.078164,
            "macd": -0.05177
        }
    },
    {
        "time": "2017-10-27 0:0:0",
        "open": 11.1899995803833,
        "high": 11.5600004196167,
        "low": 11.180000305175781,
        "close": 11.5600004196167,
        "volume": 136008640,
        "amount": 1548543744,
        "ma": {
            "5": 11.302,
            "10": 11.429,
            "20": 11.342,
            "60": 11.147334,
            "120": 10.82907
        },
        "boll": {
            "mid": 11.342,
            "upper": 11.801145,
            "lower": 10.882855
        },
        "ema": {
            "12": 11.363573,
            "50": 11.159939
        },
        "sma": {
            "5": 11.353092,
            "10": 11.358272,
            "20": 11.249998
        },
        "sar": {
            "BB": 11.570194
        },
        "kdj": {
            "k": 29.265144,
            "d": 45.607239,
            "j": -3.419044
        },
        "rsi": {
            "1": 37.613533,
            "2": 44.795238,
            "3": 49.914722
        },
        "dma": {
            "dif": 0.235799,
            "ama": 0.25938
        },
        "macd": {
            "dif": 0.0311,
            "dea": 0.068751,
            "macd": -0.075301
        }
    },
    {
        "time": "2017-10-30 0:0:0",
        "open": 11.550000190734863,
        "high": 11.729999542236328,
        "low": 11.449999809265137,
        "close": 11.5600004196167,
        "volume": 127824696,
        "amount": 1484495488,
        "ma": {
            "5": 11.318,
            "10": 11.448999,
            "20": 11.348001,
            "60": 11.161,
            "120": 10.837471
        },
        "boll": {
            "mid": 11.348001,
            "upper": 11.815533,
            "lower": 10.88047
        },
        "ema": {
            "12": 11.393792,
            "50": 11.175628
        },
        "sma": {
            "5": 11.394474,
            "10": 11.378444,
            "20": 11.265498
        },
        "sar": {
            "BB": 11.12
        },
        "kdj": {
            "k": 43.954556,
            "d": 45.056347,
            "j": 41.750969
        },
        "rsi": {
            "1": 58.922829,
            "2": 55.444538,
            "3": 55.164749
        },
        "dma": {
            "dif": 0.224999,
            "ama": 0.26752
        },
        "macd": {
            "dif": 0.044465,
            "dea": 0.063894,
            "macd": -0.038857
        }
    },
    {
        "time": "2017-10-31 0:0:0",
        "open": 11.550000190734863,
        "high": 11.579999923706055,
        "low": 11.390000343322754,
        "close": 11.539999961853027,
        "volume": 62749136,
        "amount": 721237504,
        "ma": {
            "5": 11.392,
            "10": 11.446,
            "20": 11.361501,
            "60": 11.175834,
            "120": 10.845681
        },
        "boll": {
            "mid": 11.361501,
            "upper": 11.83753,
            "lower": 10.885471
        },
        "ema": {
            "12": 11.419363,
            "50": 11.190701
        },
        "sma": {
            "5": 11.42758,
            "10": 11.396599,
            "20": 11.280223
        },
        "sar": {
            "BB": 11.1552
        },
        "kdj": {
            "k": 53.346798,
            "d": 47.819828,
            "j": 64.400734
        },
        "rsi": {
            "1": 58.922829,
            "2": 55.444538,
            "3": 55.164749
        },
        "dma": {
            "dif": 0.195199,
            "ama": 0.27152
        },
        "macd": {
            "dif": 0.054431,
            "dea": 0.062001,
            "macd": -0.01514
        }
    },
    {
        "time": "2017-11-1 0:0:0",
        "open": 11.5600004196167,
        "high": 11.59000015258789,
        "low": 11.319999694824219,
        "close": 11.399999618530273,
        "volume": 69261792,
        "amount": 792881024,
        "ma": {
            "5": 11.422001,
            "10": 11.448999,
            "20": 11.386,
            "60": 11.184168,
            "120": 10.853482
        },
        "boll": {
            "mid": 11.386,
            "upper": 11.844787,
            "lower": 10.927213
        },
        "ema": {
            "12": 11.437922,
            "50": 11.204399
        },
        "sma": {
            "5": 11.450064,
            "10": 11.410939,
            "20": 11.293211
        },
        "sar": {
            "BB": 11.201184
        },
        "kdj": {
            "k": 58.515369,
            "d": 51.38501,
            "j": 72.776093
        },
        "rsi": {
            "1": 57.435928,
            "2": 54.7826,
            "3": 54.835342
        },
        "dma": {
            "dif": 0.1736,
            "ama": 0.2697
        },
        "macd": {
            "dif": 0.060022,
            "dea": 0.061605,
            "macd": -0.003166
        }
    },
    {
        "time": "2017-11-2 0:0:0",
        "open": 11.359999656677246,
        "high": 11.579999923706055,
        "low": 11.260000228881836,
        "close": 11.539999961853027,
        "volume": 60430848,
        "amount": 689229952,
        "ma": {
            "5": 11.448001,
            "10": 11.42,
            "20": 11.409499,
            "60": 11.188334,
            "120": 10.859555
        },
        "boll": {
            "mid": 11.409499,
            "upper": 11.8149,
            "lower": 11.004098
        },
        "ema": {
            "12": 11.432088,
            "50": 11.21207
        },
        "sma": {
            "5": 11.440051,
            "10": 11.409845,
            "20": 11.298551
        },
        "sar": {
            "BB": 11.246642
        },
        "kdj": {
            "k": 54.310787,
            "d": 52.360271,
            "j": 58.211815
        },
        "rsi": {
            "1": 47.390678,
            "2": 50.205498,
            "3": 52.543606
        },
        "dma": {
            "dif": 0.123401,
            "ama": 0.25634
        },
        "macd": {
            "dif": 0.05255,
            "dea": 0.059794,
            "macd": -0.014488
        }
    },
    {
        "time": "2017-11-3 0:0:0",
        "open": 11.489999771118164,
        "high": 11.680000305175781,
        "low": 11.350000381469727,
        "close": 11.390000343322754,
        "volume": 74334320,
        "amount": 852032128,
        "ma": {
            "5": 11.52,
            "10": 11.411,
            "20": 11.442499,
            "60": 11.197167,
            "120": 10.867033
        },
        "boll": {
            "mid": 11.442499,
            "upper": 11.765609,
            "lower": 11.11939
        },
        "ema": {
            "12": 11.44869,
            "50": 11.22493
        },
        "sma": {
            "5": 11.460041,
            "10": 11.422861,
            "20": 11.310622
        },
        "sar": {
            "BB": 11.73
        },
        "kdj": {
            "k": 59.158031,
            "d": 54.62619,
            "j": 68.22171
        },
        "rsi": {
            "1": 56.516689,
            "2": 54.364944,
            "3": 54.526699
        },
        "dma": {
            "dif": 0.092001,
            "ama": 0.23358
        },
        "macd": {
            "dif": 0.057267,
            "dea": 0.059289,
            "macd": -0.004044
        }
    },
    {
        "time": "2017-11-6 0:0:0",
        "open": 11.420000076293945,
        "high": 11.420000076293945,
        "low": 11.09000015258789,
        "close": 11.279999732971191,
        "volume": 102990280,
        "amount": 1157303936,
        "ma": {
            "5": 11.486,
            "10": 11.402,
            "20": 11.456499,
            "60": 11.200832,
            "120": 10.872717
        },
        "boll": {
            "mid": 11.456499,
            "upper": 11.740893,
            "lower": 11.172105
        },
        "ema": {
            "12": 11.439661,
            "50": 11.231403
        },
        "sma": {
            "5": 11.446033,
            "10": 11.419575,
            "20": 11.314591
        },
        "sar": {
            "BB": 11.7112
        },
        "kdj": {
            "k": 54.192822,
            "d": 54.481735,
            "j": 53.61499
        },
        "rsi": {
            "1": 46.210434,
            "2": 49.529186,
            "3": 52.092964
        },
        "dma": {
            "dif": 0.064001,
            "ama": 0.20494
        },
        "macd": {
            "dif": 0.048343,
            "dea": 0.0571,
            "macd": -0.017514
        }
    },
    {
        "time": "2017-11-7 0:0:0",
        "open": 11.270000457763672,
        "high": 12.09000015258789,
        "low": 11.25,
        "close": 11.920000076293945,
        "volume": 247716320,
        "amount": 2914269184,
        "ma": {
            "5": 11.429999,
            "10": 11.411,
            "20": 11.455499,
            "60": 11.205501,
            "120": 10.877097
        },
        "boll": {
            "mid": 11.455499,
            "upper": 11.74234,
            "lower": 11.168657
        },
        "ema": {
            "12": 11.415097,
            "50": 11.233309
        },
        "sma": {
            "5": 11.412826,
            "10": 11.405617,
            "20": 11.312861
        },
        "sar": {
            "BB": 11.682303
        },
        "kdj": {
            "k": 46.024368,
            "d": 51.662613,
            "j": 34.747879
        },
        "rsi": {
            "1": 39.820244,
            "2": 46.238804,
            "3": 50.372494
        },
        "dma": {
            "dif": 0.056601,
            "ama": 0.17704
        },
        "macd": {
            "dif": 0.032025,
            "dea": 0.052085,
            "macd": -0.040119
        }
    },
    {
        "time": "2017-11-8 0:0:0",
        "open": 12,
        "high": 12.59000015258789,
        "low": 11.930000305175781,
        "close": 12.130000114440918,
        "volume": 426282560,
        "amount": 5199224320,
        "ma": {
            "5": 11.506,
            "10": 11.464,
            "20": 11.477999,
            "60": 11.22,
            "120": 10.888191
        },
        "boll": {
            "mid": 11.477999,
            "upper": 11.832365,
            "lower": 11.123632
        },
        "ema": {
            "12": 11.492775,
            "50": 11.260238
        },
        "sma": {
            "5": 11.514261,
            "10": 11.457055,
            "20": 11.343218
        },
        "sar": {
            "BB": 11.09
        },
        "kdj": {
            "k": 58.349579,
            "d": 53.891602,
            "j": 67.265533
        },
        "rsi": {
            "1": 69.381546,
            "2": 62.184113,
            "3": 58.661304
        },
        "dma": {
            "dif": 0.0842,
            "ama": 0.15338
        },
        "macd": {
            "dif": 0.06993,
            "dea": 0.055654,
            "macd": 0.028552
        }
    },
    {
        "time": "2017-11-9 0:0:0",
        "open": 12.199999809265137,
        "high": 12.569999694824219,
        "low": 12.149999618530273,
        "close": 12.329999923706055,
        "volume": 229528928,
        "amount": 2839861760,
        "ma": {
            "5": 11.651999,
            "10": 11.55,
            "20": 11.507999,
            "60": 11.243333,
            "120": 10.901263
        },
        "boll": {
            "mid": 11.507999,
            "upper": 11.966921,
            "lower": 11.049078
        },
        "ema": {
            "12": 11.59081,
            "50": 11.294346
        },
        "sma": {
            "5": 11.637409,
            "10": 11.524349,
            "20": 11.382557
        },
        "sar": {
            "BB": 11.17
        },
        "kdj": {
            "k": 62.010834,
            "d": 56.598011,
            "j": 72.836479
        },
        "rsi": {
            "1": 74.343864,
            "2": 65.813599,
            "3": 60.897434
        },
        "dma": {
            "dif": 0.1456,
            "ama": 0.13954
        },
        "macd": {
            "dif": 0.115583,
            "dea": 0.06764,
            "macd": 0.095887
        }
    },
    {
        "time": "2017-11-10 0:0:0",
        "open": 12.369999885559082,
        "high": 12.550000190734863,
        "low": 12.149999618530273,
        "close": 12.300000190734863,
        "volume": 175755232,
        "amount": 2167126528,
        "ma": {
            "5": 11.81,
            "10": 11.664999,
            "20": 11.546999,
            "60": 11.271834,
            "120": 10.916145
        },
        "boll": {
            "mid": 11.546999,
            "upper": 12.135296,
            "lower": 10.958702
        },
        "ema": {
            "12": 11.704531,
            "50": 11.33496
        },
        "sma": {
            "5": 11.775928,
            "10": 11.604915,
            "20": 11.42993
        },
        "sar": {
            "BB": 11.2836
        },
        "kdj": {
            "k": 68.896111,
            "d": 60.697376,
            "j": 85.293571
        },
        "rsi": {
            "1": 78.353317,
            "2": 68.913452,
            "3": 62.892235
        },
        "dma": {
            "dif": 0.232599,
            "ama": 0.13922
        },
        "macd": {
            "dif": 0.165988,
            "dea": 0.087309,
            "macd": 0.157357
        }
    },
    {
        "time": "2017-11-13 0:0:0",
        "open": 12.350000381469727,
        "high": 13.100000381469727,
        "low": 12.350000381469727,
        "close": 12.899999618530273,
        "volume": 256690624,
        "amount": 3307955200,
        "ma": {
            "5": 11.992001,
            "10": 11.739,
            "20": 11.594,
            "60": 11.309834,
            "120": 10.930412
        },
        "boll": {
            "mid": 11.594,
            "upper": 12.2639,
            "lower": 10.9241
        },
        "ema": {
            "12": 11.796142,
            "50": 11.372805
        },
        "sma": {
            "5": 11.880742,
            "10": 11.674423,
            "20": 11.473433
        },
        "sar": {
            "BB": 11.386512
        },
        "kdj": {
            "k": 72.819633,
            "d": 64.738129,
            "j": 88.982635
        },
        "rsi": {
            "1": 76.209572,
            "2": 67.905891,
            "3": 62.394028
        },
        "dma": {
            "dif": 0.282801,
            "ama": 0.145
        },
        "macd": {
            "dif": 0.201194,
            "dea": 0.110086,
            "macd": 0.182215
        }
    },
    {
        "time": "2017-11-14 0:0:0",
        "open": 12.949999809265137,
        "high": 13.260000228881836,
        "low": 12.8100004196167,
        "close": 12.949999809265137,
        "volume": 178030240,
        "amount": 2318092288,
        "ma": {
            "5": 12.315999,
            "10": 11.873,
            "20": 11.659499,
            "60": 11.354502,
            "120": 10.95051
        },
        "boll": {
            "mid": 11.659499,
            "upper": 12.548184,
            "lower": 10.770814
        },
        "ema": {
            "12": 11.965966,
            "50": 11.432694
        },
        "sma": {
            "5": 12.084593,
            "10": 11.796981,
            "20": 11.544762
        },
        "sar": {
            "BB": 11.526131
        },
        "kdj": {
            "k": 78.562996,
            "d": 69.346413,
            "j": 96.99617
        },
        "rsi": {
            "1": 85.639374,
            "2": 75.667847,
            "3": 67.729095
        },
        "dma": {
            "dif": 0.385799,
            "ama": 0.16406
        },
        "macd": {
            "dif": 0.274348,
            "dea": 0.142939,
            "macd": 0.262819
        }
    },
    {
        "time": "2017-11-15 0:0:0",
        "open": 12.899999618530273,
        "high": 13.130000114440918,
        "low": 12.770000457763672,
        "close": 12.899999618530273,
        "volume": 126305224,
        "amount": 1627912576,
        "ma": {
            "5": 12.521999,
            "10": 12.014,
            "20": 11.7315,
            "60": 11.3985,
            "120": 10.970707
        },
        "boll": {
            "mid": 11.7315,
            "upper": 12.786894,
            "lower": 10.676105
        },
        "ema": {
            "12": 12.117356,
            "50": 11.492197
        },
        "sma": {
            "5": 12.257674,
            "10": 11.912283,
            "20": 11.615023
        },
        "sar": {
            "BB": 11.77795
        },
        "kdj": {
            "k": 80.946754,
            "d": 73.213196,
            "j": 96.413879
        },
        "rsi": {
            "1": 86.18689,
            "2": 76.191315,
            "3": 68.122337
        },
        "dma": {
            "dif": 0.5012,
            "ama": 0.19682
        },
        "macd": {
            "dif": 0.332525,
            "dea": 0.180856,
            "macd": 0.303338
        }
    },
    {
        "time": "2017-11-16 0:0:0",
        "open": 12.899999618530273,
        "high": 13.119999885559082,
        "low": 12.670000076293945,
        "close": 13.100000381469727,
        "volume": 120081480,
        "amount": 1550701824,
        "ma": {
            "5": 12.676,
            "10": 12.164,
            "20": 11.792,
            "60": 11.441167,
            "120": 10.99
        },
        "boll": {
            "mid": 11.792,
            "upper": 12.969067,
            "lower": 10.614933
        },
        "ema": {
            "12": 12.237762,
            "50": 11.547405
        },
        "sma": {
            "5": 12.386139,
            "10": 12.011055,
            "20": 11.679271
        },
        "sar": {
            "BB": 12.015079
        },
        "kdj": {
            "k": 81.767876,
            "d": 76.064758,
            "j": 93.174103
        },
        "rsi": {
            "1": 82.416245,
            "2": 74.444168,
            "3": 67.266983
        },
        "dma": {
            "dif": 0.621798,
            "ama": 0.24666
        },
        "macd": {
            "dif": 0.370326,
            "dea": 0.21875,
            "macd": 0.303152
        }
    },
    {
        "time": "2017-11-17 0:0:0",
        "open": 13.170000076293945,
        "high": 13.460000038146973,
        "low": 13.029999732971191,
        "close": 13.180000305175781,
        "volume": 206414976,
        "amount": 2731215872,
        "ma": {
            "5": 12.83,
            "10": 12.320001,
            "20": 11.865499,
            "60": 11.485834,
            "120": 11.010891
        },
        "boll": {
            "mid": 11.865499,
            "upper": 13.175978,
            "lower": 10.555021
        },
        "ema": {
            "12": 12.370415,
            "50": 11.608291
        },
        "sma": {
            "5": 12.528911,
            "10": 12.119949,
            "20": 11.750307
        },
        "sar": {
            "BB": 12.193466
        },
        "kdj": {
            "k": 85.387489,
            "d": 79.172333,
            "j": 97.81781
        },
        "rsi": {
            "1": 85.467949,
            "2": 76.768753,
            "3": 68.897041
        },
        "dma": {
            "dif": 0.7414,
            "ama": 0.3116
        },
        "macd": {
            "dif": 0.411677,
            "dea": 0.257335,
            "macd": 0.308684
        }
    },
    {
        "time": "2017-11-20 0:0:0",
        "open": 13.130000114440918,
        "high": 14.25,
        "low": 13.050000190734863,
        "close": 14.25,
        "volume": 284392576,
        "amount": 3860145152,
        "ma": {
            "5": 13.006,
            "10": 12.499,
            "20": 11.9505,
            "60": 11.5315,
            "120": 11.032157
        },
        "boll": {
            "mid": 11.9505,
            "upper": 13.371573,
            "lower": 10.529428
        },
        "ema": {
            "12": 12.494967,
            "50": 11.669927
        },
        "sma": {
            "5": 12.659128,
            "10": 12.225954,
            "20": 11.821791
        },
        "sar": {
            "BB": 12.378773
        },
        "kdj": {
            "k": 86.035103,
            "d": 81.459923,
            "j": 95.185471
        },
        "rsi": {
            "1": 86.585442,
            "2": 77.65564,
            "3": 69.530365
        },
        "dma": {
            "dif": 0.880998,
            "ama": 0.393299
        },
        "macd": {
            "dif": 0.445765,
            "dea": 0.295021,
            "macd": 0.301488
        }
    },
    {
        "time": "2017-11-21 0:0:0",
        "open": 14.069999694824219,
        "high": 14.789999961853027,
        "low": 14.010000228881836,
        "close": 14.449999809265137,
        "volume": 249532784,
        "amount": 3609848832,
        "ma": {
            "5": 13.275999,
            "10": 12.796,
            "20": 12.1035,
            "60": 11.594666,
            "120": 11.063398
        },
        "boll": {
            "mid": 12.1035,
            "upper": 13.810045,
            "lower": 10.396955
        },
        "ema": {
            "12": 12.764972,
            "50": 11.771106
        },
        "sma": {
            "5": 12.977303,
            "10": 12.428358,
            "20": 11.943201
        },
        "sar": {
            "BB": 12.595018
        },
        "kdj": {
            "k": 90.690063,
            "d": 84.536636,
            "j": 102.996918
        },
        "rsi": {
            "1": 93.99588,
            "2": 85.649384,
            "3": 76.27317
        },
        "dma": {
            "dif": 1.127398,
            "ama": 0.500379
        },
        "macd": {
            "dif": 0.552749,
            "dea": 0.346567,
            "macd": 0.412364
        }
    },
    {
        "time": "2017-11-22 0:0:0",
        "open": 14.479998588562012,
        "high": 15.239999771118164,
        "low": 14.479998588562012,
        "close": 15.100000381469727,
        "volume": 257023168,
        "amount": 3839501312,
        "ma": {
            "5": 13.575999,
            "10": 13.048999,
            "20": 12.256499,
            "60": 11.658001,
            "120": 11.095962
        },
        "boll": {
            "mid": 12.256499,
            "upper": 14.222681,
            "lower": 10.290318
        },
        "ema": {
            "12": 13.024206,
            "50": 11.876161
        },
        "sma": {
            "5": 13.271841,
            "10": 12.630522,
            "20": 12.068541
        },
        "sar": {
            "BB": 12.926015
        },
        "kdj": {
            "k": 89.50045,
            "d": 86.191246,
            "j": 96.118851
        },
        "rsi": {
            "1": 94.657806,
            "2": 86.625069,
            "3": 77.254906
        },
        "dma": {
            "dif": 1.324198,
            "ama": 0.624379
        },
        "macd": {
            "dif": 0.646221,
            "dea": 0.406498,
            "macd": 0.479447
        }
    },
    {
        "time": "2017-11-23 0:0:0",
        "open": 15.149999618530273,
        "high": 15.239999771118164,
        "low": 14.069999694824219,
        "close": 14.350000381469727,
        "volume": 242914208,
        "amount": 3562843648,
        "ma": {
            "5": 14.016001,
            "10": 13.345999,
            "20": 12.448,
            "60": 11.728,
            "120": 11.134095
        },
        "boll": {
            "mid": 12.448,
            "upper": 14.730261,
            "lower": 10.165739
        },
        "ema": {
            "12": 13.343559,
            "50": 12.002585
        },
        "sma": {
            "5": 13.637472,
            "10": 12.87747,
            "20": 12.220114
        },
        "sar": {
            "BB": 13.298812
        },
        "kdj": {
            "k": 91.490059,
            "d": 87.95752,
            "j": 98.555145
        },
        "rsi": {
            "1": 96.264091,
            "2": 89.222916,
            "3": 80.053757
        },
        "dma": {
            "dif": 1.553199,
            "ama": 0.765139
        },
        "macd": {
            "dif": 0.763944,
            "dea": 0.477987,
            "macd": 0.571913
        }
    },
    {
        "time": "2017-11-24 0:0:0",
        "open": 14.289999961853027,
        "high": 14.59000015258789,
        "low": 13.779999732971191,
        "close": 14.5600004196167,
        "volume": 263018960,
        "amount": 3732597248,
        "ma": {
            "5": 14.266001,
            "10": 13.547999,
            "20": 12.6065,
            "60": 11.785,
            "120": 11.164433
        },
        "boll": {
            "mid": 12.6065,
            "upper": 14.957276,
            "lower": 10.255723
        },
        "ema": {
            "12": 13.498397,
            "50": 12.094641
        },
        "sma": {
            "5": 13.779978,
            "10": 13.024724,
            "20": 12.326609
        },
        "sar": {
            "BB": 13.68705
        },
        "kdj": {
            "k": 84.061432,
            "d": 86.658821,
            "j": 78.866653
        },
        "rsi": {
            "1": 67.967453,
            "2": 71.694504,
            "3": 69.723686
        },
        "dma": {
            "dif": 1.697,
            "ama": 0.911579
        },
        "macd": {
            "dif": 0.787642,
            "dea": 0.539918,
            "macd": 0.495447
        }
    },
    {
        "time": "2017-11-27 0:0:0",
        "open": 14.300000190734863,
        "high": 14.300000190734863,
        "low": 13.75,
        "close": 13.930000305175781,
        "volume": 206408512,
        "amount": 2878491904,
        "ma": {
            "5": 14.542,
            "10": 13.773999,
            "20": 12.756499,
            "60": 11.8425,
            "120": 11.196168
        },
        "boll": {
            "mid": 12.756499,
            "upper": 15.206861,
            "lower": 10.306137
        },
        "ema": {
            "12": 13.66172,
            "50": 12.191322
        },
        "sma": {
            "5": 13.935982,
            "10": 13.178251,
            "20": 12.438278
        },
        "sar": {
            "BB": 15.24
        },
        "kdj": {
            "k": 80.554581,
            "d": 84.624077,
            "j": 72.415588
        },
        "rsi": {
            "1": 70.846802,
            "2": 73.296913,
            "3": 70.8237
        },
        "dma": {
            "dif": 1.861599,
            "ama": 1.069459
        },
        "macd": {
            "dif": 0.813984,
            "dea": 0.594731,
            "macd": 0.438506
        }
    },
    {
        "time": "2017-11-28 0:0:0",
        "open": 13.850000381469727,
        "high": 13.850000381469727,
        "low": 13.399999618530273,
        "close": 13.699999809265137,
        "volume": 176643232,
        "amount": 2396540160,
        "ma": {
            "5": 14.478,
            "10": 13.876999,
            "20": 12.875002,
            "60": 11.8855,
            "120": 11.221482
        },
        "boll": {
            "mid": 12.875002,
            "upper": 15.310857,
            "lower": 10.439147
        },
        "ema": {
            "12": 13.702994,
            "50": 12.259505
        },
        "sma": {
            "5": 13.934786,
            "10": 13.253428,
            "20": 12.512865
        },
        "sar": {
            "BB": 15.123199
        },
        "kdj": {
            "k": 70.045471,
            "d": 79.764542,
            "j": 50.60733
        },
        "rsi": {
            "1": 53.525883,
            "2": 61.839664,
            "3": 63.591148
        },
        "dma": {
            "dif": 1.913599,
            "ama": 1.222239
        },
        "macd": {
            "dif": 0.77509,
            "dea": 0.630803,
            "macd": 0.288575
        }
    },
    {
        "time": "2017-11-29 0:0:0",
        "open": 13.729998588562012,
        "high": 13.930000305175781,
        "low": 13.470000267028809,
        "close": 13.819999694824219,
        "volume": 156409488,
        "amount": 2148312576,
        "ma": {
            "5": 14.328,
            "10": 13.951999,
            "20": 12.983002,
            "60": 11.919333,
            "120": 11.24422
        },
        "boll": {
            "mid": 12.983002,
            "upper": 15.360458,
            "lower": 10.605545
        },
        "ema": {
            "12": 13.702534,
            "50": 12.315995
        },
        "sma": {
            "5": 13.887828,
            "10": 13.298085,
            "20": 12.572222
        },
        "sar": {
            "BB": 14.958416
        },
        "kdj": {
            "k": 60.056255,
            "d": 73.195114,
            "j": 33.778534
        },
        "rsi": {
            "1": 48.347504,
            "2": 58.215488,
            "3": 61.209888
        },
        "dma": {
            "dif": 1.945399,
            "ama": 1.366659
        },
        "macd": {
            "dif": 0.717438,
            "dea": 0.64813,
            "macd": 0.138616
        }
    },
    {
        "time": "2017-11-30 0:0:0",
        "open": 13.699999809265137,
        "high": 13.729998588562012,
        "low": 13.260000228881836,
        "close": 13.380000114440918,
        "volume": 137963568,
        "amount": 1866701056,
        "ma": {
            "5": 14.072001,
            "10": 14.044001,
            "20": 13.104001,
            "60": 11.959167,
            "120": 11.267636
        },
        "boll": {
            "mid": 13.104001,
            "upper": 15.386695,
            "lower": 10.821307
        },
        "ema": {
            "12": 13.720605,
            "50": 12.374976
        },
        "sma": {
            "5": 13.874262,
            "10": 13.350278,
            "20": 12.63461
        },
        "sar": {
            "BB": 14.771406
        },
        "kdj": {
            "k": 51.953037,
            "d": 66.114418,
            "j": 23.63028
        },
        "rsi": {
            "1": 51.297455,
            "2": 59.564285,
            "3": 61.984886
        },
        "dma": {
            "dif": 1.989601,
            "ama": 1.503439
        },
        "macd": {
            "dif": 0.673664,
            "dea": 0.653237,
            "macd": 0.040855
        }
    },
    {
        "time": "2017-12-1 0:0:0",
        "open": 13.399999618530273,
        "high": 13.479998588562012,
        "low": 12.960000038146973,
        "close": 13,
        "volume": 178493312,
        "amount": 2354299648,
        "ma": {
            "5": 13.878,
            "10": 14.072001,
            "20": 13.196001,
            "60": 11.994167,
            "120": 11.286666
        },
        "boll": {
            "mid": 13.196001,
            "upper": 15.358461,
            "lower": 11.033541
        },
        "ema": {
            "12": 13.668204,
            "50": 12.414389
        },
        "sma": {
            "5": 13.775409,
            "10": 13.353251,
            "20": 12.67188
        },
        "sar": {
            "BB": 14.563181
        },
        "kdj": {
            "k": 39.658188,
            "d": 57.295673,
            "j": 4.383217
        },
        "rsi": {
            "1": 40.995632,
            "2": 52.752846,
            "3": 57.583088
        },
        "dma": {
            "dif": 1.976401,
            "ama": 1.626939
        },
        "macd": {
            "dif": 0.596592,
            "dea": 0.641908,
            "macd": -0.090632
        }
    },
    {
        "time": "2017-12-4 0:0:0",
        "open": 13.050000190734863,
        "high": 13.369999885559082,
        "low": 13,
        "close": 13.300000190734863,
        "volume": 145402352,
        "amount": 1923315584,
        "ma": {
            "5": 13.566,
            "10": 14.053999,
            "20": 13.2765,
            "60": 12.024001,
            "120": 11.301964
        },
        "boll": {
            "mid": 13.2765,
            "upper": 15.269085,
            "lower": 11.283915
        },
        "ema": {
            "12": 13.565404,
            "50": 12.437354
        },
        "sma": {
            "5": 13.620328,
            "10": 13.317926,
            "20": 12.688286
        },
        "sar": {
            "BB": 14.302545
        },
        "kdj": {
            "k": 27.023588,
            "d": 47.204975,
            "j": -13.339188
        },
        "rsi": {
            "1": 33.933182,
            "2": 47.622089,
            "3": 54.119606
        },
        "dma": {
            "dif": 1.924198,
            "ama": 1.731259
        },
        "macd": {
            "dif": 0.499097,
            "dea": 0.613346,
            "macd": -0.228497
        }
    },
    {
        "time": "2017-12-5 0:0:0",
        "open": 13.149999618530273,
        "high": 13.489999771118164,
        "low": 13.100000381469727,
        "close": 13.300000190734863,
        "volume": 172368128,
        "amount": 2301867776,
        "ma": {
            "5": 13.440001,
            "10": 13.959,
            "20": 13.3775,
            "60": 12.050334,
            "120": 11.319646
        },
        "boll": {
            "mid": 13.3775,
            "upper": 15.134909,
            "lower": 11.62009
        },
        "ema": {
            "12": 13.524572,
            "50": 12.471183
        },
        "sma": {
            "5": 13.556262,
            "10": 13.316133,
            "20": 12.718871
        },
        "sar": {
            "BB": 14.034036
        },
        "kdj": {
            "k": 22.986488,
            "d": 39.132145,
            "j": -9.304825
        },
        "rsi": {
            "1": 43.202835,
            "2": 51.670414,
            "3": 56.285633
        },
        "dma": {
            "dif": 1.788198,
            "ama": 1.797339
        },
        "macd": {
            "dif": 0.440954,
            "dea": 0.578867,
            "macd": -0.275826
        }
    },
    {
        "time": "2017-12-6 0:0:0",
        "open": 13.260000228881836,
        "high": 13.270001411437988,
        "low": 12.789999961853027,
        "close": 13.079999923706055,
        "volume": 161984496,
        "amount": 2104168576,
        "ma": {
            "5": 13.360001,
            "10": 13.844,
            "20": 13.4465,
            "60": 12.078,
            "120": 11.337018
        },
        "boll": {
            "mid": 13.4465,
            "upper": 15.065872,
            "lower": 11.827127
        },
        "ema": {
            "12": 13.490023,
            "50": 12.503686
        },
        "sma": {
            "5": 13.50501,
            "10": 13.31452,
            "20": 12.747928
        },
        "sar": {
            "BB": 13.827229
        },
        "kdj": {
            "k": 20.295088,
            "d": 32.853127,
            "j": -4.820992
        },
        "rsi": {
            "1": 43.202835,
            "2": 51.670414,
            "3": 56.285633
        },
        "dma": {
            "dif": 1.6298,
            "ama": 1.8279
        },
        "macd": {
            "dif": 0.390376,
            "dea": 0.541169,
            "macd": -0.301586
        }
    },
    {
        "time": "2017-12-7 0:0:0",
        "open": 13.050000190734863,
        "high": 13.14000129699707,
        "low": 12.75,
        "close": 12.829999923706055,
        "volume": 118195784,
        "amount": 1526953344,
        "ma": {
            "5": 13.212,
            "10": 13.642,
            "20": 13.493999,
            "60": 12.101,
            "120": 11.352174
        },
        "boll": {
            "mid": 13.493999,
            "upper": 15.002745,
            "lower": 11.985252
        },
        "ema": {
            "12": 13.426943,
            "50": 12.526286
        },
        "sma": {
            "5": 13.420008,
            "10": 13.291067,
            "20": 12.764532
        },
        "sar": {
            "BB": 13.681783
        },
        "kdj": {
            "k": 18.900427,
            "d": 28.202227,
            "j": 0.296825
        },
        "rsi": {
            "1": 37.627739,
            "2": 48.4053,
            "3": 54.240917
        },
        "dma": {
            "dif": 1.391999,
            "ama": 1.811779
        },
        "macd": {
            "dif": 0.328752,
            "dea": 0.498686,
            "macd": -0.339868
        }
    },
    {
        "time": "2017-12-8 0:0:0",
        "open": 12.89000129699707,
        "high": 13.09000015258789,
        "low": 12.75,
        "close": 13.09000015258789,
        "volume": 135131504,
        "amount": 1751422976,
        "ma": {
            "5": 13.102,
            "10": 13.490001,
            "20": 13.518999,
            "60": 12.124166,
            "120": 11.364913
        },
        "boll": {
            "mid": 13.518999,
            "upper": 14.961681,
            "lower": 12.076317
        },
        "ema": {
            "12": 13.335105,
            "50": 12.538197
        },
        "sma": {
            "5": 13.302007,
            "10": 13.24496,
            "20": 12.767805
        },
        "sar": {
            "BB": 13.503427
        },
        "kdj": {
            "k": 14.320713,
            "d": 23.575056,
            "j": -4.187973
        },
        "rsi": {
            "1": 31.997194,
            "2": 44.888882,
            "3": 52.000927
        },
        "dma": {
            "dif": 1.2126,
            "ama": 1.76334
        },
        "macd": {
            "dif": 0.25678,
            "dea": 0.450304,
            "macd": -0.387049
        }
    },
    {
        "time": "2017-12-11 0:0:0",
        "open": 13.079999923706055,
        "high": 13.569999694824219,
        "low": 12.880000114440918,
        "close": 13.5,
        "volume": 226195280,
        "amount": 2980735488,
        "ma": {
            "5": 13.120001,
            "10": 13.343,
            "20": 13.558499,
            "60": 12.150834,
            "120": 11.379658
        },
        "boll": {
            "mid": 13.558499,
            "upper": 14.900385,
            "lower": 12.216614
        },
        "ema": {
            "12": 13.297397,
            "50": 12.559836
        },
        "sma": {
            "5": 13.259605,
            "10": 13.229464,
            "20": 12.783915
        },
        "sar": {
            "BB": 13.352741
        },
        "kdj": {
            "k": 19.151663,
            "d": 22.100592,
            "j": 13.253803
        },
        "rsi": {
            "1": 42.698212,
            "2": 49.085255,
            "3": 54.059799
        },
        "dma": {
            "dif": 1.032598,
            "ama": 1.680439
        },
        "macd": {
            "dif": 0.218206,
            "dea": 0.403885,
            "macd": -0.371357
        }
    },
    {
        "time": "2017-12-12 0:0:0",
        "open": 13.399999618530273,
        "high": 13.479998588562012,
        "low": 13.020001411437988,
        "close": 13.020001411437988,
        "volume": 174340576,
        "amount": 2302354688,
        "ma": {
            "5": 13.160001,
            "10": 13.300001,
            "20": 13.588499,
            "60": 12.186168,
            "120": 11.397627
        },
        "boll": {
            "mid": 13.588499,
            "upper": 14.894734,
            "lower": 12.282264
        },
        "ema": {
            "12": 13.328567,
            "50": 12.596705
        },
        "sma": {
            "5": 13.307684,
            "10": 13.256517,
            "20": 12.819719
        },
        "sar": {
            "BB": 12.75
        },
        "kdj": {
            "k": 33.954212,
            "d": 26.051798,
            "j": 49.759045
        },
        "rsi": {
            "1": 55.846161,
            "2": 54.982082,
            "3": 57.088547
        },
        "dma": {
            "dif": 0.9454,
            "ama": 1.58362
        },
        "macd": {
            "dif": 0.218205,
            "dea": 0.366749,
            "macd": -0.297087
        }
    },
    {
        "time": "2017-12-13 0:0:0",
        "open": 13,
        "high": 13.199999809265137,
        "low": 12.880000114440918,
        "close": 13.130000114440918,
        "volume": 128924808,
        "amount": 1679021952,
        "ma": {
            "5": 13.104001,
            "10": 13.232,
            "20": 13.592,
            "60": 12.210834,
            "120": 11.41126
        },
        "boll": {
            "mid": 13.592,
            "upper": 14.891355,
            "lower": 12.292645
        },
        "ema": {
            "12": 13.281095,
            "50": 12.613305
        },
        "sma": {
            "5": 13.250148,
            "10": 13.232866,
            "20": 12.829733
        },
        "sar": {
            "BB": 12.7828
        },
        "kdj": {
            "k": 31.819876,
            "d": 27.974489,
            "j": 39.510647
        },
        "rsi": {
            "1": 42.232521,
            "2": 47.897243,
            "3": 52.833366
        },
        "dma": {
            "dif": 0.837999,
            "ama": 1.47288
        },
        "macd": {
            "dif": 0.177427,
            "dea": 0.328885,
            "macd": -0.302915
        }
    },
    {
        "time": "2017-12-14 0:0:0",
        "open": 13.149999618530273,
        "high": 13.3100004196167,
        "low": 12.90999984741211,
        "close": 13,
        "volume": 100199800,
        "amount": 1311131904,
        "ma": {
            "5": 13.114,
            "10": 13.163,
            "20": 13.6035,
            "60": 12.239167,
            "120": 11.425583
        },
        "boll": {
            "mid": 13.6035,
            "upper": 14.880962,
            "lower": 12.326038
        },
        "ema": {
            "12": 13.25785,
            "50": 12.633568
        },
        "sma": {
            "5": 13.226118,
            "10": 13.22258,
            "20": 12.844747
        },
        "sar": {
            "BB": 12.810688
        },
        "kdj": {
            "k": 36.660416,
            "d": 30.869797,
            "j": 48.241653
        },
        "rsi": {
            "1": 45.861744,
            "2": 49.523304,
            "3": 53.659332
        },
        "dma": {
            "dif": 0.724998,
            "ama": 1.346419
        },
        "macd": {
            "dif": 0.152231,
            "dea": 0.293554,
            "macd": -0.282645
        }
    },
    {
        "time": "2017-12-15 0:0:0",
        "open": 12.899999618530273,
        "high": 12.930000305175781,
        "low": 12.670000076293945,
        "close": 12.720000267028809,
        "volume": 109995248,
        "amount": 1405372032,
        "ma": {
            "5": 13.148001,
            "10": 13.125,
            "20": 13.5985,
            "60": 12.267167,
            "120": 11.456833
        },
        "boll": {
            "mid": 13.5985,
            "upper": 14.885038,
            "lower": 12.311962
        },
        "ema": {
            "12": 13.218181,
            "50": 12.647938
        },
        "sma": {
            "5": 13.180895,
            "10": 13.200322,
            "20": 12.852509
        },
        "sar": {
            "BB": 12.841833
        },
        "kdj": {
            "k": 34.602882,
            "d": 32.114159,
            "j": 39.58033
        },
        "rsi": {
            "1": 42.10984,
            "2": 47.607731,
            "3": 52.525021
        },
        "dma": {
            "dif": 0.644598,
            "ama": 1.213239
        },
        "macd": {
            "dif": 0.120386,
            "dea": 0.25892,
            "macd": -0.277068
        }
    },
    {
        "time": "2017-12-18 0:0:0",
        "open": 12.729999542236328,
        "high": 12.90999984741211,
        "low": 12.640000343322754,
        "close": 12.75,
        "volume": 80546448,
        "amount": 1029422784,
        "ma": {
            "5": 13.074,
            "10": 13.097,
            "20": 13.5755,
            "60": 12.291001,
            "120": 11.485749
        },
        "boll": {
            "mid": 13.5755,
            "upper": 14.909087,
            "lower": 12.241914
        },
        "ema": {
            "12": 13.141538,
            "50": 12.650764
        },
        "sma": {
            "5": 13.088717,
            "10": 13.15229,
            "20": 12.845883
        },
        "sar": {
            "BB": 13.57
        },
        "kdj": {
            "k": 24.920448,
            "d": 29.716255,
            "j": 15.328835
        },
        "rsi": {
            "1": 34.760025,
            "2": 43.641403,
            "3": 50.142735
        },
        "dma": {
            "dif": 0.584399,
            "ama": 1.079259
        },
        "macd": {
            "dif": 0.071728,
            "dea": 0.221482,
            "macd": -0.299508
        }
    },
    {
        "time": "2017-12-19 0:0:0",
        "open": 12.789999961853027,
        "high": 13.319999694824219,
        "low": 12.739999771118164,
        "close": 13.279999732971191,
        "volume": 239794272,
        "amount": 3138687488,
        "ma": {
            "5": 12.924001,
            "10": 13.042002,
            "20": 13.500501,
            "60": 12.316001,
            "120": 11.514499
        },
        "boll": {
            "mid": 13.500501,
            "upper": 14.84306,
            "lower": 12.157941
        },
        "ema": {
            "12": 13.081301,
            "50": 12.654655
        },
        "sma": {
            "5": 13.020973,
            "10": 13.112061,
            "20": 12.841089
        },
        "sar": {
            "BB": 13.498
        },
        "kdj": {
            "k": 20.556274,
            "d": 26.662928,
            "j": 8.342968
        },
        "rsi": {
            "1": 36.191914,
            "2": 44.184917,
            "3": 50.394272
        },
        "dma": {
            "dif": 0.500401,
            "ama": 0.950479
        },
        "macd": {
            "dif": 0.03518,
            "dea": 0.184221,
            "macd": -0.298083
        }
    },
    {
        "time": "2017-12-20 0:0:0",
        "open": 13.199999809265137,
        "high": 13.3100004196167,
        "low": 13.130000114440918,
        "close": 13.260000228881836,
        "volume": 110624504,
        "amount": 1463802112,
        "ma": {
            "5": 12.976001,
            "10": 13.040001,
            "20": 13.442001,
            "60": 12.351835,
            "120": 11.547165
        },
        "boll": {
            "mid": 13.442001,
            "upper": 14.710224,
            "lower": 12.173779
        },
        "ema": {
            "12": 13.11187,
            "50": 12.679178
        },
        "sma": {
            "5": 13.072779,
            "10": 13.128855,
            "20": 12.863035
        },
        "sar": {
            "BB": 13.42936
        },
        "kdj": {
            "k": 36.643246,
            "d": 29.9897,
            "j": 49.950333
        },
        "rsi": {
            "1": 56.453979,
            "2": 52.933033,
            "3": 54.61536
        },
        "dma": {
            "dif": 0.4622,
            "ama": 0.833719
        },
        "macd": {
            "dif": 0.048425,
            "dea": 0.157062,
            "macd": -0.217275
        }
    },
    {
        "time": "2017-12-21 0:0:0",
        "open": 13.180000305175781,
        "high": 13.680000305175781,
        "low": 13.15999984741211,
        "close": 13.539999961853027,
        "volume": 148520352,
        "amount": 2005617664,
        "ma": {
            "5": 13.002001,
            "10": 13.058001,
            "20": 13.35,
            "60": 12.384669,
            "120": 11.579082
        },
        "boll": {
            "mid": 13.35,
            "upper": 14.350576,
            "lower": 12.349424
        },
        "ema": {
            "12": 13.134659,
            "50": 12.701956
        },
        "sma": {
            "5": 13.110224,
            "10": 13.14197,
            "20": 12.882884
        },
        "sar": {
            "BB": 13.374211
        },
        "kdj": {
            "k": 46.651062,
            "d": 35.543488,
            "j": 68.866211
        },
        "rsi": {
            "1": 55.653728,
            "2": 52.5937,
            "3": 54.432976
        },
        "dma": {
            "dif": 0.4456,
            "ama": 0.739079
        },
        "macd": {
            "dif": 0.056655,
            "dea": 0.136981,
            "macd": -0.160652
        }
    },
    {
        "time": "2017-12-22 0:0:0",
        "open": 13.5,
        "high": 13.630000114440918,
        "low": 13.449999809265137,
        "close": 13.520001411437988,
        "volume": 74290096,
        "amount": 1004525760,
        "ma": {
            "5": 13.110001,
            "10": 13.129001,
            "20": 13.3095,
            "60": 12.419335,
            "120": 11.613333
        },
        "boll": {
            "mid": 13.3095,
            "upper": 14.199087,
            "lower": 12.419912
        },
        "ema": {
            "12": 13.19702,
            "50": 12.73482
        },
        "sma": {
            "5": 13.196179,
            "10": 13.181772,
            "20": 12.915739
        },
        "sar": {
            "BB": 12.64
        },
        "kdj": {
            "k": 59.94685,
            "d": 43.677944,
            "j": 92.484657
        },
        "rsi": {
            "1": 64.183464,
            "2": 56.821339,
            "3": 56.552567
        },
        "dma": {
            "dif": 0.476801,
            "ama": 0.6655
        },
        "macd": {
            "dif": 0.084793,
            "dea": 0.126543,
            "macd": -0.0835
        }
    },
    {
        "time": "2017-12-25 0:0:0",
        "open": 13.520001411437988,
        "high": 13.85999870300293,
        "low": 13.15999984741211,
        "close": 13.25,
        "volume": 158556720,
        "amount": 2145040640,
        "ma": {
            "5": 13.270001,
            "10": 13.172,
            "20": 13.2575,
            "60": 12.454001,
            "120": 11.64775
        },
        "boll": {
            "mid": 13.2575,
            "upper": 13.935878,
            "lower": 12.579122
        },
        "ema": {
            "12": 13.246709,
            "50": 12.765612
        },
        "sma": {
            "5": 13.260943,
            "10": 13.215594,
            "20": 12.945951
        },
        "sar": {
            "BB": 12.681601
        },
        "kdj": {
            "k": 68.169731,
            "d": 51.841873,
            "j": 100.825439
        },
        "rsi": {
            "1": 63.142532,
            "2": 56.429237,
            "3": 56.357193
        },
        "dma": {
            "dif": 0.476601,
            "ama": 0.6099
        },
        "macd": {
            "dif": 0.104277,
            "dea": 0.12209,
            "macd": -0.035626
        }
    },
    {
        "time": "2017-12-26 0:0:0",
        "open": 13.260000228881836,
        "high": 13.6899995803833,
        "low": 13.1899995803833,
        "close": 13.65999984741211,
        "volume": 112368848,
        "amount": 1510826240,
        "ma": {
            "5": 13.370001,
            "10": 13.147,
            "20": 13.223501,
            "60": 12.486668,
            "120": 11.679833
        },
        "boll": {
            "mid": 13.223501,
            "upper": 13.823323,
            "lower": 12.623679
        },
        "ema": {
            "12": 13.247215,
            "50": 12.784607
        },
        "sma": {
            "5": 13.258756,
            "10": 13.219034,
            "20": 12.961154
        },
        "sar": {
            "BB": 12.757473
        },
        "kdj": {
            "k": 62.113171,
            "d": 55.26564,
            "j": 75.808228
        },
        "rsi": {
            "1": 50.003849,
            "2": 51.223206,
            "3": 53.741516
        },
        "dma": {
            "dif": 0.418401,
            "ama": 0.5572
        },
        "macd": {
            "dif": 0.096815,
            "dea": 0.117035,
            "macd": -0.04044
        }
    },
    {
        "time": "2017-12-27 0:0:0",
        "open": 13.579999923706055,
        "high": 13.779999732971191,
        "low": 13.1899995803833,
        "close": 13.289999961853027,
        "volume": 136656672,
        "amount": 1848164992,
        "ma": {
            "5": 13.445999,
            "10": 13.211001,
            "20": 13.221499,
            "60": 12.530168,
            "120": 11.715834
        },
        "boll": {
            "mid": 13.221499,
            "upper": 13.81505,
            "lower": 12.627949
        },
        "ema": {
            "12": 13.31072,
            "50": 12.818936
        },
        "sma": {
            "5": 13.339005,
            "10": 13.26313,
            "20": 12.996097
        },
        "sar": {
            "BB": 12.845675
        },
        "kdj": {
            "k": 69.277657,
            "d": 59.93631,
            "j": 87.960358
        },
        "rsi": {
            "1": 63.748978,
            "2": 57.689529,
            "3": 56.910419
        },
        "dma": {
            "dif": 0.439404,
            "ama": 0.51734
        },
        "macd": {
            "dif": 0.122573,
            "dea": 0.118143,
            "macd": 0.008861
        }
    },
    {
        "time": "2017-12-28 0:0:0",
        "open": 13.279999732971191,
        "high": 13.460000038146973,
        "low": 13.020001411437988,
        "close": 13.210000038146973,
        "volume": 155303040,
        "amount": 2052944384,
        "ma": {
            "5": 13.452001,
            "10": 13.227,
            "20": 13.195,
            "60": 12.569501,
            "120": 11.748501
        },
        "boll": {
            "mid": 13.195,
            "upper": 13.719404,
            "lower": 12.670595
        },
        "ema": {
            "12": 13.307532,
            "50": 12.837409
        },
        "sma": {
            "5": 13.329204,
            "10": 13.265818,
            "20": 13.010793
        },
        "sar": {
            "BB": 12.946995
        },
        "kdj": {
            "k": 63.944683,
            "d": 61.272434,
            "j": 69.289177
        },
        "rsi": {
            "1": 49.123741,
            "2": 51.029556,
            "3": 53.461681
        },
        "dma": {
            "dif": 0.423402,
            "ama": 0.487181
        },
        "macd": {
            "dif": 0.111839,
            "dea": 0.116882,
            "macd": -0.010085
        }
    },
    {
        "time": "2017-12-29 0:0:0",
        "open": 13.210000038146973,
        "high": 13.430000305175781,
        "low": 13.100000381469727,
        "close": 13.300000190734863,
        "volume": 98291552,
        "amount": 1303222016,
        "ma": {
            "5": 13.386,
            "10": 13.248001,
            "20": 13.186499,
            "60": 12.608335,
            "120": 11.78025
        },
        "boll": {
            "mid": 13.186499,
            "upper": 13.703798,
            "lower": 12.669199
        },
        "ema": {
            "12": 13.292528,
            "50": 12.852021
        },
        "sma": {
            "5": 13.305364,
            "10": 13.260236,
            "20": 13.020754
        },
        "sar": {
            "BB": 13.859999
        },
        "kdj": {
            "k": 58.203571,
            "d": 60.249481,
            "j": 54.111755
        },
        "rsi": {
            "1": 46.363934,
            "2": 49.676849,
            "3": 52.740593
        },
        "dma": {
            "dif": 0.412802,
            "ama": 0.464001
        },
        "macd": {
            "dif": 0.095776,
            "dea": 0.112661,
            "macd": -0.03377
        }
    },
    {
        "time": "2018-1-2 0:0:0",
        "open": 13.350000381469727,
        "high": 13.930000305175781,
        "low": 13.319999694824219,
        "close": 13.699999809265137,
        "volume": 208159232,
        "amount": 2856543488,
        "ma": {
            "5": 13.342,
            "10": 13.306002,
            "20": 13.2015,
            "60": 12.644835,
            "120": 11.812166
        },
        "boll": {
            "mid": 13.2015,
            "upper": 13.713205,
            "lower": 12.689795
        },
        "ema": {
            "12": 13.293677,
            "50": 12.869589
        },
        "sma": {
            "5": 13.304291,
            "10": 13.264212,
            "20": 13.034716
        },
        "sar": {
            "BB": 13.826399
        },
        "kdj": {
            "k": 55.469074,
            "d": 58.65601,
            "j": 49.095207
        },
        "rsi": {
            "1": 50.145138,
            "2": 51.262432,
            "3": 53.477215
        },
        "dma": {
            "dif": 0.434402,
            "ama": 0.449001
        },
        "macd": {
            "dif": 0.089277,
            "dea": 0.107984,
            "macd": -0.037413
        }
    },
    {
        "time": "2018-1-3 0:0:0",
        "open": 13.729998588562012,
        "high": 13.85999870300293,
        "low": 13.199999809265137,
        "close": 13.329999923706055,
        "volume": 296249824,
        "amount": 4006220800,
        "ma": {
            "5": 13.431999,
            "10": 13.401001,
            "20": 13.221501,
            "60": 12.684834,
            "120": 11.846417
        },
        "boll": {
            "mid": 13.221501,
            "upper": 13.778603,
            "lower": 12.6644
        },
        "ema": {
            "12": 13.356189,
            "50": 12.902154
        },
        "sma": {
            "5": 13.383432,
            "10": 13.307791,
            "20": 13.06798
        },
        "sar": {
            "BB": 12.74
        },
        "kdj": {
            "k": 61.887775,
            "d": 59.733265,
            "j": 66.1968
        },
        "rsi": {
            "1": 63.767879,
            "2": 57.721203,
            "3": 56.613476
        },
        "dma": {
            "dif": 0.479201,
            "ama": 0.446881
        },
        "macd": {
            "dif": 0.115077,
            "dea": 0.109403,
            "macd": 0.011349
        }
    },
    {
        "time": "2018-1-4 0:0:0",
        "open": 13.319999694824219,
        "high": 13.369999885559082,
        "low": 13.130000114440918,
        "close": 13.25,
        "volume": 185450944,
        "amount": 2454543616,
        "ma": {
            "5": 13.366,
            "10": 13.406,
            "20": 13.223,
            "60": 12.715834,
            "120": 11.872084
        },
        "boll": {
            "mid": 13.223,
            "upper": 13.781281,
            "lower": 12.664719
        },
        "ema": {
            "12": 13.35216,
            "50": 12.918932
        },
        "sma": {
            "5": 13.372746,
            "10": 13.310011,
            "20": 13.08108
        },
        "sar": {
            "BB": 12.7876
        },
        "kdj": {
            "k": 52.613789,
            "d": 57.360107,
            "j": 43.121155
        },
        "rsi": {
            "1": 48.927807,
            "2": 50.912827,
            "3": 53.154766
        },
        "dma": {
            "dif": 0.445401,
            "ama": 0.445201
        },
        "macd": {
            "dif": 0.104464,
            "dea": 0.108415,
            "macd": -0.007902
        }
    },
    {
        "time": "2018-1-5 0:0:0",
        "open": 13.210000038146973,
        "high": 13.350000381469727,
        "low": 13.149999618530273,
        "close": 13.300000190734863,
        "volume": 121031272,
        "amount": 1603289344,
        "ma": {
            "5": 13.358,
            "10": 13.405001,
            "20": 13.231501,
            "60": 12.744501,
            "120": 11.896334
        },
        "boll": {
            "mid": 13.231501,
            "upper": 13.785716,
            "lower": 12.677285
        },
        "ema": {
            "12": 13.336443,
            "50": 12.931915
        },
        "sma": {
            "5": 13.348196,
            "10": 13.30401,
            "20": 13.089526
        },
        "sar": {
            "BB": 12.830496
        },
        "kdj": {
            "k": 43.500729,
            "d": 52.740314,
            "j": 25.021553
        },
        "rsi": {
            "1": 46.141708,
            "2": 49.534687,
            "3": 52.432068
        },
        "dma": {
            "dif": 0.404801,
            "ama": 0.441121
        },
        "macd": {
            "dif": 0.088576,
            "dea": 0.104447,
            "macd": -0.031742
        }
    },
    {
        "time": "2018-1-8 0:0:0",
        "open": 13.25,
        "high": 13.289999961853027,
        "low": 12.85999870300293,
        "close": 12.960000038146973,
        "volume": 215862080,
        "amount": 2806099200,
        "ma": {
            "5": 13.376001,
            "10": 13.381,
            "20": 13.255,
            "60": 12.773666,
            "120": 11.916334
        },
        "boll": {
            "mid": 13.255,
            "upper": 13.776417,
            "lower": 12.733583
        },
        "ema": {
            "12": 13.330836,
            "50": 12.94635
        },
        "sma": {
            "5": 13.338557,
            "10": 13.303609,
            "20": 13.10005
        },
        "sar": {
            "BB": 12.852076
        },
        "kdj": {
            "k": 39.256863,
            "d": 48.245831,
            "j": 21.278923
        },
        "rsi": {
            "1": 48.347656,
            "2": 50.4492,
            "3": 52.850151
        },
        "dma": {
            "dif": 0.338401,
            "ama": 0.427281
        },
        "macd": {
            "dif": 0.079108,
            "dea": 0.099379,
            "macd": -0.040542
        }
    },
    {
        "time": "2018-1-9 0:0:0",
        "open": 12.960000038146973,
        "high": 13.199999809265137,
        "low": 12.920000076293945,
        "close": 13.079999923706055,
        "volume": 134434512,
        "amount": 1754315776,
        "ma": {
            "5": 13.308001,
            "10": 13.325,
            "20": 13.2485,
            "60": 12.800333,
            "120": 11.9335
        },
        "boll": {
            "mid": 13.2485,
            "upper": 13.781691,
            "lower": 12.715309
        },
        "ema": {
            "12": 13.273785,
            "50": 12.946885
        },
        "sma": {
            "5": 13.262846,
            "10": 13.269249,
            "20": 13.093048
        },
        "sar": {
            "BB": 13.93
        },
        "kdj": {
            "k": 29.286545,
            "d": 41.926067,
            "j": 4.0075
        },
        "rsi": {
            "1": 36.236679,
            "2": 44.471024,
            "3": 49.747631
        },
        "dma": {
            "dif": 0.2544,
            "ama": 0.405061
        },
        "macd": {
            "dif": 0.043666,
            "dea": 0.088237,
            "macd": -0.089141
        }
    },
    {
        "time": "2018-1-10 0:0:0",
        "open": 13.039999961853027,
        "high": 13.489999771118164,
        "low": 12.920000076293945,
        "close": 13.470000267028809,
        "volume": 240327744,
        "amount": 3196055552,
        "ma": {
            "5": 13.184,
            "10": 13.308001,
            "20": 13.227501,
            "60": 12.825167,
            "120": 11.952416
        },
        "boll": {
            "mid": 13.227501,
            "upper": 13.751905,
            "lower": 12.703096
        },
        "ema": {
            "12": 13.243972,
            "50": 12.952106
        },
        "sma": {
            "5": 13.226277,
            "10": 13.250323,
            "20": 13.092395
        },
        "sar": {
            "BB": 13.8872
        },
        "kdj": {
            "k": 26.377974,
            "d": 36.74337,
            "j": 5.647179
        },
        "rsi": {
            "1": 42.352654,
            "2": 46.893997,
            "3": 50.811089
        },
        "dma": {
            "dif": 0.207001,
            "ama": 0.383921
        },
        "macd": {
            "dif": 0.024973,
            "dea": 0.075584,
            "macd": -0.101222
        }
    },
    {
        "time": "2018-1-11 0:0:0",
        "open": 13.40999984741211,
        "high": 13.59000015258789,
        "low": 13.270001411437988,
        "close": 13.399999618530273,
        "volume": 144387776,
        "amount": 1937494144,
        "ma": {
            "5": 13.212,
            "10": 13.289,
            "20": 13.250002,
            "60": 12.857832,
            "120": 11.972583
        },
        "boll": {
            "mid": 13.250002,
            "upper": 13.775425,
            "lower": 12.724579
        },
        "ema": {
            "12": 13.278745,
            "50": 12.972415
        },
        "sma": {
            "5": 13.275022,
            "10": 13.27229,
            "20": 13.111275
        },
        "sar": {
            "BB": 13.848513
        },
        "kdj": {
            "k": 36.588451,
            "d": 36.69173,
            "j": 36.381889
        },
        "rsi": {
            "1": 58.046471,
            "2": 54.008984,
            "3": 54.1049
        },
        "dma": {
            "dif": 0.1494,
            "ama": 0.354921
        },
        "macd": {
            "dif": 0.041153,
            "dea": 0.068698,
            "macd": -0.055089
        }
    },
    {
        "time": "2018-1-12 0:0:0",
        "open": 13.449999809265137,
        "high": 13.680000305175781,
        "low": 13.40999984741211,
        "close": 13.550000190734863,
        "volume": 135399136,
        "amount": 1833435648,
        "ma": {
            "5": 13.242,
            "10": 13.3,
            "20": 13.263501,
            "60": 12.886333,
            "120": 11.991833
        },
        "boll": {
            "mid": 13.263501,
            "upper": 13.790018,
            "lower": 12.736984
        },
        "ema": {
            "12": 13.2974,
            "50": 12.989183
        },
        "sma": {
            "5": 13.300016,
            "10": 13.285062,
            "20": 13.125711
        },
        "sar": {
            "BB": 13.811372
        },
        "kdj": {
            "k": 41.214733,
            "d": 38.199398,
            "j": 47.245399
        },
        "rsi": {
            "1": 54.831356,
            "2": 52.628361,
            "3": 53.434742
        },
        "dma": {
            "dif": 0.1204,
            "ama": 0.324621
        },
        "macd": {
            "dif": 0.047778,
            "dea": 0.064514,
            "macd": -0.033471
        }
    },
    {
        "time": "2018-1-15 0:0:0",
        "open": 13.510000228881836,
        "high": 14.329999923706055,
        "low": 13.5,
        "close": 14.199999809265137,
        "volume": 312239456,
        "amount": 4376707072,
        "ma": {
            "5": 13.292002,
            "10": 13.334002,
            "20": 13.291,
            "60": 12.918333,
            "120": 12.013334
        },
        "boll": {
            "mid": 13.291,
            "upper": 13.817127,
            "lower": 12.764874
        },
        "ema": {
            "12": 13.336261,
            "50": 13.011176
        },
        "sma": {
            "5": 13.350014,
            "10": 13.311556,
            "20": 13.146925
        },
        "sar": {
            "BB": 13.789717
        },
        "kdj": {
            "k": 48.971832,
            "d": 41.790211,
            "j": 63.335075
        },
        "rsi": {
            "1": 60.462563,
            "2": 55.299534,
            "3": 54.689644
        },
        "dma": {
            "dif": 0.114202,
            "ama": 0.294761
        },
        "macd": {
            "dif": 0.064389,
            "dea": 0.064489,
            "macd": -0.000199
        }
    },
    {
        "time": "2018-1-16 0:0:0",
        "open": 14.170000076293945,
        "high": 14.380000114440918,
        "low": 14.020001411437988,
        "close": 14.199999809265137,
        "volume": 244454896,
        "amount": 3479176704,
        "ma": {
            "5": 13.539999,
            "10": 13.424001,
            "20": 13.365001,
            "60": 12.963668,
            "120": 12.040917
        },
        "boll": {
            "mid": 13.365001,
            "upper": 13.964068,
            "lower": 12.765933
        },
        "ema": {
            "12": 13.469144,
            "50": 13.057796
        },
        "sma": {
            "5": 13.52001,
            "10": 13.4004,
            "20": 13.199579
        },
        "sar": {
            "BB": 12.859999
        },
        "kdj": {
            "k": 63.033375,
            "d": 48.871265,
            "j": 91.357597
        },
        "rsi": {
            "1": 76.012978,
            "2": 64.707138,
            "3": 59.611309
        },
        "dma": {
            "dif": 0.148001,
            "ama": 0.266121
        },
        "macd": {
            "dif": 0.128522,
            "dea": 0.077295,
            "macd": 0.102453
        }
    },
    {
        "time": "2018-1-17 0:0:0",
        "open": 14.329999923706055,
        "high": 14.800000190734863,
        "low": 14.199999809265137,
        "close": 14.229998588562012,
        "volume": 265629408,
        "amount": 3849312768,
        "ma": {
            "5": 13.764,
            "10": 13.474001,
            "20": 13.437502,
            "60": 13.013834,
            "120": 12.068
        },
        "boll": {
            "mid": 13.437502,
            "upper": 14.072941,
            "lower": 12.802063
        },
        "ema": {
            "12": 13.581583,
            "50": 13.102589
        },
        "sma": {
            "5": 13.656008,
            "10": 13.48036,
            "20": 13.2496
        },
        "sar": {
            "BB": 12.977599
        },
        "kdj": {
            "k": 71.408211,
            "d": 56.383579,
            "j": 101.457481
        },
        "rsi": {
            "1": 76.012985,
            "2": 64.707138,
            "3": 59.611309
        },
        "dma": {
            "dif": 0.139601,
            "ama": 0.232161
        },
        "macd": {
            "dif": 0.177303,
            "dea": 0.097297,
            "macd": 0.160013
        }
    },
    {
        "time": "2018-1-18 0:0:0",
        "open": 14.399999618530273,
        "high": 14.720000267028809,
        "low": 14.279999732971191,
        "close": 14.720000267028809,
        "volume": 214802688,
        "amount": 3120455680,
        "ma": {
            "5": 13.916,
            "10": 13.564,
            "20": 13.485001,
            "60": 13.061167,
            "120": 12.094915
        },
        "boll": {
            "mid": 13.485001,
            "upper": 14.207125,
            "lower": 12.762877
        },
        "ema": {
            "12": 13.681339,
            "50": 13.146801
        },
        "sma": {
            "5": 13.770805,
            "10": 13.555324,
            "20": 13.29862
        },
        "sar": {
            "BB": 13.145887
        },
        "kdj": {
            "k": 71.144974,
            "d": 61.304047,
            "j": 90.826828
        },
        "rsi": {
            "1": 76.624008,
            "2": 65.110435,
            "3": 59.83057
        },
        "dma": {
            "dif": 0.183401,
            "ama": 0.205961
        },
        "macd": {
            "dif": 0.215895,
            "dea": 0.121017,
            "macd": 0.189756
        }
    },
    {
        "time": "2018-1-19 0:0:0",
        "open": 14.800000190734863,
        "high": 15.130000114440918,
        "low": 14.680000305175781,
        "close": 14.800000190734863,
        "volume": 257114688,
        "amount": 3832857088,
        "ma": {
            "5": 14.18,
            "10": 13.710999,
            "20": 13.558001,
            "60": 13.118666,
            "120": 12.128083
        },
        "boll": {
            "mid": 13.558001,
            "upper": 14.457699,
            "lower": 12.658302
        },
        "ema": {
            "12": 13.841133,
            "50": 13.208495
        },
        "sma": {
            "5": 13.960645,
            "10": 13.671791,
            "20": 13.369688
        },
        "sar": {
            "BB": 13.344381
        },
        "kdj": {
            "k": 79.388748,
            "d": 67.332283,
            "j": 103.501678
        },
        "rsi": {
            "1": 84.408653,
            "2": 71.012863,
            "3": 63.232674
        },
        "dma": {
            "dif": 0.2786,
            "ama": 0.193341
        },
        "macd": {
            "dif": 0.282759,
            "dea": 0.153365,
            "macd": 0.258787
        }
    },
    {
        "time": "2018-1-22 0:0:0",
        "open": 14.600000381469727,
        "high": 14.9399995803833,
        "low": 14.430000305175781,
        "close": 14.4399995803833,
        "volume": 207386720,
        "amount": 3032798976,
        "ma": {
            "5": 14.43,
            "10": 13.861,
            "20": 13.620999,
            "60": 13.178999,
            "120": 12.163166
        },
        "boll": {
            "mid": 13.620999,
            "upper": 14.678125,
            "lower": 12.563873
        },
        "ema": {
            "12": 13.988651,
            "50": 13.270906
        },
        "sma": {
            "5": 14.128515,
            "10": 13.784612,
            "20": 13.441203
        },
        "sar": {
            "BB": 13.564481
        },
        "kdj": {
            "k": 81.281792,
            "d": 71.982117,
            "j": 99.881134
        },
        "rsi": {
            "1": 85.363602,
            "2": 71.860733,
            "3": 63.75563
        },
        "dma": {
            "dif": 0.379202,
            "ama": 0.197421
        },
        "macd": {
            "dif": 0.338305,
            "dea": 0.190353,
            "macd": 0.295903
        }
    },
    {
        "time": "2018-1-23 0:0:0",
        "open": 14.35999870300293,
        "high": 14.899999618530273,
        "low": 14.329999923706055,
        "close": 14.649999618530273,
        "volume": 238879168,
        "amount": 3492462080,
        "ma": {
            "5": 14.478,
            "10": 14.009,
            "20": 13.667,
            "60": 13.226999,
            "120": 12.193999
        },
        "boll": {
            "mid": 13.667,
            "upper": 14.784003,
            "lower": 12.549996
        },
        "ema": {
            "12": 14.058089,
            "50": 13.316753
        },
        "sma": {
            "5": 14.190813,
            "10": 13.850151,
            "20": 13.491142
        },
        "sar": {
            "BB": 13.814964
        },
        "kdj": {
            "k": 77.113945,
            "d": 73.692726,
            "j": 83.956375
        },
        "rsi": {
            "1": 64.147415,
            "2": 62.837826,
            "3": 59.764076
        },
        "dma": {
            "dif": 0.4844,
            "ama": 0.220421
        },
        "macd": {
            "dif": 0.34925,
            "dea": 0.222132,
            "macd": 0.254235
        }
    },
    {
        "time": "2018-1-24 0:0:0",
        "open": 14.65999984741211,
        "high": 15.079999923706055,
        "low": 14.5,
        "close": 14.64000129699707,
        "volume": 259129216,
        "amount": 3838734848,
        "ma": {
            "5": 14.567999,
            "10": 14.166,
            "20": 13.737,
            "60": 13.2785,
            "120": 12.227167
        },
        "boll": {
            "mid": 13.737,
            "upper": 14.917641,
            "lower": 12.556358
        },
        "ema": {
            "12": 14.149153,
            "50": 13.369038
        },
        "sma": {
            "5": 14.282651,
            "10": 13.930136,
            "20": 13.549085
        },
        "sar": {
            "BB": 13.99497
        },
        "kdj": {
            "k": 76.140465,
            "d": 74.508636,
            "j": 79.404114
        },
        "rsi": {
            "1": 69.460571,
            "2": 65.587471,
            "3": 61.241131
        },
        "dma": {
            "dif": 0.6064,
            "ama": 0.260361
        },
        "macd": {
            "dif": 0.370598,
            "dea": 0.251825,
            "macd": 0.237545
        }
    },
    {
        "time": "2018-1-25 0:0:0",
        "open": 14.449999809265137,
        "high": 14.470000267028809,
        "low": 14,
        "close": 14.199999809265137,
        "volume": 236998464,
        "amount": 3360822272,
        "ma": {
            "5": 14.65,
            "10": 14.283,
            "20": 13.786,
            "60": 13.330167,
            "120": 12.257168
        },
        "boll": {
            "mid": 13.786,
            "upper": 15.03264,
            "lower": 12.53936
        },
        "ema": {
            "12": 14.224668,
            "50": 13.41888
        },
        "sma": {
            "5": 14.354121,
            "10": 14.001123,
            "20": 13.603632
        },
        "sar": {
            "BB": 14.175976
        },
        "kdj": {
            "k": 74.597542,
            "d": 74.538269,
            "j": 74.716095
        },
        "rsi": {
            "1": 68.877396,
            "2": 65.336388,
            "3": 61.129646
        },
        "dma": {
            "dif": 0.6896,
            "ama": 0.314381
        },
        "macd": {
            "dif": 0.382301,
            "dea": 0.277921,
            "macd": 0.208762
        }
    },
    {
        "time": "2018-1-26 0:0:0",
        "open": 14.180000305175781,
        "high": 14.34000015258789,
        "low": 14.020001411437988,
        "close": 14.050000190734863,
        "volume": 203298864,
        "amount": 2885104640,
        "ma": {
            "5": 14.546,
            "10": 14.363001,
            "20": 13.8315,
            "60": 13.376833,
            "120": 12.282583
        },
        "boll": {
            "mid": 13.8315,
            "upper": 15.068305,
            "lower": 12.594695
        },
        "ema": {
            "12": 14.220873,
            "50": 13.449512
        },
        "sma": {
            "5": 14.323298,
            "10": 14.021011,
            "20": 13.633451
        },
        "sar": {
            "BB": 15.13
        },
        "kdj": {
            "k": 64.046623,
            "d": 71.041054,
            "j": 50.057755
        },
        "rsi": {
            "1": 47.719791,
            "2": 55.192558,
            "3": 56.413631
        },
        "dma": {
            "dif": 0.743602,
            "ama": 0.376701
        },
        "macd": {
            "dif": 0.352015,
            "dea": 0.29274,
            "macd": 0.118552
        }
    },
    {
        "time": "2018-1-29 0:0:0",
        "open": 14.050000190734863,
        "high": 14.25,
        "low": 13.600000381469727,
        "close": 13.739999771118164,
        "volume": 209054688,
        "amount": 2911452160,
        "ma": {
            "5": 14.396001,
            "10": 14.413,
            "20": 13.8735,
            "60": 13.418667,
            "120": 12.307918
        },
        "boll": {
            "mid": 13.8735,
            "upper": 15.078103,
            "lower": 12.668897
        },
        "ema": {
            "12": 14.194585,
            "50": 13.473061
        },
        "sma": {
            "5": 14.268639,
            "10": 14.023911,
            "20": 13.654277
        },
        "sar": {
            "BB": 15.0848
        },
        "kdj": {
            "k": 44.17268,
            "d": 62.08493,
            "j": 8.348175
        },
        "rsi": {
            "1": 42.392612,
            "2": 52.179741,
            "3": 54.906784
        },
        "dma": {
            "dif": 0.7746,
            "ama": 0.442741
        },
        "macd": {
            "dif": 0.312309,
            "dea": 0.296654,
            "macd": 0.031312
        }
    },
    {
        "time": "2018-1-30 0:0:0",
        "open": 13.699999809265137,
        "high": 13.84000015258789,
        "low": 13.550000190734863,
        "close": 13.649999618530273,
        "volume": 109473984,
        "amount": 1497709056,
        "ma": {
            "5": 14.256,
            "10": 14.367,
            "20": 13.895498,
            "60": 13.457833,
            "120": 12.329332
        },
        "boll": {
            "mid": 13.895498,
            "upper": 15.071778,
            "lower": 12.719218
        },
        "ema": {
            "12": 14.124648,
            "50": 13.483528
        },
        "sma": {
            "5": 14.16291,
            "10": 13.99552,
            "20": 13.658564
        },
        "sar": {
            "BB": 14.999616
        },
        "kdj": {
            "k": 32.49855,
            "d": 52.222805,
            "j": -6.949959
        },
        "rsi": {
            "1": 33.200809,
            "2": 46.461685,
            "3": 51.916283
        },
        "dma": {
            "dif": 0.7174,
            "ama": 0.499681
        },
        "macd": {
            "dif": 0.252912,
            "dea": 0.287905,
            "macd": -0.069987
        }
    },
    {
        "time": "2018-1-31 0:0:0",
        "open": 13.600000381469727,
        "high": 14.050000190734863,
        "low": 13.529999732971191,
        "close": 14.050000190734863,
        "volume": 174772928,
        "amount": 2423104768,
        "ma": {
            "5": 14.056,
            "10": 14.311999,
            "20": 13.893,
            "60": 13.497334,
            "120": 12.351417
        },
        "boll": {
            "mid": 13.893,
            "upper": 15.071236,
            "lower": 12.714764
        },
        "ema": {
            "12": 14.051625,
            "50": 13.490057
        },
        "sma": {
            "5": 14.060328,
            "10": 13.960968,
            "20": 13.658134
        },
        "sar": {
            "BB": 14.831662
        },
        "kdj": {
            "k": 23.775393,
            "d": 42.740337,
            "j": -14.154495
        },
        "rsi": {
            "1": 30.868992,
            "2": 44.903229,
            "3": 51.073574
        },
        "dma": {
            "dif": 0.6744,
            "ama": 0.55316
        },
        "macd": {
            "dif": 0.196314,
            "dea": 0.269587,
            "macd": -0.146546
        }
    },
    {
        "time": "2018-2-1 0:0:0",
        "open": 13.949999809265137,
        "high": 14.300000190734863,
        "low": 13.84000015258789,
        "close": 14.029999732971191,
        "volume": 200561472,
        "amount": 2821583616,
        "ma": {
            "5": 13.938001,
            "10": 14.294001,
            "20": 13.928999,
            "60": 13.532833,
            "120": 12.376417
        },
        "boll": {
            "mid": 13.928999,
            "upper": 15.078441,
            "lower": 12.779557
        },
        "ema": {
            "12": 14.051375,
            "50": 13.512015
        },
        "sma": {
            "5": 14.058263,
            "10": 13.969872,
            "20": 13.677727
        },
        "sar": {
            "BB": 14.626596
        },
        "kdj": {
            "k": 26.683601,
            "d": 37.388092,
            "j": 5.27462
        },
        "rsi": {
            "1": 49.707558,
            "2": 52.610283,
            "3": 54.498871
        },
        "dma": {
            "dif": 0.664401,
            "ama": 0.60126
        },
        "macd": {
            "dif": 0.181643,
            "dea": 0.251998,
            "macd": -0.140711
        }
    },
    {
        "time": "2018-2-2 0:0:0",
        "open": 13.90999984741211,
        "high": 14.100000381469727,
        "low": 13.630000114440918,
        "close": 14.050000190734863,
        "volume": 117651272,
        "amount": 1637619456,
        "ma": {
            "5": 13.904001,
            "10": 14.225,
            "20": 13.967999,
            "60": 13.5645,
            "120": 12.403917
        },
        "boll": {
            "mid": 13.967999,
            "upper": 15.072491,
            "lower": 12.863508
        },
        "ema": {
            "12": 14.048087,
            "50": 13.532329
        },
        "sma": {
            "5": 14.05261,
            "10": 13.975885,
            "20": 13.69534
        },
        "sar": {
            "BB": 14.451141
        },
        "kdj": {
            "k": 28.541754,
            "d": 34.439312,
            "j": 16.746635
        },
        "rsi": {
            "1": 48.907879,
            "2": 52.211899,
            "3": 54.300522
        },
        "dma": {
            "dif": 0.616801,
            "ama": 0.635081
        },
        "macd": {
            "dif": 0.166483,
            "dea": 0.234895,
            "macd": -0.136824
        }
    },
    {
        "time": "2018-2-5 0:0:0",
        "open": 13.800000190734863,
        "high": 14.569999694824219,
        "low": 13.729998588562012,
        "close": 14.550000190734863,
        "volume": 233199808,
        "amount": 3326355200,
        "ma": {
            "5": 13.903999,
            "10": 14.15,
            "20": 14.005499,
            "60": 13.593166,
            "120": 12.432502
        },
        "boll": {
            "mid": 14.005499,
            "upper": 15.064491,
            "lower": 12.946507
        },
        "ema": {
            "12": 14.048382,
            "50": 13.552629
        },
        "sma": {
            "5": 14.052089,
            "10": 13.983296,
            "20": 13.713072
        },
        "sar": {
            "BB": 14.328913
        },
        "kdj": {
            "k": 30.21064,
            "d": 33.029755,
            "j": 24.572411
        },
        "rsi": {
            "1": 49.875538,
            "2": 52.603424,
            "3": 54.473412
        },
        "dma": {
            "dif": 0.5478,
            "ama": 0.65194
        },
        "macd": {
            "dif": 0.154304,
            "dea": 0.218777,
            "macd": -0.128946
        }
    },
    {
        "time": "2018-2-6 0:0:0",
        "open": 14.229998588562012,
        "high": 14.329999923706055,
        "low": 13.930000305175781,
        "close": 14,
        "volume": 258287200,
        "amount": 3641294848,
        "ma": {
            "5": 14.066,
            "10": 14.161,
            "20": 14.084999,
            "60": 13.630667,
            "120": 12.470252
        },
        "boll": {
            "mid": 14.084999,
            "upper": 15.047836,
            "lower": 13.122162
        },
        "ema": {
            "12": 14.125553,
            "50": 13.591742
        },
        "sma": {
            "5": 14.15167,
            "10": 14.039968,
            "20": 13.754918
        },
        "sar": {
            "BB": 13.53
        },
        "kdj": {
            "k": 42.075916,
            "d": 36.045139,
            "j": 54.137474
        },
        "rsi": {
            "1": 68.036392,
            "2": 61.259628,
            "3": 58.562935
        },
        "dma": {
            "dif": 0.558999,
            "ama": 0.6594
        },
        "macd": {
            "dif": 0.182888,
            "dea": 0.211599,
            "macd": -0.057422
        }
    },
    {
        "time": "2018-2-7 0:0:0",
        "open": 14.220000267028809,
        "high": 14.300000190734863,
        "low": 12.760000228881836,
        "close": 12.920000076293945,
        "volume": 334571712,
        "amount": 4521586176,
        "ma": {
            "5": 14.136,
            "10": 14.096001,
            "20": 14.131,
            "60": 13.649,
            "120": 12.501752
        },
        "boll": {
            "mid": 14.131,
            "upper": 14.971827,
            "lower": 13.290173
        },
        "ema": {
            "12": 14.106237,
            "50": 13.607752
        },
        "sma": {
            "5": 14.121336,
            "10": 14.035971,
            "20": 13.767172
        },
        "sar": {
            "BB": 13.5716
        },
        "kdj": {
            "k": 43.114719,
            "d": 38.401669,
            "j": 52.540825
        },
        "rsi": {
            "1": 46.024765,
            "2": 50.247395,
            "3": 53.089123
        },
        "dma": {
            "dif": 0.492599,
            "ama": 0.64802
        },
        "macd": {
            "dif": 0.159326,
            "dea": 0.201144,
            "macd": -0.083637
        }
    },
    {
        "time": "2018-2-8 0:0:0",
        "open": 12.829999923706055,
        "high": 12.920000076293945,
        "low": 12.529999732971191,
        "close": 12.539999961853027,
        "volume": 213781504,
        "amount": 2711464960,
        "ma": {
            "5": 13.910001,
            "10": 13.924001,
            "20": 14.103502,
            "60": 13.648499,
            "120": 12.523501
        },
        "boll": {
            "mid": 14.103502,
            "upper": 15.062832,
            "lower": 13.144173
        },
        "ema": {
            "12": 13.923739,
            "50": 13.580781
        },
        "sma": {
            "5": 13.881068,
            "10": 13.924375,
            "20": 13.724813
        },
        "sar": {
            "BB": 14.57
        },
        "kdj": {
            "k": 31.689737,
            "d": 36.164356,
            "j": 22.740501
        },
        "rsi": {
            "1": 26.115602,
            "2": 36.277622,
            "3": 44.555847
        },
        "dma": {
            "dif": 0.336202,
            "ama": 0.61268
        },
        "macd": {
            "dif": 0.052895,
            "dea": 0.171494,
            "macd": -0.2372
        }
    },
    {
        "time": "2018-2-9 0:0:0",
        "open": 12.079999923706055,
        "high": 12.079999923706055,
        "low": 11.380000114440918,
        "close": 11.6899995803833,
        "volume": 282494976,
        "amount": 3308553728,
        "ma": {
            "5": 13.612,
            "10": 13.758,
            "20": 14.060501,
            "60": 13.642499,
            "120": 12.541836
        },
        "boll": {
            "mid": 14.060501,
            "upper": 15.210766,
            "lower": 12.910236
        },
        "ema": {
            "12": 13.710856,
            "50": 13.539967
        },
        "sma": {
            "5": 13.612854,
            "10": 13.785937,
            "20": 13.665573
        },
        "sar": {
            "BB": 14.4252
        },
        "kdj": {
            "k": 21.289894,
            "d": 31.206202,
            "j": 1.457279
        },
        "rsi": {
            "1": 22.082407,
            "2": 32.779564,
            "3": 42.07296
        },
        "dma": {
            "dif": 0.195802,
            "ama": 0.5579
        },
        "macd": {
            "dif": -0.061407,
            "dea": 0.124914,
            "macd": -0.372642
        }
    },
    {
        "time": "2018-2-12 0:0:0",
        "open": 11.779999732971191,
        "high": 11.84000015258789,
        "low": 11.5600004196167,
        "close": 11.720000267028809,
        "volume": 122878240,
        "amount": 1439644288,
        "ma": {
            "5": 13.140001,
            "10": 13.522,
            "20": 13.967501,
            "60": 13.618999,
            "120": 12.552418
        },
        "boll": {
            "mid": 13.967501,
            "upper": 15.521491,
            "lower": 12.41351
        },
        "ema": {
            "12": 13.399956,
            "50": 13.467419
        },
        "sma": {
            "5": 13.228284,
            "10": 13.576343,
            "20": 13.566793
        },
        "sar": {
            "BB": 14.197776
        },
        "kdj": {
            "k": 17.432547,
            "d": 26.614983,
            "j": -0.932327
        },
        "rsi": {
            "1": 15.611023,
            "2": 26.53582,
            "3": 37.230465
        },
        "dma": {
            "dif": -0.006398,
            "ama": 0.479801
        },
        "macd": {
            "dif": -0.218066,
            "dea": 0.056318,
            "macd": -0.548768
        }
    },
    {
        "time": "2018-2-13 0:0:0",
        "open": 11.869999885559082,
        "high": 12.210000038146973,
        "low": 11.84000015258789,
        "close": 11.9399995803833,
        "volume": 129817872,
        "amount": 1562419968,
        "ma": {
            "5": 12.573999,
            "10": 13.32,
            "20": 13.8435,
            "60": 13.594666,
            "120": 12.563084
        },
        "boll": {
            "mid": 13.8435,
            "upper": 15.688033,
            "lower": 11.998967
        },
        "ema": {
            "12": 13.1415,
            "50": 13.398892
        },
        "sma": {
            "5": 12.926626,
            "10": 13.390707,
            "20": 13.474454
        },
        "sar": {
            "BB": 13.859643
        },
        "kdj": {
            "k": 15.174469,
            "d": 22.801477,
            "j": -0.079548
        },
        "rsi": {
            "1": 16.645624,
            "2": 27.070686,
            "3": 37.495422
        },
        "dma": {
            "dif": -0.182798,
            "ama": 0.389781
        },
        "macd": {
            "dif": -0.335927,
            "dea": -0.022131,
            "macd": -0.627592
        }
    },
    {
        "time": "2018-2-14 0:0:0",
        "open": 11.960000038146973,
        "high": 12.029999732971191,
        "low": 11.760000228881836,
        "close": 12,
        "volume": 86419024,
        "amount": 1030474368,
        "ma": {
            "5": 12.162,
            "10": 13.149,
            "20": 13.730499,
            "60": 13.556165,
            "120": 12.575418
        },
        "boll": {
            "mid": 13.730499,
            "upper": 15.751544,
            "lower": 11.709455
        },
        "ema": {
            "12": 12.956655,
            "50": 13.341681
        },
        "sma": {
            "5": 12.7293,
            "10": 13.245636,
            "20": 13.397731
        },
        "sar": {
            "BB": 13.583686
        },
        "kdj": {
            "k": 15.967929,
            "d": 20.523628,
            "j": 6.856529
        },
        "rsi": {
            "1": 24.76256,
            "2": 31.08456,
            "3": 39.45113
        },
        "dma": {
            "dif": -0.326599,
            "ama": 0.289681
        },
        "macd": {
            "dif": -0.406889,
            "dea": -0.099083,
            "macd": -0.615613
        }
    },
    {
        "time": "2018-2-22 0:0:0",
        "open": 12.25,
        "high": 12.529999732971191,
        "low": 12.25,
        "close": 12.460000038146973,
        "volume": 126840608,
        "amount": 1573562624,
        "ma": {
            "5": 11.978,
            "10": 12.944,
            "20": 13.619,
            "60": 13.515332,
            "120": 12.586667
        },
        "boll": {
            "mid": 13.619,
            "upper": 15.766099,
            "lower": 11.471902
        },
        "ema": {
            "12": 12.809477,
            "50": 13.289066
        },
        "sma": {
            "5": 12.583441,
            "10": 13.121073,
            "20": 13.327845
        },
        "sar": {
            "BB": 13.304696
        },
        "kdj": {
            "k": 17.123865,
            "d": 19.390373,
            "j": 12.590851
        },
        "rsi": {
            "1": 27.0863,
            "2": 32.194878,
            "3": 39.985527
        },
        "dma": {
            "dif": -0.505598,
            "ama": 0.172681
        },
        "macd": {
            "dif": -0.453064,
            "dea": -0.169879,
            "macd": -0.56637
        }
    },
    {
        "time": "2018-2-23 0:0:0",
        "open": 12.579999923706055,
        "high": 12.789999961853027,
        "low": 12.449999809265137,
        "close": 12.609999656677246,
        "volume": 101366320,
        "amount": 1278185728,
        "ma": {
            "5": 11.962,
            "10": 12.787001,
            "20": 13.506,
            "60": 13.471332,
            "120": 12.599667
        },
        "boll": {
            "mid": 13.506,
            "upper": 15.647018,
            "lower": 11.364981
        },
        "ema": {
            "12": 12.755712,
            "50": 13.256554
        },
        "sma": {
            "5": 12.558752,
            "10": 13.054965,
            "20": 13.284452
        },
        "sar": {
            "BB": 13.057545
        },
        "kdj": {
            "k": 22.701178,
            "d": 20.493975,
            "j": 27.115582
        },
        "rsi": {
            "1": 43.219978,
            "2": 40.246525,
            "3": 43.943489
        },
        "dma": {
            "dif": -0.650198,
            "ama": 0.045981
        },
        "macd": {
            "dif": -0.447382,
            "dea": -0.225379,
            "macd": -0.444005
        }
    },
    {
        "time": "2018-2-26 0:0:0",
        "open": 12.770000457763672,
        "high": 12.850000381469727,
        "low": 12.449999809265137,
        "close": 12.630000114440918,
        "volume": 104575872,
        "amount": 1318960512,
        "ma": {
            "5": 12.146,
            "10": 12.643001,
            "20": 13.3965,
            "60": 13.442332,
            "120": 12.613666
        },
        "boll": {
            "mid": 13.3965,
            "upper": 15.482145,
            "lower": 11.310854
        },
        "ema": {
            "12": 12.733294,
            "50": 13.231198
        },
        "sma": {
            "5": 12.569002,
            "10": 13.010468,
            "20": 13.25073
        },
        "sar": {
            "BB": 12.928337
        },
        "kdj": {
            "k": 29.032419,
            "d": 23.340124,
            "j": 40.417011
        },
        "rsi": {
            "1": 47.744473,
            "2": 42.668324,
            "3": 45.173809
        },
        "dma": {
            "dif": -0.789799,
            "ama": -0.087779
        },
        "macd": {
            "dif": -0.425866,
            "dea": -0.265477,
            "macd": -0.320779
        }
    },
    {
        "time": "2018-2-27 0:0:0",
        "open": 12.640000343322754,
        "high": 12.699999809265137,
        "low": 12.1899995803833,
        "close": 12.279999732971191,
        "volume": 128586904,
        "amount": 1590018432,
        "ma": {
            "5": 12.328,
            "10": 12.450999,
            "20": 13.306,
            "60": 13.410167,
            "120": 12.626332
        },
        "boll": {
            "mid": 13.306,
            "upper": 15.357817,
            "lower": 11.254183
        },
        "ema": {
            "12": 12.717402,
            "50": 13.207623
        },
        "sma": {
            "5": 12.581202,
            "10": 12.972422,
            "20": 13.219693
        },
        "sar": {
            "BB": 12.851803
        },
        "kdj": {
            "k": 33.624352,
            "d": 26.768198,
            "j": 47.336658
        },
        "rsi": {
            "1": 48.402328,
            "2": 43.004337,
            "3": 45.340721
        },
        "dma": {
            "dif": -0.972599,
            "ama": -0.240939
        },
        "macd": {
            "dif": -0.402561,
            "dea": -0.292894,
            "macd": -0.219335
        }
    },
    {
        "time": "2018-2-28 0:0:0",
        "open": 12.100000381469727,
        "high": 12.1899995803833,
        "low": 11.930000305175781,
        "close": 12.050000190734863,
        "volume": 121414560,
        "amount": 1463313664,
        "ma": {
            "5": 12.396,
            "10": 12.278999,
            "20": 13.187502,
            "60": 13.382667,
            "120": 12.634083
        },
        "boll": {
            "mid": 13.187502,
            "upper": 15.185486,
            "lower": 11.189518
        },
        "ema": {
            "12": 12.65011,
            "50": 13.171245
        },
        "sma": {
            "5": 12.520961,
            "10": 12.90318,
            "20": 13.172709
        },
        "sar": {
            "BB": 12.771442
        },
        "kdj": {
            "k": 41.896748,
            "d": 31.811049,
            "j": 62.06815
        },
        "rsi": {
            "1": 38.281757,
            "2": 38.676914,
            "3": 42.952877
        },
        "dma": {
            "dif": -1.1202,
            "ama": -0.402219
        },
        "macd": {
            "dif": -0.407634,
            "dea": -0.315842,
            "macd": -0.183584
        }
    },
    {
        "time": "2018-3-1 0:0:0",
        "open": 11.920000076293945,
        "high": 12.149999618530273,
        "low": 11.899999618530273,
        "close": 12.039999961853027,
        "volume": 88695720,
        "amount": 1069354496,
        "ma": {
            "5": 12.406,
            "10": 12.191999,
            "20": 13.058001,
            "60": 13.355165,
            "120": 12.63725
        },
        "boll": {
            "mid": 13.058001,
            "upper": 14.994408,
            "lower": 11.121593
        },
        "ema": {
            "12": 12.557785,
            "50": 13.127275
        },
        "sma": {
            "5": 12.426768,
            "10": 12.817862,
            "20": 13.116572
        },
        "sar": {
            "BB": 12.655154
        },
        "kdj": {
            "k": 43.123905,
            "d": 35.582001,
            "j": 58.207718
        },
        "rsi": {
            "1": 32.863152,
            "2": 36.074566,
            "3": 41.455795
        },
        "dma": {
            "dif": -1.1878,
            "ama": -0.554619
        },
        "macd": {
            "dif": -0.425311,
            "dea": -0.337736,
            "macd": -0.175151
        }
    },
    {
        "time": "2018-3-2 0:0:0",
        "open": 11.920000076293945,
        "high": 12.039999961853027,
        "low": 11.850000381469727,
        "close": 11.949999809265137,
        "volume": 66312416,
        "amount": 791736448,
        "ma": {
            "5": 12.322001,
            "10": 12.142,
            "20": 12.950002,
            "60": 13.325499,
            "120": 12.642335
        },
        "boll": {
            "mid": 12.950002,
            "upper": 14.858949,
            "lower": 11.041055
        },
        "ema": {
            "12": 12.478126,
            "50": 13.084637
        },
        "sma": {
            "5": 12.349415,
            "10": 12.740076,
            "20": 13.062744
        },
        "sar": {
            "BB": 12.510123
        },
        "kdj": {
            "k": 41.152359,
            "d": 37.438786,
            "j": 48.579506
        },
        "rsi": {
            "1": 32.622234,
            "2": 35.959808,
            "3": 41.390339
        },
        "dma": {
            "dif": -1.215999,
            "ama": -0.695799
        },
        "macd": {
            "dif": -0.435112,
            "dea": -0.357211,
            "macd": -0.155802
        }
    },
    {
        "time": "2018-3-5 0:0:0",
        "open": 11.930000305175781,
        "high": 12.079999923706055,
        "low": 11.800000190734863,
        "close": 11.859999656677246,
        "volume": 75418312,
        "amount": 897244288,
        "ma": {
            "5": 12.190001,
            "10": 12.168,
            "20": 12.845001,
            "60": 13.301665,
            "120": 12.647918
        },
        "boll": {
            "mid": 12.845001,
            "upper": 14.730062,
            "lower": 10.959941
        },
        "ema": {
            "12": 12.396875,
            "50": 13.040141
        },
        "sma": {
            "5": 12.269532,
            "10": 12.661068,
            "20": 13.007108
        },
        "sar": {
            "BB": 12.388099
        },
        "kdj": {
            "k": 33.245289,
            "d": 36.040955,
            "j": 27.653961
        },
        "rsi": {
            "1": 30.22891,
            "2": 34.87067,
            "3": 40.785614
        },
        "dma": {
            "dif": -1.169,
            "ama": -0.812059
        },
        "macd": {
            "dif": -0.445011,
            "dea": -0.374771,
            "macd": -0.14048
        }
    },
    {
        "time": "2018-3-6 0:0:0",
        "open": 11.949999809265137,
        "high": 12.109999656677246,
        "low": 11.770000457763672,
        "close": 12.100000381469727,
        "volume": 115016248,
        "amount": 1373438464,
        "ma": {
            "5": 12.036,
            "10": 12.182,
            "20": 12.751,
            "60": 13.282665,
            "120": 12.653335
        },
        "boll": {
            "mid": 12.751,
            "upper": 14.635691,
            "lower": 10.86631
        },
        "ema": {
            "12": 12.31428,
            "50": 12.99386
        },
        "sma": {
            "5": 12.187626,
            "10": 12.580961,
            "20": 12.949751
        },
        "sar": {
            "BB": 12.280479
        },
        "kdj": {
            "k": 25.221611,
            "d": 32.434505,
            "j": 10.795822
        },
        "rsi": {
            "1": 27.782961,
            "2": 33.75536,
            "3": 40.173157
        },
        "dma": {
            "dif": -1.137799,
            "ama": -0.907559
        },
        "macd": {
            "dif": -0.454874,
            "dea": -0.390792,
            "macd": -0.128165
        }
    },
    {
        "time": "2018-3-7 0:0:0",
        "open": 12.149999618530273,
        "high": 12.34000015258789,
        "low": 12.039999961853027,
        "close": 12.050000190734863,
        "volume": 142757024,
        "amount": 1744085248,
        "ma": {
            "5": 12,
            "10": 12.198,
            "20": 12.673501,
            "60": 13.262666,
            "120": 12.6565
        },
        "boll": {
            "mid": 12.673501,
            "upper": 14.529757,
            "lower": 10.817245
        },
        "ema": {
            "12": 12.281314,
            "50": 12.958807
        },
        "sma": {
            "5": 12.1701,
            "10": 12.532866,
            "20": 12.907263
        },
        "sar": {
            "BB": 12.184383
        },
        "kdj": {
            "k": 26.99959,
            "d": 30.622866,
            "j": 19.75304
        },
        "rsi": {
            "1": 42.635994,
            "2": 39.394428,
            "3": 42.572765
        },
        "dma": {
            "dif": -1.108799,
            "ama": -0.985779
        },
        "macd": {
            "dif": -0.438273,
            "dea": -0.400288,
            "macd": -0.075971
        }
    },
    {
        "time": "2018-3-8 0:0:0",
        "open": 12.050000190734863,
        "high": 12.149999618530273,
        "low": 11.949999809265137,
        "close": 12.109999656677246,
        "volume": 68975504,
        "amount": 832153728,
        "ma": {
            "5": 11.999999,
            "10": 12.203,
            "20": 12.573501,
            "60": 13.241832,
            "120": 12.659917
        },
        "boll": {
            "mid": 12.573501,
            "upper": 14.330359,
            "lower": 10.816642
        },
        "ema": {
            "12": 12.245727,
            "50": 12.923168
        },
        "sma": {
            "5": 12.14608,
            "10": 12.484579,
            "20": 12.8644
        },
        "sar": {
            "BB": 11.77
        },
        "kdj": {
            "k": 26.641695,
            "d": 29.295809,
            "j": 21.333469
        },
        "rsi": {
            "1": 40.550938,
            "2": 38.646744,
            "3": 42.204765
        },
        "dma": {
            "dif": -1.079199,
            "ama": -1.043139
        },
        "macd": {
            "dif": -0.424261,
            "dea": -0.405083,
            "macd": -0.038357
        }
    },
    {
        "time": "2018-3-9 0:0:0",
        "open": 12.149999618530273,
        "high": 12.199999809265137,
        "low": 11.979999542236328,
        "close": 12.09000015258789,
        "volume": 94387696,
        "amount": 1139043584,
        "ma": {
            "5": 12.014,
            "10": 12.168,
            "20": 12.4775,
            "60": 13.225664,
            "120": 12.663334
        },
        "boll": {
            "mid": 12.4775,
            "upper": 14.10427,
            "lower": 10.85073
        },
        "ema": {
            "12": 12.224846,
            "50": 12.891279
        },
        "sma": {
            "5": 12.138865,
            "10": 12.447122,
            "20": 12.82668
        },
        "sar": {
            "BB": 11.792801
        },
        "kdj": {
            "k": 28.254934,
            "d": 28.948851,
            "j": 26.8671
        },
        "rsi": {
            "1": 44.461937,
            "2": 40.13414,
            "3": 42.823627
        },
        "dma": {
            "dif": -1.091198,
            "ama": -1.087239
        },
        "macd": {
            "dif": -0.403662,
            "dea": -0.404798,
            "macd": 0.002273
        }
    },
    {
        "time": "2018-3-12 0:0:0",
        "open": 12.149999618530273,
        "high": 12.170000076293945,
        "low": 11.949999809265137,
        "close": 12.029999732971191,
        "volume": 126870128,
        "amount": 1526643456,
        "ma": {
            "5": 12.042,
            "10": 12.116,
            "20": 12.3795,
            "60": 13.213332,
            "120": 12.668751
        },
        "boll": {
            "mid": 12.3795,
            "upper": 13.834499,
            "lower": 10.924501
        },
        "ema": {
            "12": 12.204101,
            "50": 12.859857
        },
        "sma": {
            "5": 12.129091,
            "10": 12.411409,
            "20": 12.789846
        },
        "sar": {
            "BB": 11.821377
        },
        "kdj": {
            "k": 30.306152,
            "d": 29.401285,
            "j": 32.115887
        },
        "rsi": {
            "1": 43.321941,
            "2": 39.783428,
            "3": 42.664726
        },
        "dma": {
            "dif": -1.114199,
            "ama": -1.119679
        },
        "macd": {
            "dif": -0.384518,
            "dea": -0.400742,
            "macd": 0.032449
        }
    },
    {
        "time": "2018-3-13 0:0:0",
        "open": 12.039999961853027,
        "high": 12.220000267028809,
        "low": 12,
        "close": 12.020000457763672,
        "volume": 108226736,
        "amount": 1309543424,
        "ma": {
            "5": 12.076,
            "10": 12.056,
            "20": 12.2535,
            "60": 13.195665,
            "120": 12.673251
        },
        "boll": {
            "mid": 12.2535,
            "upper": 13.294735,
            "lower": 11.212265
        },
        "ema": {
            "12": 12.177316,
            "50": 12.827312
        },
        "sma": {
            "5": 12.109273,
            "10": 12.373268,
            "20": 12.751854
        },
        "sar": {
            "BB": 11.851666
        },
        "kdj": {
            "k": 35.408749,
            "d": 31.403772,
            "j": 43.418697
        },
        "rsi": {
            "1": 39.66098,
            "2": 38.677273,
            "3": 42.174824
        },
        "dma": {
            "dif": -1.1444,
            "ama": -1.136859
        },
        "macd": {
            "dif": -0.369923,
            "dea": -0.394578,
            "macd": 0.049311
        }
    },
    {
        "time": "2018-3-14 0:0:0",
        "open": 11.979999542236328,
        "high": 12,
        "low": 11.829999923706055,
        "close": 11.920000076293945,
        "volume": 63559412,
        "amount": 757090688,
        "ma": {
            "5": 12.059999,
            "10": 12.030001,
            "20": 12.1545,
            "60": 13.171,
            "120": 12.678585
        },
        "boll": {
            "mid": 12.1545,
            "upper": 12.796537,
            "lower": 11.512463
        },
        "ema": {
            "12": 12.153113,
            "50": 12.795653
        },
        "sma": {
            "5": 12.091418,
            "10": 12.337941,
            "20": 12.715261
        },
        "sar": {
            "BB": 11.889867
        },
        "kdj": {
            "k": 38.225723,
            "d": 33.677753,
            "j": 47.321663
        },
        "rsi": {
            "1": 39.001854,
            "2": 38.482746,
            "3": 42.090775
        },
        "dma": {
            "dif": -1.145799,
            "ama": -1.139419
        },
        "macd": {
            "dif": -0.355071,
            "dea": -0.386677,
            "macd": 0.063212
        }
    },
    {
        "time": "2018-3-15 0:0:0",
        "open": 11.789999961853027,
        "high": 11.850000381469727,
        "low": 11.65999984741211,
        "close": 11.710000038146973,
        "volume": 115569472,
        "amount": 1356878592,
        "ma": {
            "5": 12.033999,
            "10": 12.017,
            "20": 12.1045,
            "60": 13.152666,
            "120": 12.681751
        },
        "boll": {
            "mid": 12.1045,
            "upper": 12.642947,
            "lower": 11.566052
        },
        "ema": {
            "12": 12.117249,
            "50": 12.761314
        },
        "sma": {
            "5": 12.057135,
            "10": 12.296147,
            "20": 12.675498
        },
        "sar": {
            "BB": 12.34
        },
        "kdj": {
            "k": 34.255726,
            "d": 33.870411,
            "j": 35.02636
        },
        "rsi": {
            "1": 32.516636,
            "2": 36.480968,
            "3": 41.233261
        },
        "dma": {
            "dif": -1.123999,
            "ama": -1.133039
        },
        "macd": {
            "dif": -0.347365,
            "dea": -0.378815,
            "macd": 0.062898
        }
    },
    {
        "time": "2018-3-16 0:0:0",
        "open": 11.720000267028809,
        "high": 11.850000381469727,
        "low": 11.640000343322754,
        "close": 11.640000343322754,
        "volume": 96298336,
        "amount": 1130784128,
        "ma": {
            "5": 11.954,
            "10": 11.984,
            "20": 12.063001,
            "60": 13.129,
            "120": 12.684084
        },
        "boll": {
            "mid": 12.063001,
            "upper": 12.587797,
            "lower": 11.538204
        },
        "ema": {
            "12": 12.054596,
            "50": 12.720086
        },
        "sma": {
            "5": 11.987707,
            "10": 12.237533,
            "20": 12.627223
        },
        "sar": {
            "BB": 12.2992
        },
        "kdj": {
            "k": 25.288139,
            "d": 31.009653,
            "j": 13.845112
        },
        "rsi": {
            "1": 22.914797,
            "2": 32.596542,
            "3": 39.471146
        },
        "dma": {
            "dif": -1.1254,
            "ama": -1.123979
        },
        "macd": {
            "dif": -0.354121,
            "dea": -0.373876,
            "macd": 0.039509
        }
    },
    {
        "time": "2018-3-19 0:0:0",
        "open": 11.65999984741211,
        "high": 11.84000015258789,
        "low": 11.609999656677246,
        "close": 11.829999923706055,
        "volume": 80853872,
        "amount": 947664768,
        "ma": {
            "5": 11.864,
            "10": 11.952999,
            "20": 12.0605,
            "60": 13.106334,
            "120": 12.686751
        },
        "boll": {
            "mid": 12.0605,
            "upper": 12.59319,
            "lower": 11.52781
        },
        "ema": {
            "12": 11.990812,
            "50": 12.67773
        },
        "sma": {
            "5": 11.918165,
            "10": 12.177779,
            "20": 12.577862
        },
        "sar": {
            "BB": 12.222496
        },
        "kdj": {
            "k": 16.858759,
            "d": 26.292688,
            "j": -2.009098
        },
        "rsi": {
            "1": 20.494125,
            "2": 31.381475,
            "3": 38.893024
        },
        "dma": {
            "dif": -1.125,
            "ama": -1.119579
        },
        "macd": {
            "dif": -0.360963,
            "dea": -0.371293,
            "macd": 0.020661
        }
    },
    {
        "time": "2018-3-20 0:0:0",
        "open": 11.739999771118164,
        "high": 11.880000114440918,
        "low": 11.720000267028809,
        "close": 11.819999694824219,
        "volume": 77615000,
        "amount": 916858496,
        "ma": {
            "5": 11.824,
            "10": 11.95,
            "20": 12.066,
            "60": 13.091501,
            "120": 12.691253
        },
        "boll": {
            "mid": 12.066,
            "upper": 12.585995,
            "lower": 11.546005
        },
        "ema": {
            "12": 11.966072,
            "50": 12.644485
        },
        "sma": {
            "5": 11.900533,
            "10": 12.143002,
            "20": 12.540468
        },
        "sar": {
            "BB": 12.129296
        },
        "kdj": {
            "k": 21.284842,
            "d": 24.623405,
            "j": 14.607712
        },
        "rsi": {
            "1": 40.847309,
            "2": 38.202419,
            "3": 41.327
        },
        "dma": {
            "dif": -1.0986,
            "ama": -1.115659
        },
        "macd": {
            "dif": -0.347054,
            "dea": -0.366445,
            "macd": 0.038784
        }
    },
    {
        "time": "2018-3-21 0:0:0",
        "open": 11.949999809265137,
        "high": 12.119999885559082,
        "low": 11.850000381469727,
        "close": 11.899999618530273,
        "volume": 144510944,
        "amount": 1736437376,
        "ma": {
            "5": 11.783999,
            "10": 11.922,
            "20": 12.06,
            "60": 13.076001,
            "120": 12.696002
        },
        "boll": {
            "mid": 12.06,
            "upper": 12.588778,
            "lower": 11.531223
        },
        "ema": {
            "12": 11.943599,
            "50": 12.612153
        },
        "sma": {
            "5": 11.884426,
            "10": 12.110702,
            "20": 12.504445
        },
        "sar": {
            "BB": 12.046208
        },
        "kdj": {
            "k": 25.665293,
            "d": 24.970701,
            "j": 27.054478
        },
        "rsi": {
            "1": 40.19738,
            "2": 37.985619,
            "3": 41.236786
        },
        "dma": {
            "dif": -1.089001,
            "ama": -1.113679
        },
        "macd": {
            "dif": -0.332999,
            "dea": -0.359756,
            "macd": 0.053514
        }
    },
    {
        "time": "2018-3-22 0:0:0",
        "open": 11.899999618530273,
        "high": 11.970000267028809,
        "low": 11.619999885559082,
        "close": 11.65999984741211,
        "volume": 98427840,
        "amount": 1155741056,
        "ma": {
            "5": 11.780001,
            "10": 11.907,
            "20": 12.055,
            "60": 13.053,
            "120": 12.702419
        },
        "boll": {
            "mid": 12.055,
            "upper": 12.588076,
            "lower": 11.521925
        },
        "ema": {
            "12": 11.936892,
            "50": 12.584225
        },
        "sma": {
            "5": 11.887541,
            "10": 12.089632,
            "20": 12.474222
        },
        "sar": {
            "BB": 11.61
        },
        "kdj": {
            "k": 32.957172,
            "d": 27.632858,
            "j": 43.605804
        },
        "rsi": {
            "1": 48.121555,
            "2": 40.91209,
            "3": 42.288372
        },
        "dma": {
            "dif": -1.075401,
            "ama": -1.1133
        },
        "macd": {
            "dif": -0.31181,
            "dea": -0.350167,
            "macd": 0.076715
        }
    },
    {
        "time": "2018-3-23 0:0:0",
        "open": 11.25,
        "high": 11.350000381469727,
        "low": 10.920000076293945,
        "close": 11.34000015258789,
        "volume": 182569088,
        "amount": 2037734400,
        "ma": {
            "5": 11.77,
            "10": 11.862,
            "20": 12.015001,
            "60": 13.026334,
            "120": 12.705503
        },
        "boll": {
            "mid": 12.015001,
            "upper": 12.540111,
            "lower": 11.489892
        },
        "ema": {
            "12": 11.894293,
            "50": 12.547981
        },
        "sma": {
            "5": 11.842032,
            "10": 12.046669,
            "20": 12.433512
        },
        "sar": {
            "BB": 12.22
        },
        "kdj": {
            "k": 24.703697,
            "d": 26.656471,
            "j": 20.798149
        },
        "rsi": {
            "1": 32.580173,
            "2": 35.438889,
            "3": 40.045052
        },
        "dma": {
            "dif": -1.088602,
            "ama": -1.11304
        },
        "macd": {
            "dif": -0.310802,
            "dea": -0.342294,
            "macd": 0.062984
        }
    },
    {
        "time": "2018-3-26 0:0:0",
        "open": 11.149999618530273,
        "high": 11.199999809265137,
        "low": 10.859999656677246,
        "close": 10.930000305175781,
        "volume": 138359856,
        "amount": 1519435008,
        "ma": {
            "5": 11.71,
            "10": 11.787,
            "20": 11.9515,
            "60": 12.989668,
            "120": 12.704501
        },
        "boll": {
            "mid": 11.9515,
            "upper": 12.480976,
            "lower": 11.422024
        },
        "ema": {
            "12": 11.809017,
            "50": 12.500609
        },
        "sma": {
            "5": 11.741626,
            "10": 11.976003,
            "20": 12.378836
        },
        "sar": {
            "BB": 12.172
        },
        "kdj": {
            "k": 27.238363,
            "d": 26.850435,
            "j": 28.014217
        },
        "rsi": {
            "1": 21.480429,
            "2": 29.666191,
            "3": 37.292622
        },
        "dma": {
            "dif": -1.124403,
            "ama": -1.11406
        },
        "macd": {
            "dif": -0.331996,
            "dea": -0.340234,
            "macd": 0.016476
        }
    },
    {
        "time": "2018-3-27 0:0:0",
        "open": 11.100000381469727,
        "high": 11.170000076293945,
        "low": 10.859999656677246,
        "close": 10.9399995803833,
        "volume": 110393360,
        "amount": 1213989888,
        "ma": {
            "5": 11.53,
            "10": 11.677,
            "20": 11.866499,
            "60": 12.946501,
            "120": 12.700253
        },
        "boll": {
            "mid": 11.866499,
            "upper": 12.476989,
            "lower": 11.256009
        },
        "ema": {
            "12": 11.673783,
            "50": 12.439016
        },
        "sma": {
            "5": 11.579301,
            "10": 11.871403,
            "20": 12.306394
        },
        "sar": {
            "BB": 12.02176
        },
        "kdj": {
            "k": 20.010778,
            "d": 24.570549,
            "j": 10.891235
        },
        "rsi": {
            "1": 14.096514,
            "2": 24.164471,
            "3": 34.154083
        },
        "dma": {
            "dif": -1.193802,
            "ama": -1.119001
        },
        "macd": {
            "dif": -0.377525,
            "dea": -0.347692,
            "macd": -0.059666
        }
    },
    {
        "time": "2018-3-28 0:0:0",
        "open": 10.850000381469727,
        "high": 11.140000343322754,
        "low": 10.789999961853027,
        "close": 10.890000343322754,
        "volume": 109902336,
        "amount": 1201023488,
        "ma": {
            "5": 11.354,
            "10": 11.568999,
            "20": 11.7995,
            "60": 12.908001,
            "120": 12.697335
        },
        "boll": {
            "mid": 11.7995,
            "upper": 12.505471,
            "lower": 11.093528
        },
        "ema": {
            "12": 11.560894,
            "50": 12.380232
        },
        "sma": {
            "5": 11.451441,
            "10": 11.778262,
            "20": 12.238073
        },
        "sar": {
            "BB": 11.882349
        },
        "kdj": {
            "k": 15.45692,
            "d": 21.532671,
            "j": 3.305416
        },
        "rsi": {
            "1": 14.952119,
            "2": 24.536818,
            "3": 34.294811
        },
        "dma": {
            "dif": -1.259003,
            "ama": -1.130321
        },
        "macd": {
            "dif": -0.408095,
            "dea": -0.359773,
            "macd": -0.096645
        }
    },
    {
        "time": "2018-3-29 0:0:0",
        "open": 10.920000076293945,
        "high": 11.170000076293945,
        "low": 10.550000190734863,
        "close": 11.050000190734863,
        "volume": 133060240,
        "amount": 1445281792,
        "ma": {
            "5": 11.151999,
            "10": 11.466,
            "20": 11.7415,
            "60": 12.861834,
            "120": 12.696001
        },
        "boll": {
            "mid": 11.7415,
            "upper": 12.544737,
            "lower": 10.938263
        },
        "ema": {
            "12": 11.45768,
            "50": 12.321792
        },
        "sma": {
            "5": 11.339152,
            "10": 11.689436,
            "20": 12.17067
        },
        "sar": {
            "BB": 11.718773
        },
        "kdj": {
            "k": 12.810889,
            "d": 18.62541,
            "j": 1.181847
        },
        "rsi": {
            "1": 14.108915,
            "2": 23.896793,
            "3": 33.916599
        },
        "dma": {
            "dif": -1.310402,
            "ama": -1.148961
        },
        "macd": {
            "dif": -0.431384,
            "dea": -0.374095,
            "macd": -0.114578
        }
    },
    {
        "time": "2018-3-30 0:0:0",
        "open": 11.039999961853027,
        "high": 11.050000190734863,
        "low": 10.880000114440918,
        "close": 10.899999618530273,
        "volume": 75217368,
        "amount": 823438208,
        "ma": {
            "5": 11.03,
            "10": 11.400001,
            "20": 11.691999,
            "60": 12.8245,
            "120": 12.697002
        },
        "boll": {
            "mid": 11.691999,
            "upper": 12.538626,
            "lower": 10.845373
        },
        "ema": {
            "12": 11.394959,
            "50": 12.271917
        },
        "sma": {
            "5": 11.281322,
            "10": 11.625493,
            "20": 12.114636
        },
        "sar": {
            "BB": 11.533018
        },
        "kdj": {
            "k": 19.156305,
            "d": 18.802376,
            "j": 19.864166
        },
        "rsi": {
            "1": 29.398071,
            "2": 30.248302,
            "3": 36.263695
        },
        "dma": {
            "dif": -1.3294,
            "ama": -1.169361
        },
        "macd": {
            "dif": -0.431952,
            "dea": -0.385666,
            "macd": -0.09257
        }
    },
    {
        "time": "2018-4-2 0:0:0",
        "open": 10.869999885559082,
        "high": 10.989999771118164,
        "low": 10.699999809265137,
        "close": 10.710000038146973,
        "volume": 110931640,
        "amount": 1200912000,
        "ma": {
            "5": 10.941999,
            "10": 11.326,
            "20": 11.639499,
            "60": 12.786,
            "120": 12.697169
        },
        "boll": {
            "mid": 11.639499,
            "upper": 12.54682,
            "lower": 10.732178
        },
        "ema": {
            "12": 11.318811,
            "50": 12.218117
        },
        "sma": {
            "5": 11.205057,
            "10": 11.552944,
            "20": 12.053904
        },
        "sar": {
            "BB": 11.336414
        },
        "kdj": {
            "k": 20.201857,
            "d": 19.268869,
            "j": 22.067829
        },
        "rsi": {
            "1": 24.493126,
            "2": 27.869467,
            "3": 35.046013
        },
        "dma": {
            "dif": -1.3504,
            "ama": -1.191901
        },
        "macd": {
            "dif": -0.43944,
            "dea": -0.396421,
            "macd": -0.086037
        }
    },
    {
        "time": "2018-4-3 0:0:0",
        "open": 10.600000381469727,
        "high": 10.670000076293945,
        "low": 10.510000228881836,
        "close": 10.5600004196167,
        "volume": 89074568,
        "amount": 942237824,
        "ma": {
            "5": 10.898,
            "10": 11.214,
            "20": 11.582,
            "60": 12.742834,
            "120": 12.693835
        },
        "boll": {
            "mid": 11.582,
            "upper": 12.572393,
            "lower": 10.591606
        },
        "ema": {
            "12": 11.225148,
            "50": 12.158975
        },
        "sma": {
            "5": 11.106046,
            "10": 11.46865,
            "20": 11.986709
        },
        "sar": {
            "BB": 11.245131
        },
        "kdj": {
            "k": 16.864929,
            "d": 18.467556,
            "j": 13.659676
        },
        "rsi": {
            "1": 19.538168,
            "2": 25.137733,
            "3": 33.556702
        },
        "dma": {
            "dif": -1.392601,
            "ama": -1.221301
        },
        "macd": {
            "dif": -0.455455,
            "dea": -0.408228,
            "macd": -0.094454
        }
    },
    {
        "time": "2018-4-4 0:0:0",
        "open": 10.680000305175781,
        "high": 11.010000228881836,
        "low": 10.600000381469727,
        "close": 10.869999885559082,
        "volume": 160248880,
        "amount": 1737258752,
        "ma": {
            "5": 10.822001,
            "10": 11.088,
            "20": 11.504999,
            "60": 12.690502,
            "120": 12.687669
        },
        "boll": {
            "mid": 11.504999,
            "upper": 12.56302,
            "lower": 10.446979
        },
        "ema": {
            "12": 11.122818,
            "50": 12.09627
        },
        "sma": {
            "5": 10.996837,
            "10": 11.377785,
            "20": 11.915373
        },
        "sar": {
            "BB": 11.136106
        },
        "kdj": {
            "k": 12.384843,
            "d": 16.439985,
            "j": 4.274559
        },
        "rsi": {
            "1": 16.395859,
            "2": 23.180855,
            "3": 32.42168
        },
        "dma": {
            "dif": -1.4458,
            "ama": -1.256981
        },
        "macd": {
            "dif": -0.474777,
            "dea": -0.421538,
            "macd": -0.106479
        }
    },
    {
        "time": "2018-4-9 0:0:0",
        "open": 10.800000190734863,
        "high": 11.100000381469727,
        "low": 10.729999542236328,
        "close": 11.020000457763672,
        "volume": 107479576,
        "amount": 1180084352,
        "ma": {
            "5": 10.818,
            "10": 10.985,
            "20": 11.446,
            "60": 12.649502,
            "120": 12.682668
        },
        "boll": {
            "mid": 11.446,
            "upper": 12.507648,
            "lower": 10.384352
        },
        "ema": {
            "12": 11.083923,
            "50": 12.048181
        },
        "sma": {
            "5": 10.971469,
            "10": 11.327006,
            "20": 11.863104
        },
        "sar": {
            "BB": 11.010884
        },
        "kdj": {
            "k": 22.542259,
            "d": 18.474077,
            "j": 30.678623
        },
        "rsi": {
            "1": 40.233952,
            "2": 34.65028,
            "3": 37.015873
        },
        "dma": {
            "dif": -1.481601,
            "ama": -1.297601
        },
        "macd": {
            "dif": -0.459776,
            "dea": -0.429185,
            "macd": -0.061181
        }
    },
    {
        "time": "2018-4-10 0:0:0",
        "open": 11.020000457763672,
        "high": 11.460000038146973,
        "low": 10.970000267028809,
        "close": 11.420000076293945,
        "volume": 139095072,
        "amount": 1562265088,
        "ma": {
            "5": 10.812,
            "10": 10.921,
            "20": 11.3915,
            "60": 12.612336,
            "120": 12.678419
        },
        "boll": {
            "mid": 11.3915,
            "upper": 12.421079,
            "lower": 10.36192
        },
        "ema": {
            "12": 11.074089,
            "50": 12.00786
        },
        "sma": {
            "5": 10.981175,
            "10": 11.296306,
            "20": 11.820949
        },
        "sar": {
            "BB": 10.51
        },
        "kdj": {
            "k": 39.665882,
            "d": 25.538012,
            "j": 67.921631
        },
        "rsi": {
            "1": 48.723347,
            "2": 39.424374,
            "3": 39.106087
        },
        "dma": {
            "dif": -1.471601,
            "ama": -1.335901
        },
        "macd": {
            "dif": -0.430818,
            "dea": -0.429512,
            "macd": -0.002612
        }
    },
    {
        "time": "2018-4-11 0:0:0",
        "open": 11.390000343322754,
        "high": 11.920000076293945,
        "low": 11.380000114440918,
        "close": 11.829999923706055,
        "volume": 209597040,
        "amount": 2458981888,
        "ma": {
            "5": 10.916,
            "10": 10.928999,
            "20": 11.358,
            "60": 12.581003,
            "120": 12.677335
        },
        "boll": {
            "mid": 11.358,
            "upper": 12.334091,
            "lower": 10.381908
        },
        "ema": {
            "12": 11.127306,
            "50": 11.984807
        },
        "sma": {
            "5": 11.068941,
            "10": 11.308675,
            "20": 11.800901
        },
        "sar": {
            "BB": 10.5572
        },
        "kdj": {
            "k": 58.373749,
            "d": 36.483257,
            "j": 102.154732
        },
        "rsi": {
            "1": 64.747116,
            "2": 50.041599,
            "3": 44.253914
        },
        "dma": {
            "dif": -1.396001,
            "ama": -1.363061
        },
        "macd": {
            "dif": -0.371311,
            "dea": -0.417872,
            "macd": 0.093121
        }
    },
    {
        "time": "2018-4-12 0:0:0",
        "open": 11.800000190734863,
        "high": 11.829999923706055,
        "low": 11.420000076293945,
        "close": 11.520000457763672,
        "volume": 117312816,
        "amount": 1364675840,
        "ma": {
            "5": 11.140001,
            "10": 11.019,
            "20": 11.348001,
            "60": 12.562169,
            "120": 12.681251
        },
        "boll": {
            "mid": 11.348001,
            "upper": 12.29887,
            "lower": 10.397131
        },
        "ema": {
            "12": 11.235413,
            "50": 11.978736
        },
        "sma": {
            "5": 11.221153,
            "10": 11.360807,
            "20": 11.802357
        },
        "sar": {
            "BB": 10.665536
        },
        "kdj": {
            "k": 70.121498,
            "d": 47.696003,
            "j": 114.972496
        },
        "rsi": {
            "1": 74.535088,
            "2": 58.228279,
            "3": 48.876431
        },
        "dma": {
            "dif": -1.2538,
            "ama": -1.369061
        },
        "macd": {
            "dif": -0.287751,
            "dea": -0.391848,
            "macd": 0.208193
        }
    },
    {
        "time": "2018-4-13 0:0:0",
        "open": 11.640000343322754,
        "high": 11.789999961853027,
        "low": 11.449999809265137,
        "close": 11.569999694824219,
        "volume": 130025600,
        "amount": 1516155520,
        "ma": {
            "5": 11.332,
            "10": 11.077001,
            "20": 11.323,
            "60": 12.536169,
            "120": 12.680667
        },
        "boll": {
            "mid": 11.323,
            "upper": 12.224479,
            "lower": 10.421521
        },
        "ema": {
            "12": 11.279196,
            "50": 11.960746
        },
        "sma": {
            "5": 11.280923,
            "10": 11.376727,
            "20": 11.788239
        },
        "sar": {
            "BB": 10.816072
        },
        "kdj": {
            "k": 70.624741,
            "d": 55.338917,
            "j": 101.196388
        },
        "rsi": {
            "1": 59.536789,
            "2": 51.294971,
            "3": 45.875175
        },
        "dma": {
            "dif": -1.133201,
            "ama": -1.356481
        },
        "macd": {
            "dif": -0.243734,
            "dea": -0.362225,
            "macd": 0.236981
        }
    },
    {
        "time": "2018-4-16 0:0:0",
        "open": 11.470000267028809,
        "high": 11.470000267028809,
        "low": 11.029999732971191,
        "close": 11.100000381469727,
        "volume": 142707280,
        "amount": 1593706112,
        "ma": {
            "5": 11.472,
            "10": 11.145,
            "20": 11.305501,
            "60": 12.504502,
            "120": 12.681167
        },
        "boll": {
            "mid": 11.305501,
            "upper": 12.171028,
            "lower": 10.439974
        },
        "ema": {
            "12": 11.323935,
            "50": 11.945423
        },
        "sma": {
            "5": 11.338738,
            "10": 11.396054,
            "20": 11.777327
        },
        "sar": {
            "BB": 10.937743
        },
        "kdj": {
            "k": 72.14225,
            "d": 60.940029,
            "j": 94.5467
        },
        "rsi": {
            "1": 61.053604,
            "2": 52.294434,
            "3": 46.428806
        },
        "dma": {
            "dif": -1.0038,
            "ama": -1.32582
        },
        "macd": {
            "dif": -0.202482,
            "dea": -0.330276,
            "macd": 0.255588
        }
    },
    {
        "time": "2018-4-17 0:0:0",
        "open": 11.119999885559082,
        "high": 11.449999809265137,
        "low": 11.109999656677246,
        "close": 11.210000038146973,
        "volume": 130189168,
        "amount": 1468159360,
        "ma": {
            "5": 11.488001,
            "10": 11.15,
            "20": 11.275002,
            "60": 12.466168,
            "120": 12.67625
        },
        "boll": {
            "mid": 11.275002,
            "upper": 12.123229,
            "lower": 10.426774
        },
        "ema": {
            "12": 11.289483,
            "50": 11.912269
        },
        "sma": {
            "5": 11.290991,
            "10": 11.366449,
            "20": 11.743461
        },
        "sar": {
            "BB": 11.92
        },
        "kdj": {
            "k": 62.042828,
            "d": 61.307629,
            "j": 63.513222
        },
        "rsi": {
            "1": 42.909355,
            "2": 43.20306,
            "3": 42.195251
        },
        "dma": {
            "dif": -0.936801,
            "ama": -1.286561
        },
        "macd": {
            "dif": -0.205347,
            "dea": -0.305291,
            "macd": 0.199887
        }
    },
    {
        "time": "2018-4-18 0:0:0",
        "open": 11.449999809265137,
        "high": 11.609999656677246,
        "low": 11.279999732971191,
        "close": 11.5,
        "volume": 147584528,
        "amount": 1692722816,
        "ma": {
            "5": 11.445999,
            "10": 11.181001,
            "20": 11.253501,
            "60": 12.427168,
            "120": 12.672749
        },
        "boll": {
            "mid": 11.253501,
            "upper": 12.084415,
            "lower": 10.422586
        },
        "ema": {
            "12": 11.277255,
            "50": 11.884729
        },
        "sma": {
            "5": 11.274793,
            "10": 11.350804,
            "20": 11.716787
        },
        "sar": {
            "BB": 11.8844
        },
        "kdj": {
            "k": 57.910343,
            "d": 60.175201,
            "j": 53.38063
        },
        "rsi": {
            "1": 47.307335,
            "2": 45.616962,
            "3": 43.454449
        },
        "dma": {
            "dif": -0.848999,
            "ama": -1.23642
        },
        "macd": {
            "dif": -0.196477,
            "dea": -0.283528,
            "macd": 0.174102
        }
    },
    {
        "time": "2018-4-19 0:0:0",
        "open": 11.520000457763672,
        "high": 11.6899995803833,
        "low": 11.420000076293945,
        "close": 11.470000267028809,
        "volume": 84913184,
        "amount": 979593536,
        "ma": {
            "5": 11.38,
            "10": 11.26,
            "20": 11.237,
            "60": 12.382168,
            "120": 12.672915
        },
        "boll": {
            "mid": 11.237,
            "upper": 12.032082,
            "lower": 10.441919
        },
        "ema": {
            "12": 11.311523,
            "50": 11.869641
        },
        "sma": {
            "5": 11.319834,
            "10": 11.365725,
            "20": 11.705948
        },
        "sar": {
            "BB": 11.853424
        },
        "kdj": {
            "k": 61.334167,
            "d": 60.561523,
            "j": 62.879456
        },
        "rsi": {
            "1": 57.632725,
            "2": 51.540356,
            "3": 46.651447
        },
        "dma": {
            "dif": -0.725199,
            "ama": -1.16968
        },
        "macd": {
            "dif": -0.164154,
            "dea": -0.259653,
            "macd": 0.190998
        }
    },
    {
        "time": "2018-4-20 0:0:0",
        "open": 11.510000228881836,
        "high": 11.579999923706055,
        "low": 11.199999809265137,
        "close": 11.350000381469727,
        "volume": 95869064,
        "amount": 1090801280,
        "ma": {
            "5": 11.370001,
            "10": 11.351,
            "20": 11.219501,
            "60": 12.336667,
            "120": 12.675248
        },
        "boll": {
            "mid": 11.219501,
            "upper": 11.97491,
            "lower": 10.464093
        },
        "ema": {
            "12": 11.335904,
            "50": 11.85397
        },
        "sma": {
            "5": 11.349867,
            "10": 11.376152,
            "20": 11.694151
        },
        "sar": {
            "BB": 11.830487
        },
        "kdj": {
            "k": 61.617748,
            "d": 60.913601,
            "j": 63.026039
        },
        "rsi": {
            "1": 56.264091,
            "2": 50.91452,
            "3": 46.368454
        },
        "dma": {
            "dif": -0.590599,
            "ama": -1.08416
        },
        "macd": {
            "dif": -0.139353,
            "dea": -0.235593,
            "macd": 0.19248
        }
    },
    {
        "time": "2018-4-23 0:0:0",
        "open": 11.300000190734863,
        "high": 11.609999656677246,
        "low": 11.260000228881836,
        "close": 11.569999694824219,
        "volume": 107028936,
        "amount": 1228544000,
        "ma": {
            "5": 11.326001,
            "10": 11.399,
            "20": 11.192,
            "60": 12.288667,
            "120": 12.674915
        },
        "boll": {
            "mid": 11.192,
            "upper": 11.880247,
            "lower": 10.503754
        },
        "ema": {
            "12": 11.338073,
            "50": 11.834206
        },
        "sma": {
            "5": 11.349894,
            "10": 11.373537,
            "20": 11.676944
        },
        "sar": {
            "BB": 11.797648
        },
        "kdj": {
            "k": 54.411839,
            "d": 58.746349,
            "j": 45.742821
        },
        "rsi": {
            "1": 50.506855,
            "2": 48.35252,
            "3": 45.223434
        },
        "dma": {
            "dif": -0.488599,
            "ama": -0.98486
        },
        "macd": {
            "dif": -0.127906,
            "dea": -0.214056,
            "macd": 0.172299
        }
    },
    {
        "time": "2018-4-24 0:0:0",
        "open": 11.630000114440918,
        "high": 11.9399995803833,
        "low": 11.579999923706055,
        "close": 11.859999656677246,
        "volume": 146109888,
        "amount": 1725152384,
        "ma": {
            "5": 11.42,
            "10": 11.454,
            "20": 11.1875,
            "60": 12.236166,
            "120": 12.677415
        },
        "boll": {
            "mid": 11.1875,
            "upper": 11.863997,
            "lower": 10.511003
        },
        "ema": {
            "12": 11.373755,
            "50": 11.823845
        },
        "sma": {
            "5": 11.393915,
            "10": 11.393183,
            "20": 11.671597
        },
        "sar": {
            "BB": 11.749837
        },
        "kdj": {
            "k": 56.499268,
            "d": 57.997326,
            "j": 53.503151
        },
        "rsi": {
            "1": 59.601231,
            "2": 53.075016,
            "3": 47.694389
        },
        "dma": {
            "dif": -0.384398,
            "ama": -0.87614
        },
        "macd": {
            "dif": -0.09993,
            "dea": -0.19123,
            "macd": 0.182601
        }
    },
    {
        "time": "2018-4-25 0:0:0",
        "open": 11.760000228881836,
        "high": 11.8100004196167,
        "low": 11.630000114440918,
        "close": 11.680000305175781,
        "volume": 73028648,
        "amount": 854713280,
        "ma": {
            "5": 11.55,
            "10": 11.497999,
            "20": 11.2135,
            "60": 12.187166,
            "120": 12.683081
        },
        "boll": {
            "mid": 11.2135,
            "upper": 11.951814,
            "lower": 10.475186
        },
        "ema": {
            "12": 11.448561,
            "50": 11.825263
        },
        "sma": {
            "5": 11.487132,
            "10": 11.439864,
            "20": 11.681017
        },
        "sar": {
            "BB": 11.03
        },
        "kdj": {
            "k": 68.069115,
            "d": 61.354588,
            "j": 81.498161
        },
        "rsi": {
            "1": 68.699142,
            "2": 58.528095,
            "3": 50.750256
        },
        "dma": {
            "dif": -0.296599,
            "ama": -0.766199
        },
        "macd": {
            "dif": -0.05374,
            "dea": -0.163732,
            "macd": 0.219985
        }
    },
    {
        "time": "2018-4-26 0:0:0",
        "open": 11.65999984741211,
        "high": 11.6899995803833,
        "low": 11.3100004196167,
        "close": 11.420000076293945,
        "volume": 87423592,
        "amount": 1002483136,
        "ma": {
            "5": 11.42,
            "10": 11.4,
            "20": 11.209501,
            "60": 12.127333,
            "120": 12.677165
        },
        "boll": {
            "mid": 11.209501,
            "upper": 11.95502,
            "lower": 10.463983
        },
        "ema": {
            "12": 11.356475,
            "50": 11.787017
        },
        "sma": {
            "5": 11.359706,
            "10": 11.380877,
            "20": 11.639466
        },
        "sar": {
            "BB": 11.94
        },
        "kdj": {
            "k": 50.977383,
            "d": 57.895519,
            "j": 37.141106
        },
        "rsi": {
            "1": 35.390194,
            "2": 40.601685,
            "3": 41.86208
        },
        "dma": {
            "dif": -0.320599,
            "ama": -0.672879
        },
        "macd": {
            "dif": -0.097507,
            "dea": -0.150487,
            "macd": 0.105961
        }
    },
    {
        "time": "2018-4-27 0:0:0",
        "open": 11.489999771118164,
        "high": 11.510000228881836,
        "low": 10.630000114440918,
        "close": 10.850000381469727,
        "volume": 270979584,
        "amount": 2958464512,
        "ma": {
            "5": 11.302,
            "10": 11.336,
            "20": 11.206501,
            "60": 12.0645,
            "120": 12.671498
        },
        "boll": {
            "mid": 11.206501,
            "upper": 11.957049,
            "lower": 10.455953
        },
        "ema": {
            "12": 11.283171,
            "50": 11.751448
        },
        "sma": {
            "5": 11.263765,
            "10": 11.33079,
            "20": 11.601493
        },
        "sar": {
            "BB": 11.8876
        },
        "kdj": {
            "k": 40.346249,
            "d": 52.045761,
            "j": 16.94722
        },
        "rsi": {
            "1": 36.487793,
            "2": 41.185394,
            "3": 42.175961
        },
        "dma": {
            "dif": -0.322197,
            "ama": -0.591779
        },
        "macd": {
            "dif": -0.128294,
            "dea": -0.146048,
            "macd": 0.035509
        }
    },
    {
        "time": "2018-5-2 0:0:0",
        "open": 10.970000267028809,
        "high": 11.029999732971191,
        "low": 10.800000190734863,
        "close": 10.880000114440918,
        "volume": 119052320,
        "amount": 1295804416,
        "ma": {
            "5": 11.182,
            "10": 11.254,
            "20": 11.199502,
            "60": 11.999666,
            "120": 12.664916
        },
        "boll": {
            "mid": 11.199502,
            "upper": 11.964887,
            "lower": 10.434117
        },
        "ema": {
            "12": 11.201145,
            "50": 11.712175
        },
        "sma": {
            "5": 11.161013,
            "10": 11.272711,
            "20": 11.558918
        },
        "sar": {
            "BB": 11.800592
        },
        "kdj": {
            "k": 31.277069,
            "d": 45.122864,
            "j": 3.58548
        },
        "rsi": {
            "1": 33.526119,
            "2": 39.357029,
            "3": 41.170876
        },
        "dma": {
            "dif": -0.360798,
            "ama": -0.527479
        },
        "macd": {
            "dif": -0.161322,
            "dea": -0.149103,
            "macd": -0.024437
        }
    },
    {
        "time": "2018-5-3 0:0:0",
        "open": 10.859999656677246,
        "high": 10.880000114440918,
        "low": 10.569999694824219,
        "close": 10.75,
        "volume": 128135560,
        "amount": 1372765824,
        "ma": {
            "5": 11.004,
            "10": 11.212,
            "20": 11.181002,
            "60": 11.940999,
            "120": 12.658916
        },
        "boll": {
            "mid": 11.181002,
            "upper": 11.978846,
            "lower": 10.383158
        },
        "ema": {
            "12": 11.120969,
            "50": 11.671698
        },
        "sma": {
            "5": 11.06481,
            "10": 11.21344,
            "20": 11.514972
        },
        "sar": {
            "BB": 11.702145
        },
        "kdj": {
            "k": 23.527794,
            "d": 37.924507,
            "j": -5.265633
        },
        "rsi": {
            "1": 31.855392,
            "2": 38.356789,
            "3": 40.626888
        },
        "dma": {
            "dif": -0.365599,
            "ama": -0.470358
        },
        "macd": {
            "dif": -0.190945,
            "dea": -0.157471,
            "macd": -0.066947
        }
    },
    {
        "time": "2018-5-4 0:0:0",
        "open": 10.729999542236328,
        "high": 10.829999923706055,
        "low": 10.65999984741211,
        "close": 10.680000305175781,
        "volume": 71050952,
        "amount": 761302464,
        "ma": {
            "5": 10.794001,
            "10": 11.171999,
            "20": 11.176501,
            "60": 11.886998,
            "120": 12.652833
        },
        "boll": {
            "mid": 11.176501,
            "upper": 11.981987,
            "lower": 10.371016
        },
        "ema": {
            "12": 11.073128,
            "50": 11.637906
        },
        "sma": {
            "5": 11.013848,
            "10": 11.173096,
            "20": 11.479723
        },
        "sar": {
            "BB": 11.577087
        },
        "kdj": {
            "k": 21.52463,
            "d": 32.457882,
            "j": -0.341873
        },
        "rsi": {
            "1": 38.666946,
            "2": 41.375332,
            "3": 42.109196
        },
        "dma": {
            "dif": -0.388,
            "ama": -0.424259
        },
        "macd": {
            "dif": -0.201608,
            "dea": -0.166299,
            "macd": -0.070618
        }
    },
    {
        "time": "2018-5-7 0:0:0",
        "open": 10.699999809265137,
        "high": 10.829999923706055,
        "low": 10.640000343322754,
        "close": 10.8100004196167,
        "volume": 97430968,
        "amount": 1046743104,
        "ma": {
            "5": 10.826001,
            "10": 11.122999,
            "20": 11.1915,
            "60": 11.841497,
            "120": 12.649667
        },
        "boll": {
            "mid": 11.1915,
            "upper": 11.971281,
            "lower": 10.411718
        },
        "ema": {
            "12": 11.063416,
            "50": 11.613282
        },
        "sma": {
            "5": 11.013079,
            "10": 11.156786,
            "20": 11.456236
        },
        "sar": {
            "BB": 11.464637
        },
        "kdj": {
            "k": 25.055365,
            "d": 29.990377,
            "j": 15.185337
        },
        "rsi": {
            "1": 48.221886,
            "2": 45.827431,
            "3": 44.339993
        },
        "dma": {
            "dif": -0.4228,
            "ama": -0.394019
        },
        "macd": {
            "dif": -0.19171,
            "dea": -0.171381,
            "macd": -0.040657
        }
    },
    {
        "time": "2018-5-8 0:0:0",
        "open": 10.829999923706055,
        "high": 11.149999618530273,
        "low": 10.800000190734863,
        "close": 11.010000228881836,
        "volume": 137330560,
        "amount": 1511546624,
        "ma": {
            "5": 10.844,
            "10": 11.073,
            "20": 11.212,
            "60": 11.796831,
            "120": 12.647082
        },
        "boll": {
            "mid": 11.212,
            "upper": 11.941828,
            "lower": 10.482172
        },
        "ema": {
            "12": 11.049044,
            "50": 11.588056
        },
        "sma": {
            "5": 11.004463,
            "10": 11.138107,
            "20": 11.431925
        },
        "sar": {
            "BB": 11.38488
        },
        "kdj": {
            "k": 26.435951,
            "d": 28.805567,
            "j": 21.69672
        },
        "rsi": {
            "1": 46.483898,
            "2": 45.080482,
            "3": 43.986259
        },
        "dma": {
            "dif": -0.453399,
            "ama": -0.380299
        },
        "macd": {
            "dif": -0.184961,
            "dea": -0.174097,
            "macd": -0.021729
        }
    },
    {
        "time": "2018-5-9 0:0:0",
        "open": 10.979999542236328,
        "high": 11.029999732971191,
        "low": 10.880000114440918,
        "close": 10.970000267028809,
        "volume": 62765612,
        "amount": 687036864,
        "ma": {
            "5": 10.896001,
            "10": 11.039,
            "20": 11.219,
            "60": 11.746165,
            "120": 12.639499
        },
        "boll": {
            "mid": 11.219,
            "upper": 11.937614,
            "lower": 10.500385
        },
        "ema": {
            "12": 11.043037,
            "50": 11.565387
        },
        "sma": {
            "5": 11.005571,
            "10": 11.125297,
            "20": 11.410829
        },
        "sar": {
            "BB": 11.324294
        },
        "kdj": {
            "k": 28.329576,
            "d": 28.646904,
            "j": 27.694923
        },
        "rsi": {
            "1": 48.702503,
            "2": 46.039944,
            "3": 44.448708
        },
        "dma": {
            "dif": -0.4676,
            "ama": -0.378199
        },
        "macd": {
            "dif": -0.174375,
            "dea": -0.174152,
            "macd": -0.000444
        }
    },
    {
        "time": "2018-5-10 0:0:0",
        "open": 11.029999732971191,
        "high": 11.09000015258789,
        "low": 10.90999984741211,
        "close": 11.010000228881836,
        "volume": 55273588,
        "amount": 607350016,
        "ma": {
            "5": 10.962001,
            "10": 10.983001,
            "20": 11.218499,
            "60": 11.695831,
            "120": 12.630166
        },
        "boll": {
            "mid": 11.218499,
            "upper": 11.937771,
            "lower": 10.499228
        },
        "ema": {
            "12": 11.037954,
            "50": 11.543607
        },
        "sma": {
            "5": 11.006457,
            "10": 11.113768,
            "20": 11.390787
        },
        "sar": {
            "BB": 11.274579
        },
        "kdj": {
            "k": 34.489231,
            "d": 30.594345,
            "j": 42.279007
        },
        "rsi": {
            "1": 48.702499,
            "2": 46.039944,
            "3": 44.448708
        },
        "dma": {
            "dif": -0.494599,
            "ama": -0.389219
        },
        "macd": {
            "dif": -0.164094,
            "dea": -0.172141,
            "macd": 0.016094
        }
    },
    {
        "time": "2018-5-11 0:0:0",
        "open": 11.039999961853027,
        "high": 11.130000114440918,
        "low": 10.960000038146973,
        "close": 11.010000228881836,
        "volume": 77236968,
        "amount": 853271168,
        "ma": {
            "5": 11.036,
            "10": 10.915001,
            "20": 11.206499,
            "60": 11.647998,
            "120": 12.620584
        },
        "boll": {
            "mid": 11.206499,
            "upper": 11.919628,
            "lower": 10.49337
        },
        "ema": {
            "12": 11.059808,
            "50": 11.529347
        },
        "sma": {
            "5": 11.041166,
            "10": 11.120391,
            "20": 11.380247
        },
        "sar": {
            "BB": 11.23683
        },
        "kdj": {
            "k": 53.800938,
            "d": 38.329876,
            "j": 84.743065
        },
        "rsi": {
            "1": 59.083633,
            "2": 50.420876,
            "3": 46.492966
        },
        "dma": {
            "dif": -0.533998,
            "ama": -0.412959
        },
        "macd": {
            "dif": -0.140607,
            "dea": -0.165834,
            "macd": 0.050454
        }
    },
    {
        "time": "2018-5-14 0:0:0",
        "open": 11.09000015258789,
        "high": 11.229999542236328,
        "low": 11.029999732971191,
        "close": 11.180000305175781,
        "volume": 103929712,
        "amount": 1158064256,
        "ma": {
            "5": 11.058,
            "10": 10.942001,
            "20": 11.171,
            "60": 11.590832,
            "120": 12.610749
        },
        "boll": {
            "mid": 11.171,
            "upper": 11.821309,
            "lower": 10.52069
        },
        "ema": {
            "12": 11.069068,
            "50": 11.513295
        },
        "sma": {
            "5": 11.056932,
            "10": 11.120352,
            "20": 11.367235
        },
        "sar": {
            "BB": 11.203737
        },
        "kdj": {
            "k": 63.645084,
            "d": 46.76828,
            "j": 97.398697
        },
        "rsi": {
            "1": 54.419315,
            "2": 48.892498,
            "3": 45.871277
        },
        "dma": {
            "dif": -0.476797,
            "ama": -0.428579
        },
        "macd": {
            "dif": -0.12539,
            "dea": -0.157745,
            "macd": 0.06471
        }
    },
    {
        "time": "2018-5-15 0:0:0",
        "open": 11.180000305175781,
        "high": 11.1899995803833,
        "low": 11.020000457763672,
        "close": 11.119999885559082,
        "volume": 66926144,
        "amount": 742590464,
        "ma": {
            "5": 11.044001,
            "10": 10.944001,
            "20": 11.139999,
            "60": 11.539165,
            "120": 12.594083
        },
        "boll": {
            "mid": 11.139999,
            "upper": 11.779245,
            "lower": 10.500753
        },
        "ema": {
            "12": 11.043057,
            "50": 11.489244
        },
        "sma": {
            "5": 11.025546,
            "10": 11.098317,
            "20": 11.343873
        },
        "sar": {
            "BB": 11.16699
        },
        "kdj": {
            "k": 57.119305,
            "d": 50.218624,
            "j": 70.920662
        },
        "rsi": {
            "1": 40.389797,
            "2": 43.605404,
            "3": 43.638699
        },
        "dma": {
            "dif": -0.447199,
            "ama": -0.441079
        },
        "macd": {
            "dif": -0.129589,
            "dea": -0.152114,
            "macd": 0.04505
        }
    },
    {
        "time": "2018-5-16 0:0:0",
        "open": 11.069999694824219,
        "high": 11.069999694824219,
        "low": 10.890000343322754,
        "close": 10.899999618530273,
        "volume": 71436208,
        "amount": 782694656,
        "ma": {
            "5": 11.006,
            "10": 10.951001,
            "20": 11.102499,
            "60": 11.504165,
            "120": 12.576333
        },
        "boll": {
            "mid": 11.102499,
            "upper": 11.723308,
            "lower": 10.48169
        },
        "ema": {
            "12": 11.008741,
            "50": 11.462999
        },
        "sma": {
            "5": 10.984437,
            "10": 11.070486,
            "20": 11.317678
        },
        "sar": {
            "BB": 11.111592
        },
        "kdj": {
            "k": 48.249004,
            "d": 49.562084,
            "j": 45.622841
        },
        "rsi": {
            "1": 36.305565,
            "2": 41.811787,
            "3": 42.847397
        },
        "dma": {
            "dif": -0.415599,
            "ama": -0.446559
        },
        "macd": {
            "dif": -0.137783,
            "dea": -0.149248,
            "macd": 0.022929
        }
    },
    {
        "time": "2018-5-17 0:0:0",
        "open": 10.90999984741211,
        "high": 10.9399995803833,
        "low": 10.779999732971191,
        "close": 10.819999694824219,
        "volume": 58649440,
        "amount": 635675456,
        "ma": {
            "5": 10.995999,
            "10": 10.979001,
            "20": 11.095499,
            "60": 11.477833,
            "120": 12.560165
        },
        "boll": {
            "mid": 11.095499,
            "upper": 11.719544,
            "lower": 10.471454
        },
        "ema": {
            "12": 11.001243,
            "50": 11.443274
        },
        "sma": {
            "5": 10.979549,
            "10": 11.059438,
            "20": 11.299795
        },
        "sar": {
            "BB": 11.045274
        },
        "kdj": {
            "k": 46.350407,
            "d": 48.491528,
            "j": 42.068169
        },
        "rsi": {
            "1": 47.462162,
            "2": 46.048416,
            "3": 44.679214
        },
        "dma": {
            "dif": -0.366,
            "ama": -0.446599
        },
        "macd": {
            "dif": -0.131465,
            "dea": -0.145691,
            "macd": 0.028453
        }
    },
    {
        "time": "2018-5-18 0:0:0",
        "open": 10.8100004196167,
        "high": 10.970000267028809,
        "low": 10.760000228881836,
        "close": 10.960000038146973,
        "volume": 57838476,
        "amount": 628250176,
        "ma": {
            "5": 10.95,
            "10": 10.993,
            "20": 11.0825,
            "60": 11.4655,
            "120": 12.542249
        },
        "boll": {
            "mid": 11.0825,
            "upper": 11.707368,
            "lower": 10.457631
        },
        "ema": {
            "12": 10.993359,
            "50": 11.423929
        },
        "sma": {
            "5": 10.973639,
            "10": 11.048494,
            "20": 11.282305
        },
        "sar": {
            "BB": 10.76
        },
        "kdj": {
            "k": 44.375439,
            "d": 47.119495,
            "j": 38.887321
        },
        "rsi": {
            "1": 46.760109,
            "2": 45.788635,
            "3": 44.572735
        },
        "dma": {
            "dif": -0.332001,
            "ama": -0.440999
        },
        "macd": {
            "dif": -0.125815,
            "dea": -0.141716,
            "macd": 0.031801
        }
    },
    {
        "time": "2018-5-21 0:0:0",
        "open": 11.069999694824219,
        "high": 11.109999656677246,
        "low": 10.930000305175781,
        "close": 10.949999809265137,
        "volume": 76353360,
        "amount": 838750592,
        "ma": {
            "5": 10.898001,
            "10": 10.977999,
            "20": 11.0505,
            "60": 11.451167,
            "120": 12.522915
        },
        "boll": {
            "mid": 11.0505,
            "upper": 11.650391,
            "lower": 10.450609
        },
        "ema": {
            "12": 10.972842,
            "50": 11.401814
        },
        "sma": {
            "5": 10.950912,
            "10": 11.029645,
            "20": 11.261189
        },
        "sar": {
            "BB": 10.774
        },
        "kdj": {
            "k": 36.675793,
            "d": 43.63826,
            "j": 22.750854
        },
        "rsi": {
            "1": 40.319206,
            "2": 43.385574,
            "3": 43.59697
        },
        "dma": {
            "dif": -0.327003,
            "ama": -0.431419
        },
        "macd": {
            "dif": -0.127133,
            "dea": -0.1388,
            "macd": 0.023332
        }
    },
    {
        "time": "2018-5-22 0:0:0",
        "open": 10.949999809265137,
        "high": 10.979999542236328,
        "low": 10.789999961853027,
        "close": 10.859999656677246,
        "volume": 58987184,
        "amount": 639815232,
        "ma": {
            "5": 10.848,
            "10": 10.946,
            "20": 11.0095,
            "60": 11.429667,
            "120": 12.492915
        },
        "boll": {
            "mid": 11.0095,
            "upper": 11.600725,
            "lower": 10.418274
        },
        "ema": {
            "12": 10.923174,
            "50": 11.372332
        },
        "sma": {
            "5": 10.890729,
            "10": 10.991681,
            "20": 11.23063
        },
        "sar": {
            "BB": 11.23
        },
        "kdj": {
            "k": 26.089859,
            "d": 37.788792,
            "j": 2.691994
        },
        "rsi": {
            "1": 29.097023,
            "2": 38.272739,
            "3": 41.390797
        },
        "dma": {
            "dif": -0.330001,
            "ama": -0.41908
        },
        "macd": {
            "dif": -0.143471,
            "dea": -0.139734,
            "macd": -0.007474
        }
    },
    {
        "time": "2018-5-23 0:0:0",
        "open": 10.819999694824219,
        "high": 10.819999694824219,
        "low": 10.619999885559082,
        "close": 10.649999618530273,
        "volume": 99101632,
        "amount": 1058587840,
        "ma": {
            "5": 10.806,
            "10": 10.906,
            "20": 10.972499,
            "60": 11.4065,
            "120": 12.460916
        },
        "boll": {
            "mid": 10.972499,
            "upper": 11.566638,
            "lower": 10.37836
        },
        "ema": {
            "12": 10.874993,
            "50": 11.342437
        },
        "sma": {
            "5": 10.834583,
            "10": 10.953513,
            "20": 11.199598
        },
        "sar": {
            "BB": 11.1812
        },
        "kdj": {
            "k": 18.931688,
            "d": 31.50309,
            "j": -6.211113
        },
        "rsi": {
            "1": 27.356621,
            "2": 37.357937,
            "3": 40.978634
        },
        "dma": {
            "dif": -0.341201,
            "ama": -0.40644
        },
        "macd": {
            "dif": -0.157825,
            "dea": -0.143352,
            "macd": -0.028947
        }
    },
    {
        "time": "2018-5-24 0:0:0",
        "open": 10.65999984741211,
        "high": 10.680000305175781,
        "low": 10.579999923706055,
        "close": 10.609999656677246,
        "volume": 68815200,
        "amount": 730678784,
        "ma": {
            "5": 10.732,
            "10": 10.864,
            "20": 10.9235,
            "60": 11.375335,
            "120": 12.423331
        },
        "boll": {
            "mid": 10.9235,
            "upper": 11.469794,
            "lower": 10.377206
        },
        "ema": {
            "12": 10.831148,
            "50": 11.312929
        },
        "sma": {
            "5": 10.785666,
            "10": 10.917162,
            "20": 11.169119
        },
        "sar": {
            "BB": 11.109056
        },
        "kdj": {
            "k": 14.704459,
            "d": 25.903547,
            "j": -7.693718
        },
        "rsi": {
            "1": 26.408875,
            "2": 36.877163,
            "3": 40.766842
        },
        "dma": {
            "dif": -0.3528,
            "ama": -0.39226
        },
        "macd": {
            "dif": -0.168869,
            "dea": -0.148455,
            "macd": -0.040827
        }
    },
    {
        "time": "2018-5-25 0:0:0",
        "open": 10.609999656677246,
        "high": 10.670000076293945,
        "low": 10.550000190734863,
        "close": 10.59000015258789,
        "volume": 59333568,
        "amount": 629735424,
        "ma": {
            "5": 10.66,
            "10": 10.805,
            "20": 10.860001,
            "60": 11.341668,
            "120": 12.391998
        },
        "boll": {
            "mid": 10.860001,
            "upper": 11.206624,
            "lower": 10.513377
        },
        "ema": {
            "12": 10.794048,
            "50": 11.284579
        },
        "sma": {
            "5": 10.746533,
            "10": 10.884445,
            "20": 11.140162
        },
        "sar": {
            "BB": 11.019608
        },
        "kdj": {
            "k": 14.247417,
            "d": 22.018171,
            "j": -1.29409
        },
        "rsi": {
            "1": 26.408878,
            "2": 36.877163,
            "3": 40.766838
        },
        "dma": {
            "dif": -0.381802,
            "ama": -0.37704
        },
        "macd": {
            "dif": -0.175597,
            "dea": -0.153884,
            "macd": -0.043427
        }
    },
    {
        "time": "2018-5-28 0:0:0",
        "open": 10.579999923706055,
        "high": 10.65999984741211,
        "low": 10.510000228881836,
        "close": 10.59000015258789,
        "volume": 56940092,
        "amount": 602590720,
        "ma": {
            "5": 10.564,
            "10": 10.730999,
            "20": 10.8365,
            "60": 11.304168,
            "120": 12.357165
        },
        "boll": {
            "mid": 10.8365,
            "upper": 11.244278,
            "lower": 10.428722
        },
        "ema": {
            "12": 10.730349,
            "50": 11.249105
        },
        "sma": {
            "5": 10.673227,
            "10": 10.834001,
            "20": 11.102155
        },
        "sar": {
            "BB": 10.917686
        },
        "kdj": {
            "k": 10.814057,
            "d": 18.283466,
            "j": -4.12476
        },
        "rsi": {
            "1": 17.330574,
            "2": 31.768215,
            "3": 38.492294
        },
        "dma": {
            "dif": -0.422802,
            "ama": -0.371641
        },
        "macd": {
            "dif": -0.19562,
            "dea": -0.162231,
            "macd": -0.066777
        }
    },
    {
        "time": "2018-5-29 0:0:0",
        "open": 10.579999923706055,
        "high": 10.630000114440918,
        "low": 10.350000381469727,
        "close": 10.380000114440918,
        "volume": 88949496,
        "amount": 930386944,
        "ma": {
            "5": 10.45,
            "10": 10.649,
            "20": 10.7965,
            "60": 11.267502,
            "120": 12.325083
        },
        "boll": {
            "mid": 10.7965,
            "upper": 11.325316,
            "lower": 10.267684
        },
        "ema": {
            "12": 10.630295,
            "50": 11.203258
        },
        "sma": {
            "5": 10.554583,
            "10": 10.7586,
            "20": 11.051046
        },
        "sar": {
            "BB": 10.80415
        },
        "kdj": {
            "k": 8.15276,
            "d": 14.906564,
            "j": -5.354849
        },
        "rsi": {
            "1": 10.904518,
            "2": 26.127199,
            "3": 35.536667
        },
        "dma": {
            "dif": -0.466002,
            "ama": -0.373521
        },
        "macd": {
            "dif": -0.233009,
            "dea": -0.176387,
            "macd": -0.113245
        }
    },
    {
        "time": "2018-5-30 0:0:0",
        "open": 10.289999961853027,
        "high": 10.289999961853027,
        "low": 10.050000190734863,
        "close": 10.079999923706055,
        "volume": 112444704,
        "amount": 1139918720,
        "ma": {
            "5": 10.364,
            "10": 10.584999,
            "20": 10.768001,
            "60": 11.236335,
            "120": 12.295749
        },
        "boll": {
            "mid": 10.768001,
            "upper": 11.36442,
            "lower": 10.171581
        },
        "ema": {
            "12": 10.561019,
            "50": 11.16313
        },
        "sma": {
            "5": 10.479666,
            "10": 10.70074,
            "20": 11.007494
        },
        "sar": {
            "BB": 10.653319
        },
        "kdj": {
            "k": 10.328114,
            "d": 13.380414,
            "j": 4.223513
        },
        "rsi": {
            "1": 22.412167,
            "2": 30.60787,
            "3": 37.213562
        },
        "dma": {
            "dif": -0.495202,
            "ama": -0.381481
        },
        "macd": {
            "dif": -0.25167,
            "dea": -0.191443,
            "macd": -0.120453
        }
    },
    {
        "time": "2018-5-31 0:0:0",
        "open": 10.109999656677246,
        "high": 10.189998626708984,
        "low": 10.020001411437988,
        "close": 10.180000305175781,
        "volume": 98736040,
        "amount": 999216320,
        "ma": {
            "5": 10.284,
            "10": 10.508,
            "20": 10.7435,
            "60": 11.205503,
            "120": 12.265498
        },
        "boll": {
            "mid": 10.7435,
            "upper": 11.393114,
            "lower": 10.093885
        },
        "ema": {
            "12": 10.503939,
            "50": 11.124969
        },
        "sma": {
            "5": 10.421732,
            "10": 10.649666,
            "20": 10.966619
        },
        "sar": {
            "BB": 10.526656
        },
        "kdj": {
            "k": 12.788101,
            "d": 13.182976,
            "j": 11.998352
        },
        "rsi": {
            "1": 23.59617,
            "2": 31.063927,
            "3": 37.383503
        },
        "dma": {
            "dif": -0.5418,
            "ama": -0.399061
        },
        "macd": {
            "dif": -0.262625,
            "dea": -0.20568,
            "macd": -0.11389
        }
    },
    {
        "time": "2018-6-1 0:0:0",
        "open": 10.149999618530273,
        "high": 10.289999961853027,
        "low": 10.069999694824219,
        "close": 10.189998626708984,
        "volume": 59721116,
        "amount": 608398848,
        "ma": {
            "5": 10.219999,
            "10": 10.440001,
            "20": 10.7165,
            "60": 11.177503,
            "120": 12.239581
        },
        "boll": {
            "mid": 10.7165,
            "upper": 11.398536,
            "lower": 10.034465
        },
        "ema": {
            "12": 10.467948,
            "50": 11.09144
        },
        "sma": {
            "5": 10.391386,
            "10": 10.611699,
            "20": 10.931788
        },
        "sar": {
            "BB": 10.435325
        },
        "kdj": {
            "k": 18.942049,
            "d": 15.102666,
            "j": 26.620817
        },
        "rsi": {
            "1": 33.360542,
            "2": 34.804092,
            "3": 38.767269
        },
        "dma": {
            "dif": -0.582399,
            "ama": -0.424101
        },
        "macd": {
            "dif": -0.261833,
            "dea": -0.21691,
            "macd": -0.089846
        }
    },
    {
        "time": "2018-6-4 0:0:0",
        "open": 10.229998588562012,
        "high": 10.3100004196167,
        "low": 10.149999618530273,
        "close": 10.270000457763672,
        "volume": 59303836,
        "amount": 608291968,
        "ma": {
            "5": 10.196001,
            "10": 10.380001,
            "20": 10.678999,
            "60": 11.150836,
            "120": 12.216748
        },
        "boll": {
            "mid": 10.678999,
            "upper": 11.375471,
            "lower": 9.982527
        },
        "ema": {
            "12": 10.435956,
            "50": 11.058834
        },
        "sma": {
            "5": 10.365109,
            "10": 10.57653,
            "20": 10.898199
        },
        "sar": {
            "BB": 10.37826
        },
        "kdj": {
            "k": 24.749207,
            "d": 18.318178,
            "j": 37.611263
        },
        "rsi": {
            "1": 32.733055,
            "2": 34.548492,
            "3": 38.655846
        },
        "dma": {
            "dif": -0.610999,
            "ama": -0.452501
        },
        "macd": {
            "dif": -0.259027,
            "dea": -0.225334,
            "macd": -0.067386
        }
    },
    {
        "time": "2018-6-5 0:0:0",
        "open": 10.289999961853027,
        "high": 10.300000190734863,
        "low": 10.109999656677246,
        "close": 10.260000228881836,
        "volume": 65654076,
        "amount": 670740288,
        "ma": {
            "5": 10.208,
            "10": 10.329,
            "20": 10.637501,
            "60": 11.118169,
            "120": 12.190415
        },
        "boll": {
            "mid": 10.637501,
            "upper": 11.359312,
            "lower": 9.915689
        },
        "ema": {
            "12": 10.390425,
            "50": 11.022801
        },
        "sma": {
            "5": 10.320087,
            "10": 10.532877,
            "20": 10.860289
        },
        "sar": {
            "BB": 10.324608
        },
        "kdj": {
            "k": 22.653275,
            "d": 19.76321,
            "j": 28.433403
        },
        "rsi": {
            "1": 25.756851,
            "2": 31.518337,
            "3": 37.312977
        },
        "dma": {
            "dif": -0.6284,
            "ama": -0.482341
        },
        "macd": {
            "dif": -0.263448,
            "dea": -0.232956,
            "macd": -0.060983
        }
    },
    {
        "time": "2018-6-6 0:0:0",
        "open": 10.25,
        "high": 10.260000228881836,
        "low": 10.100000381469727,
        "close": 10.140000343322754,
        "volume": 71274344,
        "amount": 724032768,
        "ma": {
            "5": 10.246,
            "10": 10.305,
            "20": 10.6055,
            "60": 11.090169,
            "120": 12.165998
        },
        "boll": {
            "mid": 10.6055,
            "upper": 11.314466,
            "lower": 9.896535
        },
        "ema": {
            "12": 10.387282,
            "50": 10.997202
        },
        "sma": {
            "5": 10.33007,
            "10": 10.516589,
            "20": 10.835774
        },
        "sar": {
            "BB": 10.020001
        },
        "kdj": {
            "k": 33.331314,
            "d": 24.285912,
            "j": 51.422119
        },
        "rsi": {
            "1": 50.178562,
            "2": 42.130829,
            "3": 41.385403
        },
        "dma": {
            "dif": -0.621799,
            "ama": -0.5104
        },
        "macd": {
            "dif": -0.245563,
            "dea": -0.235478,
            "macd": -0.02017
        }
    },
    {
        "time": "2018-6-7 0:0:0",
        "open": 10.199999809265137,
        "high": 10.460000038146973,
        "low": 10.180000305175781,
        "close": 10.369999885559082,
        "volume": 126263824,
        "amount": 1306425472,
        "ma": {
            "5": 10.232,
            "10": 10.258001,
            "20": 10.560999,
            "60": 11.057002,
            "120": 12.141331
        },
        "boll": {
            "mid": 10.560999,
            "upper": 11.274791,
            "lower": 9.847207
        },
        "ema": {
            "12": 10.346162,
            "50": 10.962802
        },
        "sma": {
            "5": 10.288055,
            "10": 10.476931,
            "20": 10.799986
        },
        "sar": {
            "BB": 10.037601
        },
        "kdj": {
            "k": 27.685286,
            "d": 25.419037,
            "j": 32.217781
        },
        "rsi": {
            "1": 35.113083,
            "2": 35.590763,
            "3": 38.545242
        },
        "dma": {
            "dif": -0.637998,
            "ama": -0.53892
        },
        "macd": {
            "dif": -0.248694,
            "dea": -0.238121,
            "macd": -0.021147
        }
    },
    {
        "time": "2018-6-8 0:0:0",
        "open": 10.329999923706055,
        "high": 10.329999923706055,
        "low": 10.060001373291016,
        "close": 10.119999885559082,
        "volume": 109937984,
        "amount": 1114968832,
        "ma": {
            "5": 10.404,
            "10": 10.312,
            "20": 10.5585,
            "60": 11.041002,
            "120": 12.127165
        },
        "boll": {
            "mid": 10.5585,
            "upper": 11.263423,
            "lower": 9.853578
        },
        "ema": {
            "12": 10.466752,
            "50": 10.969358
        },
        "sma": {
            "5": 10.456445,
            "10": 10.542237,
            "20": 10.816487
        },
        "sar": {
            "BB": 10.060993
        },
        "kdj": {
            "k": 51.790192,
            "d": 34.209423,
            "j": 86.951729
        },
        "rsi": {
            "1": 73.575417,
            "2": 61.755669,
            "3": 52.335083
        },
        "dma": {
            "dif": -0.579799,
            "ama": -0.55872
        },
        "macd": {
            "dif": -0.167745,
            "dea": -0.224046,
            "macd": 0.112602
        }
    },
    {
        "time": "2018-6-11 0:0:0",
        "open": 10.060001373291016,
        "high": 10.130000114440918,
        "low": 10,
        "close": 10.039999961853027,
        "volume": 72137496,
        "amount": 724688000,
        "ma": {
            "5": 10.360001,
            "10": 10.278001,
            "20": 10.504499,
            "60": 11.007834,
            "120": 12.101748
        },
        "boll": {
            "mid": 10.504499,
            "upper": 11.193672,
            "lower": 9.815327
        },
        "ema": {
            "12": 10.401098,
            "50": 10.932913
        },
        "sma": {
            "5": 10.373156,
            "10": 10.492014,
            "20": 10.777662
        },
        "sar": {
            "BB": 11.13
        },
        "kdj": {
            "k": 35.706734,
            "d": 34.708527,
            "j": 37.703148
        },
        "rsi": {
            "1": 41.62323,
            "2": 41.775902,
            "3": 41.778076
        },
        "dma": {
            "dif": -0.596,
            "ama": -0.57604
        },
        "macd": {
            "dif": -0.189362,
            "dea": -0.217109,
            "macd": 0.055495
        }
    },
    {
        "time": "2018-6-12 0:0:0",
        "open": 10.029998779296875,
        "high": 10.079999923706055,
        "low": 9.949999809265137,
        "close": 10.060001373291016,
        "volume": 91330072,
        "amount": 914001792,
        "ma": {
            "5": 10.344,
            "10": 10.275999,
            "20": 10.4625,
            "60": 10.975168,
            "120": 12.073083
        },
        "boll": {
            "mid": 10.4625,
            "upper": 11.152536,
            "lower": 9.772463
        },
        "ema": {
            "12": 10.348621,
            "50": 10.898682
        },
        "sma": {
            "5": 10.310525,
            "10": 10.448812,
            "20": 10.741779
        },
        "sar": {
            "BB": 11.0396
        },
        "kdj": {
            "k": 26.911879,
            "d": 32.109646,
            "j": 16.516342
        },
        "rsi": {
            "1": 42.176186,
            "2": 42.150558,
            "3": 42.00209
        },
        "dma": {
            "dif": -0.5804,
            "ama": -0.587479
        },
        "macd": {
            "dif": -0.202545,
            "dea": -0.214196,
            "macd": 0.023302
        }
    },
    {
        "time": "2018-6-13 0:0:0",
        "open": 10.039999961853027,
        "high": 10.060001373291016,
        "low": 9.949999809265137,
        "close": 9.949999809265137,
        "volume": 53058432,
        "amount": 530483776,
        "ma": {
            "5": 10.26,
            "10": 10.253,
            "20": 10.418999,
            "60": 10.942335,
            "120": 12.0475
        },
        "boll": {
            "mid": 10.418999,
            "upper": 11.123717,
            "lower": 9.71428
        },
        "ema": {
            "12": 10.287295,
            "50": 10.861478
        },
        "sma": {
            "5": 10.23842,
            "10": 10.398932,
            "20": 10.70219
        },
        "sar": {
            "BB": 10.952433
        },
        "kdj": {
            "k": 17.941252,
            "d": 27.386848,
            "j": -0.949944
        },
        "rsi": {
            "1": 39.694752,
            "2": 40.583767,
            "3": 41.094696
        },
        "dma": {
            "dif": -0.584599,
            "ama": -0.596419
        },
        "macd": {
            "dif": -0.21934,
            "dea": -0.215225,
            "macd": -0.008231
        }
    },
    {
        "time": "2018-6-14 0:0:0",
        "open": 9.949999809265137,
        "high": 10.149999618530273,
        "low": 9.920000076293945,
        "close": 10.069999694824219,
        "volume": 86639200,
        "amount": 872487552,
        "ma": {
            "5": 10.25,
            "10": 10.240999,
            "20": 10.374499,
            "60": 10.915,
            "120": 12.021999
        },
        "boll": {
            "mid": 10.374499,
            "upper": 11.046972,
            "lower": 9.702026
        },
        "ema": {
            "12": 10.253865,
            "50": 10.83044
        },
        "sma": {
            "5": 10.204737,
            "10": 10.366038,
            "20": 10.670581
        },
        "sar": {
            "BB": 10.832141
        },
        "kdj": {
            "k": 16.093056,
            "d": 23.622252,
            "j": 1.034664
        },
        "rsi": {
            "1": 44.007263,
            "2": 43.100777,
            "3": 42.508522
        },
        "dma": {
            "dif": -0.577002,
            "ama": -0.599939
        },
        "macd": {
            "dif": -0.220428,
            "dea": -0.216265,
            "macd": -0.008324
        }
    },
    {
        "time": "2018-6-15 0:0:0",
        "open": 10.079999923706055,
        "high": 10.289999961853027,
        "low": 10.060001373291016,
        "close": 10.170000076293945,
        "volume": 124870784,
        "amount": 1273412992,
        "ma": {
            "5": 10.058001,
            "10": 10.231,
            "20": 10.335501,
            "60": 10.8905,
            "120": 11.998417
        },
        "boll": {
            "mid": 10.335501,
            "upper": 10.955845,
            "lower": 9.715157
        },
        "ema": {
            "12": 10.240963,
            "50": 10.80454
        },
        "sma": {
            "5": 10.197789,
            "10": 10.346434,
            "20": 10.645552
        },
        "sar": {
            "BB": 10.722684
        },
        "kdj": {
            "k": 17.615755,
            "d": 21.620087,
            "j": 9.607094
        },
        "rsi": {
            "1": 47.744171,
            "2": 45.210785,
            "3": 43.683907
        },
        "dma": {
            "dif": -0.5724,
            "ama": -0.59894
        },
        "macd": {
            "dif": -0.21079,
            "dea": -0.21517,
            "macd": 0.008761
        }
    },
    {
        "time": "2018-6-19 0:0:0",
        "open": 10.050000190734863,
        "high": 10.149999618530273,
        "low": 9.819999694824219,
        "close": 9.869999885559082,
        "volume": 156587440,
        "amount": 1565756544,
        "ma": {
            "5": 10.024,
            "10": 10.192,
            "20": 10.285999,
            "60": 10.857833,
            "120": 11.974668
        },
        "boll": {
            "mid": 10.285999,
            "upper": 10.887977,
            "lower": 9.684022
        },
        "ema": {
            "12": 10.183891,
            "50": 10.767892
        },
        "sma": {
            "5": 10.132231,
            "10": 10.298791,
            "20": 10.606774
        },
        "sar": {
            "BB": 10.616654
        },
        "kdj": {
            "k": 13.016106,
            "d": 18.752092,
            "j": 1.544132
        },
        "rsi": {
            "1": 38.495289,
            "2": 40.317707,
            "3": 41.056313
        },
        "dma": {
            "dif": -0.594599,
            "ama": -0.597299
        },
        "macd": {
            "dif": -0.224769,
            "dea": -0.21709,
            "macd": -0.015357
        }
    },
    {
        "time": "2018-6-20 0:0:0",
        "open": 9.869999885559082,
        "high": 9.949999809265137,
        "low": 9.760001182556152,
        "close": 9.90999984741211,
        "volume": 76363728,
        "amount": 752950720,
        "ma": {
            "5": 9.994,
            "10": 10.169001,
            "20": 10.249,
            "60": 10.825999,
            "120": 11.951001
        },
        "boll": {
            "mid": 10.249,
            "upper": 10.847655,
            "lower": 9.650344
        },
        "ema": {
            "12": 10.141754,
            "50": 10.734248
        },
        "sma": {
            "5": 10.087785,
            "10": 10.259912,
            "20": 10.571936
        },
        "sar": {
            "BB": 10.457323
        },
        "kdj": {
            "k": 12.327008,
            "d": 16.610397,
            "j": 3.760231
        },
        "rsi": {
            "1": 40.344303,
            "2": 41.242676,
            "3": 41.545502
        },
        "dma": {
            "dif": -0.604598,
            "ama": -0.594919
        },
        "macd": {
            "dif": -0.229968,
            "dea": -0.219666,
            "macd": -0.020605
        }
    },
    {
        "time": "2018-6-21 0:0:0",
        "open": 9.930000305175781,
        "high": 10.039999961853027,
        "low": 9.859999656677246,
        "close": 9.859999656677246,
        "volume": 84007080,
        "amount": 836014848,
        "ma": {
            "5": 9.976,
            "10": 10.118001,
            "20": 10.211499,
            "60": 10.791998,
            "120": 11.922501
        },
        "boll": {
            "mid": 10.211499,
            "upper": 10.808951,
            "lower": 9.614047
        },
        "ema": {
            "12": 10.098408,
            "50": 10.699965
        },
        "sma": {
            "5": 10.042228,
            "10": 10.219921,
            "20": 10.536339
        },
        "sar": {
            "BB": 10.317859
        },
        "kdj": {
            "k": 10.651061,
            "d": 14.623952,
            "j": 2.705278
        },
        "rsi": {
            "1": 38.603497,
            "2": 40.389088,
            "3": 41.100582
        },
        "dma": {
            "dif": -0.635399,
            "ama": -0.596279
        },
        "macd": {
            "dif": -0.235409,
            "dea": -0.222814,
            "macd": -0.025189
        }
    },
    {
        "time": "2018-6-22 0:0:0",
        "open": 9.800000190734863,
        "high": 9.869999885559082,
        "low": 9.770001411437988,
        "close": 9.850000381469727,
        "volume": 65781852,
        "amount": 645752896,
        "ma": {
            "5": 9.932001,
            "10": 10.091,
            "20": 10.174501,
            "60": 10.76183,
            "120": 11.894084
        },
        "boll": {
            "mid": 10.174501,
            "upper": 10.764788,
            "lower": 9.584215
        },
        "ema": {
            "12": 10.060191,
            "50": 10.666633
        },
        "sma": {
            "5": 10.003782,
            "10": 10.182929,
            "20": 10.502022
        },
        "sar": {
            "BB": 10.226287
        },
        "kdj": {
            "k": 12.761047,
            "d": 14.002983,
            "j": 10.277176
        },
        "rsi": {
            "1": 38.207855,
            "2": 40.207542,
            "3": 41.008934
        },
        "dma": {
            "dif": -0.638999,
            "ama": -0.596379
        },
        "macd": {
            "dif": -0.237787,
            "dea": -0.225809,
            "macd": -0.023957
        }
    },
    {
        "time": "2018-6-25 0:0:0",
        "open": 9.90999984741211,
        "high": 9.920000076293945,
        "low": 9.380000114440918,
        "close": 9.460000038146973,
        "volume": 119521264,
        "amount": 1154559104,
        "ma": {
            "5": 9.789999,
            "10": 9.924,
            "20": 10.118,
            "60": 10.730498,
            "120": 11.860083
        },
        "boll": {
            "mid": 10.118,
            "upper": 10.755345,
            "lower": 9.480655
        },
        "ema": {
            "12": 9.967854,
            "50": 10.619313
        },
        "sma": {
            "5": 9.895025,
            "10": 10.110636,
            "20": 10.449922
        },
        "sar": {
            "BB": 10.13503
        },
        "kdj": {
            "k": 11.437766,
            "d": 13.147911,
            "j": 8.017475
        },
        "rsi": {
            "1": 25.821712,
            "2": 33.752224,
            "3": 37.596989
        },
        "dma": {
            "dif": -0.7668,
            "ama": -0.61508
        },
        "macd": {
            "dif": -0.268052,
            "dea": -0.234257,
            "macd": -0.067589
        }
    },
    {
        "time": "2018-6-26 0:0:0",
        "open": 9.390000343322754,
        "high": 9.439998626708984,
        "low": 9.09000015258789,
        "close": 9.359999656677246,
        "volume": 112415696,
        "amount": 1042528512,
        "ma": {
            "5": 9.688001,
            "10": 9.856,
            "20": 10.067001,
            "60": 10.704332,
            "120": 11.825416
        },
        "boll": {
            "mid": 10.067001,
            "upper": 10.77527,
            "lower": 9.358732
        },
        "ema": {
            "12": 9.874338,
            "50": 10.569929
        },
        "sma": {
            "5": 9.78802,
            "10": 10.035572,
            "20": 10.395426
        },
        "sar": {
            "BB": 9.984024
        },
        "kdj": {
            "k": 15.125165,
            "d": 13.806995,
            "j": 17.761505
        },
        "rsi": {
            "1": 23.479679,
            "2": 32.301582,
            "3": 36.778271
        },
        "dma": {
            "dif": -0.785399,
            "ama": -0.634019
        },
        "macd": {
            "dif": -0.296685,
            "dea": -0.246743,
            "macd": -0.099884
        }
    },
    {
        "time": "2018-6-27 0:0:0",
        "open": 9.310001373291016,
        "high": 9.399999618530273,
        "low": 9.029998779296875,
        "close": 9.09000015258789,
        "volume": 104514272,
        "amount": 958871680,
        "ma": {
            "5": 9.524,
            "10": 9.759,
            "20": 10.0175,
            "60": 10.673498,
            "120": 11.79075
        },
        "boll": {
            "mid": 10.0175,
            "upper": 10.849527,
            "lower": 9.185472
        },
        "ema": {
            "12": 9.753671,
            "50": 10.511892
        },
        "sma": {
            "5": 9.648417,
            "10": 9.941014,
            "20": 10.330154
        },
        "sar": {
            "BB": 9.80522
        },
        "kdj": {
            "k": 11.67078,
            "d": 13.094924,
            "j": 8.822493
        },
        "rsi": {
            "1": 18.146904,
            "2": 28.671944,
            "3": 34.652294
        },
        "dma": {
            "dif": -0.8338,
            "ama": -0.65936
        },
        "macd": {
            "dif": -0.337277,
            "dea": -0.26485,
            "macd": -0.144855
        }
    },
    {
        "time": "2018-6-28 0:0:0",
        "open": 8.949999809265137,
        "high": 9.079999923706055,
        "low": 8.869999885559082,
        "close": 8.920000076293945,
        "volume": 111076400,
        "amount": 996801216,
        "ma": {
            "5": 9.336,
            "10": 9.656,
            "20": 9.9545,
            "60": 10.640666,
            "120": 11.751248
        },
        "boll": {
            "mid": 9.9545,
            "upper": 10.915543,
            "lower": 8.993458
        },
        "ema": {
            "12": 9.625414,
            "50": 10.449465
        },
        "sma": {
            "5": 9.502733,
            "10": 9.838913,
            "20": 10.259646
        },
        "sar": {
            "BB": 9.650175
        },
        "kdj": {
            "k": 8.954233,
            "d": 11.714694,
            "j": 3.433311
        },
        "rsi": {
            "1": 15.488933,
            "2": 26.617554,
            "3": 33.384407
        },
        "dma": {
            "dif": -0.8838,
            "ama": -0.68928
        },
        "macd": {
            "dif": -0.378798,
            "dea": -0.287639,
            "macd": -0.182316
        }
    },
    {
        "time": "2018-6-29 0:0:0",
        "open": 9.010001182556152,
        "high": 9.130000114440918,
        "low": 8.960000038146973,
        "close": 9.09000015258789,
        "volume": 67529968,
        "amount": 611346112,
        "ma": {
            "5": 9.184,
            "10": 9.558001,
            "20": 9.8995,
            "60": 10.608,
            "120": 11.716249
        },
        "boll": {
            "mid": 9.8995,
            "upper": 10.927381,
            "lower": 8.871619
        },
        "ema": {
            "12": 9.543042,
            "50": 10.396152
        },
        "sma": {
            "5": 9.420187,
            "10": 9.764021,
            "20": 10.201164
        },
        "sar": {
            "BB": 9.49414
        },
        "kdj": {
            "k": 11.698663,
            "d": 11.709351,
            "j": 11.677288
        },
        "rsi": {
            "1": 28.122398,
            "2": 31.937672,
            "3": 35.834232
        },
        "dma": {
            "dif": -0.941599,
            "ama": -0.725739
        },
        "macd": {
            "dif": -0.39345,
            "dea": -0.308802,
            "macd": -0.169297
        }
    }
]);


/***/ }),

/***/ "./example/scripts/mock-time-share.ts":
/*!********************************************!*\
  !*** ./example/scripts/mock-time-share.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// tslint:disable
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        "time": 90,
        "price": 15,
        "avg": 15.213459968566895,
        "volume": 78900,
        "holdAmount": 1199751
    },
    {
        "time": 91,
        "price": 15,
        "avg": 15.17087173461914,
        "volume": 104600,
        "holdAmount": 1583578
    },
    {
        "time": 92,
        "price": 15,
        "avg": 15.16372013092041,
        "volume": 19705,
        "holdAmount": 297032
    },
    {
        "time": 93,
        "price": 15.130000114440918,
        "avg": 15.162077903747559,
        "volume": 10400,
        "holdAmount": 157405
    },
    {
        "time": 94,
        "price": 15.130000114440918,
        "avg": 15.1581392288208,
        "volume": 32100,
        "holdAmount": 485900
    },
    {
        "time": 95,
        "price": 15.10999870300293,
        "avg": 15.15634822845459,
        "volume": 17100,
        "holdAmount": 258732
    },
    {
        "time": 96,
        "price": 15.10999870300293,
        "avg": 15.154600143432617,
        "volume": 10300,
        "holdAmount": 155642
    },
    {
        "time": 97,
        "price": 15.10999870300293,
        "avg": 15.150077819824219,
        "volume": 30800,
        "holdAmount": 465236
    },
    {
        "time": 98,
        "price": 15.10999870300293,
        "avg": 15.148465156555176,
        "volume": 12300,
        "holdAmount": 185836
    },
    {
        "time": 99,
        "price": 15.119999885559082,
        "avg": 15.148131370544434,
        "volume": 3400,
        "holdAmount": 51398
    },
    {
        "time": 100,
        "price": 15.130000114440918,
        "avg": 15.14596176147461,
        "volume": 39100,
        "holdAmount": 591525
    },
    {
        "time": 101,
        "price": 15.100000381469727,
        "avg": 15.141112327575684,
        "volume": 50700,
        "holdAmount": 766204
    },
    {
        "time": 102,
        "price": 15.100000381469727,
        "avg": 15.139891624450684,
        "volume": 19000,
        "holdAmount": 287186
    },
    {
        "time": 103,
        "price": 15.10999870300293,
        "avg": 15.138642311096191,
        "volume": 20000,
        "holdAmount": 302267
    },
    {
        "time": 104,
        "price": 15.100000381469727,
        "avg": 15.137414932250977,
        "volume": 16500,
        "holdAmount": 249301
    },
    {
        "time": 105,
        "price": 15.100000381469727,
        "avg": 15.136309623718262,
        "volume": 18745,
        "holdAmount": 283277
    },
    {
        "time": 106,
        "price": 15.079999923706055,
        "avg": 15.132049560546875,
        "volume": 58355,
        "holdAmount": 881090
    },
    {
        "time": 107,
        "price": 15.069999694824219,
        "avg": 15.12763500213623,
        "volume": 43300,
        "holdAmount": 652677
    },
    {
        "time": 108,
        "price": 15.069999694824219,
        "avg": 15.126194953918457,
        "volume": 14900,
        "holdAmount": 224562
    },
    {
        "time": 109,
        "price": 15.079999923706055,
        "avg": 15.123476028442383,
        "volume": 30600,
        "holdAmount": 461318
    },
    {
        "time": 110,
        "price": 15.079999923706055,
        "avg": 15.121335983276367,
        "volume": 30800,
        "holdAmount": 464444
    },
    {
        "time": 111,
        "price": 15.069999694824219,
        "avg": 15.120841979980469,
        "volume": 7400,
        "holdAmount": 111571
    },
    {
        "time": 112,
        "price": 15.0600004196167,
        "avg": 15.117785453796387,
        "volume": 38500,
        "holdAmount": 580240
    },
    {
        "time": 113,
        "price": 15.069999694824219,
        "avg": 15.116735458374023,
        "volume": 14500,
        "holdAmount": 218451
    },
    {
        "time": 114,
        "price": 15.079999923706055,
        "avg": 15.116231918334961,
        "volume": 8600,
        "holdAmount": 129636
    },
    {
        "time": 115,
        "price": 15.079999923706055,
        "avg": 15.115471839904785,
        "volume": 11500,
        "holdAmount": 173329
    },
    {
        "time": 116,
        "price": 15.079999923706055,
        "avg": 15.114814758300781,
        "volume": 11100,
        "holdAmount": 167315
    },
    {
        "time": 117,
        "price": 15.09000015258789,
        "avg": 15.11415958404541,
        "volume": 15915,
        "holdAmount": 240018
    },
    {
        "time": 118,
        "price": 15.09000015258789,
        "avg": 15.113874435424805,
        "volume": 13500,
        "holdAmount": 203817
    },
    {
        "time": 119,
        "price": 15.100000381469727,
        "avg": 15.113670349121094,
        "volume": 11200,
        "holdAmount": 169099
    },
    {
        "time": 120,
        "price": 15.119999885559082,
        "avg": 15.113759994506836,
        "volume": 30900,
        "holdAmount": 466975
    },
    {
        "time": 121,
        "price": 15.119999885559082,
        "avg": 15.113727569580078,
        "volume": 4600,
        "holdAmount": 69519
    },
    {
        "time": 122,
        "price": 15.10999870300293,
        "avg": 15.11369514465332,
        "volume": 9800,
        "holdAmount": 148087
    },
    {
        "time": 123,
        "price": 15.10999870300293,
        "avg": 15.113701820373535,
        "volume": 3800,
        "holdAmount": 57440
    },
    {
        "time": 124,
        "price": 15.10999870300293,
        "avg": 15.113531112670898,
        "volume": 11700,
        "holdAmount": 176792
    },
    {
        "time": 125,
        "price": 15.119999885559082,
        "avg": 15.113544464111328,
        "volume": 9500,
        "holdAmount": 143564
    },
    {
        "time": 126,
        "price": 15.119999885559082,
        "avg": 15.113525390625,
        "volume": 18800,
        "holdAmount": 284171
    },
    {
        "time": 127,
        "price": 15.10999870300293,
        "avg": 15.113524436950684,
        "volume": 6290,
        "holdAmount": 95059
    },
    {
        "time": 128,
        "price": 15.130000114440918,
        "avg": 15.11348819732666,
        "volume": 19100,
        "holdAmount": 288657
    },
    {
        "time": 129,
        "price": 15.130000114440918,
        "avg": 15.113598823547363,
        "volume": 7300,
        "holdAmount": 110428
    },
    {
        "time": 130,
        "price": 15.130000114440918,
        "avg": 15.114154815673828,
        "volume": 40860,
        "holdAmount": 618057
    },
    {
        "time": 131,
        "price": 15.14000129699707,
        "avg": 15.114731788635254,
        "volume": 20900,
        "holdAmount": 316449
    },
    {
        "time": 132,
        "price": 15.14000129699707,
        "avg": 15.116830825805664,
        "volume": 61600,
        "holdAmount": 933264.9375
    },
    {
        "time": 133,
        "price": 15.180000305175781,
        "avg": 15.11754035949707,
        "volume": 17100,
        "holdAmount": 259165
    },
    {
        "time": 134,
        "price": 15.149999618530273,
        "avg": 15.118549346923828,
        "volume": 33700,
        "holdAmount": 510672
    },
    {
        "time": 135,
        "price": 15.149999618530273,
        "avg": 15.118898391723633,
        "volume": 9300,
        "holdAmount": 140980
    },
    {
        "time": 136,
        "price": 15.15999984741211,
        "avg": 15.119232177734375,
        "volume": 9400,
        "holdAmount": 142502
    },
    {
        "time": 137,
        "price": 15.15999984741211,
        "avg": 15.119531631469727,
        "volume": 8200,
        "holdAmount": 124313
    },
    {
        "time": 138,
        "price": 15.15999984741211,
        "avg": 15.120061874389648,
        "volume": 14800,
        "holdAmount": 224356
    },
    {
        "time": 139,
        "price": 15.170000076293945,
        "avg": 15.122751235961914,
        "volume": 59500,
        "holdAmount": 902948
    },
    {
        "time": 140,
        "price": 15.199999809265137,
        "avg": 15.138049125671387,
        "volume": 232500,
        "holdAmount": 3534496
    },
    {
        "time": 141,
        "price": 15.1899995803833,
        "avg": 15.140389442443848,
        "volume": 79800,
        "holdAmount": 1211570
    },
    {
        "time": 142,
        "price": 15.170000076293945,
        "avg": 15.141581535339355,
        "volume": 48200,
        "holdAmount": 732122
    },
    {
        "time": 143,
        "price": 15.180000305175781,
        "avg": 15.142313957214355,
        "volume": 42600,
        "holdAmount": 646458
    },
    {
        "time": 144,
        "price": 15.15999984741211,
        "avg": 15.142631530761719,
        "volume": 16600,
        "holdAmount": 251876
    },
    {
        "time": 145,
        "price": 15.14000129699707,
        "avg": 15.14277172088623,
        "volume": 42300,
        "holdAmount": 640854
    },
    {
        "time": 146,
        "price": 15.14000129699707,
        "avg": 15.142748832702637,
        "volume": 13300,
        "holdAmount": 201370
    },
    {
        "time": 147,
        "price": 15.149999618530273,
        "avg": 15.142658233642578,
        "volume": 64600,
        "holdAmount": 977806
    },
    {
        "time": 148,
        "price": 15.14000129699707,
        "avg": 15.142656326293945,
        "volume": 18900,
        "holdAmount": 286164
    },
    {
        "time": 149,
        "price": 15.14000129699707,
        "avg": 15.142627716064453,
        "volume": 8100,
        "holdAmount": 122612
    },
    {
        "time": 150,
        "price": 15.180000305175781,
        "avg": 15.142973899841309,
        "volume": 46000,
        "holdAmount": 697000
    },
    {
        "time": 151,
        "price": 15.180000305175781,
        "avg": 15.143111228942871,
        "volume": 6900,
        "holdAmount": 104736
    },
    {
        "time": 152,
        "price": 15.180000305175781,
        "avg": 15.143224716186523,
        "volume": 6150,
        "holdAmount": 93340
    },
    {
        "time": 153,
        "price": 15.170000076293945,
        "avg": 15.143442153930664,
        "volume": 11900,
        "holdAmount": 180598
    },
    {
        "time": 154,
        "price": 15.180000305175781,
        "avg": 15.143815040588379,
        "volume": 35805,
        "holdAmount": 542890
    },
    {
        "time": 155,
        "price": 15.180000305175781,
        "avg": 15.144015312194824,
        "volume": 11000,
        "holdAmount": 166942
    },
    {
        "time": 156,
        "price": 15.180000305175781,
        "avg": 15.144111633300781,
        "volume": 5500,
        "holdAmount": 83478
    },
    {
        "time": 157,
        "price": 15.1899995803833,
        "avg": 15.144293785095215,
        "volume": 8000,
        "holdAmount": 121492
    },
    {
        "time": 158,
        "price": 15.180000305175781,
        "avg": 15.144570350646973,
        "volume": 11200,
        "holdAmount": 170160
    },
    {
        "time": 159,
        "price": 15.199999809265137,
        "avg": 15.145569801330566,
        "volume": 37100,
        "holdAmount": 563764
    },
    {
        "time": 160,
        "price": 15.1899995803833,
        "avg": 15.14596939086914,
        "volume": 16800,
        "holdAmount": 255220
    },
    {
        "time": 161,
        "price": 15.1899995803833,
        "avg": 15.146345138549805,
        "volume": 18300,
        "holdAmount": 277906
    },
    {
        "time": 162,
        "price": 15.199999809265137,
        "avg": 15.146732330322266,
        "volume": 16100,
        "holdAmount": 244646
    },
    {
        "time": 163,
        "price": 15.1899995803833,
        "avg": 15.147055625915527,
        "volume": 12900,
        "holdAmount": 196064
    },
    {
        "time": 164,
        "price": 15.1899995803833,
        "avg": 15.14733600616455,
        "volume": 11700,
        "holdAmount": 177776
    },
    {
        "time": 165,
        "price": 15.199999809265137,
        "avg": 15.148282051086426,
        "volume": 36010,
        "holdAmount": 547208
    },
    {
        "time": 166,
        "price": 15.210000038146973,
        "avg": 15.149415016174316,
        "volume": 87400,
        "holdAmount": 1326578
    },
    {
        "time": 167,
        "price": 15.15999984741211,
        "avg": 15.14990234375,
        "volume": 80000,
        "holdAmount": 1213106
    },
    {
        "time": 168,
        "price": 15.199999809265137,
        "avg": 15.150075912475586,
        "volume": 12400,
        "holdAmount": 188168
    },
    {
        "time": 169,
        "price": 15.1899995803833,
        "avg": 15.150256156921387,
        "volume": 9500,
        "holdAmount": 144328
    },
    {
        "time": 170,
        "price": 15.1899995803833,
        "avg": 15.150407791137695,
        "volume": 8800,
        "holdAmount": 133668
    },
    {
        "time": 171,
        "price": 15.1899995803833,
        "avg": 15.15077018737793,
        "volume": 21200,
        "holdAmount": 322004
    },
    {
        "time": 172,
        "price": 15.199999809265137,
        "avg": 15.151326179504395,
        "volume": 27300,
        "holdAmount": 414892
    },
    {
        "time": 173,
        "price": 15.199999809265137,
        "avg": 15.151795387268066,
        "volume": 22000,
        "holdAmount": 334448
    },
    {
        "time": 174,
        "price": 15.210000038146973,
        "avg": 15.152061462402344,
        "volume": 10500,
        "holdAmount": 159704
    },
    {
        "time": 175,
        "price": 15.210000038146973,
        "avg": 15.152284622192383,
        "volume": 9355,
        "holdAmount": 142252
    },
    {
        "time": 176,
        "price": 15.210000038146973,
        "avg": 15.152602195739746,
        "volume": 13500,
        "holdAmount": 205300
    },
    {
        "time": 177,
        "price": 15.199999809265137,
        "avg": 15.152905464172363,
        "volume": 14345,
        "holdAmount": 218080
    },
    {
        "time": 178,
        "price": 15.199999809265137,
        "avg": 15.153120040893555,
        "volume": 11800,
        "holdAmount": 179320
    },
    {
        "time": 179,
        "price": 15.199999809265137,
        "avg": 15.153468132019043,
        "volume": 17800,
        "holdAmount": 270528
    },
    {
        "time": 180,
        "price": 15.210000038146973,
        "avg": 15.154274940490723,
        "volume": 34690,
        "holdAmount": 527476
    },
    {
        "time": 181,
        "price": 15.220000267028809,
        "avg": 15.156768798828125,
        "volume": 97200,
        "holdAmount": 1479196
    },
    {
        "time": 182,
        "price": 15.229998588562012,
        "avg": 15.157212257385254,
        "volume": 15300,
        "holdAmount": 233016
    },
    {
        "time": 183,
        "price": 15.229998588562012,
        "avg": 15.157381057739258,
        "volume": 6200,
        "holdAmount": 94396
    },
    {
        "time": 184,
        "price": 15.229998588562012,
        "avg": 15.157774925231934,
        "volume": 13900,
        "holdAmount": 211684
    },
    {
        "time": 185,
        "price": 15.239999771118164,
        "avg": 15.15884780883789,
        "volume": 34985,
        "holdAmount": 533040
    },
    {
        "time": 186,
        "price": 15.239999771118164,
        "avg": 15.159412384033203,
        "volume": 18900,
        "holdAmount": 288024
    },
    {
        "time": 187,
        "price": 15.239999771118164,
        "avg": 15.159668922424316,
        "volume": 8300,
        "holdAmount": 126492
    },
    {
        "time": 188,
        "price": 15.239999771118164,
        "avg": 15.160175323486328,
        "volume": 17300,
        "holdAmount": 263596
    },
    {
        "time": 189,
        "price": 15.239999771118164,
        "avg": 15.16123104095459,
        "volume": 37500,
        "holdAmount": 571296
    },
    {
        "time": 190,
        "price": 15.25,
        "avg": 15.162189483642578,
        "volume": 32700,
        "holdAmount": 498364
    },
    {
        "time": 191,
        "price": 15.260000228881836,
        "avg": 15.166705131530762,
        "volume": 147400,
        "holdAmount": 2247808
    },
    {
        "time": 192,
        "price": 15.260000228881836,
        "avg": 15.167510032653809,
        "volume": 23890,
        "holdAmount": 364652
    },
    {
        "time": 193,
        "price": 15.270001411437988,
        "avg": 15.168500900268555,
        "volume": 27200,
        "holdAmount": 415336
    },
    {
        "time": 194,
        "price": 15.279999732971191,
        "avg": 15.169751167297363,
        "volume": 33900,
        "holdAmount": 517976
    },
    {
        "time": 195,
        "price": 15.279999732971191,
        "avg": 15.170372009277344,
        "volume": 16700,
        "holdAmount": 255164
    },
    {
        "time": 196,
        "price": 15.279999732971191,
        "avg": 15.172314643859863,
        "volume": 54100,
        "holdAmount": 826580
    },
    {
        "time": 197,
        "price": 15.279999732971191,
        "avg": 15.172882080078125,
        "volume": 14700,
        "holdAmount": 224748
    },
    {
        "time": 198,
        "price": 15.279999732971191,
        "avg": 15.174382209777832,
        "volume": 40500,
        "holdAmount": 619176
    },
    {
        "time": 199,
        "price": 15.300000190734863,
        "avg": 15.177388191223145,
        "volume": 75390,
        "holdAmount": 1152808
    },
    {
        "time": 200,
        "price": 15.300000190734863,
        "avg": 15.179286003112793,
        "volume": 52205,
        "holdAmount": 798728
    },
    {
        "time": 201,
        "price": 15.3100004196167,
        "avg": 15.1801118850708,
        "volume": 21600,
        "holdAmount": 330540
    },
    {
        "time": 202,
        "price": 15.3100004196167,
        "avg": 15.181838035583496,
        "volume": 44300,
        "holdAmount": 678108
    },
    {
        "time": 203,
        "price": 15.3100004196167,
        "avg": 15.18281078338623,
        "volume": 25200,
        "holdAmount": 385788
    },
    {
        "time": 204,
        "price": 15.300000190734863,
        "avg": 15.1842679977417,
        "volume": 39600,
        "holdAmount": 606112
    },
    {
        "time": 205,
        "price": 15.3100004196167,
        "avg": 15.185288429260254,
        "volume": 28400,
        "holdAmount": 434532
    },
    {
        "time": 206,
        "price": 15.3100004196167,
        "avg": 15.18542194366455,
        "volume": 3600,
        "holdAmount": 55116
    },
    {
        "time": 207,
        "price": 15.300000190734863,
        "avg": 15.186430931091309,
        "volume": 28500,
        "holdAmount": 436096
    },
    {
        "time": 208,
        "price": 15.3100004196167,
        "avg": 15.187768936157227,
        "volume": 42100,
        "holdAmount": 644144
    },
    {
        "time": 209,
        "price": 15.300000190734863,
        "avg": 15.187905311584473,
        "volume": 4200,
        "holdAmount": 64256
    },
    {
        "time": 300,
        "price": 15.289999961853027,
        "avg": 15.190385818481445,
        "volume": 74500,
        "holdAmount": 1140120
    },
    {
        "time": 301,
        "price": 15.289999961853027,
        "avg": 15.190460205078125,
        "volume": 2400,
        "holdAmount": 36712
    },
    {
        "time": 302,
        "price": 15.270001411437988,
        "avg": 15.19236946105957,
        "volume": 78900,
        "holdAmount": 1205572
    },
    {
        "time": 303,
        "price": 15.239999771118164,
        "avg": 15.192774772644043,
        "volume": 22310,
        "holdAmount": 340404
    },
    {
        "time": 304,
        "price": 15.260000228881836,
        "avg": 15.192943572998047,
        "volume": 8600,
        "holdAmount": 131296
    },
    {
        "time": 305,
        "price": 15.279999732971191,
        "avg": 15.193225860595703,
        "volume": 13900,
        "holdAmount": 212136
    },
    {
        "time": 306,
        "price": 15.279999732971191,
        "avg": 15.193256378173828,
        "volume": 1300,
        "holdAmount": 19856
    },
    {
        "time": 307,
        "price": 15.260000228881836,
        "avg": 15.193300247192383,
        "volume": 2100,
        "holdAmount": 32060
    },
    {
        "time": 308,
        "price": 15.239999771118164,
        "avg": 15.194119453430176,
        "volume": 53400,
        "holdAmount": 814388
    },
    {
        "time": 309,
        "price": 15.270001411437988,
        "avg": 15.194226264953613,
        "volume": 5200,
        "holdAmount": 79404
    },
    {
        "time": 310,
        "price": 15.260000228881836,
        "avg": 15.194395065307617,
        "volume": 9500,
        "holdAmount": 144996
    },
    {
        "time": 311,
        "price": 15.25,
        "avg": 15.195155143737793,
        "volume": 51100,
        "holdAmount": 779368
    },
    {
        "time": 312,
        "price": 15.25,
        "avg": 15.195555686950684,
        "volume": 29200,
        "holdAmount": 445248
    },
    {
        "time": 313,
        "price": 15.239999771118164,
        "avg": 15.195944786071777,
        "volume": 29400,
        "holdAmount": 448216
    },
    {
        "time": 314,
        "price": 15.260000228881836,
        "avg": 15.196435928344727,
        "volume": 31800,
        "holdAmount": 485044
    },
    {
        "time": 315,
        "price": 15.25,
        "avg": 15.196756362915039,
        "volume": 23200,
        "holdAmount": 353804
    },
    {
        "time": 316,
        "price": 15.260000228881836,
        "avg": 15.197407722473145,
        "volume": 43400,
        "holdAmount": 662040
    },
    {
        "time": 317,
        "price": 15.260000228881836,
        "avg": 15.197731971740723,
        "volume": 20400,
        "holdAmount": 311272
    },
    {
        "time": 318,
        "price": 15.25,
        "avg": 15.19834041595459,
        "volume": 45000,
        "holdAmount": 686320
    },
    {
        "time": 319,
        "price": 15.260000228881836,
        "avg": 15.19890022277832,
        "volume": 41090,
        "holdAmount": 626624
    },
    {
        "time": 320,
        "price": 15.260000228881836,
        "avg": 15.199424743652344,
        "volume": 35400,
        "holdAmount": 540128
    },
    {
        "time": 321,
        "price": 15.270001411437988,
        "avg": 15.199749946594238,
        "volume": 21300,
        "holdAmount": 325020
    },
    {
        "time": 322,
        "price": 15.270001411437988,
        "avg": 15.199970245361328,
        "volume": 13100,
        "holdAmount": 200012
    },
    {
        "time": 323,
        "price": 15.270001411437988,
        "avg": 15.200362205505371,
        "volume": 22895,
        "holdAmount": 349624
    },
    {
        "time": 324,
        "price": 15.279999732971191,
        "avg": 15.20079517364502,
        "volume": 23300,
        "holdAmount": 355976
    },
    {
        "time": 325,
        "price": 15.279999732971191,
        "avg": 15.200976371765137,
        "volume": 9400,
        "holdAmount": 143624
    },
    {
        "time": 326,
        "price": 15.279999732971191,
        "avg": 15.201332092285156,
        "volume": 19325,
        "holdAmount": 295240
    },
    {
        "time": 327,
        "price": 15.270001411437988,
        "avg": 15.202329635620117,
        "volume": 52400,
        "holdAmount": 800696
    },
    {
        "time": 328,
        "price": 15.300000190734863,
        "avg": 15.203675270080566,
        "volume": 66300,
        "holdAmount": 1013340
    },
    {
        "time": 329,
        "price": 15.300000190734863,
        "avg": 15.204474449157715,
        "volume": 36300,
        "holdAmount": 555168
    },
    {
        "time": 330,
        "price": 15.300000190734863,
        "avg": 15.204869270324707,
        "volume": 17900,
        "holdAmount": 273860
    },
    {
        "time": 331,
        "price": 15.3100004196167,
        "avg": 15.205391883850098,
        "volume": 23960,
        "holdAmount": 366600
    },
    {
        "time": 332,
        "price": 15.3100004196167,
        "avg": 15.205950736999512,
        "volume": 23600,
        "holdAmount": 361296
    },
    {
        "time": 333,
        "price": 15.319999694824219,
        "avg": 15.206551551818848,
        "volume": 23400,
        "holdAmount": 358440
    },
    {
        "time": 334,
        "price": 15.300000190734863,
        "avg": 15.207198143005371,
        "volume": 27700,
        "holdAmount": 424160
    },
    {
        "time": 335,
        "price": 15.3100004196167,
        "avg": 15.207948684692383,
        "volume": 34000,
        "holdAmount": 520328
    },
    {
        "time": 336,
        "price": 15.3100004196167,
        "avg": 15.208374977111816,
        "volume": 19600,
        "holdAmount": 300008
    },
    {
        "time": 337,
        "price": 15.3100004196167,
        "avg": 15.209097862243652,
        "volume": 33400,
        "holdAmount": 511264
    },
    {
        "time": 338,
        "price": 15.3100004196167,
        "avg": 15.209637641906738,
        "volume": 23500,
        "holdAmount": 359880
    },
    {
        "time": 339,
        "price": 15.3100004196167,
        "avg": 15.21059799194336,
        "volume": 44100,
        "holdAmount": 675120
    },
    {
        "time": 340,
        "price": 15.3100004196167,
        "avg": 15.21214771270752,
        "volume": 72500,
        "holdAmount": 1109976
    },
    {
        "time": 341,
        "price": 15.319999694824219,
        "avg": 15.21311092376709,
        "volume": 44435,
        "holdAmount": 680584
    },
    {
        "time": 342,
        "price": 15.3100004196167,
        "avg": 15.213934898376465,
        "volume": 36000,
        "holdAmount": 551552
    },
    {
        "time": 343,
        "price": 15.329999923706055,
        "avg": 15.214115142822266,
        "volume": 7600,
        "holdAmount": 116488
    },
    {
        "time": 344,
        "price": 15.319999694824219,
        "avg": 15.21491813659668,
        "volume": 33800,
        "holdAmount": 518016
    },
    {
        "time": 345,
        "price": 15.319999694824219,
        "avg": 15.215154647827148,
        "volume": 10900,
        "holdAmount": 166992
    },
    {
        "time": 346,
        "price": 15.329999923706055,
        "avg": 15.215339660644531,
        "volume": 8100,
        "holdAmount": 124120
    },
    {
        "time": 347,
        "price": 15.319999694824219,
        "avg": 15.215740203857422,
        "volume": 19000,
        "holdAmount": 291032
    },
    {
        "time": 348,
        "price": 15.3100004196167,
        "avg": 15.21669864654541,
        "volume": 46365,
        "holdAmount": 709968
    },
    {
        "time": 349,
        "price": 15.300000190734863,
        "avg": 15.217888832092285,
        "volume": 69300,
        "holdAmount": 1060400
    },
    {
        "time": 350,
        "price": 15.3100004196167,
        "avg": 15.218467712402344,
        "volume": 33635,
        "holdAmount": 514784
    },
    {
        "time": 351,
        "price": 15.3100004196167,
        "avg": 15.219021797180176,
        "volume": 30800,
        "holdAmount": 471536
    },
    {
        "time": 352,
        "price": 15.300000190734863,
        "avg": 15.219918251037598,
        "volume": 52665,
        "holdAmount": 805968
    },
    {
        "time": 353,
        "price": 15.300000190734863,
        "avg": 15.22010612487793,
        "volume": 12000,
        "holdAmount": 183600
    },
    {
        "time": 354,
        "price": 15.300000190734863,
        "avg": 15.221117973327637,
        "volume": 64800,
        "holdAmount": 990672
    },
    {
        "time": 355,
        "price": 15.289999961853027,
        "avg": 15.22135066986084,
        "volume": 15900,
        "holdAmount": 243224
    },
    {
        "time": 356,
        "price": 15.3100004196167,
        "avg": 15.222036361694336,
        "volume": 40900,
        "holdAmount": 625272
    },
    {
        "time": 357,
        "price": 15.279999732971191,
        "avg": 15.223137855529785,
        "volume": 94400,
        "holdAmount": 1441696
    },
    {
        "time": 358,
        "price": 15.289999961853027,
        "avg": 15.223298072814941,
        "volume": 11400,
        "holdAmount": 174392
    },
    {
        "time": 359,
        "price": 15.300000190734863,
        "avg": 15.224260330200195,
        "volume": 67900,
        "holdAmount": 1038848
    },
    {
        "time": 360,
        "price": 15.300000190734863,
        "avg": 15.224579811096191,
        "volume": 22900,
        "holdAmount": 350360
    },
    {
        "time": 361,
        "price": 15.300000190734863,
        "avg": 15.2252779006958,
        "volume": 50600,
        "holdAmount": 774168
    },
    {
        "time": 362,
        "price": 15.300000190734863,
        "avg": 15.226119041442871,
        "volume": 57100,
        "holdAmount": 873944
    },
    {
        "time": 363,
        "price": 15.319999694824219,
        "avg": 15.226962089538574,
        "volume": 51900,
        "holdAmount": 794896
    },
    {
        "time": 364,
        "price": 15.3100004196167,
        "avg": 15.227018356323242,
        "volume": 3700,
        "holdAmount": 56640
    },
    {
        "time": 365,
        "price": 15.3100004196167,
        "avg": 15.227438926696777,
        "volume": 30300,
        "holdAmount": 463600
    },
    {
        "time": 366,
        "price": 15.3100004196167,
        "avg": 15.228455543518066,
        "volume": 64700,
        "holdAmount": 990952
    },
    {
        "time": 367,
        "price": 15.3100004196167,
        "avg": 15.228670120239258,
        "volume": 14700,
        "holdAmount": 225088
    },
    {
        "time": 368,
        "price": 15.3100004196167,
        "avg": 15.229111671447754,
        "volume": 30700,
        "holdAmount": 470016
    },
    {
        "time": 369,
        "price": 15.319999694824219,
        "avg": 15.229331016540527,
        "volume": 15300,
        "holdAmount": 233984
    },
    {
        "time": 370,
        "price": 15.319999694824219,
        "avg": 15.229430198669434,
        "volume": 6500,
        "holdAmount": 99544
    },
    {
        "time": 371,
        "price": 15.300000190734863,
        "avg": 15.230194091796875,
        "volume": 49100,
        "holdAmount": 752176
    },
    {
        "time": 372,
        "price": 15.3100004196167,
        "avg": 15.231189727783203,
        "volume": 68500,
        "holdAmount": 1048984
    },
    {
        "time": 373,
        "price": 15.3100004196167,
        "avg": 15.232001304626465,
        "volume": 54300,
        "holdAmount": 831816
    },
    {
        "time": 374,
        "price": 15.3100004196167,
        "avg": 15.232065200805664,
        "volume": 5500,
        "holdAmount": 84152
    },
    {
        "time": 375,
        "price": 15.319999694824219,
        "avg": 15.232619285583496,
        "volume": 38000,
        "holdAmount": 582104
    },
    {
        "time": 376,
        "price": 15.329999923706055,
        "avg": 15.233534812927246,
        "volume": 60606,
        "holdAmount": 928960
    },
    {
        "time": 377,
        "price": 15.329999923706055,
        "avg": 15.234071731567383,
        "volume": 38000,
        "holdAmount": 582304
    },
    {
        "time": 378,
        "price": 15.329999923706055,
        "avg": 15.234490394592285,
        "volume": 26496,
        "holdAmount": 406136
    },
    {
        "time": 379,
        "price": 15.329999923706055,
        "avg": 15.234930992126465,
        "volume": 29804,
        "holdAmount": 456720
    },
    {
        "time": 380,
        "price": 15.3100004196167,
        "avg": 15.236102104187012,
        "volume": 74600,
        "holdAmount": 1143768
    },
    {
        "time": 381,
        "price": 15.319999694824219,
        "avg": 15.236288070678711,
        "volume": 15000,
        "holdAmount": 229672
    },
    {
        "time": 382,
        "price": 15.34000015258789,
        "avg": 15.236727714538574,
        "volume": 29565,
        "holdAmount": 453160
    },
    {
        "time": 383,
        "price": 15.350000381469727,
        "avg": 15.237622261047363,
        "volume": 55601,
        "holdAmount": 852792
    },
    {
        "time": 384,
        "price": 15.350000381469727,
        "avg": 15.239251136779785,
        "volume": 94000,
        "holdAmount": 1442848
    },
    {
        "time": 385,
        "price": 15.35999870300293,
        "avg": 15.240764617919922,
        "volume": 82800,
        "holdAmount": 1271744
    },
    {
        "time": 386,
        "price": 15.369999885559082,
        "avg": 15.243124008178711,
        "volume": 121200,
        "holdAmount": 1862624
    },
    {
        "time": 387,
        "price": 15.39000129699707,
        "avg": 15.2440185546875,
        "volume": 42800,
        "holdAmount": 658328
    },
    {
        "time": 388,
        "price": 15.380000114440918,
        "avg": 15.244668006896973,
        "volume": 31200,
        "holdAmount": 479920
    }
]);


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./example/scripts/index.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./example/scripts/index.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  padding: 0;\n  margin: 0; }\n", "", {"version":3,"sources":["/home/travis/build/gitpadtech/finance-chart/example/scripts/index.scss"],"names":[],"mappings":"AAAA;EACE,WAAU;EACV,UAAS,EACV","file":"index.scss","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/chart/chart.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/chart/chart.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".finance-chart {\n  position: relative; }\n  .finance-chart canvas {\n    -webkit-tap-highlight-color: transparent;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.chart-detail {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  padding: 8px;\n  width: 120px;\n  background: #F0F2F2;\n  top: 30px;\n  right: 0;\n  display: none;\n  color: #5E667F;\n  font-size: 12px; }\n\n.chart-detail__title {\n  text-align: center;\n  padding-bottom: 6px; }\n\n.chart-detail__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.chart-detail__row__name,\n.chart-detail__row__value {\n  display: inline-block; }\n", "", {"version":3,"sources":["/home/travis/build/gitpadtech/finance-chart/src/chart/chart.scss"],"names":[],"mappings":"AAAA;EACE,mBAAkB,EAKnB;EAND;IAGI,yCAAwC;IACxC,0BAAiB;OAAjB,uBAAiB;QAAjB,sBAAiB;YAAjB,kBAAiB,EAClB;;AAEH;EACE,+BAAsB;UAAtB,uBAAsB;EACtB,mBAAkB;EAClB,aAAY;EACZ,aAAY;EACZ,oBAAmB;EACnB,UAAS;EACT,SAAQ;EACR,cAAa;EACb,eAAc;EACd,gBAAe,EAChB;;AACD;EACE,mBAAkB;EAClB,oBAAmB,EACpB;;AACD;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,0BAA8B;MAA9B,uBAA8B;UAA9B,+BAA8B,EAC/B;;AACD;;EAEE,sBAAqB,EACtB","file":"chart.scss","sourcesContent":[".finance-chart {\n  position: relative;\n  canvas {\n    -webkit-tap-highlight-color: transparent;\n    user-select: none;\n  }\n}\n.chart-detail {\n  box-sizing: border-box;\n  position: absolute;\n  padding: 8px;\n  width: 120px;\n  background: #F0F2F2;\n  top: 30px;\n  right: 0;\n  display: none;\n  color: #5E667F;\n  font-size: 12px;\n}\n.chart-detail__title {\n  text-align: center;\n  padding-bottom: 6px;\n}\n.chart-detail__row {\n  display: flex;\n  justify-content: space-between;\n}\n.chart-detail__row__name, \n.chart-detail__row__value {\n  display: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/d3-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-array/index.js ***!
  \****************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _src_ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _src_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/bisector */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _src_bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/cross */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _src_cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/descending */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _src_descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/deviation */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _src_deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/extent */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _src_extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/histogram */ "./node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _src_histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _src_threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _src_threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _src_threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/max */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _src_max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/mean */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _src_mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/median */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _src_median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/merge */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/min */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _src_min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/pairs */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _src_pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/permute */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _src_permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/quantile */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/range */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _src_range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _src_scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/scan */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _src_scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _src_shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/shuffle */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _src_shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _src_sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/sum */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _src_sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _src_ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _src_transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/transpose */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _src_transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _src_variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/variance */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _src_variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _src_zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/zip */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _src_zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-collection/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-collection/index.js ***!
  \*********************************************/
/*! exports provided: nest, set, map, keys, values, entries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/nest */ "./node_modules/d3-collection/src/nest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return _src_nest__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/set */ "./node_modules/d3-collection/src/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _src_set__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/map */ "./node_modules/d3-collection/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _src_map__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/keys */ "./node_modules/d3-collection/src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _src_keys__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/values */ "./node_modules/d3-collection/src/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _src_values__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/entries */ "./node_modules/d3-collection/src/entries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return _src_entries__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
/*! exports provided: prefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


function Set() {}

var proto = _map__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[_map__WEBPACK_IMPORTED_MODULE_0__["prefix"] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),

/***/ "./node_modules/d3-color/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-color/index.js ***!
  \****************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/color */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _src_color__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _src_color__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _src_color__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _src_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lab */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/cubehelix */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-format/index.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-format/index.js ***!
  \*****************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/defaultLocale */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/locale */ "./node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _src_locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_formatSpecifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _src_formatSpecifier__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_precisionFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/precisionFixed */ "./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _src_precisionFixed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_precisionPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/precisionPrefix */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _src_precisionPrefix__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_precisionRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/precisionRound */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _src_precisionRound__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded */ "./node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-format/src/identity.js");









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(_formatGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(locale.grouping, locale.thousands) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(_formatNumerals__WEBPACK_IMPORTED_MODULE_2__["default"])(locale.numerals) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-interpolate/index.js ***!
  \**********************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/value */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _src_value__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _src_array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _src_basis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _src_basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _src_date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _src_number__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _src_object__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_round__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/round */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _src_round__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _src_string__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_transform_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/transform/index */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _src_transform_index__WEBPACK_IMPORTED_MODULE_9__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _src_transform_index__WEBPACK_IMPORTED_MODULE_9__["interpolateTransformSvg"]; });

/* harmony import */ var _src_zoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/zoom */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _src_zoom__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_rgb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["rgbBasisClosed"]; });

/* harmony import */ var _src_hsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/hsl */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _src_hsl__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _src_hsl__WEBPACK_IMPORTED_MODULE_12__["hslLong"]; });

/* harmony import */ var _src_lab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/lab */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_hcl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/hcl */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _src_hcl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _src_hcl__WEBPACK_IMPORTED_MODULE_14__["hclLong"]; });

/* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["cubehelixLong"]; });

/* harmony import */ var _src_piecewise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/piecewise */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _src_piecewise__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_17__["default"]; });





















/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");









/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Array.isArray(b) ? _array__WEBPACK_IMPORTED_MODULE_2__["default"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-path/index.js":
/*!***************************************!*\
  !*** ./node_modules/d3-path/index.js ***!
  \***************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/path */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _src_path__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-scale/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-scale/index.js ***!
  \****************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/band */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _src_band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _src_band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _src_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/identity */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _src_identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _src_linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/log */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _src_log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ordinal */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"]; });

/* harmony import */ var _src_pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/pow */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _src_pow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _src_pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/quantile */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/threshold */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _src_threshold__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/time */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _src_time__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/utcTime */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _src_utcTime__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_sequential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/sequential */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _src_sequential__WEBPACK_IMPORTED_MODULE_11__["default"]; });


























/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
/*! exports provided: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");



function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_1__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: deinterpolateLinear, copy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deinterpolateLinear", function() { return deinterpolateLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_2__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_4__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_2__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, log().base(base));
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, pow().exponent(exponent));
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_5__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_6__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return calendar(d3_time__WEBPACK_IMPORTED_MODULE_2__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-shape/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-shape/index.js ***!
  \****************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/arc */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _src_arc__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/area */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _src_area__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/line */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _src_line__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pie */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _src_pie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/areaRadial */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _src_areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _src_areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _src_lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _src_lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _src_pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/link/index */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _src_link_index__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _src_link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _src_link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _src_symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/symbol */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _src_symbol__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _src_symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _src_symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _src_symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _src_symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _src_symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _src_symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _src_symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _src_symbol_triangle__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _src_symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/curve/basisClosed */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _src_curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/curve/basisOpen */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _src_curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/curve/basis */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _src_curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/curve/bundle */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _src_curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _src_curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/curve/cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _src_curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _src_curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/curve/cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _src_curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _src_curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/curve/cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _src_curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _src_curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/curve/catmullRomClosed */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _src_curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _src_curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/curve/catmullRomOpen */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _src_curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _src_curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/curve/catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _src_curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _src_curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/curve/linearClosed */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _src_curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _src_curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _src_curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _src_curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/curve/monotone */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _src_curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _src_curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _src_curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/curve/natural */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _src_curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _src_curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/curve/step */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _src_curve_step__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _src_curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _src_curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _src_stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/stack */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _src_stack__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _src_offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/offset/expand */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _src_offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _src_offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/offset/diverging */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _src_offset_diverging__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _src_offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _src_offset_none__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _src_offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/offset/silhouette */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _src_offset_silhouette__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _src_offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./src/offset/wiggle */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _src_offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _src_order_ascending__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./src/order/ascending */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _src_order_ascending__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _src_order_descending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./src/order/descending */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _src_order_descending__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _src_order_insideOut__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./src/order/insideOut */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _src_order_insideOut__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _src_order_none__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./src/order/none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _src_order_none__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _src_order_reverse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./src/order/reverse */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _src_order_reverse__WEBPACK_IMPORTED_MODULE_41__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) {
          var oc = da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/index.js");
/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-time-format/index.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time-format/index.js ***!
  \**********************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/locale */ "./node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _src_locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_isoFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _src_isoFormat__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_isoParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/isoParse */ "./node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _src_isoParse__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/d3-time/index.js":
/*!***************************************!*\
  !*** ./node_modules/d3-time/index.js ***!
  \***************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/interval */ "./node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _src_interval__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_millisecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/millisecond */ "./node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _src_second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/second */ "./node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _src_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/minute */ "./node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _src_minute__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _src_minute__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _src_hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/hour */ "./node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _src_hour__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _src_hour__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _src_day__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/day */ "./node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _src_day__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _src_day__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _src_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/week */ "./node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _src_month__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/month */ "./node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _src_month__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _src_month__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _src_year__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/year */ "./node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _src_year__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _src_year__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/utcMinute */ "./node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _src_utcHour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/utcHour */ "./node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _src_utcHour__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _src_utcHour__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _src_utcDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/utcDay */ "./node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _src_utcDay__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _src_utcDay__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/utcWeek */ "./node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/utcMonth */ "./node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _src_utcYear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/utcYear */ "./node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _src_utcYear__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _src_utcYear__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var day = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var hour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  var offset = date.getTimezoneOffset() * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"] % _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
  if (offset < 0) offset += _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
  date.setTime(Math.floor((+date - offset) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"] + offset);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var minute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(Math.floor(date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var month = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var second = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(Math.floor(date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var year = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/detect-hover/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/detect-hover/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectHover = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;
    }
  }
};

detectHover.update();
exports.default = detectHover;

/***/ }),

/***/ "./node_modules/detect-it/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-it/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectHover = __webpack_require__(/*! detect-hover */ "./node_modules/detect-hover/lib/index.js");

var _detectHover2 = _interopRequireDefault(_detectHover);

var _detectPointer = __webpack_require__(/*! detect-pointer */ "./node_modules/detect-pointer/lib/index.js");

var _detectPointer2 = _interopRequireDefault(_detectPointer);

var _detectTouchEvents = __webpack_require__(/*! detect-touch-events */ "./node_modules/detect-touch-events/lib/index.js");

var _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);

var _detectPassiveEvents = __webpack_require__(/*! detect-passive-events */ "./node_modules/detect-passive-events/lib/index.js");

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * detectIt object structure
 * const detectIt = {
 *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',
 *   passiveEvents: boolean,
 *   hasTouch: boolean,
 *   hasMouse: boolean,
 *   maxTouchPoints: number,
 *   primaryHover: 'hover' / 'none',
 *   primaryPointer: 'fine' / 'coarse' / 'none',
 *   state: {
 *     detectHover,
 *     detectPointer,
 *     detectTouchEvents,
 *     detectPassiveEvents,
 *   },
 *   update() {...},
 * }
 */

function determineDeviceType(hasTouch, anyHover, anyFine, state) {
  // A hybrid device is one that both hasTouch and any input device can hover
  // or has a fine pointer.
  if (hasTouch && (anyHover || anyFine)) return 'hybrid';

  // workaround for browsers that have the touch events api,
  // and have implemented Level 4 media queries but not the
  // hover and pointer media queries, so the tests are all false (notable Firefox)
  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly
  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid
  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectHover[key] === false;
  }) && Object.keys(state.detectPointer).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectPointer[key] === false;
  })) {
    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {
      return 'touchOnly';
    }
    return 'hybrid';
  }

  // In almost all cases a device that doesn’t support touch will have a mouse,
  // but there may be rare exceptions. Note that it doesn’t work to do additional tests
  // based on hover and pointer media queries as older browsers don’t support these.
  // Essentially, 'mouseOnly' is the default.
  return hasTouch ? 'touchOnly' : 'mouseOnly';
}

var detectIt = {
  state: {
    detectHover: _detectHover2.default,
    detectPointer: _detectPointer2.default,
    detectTouchEvents: _detectTouchEvents2.default,
    detectPassiveEvents: _detectPassiveEvents2.default
  },
  update: function update() {
    detectIt.state.detectHover.update();
    detectIt.state.detectPointer.update();
    detectIt.state.detectTouchEvents.update();
    detectIt.state.detectPassiveEvents.update();
    detectIt.updateOnlyOwnProperties();
  },
  updateOnlyOwnProperties: function updateOnlyOwnProperties() {
    if (typeof window !== 'undefined') {
      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;

      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;

      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);

      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';

      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||
      // deviceType is hybrid:
      detectIt.state.detectPointer.fine && 'mouse' || detectIt.state.detectPointer.coarse && 'touch' ||
      // if there's no support for hover media queries but detectIt determined it's
      // a hybrid  device, then assume it's a mouse first device
      'mouse';

      // issue with Windows Chrome on hybrid devices starting in version 59 where
      // media queries represent a touch only device, so if the browser is an
      // affected Windows Chrome version and hasTouch,
      // then assume it's a hybrid with primaryInput mouse
      // note that version 62 of Chrome fixes this issue
      // see https://github.com/rafrex/detect-it/issues/8
      var inVersionRange = function inVersionRange(version) {
        return version >= 59 && version < 62;
      };
      var isAffectedWindowsChromeVersion = /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && inVersionRange(parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10));

      if (isAffectedWindowsChromeVersion && detectIt.hasTouch) {
        detectIt.deviceType = 'hybrid';
        detectIt.hasMouse = true;
        detectIt.primaryInput = 'mouse';
      }
    }
  }
};

detectIt.updateOnlyOwnProperties();
exports.default = detectIt;

/***/ }),

/***/ "./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "./node_modules/detect-pointer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/detect-pointer/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectPointer = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;
      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;
      detectPointer.none = window.matchMedia('(pointer: none)').matches;
      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  }
};

detectPointer.update();
exports.default = detectPointer;

/***/ }),

/***/ "./node_modules/detect-touch-events/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/detect-touch-events/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectTouchEvents = {
  update: function update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  }
};

detectTouchEvents.update();
exports.default = detectTouchEvents;

/***/ }),

/***/ "./node_modules/lodash.clamp/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.clamp/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),

/***/ "./node_modules/lodash.uniq/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.uniq/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniq;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/algorithm/arrays.ts":
/*!*********************************!*\
  !*** ./src/algorithm/arrays.ts ***!
  \*********************************/
/*! exports provided: trimNulls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimNulls", function() { return trimNulls; });
function trimNulls(arr) {
    var len = arr.length;
    var i = 0;
    while ((arr[i] === null || typeof arr[i] === 'undefined')
        && i < len) {
        ++i;
    }
    return {
        deleted: i,
        result: arr.slice(i),
    };
}


/***/ }),

/***/ "./src/algorithm/color.ts":
/*!********************************!*\
  !*** ./src/algorithm/color.ts ***!
  \********************************/
/*! exports provided: determineCandleColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineCandleColor", function() { return determineCandleColor; });
function determineCandleColor(current, currentIndex, range) {
    if (current.close > current.open) {
        return 1;
    }
    else if (current.close < current.open) {
        return -1;
    }
    else {
        var yesterday = range.data[range.visibleStartIndex() + currentIndex - 1];
        if (yesterday) {
            return current.close >= yesterday.close ? 1 : -1;
        }
        else {
            return 1;
        }
    }
}


/***/ }),

/***/ "./src/algorithm/date.ts":
/*!*******************************!*\
  !*** ./src/algorithm/date.ts ***!
  \*******************************/
/*! exports provided: formateDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formateDate", function() { return formateDate; });
function formateDate(date, format) {
    var d;
    if (typeof date === 'number') {
        d = new Date(date);
    }
    else if (typeof date === 'string') {
        d = new Date(date.replace(/-/g, '/'));
    }
    else {
        d = date;
    }
    var dict = {
        yyyy: d.getFullYear(),
        M: d.getMonth() + 1,
        d: d.getDate(),
        H: d.getHours(),
        m: d.getMinutes(),
        s: d.getSeconds(),
        MM: ("" + (d.getMonth() + 101)).substr(1),
        dd: ("" + (d.getDate() + 100)).substr(1),
        HH: ("" + (d.getHours() + 100)).substr(1),
        mm: ("" + (d.getMinutes() + 100)).substr(1),
        ss: ("" + (d.getSeconds() + 100)).substr(1),
    };
    return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function (key) { return dict[key]; });
}


/***/ }),

/***/ "./src/algorithm/divide.ts":
/*!*********************************!*\
  !*** ./src/algorithm/divide.ts ***!
  \*********************************/
/*! exports provided: divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
function divide(minValue, maxValue, length) {
    if (length === void 0) { length = 5; }
    var step = (maxValue - minValue) / (length - 1);
    var result = [minValue];
    for (var i = 1; i < length - 1; i += 1) {
        result.push(minValue + (step * i));
    }
    result.push(maxValue);
    return result;
}


/***/ }),

/***/ "./src/algorithm/range.ts":
/*!********************************!*\
  !*** ./src/algorithm/range.ts ***!
  \********************************/
/*! exports provided: MovableRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableRange", function() { return MovableRange; });
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clamp */ "./node_modules/lodash.clamp/index.js");
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_0__);

var MovableRange = /** @class */ (function () {
    function MovableRange(data, length) {
        this.data = data;
        this.endPosition = this.data.length;
        this.visibleLength = length;
    }
    MovableRange.prototype.setData = function (data) {
        var minPosition = this.visibleLength > data.length ? data.length : this.visibleLength;
        this.endPosition = lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(data.length - (this.data.length - this.endPosition), minPosition, data.length);
        this.data = data;
    };
    MovableRange.prototype.setVisibleLength = function (length) {
        this.visibleLength = length;
        var minPosition = length > this.data.length ? this.data.length : length;
        this.endPosition = lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(this.endPosition, minPosition, this.data.length);
    };
    MovableRange.prototype.visible = function () {
        return this.data.slice(this.visibleStartIndex(), this.endPosition);
    };
    MovableRange.prototype.visibleStartIndex = function () {
        return lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(this.endPosition - this.visibleLength, 0, this.data.length);
    };
    /**
     * move visible range
     * @param step move step
     * @returns return true when visibleRange moved
     */
    MovableRange.prototype.move = function (step) {
        var minPosition = this.visibleLength > this.data.length ?
            this.data.length : this.visibleLength;
        var pos = lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(this.endPosition + step, minPosition, this.data.length);
        var moved = this.endPosition !== pos;
        this.endPosition = pos;
        return moved;
    };
    return MovableRange;
}());



/***/ }),

/***/ "./src/algorithm/tradetime.ts":
/*!************************************!*\
  !*** ./src/algorithm/tradetime.ts ***!
  \************************************/
/*! exports provided: TradeTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeTime", function() { return TradeTime; });
var TradeTime = /** @class */ (function () {
    function TradeTime(tradeTimes) {
        this.tradeTimes = tradeTimes;
    }
    TradeTime.prototype.getMinute = function (fromIndex) {
        if (fromIndex < 0) {
            throw new Error('parameter fromIndex expect to be greater than 0');
        }
        var inSegment = -1;
        var tradeTimes = this.tradeTimes;
        for (var i = 0, len = tradeTimes.length; i < len; ++i) {
            var _a = tradeTimes[i], open_1 = _a.open, close_1 = _a.close;
            if (open_1 + fromIndex >= close_1) {
                fromIndex -= close_1 - open_1;
            }
            else {
                inSegment = i;
                break;
            }
        }
        if (inSegment < 0 || inSegment >= tradeTimes.length) {
            throw new Error('data index not in trade time');
        }
        return tradeTimes[inSegment].open + fromIndex;
    };
    TradeTime.prototype.isTrading = function (minuteOffset) {
        var trading = false;
        var tradetimes = this.tradeTimes;
        for (var i = 0, len = this.tradeTimes.length; i < len; ++i) {
            var _a = this.tradeTimes[i], open_2 = _a.open, close_2 = _a.close;
            if (minuteOffset >= open_2 && minuteOffset < close_2) {
                trading = true;
                break;
            }
        }
        return trading;
    };
    TradeTime.prototype.totalMinutes = function () {
        return this.tradeTimes.reduce(function (prevResult, curTradeTime) {
            return prevResult + (curTradeTime.close - curTradeTime.open);
        }, 0);
    };
    return TradeTime;
}());



/***/ }),

/***/ "./src/chart/auxiliary/volume-drawer.ts":
/*!**********************************************!*\
  !*** ./src/chart/auxiliary/volume-drawer.ts ***!
  \**********************************************/
/*! exports provided: VolumeWhiteTheme, VolumeBlackTheme, VolumeDrawer, TimeShareVolumeDrawer, CandleStickVolumeDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeWhiteTheme", function() { return VolumeWhiteTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeBlackTheme", function() { return VolumeBlackTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeDrawer", function() { return VolumeDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeShareVolumeDrawer", function() { return TimeShareVolumeDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandleStickVolumeDrawer", function() { return CandleStickVolumeDrawer; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.uniq */ "./node_modules/lodash.uniq/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.././paint-utils/index */ "./src/paint-utils/index.ts");
/* harmony import */ var _algorithm_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../algorithm/color */ "./src/algorithm/color.ts");
/* harmony import */ var _algorithm_divide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../algorithm/divide */ "./src/algorithm/divide.ts");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chart */ "./src/chart/chart.ts");
/* harmony import */ var _chart_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chart-title */ "./src/chart/chart-title.ts");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../drawer */ "./src/chart/drawer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VolumeWhiteTheme = {
    same: '#5E6572',
    volumeText: '#F78081',
};
var VolumeBlackTheme = {
    same: '#5E6572',
    volumeText: '#F78081',
};
var shortenVolume = function (v) {
    var scaleV = v / VolumeDrawer.proportion;
    if (scaleV > 10000) {
        return (scaleV / 10000).toFixed(2);
    }
    return scaleV.toFixed(2);
};
var volumeLabel = function (v) {
    var scaleV = v / VolumeDrawer.proportion;
    if (scaleV > 10000) {
        return "VOL: " + (scaleV / 10000).toFixed(2) + "\u4E07";
    }
    return "VOL: " + scaleV.toFixed(2);
};
/**
 * Volume chart drawer
 */
var VolumeDrawer = /** @class */ (function (_super) {
    __extends(VolumeDrawer, _super);
    function VolumeDrawer(chart, options) {
        var _this = _super.call(this, chart, options) || this;
        _this.theme = Object.assign({
            volume: VolumeBlackTheme,
        }, _this.chart.theme);
        _this.xAxisTickHeight = 0;
        _this.context = chart.context;
        _this.titleDrawer = new _chart_title__WEBPACK_IMPORTED_MODULE_6__["ChartTitle"](_this.context, '成交量', [
            {
                x: 60,
                label: volumeLabel(0),
                color: _this.theme.volume.volumeText,
            },
        ], _this.theme.titleBackground, _this.theme.title, _this.chart.options.resolution);
        return _this;
    }
    VolumeDrawer.prototype.calcDeltaPrice = function (currentValue, currentIndex, data) {
        return 1;
    };
    VolumeDrawer.prototype.setRange = function (range) {
        var data = range.visible();
        if (data.length > 0) {
            this.maxValue = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["max"])(data, function (d) { return d.volume; });
        }
        else {
            this.maxValue = 1000 * VolumeDrawer.proportion;
        }
        this.minValue = 0;
        _super.prototype.setRange.call(this, range);
    };
    VolumeDrawer.prototype.getYAxisDetail = function (y) {
        return {
            left: shortenVolume(this.yScale.invert(y)),
        };
    };
    VolumeDrawer.prototype.draw = function () {
        var data = this.range.visible();
        this.drawAxes();
        this.drawTitle(this.selectedIndex || data.length - 1);
        this.drawVolumes();
    };
    VolumeDrawer.prototype.drawAxes = function () {
        this.drawYAxis();
    };
    VolumeDrawer.prototype.drawYAxis = function () {
        var _this = this;
        var tickValues = lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()(Object(_algorithm_divide__WEBPACK_IMPORTED_MODULE_4__["divide"])(this.minValue, this.maxValue, 3))
            .map(function (n) { return ({ value: Math.round(n), color: _this.theme.yTick }); });
        tickValues.shift(); // remove first item, 0 volume
        var maxTickValue = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["max"])(tickValues, function (d) { return d.value; }) / VolumeDrawer.proportion;
        var useWUnit = maxTickValue > 10000;
        Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_2__["drawYAxis"])(this.context, tickValues, this.frame, this.yScale, this.chart.options.resolution, true, this.theme.gridLine, function (v, i) {
            // const scaledV = v / VolumeDrawer.proportion
            var r = shortenVolume(v);
            if (useWUnit && i === tickValues.length - 1) {
                r = r + "\u4E07" + VolumeDrawer.unit;
            }
            return r;
        });
    };
    VolumeDrawer.prototype.drawVolumes = function () {
        var _this = this;
        var xScale = this.chart.xScale;
        var _a = this, ctx = _a.context, yScale = _a.yScale, chartFrame = _a.chartFrame, range = _a.range;
        var data = range.visible();
        data.forEach(function (d, i) {
            var deltaPrice = _this.calcDeltaPrice(d, i, data);
            if (deltaPrice > 0) {
                ctx.fillStyle = _this.theme.rise;
            }
            else if (deltaPrice < 0) {
                ctx.fillStyle = _this.theme.fall;
            }
            else {
                ctx.fillStyle = _this.theme.volume.same;
            }
            var x = xScale(i);
            var y = yScale(d.volume);
            var height = chartFrame.height - (y - chartFrame.y);
            var width = xScale(1) - xScale(0);
            width -= width * 0.2;
            ctx.fillRect(x - width / 2, y, width, height);
        });
    };
    VolumeDrawer.prototype.drawTitle = function (i) {
        var data = this.range.visible();
        var d = data[i];
        this.titleDrawer.setLabel(0, volumeLabel(d ? data[i].volume : 0));
        this.titleDrawer.draw(__assign({}, this.frame, { height: this.titleHeight }));
    };
    VolumeDrawer.proportion = 100;
    VolumeDrawer.unit = '手';
    __decorate([
        Object(_chart__WEBPACK_IMPORTED_MODULE_5__["autoResetStyle"])()
    ], VolumeDrawer.prototype, "drawVolumes", null);
    return VolumeDrawer;
}(_drawer__WEBPACK_IMPORTED_MODULE_7__["Drawer"]));

var TimeShareVolumeDrawer = /** @class */ (function (_super) {
    __extends(TimeShareVolumeDrawer, _super);
    function TimeShareVolumeDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeShareVolumeDrawer.prototype.calcDeltaPrice = function (currentValue, currentIndex, data) {
        if (currentIndex === 0) {
            return 1;
        }
        return currentValue.price - data[currentIndex - 1].price;
    };
    return TimeShareVolumeDrawer;
}(VolumeDrawer));

var CandleStickVolumeDrawer = /** @class */ (function (_super) {
    __extends(CandleStickVolumeDrawer, _super);
    function CandleStickVolumeDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandleStickVolumeDrawer.prototype.calcDeltaPrice = function (currentValue, currentIndex) {
        var range = this.range;
        return Object(_algorithm_color__WEBPACK_IMPORTED_MODULE_3__["determineCandleColor"])(currentValue, currentIndex, range);
    };
    return CandleStickVolumeDrawer;
}(VolumeDrawer));



/***/ }),

/***/ "./src/chart/candle-stick-drawer.ts":
/*!******************************************!*\
  !*** ./src/chart/candle-stick-drawer.ts ***!
  \******************************************/
/*! exports provided: CandleStickDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandleStickDrawer", function() { return CandleStickDrawer; });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.uniq */ "./node_modules/lodash.uniq/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _algorithm_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithm/color */ "./src/algorithm/color.ts");
/* harmony import */ var _algorithm_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithm/date */ "./src/algorithm/date.ts");
/* harmony import */ var _algorithm_divide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithm/divide */ "./src/algorithm/divide.ts");
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paint-utils/index */ "./src/paint-utils/index.ts");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart */ "./src/chart/chart.ts");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawer */ "./src/chart/drawer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CandleStickDrawer = /** @class */ (function (_super) {
    __extends(CandleStickDrawer, _super);
    function CandleStickDrawer(chart, options) {
        var _this = _super.call(this, chart, options) || this;
        _this._count = chart.options.count;
        _this.xTickFormatter = _this.xTickFormatter.bind(_this);
        _this.context = chart.context;
        return _this;
    }
    CandleStickDrawer.prototype.count = function () {
        return this._count;
    };
    CandleStickDrawer.prototype.setRange = function (range) {
        var data = range.visible();
        if (data.length > 0) {
            var keys = ['low', 'high'];
            var minV_1 = Number.MAX_VALUE;
            var maxV_1 = Number.MIN_VALUE;
            var _loop_1 = function (i, lenI) {
                keys.forEach(function (key) {
                    var v = data[i][key];
                    if (v < minV_1) {
                        minV_1 = v;
                    }
                    else if (v > maxV_1) {
                        maxV_1 = v;
                    }
                });
            };
            for (var i = 0, lenI = data.length; i < lenI; ++i) {
                _loop_1(i, lenI);
            }
            this.minValue = minV_1;
            this.maxValue = maxV_1;
        }
        else {
            this.minValue = this.chart.lastPrice;
            this.maxValue = this.chart.lastPrice;
        }
        _super.prototype.setRange.call(this, range);
    };
    CandleStickDrawer.prototype.getYAxisDetail = function (y) {
        return {
            left: this.yScale.invert(y).toFixed(2),
        };
    };
    CandleStickDrawer.prototype.getXAxisDetail = function (i) {
        return this.xTickDetailFormatter(i, this.range.visible());
    };
    CandleStickDrawer.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.drawAxes();
        this.drawCandles();
    };
    CandleStickDrawer.prototype.drawXAxis = function () {
        var _this = this;
        var tickValues = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(Object(_algorithm_divide__WEBPACK_IMPORTED_MODULE_3__["divide"])(0, this.count() - 1, 4)
            .map(function (t) { return Math.floor(t); }));
        Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_4__["drawXAxis"])(this.context, tickValues, this.chartFrame, this.chart.xScale, this.chart.options.resolution, true, this.chart.theme.gridLine, function (v) {
            return _this.xTickFormatter(v, _this.range.visible());
        }, this.chart.theme.xTick);
    };
    CandleStickDrawer.prototype.xTickFormatter = function (i, data) {
        var d = data[i];
        if (d) {
            return Object(_algorithm_date__WEBPACK_IMPORTED_MODULE_2__["formateDate"])(d.time, this.xTickFormat());
        }
        return '';
    };
    CandleStickDrawer.prototype.xTickFormat = function () {
        return 'yyyy/MM';
    };
    CandleStickDrawer.prototype.xTickDetailFormatter = function (i, data) {
        var d = data[i];
        if (d) {
            return Object(_algorithm_date__WEBPACK_IMPORTED_MODULE_2__["formateDate"])(data[i].time, this.xTickDetailFormat());
        }
        return '';
    };
    CandleStickDrawer.prototype.xTickDetailFormat = function () {
        return 'yyyy/MM/dd';
    };
    CandleStickDrawer.prototype.drawAxes = function () {
        this.drawXAxis();
    };
    CandleStickDrawer.prototype.drawCandles = function () {
        var _this = this;
        var xScale = this.chart.xScale;
        var _a = this, ctx = _a.context, yScale = _a.yScale, range = _a.range;
        var resolution = this.chart.options.resolution;
        range.visible().forEach(function (d, i) {
            var maxV = Math.max(d.close, d.open);
            var minV = Math.min(d.close, d.open);
            var y = yScale(maxV);
            var height = Math.max(Math.abs(yScale(d.close) - yScale(d.open)), 1 * resolution);
            var width = xScale(1) - xScale(0);
            width -= width * 0.2;
            var x = xScale(i) - width / 2;
            ctx.fillStyle = Object(_algorithm_color__WEBPACK_IMPORTED_MODULE_1__["determineCandleColor"])(d, i, range) > 0 ?
                _this.chart.theme.rise : _this.chart.theme.fall;
            ctx.fillRect(x, y, width, height);
            var lineWidth = 1 * resolution;
            ctx.fillRect(x + width / 2 - lineWidth / 2, yScale(d.high), lineWidth, yScale(maxV) - yScale(d.high));
            ctx.fillRect(x + width / 2 - lineWidth / 2, yScale(minV), lineWidth, yScale(d.low) - yScale(minV));
        });
    };
    __decorate([
        Object(_chart__WEBPACK_IMPORTED_MODULE_5__["autoResetStyle"])()
    ], CandleStickDrawer.prototype, "drawCandles", null);
    return CandleStickDrawer;
}(_drawer__WEBPACK_IMPORTED_MODULE_6__["Drawer"]));



/***/ }),

/***/ "./src/chart/chart-title.ts":
/*!**********************************!*\
  !*** ./src/chart/chart-title.ts ***!
  \**********************************/
/*! exports provided: ChartTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return ChartTitle; });
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paint-utils/index */ "./src/paint-utils/index.ts");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "./src/chart/chart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartTitle = /** @class */ (function () {
    function ChartTitle(context, title, labels, background, titleColor, resolution) {
        if (background === void 0) { background = 'black'; }
        if (titleColor === void 0) { titleColor = 'white'; }
        if (resolution === void 0) { resolution = 1; }
        this.context = context;
        this.title = title;
        this.labels = labels;
        this.background = background;
        this.titleColor = titleColor;
        this.resolution = resolution;
    }
    ChartTitle.prototype.setLabel = function (i, label) {
        this.labels[i].label = label;
    };
    ChartTitle.prototype.draw = function (frame) {
        var _a = this, ctx = _a.context, background = _a.background, title = _a.title, titleColor = _a.titleColor, resolution = _a.resolution;
        ctx.fillStyle = background;
        ctx.fillRect(frame.x, frame.y, frame.width, frame.height);
        if (title) {
            Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_0__["drawText"])(ctx, title, {
                x: 8 * resolution,
                y: frame.y + 6 * resolution,
            }, {
                font: 11 * resolution + "px sans-serif",
                color: titleColor,
            });
        }
        this.labels.forEach(function (_a) {
            var label = _a.label, x = _a.x, color = _a.color;
            Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_0__["drawText"])(ctx, label, {
                x: x * resolution,
                y: frame.y + 6 * resolution,
            }, {
                font: 11 * resolution + "px sans-serif",
                color: color,
            });
        });
    };
    __decorate([
        Object(_chart__WEBPACK_IMPORTED_MODULE_1__["autoResetStyle"])()
    ], ChartTitle.prototype, "draw", null);
    return ChartTitle;
}());



/***/ }),

/***/ "./src/chart/chart.scss":
/*!******************************!*\
  !*** ./src/chart/chart.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./chart.scss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/chart/chart.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/chart/chart.ts":
/*!****************************!*\
  !*** ./src/chart/chart.ts ***!
  \****************************/
/*! exports provided: autoResetStyle, shouldRedraw, ChartWhiteTheme, ChartBlackTheme, Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoResetStyle", function() { return autoResetStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldRedraw", function() { return shouldRedraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWhiteTheme", function() { return ChartWhiteTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartBlackTheme", function() { return ChartBlackTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! detect-it */ "./node_modules/detect-it/lib/index.js");
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.clamp */ "./node_modules/lodash.clamp/index.js");
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _algorithm_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithm/range */ "./src/algorithm/range.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _chart_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart.scss */ "./src/chart/chart.scss");
/* harmony import */ var _chart_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chart_scss__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function autoResetStyle() {
    // tslint:disable-next-line:only-arrow-functions
    return function (target, propertyKey, descriptor) {
        var raw = target[propertyKey];
        descriptor.value = function () {
            this.context.save();
            var r = raw.apply(this, arguments);
            this.context.restore();
            return r;
        };
        return descriptor;
    };
}
function shouldRedraw() {
    // tslint:disable-next-line:only-arrow-functions
    return function (target, propertyKey, descriptor) {
        var raw = target[propertyKey];
        descriptor.value = function () {
            raw.apply(this, arguments);
            this.drawAtEndOfFrame();
        };
        return descriptor;
    };
}
function createOptions(options) {
    if (options.mainDrawer) {
        if (options.auxiliaryDrawers.length === 0) {
            options.mainRatio = 1;
        }
    }
    return Object.assign({}, {
        lastPrice: 0.01,
        data: [],
        tradeTimes: [],
        theme: ChartBlackTheme,
        resolution: (window.devicePixelRatio || 1),
        count: 240,
        mainRatio: 0.6,
        mainDrawer: null,
        auxiliaryDrawers: [],
    }, options);
}
var InteractiveState;
(function (InteractiveState) {
    InteractiveState[InteractiveState["None"] = 0] = "None";
    InteractiveState[InteractiveState["ShowDetail"] = 1] = "ShowDetail";
    InteractiveState[InteractiveState["Dragging"] = 2] = "Dragging";
    InteractiveState[InteractiveState["Srolling"] = 4] = "Srolling";
})(InteractiveState || (InteractiveState = {}));
var ChartWhiteTheme = {
    rise: '#F55559',
    fall: '#7DCE8D',
    gridLine: '#E7EAEB',
    yTick: '#5E667F',
    xTick: '#5E667F',
    frontSight: '#4B99FB',
    frontSightLabelBackground: '#E2F1FE',
    background: '#ffffff',
    detailColor: '#5E667F',
    detailBackground: '#F0F2F2',
    title: '#5E667F',
    titleBackground: '#F2F4F4',
};
var ChartBlackTheme = {
    rise: '#F55559',
    fall: '#7DCE8D',
    gridLine: '#282D38',
    yTick: '#AEB4BE',
    xTick: '#AEB4BE',
    frontSight: '#4B99FB',
    frontSightLabelBackground: '#1D1F23',
    background: '#1D1F23',
    detailColor: '#7B7E8D',
    detailBackground: '#282E36',
    title: '#AEB4BE',
    titleBackground: '#22252B',
};
var Chart = /** @class */ (function () {
    function Chart(options) {
        this.requestAnimationFrameId = null;
        this.width = 0;
        this.height = 0;
        this.auxiliaryDrawers = [];
        this.selectedAuxiliaryDrawer = 0;
        this.destroyed = false;
        this.interactive = InteractiveState.None;
        this.hasMoved = 0;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.options = createOptions(options);
        this.theme = this.options.theme;
        this.lastPrice = this.options.lastPrice;
        this.resize = this.resize.bind(this);
        this.movableRange = new _algorithm_range__WEBPACK_IMPORTED_MODULE_3__["MovableRange"](this.options.data, 0);
        this.create();
        this.setData(this.options.data);
    }
    Chart.prototype.resize = function () {
        var _this = this;
        var options = this.options;
        this.width = this.rootElement.clientWidth * options.resolution;
        this.height = this.rootElement.clientHeight * options.resolution;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.mainDrawer && this.mainDrawer.resize({
            x: 0,
            y: this.mainChartY,
            width: this.width,
            height: this.mainChartHeight,
        });
        this.auxiliaryDrawers.forEach(function (drawer) {
            drawer.resize({
                x: 0,
                y: _this.auxiliaryChartY,
                width: _this.width,
                height: _this.auxiliaryChartHeight,
            });
        });
        this.resetXScale();
    };
    Chart.prototype.setData = function (data, clean) {
        if (clean === void 0) { clean = false; }
        if (this.destroyed) {
            throw new Error('Chart has been destroyed, method#setData didn\'t allow to be called');
        }
        this.movableRange.setData(data);
        if (clean) {
            this.destroyDrawer();
            this.createDrawer();
        }
        this._resetDrawerData();
    };
    Chart.prototype.drag = function (distance) {
        var dist = distance * this.options.resolution;
        this.hasMoved += dist;
        var width = this.xScale(2) - this.xScale(1);
        var count = this.hasMoved / width;
        count = count > 0 ? Math.floor(count) : Math.ceil(count);
        this.hasMoved %= width;
        if (count !== 0) {
            // reverse direction
            this.move(-count);
        }
    };
    Chart.prototype.move = function (step) {
        var moved = this.movableRange.move(step);
        if (moved) {
            this._resetDrawerData();
        }
        else if (step < 0) {
            // console.log(moved)
        }
    };
    Chart.prototype.setLastPrice = function (value) {
        this.lastPrice = value;
    };
    Chart.prototype.count = function () {
        return this.mainDrawer.count();
    };
    Chart.prototype.resetXScale = function () {
        var resolution = this.options.resolution;
        this.xScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"])()
            .domain([0, this.count() - 1])
            .range([_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_LEFT"] * resolution, this.width - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_RIGHT"] * resolution]);
    };
    Chart.prototype.drawAtEndOfFrame = function () {
        var _this = this;
        if (!this.requestAnimationFrameId) {
            this.requestAnimationFrameId = requestAnimationFrame(function () {
                _this.context.clearRect(0, 0, _this.width, _this.height);
                // if (process.env.NODE_ENV === 'development') {
                //   console.time('rendering cost');
                // }
                _this.context.fillStyle = _this.theme.background;
                _this.context.fillRect(0, 0, _this.width, _this.height);
                _this.mainDrawer && _this.mainDrawer.update();
                _this.context.clearRect(0, _this.auxiliaryChartY, _this.width, _this.auxiliaryChartHeight);
                _this.auxiliaryDrawers[_this.selectedAuxiliaryDrawer] &&
                    _this.auxiliaryDrawers[_this.selectedAuxiliaryDrawer].update();
                _this.requestAnimationFrameId = null;
                if (_this.interactive & InteractiveState.ShowDetail) {
                    _this.drawFrontSight();
                }
                // if (process.env.NODE_ENV === 'development') {
                //   console.timeEnd('rendering cost');
                // }
            });
        }
    };
    Chart.prototype.destroy = function () {
        this.destroyed = true;
        window.removeEventListener('resize', this.resize);
        this.canvas.removeEventListener('contextmenu', this.onContextMenu);
        this.canvas.removeEventListener('mouseenter', this.onMouseEnter);
        this.canvas.removeEventListener('mousemove', this.onMouseEnter);
        this.canvas.removeEventListener('mouseleave', this.onMouseEnter);
        this.canvas.removeEventListener('mousedown', this.onMouseDown);
        this.canvas.removeEventListener('mouseup', this.onMouseUp);
        this.canvas.removeEventListener('touchstart', this.onTouchStart);
        this.canvas.removeEventListener('touchmove', this.onTouchMove);
        this.canvas.removeEventListener('touchend', this.onTouchEnd);
        if (this.requestAnimationFrameId) {
            cancelAnimationFrame(this.requestAnimationFrameId);
        }
        this.rootElement.removeChild(this.canvas);
        this.detailElement && this.rootElement.removeChild(this.detailElement);
        this.destroyDrawer();
    };
    Chart.prototype.nextMainExclusivePlugin = function () {
        this.mainDrawer.nextExclusivePlugin();
    };
    Chart.prototype.useMainExclusivePlugin = function (index) {
        this.mainDrawer.useExclusivePlugin(index);
    };
    Chart.prototype.nextAuxiliarDrawer = function () {
        var auxiliaryDrawerCount = this.auxiliaryDrawers.length;
        if (auxiliaryDrawerCount === 0) {
            throw Error("expect auxiliary drawer exist, but only 0 auxiliary drawer");
        }
        this.selectedAuxiliaryDrawer = (this.selectedAuxiliaryDrawer + 1) % auxiliaryDrawerCount;
    };
    Chart.prototype.useAuxiliarDrawer = function (index) {
        if (index < 0 || index >= this.auxiliaryDrawers.length) {
            throw new Error('index out of bound');
        }
        this.selectedAuxiliaryDrawer = index;
    };
    Object.defineProperty(Chart.prototype, "data", {
        get: function () {
            return this.movableRange.visible();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "mainChartY", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "mainChartHeight", {
        get: function () {
            return this.height * this.options.mainRatio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "auxiliaryChartHeight", {
        get: function () {
            return this.height - this.mainChartHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "auxiliaryChartY", {
        get: function () {
            return this.mainChartHeight + 1;
        },
        enumerable: true,
        configurable: true
    });
    Chart.prototype.create = function () {
        var options = this.options;
        this.rootElement = (options.selector instanceof HTMLElement)
            ? options.selector
            : document.querySelector(options.selector);
        this.rootElement.className = 'finance-chart';
        this.canvas = document.createElement('canvas');
        window.addEventListener('resize', this.resize);
        this.rootElement.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.createDrawer();
        if (typeof this.options.detailProvider === 'function') {
            this.watchDetail();
        }
    };
    Chart.prototype.createDrawer = function () {
        var _this = this;
        var options = this.options;
        if (options.mainDrawer) {
            this.mainDrawer = new options.mainDrawer.constructor(this, options.mainDrawer.options);
        }
        options.auxiliaryDrawers.forEach(function (drawer) {
            _this.auxiliaryDrawers.push(new drawer.constructor(_this, drawer.options));
        });
        this.movableRange.setVisibleLength(this.count());
        this.resize();
    };
    Chart.prototype.destroyDrawer = function () {
        // clear referecne to Chart instance
        this.mainDrawer.chart = null;
        this.auxiliaryDrawers.forEach(function (drawer) {
            drawer.chart = null;
        });
        this.mainDrawer = null;
        this.auxiliaryDrawers = [];
    };
    Chart.prototype._resetDrawerData = function () {
        var _this = this;
        this.mainDrawer && this.mainDrawer.setRange(this.movableRange);
        this.auxiliaryDrawers && this.auxiliaryDrawers.forEach(function (drawer) { return drawer.setRange(_this.movableRange); });
    };
    Chart.prototype.drawFrontSight = function () {
        var ctx = this.context;
        var resolution = this.options.resolution;
        var x = this.detailPoint.x;
        var y = this.detailPoint.y;
        var xScale = this.xScale;
        var i = this.clampSelectedIndex();
        this.detailAt(i);
        x = xScale(i);
        ctx.beginPath();
        ctx.moveTo(x, _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_HEIGHT"] * resolution);
        ctx.lineTo(x, this.height);
        ctx.moveTo(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_LEFT"] * resolution, y);
        ctx.lineTo(this.width - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_RIGHT"] * resolution, y);
        ctx.lineWidth = 1 * this.options.resolution;
        ctx.strokeStyle = this.theme.frontSight;
        // not support in ie 10
        if (typeof ctx.setLineDash === 'function') {
            ctx.setLineDash([2, 5, 15, 5]);
        }
        ctx.stroke();
        var yAxisDetail;
        if (y <= this.mainChartHeight) {
            yAxisDetail = this.mainDrawer.getYAxisDetail(y);
        }
        else {
            var drawer = this.auxiliaryDrawers[this.selectedAuxiliaryDrawer];
            yAxisDetail = drawer.getYAxisDetail(y);
        }
        this.forEachVisibleDrawer(function (drawer) { return drawer.drawFrontSight(); });
        ctx.strokeStyle = this.theme.frontSight;
        // not support in ie 10
        if (typeof ctx.setLineDash === 'function') {
            ctx.setLineDash([]);
        }
        ctx.font = 10 * resolution + "px sans-serif";
        var xAxisDetail = this.mainDrawer.getXAxisDetail(i);
        if (xAxisDetail) {
            var textWidth = ctx.measureText(xAxisDetail).width;
            var labelWidth = textWidth + 2 * _constants_constants__WEBPACK_IMPORTED_MODULE_4__["X_FRONT_SIGHT_LABEL_PADDING"] * resolution;
            var rect = {
                x: lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(x - labelWidth / 2, 0, this.width - labelWidth),
                y: this.mainChartHeight - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["X_AXIS_HEIGHT"] * resolution,
                width: labelWidth,
                height: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["X_AXIS_HEIGHT"] * resolution,
            };
            ctx.fillStyle = this.theme.frontSightLabelBackground;
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
            ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            ctx.textBaseline = 'top';
            ctx.textAlign = 'center';
            ctx.fillStyle = this.theme.frontSight;
            ctx.fillText(xAxisDetail, rect.x + rect.width / 2, rect.y + _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TICK_MARGIN"] * resolution);
        }
        ctx.textBaseline = 'middle';
        var clampY = lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(y, 0, this.height - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FRONT_SIGHT_LABEL_HEIGHT"] * resolution / 2);
        if (yAxisDetail.left) {
            var textWidth = ctx.measureText(yAxisDetail.left).width;
            ctx.textAlign = 'left';
            var rect = {
                x: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_LEFT"] * resolution,
                y: clampY,
                width: textWidth + _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TICK_MARGIN"] * 2 * resolution,
                height: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FRONT_SIGHT_LABEL_HEIGHT"] * resolution,
            };
            ctx.fillStyle = this.theme.frontSightLabelBackground;
            ctx.fillRect(rect.x, rect.y - rect.height / 2, rect.width, rect.height);
            ctx.strokeRect(rect.x, rect.y - rect.height / 2, rect.width, rect.height);
            ctx.fillStyle = this.theme.frontSight;
            ctx.fillText(yAxisDetail.left, rect.x + _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TICK_MARGIN"] * resolution, rect.y);
        }
        if (yAxisDetail.right) {
            var textWidth = ctx.measureText(yAxisDetail.right).width;
            ctx.textAlign = 'right';
            var w = textWidth + _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TICK_MARGIN"] * 2 * resolution;
            var rect = {
                x: this.width - w - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_RIGHT"] * resolution,
                y: clampY,
                width: w,
                height: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["FRONT_SIGHT_LABEL_HEIGHT"] * resolution,
            };
            ctx.fillStyle = this.theme.frontSightLabelBackground;
            ctx.fillRect(rect.x, rect.y - rect.height / 2, rect.width, rect.height);
            ctx.strokeRect(rect.x, rect.y - rect.height / 2, rect.width, rect.height);
            ctx.fillStyle = this.theme.frontSight;
            ctx.fillText(yAxisDetail.right, rect.x + rect.width - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TICK_MARGIN"] * resolution, rect.y);
        }
        this.drawDetail();
    };
    Chart.prototype.watchDetail = function () {
        var canvas = this.canvas;
        this.detailElement = document.createElement('div');
        this.detailElement.style.backgroundColor = this.theme.detailBackground;
        this.detailElement.style.color = this.theme.detailColor;
        this.detailElement.className = 'chart-detail';
        this.rootElement.appendChild(this.detailElement);
        canvas.addEventListener('contextmenu', this.onContextMenu);
        // will be 'hybrid' on android system
        if (detect_it__WEBPACK_IMPORTED_MODULE_1___default.a.deviceType === 'mouseOnly') {
            canvas.addEventListener('mouseenter', this.onMouseEnter);
            canvas.addEventListener('mousemove', this.onMouseMove);
            canvas.addEventListener('mouseleave', this.onMouseLeave);
            canvas.addEventListener('mousedown', this.onMouseDown);
            canvas.addEventListener('mouseup', this.onMouseUp);
        }
        else {
            canvas.addEventListener('touchstart', this.onTouchStart);
            canvas.addEventListener('touchmove', this.onTouchMove);
            canvas.addEventListener('touchend', this.onTouchEnd);
        }
    };
    Chart.prototype.onTouchStart = function (e) {
        var _this = this;
        var rect = e.target.getBoundingClientRect();
        var _a = e.touches[0], clientX = _a.clientX, clientY = _a.clientY;
        this.lastMouseX = clientX;
        this.lastMouseY = clientY;
        this.touchTimeoutId = window.setTimeout(function () {
            _this.showDetail(clientX - rect.left, clientY - rect.top);
            _this.touchTimeoutId = null;
        }, 200);
    };
    Chart.prototype.onTouchMove = function (e) {
        var _a = e.touches[0], clientX = _a.clientX, clientY = _a.clientY;
        if (this.interactive & InteractiveState.ShowDetail) {
            e.preventDefault();
            var rect = e.target.getBoundingClientRect();
            this.showDetail(clientX - rect.left, clientY - rect.top);
        }
        else if (this.interactive & InteractiveState.Dragging) {
            e.preventDefault();
            this.onDrag(clientX);
        }
        else if (this.interactive === InteractiveState.None) {
            this.clearTouchTimeout();
            if (Math.abs(clientX - this.lastMouseX) > Math.abs(clientY - this.lastMouseY)) {
                this.interactive |= InteractiveState.Dragging;
                this.lastMouseX = clientX;
            }
            else {
                this.interactive |= InteractiveState.Srolling;
            }
        }
    };
    Chart.prototype.onDrag = function (clientX) {
        var distance = clientX - this.lastMouseX;
        this.lastMouseX = clientX;
        this.drag(distance);
    };
    Chart.prototype.onTouchEnd = function (e) {
        this.clearTouchTimeout();
        this.hideDetail();
        this.interactive = InteractiveState.None;
    };
    Chart.prototype.clearTouchTimeout = function () {
        if (this.touchTimeoutId) {
            clearTimeout(this.touchTimeoutId);
        }
        this.touchTimeoutId = null;
    };
    Chart.prototype.onMouseDown = function (e) {
        this.interactive |= InteractiveState.Dragging;
        this.lastMouseX = e.clientX;
    };
    Chart.prototype.onMouseUp = function (e) {
        this.interactive &= ~InteractiveState.Dragging;
    };
    Chart.prototype.onContextMenu = function (e) {
        e.preventDefault();
    };
    Chart.prototype.onMouseEnter = function (e) {
        var rect = e.target.getBoundingClientRect();
        this.showDetail(e.clientX - rect.left, e.clientY - rect.top);
    };
    Chart.prototype.onMouseMove = function (e) {
        var rect = e.target.getBoundingClientRect();
        var clientX = e.clientX;
        if (this.interactive & InteractiveState.Dragging) {
            this.onDrag(clientX);
        }
        this.showDetail(clientX - rect.left, e.clientY - rect.top);
    };
    Chart.prototype.onMouseLeave = function (e) {
        var x = e.clientX - e.target.getBoundingClientRect().left;
        var y = e.clientY - e.target.getBoundingClientRect().top;
        this.hideDetail();
        this.interactive &= ~InteractiveState.Dragging;
    };
    Chart.prototype.showDetail = function (x, y) {
        var data = this.data;
        var resolution = this.options.resolution;
        this.detailPoint = {
            x: x * resolution,
            y: y * resolution,
        };
        if (!data || data.length === 0) {
            return;
        }
        if (y < _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_HEIGHT"] ||
            y > this.height / resolution) {
            this.hideDetail();
            return;
        }
        this.interactive |= InteractiveState.ShowDetail;
        this.detailElement.style.display = 'block';
        var distanceToEnd = this.width / resolution - _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_RIGHT"] - x;
        if (distanceToEnd < _constants_constants__WEBPACK_IMPORTED_MODULE_4__["DETAIL_PANEL_WIDTH"] + 10) {
            // snap to left
            this.detailElement.style.right = 'auto';
            this.detailElement.style.left = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_LEFT"] + "px";
        }
        else {
            // snap to right
            this.detailElement.style.left = 'auto';
            this.detailElement.style.right = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["PADDING_RIGHT"] + "px";
        }
    };
    Chart.prototype.detailAt = function (i) {
        this.forEachVisibleDrawer(function (drawer) { return drawer.select(i); });
    };
    Chart.prototype.forEachVisibleDrawer = function (action) {
        this.mainDrawer && action(this.mainDrawer);
        var drawer = this.auxiliaryDrawers[this.selectedAuxiliaryDrawer];
        drawer && action(drawer);
    };
    Chart.prototype.clampSelectedIndex = function () {
        return lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(Math.round(this.xScale.invert(this.detailPoint.x)), 0, this.data.length - 1);
    };
    Chart.prototype.drawDetail = function () {
        var xScale = this.xScale.clamp(true);
        var detailIndex = Math.min(Math.round(xScale.invert(this.detailPoint.x)), this.data.length - 1);
        var _a = this.options.detailProvider(detailIndex, this.data), title = _a.title, tables = _a.tables;
        var fragment = document.createDocumentFragment();
        var $title = document.createElement('div');
        $title.className = 'chart-detail__title';
        $title.textContent = title;
        fragment.appendChild($title);
        tables.forEach(function (row) {
            var $row = document.createElement('div');
            var $name = document.createElement('span');
            var $value = document.createElement('span');
            $row.className = 'chart-detail__row';
            $name.className = 'chart-detail__row__name';
            $name.textContent = row.name;
            $value.className = 'chart-detail__row__value';
            $value.textContent = row.value;
            $value.style.color = row.color || 'black';
            $row.appendChild($name);
            $row.appendChild($value);
            fragment.appendChild($row);
        });
        this.detailElement.innerHTML = '';
        this.detailElement.appendChild(fragment);
    };
    Chart.prototype.hideDetail = function () {
        this.interactive &= ~InteractiveState.ShowDetail;
        this.detailElement.style.display = 'none';
        this.detailAt(null);
    };
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "resize", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "setLastPrice", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "nextMainExclusivePlugin", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "useMainExclusivePlugin", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "nextAuxiliarDrawer", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "useAuxiliarDrawer", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "_resetDrawerData", null);
    __decorate([
        autoResetStyle()
    ], Chart.prototype, "drawFrontSight", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "showDetail", null);
    __decorate([
        shouldRedraw()
    ], Chart.prototype, "hideDetail", null);
    return Chart;
}());



/***/ }),

/***/ "./src/chart/drawer-plugin.ts":
/*!************************************!*\
  !*** ./src/chart/drawer-plugin.ts ***!
  \************************************/
/*! exports provided: DrawerPlugin, ExclusiveDrawerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPlugin", function() { return DrawerPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclusiveDrawerPlugin", function() { return ExclusiveDrawerPlugin; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DrawerPlugin = /** @class */ (function () {
    function DrawerPlugin(pluginHost) {
        this.pluginHost = pluginHost;
    }
    DrawerPlugin.prototype.onSetRange = function () {
        // implement nothing
    };
    DrawerPlugin.prototype.predraw = function () {
        // implement nothing
    };
    DrawerPlugin.prototype.draw = function () {
        // implement nothing
    };
    DrawerPlugin.prototype.postdraw = function () {
        // implement nothing
    };
    return DrawerPlugin;
}());

var ExclusiveDrawerPlugin = /** @class */ (function (_super) {
    __extends(ExclusiveDrawerPlugin, _super);
    function ExclusiveDrawerPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExclusiveDrawerPlugin;
}(DrawerPlugin));



/***/ }),

/***/ "./src/chart/drawer.ts":
/*!*****************************!*\
  !*** ./src/chart/drawer.ts ***!
  \*****************************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var Drawer = /** @class */ (function () {
    function Drawer(chart, options) {
        if (options === void 0) { options = {
            plugins: [],
            exclusivePlugins: [],
        }; }
        var _this = this;
        this.chart = chart;
        this.options = options;
        this.plugins = [];
        this.exclusivePlugins = [];
        this.frame = { x: 0, y: 0, width: 0, height: 0 };
        this.chartFrame = { x: 0, y: 0, width: 0, height: 0 };
        this.minValue = 0;
        this.maxValue = 0;
        this.selectedExclusivePlugin = 0;
        this._xAxisTickHeight = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["X_AXIS_HEIGHT"];
        this.topValue = function () {
            return _this.maxValue * (1 + Math.sign(_this.maxValue) * 0.01);
        };
        this.bottomValue = function () {
            return _this.minValue * (1 - Math.sign(_this.minValue) * 0.01);
        };
        this.context = chart.context;
        this.selectedIndex = null;
        this.tradeTime = new _index__WEBPACK_IMPORTED_MODULE_2__["TradeTime"](chart.options.tradeTimes);
        this.setRange(chart.movableRange);
        this.installPlugin();
    }
    Drawer.prototype.update = function () {
        // implement nothing
        this.predraw();
        this.draw();
        this.postdraw();
    };
    Drawer.prototype.drawFrontSight = function () {
        // implement nothing
    };
    Drawer.prototype.resize = function (frame) {
        var resolution = this.chart.options.resolution;
        this.frame = frame;
        this.chartFrame = __assign({}, frame, { y: frame.y + this.titleHeight, height: frame.height -
                this.titleHeight -
                this.xAxisTickHeight });
        this.resetYScale();
    };
    Drawer.prototype.setRange = function (range) {
        this.range = range;
        this.pluginCall('onSetRange');
        this.resetYScale();
    };
    Drawer.prototype.select = function (i) {
        this.selectedIndex = i;
    };
    Drawer.prototype.getYAxisDetail = function (y) {
        return {
            left: null,
            right: null,
        };
    };
    Drawer.prototype.getXAxisDetail = function (i) {
        return null;
    };
    Drawer.prototype.count = function () {
        return 0;
    };
    Drawer.prototype.nextExclusivePlugin = function () {
        var pluginsCount = this.exclusivePlugins.length;
        if (pluginsCount === 0) {
            throw Error("expect exclusive plugin exist, but only 0 plugin");
        }
        this.selectedExclusivePlugin = (this.selectedExclusivePlugin + 1) % pluginsCount;
    };
    Drawer.prototype.useExclusivePlugin = function (index) {
        if (index < 0 || index >= this.exclusivePlugins.length) {
            throw new Error('index out of bound');
        }
        this.selectedExclusivePlugin = index;
    };
    Drawer.prototype.predraw = function () {
        this.pluginCall('predraw');
    };
    Drawer.prototype.draw = function () {
        this.pluginCall('draw');
    };
    Drawer.prototype.postdraw = function () {
        this.pluginCall('postdraw');
    };
    Object.defineProperty(Drawer.prototype, "titleHeight", {
        get: function () {
            return _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TITLE_HEIGHT"] * this.chart.options.resolution;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "xAxisTickHeight", {
        get: function () {
            return this._xAxisTickHeight * this.chart.options.resolution;
        },
        set: function (value) {
            this._xAxisTickHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Drawer.prototype.resetYScale = function () {
        var chartFrame = this.chartFrame;
        var resolution = this.chart.options.resolution;
        this.yScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"])()
            .domain([this.bottomValue(), this.topValue()])
            .range([chartFrame.y + chartFrame.height, chartFrame.y + _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TITLE_MARGIN_BOTTOM"] * resolution]);
    };
    Drawer.prototype.installPlugin = function () {
        var _this = this;
        this.options.plugins.forEach(function (Plugin) {
            _this.plugins.push(new Plugin(_this));
        });
        this.options.exclusivePlugins.forEach(function (Plugin) {
            _this.exclusivePlugins.push(new Plugin(_this));
        });
    };
    Drawer.prototype.pluginCall = function (fnName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.plugins.forEach(function (plugin) {
            return plugin[fnName]
                .apply(plugin, args);
        });
        var exp = this.exclusivePlugins[this.selectedExclusivePlugin];
        exp && exp[fnName].apply(exp, args);
    };
    return Drawer;
}());



/***/ }),

/***/ "./src/chart/time-share-drawer.ts":
/*!****************************************!*\
  !*** ./src/chart/time-share-drawer.ts ***!
  \****************************************/
/*! exports provided: TimeShareWhiteTheme, TimeShareBlackTheme, TimeShareDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeShareWhiteTheme", function() { return TimeShareWhiteTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeShareBlackTheme", function() { return TimeShareBlackTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeShareDrawer", function() { return TimeShareDrawer; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.uniq */ "./node_modules/lodash.uniq/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _algorithm_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithm/date */ "./src/algorithm/date.ts");
/* harmony import */ var _algorithm_divide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithm/divide */ "./src/algorithm/divide.ts");
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paint-utils/index */ "./src/paint-utils/index.ts");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart */ "./src/chart/chart.ts");
/* harmony import */ var _chart_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart-title */ "./src/chart/chart-title.ts");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drawer */ "./src/chart/drawer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TimeShareWhiteTheme = {
    price: '#4B99FB',
    linearGradient: [
        'rgba(75, 153, 251, 0.4)',
        'rgba(75, 153, 251, 0)',
    ],
    avg: '#F89D37',
};
var TimeShareBlackTheme = {
    price: '#4B99FB',
    linearGradient: [
        'rgba(75, 153, 251, 0.4)',
        'rgba(75, 153, 251, 0)',
    ],
    avg: '#F89D37',
};
var TimeShareDrawer = /** @class */ (function (_super) {
    __extends(TimeShareDrawer, _super);
    function TimeShareDrawer(chart, options) {
        var _this = _super.call(this, chart, options) || this;
        _this.topValue = (function (lastTopValue) {
            if (lastTopValue === void 0) { lastTopValue = Number.MIN_VALUE; }
            return function () {
                if (_this.maxValue > lastTopValue) {
                    lastTopValue = _this.maxValue * (1.01);
                }
                return lastTopValue;
            };
        })();
        _this.bottomValue = (function (lastBottomValue) {
            if (lastBottomValue === void 0) { lastBottomValue = Number.MAX_VALUE; }
            return function () {
                if (_this.minValue < lastBottomValue) {
                    lastBottomValue = _this.minValue * (0.99);
                }
                return lastBottomValue;
            };
        })();
        _this.theme = Object.assign({
            timeShare: TimeShareBlackTheme,
        }, _this.chart.theme);
        _this.xTickFormatter = _this.xTickFormatter.bind(_this);
        _this.context = chart.context;
        _this.titleDrawer = new _chart_title__WEBPACK_IMPORTED_MODULE_7__["ChartTitle"](_this.context, null, [
            {
                x: 5 * _this.chart.options.resolution,
                label: '分时走势',
                color: _this.theme.timeShare.price,
            },
            {
                x: 50 + 5 * _this.chart.options.resolution,
                label: '均线',
                color: _this.theme.timeShare.avg,
            },
        ], _this.theme.titleBackground, 'white', _this.chart.options.resolution);
        return _this;
    }
    TimeShareDrawer.prototype.count = function () {
        return this.tradeTime.totalMinutes();
    };
    TimeShareDrawer.prototype.setRange = function (range) {
        var data = range.data;
        if (data.length > 0) {
            var merge = data.map(function (d) { return d.price; }).concat(data.map(function (d) { return d.avg; }));
            this.minValue = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["min"])(merge);
            this.maxValue = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["max"])(merge);
        }
        else {
            this.minValue = this.chart.lastPrice;
            this.maxValue = this.chart.lastPrice;
        }
        _super.prototype.setRange.call(this, range);
    };
    TimeShareDrawer.prototype.drawFrontSight = function () {
        var _a = this, ctx = _a.context, yScale = _a.yScale, range = _a.range;
        var xScale = this.chart.xScale;
        var data = range.visible();
        var selectedIndex = this.selectedIndex;
        var x = xScale(selectedIndex);
        var size = 5 * this.chart.options.resolution;
        ctx.beginPath();
        ctx.arc(x, yScale(data[selectedIndex].price), size, 0, Math.PI * 2);
        ctx.fillStyle = this.theme.timeShare.price;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, yScale(data[selectedIndex].avg), size, 0, Math.PI * 2);
        ctx.fillStyle = this.theme.timeShare.avg;
        ctx.fill();
    };
    TimeShareDrawer.prototype.getYAxisDetail = function (y) {
        var value = this.yScale.invert(y);
        return {
            left: value.toFixed(2),
            right: this.deltaInPercentage(value),
        };
    };
    TimeShareDrawer.prototype.getXAxisDetail = function (i) {
        return this.xTickFormatter(i);
    };
    TimeShareDrawer.prototype.draw = function () {
        _super.prototype.draw.call(this);
        var frame = this.frame;
        this.drawAxes();
        this.titleDrawer.draw(__assign({}, frame, { height: this.titleHeight }));
        this.drawTimeShare();
    };
    TimeShareDrawer.prototype.xTickFormatter = function (value, i) {
        var d = new Date();
        var minute = this.tradeTime.getMinute(value);
        d.setTime(minute * 60 * 1000);
        return Object(_algorithm_date__WEBPACK_IMPORTED_MODULE_3__["formateDate"])(d, 'HH:mm');
    };
    TimeShareDrawer.prototype.drawYAxis = function () {
        var _this = this;
        var lastPrice = this.chart.lastPrice;
        var tickValues = Object(_algorithm_divide__WEBPACK_IMPORTED_MODULE_4__["divide"])(this.bottomValue(), this.topValue()).map(function (n) { return ({
            value: n,
            color: n > lastPrice ? _this.theme.rise : _this.theme.fall,
        }); });
        Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_5__["drawYAxis"])(this.context, tickValues, this.frame, this.yScale, this.chart.options.resolution, true, this.theme.gridLine);
        Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_5__["drawYAxis"])(this.context, tickValues, this.frame, this.yScale, this.chart.options.resolution, false, this.theme.gridLine, function (v) { return _this.deltaInPercentage(v); }, 'right');
    };
    TimeShareDrawer.prototype.deltaInPercentage = function (value) {
        var lastPrice = this.chart.lastPrice;
        return ((value - lastPrice) / lastPrice * 100).toFixed(2) + "%";
    };
    TimeShareDrawer.prototype.drawXAxis = function () {
        var tickValues = lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default()(Object(_algorithm_divide__WEBPACK_IMPORTED_MODULE_4__["divide"])(0, this.chart.count() - 1, 5)
            .map(function (t) { return Math.floor(t); }));
        Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_5__["drawXAxis"])(this.context, tickValues, this.chartFrame, this.chart.xScale, this.chart.options.resolution, true, this.theme.gridLine, this.xTickFormatter, this.theme.xTick);
    };
    TimeShareDrawer.prototype.drawAxes = function () {
        this.drawXAxis();
        this.drawYAxis();
    };
    TimeShareDrawer.prototype.drawTimeShare = function () {
        var frame = this.frame;
        var xScale = this.chart.xScale;
        var _a = this, ctx = _a.context, yScale = _a.yScale, range = _a.range;
        var drawArea = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["area"])()
            .x(function (d, i) { return xScale(i); })
            .y0(function (d) { return yScale(d.price); })
            .y1(frame.height - this.xAxisTickHeight)
            .context(ctx);
        ctx.beginPath();
        drawArea(range.visible());
        var linearGradient = ctx.createLinearGradient(0, 0, 0, frame.height);
        this.theme.timeShare.linearGradient.forEach(function (color, i) {
            return linearGradient.addColorStop(i, color);
        });
        ctx.fillStyle = linearGradient;
        ctx.fill();
        this.drawLine('price', this.theme.timeShare.price);
        this.drawLine('avg', this.theme.timeShare.avg);
    };
    TimeShareDrawer.prototype.drawLine = function (key, color) {
        if (color === void 0) { color = 'black'; }
        var _a = this, yScale = _a.yScale, ctx = _a.context, range = _a.range;
        var xScale = this.chart.xScale;
        Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_5__["drawLine"])(ctx, range.visible().map(function (item, i) { return ({
            x: xScale(i),
            y: yScale(item[key]),
        }); }), color, 1 * this.chart.options.resolution);
    };
    __decorate([
        Object(_chart__WEBPACK_IMPORTED_MODULE_6__["autoResetStyle"])()
    ], TimeShareDrawer.prototype, "drawFrontSight", null);
    __decorate([
        Object(_chart__WEBPACK_IMPORTED_MODULE_6__["autoResetStyle"])()
    ], TimeShareDrawer.prototype, "drawTimeShare", null);
    __decorate([
        Object(_chart__WEBPACK_IMPORTED_MODULE_6__["autoResetStyle"])()
    ], TimeShareDrawer.prototype, "drawLine", null);
    return TimeShareDrawer;
}(_drawer__WEBPACK_IMPORTED_MODULE_8__["Drawer"]));



/***/ }),

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/*! exports provided: TITLE_HEIGHT, X_AXIS_HEIGHT, PADDING_LEFT, PADDING_RIGHT, DETAIL_PANEL_WIDTH, TITLE_MARGIN_BOTTOM, TICK_MARGIN, FRONT_SIGHT_LABEL_HEIGHT, X_FRONT_SIGHT_LABEL_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_HEIGHT", function() { return TITLE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_AXIS_HEIGHT", function() { return X_AXIS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDING_LEFT", function() { return PADDING_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDING_RIGHT", function() { return PADDING_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_PANEL_WIDTH", function() { return DETAIL_PANEL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_MARGIN_BOTTOM", function() { return TITLE_MARGIN_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK_MARGIN", function() { return TICK_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRONT_SIGHT_LABEL_HEIGHT", function() { return FRONT_SIGHT_LABEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_FRONT_SIGHT_LABEL_PADDING", function() { return X_FRONT_SIGHT_LABEL_PADDING; });
var TITLE_HEIGHT = 25;
var X_AXIS_HEIGHT = 20;
var PADDING_LEFT = 12;
var PADDING_RIGHT = 12;
var DETAIL_PANEL_WIDTH = 120;
var TITLE_MARGIN_BOTTOM = 15;
var TICK_MARGIN = 3;
var FRONT_SIGHT_LABEL_HEIGHT = 20;
var X_FRONT_SIGHT_LABEL_PADDING = 8;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Chart, ChartBlackTheme, ChartWhiteTheme, Drawer, TimeShareWhiteTheme, TimeShareBlackTheme, TimeShareDrawer, CandleStickDrawer, VolumeWhiteTheme, VolumeBlackTheme, VolumeDrawer, TimeShareVolumeDrawer, CandleStickVolumeDrawer, formateDate, TradeTime, createLinePlugin, createMAPlugin, createBOLLPlugin, createEMAPlugin, createSMAPlugin, createSARPlugin, createKDJPlugin, createRSIPlugin, createDMAPlugin, createMACDPlugin, createYAxisPlugin, createKDJYAxisPlugin, createRSIYAxisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/chart */ "./src/chart/chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart_chart__WEBPACK_IMPORTED_MODULE_0__["Chart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartBlackTheme", function() { return _chart_chart__WEBPACK_IMPORTED_MODULE_0__["ChartBlackTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartWhiteTheme", function() { return _chart_chart__WEBPACK_IMPORTED_MODULE_0__["ChartWhiteTheme"]; });

/* harmony import */ var _chart_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/drawer */ "./src/chart/drawer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _chart_drawer__WEBPACK_IMPORTED_MODULE_1__["Drawer"]; });

/* harmony import */ var _chart_time_share_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/time-share-drawer */ "./src/chart/time-share-drawer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeShareWhiteTheme", function() { return _chart_time_share_drawer__WEBPACK_IMPORTED_MODULE_2__["TimeShareWhiteTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeShareBlackTheme", function() { return _chart_time_share_drawer__WEBPACK_IMPORTED_MODULE_2__["TimeShareBlackTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeShareDrawer", function() { return _chart_time_share_drawer__WEBPACK_IMPORTED_MODULE_2__["TimeShareDrawer"]; });

/* harmony import */ var _chart_candle_stick_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/candle-stick-drawer */ "./src/chart/candle-stick-drawer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandleStickDrawer", function() { return _chart_candle_stick_drawer__WEBPACK_IMPORTED_MODULE_3__["CandleStickDrawer"]; });

/* harmony import */ var _chart_auxiliary_volume_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/auxiliary/volume-drawer */ "./src/chart/auxiliary/volume-drawer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeWhiteTheme", function() { return _chart_auxiliary_volume_drawer__WEBPACK_IMPORTED_MODULE_4__["VolumeWhiteTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeBlackTheme", function() { return _chart_auxiliary_volume_drawer__WEBPACK_IMPORTED_MODULE_4__["VolumeBlackTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeDrawer", function() { return _chart_auxiliary_volume_drawer__WEBPACK_IMPORTED_MODULE_4__["VolumeDrawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeShareVolumeDrawer", function() { return _chart_auxiliary_volume_drawer__WEBPACK_IMPORTED_MODULE_4__["TimeShareVolumeDrawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandleStickVolumeDrawer", function() { return _chart_auxiliary_volume_drawer__WEBPACK_IMPORTED_MODULE_4__["CandleStickVolumeDrawer"]; });

/* harmony import */ var _algorithm_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithm/date */ "./src/algorithm/date.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formateDate", function() { return _algorithm_date__WEBPACK_IMPORTED_MODULE_5__["formateDate"]; });

/* harmony import */ var _algorithm_tradetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithm/tradetime */ "./src/algorithm/tradetime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradeTime", function() { return _algorithm_tradetime__WEBPACK_IMPORTED_MODULE_6__["TradeTime"]; });

/* harmony import */ var _plugins_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLinePlugin", function() { return _plugins_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_7__["createLinePlugin"]; });

/* harmony import */ var _plugins_ma_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/ma-plugin */ "./src/plugins/ma-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMAPlugin", function() { return _plugins_ma_plugin__WEBPACK_IMPORTED_MODULE_8__["createMAPlugin"]; });

/* harmony import */ var _plugins_boll_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/boll-plugin */ "./src/plugins/boll-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBOLLPlugin", function() { return _plugins_boll_plugin__WEBPACK_IMPORTED_MODULE_9__["createBOLLPlugin"]; });

/* harmony import */ var _plugins_ema_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/ema-plugin */ "./src/plugins/ema-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEMAPlugin", function() { return _plugins_ema_plugin__WEBPACK_IMPORTED_MODULE_10__["createEMAPlugin"]; });

/* harmony import */ var _plugins_sma_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/sma-plugin */ "./src/plugins/sma-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSMAPlugin", function() { return _plugins_sma_plugin__WEBPACK_IMPORTED_MODULE_11__["createSMAPlugin"]; });

/* harmony import */ var _plugins_sar_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/sar-plugin */ "./src/plugins/sar-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSARPlugin", function() { return _plugins_sar_plugin__WEBPACK_IMPORTED_MODULE_12__["createSARPlugin"]; });

/* harmony import */ var _plugins_kdj_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/kdj-plugin */ "./src/plugins/kdj-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createKDJPlugin", function() { return _plugins_kdj_plugin__WEBPACK_IMPORTED_MODULE_13__["createKDJPlugin"]; });

/* harmony import */ var _plugins_rsi_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/rsi-plugin */ "./src/plugins/rsi-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRSIPlugin", function() { return _plugins_rsi_plugin__WEBPACK_IMPORTED_MODULE_14__["createRSIPlugin"]; });

/* harmony import */ var _plugins_dma_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plugins/dma-plugin */ "./src/plugins/dma-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDMAPlugin", function() { return _plugins_dma_plugin__WEBPACK_IMPORTED_MODULE_15__["createDMAPlugin"]; });

/* harmony import */ var _plugins_macd_plugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/macd-plugin */ "./src/plugins/macd-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMACDPlugin", function() { return _plugins_macd_plugin__WEBPACK_IMPORTED_MODULE_16__["createMACDPlugin"]; });

/* harmony import */ var _plugins_y_axis_plugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plugins/y-axis-plugin */ "./src/plugins/y-axis-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createYAxisPlugin", function() { return _plugins_y_axis_plugin__WEBPACK_IMPORTED_MODULE_17__["createYAxisPlugin"]; });

/* harmony import */ var _plugins_kdj_y_axis_plugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/kdj-y-axis-plugin */ "./src/plugins/kdj-y-axis-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createKDJYAxisPlugin", function() { return _plugins_kdj_y_axis_plugin__WEBPACK_IMPORTED_MODULE_18__["createKDJYAxisPlugin"]; });

/* harmony import */ var _plugins_rsi_y_axis_plugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plugins/rsi-y-axis-plugin */ "./src/plugins/rsi-y-axis-plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRSIYAxisPlugin", function() { return _plugins_rsi_y_axis_plugin__WEBPACK_IMPORTED_MODULE_19__["createRSIYAxisPlugin"]; });


/* export all main drawer */



/* export all auxiliary drawer */

/* export all algorithm */


/* export all plugins */















/***/ }),

/***/ "./src/paint-utils/index.ts":
/*!**********************************!*\
  !*** ./src/paint-utils/index.ts ***!
  \**********************************/
/*! exports provided: drawLine, drawText, drawYAxis, drawXAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLine", function() { return drawLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawText", function() { return drawText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawYAxis", function() { return drawYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawXAxis", function() { return drawXAxis; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");



function drawLine(ctx, data, color, lineWidth) {
    if (color === void 0) { color = 'black'; }
    if (lineWidth === void 0) { lineWidth = 1; }
    ctx.save();
    ctx.beginPath();
    Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["line"])()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; })
        .context(ctx)(data);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.restore();
}
function drawText(ctx, text, position, styles) {
    if (position === void 0) { position = { x: 0, y: 0 }; }
    if (styles === void 0) { styles = {}; }
    var defaultStyles = {
        font: '11px serif',
        color: 'black',
    };
    var mergeStyles = Object.assign({}, defaultStyles, styles);
    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = mergeStyles.font;
    ctx.fillStyle = mergeStyles.color;
    ctx.fillText(text, position.x, position.y);
    ctx.restore();
}
function drawYAxis(ctx, tickValues, frame, scale, resolution, withLine, lineColor, formatter, align) {
    if (resolution === void 0) { resolution = 1; }
    if (withLine === void 0) { withLine = true; }
    if (lineColor === void 0) { lineColor = 'black'; }
    if (formatter === void 0) { formatter = function (v) { return v.toFixed(2); }; }
    if (align === void 0) { align = 'left'; }
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.font = 10 * resolution + "px sans-serif";
    ctx.textBaseline = 'bottom';
    var x;
    if (align === 'left') {
        ctx.textAlign = 'left';
        x = (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["PADDING_LEFT"] + _constants_constants__WEBPACK_IMPORTED_MODULE_2__["TICK_MARGIN"]) * resolution;
    }
    else {
        ctx.textAlign = 'right';
        x = frame.width - (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["PADDING_RIGHT"] + _constants_constants__WEBPACK_IMPORTED_MODULE_2__["TICK_MARGIN"]) * resolution;
    }
    tickValues.forEach(function (_a, i) {
        var value = _a.value, _b = _a.color, color = _b === void 0 ? '#5E667F' : _b;
        var y = scale(value);
        if (withLine) {
            ctx.moveTo(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["PADDING_LEFT"] * resolution, y);
            ctx.lineTo(frame.width - _constants_constants__WEBPACK_IMPORTED_MODULE_2__["PADDING_RIGHT"] * resolution, y);
        }
        ctx.fillStyle = color;
        ctx.fillText(formatter(value, i), x, y);
    });
    ctx.stroke();
    ctx.restore();
}
function drawXAxis(ctx, tickValues, frame, scale, resolution, withTick, lineColor, formatter, tickColor) {
    if (resolution === void 0) { resolution = 1; }
    if (withTick === void 0) { withTick = true; }
    if (lineColor === void 0) { lineColor = 'black'; }
    if (formatter === void 0) { formatter = function (v) { return v.toFixed(2); }; }
    if (tickColor === void 0) { tickColor = '#5E667F'; }
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.font = 10 * resolution + "px sans-serif";
    ctx.fillStyle = tickColor;
    ctx.textBaseline = 'top';
    var bottomY = frame.y + frame.height;
    tickValues.forEach(function (value, i) {
        if (i === 0) {
            ctx.textAlign = 'left';
        }
        else if (i === tickValues.length - 1) {
            ctx.textAlign = 'right';
        }
        else {
            ctx.textAlign = 'center';
        }
        var x = scale(value);
        ctx.moveTo(x, frame.y);
        ctx.lineTo(x, bottomY);
        if (withTick) {
            ctx.fillText(formatter(value, i), x, bottomY + _constants_constants__WEBPACK_IMPORTED_MODULE_2__["TICK_MARGIN"] * resolution);
        }
    });
    ctx.stroke();
    ctx.restore();
}


/***/ }),

/***/ "./src/plugins/boll-plugin.ts":
/*!************************************!*\
  !*** ./src/plugins/boll-plugin.ts ***!
  \************************************/
/*! exports provided: createBOLLPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBOLLPlugin", function() { return createBOLLPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");

function createBOLLPlugin(lineData, dataObjectKey) {
    if (lineData === void 0) { lineData = [
        {
            key: 'mid',
            color: '#FF8E29',
        },
        {
            key: 'upper',
            color: '#ADE3F3',
        },
        {
            key: 'lower',
            color: '#EC6ED9',
        },
    ]; }
    if (dataObjectKey === void 0) { dataObjectKey = 'boll'; }
    return Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: dataObjectKey,
        title: 'BOLL(20,2)',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 80,
                label: key.toUpperCase() + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    });
}


/***/ }),

/***/ "./src/plugins/dma-plugin.ts":
/*!***********************************!*\
  !*** ./src/plugins/dma-plugin.ts ***!
  \***********************************/
/*! exports provided: createDMAPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDMAPlugin", function() { return createDMAPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function createDMAPlugin(lineData, dataObjectKey) {
    if (lineData === void 0) { lineData = [
        {
            key: 'dif',
            color: '#FF8E29',
        },
        {
            key: 'ama',
            color: '#ADE3F3',
        },
    ]; }
    if (dataObjectKey === void 0) { dataObjectKey = 'dma'; }
    return /** @class */ (function (_super) {
        __extends(DMAPlugin, _super);
        function DMAPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DMAPlugin.prototype.onSetRange = function () {
            var minValue = Number.MAX_SAFE_INTEGER;
            var maxValue = Number.MIN_SAFE_INTEGER;
            var data = this.pluginHost.range.visible();
            var all = data.map(function (item) { return item[dataObjectKey].dif; }).concat(data.map(function (item) { return item[dataObjectKey].ama; }));
            for (var i = 0, len = all.length; i < len; ++i) {
                var v = all[i];
                if (v < minValue) {
                    minValue = v;
                }
                else if (v > maxValue) {
                    maxValue = v;
                }
            }
            this.pluginHost.minValue = minValue;
            this.pluginHost.maxValue = maxValue;
        };
        return DMAPlugin;
    }(Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: dataObjectKey,
        title: 'DMA',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 50,
                label: key.toUpperCase() + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    })));
}


/***/ }),

/***/ "./src/plugins/ema-plugin.ts":
/*!***********************************!*\
  !*** ./src/plugins/ema-plugin.ts ***!
  \***********************************/
/*! exports provided: createEMAPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEMAPlugin", function() { return createEMAPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");

function createEMAPlugin(lineData) {
    return Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: 'ema',
        title: 'EMA',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 80,
                label: "EMA " + key + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    });
}


/***/ }),

/***/ "./src/plugins/kdj-plugin.ts":
/*!***********************************!*\
  !*** ./src/plugins/kdj-plugin.ts ***!
  \***********************************/
/*! exports provided: createKDJPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKDJPlugin", function() { return createKDJPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function createKDJPlugin(lineData, dataObjectKey) {
    if (lineData === void 0) { lineData = [
        {
            key: 'k',
            color: '#FF8E29',
        },
        {
            key: 'd',
            color: '#ADE3F3',
        },
        {
            key: 'j',
            color: '#EC6ED9',
        },
    ]; }
    if (dataObjectKey === void 0) { dataObjectKey = 'kdj'; }
    return /** @class */ (function (_super) {
        __extends(KDJPlugin, _super);
        function KDJPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KDJPlugin.prototype.onSetRange = function () {
            var minValue = Number.MAX_SAFE_INTEGER;
            var maxValue = Number.MIN_SAFE_INTEGER;
            var data = this.pluginHost.range.visible();
            var all = data.map(function (item) { return item[dataObjectKey].k; }).concat(data.map(function (item) { return item[dataObjectKey].d; }), data.map(function (item) { return item[dataObjectKey].j; }));
            for (var i = 0, len = all.length; i < len; ++i) {
                var v = all[i];
                if (v < minValue) {
                    minValue = v;
                }
                else if (v > maxValue) {
                    maxValue = v;
                }
            }
            this.pluginHost.minValue = minValue;
            this.pluginHost.maxValue = maxValue;
        };
        return KDJPlugin;
    }(Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: dataObjectKey,
        title: 'KDJ',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 50,
                label: key.toUpperCase() + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    })));
}


/***/ }),

/***/ "./src/plugins/kdj-y-axis-plugin.ts":
/*!******************************************!*\
  !*** ./src/plugins/kdj-y-axis-plugin.ts ***!
  \******************************************/
/*! exports provided: createKDJYAxisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKDJYAxisPlugin", function() { return createKDJYAxisPlugin; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function createKDJYAxisPlugin() {
    return /** @class */ (function (_super) {
        __extends(KDJYAxisPlugin, _super);
        function KDJYAxisPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KDJYAxisPlugin.prototype.onSetRange = function () {
            var host = this.pluginHost;
            if (host.minValue > 0) {
                host.minValue = 0;
            }
            if (host.maxValue < 100) {
                host.maxValue = 100;
            }
        };
        return KDJYAxisPlugin;
    }(Object(_index__WEBPACK_IMPORTED_MODULE_0__["createYAxisPlugin"])([20, 50, 80])));
}


/***/ }),

/***/ "./src/plugins/line-indicator-plugin.ts":
/*!**********************************************!*\
  !*** ./src/plugins/line-indicator-plugin.ts ***!
  \**********************************************/
/*! exports provided: createLinePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinePlugin", function() { return createLinePlugin; });
/* harmony import */ var _algorithm_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithm/arrays */ "./src/algorithm/arrays.ts");
/* harmony import */ var _chart_chart_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/chart-title */ "./src/chart/chart-title.ts");
/* harmony import */ var _chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/drawer-plugin */ "./src/chart/drawer-plugin.ts");
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paint-utils/index */ "./src/paint-utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




function createLinePlugin(config) {
    return /** @class */ (function (_super) {
        __extends(LineIndicatorPlugin, _super);
        function LineIndicatorPlugin(pluginHost) {
            var _this = _super.call(this, pluginHost) || this;
            _this.pluginHost = pluginHost;
            var theme = pluginHost.chart.theme;
            _this.titleDrawer = new _chart_chart_title__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"](_this.pluginHost.context, config.title, config.lineData.map(function (_a, i) {
                var key = _a.key, color = _a.color;
                return (__assign({}, config.detailMapper(key, 0, i), { color: color }));
            }), theme.titleBackground, theme.title, _this.pluginHost.chart.options.resolution);
            return _this;
        }
        LineIndicatorPlugin.prototype.postdraw = function () {
            var _this = this;
            var _a = this.pluginHost, yScale = _a.yScale, range = _a.range;
            var xScale = this.pluginHost.chart.xScale;
            config.lineData.forEach(function (_a) {
                var key = _a.key, color = _a.color;
                var data = range.visible().map(function (d) { return d[config.dataObjectKey][key]; });
                var trimed = Object(_algorithm_arrays__WEBPACK_IMPORTED_MODULE_0__["trimNulls"])(data);
                Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_3__["drawLine"])(_this.pluginHost.context, trimed.result.map(function (d, i) { return ({
                    x: xScale(i + trimed.deleted),
                    y: yScale(d),
                }); }), color, 1 * _this.pluginHost.chart.options.resolution);
            });
            this.drawTitle(this.pluginHost.selectedIndex || this.pluginHost.range.visible().length - 1);
        };
        LineIndicatorPlugin.prototype.drawTitle = function (i) {
            var _this = this;
            var _a = this.pluginHost, ctx = _a.context, frame = _a.frame, range = _a.range;
            var data = range.visible();
            var d = data[i];
            if (data.length > 0) {
                config.lineData.forEach(function (_a, i) {
                    var key = _a.key;
                    // if (key === 'k') debugger;
                    var n = d[config.dataObjectKey][key] || 0;
                    _this.titleDrawer.setLabel(i, config.detailMapper(key, n, i).label);
                });
                ctx.clearRect(0, frame.y, frame.width, this.pluginHost.titleHeight);
                this.titleDrawer.draw(__assign({}, frame, { height: this.pluginHost.titleHeight }));
            }
        };
        return LineIndicatorPlugin;
    }(_chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_2__["ExclusiveDrawerPlugin"]));
}


/***/ }),

/***/ "./src/plugins/ma-plugin.ts":
/*!**********************************!*\
  !*** ./src/plugins/ma-plugin.ts ***!
  \**********************************/
/*! exports provided: createMAPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMAPlugin", function() { return createMAPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");

function createMAPlugin(lineData, dataObjectKey) {
    if (dataObjectKey === void 0) { dataObjectKey = 'ma'; }
    return Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: dataObjectKey,
        title: 'MA',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 50,
                label: "MA" + key + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    });
}


/***/ }),

/***/ "./src/plugins/macd-plugin.ts":
/*!************************************!*\
  !*** ./src/plugins/macd-plugin.ts ***!
  \************************************/
/*! exports provided: createMACDPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMACDPlugin", function() { return createMACDPlugin; });
/* harmony import */ var _algorithm_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithm/arrays */ "./src/algorithm/arrays.ts");
/* harmony import */ var _chart_chart_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/chart-title */ "./src/chart/chart-title.ts");
/* harmony import */ var _chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/drawer-plugin */ "./src/chart/drawer-plugin.ts");
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paint-utils/index */ "./src/paint-utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




function createMACDPlugin(dataDescription, dataObjectKey) {
    if (dataDescription === void 0) { dataDescription = [
        {
            key: 'dif',
            color: '#FF8E29',
        },
        {
            key: 'dea',
            color: '#ADE3F3',
        },
        {
            key: 'macd',
            color: '#EC6ED9',
        },
    ]; }
    if (dataObjectKey === void 0) { dataObjectKey = 'macd'; }
    return /** @class */ (function (_super) {
        __extends(MACDPlugin, _super);
        function MACDPlugin(pluginHost) {
            var _this = _super.call(this, pluginHost) || this;
            _this.pluginHost = pluginHost;
            var theme = pluginHost.chart.theme;
            var labels = dataDescription.map(function (_a, i) {
                var key = _a.key, color = _a.color;
                return ({
                    x: i * 80 + 50,
                    label: key + ": 0.00",
                    color: color,
                });
            });
            _this.titleDrawer = new _chart_chart_title__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"](_this.pluginHost.context, 'MACD', labels, theme.titleBackground, theme.title, _this.pluginHost.chart.options.resolution);
            return _this;
        }
        MACDPlugin.prototype.postdraw = function () {
            var _this = this;
            var _a = this.pluginHost, yScale = _a.yScale, range = _a.range, context = _a.context;
            var _b = this.pluginHost.chart, xScale = _b.xScale, theme = _b.theme, options = _b.options;
            context.save();
            var visibleData = range.visible();
            dataDescription.slice(0, 2).forEach(function (_a) {
                var key = _a.key, color = _a.color;
                var data = visibleData.map(function (d) { return d[dataObjectKey][key]; });
                var trimed = Object(_algorithm_arrays__WEBPACK_IMPORTED_MODULE_0__["trimNulls"])(data);
                Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_3__["drawLine"])(_this.pluginHost.context, trimed.result.map(function (d, i) { return ({
                    x: xScale(i + trimed.deleted),
                    y: yScale(d),
                }); }), color, 1 * _this.pluginHost.chart.options.resolution);
            });
            visibleData
                .map(function (d) { return d[dataObjectKey][dataDescription[2].key]; })
                .forEach(function (n, i) {
                if (!n) {
                    return;
                }
                var width = 2 * options.resolution;
                var x = xScale(i) - width / 2;
                if (n <= 0) {
                    context.fillStyle = theme.fall;
                    var y = yScale(0);
                    var height = yScale(n) - y;
                    context.fillRect(x, y, width, height);
                }
                else {
                    context.fillStyle = theme.rise;
                    var y = yScale(n);
                    var height = yScale(0) - y;
                    context.fillRect(x, y, width, height);
                }
            });
            this.drawTitle(this.pluginHost.selectedIndex || this.pluginHost.range.visible().length - 1);
            context.restore();
        };
        MACDPlugin.prototype.onSetRange = function () {
            var minValue = Number.MAX_SAFE_INTEGER;
            var maxValue = Number.MIN_SAFE_INTEGER;
            var data = this.pluginHost.range.visible();
            var all = data.map(function (item) { return item[dataObjectKey].dif; }).concat(data.map(function (item) { return item[dataObjectKey].dea; }), data.map(function (item) { return item[dataObjectKey].macd; }));
            for (var i = 0, len = all.length; i < len; ++i) {
                var v = all[i];
                if (v < minValue) {
                    minValue = v;
                }
                else if (v > maxValue) {
                    maxValue = v;
                }
            }
            this.pluginHost.minValue = minValue;
            this.pluginHost.maxValue = maxValue;
        };
        MACDPlugin.prototype.drawTitle = function (i) {
            var _this = this;
            var _a = this.pluginHost, ctx = _a.context, frame = _a.frame, range = _a.range;
            var data = range.visible();
            var d = data[i];
            if (data.length > 0) {
                dataDescription.forEach(function (_a, i) {
                    var key = _a.key;
                    var n = d.macd[key] || 0;
                    _this.titleDrawer.setLabel(i, key.toUpperCase() + ": " + n.toFixed(2));
                });
                ctx.clearRect(0, frame.y, frame.width, this.pluginHost.titleHeight);
                this.titleDrawer.draw(__assign({}, frame, { height: this.pluginHost.titleHeight }));
            }
        };
        return MACDPlugin;
    }(_chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_2__["ExclusiveDrawerPlugin"]));
}


/***/ }),

/***/ "./src/plugins/rsi-plugin.ts":
/*!***********************************!*\
  !*** ./src/plugins/rsi-plugin.ts ***!
  \***********************************/
/*! exports provided: createRSIPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRSIPlugin", function() { return createRSIPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function createRSIPlugin(lineData, dataObjectKey) {
    if (lineData === void 0) { lineData = [
        {
            key: '1',
            color: '#FF8E29',
        },
        {
            key: '2',
            color: '#ADE3F3',
        },
        {
            key: '3',
            color: '#EC6ED9',
        },
    ]; }
    if (dataObjectKey === void 0) { dataObjectKey = 'rsi'; }
    return /** @class */ (function (_super) {
        __extends(RSIPlugin, _super);
        function RSIPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RSIPlugin.prototype.onSetRange = function () {
            var minValue = Number.MAX_SAFE_INTEGER;
            var maxValue = Number.MIN_SAFE_INTEGER;
            var data = this.pluginHost.range.visible();
            var all = data.map(function (item) { return item[dataObjectKey]['1']; }).concat(data.map(function (item) { return item[dataObjectKey]['2']; }), data.map(function (item) { return item[dataObjectKey]['3']; }));
            for (var i = 0, len = all.length; i < len; ++i) {
                var v = all[i];
                if (v < minValue) {
                    minValue = v;
                }
                else if (v > maxValue) {
                    maxValue = v;
                }
            }
            this.pluginHost.minValue = minValue;
            this.pluginHost.maxValue = maxValue;
        };
        return RSIPlugin;
    }(Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: dataObjectKey,
        title: 'RSI',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 50,
                label: "RSI: " + key + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    })));
}


/***/ }),

/***/ "./src/plugins/rsi-y-axis-plugin.ts":
/*!******************************************!*\
  !*** ./src/plugins/rsi-y-axis-plugin.ts ***!
  \******************************************/
/*! exports provided: createRSIYAxisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRSIYAxisPlugin", function() { return createRSIYAxisPlugin; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function createRSIYAxisPlugin() {
    return /** @class */ (function (_super) {
        __extends(RSIYAxisPlugin, _super);
        function RSIYAxisPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RSIYAxisPlugin.prototype.onSetRange = function () {
            var host = this.pluginHost;
            if (host.minValue > 0) {
                host.minValue = 0;
            }
            if (host.maxValue < 100) {
                host.maxValue = 100;
            }
        };
        return RSIYAxisPlugin;
    }(Object(_index__WEBPACK_IMPORTED_MODULE_0__["createYAxisPlugin"])([30, 50, 70])));
}


/***/ }),

/***/ "./src/plugins/sar-plugin.ts":
/*!***********************************!*\
  !*** ./src/plugins/sar-plugin.ts ***!
  \***********************************/
/*! exports provided: createSARPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSARPlugin", function() { return createSARPlugin; });
/* harmony import */ var _chart_chart_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chart/chart-title */ "./src/chart/chart-title.ts");
/* harmony import */ var _chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/drawer-plugin */ "./src/chart/drawer-plugin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function createSARPlugin(color, title) {
    if (color === void 0) { color = '#FF8E29'; }
    if (title === void 0) { title = 'SAR'; }
    return /** @class */ (function (_super) {
        __extends(SARPlugin, _super);
        function SARPlugin(pluginHost) {
            var _this = _super.call(this, pluginHost) || this;
            _this.pluginHost = pluginHost;
            var theme = _this.pluginHost.chart.theme;
            _this.titleDrawer = new _chart_chart_title__WEBPACK_IMPORTED_MODULE_0__["ChartTitle"](_this.pluginHost.context, title, [
                {
                    x: 80,
                    label: 'BB: 0.00',
                    color: color,
                },
            ], theme.titleBackground, theme.title, _this.pluginHost.chart.options.resolution);
            return _this;
        }
        SARPlugin.prototype.postdraw = function () {
            var _a = this.pluginHost, yScale = _a.yScale, range = _a.range, context = _a.context;
            var _b = this.pluginHost.chart, xScale = _b.xScale, resolution = _b.options.resolution, theme = _b.theme;
            var visibleData = range.visible();
            var data = visibleData.map(function (d) { return d.sar.BB; });
            var aboveColor = theme.fall;
            var belowColor = theme.rise;
            context.save();
            context.lineWidth = 1 * resolution;
            data.forEach(function (val, i) {
                if (val) {
                    if (val > visibleData[i].close) {
                        context.strokeStyle = aboveColor;
                        context.strokeStyle = aboveColor;
                    }
                    else {
                        context.strokeStyle = belowColor;
                    }
                    context.beginPath();
                    context.arc(xScale(i), yScale(val), 2 * resolution, 0, 2 * Math.PI);
                    context.stroke();
                }
            });
            context.restore();
            this.drawTitle(this.pluginHost.selectedIndex || this.pluginHost.range.visible().length - 1);
        };
        SARPlugin.prototype.drawTitle = function (i) {
            var _a = this.pluginHost, ctx = _a.context, frame = _a.frame, range = _a.range;
            var data = range.visible();
            var d = data[i];
            if (data.length > 0) {
                var n = d.sar.BB || 0;
                this.titleDrawer.setLabel(0, "BB: " + n.toFixed(2));
                ctx.clearRect(0, frame.y, frame.width, this.pluginHost.titleHeight);
                this.titleDrawer.draw(__assign({}, frame, { height: this.pluginHost.titleHeight }));
            }
        };
        return SARPlugin;
    }(_chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_1__["ExclusiveDrawerPlugin"]));
}


/***/ }),

/***/ "./src/plugins/sma-plugin.ts":
/*!***********************************!*\
  !*** ./src/plugins/sma-plugin.ts ***!
  \***********************************/
/*! exports provided: createSMAPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSMAPlugin", function() { return createSMAPlugin; });
/* harmony import */ var _line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-indicator-plugin */ "./src/plugins/line-indicator-plugin.ts");

function createSMAPlugin(lineData) {
    return Object(_line_indicator_plugin__WEBPACK_IMPORTED_MODULE_0__["createLinePlugin"])({
        dataObjectKey: 'sma',
        title: 'SMA',
        lineData: lineData,
        detailMapper: function (key, datum, i) {
            return {
                x: i * 80 + 80,
                label: "SMA " + key + ": " + (datum === 0 ? 0 : datum.toFixed(2)),
            };
        },
    });
}


/***/ }),

/***/ "./src/plugins/y-axis-plugin.ts":
/*!**************************************!*\
  !*** ./src/plugins/y-axis-plugin.ts ***!
  \**************************************/
/*! exports provided: createYAxisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createYAxisPlugin", function() { return createYAxisPlugin; });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.uniq */ "./node_modules/lodash.uniq/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _algorithm_divide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithm/divide */ "./src/algorithm/divide.ts");
/* harmony import */ var _chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/drawer-plugin */ "./src/chart/drawer-plugin.ts");
/* harmony import */ var _paint_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paint-utils/index */ "./src/paint-utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




function createYAxisPlugin(ticks) {
    if (ticks === void 0) { ticks = 5; }
    return /** @class */ (function (_super) {
        __extends(YAxisPlugin, _super);
        function YAxisPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        YAxisPlugin.prototype.predraw = function () {
            var host = this.pluginHost;
            var tickValues;
            if (ticks instanceof Array) {
                tickValues = ticks
                    .map(function (n) { return ({ value: n, color: host.chart.theme.yTick }); });
            }
            else {
                tickValues = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(Object(_algorithm_divide__WEBPACK_IMPORTED_MODULE_1__["divide"])(host.bottomValue(), host.topValue(), ticks))
                    .map(function (n) { return ({ value: n, color: host.chart.theme.yTick }); });
            }
            Object(_paint_utils_index__WEBPACK_IMPORTED_MODULE_3__["drawYAxis"])(host.context, tickValues, host.frame, host.yScale, host.chart.options.resolution, true, host.chart.theme.gridLine);
        };
        return YAxisPlugin;
    }(_chart_drawer_plugin__WEBPACK_IMPORTED_MODULE_2__["DrawerPlugin"]));
}


/***/ })

/******/ });
});