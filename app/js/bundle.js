/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

var _data2 = _interopRequireDefault(_data);

var _mainUI = __webpack_require__(2);

var _mainUI2 = _interopRequireDefault(_mainUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootElem = document.getElementById('wrapper');

console.log(111);
var render = function render(renderData) {
    rootElem.innerHTML = renderData.htmlString;
    renderData.callback();
};

render(_mainUI2.default.render(_data2.default));

var renderView = function renderView(data) {};

var renderContact = function renderContact(data) {};

var loadRendering = function loadRendering() {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = [{
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}, {
    name: 'eureka9',
    title: 'Euraka / Catalogue',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/eureka9_1-495x346.jpg', '/images/temp/eureka9_2-495x346.jpg', '/images/temp/eureka9_3-495x346.jpg', '/images/temp/eureka9_4-495x346.jpg', '/images/temp/eureka9_5-495x346.jpg', '/images/temp/eureka9_6-495x346.jpg', '/images/temp/eureka9_7-495x346.jpg', '/images/temp/eureka9_8-495x346.jpg', '/images/temp/eureka9_9-495x346.jpg', '/images/temp/eureka9_10-495x346.jpg']
}, {
    name: 'illusion',
    title: 'McCord Museum / Illution',
    category: 'publishing',
    description: '',
    thumbnails: ['/images/temp/illusion_1-495x346.jpg', '/images/temp/illusion_2-495x346.jpg', '/images/temp/illusion_3-495x346.jpg', '/images/temp/illusion_4-495x346.jpg', '/images/temp/illusion_5-495x346.jpg', '/images/temp/illusion_6-495x346.jpg', '/images/temp/illusion_7-495x346.jpg', '/images/temp/illusion_8-495x346.jpg', '/images/temp/illusion_9-495x346.jpg', '/images/temp/illusion_10-495x346.jpg', '/images/temp/illusion_11-495x346.jpg', '/images/temp/illusion_12-495x346.jpg', '/images/temp/illusion_13-495x346.jpg', '/images/temp/illusion_14-495x346.jpg']
}];
exports.default = Data;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var callback = function callback() {
    var itemElems = document.querySelectorAll('.item-wrapper .item');

    [].concat(_toConsumableArray(itemElems)).map(function (item, index) {
        item.querySelector('.img').addEventListener('mousemove', function (event) {
            handleImageMove(item.querySelectorAll('.img img'), event);
        });

        item.querySelector('.img').addEventListener('mouseleave', function (event) {
            handleImageOut(item.querySelectorAll('.img img'), event);
        });
    });
};

var handleImageMove = function handleImageMove(imgData, event) {
    var length = imgData.length;
    var width = event.currentTarget.clientWidth;
    var unit = event.currentTarget.clientWidth / length;

    var curIndex = Math.floor((event.clientX - event.currentTarget.getBoundingClientRect().left) / unit);
    curIndex = curIndex < 0 ? 0 : curIndex;

    [].concat(_toConsumableArray(imgData)).map(function (img, index) {
        if (index == curIndex) {
            img.className = 'active';
        } else {
            img.className = '';
        }
    });
};

var handleImageOut = function handleImageOut(imgData, event) {
    [].concat(_toConsumableArray(imgData)).map(function (img, index) {
        if (index == 0) {
            img.className = 'active';
        } else {
            img.className = '';
        }
    });
};

exports.default = {
    render: function render(contentsData) {
        var parentWidth = document.getElementById('wrapper').clientWidth;
        // const wrapperPadding = 100;
        var itemPadding = 50;
        var contentWidth = 495;
        var contentHeight = 346;
        var ratio = contentHeight / contentWidth;

        var htmlString = '<div class="main item-wrapper">';
        var viewCol = 4;
        var width = (parentWidth - itemPadding * (viewCol + 1)) / viewCol;

        contentsData.map(function (data, index) {
            var itemColsOrder = Math.abs(index % viewCol);
            var itemRowsOrder = Math.floor(index / viewCol);
            htmlString += '\n                <div class="item" data-id="' + index + '"\n                    style="width:' + width + 'px;height:' + width * ratio + 'px;top:' + (itemRowsOrder * (width * ratio) + itemPadding * itemRowsOrder) + 'px;left : ' + (itemColsOrder == 0 ? itemPadding : itemColsOrder * width + itemPadding * itemColsOrder) + 'px;"\n                >\n                    <div class="img">\n                        ' + data.thumbnails.map(function (imgPath, index) {
                return index == 0 ? '<img src="' + imgPath + '" class="active" alt="" />' : '<img src="' + imgPath + '" alt="" />';
            }).join('') + '\n                    </div>\n                    <div class="info">\n                        <h2>' + data.title + '</h2>\n                        <div class="description">' + data.description + '</div>\n                    </div>\n                </div>\n            ';
        });
        htmlString += '</div>';

        return {
            htmlString: htmlString,
            callback: callback
        };
    },
    destroy: function destroy() {
        console.log('destroy');
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map