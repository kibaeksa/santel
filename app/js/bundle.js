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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    getNameToLink: function getNameToLink(str) {
        return str.toLowerCase().replace(/\s+/g, '-');
    },
    getLinkToName: function getLinkToName(str) {
        return str.toLowerCase().replace(/\-/g, ' ');
    },
    getCategoryData: function getCategoryData(name, contentsData) {
        console.log(11);
        for (var i = 0; i < contentsData.length; i++) {
            console.log(contentsData[i].name.toLowerCase());
            console.log(this.getLinkToName(name));
            if (contentsData[i].name.toLowerCase() == this.getLinkToName(name)) {

                return {
                    index: i,
                    name: contentsData[i].name,
                    data: contentsData[i]
                };
            }
        }

        return false;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _worksList = __webpack_require__(4);

var _worksList2 = _interopRequireDefault(_worksList);

var _workView = __webpack_require__(5);

var _workView2 = _interopRequireDefault(_workView);

var _about = __webpack_require__(6);

var _about2 = _interopRequireDefault(_about);

var _culture = __webpack_require__(7);

var _culture2 = _interopRequireDefault(_culture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var currentState = undefined;
var renderTimer = void 0;
var rootElem = document.getElementById('contents');

var getFilteredHash = function getFilteredHash() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hash;

    var hashInfo = {};
    var arrayToHash = str.replace(/#\/?/, '').split('/');

    if (arrayToHash.length <= 1 && arrayToHash[0] == '') {
        hashInfo.name = 'index';
    } else {
        hashInfo.name = arrayToHash[0];
        arrayToHash.splice(0, 1);
        hashInfo.params = arrayToHash.length == 0 ? null : arrayToHash;
    }

    return hashInfo;
};

var getObjectByCategory = function getObjectByCategory(name) {
    if (name != undefined) {
        var result = void 0;
        switch (currentState) {
            case 'workslist':
                result = _worksList2.default;
                break;
            case 'worksview':
                result = _workView2.default;
                break;
            case 'index':
                result = _index2.default;
                break;
            case 'about':
                result = _about2.default;
                break;
            case 'culture':
                result = _culture2.default;
                break;
            default:
                break;
        }

        return result;
    }
};

var destroy = function destroy() {
    var obj = getObjectByCategory(currentState);
    if (obj && obj.destroy) {
        obj.destroy();
    }
};

var setGnbButton = function setGnbButton(ctgrName) {
    console.log(ctgrName);
    var targetElem = void 0;
    switch (ctgrName) {
        case 'index':
            targetElem = document.getElementById('gnb-button-home');
            break;
        case 'workslist':
        case 'worksview':
            targetElem = document.getElementById('gnb-button-works');
            break;
        case 'about':
            console.log(11);
            targetElem = document.getElementById('gnb-button-about');
            break;
        case 'culture':
            targetElem = document.getElementById('gnb-button-culture');
            break;
    }

    console.log(targetElem);

    if (targetElem) {
        [].concat(_toConsumableArray(document.querySelectorAll('#gnb-menu .main-menu li'))).map(function (liElem) {
            liElem.className = '';
        });
        targetElem.className = 'active';
    }
};

var render = function render() {
    var renderData = void 0;
    var hashData = getFilteredHash(window.location.hash);
    // destroy();
    switch (hashData.name) {
        case 'works':
            currentState = 'works';
            if (!hashData.params || !hashData.params.length || hashData.params[0] == '') {
                currentState += 'list';
                renderData = _worksList2.default.render(_data2.default, hashData);
            } else {
                currentState += 'view';
                renderData = _workView2.default.render(_data2.default, hashData);
            }
            break;
        case 'about':
            currentState = 'about';
            renderData = _about2.default.render(_data2.default);
            break;
        case 'culture':
            currentState = 'culture';
            break;
        case 'index':
            currentState = 'index';
            renderData = _index2.default.render(_data2.default);
            break;
        default:
            renderData = {
                htmlString: '<div class="error404">유효하지 않은 페이지입니다.</div>'
            };
    }

    setGnbButton(currentState);
    rootElem.innerHTML = renderData.htmlString;
    if (renderData.callback) {
        renderData.callback();
    }
};

render();

window.addEventListener('hashchange', render);

var handleGlobalNav = function handleGlobalNav() {};

(function () {
    var lastScrollOffset = 0;
    var isOpenGnb = false;
    document.querySelector('#header .gnb-menu-button').addEventListener('click', function (event) {
        if (isOpenGnb) {
            document.getElementsByTagName('html')[0].classList.remove('nav-open', 'inactive-scroll');
            document.getElementById('gnb-menu').classList.remove('open');
            event.currentTarget.classList.remove('open');
        } else {
            document.getElementsByTagName('html')[0].classList.add('nav-open', 'inactive-scroll');
            document.getElementById('gnb-menu').classList.add('open');
            event.currentTarget.classList.add('open');
            window.scrollTo(0, 0);
        }

        isOpenGnb = !isOpenGnb;
    });

    [].concat(_toConsumableArray(document.querySelectorAll('#gnb-menu .main-menu li a'))).map(function (elem, index) {
        elem.addEventListener('click', function (event) {
            var target = event.currentTarget;
            if (target.parentNode.className.match(/\s?active\s?/)) {
                return;
            }

            setGnbButton(target.dataset.ctgr);

            isOpenGnb = false;
            document.getElementsByTagName('html')[0].classList.remove('nav-open', 'inactive-scroll');
            document.getElementById('gnb-menu').classList.remove('open');
            document.querySelector('#header .gnb-menu-button').classList.remove('open');

            renderTimer = setTimeout(function () {
                destroy();
                setTimeout(function () {
                    currentState = target.dataset.ctgr;
                    window.location.hash = target.dataset.href;
                }, 200);
            }, 550);
        });
    });

    document.querySelector('#header h1 a').addEventListener('click', function (event) {
        if (currentState == 'index') {
            return;
        }

        window.location.hash = event.currentTarget.dataset.href;
    });
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    name: 'ADIDAS Online Store',
    title: '아디다스 공식 온라인 스토어',
    category: 'Design',
    date: 'Aug, 2011 ~',
    description: '글로벌 대표 스포츠 브랜드인 아디다스의 공식 온라인 스토어를 2011년 신규 구축부터 현재 운영까지 업무를 수행하고 있습니다.',
    client: '아디다스 코리아(유)',
    url: 'shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidas-1.jpg', 'adidas-2.jpg', 'adidas-3.jpg', 'adidas-4.jpg', 'adidas-5.jpg', 'adidas-6.jpg']
    }
}, {
    name: 'ADIDAS Mobile Store',
    title: '아디다스 공식 모바일 온라인 스토어',
    category: 'Design',
    date: 'Aug, 2011 ~',
    description: '글로벌 대표 스포츠 브랜드인 아디다스의 공식 모바일 스토어를 2011년 신규 구축부터 현재 운영까지 업무를 수행하고 있습니다.',
    client: '아디다스 코리아(유)',
    url: 'm.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidassuperstar-1.jpg', 'adidassuperstar-2.jpg', 'adidassuperstar-3.jpg', 'adidassuperstar-4.jpg']
    }
}, {
    name: 'ADIDAS yeezyboost',
    title: 'ADIDAS Stansmith',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidasstansmith-1.jpg', 'adidasstansmith-2.jpg', 'adidasstansmith-3.jpg', 'adidasstansmith-4.jpg']
    }
}, {
    name: 'ADIDAS2',
    title: 'ADIDAS Yeezy Boost',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidas-1.jpg', 'adidas-2.jpg', 'adidas-3.jpg', 'adidas-4.jpg', 'adidas-5.jpg', 'adidas-6.jpg']
    }
}, {
    name: 'ADIDAS SuperStar2',
    title: 'ADIDAS Superstar',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidassuperstar-1.jpg', 'adidassuperstar-2.jpg', 'adidassuperstar-3.jpg', 'adidassuperstar-4.jpg']
    }
}, {
    name: 'ADIDAS yeezyboost2',
    title: 'ADIDAS Stansmith',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidasstansmith-1.jpg', 'adidasstansmith-2.jpg', 'adidasstansmith-3.jpg', 'adidasstansmith-4.jpg']
    }
}, {
    name: 'ADIDAS3',
    title: 'ADIDAS Yeezy Boost',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidas-1.jpg', 'adidas-2.jpg', 'adidas-3.jpg', 'adidas-4.jpg', 'adidas-5.jpg', 'adidas-6.jpg']
    }
}, {
    name: 'ADIDAS SuperStar3',
    title: 'ADIDAS Superstar',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidassuperstar-1.jpg', 'adidassuperstar-2.jpg', 'adidassuperstar-3.jpg', 'adidassuperstar-4.jpg']
    }
}, {
    name: 'ADIDAS yeezyboost3',
    title: 'ADIDAS Stansmith',
    category: 'Design',
    date: 'Jun 22, 2017',
    description: '샌텔의 허정욱 실장은 아디다스 온라인 스토어 의 불편한 UI/UX 적은 요소들을 100% 개선해 대한민국 이커머스 시장의 새 막을 열었다.',
    client: '아디다스 코리아',
    url: 'www.shop.adidas.co.kr',
    thumbnails: {
        publicPath: '/images/temp/',
        imgList: ['adidasstansmith-1.jpg', 'adidasstansmith-2.jpg', 'adidasstansmith-3.jpg', 'adidasstansmith-4.jpg']
    }
}];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var callback = function callback() {

    var mainTextBox = document.getElementById('main-text');
    var mainTextHeight = mainTextBox.clientHeight;

    console.log(mainTextHeight);

    mainTextBox.style.marginTop = -mainTextHeight / 2 + 'px';

    window.addEventListener('resize', function (event) {
        document.getElementById('main-video').style.width = window.innerWidth + 'px';
        document.getElementById('main-video').style.height = window.innerHeight + 'px';
        mainTextBox.style.marginTop = -mainTextHeight / 2 + 'px';
    });

    setTimeout(function () {
        document.getElementsByTagName('html')[0].classList.add('main-page');
        document.querySelector('.main').classList.add('loaded');
        initVideo('/images/temp/bg2.mp4');
    }, 100);
};

var initVideo = function initVideo(videoSrc) {
    var elemVideo = document.createElement('video');
    var elemSource = document.createElement('source');
    var targetElem = document.querySelector('#main-video>div');

    elemVideo.autoplay = true;
    elemVideo.loop = true;
    elemVideo.muted = true;

    elemSource.src = videoSrc;
    elemSource.type = 'video/mp4';
    elemVideo.appendChild(elemSource);

    elemVideo.onloadstart = function () {
        targetElem.appendChild(elemVideo);
        setTimeout(function () {
            elemVideo.className += 'loaded';
            setTimeout(function () {
                elemVideo.play();
            }, 100);
        }, 500);
    };

    elemVideo.onended = function (event) {
        event.currentTarget.parentNode.parentNode.removeChild(undefined.parentNode);
    };
};

exports.default = {
    render: function render(contentsData) {
        var parentWidth = document.getElementById('contents').clientWidth;

        var htmlString = '\n            <div class="main">\n                <div id="main-video" style="width:' + window.innerWidth + 'px;height:' + window.innerHeight + 'px;">\n                    <div>\n                        <video autoplay="" muted="" style="position:absolute;top:50%;">\n                            <source src="https://monopo.co.jp/wp-content/themes/monopo/video/bg2.mp4" type="video/mp4">\n                        </video>\n                    </div>\n                </div>\n                <div id="main-text" class="gnb-menu-wrapper">\n                    <h6>A CREATIVE DIGITAL AGENCY.</h6>\n                    <span></span>\n                    <h2 class="pc-ver">WE MAKE SUCCESSFUL DIGITAL<br />STORIES FOR WEB &amp; MOBILE</h2>\n                    <h2 class="tab-ver">WE MAKE<br />SUCCESSFUL DIGITAL<br />STORIES FOR<br /> WEB &amp; MOBILE</h2>\n                    <h2 class="mob-ver">WE MAKE<br /> SUCCESSFUL<br /> DIGITAL<br />STORIES FOR<br /> WEB &amp;<br /> MOBILE</h2>\n                    <a href="/#/works" data-href="/works" data-ctgr="workslist" id="button-works">OUR WORKS</a>\n                </div>\n            </div>\n        ';

        return {
            htmlString: htmlString,
            callback: callback
        };
    },
    destroy: function destroy() {
        document.getElementsByTagName('html')[0].classList.remove('main-page');
        document.querySelector('.main').classList.add('destroy');
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var callback = function callback() {
    var itemElems = document.querySelectorAll('.items-wrapper .item');

    [].concat(_toConsumableArray(itemElems)).map(function (item, index) {
        item.addEventListener('click', handleClick);

        item.querySelector('.img').addEventListener('mousemove', function (event) {
            handleImageMove(item.querySelectorAll('.img img'), event);
        });

        item.querySelector('.img').addEventListener('mouseleave', function (event) {
            handleImageOut(item.querySelectorAll('.img img'), event);
        });

        setTimeout(function () {
            item.className += ' loaded';
        }, index * 50);
    });
};

var handleClick = function handleClick(event) {
    // console.log(event.currentTarget.dataset.href);
    window.location.href = event.currentTarget.dataset.href;
};

var handleImageMove = function handleImageMove(imgData, event) {
    var length = imgData.length;
    var width = event.currentTarget.clientWidth;
    var unit = event.currentTarget.clientWidth / length;

    var curIndex = Math.floor((event.clientX - event.currentTarget.getBoundingClientRect().left) / unit);
    curIndex = curIndex < 0 ? 0 : curIndex;

    [].concat(_toConsumableArray(imgData)).map(function (img, index) {
        if (index == curIndex) {
            img.className = 'loaded active';
        } else {
            img.className = 'loaded';
        }
    });
};

var handleImageOut = function handleImageOut(imgData, event) {
    [].concat(_toConsumableArray(imgData)).map(function (img, index) {
        if (index == 0) {
            img.className = 'loaded active';
        } else {
            img.className = 'loaded';
        }
    });
};

exports.default = {
    render: function render(contentsData, paramData) {
        var htmlString = '';
        /* List */
        htmlString = '\n            <div class="items-wrapper container clearfix">\n                <h2>RECENT WORK</h2>\n        ';
        var viewCol = 3;
        contentsData.map(function (data, index) {
            var itemColsOrder = Math.abs(index % viewCol);
            var itemRowsOrder = Math.floor(index / viewCol);
            var elemLink = _common2.default.getNameToLink(data.name);

            htmlString += '\n                <div class="item" data-id="' + index + '" data-href="/#/works/' + elemLink + '">\n                    <div class="item-wrapper">\n                        <div class="img">\n                            ' + data.thumbnails.imgList.map(function (imgPath, index) {
                return '<img src="' + (data.thumbnails.publicPath + imgPath) + '" ' + (index == 0 ? 'class="active"' : '') + ' alt="" />';
            }).join('') + '\n                        </div>\n                        <div class="info">\n                            <h3>' + data.title + '</h3>\n                            <div class="date">' + data.date + '</div>\n                        </div>\n                    </div>\n\n                </div>\n            ';
        });
        htmlString += '</div>';

        return {
            htmlString: htmlString,
            callback: callback
        };
    },
    destroy: function destroy() {
        [].concat(_toConsumableArray(document.querySelectorAll('.items-wrapper .item'))).map(function (elem) {
            elem.className += ' destroy';
        });
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryName = '';
var callback = function callback() {
    setTimeout(function () {
        document.querySelector('.work-detail').className += ' loaded';
    }, 300);
    window.scrollTo(0, 0);

    var viewPage = loadHTML('/viewAssets/' + categoryName + '.html').then(function (result) {
        if (result.match(/Cannot GET/)) {
            document.querySelector('.work-detail .view-contents').insertAdjacentHTML('afterbegin', '<div class="error404">\uCE74\uD14C\uACE0\uB9AC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</div>');
        } else {
            document.querySelector('.work-detail .view-contents').insertAdjacentHTML('afterbegin', result);
        }
    }).catch(function (error) {
        console.log(error);
    });
};

var loadHTML = async function loadHTML(path) {
    var htmlProm = await fetch(path).then(function (result) {
        return result.text();
    }).then(function (html) {
        return html;
    }).catch(function () {
        throw 'HTML 파일을 읽지 못했습니다.';
    });

    return htmlProm;
};

exports.default = {
    render: function render(contentsData, paramData) {
        var htmlString = '';
        var viewData = _common2.default.getCategoryData(paramData.params[0], contentsData);

        if (viewData) {
            categoryName = viewData.data.name;
            htmlString += '\n                <div class="work-detail">\n                    <div class="container">\n                        <div class="header">\n                            <h2>' + viewData.data.title + '</h2>\n                            <div class="date">' + viewData.data.date + '</div>\n                        </div>\n                        <div class="contents">\n\n                            <div class="view-contents">\n\n                            </div>\n\n                            <div class="short-info">\n                                <div class="title">' + viewData.data.title + '</div>\n                                <div class="description">' + viewData.data.description + '</div>\n                                <ul>\n                                    <li>\n                                        <dl>\n                                            <dt>Title</dt>\n                                            <dd>' + viewData.data.title + '</dd>\n                                        </dl>\n                                    </li>\n                                    <li>\n                                        <dl>\n                                            <dt>Client</dt>\n                                            <dd>' + (viewData.data.client ? viewData.data.client : '-') + '</dd>\n                                        </dl>\n                                    </li>\n                                    <li>\n                                        <dl>\n                                            <dt>URL</dt>\n                                            <dd>' + (viewData.data.url ? '<a href="' + (viewData.data.url.match(/http:\/\//g) ? viewData.data.url : 'http://' + viewData.data.url) + '" target="_blank">' + viewData.data.url + '</a>' : '-') + '</dd>\n                                        </dl>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!-- short-info END -->\n                            \n                        </div>\n                        <!-- contents END -->\n\n                        <div class="indicator">\n                            <div class="page-button-wrapper button-left-wrapper">\n                                <a href="/#/works/' + (viewData.index == 0 ? _common2.default.getNameToLink(contentsData[contentsData.length - 1].name) : _common2.default.getNameToLink(contentsData[viewData.index - 1].name)) + '" class="page-button"></a>\n                                <div class="info-next">\n                                    <span class="prefix">\uC774\uC804</span>\n                                    <div class="article-name">' + (viewData.index == 0 ? contentsData[contentsData.length - 1].name : contentsData[viewData.index - 1].name) + '</div>\n                                </div>\n                            </div>\n\n                            <div class="page-button-wrapper button-right-wrapper">\n                                <a href="/#/works/' + (viewData.index == contentsData.length - 1 ? _common2.default.getNameToLink(contentsData[0].name) : _common2.default.getNameToLink(contentsData[viewData.index + 1].name)) + '" class="page-button" data-test="' + (viewData.index == contentsData.length - 1) + '"></a>\n\n                                <div class="info-next">\n                                    <span class="prefix">\uB2E4\uC74C</span>\n                                    <div class="article-name">' + (viewData.index == contentsData.length - 1 ? contentsData[0].name : contentsData[viewData.index + 1].name) + '</div>\n                                </div>\n                            </div>\n\n                            <div class="page-number-wrapper">\n                                <div class="inner">\n                                    <strong>' + (viewData.index + 1) + '</strong>\n                                    <span>/ ' + contentsData.length + '</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- container END -->\n                </div>\n                <!-- work-detail END -->\n            ';
            // ${viewData.data.viewContents ? viewData.data.viewContents : `<div class="no-contents">NO CONTENTS</div>`}
        } else {
            htmlString += '\n                <div class="error404">\uCE74\uD14C\uACE0\uB9AC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</div>\n            ';
        }

        return {
            htmlString: htmlString,
            callback: callback
        };
    },
    destroy: function destroy() {}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var callback = function callback() {
    console.log('callback');
};

exports.default = {
    render: function render() {
        var htmlString = '\n            <!--\n                <div class="about" style="padding-top:120px;text-align:center;">\n                    <h2>ABOUT</h2>\n                    <p id="title">\uB208\uB204\uB09C\uB098</p>\n                </div>\n             -->\n            <style>\n             #header h1 a{color: #fff;}\n            </style>\n            <div class="about-title-box">\n                <h2>About Us</h2>\n                <p>We make successfull digital stories for WEB &amp; MOBILE</p>\n            </div>\n            <div class="about-intro-box">\n                <div class="about-object-group">\n                    <div class="obj-thunder thu-1"></div>\n                    <div class="obj-thunder thu-2"></div>\n                    <div class="obj-thunder thu-3"></div>\n                    <div class="obj-Hcircle top-hcir"><span class="dottCir"></span></div>\n                    <div class="obj-diagonal dg_left"></div>\n                    <div class="obj-square squ-1"></div>\n                    <div class="obj-square squ-2"></div>\n                    <div class="obj-wave"></div>\n                    <div class="obj-long-line"></div>\n                    <div class="obj-diagonal dg_right"></div>\n                    <div class="obj-quites qut-ani"></div>\n                    <div class="obj-HcirLine"><span class="cir-line"></span></div>\n                    <div class="obj-quites qut-small"></div>\n                    <div class="obj-square squ-3"></div>\n                    <div class="obj-square squ-4"></div>\n                    <div class="obj-thunder thu-4"></div>\n                    <div class="obj-thunder thu-5"></div>\n                    <div class="obj-thunder thu-6"></div>\n                    <div class="obj-Hcircle bot-hcir"><span class="dottCir"></span></div>\n                </div>\n                <div class="article-gold">\n                    <div class="art-text-box">\n                        <h3 class="art-text1">Design</h3>\n                        <h3 class="art-text2">and</h3>\n                        <h3 class="art-text3">Marketing</h3>\n                        <span class="bgc-gray"></span>\n                    </div>\n                </div>\n                <div class="article-vision">\n                    <h4>Vision</h4>\n                    <p>\uC6B0\uB9AC\uB294 \uC6B0\uB9AC\uC758 \uB514\uC790\uC778\uACFC \uAE30\uC220\uC744 \uD1B5\uD574 \uC880 \uB354 \uB098\uC740 \uC138\uC0C1\uC744 \uB9CC\uB4E4\uACE0\uC790 \uD569\uB2C8\uB2E4.</p>\n                    <p>\uC6B0\uB9AC\uB294 \uC624\uC9C1 \uB354 \uB098\uC740 \uBC1C\uC804\uB428\uC744 \uCD94\uAD6C\uD558\uBA70, \uC131\uACF5\uC801\uC778 \uC628\uB77C\uC778 \uBE44\uC9C0\uB2C8\uC2A4\uB97C <br/> \uB2EC\uC131\uD558\uAE30 \uC704\uD55C <span class="font-g">\uC804\uB7B5\uC801 \uD30C\uD2B8\uB108</span>\uAC00 \uB418\uACE0\uC790\uD569\uB2C8\uB2E4.</p>\n                    <span class="dash-bottom line-w"></span>\n                    <span class="dash-bottom line-g"></span>\n                </div>\n                <div class="article-principal">\n                    <h4>Principal</h4>\n                    <p>\uC6B0\uB9AC\uC758 \uBAA9\uD45C\uB294 \uD0C1\uC6D4\uD558\uACE0 \uC7AC\uB2A5 \uC788\uB294 \uC778\uB825\uC744 \uD655\uBCF4\uD558\uC5EC <br/> \uAC01\uC790\uC758 \uB3C5\uCC3D\uC131\uC744 \uC774\uB04C\uC5B4 \uB0B4\uB294 \uAC83\uC785\uB2C8\uB2E4. <br/>\n                        \uD3B8\uC548\uD55C \uBD84\uC704\uAE30\uC640 \uBA85\uD655\uD55C \uC6B4\uC601 \uD504\uB85C\uC138\uC2A4\uAC00 \uC774\uB97C \uC9C0\uC6D0\uD560 \uAC83\uC774\uBA70, <br/><span class="font-g">\uAC1C\uC778\uACFC \uC870\uC9C1\uC758 \uBAA9\uD45C\uAC00 \uB2E4\uB974\uC9C0 \uC54A\uC74C\uC744 \uC2E4\uCC9C</span>\uD558\uACE0\uC790 \uD569\uB2C8\uB2E4.</p>\n                    <p>\uC9C0\uB09C 8\uB144 \uB3D9\uC548 \uD6CC\uB96D\uD55C \uC778\uB825\uACFC \uAC15\uD55C \uD300\uC6CC\uD06C\uB97C \uD655\uBCF4 \uD588\uC73C\uBA70 <br/> \uC9C0\uC18D\uC801\uC778 \uD601\uC2E0\uC744 \uC704\uD574 \uB178\uB825\uD574 \uC654\uC2B5\uB2C8\uB2E4. <br/>\n                        \uD604\uC7AC \uC6B0\uB9AC\uB294 \uC628\uB77C\uC778 \uBE44\uC9C0\uB2C8\uC2A4\uC640 \uBBF8\uB514\uC5B4, \uD2B9\uD788 \uC628\uB77C\uC778\uCEE4\uBA38\uC2A4\uC5D0 \uB300\uD55C <br/> \uC804\uBB38 \uC9C0\uC2DD\uACFC \uB2E4\uC591\uD55C \uACBD\uD5D8\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p>\n                    <p>\uC55E\uC73C\uB85C\uB3C4 \uC5B4\uB5A4 \uB3C4\uC804\uC774 \uC624\uB354\uB77C\uB3C4 <br/><span class="font-g">\uC624\uC9C1 \uB354 \uB098\uC74C\uC744 \uC704\uD574</span>\uCC3D\uC758\uC801\uC73C\uB85C \uC0DD\uAC01\uD558\uACE0 \uBC1C\uC804\uD574 \uB098\uAC08 \uAC83\uC785\uB2C8\uB2E4.</p>\n                    <span class="dash-bottom line-g"></span>\n                </div>\n            </div>\n            <div class="about-service-box">\n                <span class="dash-bottom"></span>\n                <h4>Service</h4>\n                <div class="service-contents">\n                    <dl class="service-list-1">\n                        <dt>BRANDING</dt>\n                        <dd>Corporate image Art direction</dd>\n                        <dd>Graphic design</dd>\n                        <dd>Interactive design</dd>\n                        <dd>Web and mobile</dd>\n                        <dd>Web app</dd>\n                        <dd>Motion design</dd>\n                    </dl>\n                    <span class="dash-service ser-1"></span>\n                    <dl class="service-list-2">\n                        <dt>STRATEGY</dt>\n                        <dd>Brand strategy</dd>\n                        <dd>Interactive strategy</dd>\n                        <dd>Consultant services and project planning</dd>\n                        <dd>Data analysis</dd>\n                    </dl>\n                    <span class="dash-service ser-2"></span>\n                    <dl class="service-list-3">\n                        <dt>E-COMMERCE</dt>\n                        <dd>Consulting</dd>\n                        <dd>Shopping mall Development</dd>\n                        <dd>Design & marketing</dd>\n                        <dd>System maintenance CRM</dd>\n                        <dd>Market analysis</dd>\n                    </dl>\n                    <span class="dash-service ser-3"></span>\n                    <dl class="service-list-4">\n                        <dt>MARKTING & COMMUNICATIONS</dt>\n                        <dd>Advertising(print, interactive, SNS)</dd>\n                        <dd>Integrated campaigns</dd>\n                        <dd>Promotional campaigns</dd>\n                        <dd>Community management</dd>\n                        <dd>Corporate videos</dd>\n                    </dl>\n                </div>\n            </div>\n            <div class="about-contact-box">\n                <div class="contact-info">\n\n                    <h5>CONTACT</h5>\n                    <p>5TH FLOOR, 9-15, GANGNAM-DAERO 55-GIL,<br />SEOCHO-GU, SEOUL, REPUBLIC OF KOREA</p>\n                    <ul>\n                        <li><p>TEL : 02.501.6172</p></li>\n                        <li><p>FAX : 02.6499.1250</li>\n                    </ul>\n\n                    <a href="https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC+%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C55%EA%B8%B8+9-15/@37.4947021,127.0257289,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca15af2cf9b17:0xd1ccf1ba8e2f15a0!8m2!3d37.4947021!4d127.0279176?dcr=0" target="_blank"  class="map-load">MAP</a>\n\n                    <h5 class="none_mb">WORK WITH US</h5>\n                    <a href="mailto:Contact@santelglobal.com" class="email-load">Contact@santelglobal.com</a>\n\n                </div>\n            </div>\n            <div class="about-work-box">\n                <a href="">\n                    <div class="load-box">\n                        <p>Works</p>\n                        <img src="#" alt="#">\n                    </div>\n                    <div class="active-box">\n                        <p>Works</p>\n                        <div class="dir-ani">\n                            <span class="col-line"></span>\n                            <span class="diag-1"></span>\n                            <span class="diag-2"></span>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        ';

        return {
            htmlString: htmlString,
            callback: callback
        };
    },
    destroy: function destroy() {}
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    render: function render() {
        return {
            htmlString: "\n                <div class=\"about\" style=\"padding-top:120px;text-align:center;\">\n                    <h2>CULTURE</h2>\n                </div>"
        };
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map