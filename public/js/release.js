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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return VERSION; });
/* unused harmony export PI_2 */
/* unused harmony export RAD_TO_DEG */
/* unused harmony export DEG_TO_RAD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RENDERER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLEND_MODES; });
/* unused harmony export DRAW_MODES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SCALE_MODES; });
/* unused harmony export WRAP_MODES */
/* unused harmony export GC_MODES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return URL_FILE_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DATA_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SVG_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHAPES; });
/* unused harmony export PRECISION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TRANSFORM_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TEXT_GRADIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_PRIORITY; });
/**
 * String of the current PIXI version.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name VERSION
 * @type {string}
 */
// export const VERSION = __VERSION__;
var VERSION = 'private';

/**
 * Two Pi.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var PI_2 = Math.PI * 2;

/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var RAD_TO_DEG = 180 / Math.PI;

/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var DEG_TO_RAD = Math.PI / 180;

/**
 * Constant to identify the Renderer Type.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name RENDERER_TYPE
 * @type {object}
 * @property {number} UNKNOWN - Unknown render type.
 * @property {number} WEBGL - WebGL render type.
 * @property {number} CANVAS - Canvas render type.
 */
var RENDERER_TYPE = {
  UNKNOWN: 0,
  WEBGL: 1,
  CANVAS: 2
};

/**
 * Various blend modes supported by PIXI.
 *
 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * Anything else will silently act like NORMAL.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name BLEND_MODES
 * @type {object}
 * @property {number} NORMAL
 * @property {number} ADD
 * @property {number} MULTIPLY
 * @property {number} SCREEN
 * @property {number} OVERLAY
 * @property {number} DARKEN
 * @property {number} LIGHTEN
 * @property {number} COLOR_DODGE
 * @property {number} COLOR_BURN
 * @property {number} HARD_LIGHT
 * @property {number} SOFT_LIGHT
 * @property {number} DIFFERENCE
 * @property {number} EXCLUSION
 * @property {number} HUE
 * @property {number} SATURATION
 * @property {number} COLOR
 * @property {number} LUMINOSITY
 */
var BLEND_MODES = {
  NORMAL: 0,
  ADD: 1,
  MULTIPLY: 2,
  SCREEN: 3,
  OVERLAY: 4,
  DARKEN: 5,
  LIGHTEN: 6,
  COLOR_DODGE: 7,
  COLOR_BURN: 8,
  HARD_LIGHT: 9,
  SOFT_LIGHT: 10,
  DIFFERENCE: 11,
  EXCLUSION: 12,
  HUE: 13,
  SATURATION: 14,
  COLOR: 15,
  LUMINOSITY: 16,
  NORMAL_NPM: 17,
  ADD_NPM: 18,
  SCREEN_NPM: 19
};

/**
 * Various webgl draw modes. These can be used to specify which GL drawMode to use
 * under certain situations and renderers.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name DRAW_MODES
 * @type {object}
 * @property {number} POINTS
 * @property {number} LINES
 * @property {number} LINE_LOOP
 * @property {number} LINE_STRIP
 * @property {number} TRIANGLES
 * @property {number} TRIANGLE_STRIP
 * @property {number} TRIANGLE_FAN
 */
var DRAW_MODES = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
};

/**
 * The scale modes that are supported by pixi.
 *
 * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name SCALE_MODES
 * @type {object}
 * @property {number} LINEAR Smooth scaling
 * @property {number} NEAREST Pixelating scaling
 */
var SCALE_MODES = {
  LINEAR: 0,
  NEAREST: 1
};

/**
 * The wrap modes that are supported by pixi.
 *
 * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wraping mode of future operations.
 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
 * If the texture is non power of two then clamp will be used regardless as webGL can
 * only use REPEAT if the texture is po2.
 *
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name WRAP_MODES
 * @memberof PIXI
 * @type {object}
 * @property {number} CLAMP - The textures uvs are clamped
 * @property {number} REPEAT - The texture uvs tile and repeat
 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
 */
var WRAP_MODES = {
  CLAMP: 0,
  REPEAT: 1,
  MIRRORED_REPEAT: 2
};

/**
 * The gc modes that are supported by pixi.
 *
 * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
 * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
 * used for a specified period of time they will be removed from the GPU. They will of course
 * be uploaded again when they are required. This is a silent behind the scenes process that
 * should ensure that the GPU does not  get filled up.
 *
 * Handy for mobile devices!
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name GC_MODES
 * @memberof PIXI
 * @type {object}
 * @property {number} AUTO - Garbage collection will happen periodically automatically
 * @property {number} MANUAL - Garbage collection will need to be called manually
 */
var GC_MODES = {
  AUTO: 0,
  MANUAL: 1
};

/**
 * Regexp for image type by extension.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {RegExp|string}
 * @example `image.png`
 */
var URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;

/**
 * Regexp for data URI.
 * Based on: {@link https://github.com/ragingwind/data-uri-regex}
 *
 * @static
 * @constant
 * @name DATA_URI
 * @memberof PIXI
 * @type {RegExp|string}
 * @example data:image/png;base64
 */
var DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i;

/**
 * Regexp for SVG size.
 *
 * @static
 * @constant
 * @name SVG_SIZE
 * @memberof PIXI
 * @type {RegExp|string}
 * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
 */
var SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len

/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @name SHAPES
 * @memberof PIXI
 * @type {object}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 */
var SHAPES = {
  POLY: 0,
  RECT: 1,
  CIRC: 2,
  ELIP: 3,
  RREC: 4
};

/**
 * Constants that specify float precision in shaders.
 *
 * @static
 * @constant
 * @name PRECISION
 * @memberof PIXI
 * @type {object}
 * @property {string} LOW='lowp'
 * @property {string} MEDIUM='mediump'
 * @property {string} HIGH='highp'
 */
var PRECISION = {
  LOW: 'lowp',
  MEDIUM: 'mediump',
  HIGH: 'highp'
};

/**
 * Constants that specify the transform type.
 *
 * @static
 * @constant
 * @name TRANSFORM_MODE
 * @memberof PIXI
 * @type {object}
 * @property {number} STATIC
 * @property {number} DYNAMIC
 */
var TRANSFORM_MODE = {
  STATIC: 0,
  DYNAMIC: 1
};

/**
 * Constants that define the type of gradient on text.
 *
 * @static
 * @constant
 * @name TEXT_GRADIENT
 * @memberof PIXI
 * @type {object}
 * @property {number} LINEAR_VERTICAL Vertical gradient
 * @property {number} LINEAR_HORIZONTAL Linear gradient
 */
var TEXT_GRADIENT = {
  LINEAR_VERTICAL: 0,
  LINEAR_HORIZONTAL: 1
};

/**
 * Represents the update priorities used by internal PIXI classes when registered with
 * the {@link PIXI.ticker.Ticker} object. Higher priority items are updated first and lower
 * priority items, such as render, should go later.
 *
 * @static
 * @constant
 * @name UPDATE_PRIORITY
 * @memberof PIXI
 * @type {object}
 * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager}
 * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.extras.AnimatedSprite}
 * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.ticker.Ticker#add}.
 * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
 * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility.
 */
var UPDATE_PRIORITY = {
  INTERACTION: 50,
  HIGH: 25,
  NORMAL: 0,
  LOW: -25,
  UTILITY: -50
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["uid"] = uid;
/* harmony export (immutable) */ __webpack_exports__["hex2rgb"] = hex2rgb;
/* harmony export (immutable) */ __webpack_exports__["hex2string"] = hex2string;
/* harmony export (immutable) */ __webpack_exports__["rgb2hex"] = rgb2hex;
/* harmony export (immutable) */ __webpack_exports__["getResolutionOfUrl"] = getResolutionOfUrl;
/* harmony export (immutable) */ __webpack_exports__["decomposeDataUri"] = decomposeDataUri;
/* harmony export (immutable) */ __webpack_exports__["getUrlFileExtension"] = getUrlFileExtension;
/* harmony export (immutable) */ __webpack_exports__["getSvgSize"] = getSvgSize;
/* harmony export (immutable) */ __webpack_exports__["skipHello"] = skipHello;
/* harmony export (immutable) */ __webpack_exports__["sayHello"] = sayHello;
/* harmony export (immutable) */ __webpack_exports__["isWebGLSupported"] = isWebGLSupported;
/* harmony export (immutable) */ __webpack_exports__["sign"] = sign;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureCache", function() { return TextureCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTextureCache", function() { return BaseTextureCache; });
/* harmony export (immutable) */ __webpack_exports__["destroyTextureCache"] = destroyTextureCache;
/* harmony export (immutable) */ __webpack_exports__["clearTextureCache"] = clearTextureCache;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyBlendMode", function() { return premultiplyBlendMode; });
/* harmony export (immutable) */ __webpack_exports__["correctBlendMode"] = correctBlendMode;
/* harmony export (immutable) */ __webpack_exports__["premultiplyTint"] = premultiplyTint;
/* harmony export (immutable) */ __webpack_exports__["premultiplyRgba"] = premultiplyRgba;
/* harmony export (immutable) */ __webpack_exports__["premultiplyTintToRgba"] = premultiplyTintToRgba;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluginTarget__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixin__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ismobilejs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ismobilejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ismobilejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_remove_array_items__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_remove_array_items___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_remove_array_items__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapPremultipliedBlendModes__ = __webpack_require__(82);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return __WEBPACK_IMPORTED_MODULE_5_ismobilejs__; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "removeItems", function() { return __WEBPACK_IMPORTED_MODULE_6_remove_array_items___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pluginTarget", function() { return __WEBPACK_IMPORTED_MODULE_3__pluginTarget__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return __WEBPACK_IMPORTED_MODULE_4__mixin__; });









var nextUid = 0;
var saidHello = false;

/**
 * Generalized convenience utilities for PIXI.
 * @example
 * // Extend PIXI's internal Event Emitter.
 * class MyEmitter extends PIXI.utils.EventEmitter {
 *   constructor() {
 *      super();
 *      console.log("Emitter created!");
 *   }
 * }
 *
 * // Get info on current device
 * console.log(PIXI.utils.isMobile);
 *
 * // Convert hex color to string
 * console.log(PIXI.utils.hex2string(0xff00ff)); // returns: "#ff00ff"
 * @namespace PIXI.utils
 */


/**
 * Gets the next unique identifier
 *
 * @memberof PIXI.utils
 * @function uid
 * @return {number} The next unique identifier to use.
 */
function uid() {
    return ++nextUid;
}

/**
 * Converts a hex color number to an [R, G, B] array
 *
 * @memberof PIXI.utils
 * @function hex2rgb
 * @param {number} hex - The number to convert
 * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
 * @return {number[]} An array representing the [R, G, B] of the color.
 */
function hex2rgb(hex, out) {
    out = out || [];

    out[0] = (hex >> 16 & 0xFF) / 255;
    out[1] = (hex >> 8 & 0xFF) / 255;
    out[2] = (hex & 0xFF) / 255;

    return out;
}

/**
 * Converts a hex color number to a string.
 *
 * @memberof PIXI.utils
 * @function hex2string
 * @param {number} hex - Number in hex
 * @return {string} The string color.
 */
function hex2string(hex) {
    hex = hex.toString(16);
    hex = '000000'.substr(0, 6 - hex.length) + hex;

    return '#' + hex;
}

/**
 * Converts a color as an [R, G, B] array to a hex number
 *
 * @memberof PIXI.utils
 * @function rgb2hex
 * @param {number[]} rgb - rgb array
 * @return {number} The color number
 */
function rgb2hex(rgb) {
    return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
}

/**
 * get the resolution / device pixel ratio of an asset by looking for the prefix
 * used by spritesheets and image urls
 *
 * @memberof PIXI.utils
 * @function getResolutionOfUrl
 * @param {string} url - the image path
 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
 * @return {number} resolution / device pixel ratio of an asset
 */
function getResolutionOfUrl(url, defaultValue) {
    var resolution = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].RETINA_PREFIX.exec(url);

    if (resolution) {
        return parseFloat(resolution[1]);
    }

    return defaultValue !== undefined ? defaultValue : 1;
}

/**
 * Typedef for decomposeDataUri return object.
 *
 * @typedef {object} DecomposedDataUri
 * @property {mediaType} Media type, eg. `image`
 * @property {subType} Sub type, eg. `png`
 * @property {encoding} Data encoding, eg. `base64`
 * @property {data} The actual data
 */

/**
 * Split a data URI into components. Returns undefined if
 * parameter `dataUri` is not a valid data URI.
 *
 * @memberof PIXI.utils
 * @function decomposeDataUri
 * @param {string} dataUri - the data URI to check
 * @return {DecomposedDataUri|undefined} The decomposed data uri or undefined
 */
function decomposeDataUri(dataUri) {
    var dataUriMatch = __WEBPACK_IMPORTED_MODULE_0__const__["b" /* DATA_URI */].exec(dataUri);

    if (dataUriMatch) {
        return {
            mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
            subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
            encoding: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
            data: dataUriMatch[4]
        };
    }

    return undefined;
}

/**
 * Get type of the image by regexp for extension. Returns undefined for unknown extensions.
 *
 * @memberof PIXI.utils
 * @function getUrlFileExtension
 * @param {string} url - the image path
 * @return {string|undefined} image extension
 */
function getUrlFileExtension(url) {
    var extension = __WEBPACK_IMPORTED_MODULE_0__const__["j" /* URL_FILE_EXTENSION */].exec(url);

    if (extension) {
        return extension[1].toLowerCase();
    }

    return undefined;
}

/**
 * Typedef for Size object.
 *
 * @typedef {object} Size
 * @property {width} Width component
 * @property {height} Height component
 */

/**
 * Get size from an svg string using regexp.
 *
 * @memberof PIXI.utils
 * @function getSvgSize
 * @param {string} svgString - a serialized svg element
 * @return {Size|undefined} image extension
 */
function getSvgSize(svgString) {
    var sizeMatch = __WEBPACK_IMPORTED_MODULE_0__const__["f" /* SVG_SIZE */].exec(svgString);
    var size = {};

    if (sizeMatch) {
        size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
        size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
    }

    return size;
}

/**
 * Skips the hello message of renderers that are created after this is run.
 *
 * @function skipHello
 * @memberof PIXI.utils
 */
function skipHello() {
    saidHello = true;
}

/**
 * Logs out the version and renderer information for this running instance of PIXI.
 * If you don't want to see this message you can run `PIXI.utils.skipHello()` before
 * creating your renderer. Keep in mind that doing that will forever makes you a jerk face.
 *
 * @static
 * @function sayHello
 * @memberof PIXI.utils
 * @param {string} type - The string renderer type to log.
 */
function sayHello(type) {
    if (saidHello) {
        return;
    }

    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c %c %c PixiJS ' + __WEBPACK_IMPORTED_MODULE_0__const__["k" /* VERSION */] + ' - \u2730 ' + type + ' \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n', 'background: #ff66a5; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff66a5; background: #030307; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'background: #ffc3dc; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;'];

        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('PixiJS ' + __WEBPACK_IMPORTED_MODULE_0__const__["k" /* VERSION */] + ' - ' + type + ' - http://www.pixijs.com/');
    }

    saidHello = true;
}

/**
 * Helper for checking for webgl support
 *
 * @memberof PIXI.utils
 * @function isWebGLSupported
 * @return {boolean} is webgl supported
 */
function isWebGLSupported() {
    var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };

    try {
        if (!window.WebGLRenderingContext) {
            return false;
        }

        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

        var success = !!(gl && gl.getContextAttributes().stencil);

        if (gl) {
            var loseContext = gl.getExtension('WEBGL_lose_context');

            if (loseContext) {
                loseContext.loseContext();
            }
        }

        gl = null;

        return success;
    } catch (e) {
        return false;
    }
}

/**
 * Returns sign of number
 *
 * @memberof PIXI.utils
 * @function sign
 * @param {number} n - the number to check the sign of
 * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
 */
function sign(n) {
    if (n === 0) return 0;

    return n < 0 ? -1 : 1;
}

/**
 * @todo Describe property usage
 *
 * @memberof PIXI.utils
 * @private
 */
var TextureCache = Object.create(null);

/**
 * @todo Describe property usage
 *
 * @memberof PIXI.utils
 * @private
 */
var BaseTextureCache = Object.create(null);

/**
 * Destroys all texture in the cache
 *
 * @memberof PIXI.utils
 * @function destroyTextureCache
 */
function destroyTextureCache() {
    var key = void 0;

    for (key in TextureCache) {
        TextureCache[key].destroy();
    }
    for (key in BaseTextureCache) {
        BaseTextureCache[key].destroy();
    }
}

/**
 * Removes all textures from cache, but does not destroy them
 *
 * @memberof PIXI.utils
 * @function clearTextureCache
 */
function clearTextureCache() {
    var key = void 0;

    for (key in TextureCache) {
        delete TextureCache[key];
    }
    for (key in BaseTextureCache) {
        delete BaseTextureCache[key];
    }
}

/**
 * maps premultiply flag and blendMode to adjusted blendMode
 * @memberof PIXI.utils
 * @const premultiplyBlendMode
 * @type {Array<number[]>}
 */
var premultiplyBlendMode = Object(__WEBPACK_IMPORTED_MODULE_7__mapPremultipliedBlendModes__["a" /* default */])();

/**
 * changes blendMode according to texture format
 *
 * @memberof PIXI.utils
 * @function correctBlendMode
 * @param {number} blendMode supposed blend mode
 * @param {boolean} premultiplied  whether source is premultiplied
 * @returns {number} true blend mode for this texture
 */
function correctBlendMode(blendMode, premultiplied) {
    return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
}

/**
 * premultiplies tint
 *
 * @param {number} tint integet RGB
 * @param {number} alpha floating point alpha (0.0-1.0)
 * @returns {number} tint multiplied by alpha
 */
function premultiplyTint(tint, alpha) {
    if (alpha === 1.0) {
        return (alpha * 255 << 24) + tint;
    }
    if (alpha === 0.0) {
        return 0;
    }
    var R = tint >> 16 & 0xFF;
    var G = tint >> 8 & 0xFF;
    var B = tint & 0xFF;

    R = R * alpha + 0.5 | 0;
    G = G * alpha + 0.5 | 0;
    B = B * alpha + 0.5 | 0;

    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
}

/**
 * combines rgb and alpha to out array
 *
 * @param {Float32Array|number[]} rgb input rgb
 * @param {number} alpha alpha param
 * @param {Float32Array} [out] output
 * @param {boolean} [premultiply=true] do premultiply it
 * @returns {Float32Array} vec4 rgba
 */
function premultiplyRgba(rgb, alpha, out, premultiply) {
    out = out || new Float32Array(4);
    if (premultiply || premultiply === undefined) {
        out[0] = rgb[0] * alpha;
        out[1] = rgb[1] * alpha;
        out[2] = rgb[2] * alpha;
    } else {
        out[0] = rgb[0];
        out[1] = rgb[1];
        out[2] = rgb[2];
    }
    out[3] = alpha;

    return out;
}

/**
 * converts integer tint and float alpha to vec4 form, premultiplies by default
 *
 * @param {number} tint input tint
 * @param {number} alpha alpha param
 * @param {Float32Array} [out] output
 * @param {boolean} [premultiply=true] do premultiply it
 * @returns {Float32Array} vec4 rgba
 */
function premultiplyTintToRgba(tint, alpha, out, premultiply) {
    out = out || new Float32Array(4);
    out[0] = (tint >> 16 & 0xFF) / 255.0;
    out[1] = (tint >> 8 & 0xFF) / 255.0;
    out[2] = (tint & 0xFF) / 255.0;
    if (premultiply || premultiply === undefined) {
        out[0] *= alpha;
        out[1] *= alpha;
        out[2] *= alpha;
    }
    out[3] = alpha;

    return out;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_maxRecommendedTextures__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_canUploadSameBuffer__ = __webpack_require__(78);



/**
 * User's customizable globals for overriding the default PIXI settings, such
 * as a renderer's default resolution, framerate, float percision, etc.
 * @example
 * // Use the native window resolution as the default resolution
 * // will support high-density displays when rendering
 * PIXI.settings.RESOLUTION = window.devicePixelRatio.
 *
 * // Disable interpolation when scaling, will make texture be pixelated
 * PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
 * @namespace PIXI.settings
 */
/* harmony default export */ __webpack_exports__["a"] = ({

  /**
   * Target frames per millisecond.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 0.06
   */
  TARGET_FPMS: 0.06,

  /**
   * If set to true WebGL will attempt make textures mimpaped by default.
   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
   *
   * @static
   * @memberof PIXI.settings
   * @type {boolean}
   * @default true
   */
  MIPMAP_TEXTURES: true,

  /**
   * Default resolution / device pixel ratio of the renderer.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  RESOLUTION: 1,

  /**
   * Default filter resolution.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  FILTER_RESOLUTION: 1,

  /**
   * The maximum textures that this device supports.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 32
   */
  SPRITE_MAX_TEXTURES: Object(__WEBPACK_IMPORTED_MODULE_0__utils_maxRecommendedTextures__["a" /* default */])(32),

  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000

  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 4096
   */
  SPRITE_BATCH_SIZE: 4096,

  /**
   * The prefix that denotes a URL is for a retina asset.
   *
   * @static
   * @memberof PIXI.settings
   * @type {RegExp}
   * @example `@2x`
   * @default /@([0-9\.]+)x/
   */
  RETINA_PREFIX: /@([0-9\.]+)x/,

  /**
   * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
   * or {@link PIXI.CanvasRenderer}.
   *
   * @static
   * @constant
   * @memberof PIXI.settings
   * @type {object}
   * @property {HTMLCanvasElement} view=null
   * @property {number} resolution=1
   * @property {boolean} antialias=false
   * @property {boolean} forceFXAA=false
   * @property {boolean} autoResize=false
   * @property {boolean} transparent=false
   * @property {number} backgroundColor=0x000000
   * @property {boolean} clearBeforeRender=true
   * @property {boolean} preserveDrawingBuffer=false
   * @property {boolean} roundPixels=false
   * @property {number} width=800
   * @property {number} height=600
   * @property {boolean} legacy=false
   */
  RENDER_OPTIONS: {
    view: null,
    antialias: false,
    forceFXAA: false,
    autoResize: false,
    transparent: false,
    backgroundColor: 0x000000,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    roundPixels: false,
    width: 800,
    height: 600,
    legacy: false
  },

  /**
   * Default transform type.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.TRANSFORM_MODE}
   * @default PIXI.TRANSFORM_MODE.STATIC
   */
  TRANSFORM_MODE: 0,

  /**
   * Default Garbage Collection mode.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.GC_MODES}
   * @default PIXI.GC_MODES.AUTO
   */
  GC_MODE: 0,

  /**
   * Default Garbage Collection max idle.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 3600
   */
  GC_MAX_IDLE: 60 * 60,

  /**
   * Default Garbage Collection maximum check count.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 600
   */
  GC_MAX_CHECK_COUNT: 60 * 10,

  /**
   * Default wrap modes that are supported by pixi.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.WRAP_MODES}
   * @default PIXI.WRAP_MODES.CLAMP
   */
  WRAP_MODE: 0,

  /**
   * The scale modes that are supported by pixi.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.SCALE_MODES}
   * @default PIXI.SCALE_MODES.LINEAR
   */
  SCALE_MODE: 0,

  /**
   * Default specify float precision in vertex shader.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.HIGH
   */
  PRECISION_VERTEX: 'highp',

  /**
   * Default specify float precision in fragment shader.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.MEDIUM
   */
  PRECISION_FRAGMENT: 'mediump',

  /**
   * Can we upload the same buffer in a single frame?
   *
   * @static
   * @constant
   * @memberof PIXI
   * @type {boolean}
   */
  CAN_UPLOAD_SAME_BUFFER: Object(__WEBPACK_IMPORTED_MODULE_1__utils_canUploadSameBuffer__["a" /* default */])()

});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__const__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__math__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__math__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__math__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__renderers_canvas_CanvasRenderer__ = __webpack_require__(7);
/* unused harmony reexport settings */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_3__ticker__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__renderers_canvas_CanvasRenderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pixi_gl_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pixi_gl_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_pixi_gl_core__);
/* unused harmony reexport glCore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__display_Bounds__ = __webpack_require__(16);
/* unused harmony reexport Bounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__display_DisplayObject__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__display_DisplayObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__display_Container__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__display_Container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__display_Transform__ = __webpack_require__(28);
/* unused harmony reexport Transform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__display_TransformStatic__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_11__display_TransformStatic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__display_TransformBase__ = __webpack_require__(15);
/* unused harmony reexport TransformBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sprites_Sprite__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_13__sprites_Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sprites_canvas_CanvasSpriteRenderer__ = __webpack_require__(101);
/* unused harmony reexport CanvasSpriteRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sprites_canvas_CanvasTinter__ = __webpack_require__(20);
/* unused harmony reexport CanvasTinter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_Text__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_16__text_Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__text_TextStyle__ = __webpack_require__(47);
/* unused harmony reexport TextStyle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__text_TextMetrics__ = __webpack_require__(48);
/* unused harmony reexport TextMetrics */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__graphics_Graphics__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_19__graphics_Graphics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__graphics_GraphicsData__ = __webpack_require__(49);
/* unused harmony reexport GraphicsData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__graphics_canvas_CanvasGraphicsRenderer__ = __webpack_require__(106);
/* unused harmony reexport CanvasGraphicsRenderer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__textures_Spritesheet__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_22__textures_Spritesheet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__textures_Texture__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_23__textures_Texture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__textures_TextureMatrix__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_24__textures_TextureMatrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__textures_BaseTexture__ = __webpack_require__(9);
/* unused harmony reexport BaseTexture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__textures_RenderTexture__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_26__textures_RenderTexture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__textures_BaseRenderTexture__ = __webpack_require__(29);
/* unused harmony reexport BaseRenderTexture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__textures_VideoBaseTexture__ = __webpack_require__(33);
/* unused harmony reexport VideoBaseTexture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__textures_TextureUvs__ = __webpack_require__(34);
/* unused harmony reexport TextureUvs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__renderers_canvas_utils_CanvasRenderTarget__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_30__renderers_canvas_utils_CanvasRenderTarget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Shader__ = __webpack_require__(109);
/* unused harmony reexport Shader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Application__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_32__Application__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__autoDetectRenderer__ = __webpack_require__(51);
/* unused harmony reexport autoDetectRenderer */
/**
 * @namespace PIXI
 */







// import WebGLRenderer from './renderers/webgl/WebGLRenderer';

// export { settings, utils, ticker, CanvasRenderer, WebGLRenderer };













// export { default as SpriteRenderer } from './sprites/webgl/SpriteRenderer';





// export { default as GraphicsRenderer } from './graphics/webgl/GraphicsRenderer';











// export { default as WebGLManager } from './renderers/webgl/managers/WebGLManager';
// export { default as ObjectRenderer } from './renderers/webgl/utils/ObjectRenderer';
// export { default as RenderTarget } from './renderers/webgl/utils/RenderTarget';
// export { default as Quad } from './renderers/webgl/utils/Quad';
// export { default as SpriteMaskFilter } from './renderers/webgl/filters/spriteMask/SpriteMaskFilter';
// export { default as Filter } from './renderers/webgl/filters/Filter';



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__Point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ObservablePoint__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__ObservablePoint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Matrix__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__Matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GroupD8__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__GroupD8__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shapes_Circle__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__shapes_Circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shapes_Ellipse__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__shapes_Ellipse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shapes_Polygon__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__shapes_Polygon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shapes_Rectangle__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__shapes_Rectangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shapes_RoundedRectangle__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__shapes_RoundedRectangle__["a"]; });
/**
 * Math classes and utilities mixed into PIXI namespace.
 *
 * @lends PIXI
 */











/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = [],
      events,
      name;

  if (this._eventsCount === 0) return names;

  for (name in events = this._events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event,
      available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;
      case 2:
        return listeners.fn.call(listeners.context, a1), true;
      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;
      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
        j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);break;
        case 2:
          listeners[i].fn.call(listeners[i].context, a1);break;
        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);break;
        case 4:
          listeners[i].fn.call(listeners[i].context, a1, a2, a3);break;
        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this),
      evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true),
      evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
      if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseTexture__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VideoBaseTexture__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextureUvs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided
 * then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * let texture = PIXI.Texture.fromImage('assets/image.png');
 * let sprite1 = new PIXI.Sprite(texture);
 * let sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
 * You can check for this by checking the sprite's _textureID property.
 * ```js
 * var texture = PIXI.Texture.fromImage('assets/image.svg');
 * var sprite1 = new PIXI.Sprite(texture);
 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
 * ```
 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */

var Texture = function (_EventEmitter) {
    _inherits(Texture, _EventEmitter);

    /**
     * @param {PIXI.BaseTexture} baseTexture - The base texture source to create the texture from
     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
     * @param {PIXI.Rectangle} [orig] - The area of original texture
     * @param {PIXI.Rectangle} [trim] - Trimmed rectangle of original texture
     * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link PIXI.GroupD8}
     */
    function Texture(baseTexture, frame, orig, trim, rotate) {
        _classCallCheck(this, Texture);

        /**
         * Does this Texture have any frame data assigned to it?
         *
         * @member {boolean}
         */
        var _this = _possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this));

        _this.noFrame = false;

        if (!frame) {
            _this.noFrame = true;
            frame = new __WEBPACK_IMPORTED_MODULE_4__math__["h" /* Rectangle */](0, 0, 1, 1);
        }

        if (baseTexture instanceof Texture) {
            baseTexture = baseTexture.baseTexture;
        }

        /**
         * The base texture that this texture uses.
         *
         * @member {PIXI.BaseTexture}
         */
        _this.baseTexture = baseTexture;

        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {PIXI.Rectangle}
         */
        _this._frame = frame;

        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `_updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {PIXI.Rectangle}
         */
        _this.trim = trim;

        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        _this.valid = false;

        /**
         * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
         *
         * @member {boolean}
         */
        _this.requiresUpdate = false;

        /**
         * The WebGL UV data cache.
         *
         * @member {PIXI.TextureUvs}
         * @private
         */
        _this._uvs = null;

        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle}
         */
        _this.orig = orig || frame; // new Rectangle(0, 0, 1, 1);

        _this._rotate = Number(rotate || 0);

        if (rotate === true) {
            // this is old texturepacker legacy, some games/libraries are passing "true" for rotated textures
            _this._rotate = 2;
        } else if (_this._rotate % 2 !== 0) {
            throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
        }

        if (baseTexture.hasLoaded) {
            if (_this.noFrame) {
                frame = new __WEBPACK_IMPORTED_MODULE_4__math__["h" /* Rectangle */](0, 0, baseTexture.width, baseTexture.height);

                // if there is no frame we should monitor for any base texture changes..
                baseTexture.on('update', _this.onBaseTextureUpdated, _this);
            }
            _this.frame = frame;
        } else {
            baseTexture.once('loaded', _this.onBaseTextureLoaded, _this);
        }

        /**
         * Fired when the texture is updated. This happens if the frame or the baseTexture is updated.
         *
         * @event PIXI.Texture#update
         * @protected
         * @param {PIXI.Texture} texture - Instance of texture being updated.
         */

        _this._updateID = 0;

        /**
         * Contains data for uvs. May contain clamp settings and some matrices.
         * Its a bit heavy, so by default that object is not created.
         * @type {PIXI.TextureMatrix}
         * @default null
         */
        _this.transform = null;

        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]}
         */
        _this.textureCacheIds = [];
        return _this;
    }

    /**
     * Updates this texture on the gpu.
     *
     */


    _createClass(Texture, [{
        key: 'update',
        value: function update() {
            this.baseTexture.update();
        }

        /**
         * Called when the base texture is loaded
         *
         * @private
         * @param {PIXI.BaseTexture} baseTexture - The base texture.
         */

    }, {
        key: 'onBaseTextureLoaded',
        value: function onBaseTextureLoaded(baseTexture) {
            this._updateID++;

            // TODO this code looks confusing.. boo to abusing getters and setters!
            if (this.noFrame) {
                this.frame = new __WEBPACK_IMPORTED_MODULE_4__math__["h" /* Rectangle */](0, 0, baseTexture.width, baseTexture.height);
            } else {
                this.frame = this._frame;
            }

            this.baseTexture.on('update', this.onBaseTextureUpdated, this);
            this.emit('update', this);
        }

        /**
         * Called when the base texture is updated
         *
         * @private
         * @param {PIXI.BaseTexture} baseTexture - The base texture.
         */

    }, {
        key: 'onBaseTextureUpdated',
        value: function onBaseTextureUpdated(baseTexture) {
            this._updateID++;

            this._frame.width = baseTexture.width;
            this._frame.height = baseTexture.height;

            this.emit('update', this);
        }

        /**
         * Destroys this texture
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */

    }, {
        key: 'destroy',
        value: function destroy(destroyBase) {
            if (this.baseTexture) {
                if (destroyBase) {
                    // delete the texture if it exists in the texture cache..
                    // this only needs to be removed if the base texture is actually destroyed too..
                    if (__WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][this.baseTexture.imageUrl]) {
                        Texture.removeFromCache(this.baseTexture.imageUrl);
                    }

                    this.baseTexture.destroy();
                }

                this.baseTexture.off('update', this.onBaseTextureUpdated, this);
                this.baseTexture.off('loaded', this.onBaseTextureLoaded, this);

                this.baseTexture = null;
            }

            this._frame = null;
            this._uvs = null;
            this.trim = null;
            this.orig = null;

            this.valid = false;

            Texture.removeFromCache(this);
            this.textureCacheIds = null;
        }

        /**
         * Creates a new texture object that acts the same as this one.
         *
         * @return {PIXI.Texture} The new texture
         */

    }, {
        key: 'clone',
        value: function clone() {
            return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
        }

        /**
         * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
         */

    }, {
        key: '_updateUvs',
        value: function _updateUvs() {
            if (!this._uvs) {
                this._uvs = new __WEBPACK_IMPORTED_MODULE_2__TextureUvs__["a" /* default */]();
            }

            this._uvs.set(this._frame, this.baseTexture, this.rotate);

            this._updateID++;
        }

        /**
         * Helper function that creates a Texture object from the given image url.
         * If the image is not in the texture cache it will be  created and loaded.
         *
         * @static
         * @param {string} imageUrl - The image url of the texture
         * @param {boolean} [crossorigin] - Whether requests should be treated as crossorigin
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @param {number} [sourceScale=(auto)] - Scale for the original image, used with SVG images.
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'frame',


        /**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `_updateUvs()` after you change coordinates of `frame` manually.
         *
         * @member {PIXI.Rectangle}
         */
        get: function get() {
            return this._frame;
        },
        set: function set(frame) // eslint-disable-line require-jsdoc
        {
            this._frame = frame;

            this.noFrame = false;

            var x = frame.x,
                y = frame.y,
                width = frame.width,
                height = frame.height;

            var xNotFit = x + width > this.baseTexture.width;
            var yNotFit = y + height > this.baseTexture.height;

            if (xNotFit || yNotFit) {
                var relationship = xNotFit && yNotFit ? 'and' : 'or';
                var errorX = 'X: ' + x + ' + ' + width + ' = ' + (x + width) + ' > ' + this.baseTexture.width;
                var errorY = 'Y: ' + y + ' + ' + height + ' = ' + (y + height) + ' > ' + this.baseTexture.height;

                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: ' + (errorX + ' ' + relationship + ' ' + errorY));
            }

            // this.valid = width && height && this.baseTexture.source && this.baseTexture.hasLoaded;
            this.valid = width && height && this.baseTexture.hasLoaded;

            if (!this.trim && !this.rotate) {
                this.orig = frame;
            }

            if (this.valid) {
                this._updateUvs();
            }
        }

        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.GroupD8} for explanation
         *
         * @member {number}
         */

    }, {
        key: 'rotate',
        get: function get() {
            return this._rotate;
        },
        set: function set(rotate) // eslint-disable-line require-jsdoc
        {
            this._rotate = rotate;
            if (this.valid) {
                this._updateUvs();
            }
        }

        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */

    }, {
        key: 'width',
        get: function get() {
            return this.orig.width;
        }

        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return this.orig.height;
        }
    }], [{
        key: 'fromImage',
        value: function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
            var texture = __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][imageUrl];

            if (!texture) {
                texture = new Texture(__WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].fromImage(imageUrl, crossorigin, scaleMode, sourceScale));
                Texture.addToCache(texture, imageUrl);
            }

            return texture;
        }

        /**
         * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
         * The frame ids are created when a Texture packer file has been loaded
         *
         * @static
         * @param {string} frameId - The frame Id of the texture in the cache
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'fromFrame',
        value: function fromFrame(frameId) {
            var texture = __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][frameId];

            if (!texture) {
                throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
            }

            return texture;
        }

        /**
         * Helper function that creates a new Texture based on the given canvas element.
         *
         * @static
         * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @param {string} [origin='canvas'] - A string origin of who created the base texture
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'fromCanvas',
        value: function fromCanvas(canvas, scaleMode) {
            var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';

            return new Texture(__WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].fromCanvas(canvas, scaleMode, origin));
        }

        /**
         * Helper function that creates a new Texture based on the given video element.
         *
         * @static
         * @param {HTMLVideoElement|string} video - The URL or actual element of the video
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'fromVideo',
        value: function fromVideo(video, scaleMode) {
            if (typeof video === 'string') {
                return Texture.fromVideoUrl(video, scaleMode);
            }

            return new Texture(__WEBPACK_IMPORTED_MODULE_1__VideoBaseTexture__["a" /* default */].fromVideo(video, scaleMode));
        }

        /**
         * Helper function that creates a new Texture based on the video url.
         *
         * @static
         * @param {string} videoUrl - URL of the video
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'fromVideoUrl',
        value: function fromVideoUrl(videoUrl, scaleMode) {
            return new Texture(__WEBPACK_IMPORTED_MODULE_1__VideoBaseTexture__["a" /* default */].fromUrl(videoUrl, scaleMode));
        }

        /**
         * Helper function that creates a new Texture based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {number|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture}
         *        source - Source to create texture from
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'from',
        value: function from(source) {
            // TODO auto detect cross origin..
            // TODO pass in scale mode?
            if (typeof source === 'string') {
                var texture = __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][source];

                if (!texture) {
                    // check if its a video..
                    var isVideo = source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;

                    if (isVideo) {
                        return Texture.fromVideoUrl(source);
                    }

                    return Texture.fromImage(source);
                }

                return texture;
            } else if (source instanceof HTMLImageElement) {
                return new Texture(__WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].from(source));
            } else if (source instanceof HTMLCanvasElement) {
                return Texture.fromCanvas(source, __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].SCALE_MODE, 'HTMLCanvasElement');
            } else if (source instanceof HTMLVideoElement) {
                return Texture.fromVideo(source);
            } else if (source instanceof __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */]) {
                return new Texture(source);
            }

            // lets assume its a texture!
            return source;
        }

        /**
         * Create a texture from a source and add to the cache.
         *
         * @static
         * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
         * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
         * @param {String} [name] - Human readible name for the texture cache. If no name is
         *        specified, only `imageUrl` will be used as the cache ID.
         * @return {PIXI.Texture} Output texture
         */

    }, {
        key: 'fromLoader',
        value: function fromLoader(source, imageUrl, name) {
            var baseTexture = new __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */](source, undefined, Object(__WEBPACK_IMPORTED_MODULE_5__utils__["getResolutionOfUrl"])(imageUrl));
            var texture = new Texture(baseTexture);

            baseTexture.imageUrl = imageUrl;

            // No name, use imageUrl instead
            if (!name) {
                name = imageUrl;
            }

            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
            __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].addToCache(texture.baseTexture, name);
            Texture.addToCache(texture, name);

            // also add references by url if they are different.
            if (name !== imageUrl) {
                __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].addToCache(texture.baseTexture, imageUrl);
                Texture.addToCache(texture, imageUrl);
            }

            return texture;
        }

        /**
         * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
         *
         * @static
         * @param {PIXI.Texture} texture - The Texture to add to the cache.
         * @param {string} id - The id that the Texture will be stored against.
         */

    }, {
        key: 'addToCache',
        value: function addToCache(texture, id) {
            if (id) {
                if (texture.textureCacheIds.indexOf(id) === -1) {
                    texture.textureCacheIds.push(id);
                }

                // @if DEBUG
                /* eslint-disable no-console */
                if (__WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][id]) {
                    console.warn('Texture added to the cache with an id [' + id + '] that already had an entry');
                }
                /* eslint-enable no-console */
                // @endif

                __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][id] = texture;
            }
        }

        /**
         * Remove a Texture from the global TextureCache.
         *
         * @static
         * @param {string|PIXI.Texture} texture - id of a Texture to be removed, or a Texture instance itself
         * @return {PIXI.Texture|null} The Texture that was removed
         */

    }, {
        key: 'removeFromCache',
        value: function removeFromCache(texture) {
            if (typeof texture === 'string') {
                var textureFromCache = __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][texture];

                if (textureFromCache) {
                    var index = textureFromCache.textureCacheIds.indexOf(texture);

                    if (index > -1) {
                        textureFromCache.textureCacheIds.splice(index, 1);
                    }

                    delete __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][texture];

                    return textureFromCache;
                }
            } else if (texture && texture.textureCacheIds) {
                for (var i = 0; i < texture.textureCacheIds.length; ++i) {
                    // Check that texture matches the one being passed in before deleting it from the cache.
                    if (__WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][texture.textureCacheIds[i]] === texture) {
                        delete __WEBPACK_IMPORTED_MODULE_5__utils__["TextureCache"][texture.textureCacheIds[i]];
                    }
                }

                texture.textureCacheIds.length = 0;

                return texture;
            }

            return null;
        }
    }]);

    return Texture;
}(__WEBPACK_IMPORTED_MODULE_3_eventemitter3___default.a);

/* harmony default export */ __webpack_exports__["a"] = (Texture);


function createWhiteTexture() {
    var canvas = document.createElement('canvas');

    canvas.width = 10;
    canvas.height = 10;

    var context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 10, 10);

    return new Texture(new __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */](canvas));
}

function removeAllHandlers(tex) {
    tex.destroy = function _emptyDestroy() {/* empty */};
    tex.on = function _emptyOn() {/* empty */};
    tex.once = function _emptyOnce() {/* empty */};
    tex.emit = function _emptyEmit() {/* empty */};
}

/**
 * An empty texture, used often to not have to create multiple empty textures.
 * Can not be destroyed.
 *
 * @static
 * @constant
 */
Texture.EMPTY = new Texture(new __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */]());
removeAllHandlers(Texture.EMPTY);
removeAllHandlers(Texture.EMPTY.baseTexture);

/**
 * A white texture of 10x10 size, used for graphics and other things
 * Can not be destroyed.
 *
 * @static
 * @constant
 */
Texture.WHITE = createWhiteTexture();
removeAllHandlers(Texture.WHITE);
removeAllHandlers(Texture.WHITE.baseTexture);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SystemRenderer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_CanvasMaskManager__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_CanvasRenderTarget__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_mapCanvasBlendModesToPixi__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should
 * be used for browsers that do not support WebGL. Don't forget to add the CanvasRenderer.view to
 * your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.SystemRenderer
 */

var CanvasRenderer = function (_SystemRenderer) {
    _inherits(CanvasRenderer, _SystemRenderer);

    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the screen
     * @param {number} [options.height=600] - the height of the screen
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
     * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
     *  resolution of the renderer retina would be 2.
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the webgl context.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *      not before the new render pass.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
     *  stopping pixel interpolation.
     */
    function CanvasRenderer(options, arg2, arg3) {
        _classCallCheck(this, CanvasRenderer);

        var _this = _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this, 'Canvas', options, arg2, arg3));

        _this.type = __WEBPACK_IMPORTED_MODULE_5__const__["c" /* RENDERER_TYPE */].CANVAS;

        /**
         * The root canvas 2d context that everything is drawn with.
         *
         * @member {CanvasRenderingContext2D}
         */
        _this.rootContext = _this.view.getContext('2d', { alpha: _this.transparent });

        /**
         * The currently active canvas 2d context (could change with renderTextures)
         *
         * @member {CanvasRenderingContext2D}
         */
        _this.context = _this.rootContext;

        /**
         * Boolean flag controlling canvas refresh.
         *
         * @member {boolean}
         */
        _this.refresh = true;

        /**
         * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
         *
         * @member {PIXI.CanvasMaskManager}
         */
        _this.maskManager = new __WEBPACK_IMPORTED_MODULE_1__utils_CanvasMaskManager__["a" /* default */](_this);

        /**
         * The canvas property used to set the canvas smoothing property.
         *
         * @member {string}
         */
        _this.smoothProperty = 'imageSmoothingEnabled';

        if (!_this.rootContext.imageSmoothingEnabled) {
            if (_this.rootContext.webkitImageSmoothingEnabled) {
                _this.smoothProperty = 'webkitImageSmoothingEnabled';
            } else if (_this.rootContext.mozImageSmoothingEnabled) {
                _this.smoothProperty = 'mozImageSmoothingEnabled';
            } else if (_this.rootContext.oImageSmoothingEnabled) {
                _this.smoothProperty = 'oImageSmoothingEnabled';
            } else if (_this.rootContext.msImageSmoothingEnabled) {
                _this.smoothProperty = 'msImageSmoothingEnabled';
            }
        }

        _this.initPlugins();

        _this.blendModes = Object(__WEBPACK_IMPORTED_MODULE_3__utils_mapCanvasBlendModesToPixi__["a" /* default */])();
        _this._activeBlendMode = null;

        _this.renderingToScreen = false;

        _this.resize(_this.options.width, _this.options.height);

        /**
         * Fired after rendering finishes.
         *
         * @event PIXI.CanvasRenderer#postrender
         */

        /**
         * Fired before rendering starts.
         *
         * @event PIXI.CanvasRenderer#prerender
         */
        return _this;
    }

    /**
     * Renders the object to this canvas view
     *
     * @param {PIXI.DisplayObject} displayObject - The object to be rendered
     * @param {PIXI.RenderTexture} [renderTexture] - A render texture to be rendered to.
     *  If unset, it will render to the root context.
     * @param {boolean} [clear=false] - Whether to clear the canvas before drawing
     * @param {PIXI.Transform} [transform] - A transformation to be applied
     * @param {boolean} [skipUpdateTransform=false] - Whether to skip the update transform
     */


    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
            if (!this.view) {
                return;
            }

            // can be handy to know!
            this.renderingToScreen = !renderTexture;

            this.emit('prerender');

            var rootResolution = this.resolution;

            if (renderTexture) {
                renderTexture = renderTexture.baseTexture || renderTexture;

                if (!renderTexture._canvasRenderTarget) {
                    renderTexture._canvasRenderTarget = new __WEBPACK_IMPORTED_MODULE_2__utils_CanvasRenderTarget__["a" /* default */](renderTexture.width, renderTexture.height, renderTexture.resolution);
                    renderTexture.source = renderTexture._canvasRenderTarget.canvas;
                    renderTexture.valid = true;
                }

                this.context = renderTexture._canvasRenderTarget.context;
                this.resolution = renderTexture._canvasRenderTarget.resolution;
            } else {
                this.context = this.rootContext;
            }

            var context = this.context;

            if (!renderTexture) {
                this._lastObjectRendered = displayObject;
            }

            if (!skipUpdateTransform) {
                // update the scene graph
                var cacheParent = displayObject.parent;
                var tempWt = this._tempDisplayObjectParent.transform.worldTransform;

                if (transform) {
                    transform.copy(tempWt);

                    // lets not forget to flag the parent transform as dirty...
                    this._tempDisplayObjectParent.transform._worldID = -1;
                } else {
                    tempWt.identity();
                }

                displayObject.parent = this._tempDisplayObjectParent;

                displayObject.updateTransform();
                displayObject.parent = cacheParent;
                // displayObject.hitArea = //TODO add a temp hit area
            }

            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.globalAlpha = 1;
            this._activeBlendMode = __WEBPACK_IMPORTED_MODULE_5__const__["a" /* BLEND_MODES */].NORMAL;
            context.globalCompositeOperation = this.blendModes[__WEBPACK_IMPORTED_MODULE_5__const__["a" /* BLEND_MODES */].NORMAL];

            if (navigator.isCocoonJS && this.view.screencanvas) {
                context.fillStyle = 'black';
                context.clear();
            }

            if (clear !== undefined ? clear : this.clearBeforeRender) {
                if (this.renderingToScreen) {
                    if (this.transparent) {
                        context.clearRect(0, 0, this.width, this.height);
                    } else {
                        context.fillStyle = this._backgroundColorString;
                        context.fillRect(0, 0, this.width, this.height);
                    }
                } // else {
                // TODO: implement background for CanvasRenderTarget or RenderTexture?
                // }
            }

            // TODO RENDER TARGET STUFF HERE..
            var tempContext = this.context;

            this.context = context;
            displayObject.renderCanvas(this);
            this.context = tempContext;

            context.restore();

            this.resolution = rootResolution;

            this.emit('postrender');
        }

        /**
         * Clear the canvas of renderer.
         *
         * @param {string} [clearColor] - Clear the canvas with this color, except the canvas is transparent.
         */

    }, {
        key: 'clear',
        value: function clear(clearColor) {
            var context = this.context;

            clearColor = clearColor || this._backgroundColorString;

            if (!this.transparent && clearColor) {
                context.fillStyle = clearColor;
                context.fillRect(0, 0, this.width, this.height);
            } else {
                context.clearRect(0, 0, this.width, this.height);
            }
        }

        /**
         * Sets the blend mode of the renderer.
         *
         * @param {number} blendMode - See {@link PIXI.BLEND_MODES} for valid values.
         */

    }, {
        key: 'setBlendMode',
        value: function setBlendMode(blendMode) {
            if (this._activeBlendMode === blendMode) {
                return;
            }

            this._activeBlendMode = blendMode;
            this.context.globalCompositeOperation = this.blendModes[blendMode];
        }

        /**
         * Removes everything from the renderer and optionally removes the Canvas DOM element.
         *
         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
         */

    }, {
        key: 'destroy',
        value: function destroy(removeView) {
            this.destroyPlugins();

            // call the base destroy
            _get(CanvasRenderer.prototype.__proto__ || Object.getPrototypeOf(CanvasRenderer.prototype), 'destroy', this).call(this, removeView);

            this.context = null;

            this.refresh = true;

            this.maskManager.destroy();
            this.maskManager = null;

            this.smoothProperty = null;
        }

        /**
         * Resizes the canvas view to the specified width and height.
         *
         * @extends PIXI.SystemRenderer#resize
         *
         * @param {number} screenWidth - the new width of the screen
         * @param {number} screenHeight - the new height of the screen
         */

    }, {
        key: 'resize',
        value: function resize(screenWidth, screenHeight) {
            _get(CanvasRenderer.prototype.__proto__ || Object.getPrototypeOf(CanvasRenderer.prototype), 'resize', this).call(this, screenWidth, screenHeight);

            // reset the scale mode.. oddly this seems to be reset when the canvas is resized.
            // surely a browser bug?? Let PixiJS fix that for you..
            if (this.smoothProperty) {
                this.rootContext[this.smoothProperty] = __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].SCALE_MODE === __WEBPACK_IMPORTED_MODULE_5__const__["d" /* SCALE_MODES */].LINEAR;
            }
        }

        /**
         * Checks if blend mode has changed.
         */

    }, {
        key: 'invalidateBlendMode',
        value: function invalidateBlendMode() {
            this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation);
        }
    }]);

    return CanvasRenderer;
}(__WEBPACK_IMPORTED_MODULE_0__SystemRenderer__["a" /* default */]);

/**
 * Collection of installed plugins. These are included by default in PIXI, but can be excluded
 * by creating a custom build. Consult the README for more information about creating custom
 * builds and excluding plugins.
 * @name PIXI.CanvasRenderer#plugins
 * @type {object}
 * @readonly
 * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
 * @property {PIXI.extract.CanvasExtract} extract Extract image data from renderer.
 * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
 * @property {PIXI.prepare.CanvasPrepare} prepare Pre-render display objects.
 */

/**
 * Adds a plugin to the renderer.
 *
 * @method PIXI.CanvasRenderer#registerPlugin
 * @param {string} pluginName - The name of the plugin.
 * @param {Function} ctor - The constructor function or class for the plugin.
 */

/* harmony default export */ __webpack_exports__["a"] = (CanvasRenderer);
__WEBPACK_IMPORTED_MODULE_4__utils__["pluginTarget"].mixin(CanvasRenderer);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DisplayObject__ = __webpack_require__(26);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * A Container represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 *```js
 * let container = new PIXI.Container();
 * container.addChild(sprite);
 * ```
 *
 * @class
 * @extends PIXI.DisplayObject
 * @memberof PIXI
 */

var Container = function (_DisplayObject) {
    _inherits(Container, _DisplayObject);

    /**
     *
     */
    function Container() {
        _classCallCheck(this, Container);

        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]}
         * @readonly
         */
        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

        _this.children = [];
        return _this;
    }

    /**
     * Overridable method that can be used by Container subclasses whenever the children array is modified
     *
     * @private
     */


    _createClass(Container, [{
        key: 'onChildrenChange',
        value: function onChildrenChange() {}
        /* empty */


        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */

    }, {
        key: 'addChild',
        value: function addChild(child) {
            var argumentsLength = arguments.length;

            // if there is only one argument we can bypass looping through the them
            if (argumentsLength > 1) {
                // loop through the arguments property and add all children
                // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
                for (var i = 0; i < argumentsLength; i++) {
                    this.addChild(arguments[i]);
                }
            } else {
                // if the child has a parent then lets remove it as PixiJS objects can only exist in one place
                if (child.parent) {
                    child.parent.removeChild(child);
                }

                child.parent = this;
                // ensure child transform will be recalculated
                child.transform._parentID = -1;

                this.children.push(child);

                // ensure bounds will be recalculated
                this._boundsID++;

                // TODO - lets either do all callbacks or all events.. not both!
                this.onChildrenChange(this.children.length - 1);
                child.emit('added', this);
            }

            return child;
        }

        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */

    }, {
        key: 'addChildAt',
        value: function addChildAt(child, index) {
            if (index < 0 || index > this.children.length) {
                throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
            }

            if (child.parent) {
                child.parent.removeChild(child);
            }

            child.parent = this;
            // ensure child transform will be recalculated
            child.transform._parentID = -1;

            this.children.splice(index, 0, child);

            // ensure bounds will be recalculated
            this._boundsID++;

            // TODO - lets either do all callbacks or all events.. not both!
            this.onChildrenChange(index);
            child.emit('added', this);

            return child;
        }

        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */

    }, {
        key: 'swapChildren',
        value: function swapChildren(child, child2) {
            if (child === child2) {
                return;
            }

            var index1 = this.getChildIndex(child);
            var index2 = this.getChildIndex(child2);

            this.children[index1] = child2;
            this.children[index2] = child;
            this.onChildrenChange(index1 < index2 ? index1 : index2);
        }

        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */

    }, {
        key: 'getChildIndex',
        value: function getChildIndex(child) {
            var index = this.children.indexOf(child);

            if (index === -1) {
                throw new Error('The supplied DisplayObject must be a child of the caller');
            }

            return index;
        }

        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */

    }, {
        key: 'setChildIndex',
        value: function setChildIndex(child, index) {
            if (index < 0 || index >= this.children.length) {
                throw new Error('The supplied index is out of bounds');
            }

            var currentIndex = this.getChildIndex(child);

            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["removeItems"])(this.children, currentIndex, 1); // remove from old position
            this.children.splice(index, 0, child); // add at new position

            this.onChildrenChange(index);
        }

        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */

    }, {
        key: 'getChildAt',
        value: function getChildAt(index) {
            if (index < 0 || index >= this.children.length) {
                throw new Error('getChildAt: Index (' + index + ') does not exist.');
            }

            return this.children[index];
        }

        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */

    }, {
        key: 'removeChild',
        value: function removeChild(child) {
            var argumentsLength = arguments.length;

            // if there is only one argument we can bypass looping through the them
            if (argumentsLength > 1) {
                // loop through the arguments property and add all children
                // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
                for (var i = 0; i < argumentsLength; i++) {
                    this.removeChild(arguments[i]);
                }
            } else {
                var index = this.children.indexOf(child);

                if (index === -1) return null;

                child.parent = null;
                // ensure child transform will be recalculated
                child.transform._parentID = -1;
                Object(__WEBPACK_IMPORTED_MODULE_0__utils__["removeItems"])(this.children, index, 1);

                // ensure bounds will be recalculated
                this._boundsID++;

                // TODO - lets either do all callbacks or all events.. not both!
                this.onChildrenChange(index);
                child.emit('removed', this);
            }

            return child;
        }

        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */

    }, {
        key: 'removeChildAt',
        value: function removeChildAt(index) {
            var child = this.getChildAt(index);

            // ensure child transform will be recalculated..
            child.parent = null;
            child.transform._parentID = -1;
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["removeItems"])(this.children, index, 1);

            // ensure bounds will be recalculated
            this._boundsID++;

            // TODO - lets either do all callbacks or all events.. not both!
            this.onChildrenChange(index);
            child.emit('removed', this);

            return child;
        }

        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {DisplayObject[]} List of removed children
         */

    }, {
        key: 'removeChildren',
        value: function removeChildren() {
            var beginIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var endIndex = arguments[1];

            var begin = beginIndex;
            var end = typeof endIndex === 'number' ? endIndex : this.children.length;
            var range = end - begin;
            var removed = void 0;

            if (range > 0 && range <= end) {
                removed = this.children.splice(begin, range);

                for (var i = 0; i < removed.length; ++i) {
                    removed[i].parent = null;
                    if (removed[i].transform) {
                        removed[i].transform._parentID = -1;
                    }
                }

                this._boundsID++;

                this.onChildrenChange(beginIndex);

                for (var _i = 0; _i < removed.length; ++_i) {
                    removed[_i].emit('removed', this);
                }

                return removed;
            } else if (range === 0 && this.children.length === 0) {
                return [];
            }

            throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
        }

        /**
         * Updates the transform on all children of this container for rendering
         */

    }, {
        key: 'updateTransform',
        value: function updateTransform() {
            this._boundsID++;

            this.transform.updateTransform(this.parent.transform);

            // TODO: check render flags, how to process stuff here
            this.worldAlpha = this.alpha * this.parent.worldAlpha;

            for (var i = 0, j = this.children.length; i < j; ++i) {
                var child = this.children[i];

                if (child.visible) {
                    child.updateTransform();
                }
            }
        }

        /**
         * Recalculates the bounds of the container.
         *
         */

    }, {
        key: 'calculateBounds',
        value: function calculateBounds() {
            this._bounds.clear();

            this._calculateBounds();

            for (var i = 0; i < this.children.length; i++) {
                var child = this.children[i];

                if (!child.visible || !child.renderable) {
                    continue;
                }

                child.calculateBounds();

                // TODO: filter+mask, need to mask both somehow
                if (child._mask) {
                    child._mask.calculateBounds();
                    this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
                } else if (child.filterArea) {
                    this._bounds.addBoundsArea(child._bounds, child.filterArea);
                } else {
                    this._bounds.addBounds(child._bounds);
                }
            }

            this._lastBoundsID = this._boundsID;
        }

        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         */

    }, {
        key: '_calculateBounds',
        value: function _calculateBounds() {}
        // FILL IN//


        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: 'renderWebGL',
        value: function renderWebGL(renderer) {
            // if the object is not visible or the alpha is 0 then no need to render this element
            if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
                return;
            }

            // do a quick check to see if this element has a mask or a filter.
            if (this._mask || this._filters) {
                this.renderAdvancedWebGL(renderer);
            } else {
                this._renderWebGL(renderer);

                // simple render children!
                for (var i = 0, j = this.children.length; i < j; ++i) {
                    this.children[i].renderWebGL(renderer);
                }
            }
        }

        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @private
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: 'renderAdvancedWebGL',
        value: function renderAdvancedWebGL(renderer) {
            renderer.flush();

            var filters = this._filters;
            var mask = this._mask;

            // push filter first as we need to ensure the stencil buffer is correct for any masking
            if (filters) {
                if (!this._enabledFilters) {
                    this._enabledFilters = [];
                }

                this._enabledFilters.length = 0;

                for (var i = 0; i < filters.length; i++) {
                    if (filters[i].enabled) {
                        this._enabledFilters.push(filters[i]);
                    }
                }

                if (this._enabledFilters.length) {
                    renderer.filterManager.pushFilter(this, this._enabledFilters);
                }
            }

            if (mask) {
                renderer.maskManager.pushMask(this, this._mask);
            }

            // add this object to the batch, only rendered if it has a texture.
            this._renderWebGL(renderer);

            // now loop through the children and make sure they get rendered
            for (var _i2 = 0, j = this.children.length; _i2 < j; _i2++) {
                this.children[_i2].renderWebGL(renderer);
            }

            renderer.flush();

            if (mask) {
                renderer.maskManager.popMask(this, this._mask);
            }

            if (filters && this._enabledFilters && this._enabledFilters.length) {
                renderer.filterManager.popFilter();
            }
        }

        /**
         * To be overridden by the subclasses.
         *
         * @private
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: '_renderWebGL',
        value: function _renderWebGL(renderer) // eslint-disable-line no-unused-vars
        {}
        // this is where content itself gets rendered...


        /**
         * To be overridden by the subclass
         *
         * @private
         * @param {PIXI.CanvasRenderer} renderer - The renderer
         */

    }, {
        key: '_renderCanvas',
        value: function _renderCanvas(renderer) // eslint-disable-line no-unused-vars
        {}
        // this is where content itself gets rendered...


        /**
         * Renders the object using the Canvas renderer
         *
         * @param {PIXI.CanvasRenderer} renderer - The renderer
         */

    }, {
        key: 'renderCanvas',
        value: function renderCanvas(renderer) {
            // if not visible or the alpha is 0 then no need to render this
            if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
                return;
            }

            if (this._mask) {
                renderer.maskManager.pushMask(this._mask);
            }

            this._renderCanvas(renderer);
            for (var i = 0, j = this.children.length; i < j; ++i) {
                this.children[i].renderCanvas(renderer);
            }

            if (this._mask) {
                renderer.maskManager.popMask(renderer);
            }
        }

        /**
         * Removes all internal references and listeners as well as removes children from the display list.
         * Do not use a Container after calling `destroy`.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */

    }, {
        key: 'destroy',
        value: function destroy(options) {
            _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'destroy', this).call(this);

            var destroyChildren = typeof options === 'boolean' ? options : options && options.children;

            var oldChildren = this.removeChildren(0, this.children.length);

            if (destroyChildren) {
                for (var i = 0; i < oldChildren.length; ++i) {
                    oldChildren[i].destroy(options);
                }
            }
        }

        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'width',
        get: function get() {
            return this.scale.x * this.getLocalBounds().width;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var width = this.getLocalBounds().width;

            if (width !== 0) {
                this.scale.x = value / width;
            } else {
                this.scale.x = 1;
            }

            this._width = value;
        }

        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return this.scale.y * this.getLocalBounds().height;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var height = this.getLocalBounds().height;

            if (height !== 0) {
                this.scale.y = value / height;
            } else {
                this.scale.y = 1;
            }

            this._height = value;
        }
    }]);

    return Container;
}(__WEBPACK_IMPORTED_MODULE_1__DisplayObject__["a" /* default */]);

// performance increase to avoid using call.. (10x faster)


/* harmony default export */ __webpack_exports__["a"] = (Container);
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_determineCrossOrigin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bit_twiddle__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bit_twiddle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bit_twiddle__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */

var BaseTexture = function (_EventEmitter) {
    _inherits(BaseTexture, _EventEmitter);

    /**
     * @param {HTMLImageElement|HTMLCanvasElement} [source] - the source object of the texture.
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture
     */
    function BaseTexture(source, scaleMode, resolution) {
        _classCallCheck(this, BaseTexture);

        var _this = _possibleConstructorReturn(this, (BaseTexture.__proto__ || Object.getPrototypeOf(BaseTexture)).call(this));

        _this.uid = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["uid"])();

        _this.touched = 0;

        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number}
         * @default 1
         */
        _this.resolution = resolution || __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].RESOLUTION;

        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        _this.width = 100;

        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        _this.height = 100;

        // TODO docs
        // used to store the actual dimensions of the source
        /**
         * Used to store the actual width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        _this.realWidth = 100;
        /**
         * Used to store the actual height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        _this.realHeight = 100;

        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {number}
         * @default PIXI.settings.SCALE_MODE
         * @see PIXI.SCALE_MODES
         */
        _this.scaleMode = scaleMode !== undefined ? scaleMode : __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].SCALE_MODE;

        /**
         * Set to true once the base texture has successfully loaded.
         *
         * This is never true if the underlying source fails to load or has no texture data.
         *
         * @readonly
         * @member {boolean}
         */
        _this.hasLoaded = false;

        /**
         * Set to true if the source is currently loading.
         *
         * If an Image source is loading the 'loaded' or 'error' event will be
         * dispatched when the operation ends. An underyling source that is
         * immediately-available bypasses loading entirely.
         *
         * @readonly
         * @member {boolean}
         */
        _this.isLoading = false;

        /**
         * The image source that is used to create the texture.
         *
         * TODO: Make this a setter that calls loadSource();
         *
         * @readonly
         * @member {HTMLImageElement|HTMLCanvasElement}
         */
        _this.source = null; // set in loadSource, if at all

        /**
         * The image source that is used to create the texture. This is used to
         * store the original Svg source when it is replaced with a canvas element.
         *
         * TODO: Currently not in use but could be used when re-scaling svg.
         *
         * @readonly
         * @member {Image}
         */
        _this.origSource = null; // set in loadSvg, if at all

        /**
         * Type of image defined in source, eg. `png` or `svg`
         *
         * @readonly
         * @member {string}
         */
        _this.imageType = null; // set in updateImageType

        /**
         * Scale for source image. Used with Svg images to scale them before rasterization.
         *
         * @readonly
         * @member {number}
         */
        _this.sourceScale = 1.0;

        /**
         * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
         * All blend modes, and shaders written for default value. Change it on your own risk.
         *
         * @member {boolean}
         * @default true
         */
        _this.premultipliedAlpha = true;

        /**
         * The image url of the texture
         *
         * @member {string}
         */
        _this.imageUrl = null;

        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @private
         * @member {boolean}
         */
        _this.isPowerOfTwo = false;

        // used for webGL

        /**
         *
         * Set this to true if a mipmap of this texture needs to be generated. This value needs
         * to be set before the texture is used
         * Also the texture must be a power of two size to work
         *
         * @member {boolean}
         * @see PIXI.MIPMAP_TEXTURES
         */
        _this.mipmap = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].MIPMAP_TEXTURES;

        /**
         *
         * WebGL Texture wrap mode
         *
         * @member {number}
         * @see PIXI.WRAP_MODES
         */
        _this.wrapMode = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].WRAP_MODE;

        /**
         * A map of renderer IDs to webgl textures
         *
         * @private
         * @member {object<number, WebGLTexture>}
         */
        _this._glTextures = {};

        _this._enabled = 0;
        _this._virtalBoundId = -1;

        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean}
         * @private
         * @readonly
         */
        _this._destroyed = false;

        /**
         * The ids under which this BaseTexture has been added to the base texture cache. This is
         * automatically set as long as BaseTexture.addToCache is used, but may not be set if a
         * BaseTexture is added directly to the BaseTextureCache array.
         *
         * @member {string[]}
         */
        _this.textureCacheIds = [];

        // if no source passed don't try to load
        if (source) {
            _this.loadSource(source);
        }

        /**
         * Fired when a not-immediately-available source finishes loading.
         *
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         */

        /**
         * Fired when a not-immediately-available source fails to load.
         *
         * @protected
         * @event PIXI.BaseTexture#error
         * @param {PIXI.BaseTexture} baseTexture - Resource errored.
         */

        /**
         * Fired when BaseTexture is updated.
         *
         * @protected
         * @event PIXI.BaseTexture#update
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being updated.
         */

        /**
         * Fired when BaseTexture is destroyed.
         *
         * @protected
         * @event PIXI.BaseTexture#dispose
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being destroyed.
         */
        return _this;
    }

    /**
     * Updates the texture on all the webgl renderers, this also assumes the src has changed.
     *
     * @fires PIXI.BaseTexture#update
     */


    _createClass(BaseTexture, [{
        key: 'update',
        value: function update() {
            // Svg size is handled during load
            if (this.imageType !== 'svg') {
                this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width;
                this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;

                this._updateDimensions();
            }

            this.emit('update', this);
        }

        /**
         * Update dimensions from real values
         */

    }, {
        key: '_updateDimensions',
        value: function _updateDimensions() {
            this.width = this.realWidth / this.resolution;
            this.height = this.realHeight / this.resolution;

            this.isPowerOfTwo = __WEBPACK_IMPORTED_MODULE_4_bit_twiddle___default.a.isPow2(this.realWidth) && __WEBPACK_IMPORTED_MODULE_4_bit_twiddle___default.a.isPow2(this.realHeight);
        }

        /**
         * Load a source.
         *
         * If the source is not-immediately-available, such as an image that needs to be
         * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
         * and `hasLoaded` will remain false after this call.
         *
         * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
         *
         *     if (texture.hasLoaded) {
         *        // texture ready for use
         *     } else if (texture.isLoading) {
         *        // listen to 'loaded' and/or 'error' events on texture
         *     } else {
         *        // not loading, not going to load UNLESS the source is reloaded
         *        // (it may still make sense to listen to the events)
         *     }
         *
         * @protected
         * @param {HTMLImageElement|HTMLCanvasElement} source - the source object of the texture.
         */

    }, {
        key: 'loadSource',
        value: function loadSource(source) {
            var wasLoading = this.isLoading;

            this.hasLoaded = false;
            this.isLoading = false;

            if (wasLoading && this.source) {
                this.source.onload = null;
                this.source.onerror = null;
            }

            var firstSourceLoaded = !this.source;

            this.source = source;

            // Apply source if loaded. Otherwise setup appropriate loading monitors.
            if ((source.src && source.complete || source.getContext) && source.width && source.height) {
                this._updateImageType();

                if (this.imageType === 'svg') {
                    this._loadSvgSource();
                } else {
                    this._sourceLoaded();
                }

                if (firstSourceLoaded) {
                    // send loaded event if previous source was null and we have been passed a pre-loaded IMG element
                    this.emit('loaded', this);
                }
            } else if (!source.getContext) {
                // Image fail / not ready
                this.isLoading = true;

                var scope = this;

                source.onload = function () {
                    scope._updateImageType();
                    source.onload = null;
                    source.onerror = null;

                    if (!scope.isLoading) {
                        return;
                    }

                    scope.isLoading = false;
                    scope._sourceLoaded();

                    if (scope.imageType === 'svg') {
                        scope._loadSvgSource();

                        return;
                    }

                    scope.emit('loaded', scope);
                };

                source.onerror = function () {
                    source.onload = null;
                    source.onerror = null;

                    if (!scope.isLoading) {
                        return;
                    }

                    scope.isLoading = false;
                    scope.emit('error', scope);
                };

                // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
                //   "The value of `complete` can thus change while a script is executing."
                // So complete needs to be re-checked after the callbacks have been added..
                // NOTE: complete will be true if the image has no src so best to check if the src is set.
                if (source.complete && source.src) {
                    // ..and if we're complete now, no need for callbacks
                    source.onload = null;
                    source.onerror = null;

                    if (scope.imageType === 'svg') {
                        scope._loadSvgSource();

                        return;
                    }

                    this.isLoading = false;

                    if (source.width && source.height) {
                        this._sourceLoaded();

                        // If any previous subscribers possible
                        if (wasLoading) {
                            this.emit('loaded', this);
                        }
                    }
                    // If any previous subscribers possible
                    else if (wasLoading) {
                            this.emit('error', this);
                        }
                }
            }
        }

        /**
         * Updates type of the source image.
         */

    }, {
        key: '_updateImageType',
        value: function _updateImageType() {
            if (!this.imageUrl) {
                return;
            }

            var dataUri = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["decomposeDataUri"])(this.imageUrl);
            var imageType = void 0;

            if (dataUri && dataUri.mediaType === 'image') {
                // Check for subType validity
                var firstSubType = dataUri.subType.split('+')[0];

                imageType = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getUrlFileExtension"])('.' + firstSubType);

                if (!imageType) {
                    throw new Error('Invalid image type in data URI.');
                }
            } else {
                imageType = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getUrlFileExtension"])(this.imageUrl);

                if (!imageType) {
                    imageType = 'png';
                }
            }

            this.imageType = imageType;
        }

        /**
         * Checks if `source` is an SVG image and whether it's loaded via a URL or a data URI. Then calls
         * `_loadSvgSourceUsingDataUri` or `_loadSvgSourceUsingXhr`.
         */

    }, {
        key: '_loadSvgSource',
        value: function _loadSvgSource() {
            if (this.imageType !== 'svg') {
                // Do nothing if source is not svg
                return;
            }

            var dataUri = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["decomposeDataUri"])(this.imageUrl);

            if (dataUri) {
                this._loadSvgSourceUsingDataUri(dataUri);
            } else {
                // We got an URL, so we need to do an XHR to check the svg size
                this._loadSvgSourceUsingXhr();
            }
        }

        /**
         * Reads an SVG string from data URI and then calls `_loadSvgSourceUsingString`.
         *
         * @param {string} dataUri - The data uri to load from.
         */

    }, {
        key: '_loadSvgSourceUsingDataUri',
        value: function _loadSvgSourceUsingDataUri(dataUri) {
            var svgString = void 0;

            if (dataUri.encoding === 'base64') {
                if (!atob) {
                    throw new Error('Your browser doesn\'t support base64 conversions.');
                }
                svgString = atob(dataUri.data);
            } else {
                svgString = dataUri.data;
            }

            this._loadSvgSourceUsingString(svgString);
        }

        /**
         * Loads an SVG string from `imageUrl` using XHR and then calls `_loadSvgSourceUsingString`.
         */

    }, {
        key: '_loadSvgSourceUsingXhr',
        value: function _loadSvgSourceUsingXhr() {
            var _this2 = this;

            var svgXhr = new XMLHttpRequest();

            // This throws error on IE, so SVG Document can't be used
            // svgXhr.responseType = 'document';

            // This is not needed since we load the svg as string (breaks IE too)
            // but overrideMimeType() can be used to force the response to be parsed as XML
            // svgXhr.overrideMimeType('image/svg+xml');

            svgXhr.onload = function () {
                if (svgXhr.readyState !== svgXhr.DONE || svgXhr.status !== 200) {
                    throw new Error('Failed to load SVG using XHR.');
                }

                _this2._loadSvgSourceUsingString(svgXhr.response);
            };

            svgXhr.onerror = function () {
                return _this2.emit('error', _this2);
            };

            svgXhr.open('GET', this.imageUrl, true);
            svgXhr.send();
        }

        /**
         * Loads texture using an SVG string. The original SVG Image is stored as `origSource` and the
         * created canvas is the new `source`. The SVG is scaled using `sourceScale`. Called by
         * `_loadSvgSourceUsingXhr` or `_loadSvgSourceUsingDataUri`.
         *
         * @param  {string} svgString SVG source as string
         *
         * @fires PIXI.BaseTexture#loaded
         */

    }, {
        key: '_loadSvgSourceUsingString',
        value: function _loadSvgSourceUsingString(svgString) {
            var svgSize = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getSvgSize"])(svgString);

            var svgWidth = svgSize.width;
            var svgHeight = svgSize.height;

            if (!svgWidth || !svgHeight) {
                throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
            }

            // Scale realWidth and realHeight
            this.realWidth = Math.round(svgWidth * this.sourceScale);
            this.realHeight = Math.round(svgHeight * this.sourceScale);

            this._updateDimensions();

            // Create a canvas element
            var canvas = document.createElement('canvas');

            canvas.width = this.realWidth;
            canvas.height = this.realHeight;
            canvas._pixiId = 'canvas_' + Object(__WEBPACK_IMPORTED_MODULE_0__utils__["uid"])();

            // Draw the Svg to the canvas
            canvas.getContext('2d').drawImage(this.source, 0, 0, svgWidth, svgHeight, 0, 0, this.realWidth, this.realHeight);

            // Replace the original source image with the canvas
            this.origSource = this.source;
            this.source = canvas;

            // Add also the canvas in cache (destroy clears by `imageUrl` and `source._pixiId`)
            BaseTexture.addToCache(this, canvas._pixiId);

            this.isLoading = false;
            this._sourceLoaded();
            this.emit('loaded', this);
        }

        /**
         * Used internally to update the width, height, and some other tracking vars once
         * a source has successfully loaded.
         *
         * @private
         */

    }, {
        key: '_sourceLoaded',
        value: function _sourceLoaded() {
            this.hasLoaded = true;
            this.update();
        }

        /**
         * Destroys this base texture
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.imageUrl) {
                delete __WEBPACK_IMPORTED_MODULE_0__utils__["TextureCache"][this.imageUrl];

                this.imageUrl = null;

                if (!navigator.isCocoonJS) {
                    this.source.src = '';
                }
            }

            this.source = null;

            this.dispose();

            BaseTexture.removeFromCache(this);
            this.textureCacheIds = null;

            this._destroyed = true;
        }

        /**
         * Frees the texture from WebGL memory without destroying this texture object.
         * This means you can still use the texture later which will upload it to GPU
         * memory again.
         *
         * @fires PIXI.BaseTexture#dispose
         */

    }, {
        key: 'dispose',
        value: function dispose() {
            this.emit('dispose', this);
        }

        /**
         * Changes the source image of the texture.
         * The original source must be an Image element.
         *
         * @param {string} newSrc - the path of the image
         */

    }, {
        key: 'updateSourceImage',
        value: function updateSourceImage(newSrc) {
            this.source.src = newSrc;

            this.loadSource(this.source);
        }

        /**
         * Helper function that creates a base texture from the given image url.
         * If the image is not in the base texture cache it will be created and loaded.
         *
         * @static
         * @param {string} imageUrl - The image url of the texture
         * @param {boolean} [crossorigin=(auto)] - Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
         * @return {PIXI.BaseTexture} The new base texture.
         */

    }], [{
        key: 'fromImage',
        value: function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
            var baseTexture = __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][imageUrl];

            if (!baseTexture) {
                // new Image() breaks tex loading in some versions of Chrome.
                // See https://code.google.com/p/chromium/issues/detail?id=238071
                var image = new Image(); // document.createElement('img');

                if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
                    image.crossOrigin = Object(__WEBPACK_IMPORTED_MODULE_3__utils_determineCrossOrigin__["a" /* default */])(imageUrl);
                } else if (crossorigin) {
                    image.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
                }

                baseTexture = new BaseTexture(image, scaleMode);
                baseTexture.imageUrl = imageUrl;

                if (sourceScale) {
                    baseTexture.sourceScale = sourceScale;
                }

                // if there is an @2x at the end of the url we are going to assume its a highres image
                baseTexture.resolution = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getResolutionOfUrl"])(imageUrl);

                image.src = imageUrl; // Setting this triggers load

                BaseTexture.addToCache(baseTexture, imageUrl);
            }

            return baseTexture;
        }

        /**
         * Helper function that creates a base texture from the given canvas element.
         *
         * @static
         * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
         * @param {number} scaleMode - See {@link PIXI.SCALE_MODES} for possible values
         * @param {string} [origin='canvas'] - A string origin of who created the base texture
         * @return {PIXI.BaseTexture} The new base texture.
         */

    }, {
        key: 'fromCanvas',
        value: function fromCanvas(canvas, scaleMode) {
            var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';

            if (!canvas._pixiId) {
                canvas._pixiId = origin + '_' + Object(__WEBPACK_IMPORTED_MODULE_0__utils__["uid"])();
            }

            var baseTexture = __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][canvas._pixiId];

            if (!baseTexture) {
                baseTexture = new BaseTexture(canvas, scaleMode);
                BaseTexture.addToCache(baseTexture, canvas._pixiId);
            }

            return baseTexture;
        }

        /**
         * Helper function that creates a base texture based on the source you provide.
         * The source can be - image url, image element, canvas element. If the
         * source is an image url or an image element and not in the base texture
         * cache, it will be created and loaded.
         *
         * @static
         * @param {string|HTMLImageElement|HTMLCanvasElement} source - The source to create base texture from.
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
         * @return {PIXI.BaseTexture} The new base texture.
         */

    }, {
        key: 'from',
        value: function from(source, scaleMode, sourceScale) {
            if (typeof source === 'string') {
                return BaseTexture.fromImage(source, undefined, scaleMode, sourceScale);
            } else if (source instanceof HTMLImageElement) {
                var imageUrl = source.src;
                var baseTexture = __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][imageUrl];

                if (!baseTexture) {
                    baseTexture = new BaseTexture(source, scaleMode);
                    baseTexture.imageUrl = imageUrl;

                    if (sourceScale) {
                        baseTexture.sourceScale = sourceScale;
                    }

                    // if there is an @2x at the end of the url we are going to assume its a highres image
                    baseTexture.resolution = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getResolutionOfUrl"])(imageUrl);

                    BaseTexture.addToCache(baseTexture, imageUrl);
                }

                return baseTexture;
            } else if (source instanceof HTMLCanvasElement) {
                return BaseTexture.fromCanvas(source, scaleMode);
            }

            // lets assume its a base texture!
            return source;
        }

        /**
         * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
         *
         * @static
         * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
         * @param {string} id - The id that the BaseTexture will be stored against.
         */

    }, {
        key: 'addToCache',
        value: function addToCache(baseTexture, id) {
            if (id) {
                if (baseTexture.textureCacheIds.indexOf(id) === -1) {
                    baseTexture.textureCacheIds.push(id);
                }

                // @if DEBUG
                /* eslint-disable no-console */
                if (__WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][id]) {
                    console.warn('BaseTexture added to the cache with an id [' + id + '] that already had an entry');
                }
                /* eslint-enable no-console */
                // @endif

                __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][id] = baseTexture;
            }
        }

        /**
         * Remove a BaseTexture from the global BaseTextureCache.
         *
         * @static
         * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
         * @return {PIXI.BaseTexture|null} The BaseTexture that was removed.
         */

    }, {
        key: 'removeFromCache',
        value: function removeFromCache(baseTexture) {
            if (typeof baseTexture === 'string') {
                var baseTextureFromCache = __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][baseTexture];

                if (baseTextureFromCache) {
                    var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);

                    if (index > -1) {
                        baseTextureFromCache.textureCacheIds.splice(index, 1);
                    }

                    delete __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][baseTexture];

                    return baseTextureFromCache;
                }
            } else if (baseTexture && baseTexture.textureCacheIds) {
                for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
                    delete __WEBPACK_IMPORTED_MODULE_0__utils__["BaseTextureCache"][baseTexture.textureCacheIds[i]];
                }

                baseTexture.textureCacheIds.length = 0;

                return baseTexture;
            }

            return null;
        }
    }]);

    return BaseTexture;
}(__WEBPACK_IMPORTED_MODULE_2_eventemitter3___default.a);

/* harmony default export */ __webpack_exports__["a"] = (BaseTexture);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import Loader from './Loader';
// import Resource from './Resource';
// import * as async from './async';
// import * as b64 from './b64';

/* eslint-disable no-undef */

var Loader = __webpack_require__(120).default;
var Resource = __webpack_require__(21).default;
var async = __webpack_require__(59);
var b64 = __webpack_require__(60);

Loader.Resource = Resource;
Loader.async = async;
Loader.base64 = b64;

// export manually, and also as default
module.exports = Loader;
// export default Loader;
module.exports.default = Loader;
//# sourceMappingURL=index.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof PIXI
 */
var Point = function () {
  /**
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Point);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;
  }

  /**
   * Creates a clone of this point
   *
   * @return {PIXI.Point} a copy of the point
   */


  _createClass(Point, [{
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }

    /**
     * Copies x and y from the given point
     *
     * @param {PIXI.Point} p - The point to copy.
     */

  }, {
    key: "copy",
    value: function copy(p) {
      this.set(p.x, p.y);
    }

    /**
     * Returns true if the given point is equal to this point
     *
     * @param {PIXI.Point} p - The point to check
     * @returns {boolean} Whether the given point equal to this point
     */

  }, {
    key: "equals",
    value: function equals(p) {
      return p.x === this.x && p.y === this.y;
    }

    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */

  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x || 0;
      this.y = y || (y !== 0 ? this.x : 0);
    }
  }]);

  return Point;
}();

/* harmony default export */ __webpack_exports__["a"] = (Point);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * The PixiJS Matrix class as an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @memberof PIXI
 */

var Matrix = function () {
    /**
     * @param {number} [a=1] - x scale
     * @param {number} [b=0] - y skew
     * @param {number} [c=0] - x skew
     * @param {number} [d=1] - y scale
     * @param {number} [tx=0] - x translation
     * @param {number} [ty=0] - y translation
     */
    function Matrix() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        _classCallCheck(this, Matrix);

        /**
         * @member {number}
         * @default 1
         */
        this.a = a;

        /**
         * @member {number}
         * @default 0
         */
        this.b = b;

        /**
         * @member {number}
         * @default 0
         */
        this.c = c;

        /**
         * @member {number}
         * @default 1
         */
        this.d = d;

        /**
         * @member {number}
         * @default 0
         */
        this.tx = tx;

        /**
         * @member {number}
         * @default 0
         */
        this.ty = ty;

        this.array = null;
    }

    /**
     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
     *
     * a = array[0]
     * b = array[1]
     * c = array[3]
     * d = array[4]
     * tx = array[2]
     * ty = array[5]
     *
     * @param {number[]} array - The array that the matrix will be populated from.
     */


    _createClass(Matrix, [{
        key: 'fromArray',
        value: function fromArray(array) {
            this.a = array[0];
            this.b = array[1];
            this.c = array[3];
            this.d = array[4];
            this.tx = array[2];
            this.ty = array[5];
        }

        /**
         * sets the matrix properties
         *
         * @param {number} a - Matrix component
         * @param {number} b - Matrix component
         * @param {number} c - Matrix component
         * @param {number} d - Matrix component
         * @param {number} tx - Matrix component
         * @param {number} ty - Matrix component
         *
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'set',
        value: function set(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;

            return this;
        }

        /**
         * Creates an array from the current Matrix object.
         *
         * @param {boolean} transpose - Whether we need to transpose the matrix or not
         * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
         * @return {number[]} the newly created array which contains the matrix
         */

    }, {
        key: 'toArray',
        value: function toArray(transpose, out) {
            if (!this.array) {
                this.array = new Float32Array(9);
            }

            var array = out || this.array;

            if (transpose) {
                array[0] = this.a;
                array[1] = this.b;
                array[2] = 0;
                array[3] = this.c;
                array[4] = this.d;
                array[5] = 0;
                array[6] = this.tx;
                array[7] = this.ty;
                array[8] = 1;
            } else {
                array[0] = this.a;
                array[1] = this.c;
                array[2] = this.tx;
                array[3] = this.b;
                array[4] = this.d;
                array[5] = this.ty;
                array[6] = 0;
                array[7] = 0;
                array[8] = 1;
            }

            return array;
        }

        /**
         * Get a new position with the current transformation applied.
         * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
         *
         * @param {PIXI.Point} pos - The origin
         * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return {PIXI.Point} The new point, transformed through this matrix
         */

    }, {
        key: 'apply',
        value: function apply(pos, newPos) {
            newPos = newPos || new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */]();

            var x = pos.x;
            var y = pos.y;

            newPos.x = this.a * x + this.c * y + this.tx;
            newPos.y = this.b * x + this.d * y + this.ty;

            return newPos;
        }

        /**
         * Get a new position with the inverse of the current transformation applied.
         * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
         *
         * @param {PIXI.Point} pos - The origin
         * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return {PIXI.Point} The new point, inverse-transformed through this matrix
         */

    }, {
        key: 'applyInverse',
        value: function applyInverse(pos, newPos) {
            newPos = newPos || new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */]();

            var id = 1 / (this.a * this.d + this.c * -this.b);

            var x = pos.x;
            var y = pos.y;

            newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
            newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;

            return newPos;
        }

        /**
         * Translates the matrix on the x and y.
         *
         * @param {number} x How much to translate x by
         * @param {number} y How much to translate y by
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'translate',
        value: function translate(x, y) {
            this.tx += x;
            this.ty += y;

            return this;
        }

        /**
         * Applies a scale transformation to the matrix.
         *
         * @param {number} x The amount to scale horizontally
         * @param {number} y The amount to scale vertically
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'scale',
        value: function scale(x, y) {
            this.a *= x;
            this.d *= y;
            this.c *= x;
            this.b *= y;
            this.tx *= x;
            this.ty *= y;

            return this;
        }

        /**
         * Applies a rotation transformation to the matrix.
         *
         * @param {number} angle - The angle in radians.
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'rotate',
        value: function rotate(angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);

            var a1 = this.a;
            var c1 = this.c;
            var tx1 = this.tx;

            this.a = a1 * cos - this.b * sin;
            this.b = a1 * sin + this.b * cos;
            this.c = c1 * cos - this.d * sin;
            this.d = c1 * sin + this.d * cos;
            this.tx = tx1 * cos - this.ty * sin;
            this.ty = tx1 * sin + this.ty * cos;

            return this;
        }

        /**
         * Appends the given Matrix to this Matrix.
         *
         * @param {PIXI.Matrix} matrix - The matrix to append.
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'append',
        value: function append(matrix) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;

            this.a = matrix.a * a1 + matrix.b * c1;
            this.b = matrix.a * b1 + matrix.b * d1;
            this.c = matrix.c * a1 + matrix.d * c1;
            this.d = matrix.c * b1 + matrix.d * d1;

            this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
            this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

            return this;
        }

        /**
         * Sets the matrix based on all the available properties
         *
         * @param {number} x - Position on the x axis
         * @param {number} y - Position on the y axis
         * @param {number} pivotX - Pivot on the x axis
         * @param {number} pivotY - Pivot on the y axis
         * @param {number} scaleX - Scale on the x axis
         * @param {number} scaleY - Scale on the y axis
         * @param {number} rotation - Rotation in radians
         * @param {number} skewX - Skew on the x axis
         * @param {number} skewY - Skew on the y axis
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'setTransform',
        value: function setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
            var sr = Math.sin(rotation);
            var cr = Math.cos(rotation);
            var cy = Math.cos(skewY);
            var sy = Math.sin(skewY);
            var nsx = -Math.sin(skewX);
            var cx = Math.cos(skewX);

            var a = cr * scaleX;
            var b = sr * scaleX;
            var c = -sr * scaleY;
            var d = cr * scaleY;

            this.a = cy * a + sy * c;
            this.b = cy * b + sy * d;
            this.c = nsx * a + cx * c;
            this.d = nsx * b + cx * d;

            this.tx = x + (pivotX * a + pivotY * c);
            this.ty = y + (pivotX * b + pivotY * d);

            return this;
        }

        /**
         * Prepends the given Matrix to this Matrix.
         *
         * @param {PIXI.Matrix} matrix - The matrix to prepend
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'prepend',
        value: function prepend(matrix) {
            var tx1 = this.tx;

            if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
                var a1 = this.a;
                var c1 = this.c;

                this.a = a1 * matrix.a + this.b * matrix.c;
                this.b = a1 * matrix.b + this.b * matrix.d;
                this.c = c1 * matrix.a + this.d * matrix.c;
                this.d = c1 * matrix.b + this.d * matrix.d;
            }

            this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
            this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;

            return this;
        }

        /**
         * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
         *
         * @param {PIXI.Transform|PIXI.TransformStatic} transform - The transform to apply the properties to.
         * @return {PIXI.Transform|PIXI.TransformStatic} The transform with the newly applied properties
         */

    }, {
        key: 'decompose',
        value: function decompose(transform) {
            // sort out rotation / skew..
            var a = this.a;
            var b = this.b;
            var c = this.c;
            var d = this.d;

            var skewX = -Math.atan2(-c, d);
            var skewY = Math.atan2(b, a);

            var delta = Math.abs(skewX + skewY);

            if (delta < 0.00001) {
                transform.rotation = skewY;

                if (a < 0 && d >= 0) {
                    transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI;
                }

                transform.skew.x = transform.skew.y = 0;
            } else {
                transform.skew.x = skewX;
                transform.skew.y = skewY;
            }

            // next set scale
            transform.scale.x = Math.sqrt(a * a + b * b);
            transform.scale.y = Math.sqrt(c * c + d * d);

            // next set position
            transform.position.x = this.tx;
            transform.position.y = this.ty;

            return transform;
        }

        /**
         * Inverts this matrix
         *
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'invert',
        value: function invert() {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;

            this.a = d1 / n;
            this.b = -b1 / n;
            this.c = -c1 / n;
            this.d = a1 / n;
            this.tx = (c1 * this.ty - d1 * tx1) / n;
            this.ty = -(a1 * this.ty - b1 * tx1) / n;

            return this;
        }

        /**
         * Resets this Matix to an identity (default) matrix.
         *
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */

    }, {
        key: 'identity',
        value: function identity() {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.tx = 0;
            this.ty = 0;

            return this;
        }

        /**
         * Creates a new Matrix object with the same values as this one.
         *
         * @return {PIXI.Matrix} A copy of this matrix. Good for chaining method calls.
         */

    }, {
        key: 'clone',
        value: function clone() {
            var matrix = new Matrix();

            matrix.a = this.a;
            matrix.b = this.b;
            matrix.c = this.c;
            matrix.d = this.d;
            matrix.tx = this.tx;
            matrix.ty = this.ty;

            return matrix;
        }

        /**
         * Changes the values of the given matrix to be the same as the ones in this matrix
         *
         * @param {PIXI.Matrix} matrix - The matrix to copy from.
         * @return {PIXI.Matrix} The matrix given in parameter with its values updated.
         */

    }, {
        key: 'copy',
        value: function copy(matrix) {
            matrix.a = this.a;
            matrix.b = this.b;
            matrix.c = this.c;
            matrix.d = this.d;
            matrix.tx = this.tx;
            matrix.ty = this.ty;

            return matrix;
        }

        /**
         * A default (identity) matrix
         *
         * @static
         * @const
         */

    }], [{
        key: 'IDENTITY',
        get: function get() {
            return new Matrix();
        }

        /**
         * A temp matrix
         *
         * @static
         * @const
         */

    }, {
        key: 'TEMP_MATRIX',
        get: function get() {
            return new Matrix();
        }
    }]);

    return Matrix;
}();

/* harmony default export */ __webpack_exports__["a"] = (Matrix);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Rectangle object is an area defined by its position, as indicated by its top-left corner
 * point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 */

var Rectangle = function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
     * @param {number} [width=0] - The overall width of this rectangle
     * @param {number} [height=0] - The overall height of this rectangle
     */
    function Rectangle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Rectangle);

        /**
         * @member {number}
         * @default 0
         */
        this.x = Number(x);

        /**
         * @member {number}
         * @default 0
         */
        this.y = Number(y);

        /**
         * @member {number}
         * @default 0
         */
        this.width = Number(width);

        /**
         * @member {number}
         * @default 0
         */
        this.height = Number(height);

        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.RECT
         * @see PIXI.SHAPES
         */
        this.type = __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].RECT;
    }

    /**
     * returns the left edge of the rectangle
     *
     * @member {number}
     */


    _createClass(Rectangle, [{
        key: 'clone',


        /**
         * Creates a clone of this Rectangle
         *
         * @return {PIXI.Rectangle} a copy of the rectangle
         */
        value: function clone() {
            return new Rectangle(this.x, this.y, this.width, this.height);
        }

        /**
         * Copies another rectangle to this one.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to copy.
         * @return {PIXI.Rectangle} Returns itself.
         */

    }, {
        key: 'copy',
        value: function copy(rectangle) {
            this.x = rectangle.x;
            this.y = rectangle.y;
            this.width = rectangle.width;
            this.height = rectangle.height;

            return this;
        }

        /**
         * Checks whether the x and y coordinates given are contained within this Rectangle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Rectangle
         */

    }, {
        key: 'contains',
        value: function contains(x, y) {
            if (this.width <= 0 || this.height <= 0) {
                return false;
            }

            if (x >= this.x && x < this.x + this.width) {
                if (y >= this.y && y < this.y + this.height) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Pads the rectangle making it grow in all directions.
         *
         * @param {number} paddingX - The horizontal padding amount.
         * @param {number} paddingY - The vertical padding amount.
         */

    }, {
        key: 'pad',
        value: function pad(paddingX, paddingY) {
            paddingX = paddingX || 0;
            paddingY = paddingY || (paddingY !== 0 ? paddingX : 0);

            this.x -= paddingX;
            this.y -= paddingY;

            this.width += paddingX * 2;
            this.height += paddingY * 2;
        }

        /**
         * Fits this rectangle around the passed one.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
         */

    }, {
        key: 'fit',
        value: function fit(rectangle) {
            if (this.x < rectangle.x) {
                this.width += this.x;
                if (this.width < 0) {
                    this.width = 0;
                }

                this.x = rectangle.x;
            }

            if (this.y < rectangle.y) {
                this.height += this.y;
                if (this.height < 0) {
                    this.height = 0;
                }
                this.y = rectangle.y;
            }

            if (this.x + this.width > rectangle.x + rectangle.width) {
                this.width = rectangle.width - this.x;
                if (this.width < 0) {
                    this.width = 0;
                }
            }

            if (this.y + this.height > rectangle.y + rectangle.height) {
                this.height = rectangle.height - this.y;
                if (this.height < 0) {
                    this.height = 0;
                }
            }
        }

        /**
         * Enlarges this rectangle to include the passed rectangle.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to include.
         */

    }, {
        key: 'enlarge',
        value: function enlarge(rectangle) {
            var x1 = Math.min(this.x, rectangle.x);
            var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
            var y1 = Math.min(this.y, rectangle.y);
            var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);

            this.x = x1;
            this.width = x2 - x1;
            this.y = y1;
            this.height = y2 - y1;
        }
    }, {
        key: 'left',
        get: function get() {
            return this.x;
        }

        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */

    }, {
        key: 'right',
        get: function get() {
            return this.x + this.width;
        }

        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */

    }, {
        key: 'top',
        get: function get() {
            return this.y;
        }

        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */

    }, {
        key: 'bottom',
        get: function get() {
            return this.y + this.height;
        }

        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         */

    }], [{
        key: 'EMPTY',
        get: function get() {
            return new Rectangle(0, 0, 0, 0);
        }
    }]);

    return Rectangle;
}();

/* harmony default export */ __webpack_exports__["a"] = (Rectangle);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shared", function() { return shared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ticker__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return __WEBPACK_IMPORTED_MODULE_0__Ticker__["a"]; });


/**
 * The shared ticker instance used by {@link PIXI.extras.AnimatedSprite}.
 * and by {@link PIXI.interaction.InteractionManager}.
 * The property {@link PIXI.ticker.Ticker#autoStart} is set to `true`
 * for this instance. Please follow the examples for usage, including
 * how to opt-out of auto-starting the shared ticker.
 *
 * @example
 * let ticker = PIXI.ticker.shared;
 * // Set this to prevent starting this ticker when listeners are added.
 * // By default this is true only for the PIXI.ticker.shared instance.
 * ticker.autoStart = false;
 * // FYI, call this to ensure the ticker is stopped. It should be stopped
 * // if you have not attempted to render anything yet.
 * ticker.stop();
 * // Call this when you are ready for a running shared ticker.
 * ticker.start();
 *
 * @example
 * // You may use the shared ticker to render...
 * let renderer = PIXI.autoDetectRenderer(800, 600);
 * let stage = new PIXI.Container();
 * let interactionManager = PIXI.interaction.InteractionManager(renderer);
 * document.body.appendChild(renderer.view);
 * ticker.add(function (time) {
 *     renderer.render(stage);
 * });
 *
 * @example
 * // Or you can just update it manually.
 * ticker.autoStart = false;
 * ticker.stop();
 * function animate(time) {
 *     ticker.update(time);
 *     renderer.render(stage);
 *     requestAnimationFrame(animate);
 * }
 * animate(performance.now());
 *
 * @type {PIXI.ticker.Ticker}
 * @memberof PIXI.ticker
 */
var shared = new __WEBPACK_IMPORTED_MODULE_0__Ticker__["a" /* default */]();

shared.autoStart = true;
shared.destroy = function () {
  // protect destroying shared ticker
  // this is used by other internal systems
  // like AnimatedSprite and InteractionManager
};

/**
 * This namespace contains an API for interacting with PIXI's internal global update loop.
 *
 * This ticker is used for rendering, {@link PIXI.extras.AnimatedSprite AnimatedSprite},
 * {@link PIXI.interaction.InteractionManager InteractionManager} and many other time-based PIXI systems.
 * @example
 * const ticker = new PIXI.ticker.Ticker();
 * ticker.stop();
 * ticker.add((deltaTime) => {
 *   // do something every frame
 * });
 * ticker.start();
 * @namespace PIXI.ticker
 */


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Generic class to deal with traditional 2D matrix transforms
 *
 * @class
 * @memberof PIXI
 */

var TransformBase = function () {
  /**
   *
   */
  function TransformBase() {
    _classCallCheck(this, TransformBase);

    /**
     * The global matrix transform. It can be swapped temporarily by some functions like getLocalBounds()
     *
     * @member {PIXI.Matrix}
     */
    this.worldTransform = new __WEBPACK_IMPORTED_MODULE_0__math__["d" /* Matrix */]();

    /**
     * The local matrix transform
     *
     * @member {PIXI.Matrix}
     */
    this.localTransform = new __WEBPACK_IMPORTED_MODULE_0__math__["d" /* Matrix */]();

    this._worldID = 0;
    this._parentID = 0;
  }

  /**
   * TransformBase does not have decomposition, so this function wont do anything
   */


  _createClass(TransformBase, [{
    key: 'updateLocalTransform',
    value: function updateLocalTransform() {}
    // empty


    /**
     * Updates the values of the object and applies the parent's transform.
     *
     * @param {PIXI.TransformBase} parentTransform - The transform of the parent of this object
     */

  }, {
    key: 'updateTransform',
    value: function updateTransform(parentTransform) {
      var pt = parentTransform.worldTransform;
      var wt = this.worldTransform;
      var lt = this.localTransform;

      // concat the parent matrix with the objects transform.
      wt.a = lt.a * pt.a + lt.b * pt.c;
      wt.b = lt.a * pt.b + lt.b * pt.d;
      wt.c = lt.c * pt.a + lt.d * pt.c;
      wt.d = lt.c * pt.b + lt.d * pt.d;
      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

      this._worldID++;
    }
  }]);

  return TransformBase;
}();

/**
 * Updates the values of the object and applies the parent's transform.
 * @param  parentTransform {PIXI.Transform} The transform of the parent of this object
 *
 */


/* harmony default export */ __webpack_exports__["a"] = (TransformBase);
TransformBase.prototype.updateWorldTransform = TransformBase.prototype.updateTransform;

TransformBase.IDENTITY = new TransformBase();

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * 'Builder' pattern for bounds rectangles
 * Axis-Aligned Bounding Box
 * It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
 *
 * @class
 * @memberof PIXI
 */

var Bounds = function () {
    /**
     *
     */
    function Bounds() {
        _classCallCheck(this, Bounds);

        /**
         * @member {number}
         * @default 0
         */
        this.minX = Infinity;

        /**
         * @member {number}
         * @default 0
         */
        this.minY = Infinity;

        /**
         * @member {number}
         * @default 0
         */
        this.maxX = -Infinity;

        /**
         * @member {number}
         * @default 0
         */
        this.maxY = -Infinity;

        this.rect = null;
    }

    /**
     * Checks if bounds are empty.
     *
     * @return {boolean} True if empty.
     */


    _createClass(Bounds, [{
        key: 'isEmpty',
        value: function isEmpty() {
            return this.minX > this.maxX || this.minY > this.maxY;
        }

        /**
         * Clears the bounds and resets.
         *
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.updateID++;

            this.minX = Infinity;
            this.minY = Infinity;
            this.maxX = -Infinity;
            this.maxY = -Infinity;
        }

        /**
         * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
         * It is not guaranteed that it will return tempRect
         *
         * @param {PIXI.Rectangle} rect - temporary object will be used if AABB is not empty
         * @returns {PIXI.Rectangle} A rectangle of the bounds
         */

    }, {
        key: 'getRectangle',
        value: function getRectangle(rect) {
            if (this.minX > this.maxX || this.minY > this.maxY) {
                return __WEBPACK_IMPORTED_MODULE_0__math__["h" /* Rectangle */].EMPTY;
            }

            rect = rect || new __WEBPACK_IMPORTED_MODULE_0__math__["h" /* Rectangle */](0, 0, 1, 1);

            rect.x = this.minX;
            rect.y = this.minY;
            rect.width = this.maxX - this.minX;
            rect.height = this.maxY - this.minY;

            return rect;
        }

        /**
         * This function should be inlined when its possible.
         *
         * @param {PIXI.Point} point - The point to add.
         */

    }, {
        key: 'addPoint',
        value: function addPoint(point) {
            this.minX = Math.min(this.minX, point.x);
            this.maxX = Math.max(this.maxX, point.x);
            this.minY = Math.min(this.minY, point.y);
            this.maxY = Math.max(this.maxY, point.y);
        }

        /**
         * Adds a quad, not transformed
         *
         * @param {Float32Array} vertices - The verts to add.
         */

    }, {
        key: 'addQuad',
        value: function addQuad(vertices) {
            var minX = this.minX;
            var minY = this.minY;
            var maxX = this.maxX;
            var maxY = this.maxY;

            var x = vertices[0];
            var y = vertices[1];

            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            x = vertices[2];
            y = vertices[3];
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            x = vertices[4];
            y = vertices[5];
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            x = vertices[6];
            y = vertices[7];
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            this.minX = minX;
            this.minY = minY;
            this.maxX = maxX;
            this.maxY = maxY;
        }

        /**
         * Adds sprite frame, transformed.
         *
         * @param {PIXI.TransformBase} transform - TODO
         * @param {number} x0 - TODO
         * @param {number} y0 - TODO
         * @param {number} x1 - TODO
         * @param {number} y1 - TODO
         */

    }, {
        key: 'addFrame',
        value: function addFrame(transform, x0, y0, x1, y1) {
            var matrix = transform.worldTransform;
            var a = matrix.a;
            var b = matrix.b;
            var c = matrix.c;
            var d = matrix.d;
            var tx = matrix.tx;
            var ty = matrix.ty;

            var minX = this.minX;
            var minY = this.minY;
            var maxX = this.maxX;
            var maxY = this.maxY;

            var x = a * x0 + c * y0 + tx;
            var y = b * x0 + d * y0 + ty;

            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            x = a * x1 + c * y0 + tx;
            y = b * x1 + d * y0 + ty;
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            x = a * x0 + c * y1 + tx;
            y = b * x0 + d * y1 + ty;
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            x = a * x1 + c * y1 + tx;
            y = b * x1 + d * y1 + ty;
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;

            this.minX = minX;
            this.minY = minY;
            this.maxX = maxX;
            this.maxY = maxY;
        }

        /**
         * Add an array of vertices
         *
         * @param {PIXI.TransformBase} transform - TODO
         * @param {Float32Array} vertices - TODO
         * @param {number} beginOffset - TODO
         * @param {number} endOffset - TODO
         */

    }, {
        key: 'addVertices',
        value: function addVertices(transform, vertices, beginOffset, endOffset) {
            var matrix = transform.worldTransform;
            var a = matrix.a;
            var b = matrix.b;
            var c = matrix.c;
            var d = matrix.d;
            var tx = matrix.tx;
            var ty = matrix.ty;

            var minX = this.minX;
            var minY = this.minY;
            var maxX = this.maxX;
            var maxY = this.maxY;

            for (var i = beginOffset; i < endOffset; i += 2) {
                var rawX = vertices[i];
                var rawY = vertices[i + 1];
                var x = a * rawX + c * rawY + tx;
                var y = d * rawY + b * rawX + ty;

                minX = x < minX ? x : minX;
                minY = y < minY ? y : minY;
                maxX = x > maxX ? x : maxX;
                maxY = y > maxY ? y : maxY;
            }

            this.minX = minX;
            this.minY = minY;
            this.maxX = maxX;
            this.maxY = maxY;
        }

        /**
         * Adds other Bounds
         *
         * @param {PIXI.Bounds} bounds - TODO
         */

    }, {
        key: 'addBounds',
        value: function addBounds(bounds) {
            var minX = this.minX;
            var minY = this.minY;
            var maxX = this.maxX;
            var maxY = this.maxY;

            this.minX = bounds.minX < minX ? bounds.minX : minX;
            this.minY = bounds.minY < minY ? bounds.minY : minY;
            this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
            this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
        }

        /**
         * Adds other Bounds, masked with Bounds
         *
         * @param {PIXI.Bounds} bounds - TODO
         * @param {PIXI.Bounds} mask - TODO
         */

    }, {
        key: 'addBoundsMask',
        value: function addBoundsMask(bounds, mask) {
            var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
            var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
            var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
            var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;

            if (_minX <= _maxX && _minY <= _maxY) {
                var minX = this.minX;
                var minY = this.minY;
                var maxX = this.maxX;
                var maxY = this.maxY;

                this.minX = _minX < minX ? _minX : minX;
                this.minY = _minY < minY ? _minY : minY;
                this.maxX = _maxX > maxX ? _maxX : maxX;
                this.maxY = _maxY > maxY ? _maxY : maxY;
            }
        }

        /**
         * Adds other Bounds, masked with Rectangle
         *
         * @param {PIXI.Bounds} bounds - TODO
         * @param {PIXI.Rectangle} area - TODO
         */

    }, {
        key: 'addBoundsArea',
        value: function addBoundsArea(bounds, area) {
            var _minX = bounds.minX > area.x ? bounds.minX : area.x;
            var _minY = bounds.minY > area.y ? bounds.minY : area.y;
            var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
            var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;

            if (_minX <= _maxX && _minY <= _maxY) {
                var minX = this.minX;
                var minY = this.minY;
                var maxX = this.maxX;
                var maxY = this.maxY;

                this.minX = _minX < minX ? _minX : minX;
                this.minY = _minY < minY ? _minY : minY;
                this.maxX = _maxX > maxX ? _maxX : maxX;
                this.maxY = _maxY > maxY ? _maxY : maxY;
            }
        }
    }]);

    return Bounds;
}();

/* harmony default export */ __webpack_exports__["a"] = (Bounds);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseRenderTexture__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Texture__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer(1024, 1024, { view: canvas, ratio: 1 });
 * let renderTexture = PIXI.RenderTexture.create(800, 600);
 * let sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let renderTexture = new PIXI.RenderTexture.create(100, 100);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.Texture
 * @memberof PIXI
 */

var RenderTexture = function (_Texture) {
    _inherits(RenderTexture, _Texture);

    /**
     * @param {PIXI.BaseRenderTexture} baseRenderTexture - The renderer used for this RenderTexture
     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
     */
    function RenderTexture(baseRenderTexture, frame) {
        _classCallCheck(this, RenderTexture);

        // support for legacy..
        var _legacyRenderer = null;

        if (!(baseRenderTexture instanceof __WEBPACK_IMPORTED_MODULE_0__BaseRenderTexture__["a" /* default */])) {
            /* eslint-disable prefer-rest-params, no-console */
            var width = arguments[1];
            var height = arguments[2];
            var scaleMode = arguments[3];
            var resolution = arguments[4];

            // we have an old render texture..
            console.warn('Please use RenderTexture.create(' + width + ', ' + height + ') instead of the ctor directly.');
            _legacyRenderer = arguments[0];
            /* eslint-enable prefer-rest-params, no-console */

            frame = null;
            baseRenderTexture = new __WEBPACK_IMPORTED_MODULE_0__BaseRenderTexture__["a" /* default */](width, height, scaleMode, resolution);
        }

        /**
         * The base texture object that this texture uses
         *
         * @member {BaseTexture}
         */

        var _this = _possibleConstructorReturn(this, (RenderTexture.__proto__ || Object.getPrototypeOf(RenderTexture)).call(this, baseRenderTexture, frame));

        _this.legacyRenderer = _legacyRenderer;

        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        _this.valid = true;

        _this._updateUvs();
        return _this;
    }

    /**
     * Resizes the RenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     * @param {boolean} doNotResizeBaseTexture - Should the baseTexture.width and height values be resized as well?
     */


    _createClass(RenderTexture, [{
        key: 'resize',
        value: function resize(width, height, doNotResizeBaseTexture) {
            width = Math.ceil(width);
            height = Math.ceil(height);

            // TODO - could be not required..
            this.valid = width > 0 && height > 0;

            this._frame.width = this.orig.width = width;
            this._frame.height = this.orig.height = height;

            if (!doNotResizeBaseTexture) {
                this.baseTexture.resize(width, height);
            }

            this._updateUvs();
        }

        /**
         * A short hand way of creating a render texture.
         *
         * @param {number} [width=100] - The width of the render texture
         * @param {number} [height=100] - The height of the render texture
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
         * @return {PIXI.RenderTexture} The new render texture
         */

    }], [{
        key: 'create',
        value: function create(width, height, scaleMode, resolution) {
            return new RenderTexture(new __WEBPACK_IMPORTED_MODULE_0__BaseRenderTexture__["a" /* default */](width, height, scaleMode, resolution));
        }
    }]);

    return RenderTexture;
}(__WEBPACK_IMPORTED_MODULE_1__Texture__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (RenderTexture);

/***/ }),
/* 18 */
/***/ (function(module, exports) {



var mapType = function mapType(gl, type) {
    if (!GL_TABLE) {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);

        GL_TABLE = {};

        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
        }
    }

    return GL_TABLE[type];
};

var GL_TABLE = null;

var GL_TO_GLSL_TYPES = {
    'FLOAT': 'float',
    'FLOAT_VEC2': 'vec2',
    'FLOAT_VEC3': 'vec3',
    'FLOAT_VEC4': 'vec4',

    'INT': 'int',
    'INT_VEC2': 'ivec2',
    'INT_VEC3': 'ivec3',
    'INT_VEC4': 'ivec4',

    'BOOL': 'bool',
    'BOOL_VEC2': 'bvec2',
    'BOOL_VEC3': 'bvec3',
    'BOOL_VEC4': 'bvec4',

    'FLOAT_MAT2': 'mat2',
    'FLOAT_MAT3': 'mat3',
    'FLOAT_MAT4': 'mat4',

    'SAMPLER_2D': 'sampler2D'
};

module.exports = mapType;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textures_Texture__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display_Container__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var tempPoint = new __WEBPACK_IMPORTED_MODULE_0__math__["f" /* Point */]();

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * let sprite = new PIXI.Sprite.fromImage('assets/image.png');
 * ```
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */

var Sprite = function (_Container) {
    _inherits(Sprite, _Container);

    /**
     * @param {PIXI.Texture} texture - The texture for this sprite
     */
    function Sprite(texture) {
        _classCallCheck(this, Sprite);

        /**
         * The anchor sets the origin point of the texture.
         * The default is 0,0 this means the texture's origin is the top left
         * Setting the anchor to 0.5,0.5 means the texture's origin is centered
         * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
         *
         * @member {PIXI.ObservablePoint}
         * @private
         */
        var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

        _this._anchor = new __WEBPACK_IMPORTED_MODULE_0__math__["e" /* ObservablePoint */](_this._onAnchorUpdate, _this);

        /**
         * The texture that the sprite is using
         *
         * @private
         * @member {PIXI.Texture}
         */
        _this._texture = null;

        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @private
         * @member {number}
         */
        _this._width = 0;

        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @private
         * @member {number}
         */
        _this._height = 0;

        /**
         * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
         *
         * @private
         * @member {number}
         * @default 0xFFFFFF
         */
        _this._tint = null;
        _this._tintRGB = null;
        _this.tint = 0xFFFFFF;

        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        _this.blendMode = __WEBPACK_IMPORTED_MODULE_2__const__["a" /* BLEND_MODES */].NORMAL;

        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader}
         */
        _this.shader = null;

        /**
         * An internal cached value of the tint.
         *
         * @private
         * @member {number}
         * @default 0xFFFFFF
         */
        _this.cachedTint = 0xFFFFFF;

        // call texture setter
        _this.texture = texture || __WEBPACK_IMPORTED_MODULE_3__textures_Texture__["a" /* default */].EMPTY;

        /**
         * this is used to store the vertex data of the sprite (basically a quad)
         *
         * @private
         * @member {Float32Array}
         */
        _this.vertexData = new Float32Array(8);

        /**
         * This is used to calculate the bounds of the object IF it is a trimmed sprite
         *
         * @private
         * @member {Float32Array}
         */
        _this.vertexTrimmedData = null;

        _this._transformID = -1;
        _this._textureID = -1;

        _this._transformTrimmedID = -1;
        _this._textureTrimmedID = -1;

        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_renderWebGL' & '_renderCanvas' methods.
         *
         * @member {string}
         * @default 'sprite'
         */
        _this.pluginName = 'sprite';
        return _this;
    }

    /**
     * When the texture is updated, this event will fire to update the scale and frame
     *
     * @private
     */


    _createClass(Sprite, [{
        key: '_onTextureUpdate',
        value: function _onTextureUpdate() {
            this._textureID = -1;
            this._textureTrimmedID = -1;
            this.cachedTint = 0xFFFFFF;

            // so if _width is 0 then width was not set..
            if (this._width) {
                this.scale.x = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["sign"])(this.scale.x) * this._width / this._texture.orig.width;
            }

            if (this._height) {
                this.scale.y = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["sign"])(this.scale.y) * this._height / this._texture.orig.height;
            }
        }

        /**
         * Called when the anchor position updates.
         *
         * @private
         */

    }, {
        key: '_onAnchorUpdate',
        value: function _onAnchorUpdate() {
            this._transformID = -1;
            this._transformTrimmedID = -1;
        }

        /**
         * calculates worldTransform * vertices, store it in vertexData
         */

    }, {
        key: 'calculateVertices',
        value: function calculateVertices() {
            if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
                return;
            }

            this._transformID = this.transform._worldID;
            this._textureID = this._texture._updateID;

            // set the vertex data

            var texture = this._texture;
            var wt = this.transform.worldTransform;
            var a = wt.a;
            var b = wt.b;
            var c = wt.c;
            var d = wt.d;
            var tx = wt.tx;
            var ty = wt.ty;
            var vertexData = this.vertexData;
            var trim = texture.trim;
            var orig = texture.orig;
            var anchor = this._anchor;

            var w0 = 0;
            var w1 = 0;
            var h0 = 0;
            var h1 = 0;

            if (trim) {
                // if the sprite is trimmed and is not a tilingsprite then we need to add the extra
                // space before transforming the sprite coords.
                w1 = trim.x - anchor._x * orig.width;
                w0 = w1 + trim.width;

                h1 = trim.y - anchor._y * orig.height;
                h0 = h1 + trim.height;
            } else {
                w1 = -anchor._x * orig.width;
                w0 = w1 + orig.width;

                h1 = -anchor._y * orig.height;
                h0 = h1 + orig.height;
            }

            // xy
            vertexData[0] = a * w1 + c * h1 + tx;
            vertexData[1] = d * h1 + b * w1 + ty;

            // xy
            vertexData[2] = a * w0 + c * h1 + tx;
            vertexData[3] = d * h1 + b * w0 + ty;

            // xy
            vertexData[4] = a * w0 + c * h0 + tx;
            vertexData[5] = d * h0 + b * w0 + ty;

            // xy
            vertexData[6] = a * w1 + c * h0 + tx;
            vertexData[7] = d * h0 + b * w1 + ty;
        }

        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */

    }, {
        key: 'calculateTrimmedVertices',
        value: function calculateTrimmedVertices() {
            if (!this.vertexTrimmedData) {
                this.vertexTrimmedData = new Float32Array(8);
            } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
                return;
            }

            this._transformTrimmedID = this.transform._worldID;
            this._textureTrimmedID = this._texture._updateID;

            // lets do some special trim code!
            var texture = this._texture;
            var vertexData = this.vertexTrimmedData;
            var orig = texture.orig;
            var anchor = this._anchor;

            // lets calculate the new untrimmed bounds..
            var wt = this.transform.worldTransform;
            var a = wt.a;
            var b = wt.b;
            var c = wt.c;
            var d = wt.d;
            var tx = wt.tx;
            var ty = wt.ty;

            var w1 = -anchor._x * orig.width;
            var w0 = w1 + orig.width;

            var h1 = -anchor._y * orig.height;
            var h0 = h1 + orig.height;

            // xy
            vertexData[0] = a * w1 + c * h1 + tx;
            vertexData[1] = d * h1 + b * w1 + ty;

            // xy
            vertexData[2] = a * w0 + c * h1 + tx;
            vertexData[3] = d * h1 + b * w0 + ty;

            // xy
            vertexData[4] = a * w0 + c * h0 + tx;
            vertexData[5] = d * h0 + b * w0 + ty;

            // xy
            vertexData[6] = a * w1 + c * h0 + tx;
            vertexData[7] = d * h0 + b * w1 + ty;
        }

        /**
        *
        * Renders the object using the WebGL renderer
        *
        * @private
        * @param {PIXI.WebGLRenderer} renderer - The webgl renderer to use.
        */

    }, {
        key: '_renderWebGL',
        value: function _renderWebGL(renderer) {
            this.calculateVertices();

            renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
            renderer.plugins[this.pluginName].render(this);
        }

        /**
        * Renders the object using the Canvas renderer
        *
        * @private
        * @param {PIXI.CanvasRenderer} renderer - The renderer
        */

    }, {
        key: '_renderCanvas',
        value: function _renderCanvas(renderer) {
            renderer.plugins[this.pluginName].render(this);
        }

        /**
         * Updates the bounds of the sprite.
         *
         * @private
         */

    }, {
        key: '_calculateBounds',
        value: function _calculateBounds() {
            var trim = this._texture.trim;
            var orig = this._texture.orig;

            // First lets check to see if the current texture has a trim..
            if (!trim || trim.width === orig.width && trim.height === orig.height) {
                // no trim! lets use the usual calculations..
                this.calculateVertices();
                this._bounds.addQuad(this.vertexData);
            } else {
                // lets calculate a special trimmed bounds...
                this.calculateTrimmedVertices();
                this._bounds.addQuad(this.vertexTrimmedData);
            }
        }

        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {PIXI.Rectangle} rect - The output rectangle.
         * @return {PIXI.Rectangle} The bounds.
         */

    }, {
        key: 'getLocalBounds',
        value: function getLocalBounds(rect) {
            // we can do a fast local bounds if the sprite has no children!
            if (this.children.length === 0) {
                this._bounds.minX = this._texture.orig.width * -this._anchor._x;
                this._bounds.minY = this._texture.orig.height * -this._anchor._y;
                this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
                this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y);

                if (!rect) {
                    if (!this._localBoundsRect) {
                        this._localBoundsRect = new __WEBPACK_IMPORTED_MODULE_0__math__["h" /* Rectangle */]();
                    }

                    rect = this._localBoundsRect;
                }

                return this._bounds.getRectangle(rect);
            }

            return _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'getLocalBounds', this).call(this, rect);
        }

        /**
         * Tests if a point is inside this sprite
         *
         * @param {PIXI.Point} point - the point to test
         * @return {boolean} the result of the test
         */

    }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
            this.worldTransform.applyInverse(point, tempPoint);

            var width = this._texture.orig.width;
            var height = this._texture.orig.height;
            var x1 = -width * this.anchor.x;
            var y1 = 0;

            if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
                y1 = -height * this.anchor.y;

                if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */

    }, {
        key: 'destroy',
        value: function destroy(options) {
            _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'destroy', this).call(this, options);

            this._anchor = null;

            var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;

            if (destroyTexture) {
                var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;

                this._texture.destroy(!!destroyBaseTexture);
            }

            this._texture = null;
            this.shader = null;
        }

        // some helper functions..

        /**
         * Helper function that creates a new sprite based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {number|string|PIXI.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
         * @return {PIXI.Sprite} The newly created sprite
         */

    }, {
        key: 'width',


        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        get: function get() {
            return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var s = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["sign"])(this.scale.x) || 1;

            this.scale.x = s * value / this._texture.orig.width;
            this._width = value;
        }

        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var s = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["sign"])(this.scale.y) || 1;

            this.scale.y = s * value / this._texture.orig.height;
            this._height = value;
        }

        /**
         * The anchor sets the origin point of the texture.
         * The default is 0,0 this means the texture's origin is the top left
         * Setting the anchor to 0.5,0.5 means the texture's origin is centered
         * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
         *
         * @member {PIXI.ObservablePoint}
         */

    }, {
        key: 'anchor',
        get: function get() {
            return this._anchor;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._anchor.copy(value);
        }

        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */

    }, {
        key: 'tint',
        get: function get() {
            return this._tint;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._tint = value;
            this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
        }

        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */

    }, {
        key: 'texture',
        get: function get() {
            return this._texture;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._texture === value) {
                return;
            }

            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            this._textureID = -1;
            this._textureTrimmedID = -1;

            if (value) {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded) {
                    this._onTextureUpdate();
                } else {
                    value.once('update', this._onTextureUpdate, this);
                }
            }
        }
    }], [{
        key: 'from',
        value: function from(source) {
            return new Sprite(__WEBPACK_IMPORTED_MODULE_3__textures_Texture__["a" /* default */].from(source));
        }

        /**
         * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
         * The frame ids are created when a Texture packer file has been loaded
         *
         * @static
         * @param {string} frameId - The frame Id of the texture in the cache
         * @return {PIXI.Sprite} A new Sprite using a texture from the texture cache matching the frameId
         */

    }, {
        key: 'fromFrame',
        value: function fromFrame(frameId) {
            var texture = __WEBPACK_IMPORTED_MODULE_1__utils__["TextureCache"][frameId];

            if (!texture) {
                throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
            }

            return new Sprite(texture);
        }

        /**
         * Helper function that creates a sprite that will contain a texture based on an image url
         * If the image is not in the texture cache it will be loaded
         *
         * @static
         * @param {string} imageId - The image url of the texture
         * @param {boolean} [crossorigin=(auto)] - if you want to specify the cross-origin parameter
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - if you want to specify the scale mode,
         *  see {@link PIXI.SCALE_MODES} for possible values
         * @return {PIXI.Sprite} A new Sprite using a texture from the texture cache matching the image id
         */

    }, {
        key: 'fromImage',
        value: function fromImage(imageId, crossorigin, scaleMode) {
            return new Sprite(__WEBPACK_IMPORTED_MODULE_3__textures_Texture__["a" /* default */].fromImage(imageId, crossorigin, scaleMode));
        }
    }]);

    return Sprite;
}(__WEBPACK_IMPORTED_MODULE_4__display_Container__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Sprite);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderers_canvas_utils_canUseNewCanvasBlendModes__ = __webpack_require__(36);



/**
 * Utility methods for Sprite/Texture tinting.
 *
 * @class
 * @memberof PIXI
 */
var CanvasTinter = {
    /**
     * Basically this method just needs a sprite and a color and tints the sprite with the given color.
     *
     * @memberof PIXI.CanvasTinter
     * @param {PIXI.Sprite} sprite - the sprite to tint
     * @param {number} color - the color to use to tint the sprite with
     * @return {HTMLCanvasElement} The tinted canvas
     */
    getTintedTexture: function getTintedTexture(sprite, color) {
        var texture = sprite._texture;

        color = CanvasTinter.roundColor(color);

        var stringColor = '#' + ('00000' + (color | 0).toString(16)).substr(-6);

        texture.tintCache = texture.tintCache || {};

        var cachedTexture = texture.tintCache[stringColor];

        var canvas = void 0;

        if (cachedTexture) {
            if (cachedTexture.tintId === texture._updateID) {
                return texture.tintCache[stringColor];
            }

            canvas = texture.tintCache[stringColor];
        } else {
            canvas = CanvasTinter.canvas || document.createElement('canvas');
        }

        CanvasTinter.tintMethod(texture, color, canvas);

        canvas.tintId = texture._updateID;

        if (CanvasTinter.convertTintToImage) {
            // is this better?
            var tintImage = new Image();

            tintImage.src = canvas.toDataURL();

            texture.tintCache[stringColor] = tintImage;
        } else {
            texture.tintCache[stringColor] = canvas;
            // if we are not converting the texture to an image then we need to lose the reference to the canvas
            CanvasTinter.canvas = null;
        }

        return canvas;
    },

    /**
     * Tint a texture using the 'multiply' operation.
     *
     * @memberof PIXI.CanvasTinter
     * @param {PIXI.Texture} texture - the texture to tint
     * @param {number} color - the color to use to tint the sprite with
     * @param {HTMLCanvasElement} canvas - the current canvas
     */
    tintWithMultiply: function tintWithMultiply(texture, color, canvas) {
        var context = canvas.getContext('2d');
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;

        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;

        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);

        context.save();
        context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);

        context.fillRect(0, 0, crop.width, crop.height);

        context.globalCompositeOperation = 'multiply';

        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

        context.globalCompositeOperation = 'destination-atop';

        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        context.restore();
    },

    /**
     * Tint a texture using the 'overlay' operation.
     *
     * @memberof PIXI.CanvasTinter
     * @param {PIXI.Texture} texture - the texture to tint
     * @param {number} color - the color to use to tint the sprite with
     * @param {HTMLCanvasElement} canvas - the current canvas
     */
    tintWithOverlay: function tintWithOverlay(texture, color, canvas) {
        var context = canvas.getContext('2d');
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;

        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;

        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);

        context.save();
        context.globalCompositeOperation = 'copy';
        context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
        context.fillRect(0, 0, crop.width, crop.height);

        context.globalCompositeOperation = 'destination-atop';
        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

        // context.globalCompositeOperation = 'copy';
        context.restore();
    },


    /**
     * Tint a texture pixel per pixel.
     *
     * @memberof PIXI.CanvasTinter
     * @param {PIXI.Texture} texture - the texture to tint
     * @param {number} color - the color to use to tint the sprite with
     * @param {HTMLCanvasElement} canvas - the current canvas
     */
    tintWithPerPixel: function tintWithPerPixel(texture, color, canvas) {
        var context = canvas.getContext('2d');
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;

        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;

        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);

        context.save();
        context.globalCompositeOperation = 'copy';
        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        context.restore();

        var rgbValues = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["hex2rgb"])(color);
        var r = rgbValues[0];
        var g = rgbValues[1];
        var b = rgbValues[2];

        var pixelData = context.getImageData(0, 0, crop.width, crop.height);

        var pixels = pixelData.data;

        for (var i = 0; i < pixels.length; i += 4) {
            pixels[i + 0] *= r;
            pixels[i + 1] *= g;
            pixels[i + 2] *= b;
        }

        context.putImageData(pixelData, 0, 0);
    },

    /**
     * Rounds the specified color according to the CanvasTinter.cacheStepsPerColorChannel.
     *
     * @memberof PIXI.CanvasTinter
     * @param {number} color - the color to round, should be a hex color
     * @return {number} The rounded color.
     */
    roundColor: function roundColor(color) {
        var step = CanvasTinter.cacheStepsPerColorChannel;

        var rgbValues = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["hex2rgb"])(color);

        rgbValues[0] = Math.min(255, rgbValues[0] / step * step);
        rgbValues[1] = Math.min(255, rgbValues[1] / step * step);
        rgbValues[2] = Math.min(255, rgbValues[2] / step * step);

        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["rgb2hex"])(rgbValues);
    },

    /**
     * Number of steps which will be used as a cap when rounding colors.
     *
     * @memberof PIXI.CanvasTinter
     * @type {number}
     */
    cacheStepsPerColorChannel: 8,

    /**
     * Tint cache boolean flag.
     *
     * @memberof PIXI.CanvasTinter
     * @type {boolean}
     */
    convertTintToImage: false,

    /**
     * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
     *
     * @memberof PIXI.CanvasTinter
     * @type {boolean}
     */
    canUseMultiply: Object(__WEBPACK_IMPORTED_MODULE_1__renderers_canvas_utils_canUseNewCanvasBlendModes__["a" /* default */])(),

    /**
     * The tinting method that will be used.
     *
     * @memberof PIXI.CanvasTinter
     * @type {tintMethodFunctionType}
     */
    tintMethod: 0
};

CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply : CanvasTinter.tintWithPerPixel;

/**
 * The tintMethod type.
 *
 * @memberof PIXI.CanvasTinter
 * @callback tintMethodFunctionType
 * @param texture {PIXI.Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */

/* harmony default export */ __webpack_exports__["a"] = (CanvasTinter);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _parseUri = __webpack_require__(58);

var _parseUri2 = _interopRequireDefault(_parseUri);

var _miniSignals = __webpack_require__(57);

var _miniSignals2 = _interopRequireDefault(_miniSignals);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// tests is CORS is supported in XHR, if not we need to use XDR
var useXdr = !!(window.XDomainRequest && !('withCredentials' in new XMLHttpRequest()));
var tempAnchor = null;

// some status constants
var STATUS_NONE = 0;
var STATUS_OK = 200;
var STATUS_EMPTY = 204;
var STATUS_IE_BUG_EMPTY = 1223;
var STATUS_TYPE_OK = 2;

// noop
function _noop() {} /* empty */

/**
 * Manages the state and loading of a resource and all child resources.
 *
 * @class
 */

var Resource = function () {
    /**
     * Sets the load type to be used for a specific extension.
     *
     * @static
     * @param {string} extname - The extension to set the type for, e.g. "png" or "fnt"
     * @param {Resource.LOAD_TYPE} loadType - The load type to set it to.
     */
    Resource.setExtensionLoadType = function setExtensionLoadType(extname, loadType) {
        setExtMap(Resource._loadTypeMap, extname, loadType);
    };

    /**
     * Sets the load type to be used for a specific extension.
     *
     * @static
     * @param {string} extname - The extension to set the type for, e.g. "png" or "fnt"
     * @param {Resource.XHR_RESPONSE_TYPE} xhrType - The xhr type to set it to.
     */

    Resource.setExtensionXhrType = function setExtensionXhrType(extname, xhrType) {
        setExtMap(Resource._xhrTypeMap, extname, xhrType);
    };

    /**
     * @param {string} name - The name of the resource to load.
     * @param {string|string[]} url - The url for this resource, for audio/video loads you can pass
     *      an array of sources.
     * @param {object} [options] - The options for the load.
     * @param {string|boolean} [options.crossOrigin] - Is this request cross-origin? Default is to
     *      determine automatically.
     * @param {Resource.LOAD_TYPE} [options.loadType=Resource.LOAD_TYPE.XHR] - How should this resource
     *      be loaded?
     * @param {Resource.XHR_RESPONSE_TYPE} [options.xhrType=Resource.XHR_RESPONSE_TYPE.DEFAULT] - How
     *      should the data being loaded be interpreted when using XHR?
     * @param {object} [options.metadata] - Extra configuration for middleware and the Resource object.
     * @param {HTMLImageElement|HTMLAudioElement|HTMLVideoElement} [options.metadata.loadElement=null] - The
     *      element to use for loading, instead of creating one.
     * @param {boolean} [options.metadata.skipSource=false] - Skips adding source(s) to the load element. This
     *      is useful if you want to pass in a `loadElement` that you already added load sources to.
     * @param {string|string[]} [options.metadata.mimeType] - The mime type to use for the source element of a video/audio
     *      elment. If the urls are an array, you can pass this as an array as well where each index is the mime type to
     *      use for the corresponding url index.
     */

    function Resource(name, url, options) {
        _classCallCheck(this, Resource);

        if (typeof name !== 'string' || typeof url !== 'string') {
            throw new Error('Both name and url are required for constructing a resource.');
        }

        options = options || {};

        /**
         * The state flags of this resource.
         *
         * @member {number}
         */
        this._flags = 0;

        // set data url flag, needs to be set early for some _determineX checks to work.
        this._setFlag(Resource.STATUS_FLAGS.DATA_URL, url.indexOf('data:') === 0);

        /**
         * The name of this resource.
         *
         * @member {string}
         * @readonly
         */
        this.name = name;

        /**
         * The url used to load this resource.
         *
         * @member {string}
         * @readonly
         */
        this.url = url;

        /**
         * The extension used to load this resource.
         *
         * @member {string}
         * @readonly
         */
        this.extension = this._getExtension();

        /**
         * The data that was loaded by the resource.
         *
         * @member {any}
         */
        this.data = null;

        /**
         * Is this request cross-origin? If unset, determined automatically.
         *
         * @member {string}
         */
        this.crossOrigin = options.crossOrigin === true ? 'anonymous' : options.crossOrigin;

        /**
         * The method of loading to use for this resource.
         *
         * @member {Resource.LOAD_TYPE}
         */
        this.loadType = options.loadType || this._determineLoadType();

        /**
         * The type used to load the resource via XHR. If unset, determined automatically.
         *
         * @member {string}
         */
        this.xhrType = options.xhrType;

        /**
         * Extra info for middleware, and controlling specifics about how the resource loads.
         *
         * Note that if you pass in a `loadElement`, the Resource class takes ownership of it.
         * Meaning it will modify it as it sees fit.
         *
         * @member {object}
         * @property {HTMLImageElement|HTMLAudioElement|HTMLVideoElement} [loadElement=null] - The
         *  element to use for loading, instead of creating one.
         * @property {boolean} [skipSource=false] - Skips adding source(s) to the load element. This
         *  is useful if you want to pass in a `loadElement` that you already added load sources
         *  to.
         */
        this.metadata = options.metadata || {};

        /**
         * The error that occurred while loading (if any).
         *
         * @member {Error}
         * @readonly
         */
        this.error = null;

        /**
         * The XHR object that was used to load this resource. This is only set
         * when `loadType` is `Resource.LOAD_TYPE.XHR`.
         *
         * @member {XMLHttpRequest}
         * @readonly
         */
        this.xhr = null;

        /**
         * The child resources this resource owns.
         *
         * @member {Resource[]}
         * @readonly
         */
        this.children = [];

        /**
         * The resource type.
         *
         * @member {Resource.TYPE}
         * @readonly
         */
        this.type = Resource.TYPE.UNKNOWN;

        /**
         * The progress chunk owned by this resource.
         *
         * @member {number}
         * @readonly
         */
        this.progressChunk = 0;

        /**
         * The `dequeue` method that will be used a storage place for the async queue dequeue method
         * used privately by the loader.
         *
         * @private
         * @member {function}
         */
        this._dequeue = _noop;

        /**
         * Used a storage place for the on load binding used privately by the loader.
         *
         * @private
         * @member {function}
         */
        this._onLoadBinding = null;

        /**
         * The `complete` function bound to this resource's context.
         *
         * @private
         * @member {function}
         */
        this._boundComplete = this.complete.bind(this);

        /**
         * The `_onError` function bound to this resource's context.
         *
         * @private
         * @member {function}
         */
        this._boundOnError = this._onError.bind(this);

        /**
         * The `_onProgress` function bound to this resource's context.
         *
         * @private
         * @member {function}
         */
        this._boundOnProgress = this._onProgress.bind(this);

        // xhr callbacks
        this._boundXhrOnError = this._xhrOnError.bind(this);
        this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
        this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
        this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this);

        /**
         * Dispatched when the resource beings to load.
         *
         * The callback looks like {@link Resource.OnStartSignal}.
         *
         * @member {Signal}
         */
        this.onStart = new _miniSignals2.default();

        /**
         * Dispatched each time progress of this resource load updates.
         * Not all resources types and loader systems can support this event
         * so sometimes it may not be available. If the resource
         * is being loaded on a modern browser, using XHR, and the remote server
         * properly sets Content-Length headers, then this will be available.
         *
         * The callback looks like {@link Resource.OnProgressSignal}.
         *
         * @member {Signal}
         */
        this.onProgress = new _miniSignals2.default();

        /**
         * Dispatched once this resource has loaded, if there was an error it will
         * be in the `error` property.
         *
         * The callback looks like {@link Resource.OnCompleteSignal}.
         *
         * @member {Signal}
         */
        this.onComplete = new _miniSignals2.default();

        /**
         * Dispatched after this resource has had all the *after* middleware run on it.
         *
         * The callback looks like {@link Resource.OnCompleteSignal}.
         *
         * @member {Signal}
         */
        this.onAfterMiddleware = new _miniSignals2.default();

        /**
         * When the resource starts to load.
         *
         * @memberof Resource
         * @callback OnStartSignal
         * @param {Resource} resource - The resource that the event happened on.
         */

        /**
         * When the resource reports loading progress.
         *
         * @memberof Resource
         * @callback OnProgressSignal
         * @param {Resource} resource - The resource that the event happened on.
         * @param {number} percentage - The progress of the load in the range [0, 1].
         */

        /**
         * When the resource finishes loading.
         *
         * @memberof Resource
         * @callback OnCompleteSignal
         * @param {Resource} resource - The resource that the event happened on.
         */
    }

    /**
     * Stores whether or not this url is a data url.
     *
     * @member {boolean}
     * @readonly
     */

    /**
     * Marks the resource as complete.
     *
     */
    Resource.prototype.complete = function complete() {
        // TODO: Clean this up in a wrapper or something...gross....
        if (this.data && this.data.removeEventListener) {
            this.data.removeEventListener('error', this._boundOnError, false);
            this.data.removeEventListener('load', this._boundComplete, false);
            this.data.removeEventListener('progress', this._boundOnProgress, false);
            this.data.removeEventListener('canplaythrough', this._boundComplete, false);
        }

        if (this.xhr) {
            if (this.xhr.removeEventListener) {
                this.xhr.removeEventListener('error', this._boundXhrOnError, false);
                this.xhr.removeEventListener('abort', this._boundXhrOnAbort, false);
                this.xhr.removeEventListener('progress', this._boundOnProgress, false);
                this.xhr.removeEventListener('load', this._boundXhrOnLoad, false);
            } else {
                this.xhr.onerror = null;
                this.xhr.ontimeout = null;
                this.xhr.onprogress = null;
                this.xhr.onload = null;
            }
        }

        if (this.isComplete) {
            throw new Error('Complete called again for an already completed resource.');
        }

        this._setFlag(Resource.STATUS_FLAGS.COMPLETE, true);
        this._setFlag(Resource.STATUS_FLAGS.LOADING, false);

        this.onComplete.dispatch(this);
    };

    /**
     * Aborts the loading of this resource, with an optional message.
     *
     * @param {string} message - The message to use for the error
     */

    Resource.prototype.abort = function abort(message) {
        // abort can be called multiple times, ignore subsequent calls.
        if (this.error) {
            return;
        }

        // store error
        this.error = new Error(message);

        // abort the actual loading
        if (this.xhr) {
            this.xhr.abort();
        } else if (this.xdr) {
            this.xdr.abort();
        } else if (this.data) {
            // single source
            if (this.data.src) {
                this.data.src = Resource.EMPTY_GIF;
            }
            // multi-source
            else {
                    while (this.data.firstChild) {
                        this.data.removeChild(this.data.firstChild);
                    }
                }
        }

        // done now.
        this.complete();
    };

    /**
     * Kicks off loading of this resource. This method is asynchronous.
     *
     * @param {function} [cb] - Optional callback to call once the resource is loaded.
     */

    Resource.prototype.load = function load(cb) {
        var _this = this;

        if (this.isLoading) {
            return;
        }

        if (this.isComplete) {
            if (cb) {
                setTimeout(function () {
                    return cb(_this);
                }, 1);
            }

            return;
        } else if (cb) {
            this.onComplete.once(cb);
        }

        this._setFlag(Resource.STATUS_FLAGS.LOADING, true);

        this.onStart.dispatch(this);

        // if unset, determine the value
        if (this.crossOrigin === false || typeof this.crossOrigin !== 'string') {
            this.crossOrigin = this._determineCrossOrigin(this.url);
        }

        switch (this.loadType) {
            case Resource.LOAD_TYPE.IMAGE:
                this.type = Resource.TYPE.IMAGE;
                this._loadElement('image');
                break;

            case Resource.LOAD_TYPE.AUDIO:
                this.type = Resource.TYPE.AUDIO;
                this._loadSourceElement('audio');
                break;

            case Resource.LOAD_TYPE.VIDEO:
                this.type = Resource.TYPE.VIDEO;
                this._loadSourceElement('video');
                break;

            case Resource.LOAD_TYPE.XHR:
            /* falls through */
            default:
                if (useXdr && this.crossOrigin) {
                    this._loadXdr();
                } else {
                    this._loadXhr();
                }
                break;
        }
    };

    /**
     * Checks if the flag is set.
     *
     * @private
     * @param {number} flag - The flag to check.
     * @return {boolean} True if the flag is set.
     */

    Resource.prototype._hasFlag = function _hasFlag(flag) {
        return !!(this._flags & flag);
    };

    /**
     * (Un)Sets the flag.
     *
     * @private
     * @param {number} flag - The flag to (un)set.
     * @param {boolean} value - Whether to set or (un)set the flag.
     */

    Resource.prototype._setFlag = function _setFlag(flag, value) {
        this._flags = value ? this._flags | flag : this._flags & ~flag;
    };

    /**
     * Loads this resources using an element that has a single source,
     * like an HTMLImageElement.
     *
     * @private
     * @param {string} type - The type of element to use.
     */

    Resource.prototype._loadElement = function _loadElement(type) {
        if (this.metadata.loadElement) {
            this.data = this.metadata.loadElement;
        } else if (type === 'image' && typeof window.Image !== 'undefined') {
            this.data = new Image();
        } else {
            this.data = document.createElement(type);
        }

        if (this.crossOrigin) {
            this.data.crossOrigin = this.crossOrigin;
        }

        if (!this.metadata.skipSource) {
            this.data.src = this.url;
        }

        this.data.addEventListener('error', this._boundOnError, false);
        this.data.addEventListener('load', this._boundComplete, false);
        this.data.addEventListener('progress', this._boundOnProgress, false);
    };

    /**
     * Loads this resources using an element that has multiple sources,
     * like an HTMLAudioElement or HTMLVideoElement.
     *
     * @private
     * @param {string} type - The type of element to use.
     */

    Resource.prototype._loadSourceElement = function _loadSourceElement(type) {
        if (this.metadata.loadElement) {
            this.data = this.metadata.loadElement;
        } else if (type === 'audio' && typeof window.Audio !== 'undefined') {
            this.data = new Audio();
        } else {
            this.data = document.createElement(type);
        }

        if (this.data === null) {
            this.abort('Unsupported element: ' + type);

            return;
        }

        if (!this.metadata.skipSource) {
            // support for CocoonJS Canvas+ runtime, lacks document.createElement('source')
            if (navigator.isCocoonJS) {
                this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
            } else if (Array.isArray(this.url)) {
                var mimeTypes = this.metadata.mimeType;

                for (var i = 0; i < this.url.length; ++i) {
                    this.data.appendChild(this._createSource(type, this.url[i], Array.isArray(mimeTypes) ? mimeTypes[i] : mimeTypes));
                }
            } else {
                var _mimeTypes = this.metadata.mimeType;

                this.data.appendChild(this._createSource(type, this.url, Array.isArray(_mimeTypes) ? _mimeTypes[0] : _mimeTypes));
            }
        }

        this.data.addEventListener('error', this._boundOnError, false);
        this.data.addEventListener('load', this._boundComplete, false);
        this.data.addEventListener('progress', this._boundOnProgress, false);
        this.data.addEventListener('canplaythrough', this._boundComplete, false);

        this.data.load();
    };

    /**
     * Loads this resources using an XMLHttpRequest.
     *
     * @private
     */

    Resource.prototype._loadXhr = function _loadXhr() {
        // if unset, determine the value
        if (typeof this.xhrType !== 'string') {
            this.xhrType = this._determineXhrType();
        }

        var xhr = this.xhr = new XMLHttpRequest();

        // set the request type and url
        xhr.open('GET', this.url, true);

        // load json as text and parse it ourselves. We do this because some browsers
        // *cough* safari *cough* can't deal with it.
        if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
            xhr.responseType = Resource.XHR_RESPONSE_TYPE.TEXT;
        } else {
            xhr.responseType = this.xhrType;
        }

        xhr.addEventListener('error', this._boundXhrOnError, false);
        xhr.addEventListener('abort', this._boundXhrOnAbort, false);
        xhr.addEventListener('progress', this._boundOnProgress, false);
        xhr.addEventListener('load', this._boundXhrOnLoad, false);

        xhr.send();
    };

    /**
     * Loads this resources using an XDomainRequest. This is here because we need to support IE9 (gross).
     *
     * @private
     */

    Resource.prototype._loadXdr = function _loadXdr() {
        // if unset, determine the value
        if (typeof this.xhrType !== 'string') {
            this.xhrType = this._determineXhrType();
        }

        var xdr = this.xhr = new XDomainRequest();

        // XDomainRequest has a few quirks. Occasionally it will abort requests
        // A way to avoid this is to make sure ALL callbacks are set even if not used
        // More info here: http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9
        xdr.timeout = 5000;

        xdr.onerror = this._boundXhrOnError;
        xdr.ontimeout = this._boundXdrOnTimeout;
        xdr.onprogress = this._boundOnProgress;
        xdr.onload = this._boundXhrOnLoad;

        xdr.open('GET', this.url, true);

        // Note: The xdr.send() call is wrapped in a timeout to prevent an
        // issue with the interface where some requests are lost if multiple
        // XDomainRequests are being sent at the same time.
        // Some info here: https://github.com/photonstorm/phaser/issues/1248
        setTimeout(function () {
            return xdr.send();
        }, 1);
    };

    /**
     * Creates a source used in loading via an element.
     *
     * @private
     * @param {string} type - The element type (video or audio).
     * @param {string} url - The source URL to load from.
     * @param {string} [mime] - The mime type of the video
     * @return {HTMLSourceElement} The source element.
     */

    Resource.prototype._createSource = function _createSource(type, url, mime) {
        if (!mime) {
            mime = type + '/' + this._getExtension(url);
        }

        var source = document.createElement('source');

        source.src = url;
        source.type = mime;

        return source;
    };

    /**
     * Called if a load errors out.
     *
     * @param {Event} event - The error event from the element that emits it.
     * @private
     */

    Resource.prototype._onError = function _onError(event) {
        this.abort('Failed to load element using: ' + event.target.nodeName);
    };

    /**
     * Called if a load progress event fires for xhr/xdr.
     *
     * @private
     * @param {XMLHttpRequestProgressEvent|Event} event - Progress event.
     */

    Resource.prototype._onProgress = function _onProgress(event) {
        if (event && event.lengthComputable) {
            this.onProgress.dispatch(this, event.loaded / event.total);
        }
    };

    /**
     * Called if an error event fires for xhr/xdr.
     *
     * @private
     * @param {XMLHttpRequestErrorEvent|Event} event - Error event.
     */

    Resource.prototype._xhrOnError = function _xhrOnError() {
        var xhr = this.xhr;

        this.abort(reqType(xhr) + ' Request failed. Status: ' + xhr.status + ', text: "' + xhr.statusText + '"');
    };

    /**
     * Called if an abort event fires for xhr.
     *
     * @private
     * @param {XMLHttpRequestAbortEvent} event - Abort Event
     */

    Resource.prototype._xhrOnAbort = function _xhrOnAbort() {
        this.abort(reqType(this.xhr) + ' Request was aborted by the user.');
    };

    /**
     * Called if a timeout event fires for xdr.
     *
     * @private
     * @param {Event} event - Timeout event.
     */

    Resource.prototype._xdrOnTimeout = function _xdrOnTimeout() {
        this.abort(reqType(this.xhr) + ' Request timed out.');
    };

    /**
     * Called when data successfully loads from an xhr/xdr request.
     *
     * @private
     * @param {XMLHttpRequestLoadEvent|Event} event - Load event
     */

    Resource.prototype._xhrOnLoad = function _xhrOnLoad() {
        var xhr = this.xhr;
        var text = '';
        var status = typeof xhr.status === 'undefined' ? STATUS_OK : xhr.status; // XDR has no `.status`, assume 200.

        // responseText is accessible only if responseType is '' or 'text' and on older browsers
        if (xhr.responseType === '' || xhr.responseType === 'text' || typeof xhr.responseType === 'undefined') {
            text = xhr.responseText;
        }

        // status can be 0 when using the `file://` protocol so we also check if a response is set.
        // If it has a response, we assume 200; otherwise a 0 status code with no contents is an aborted request.
        if (status === STATUS_NONE && text.length > 0) {
            status = STATUS_OK;
        }
        // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
        else if (status === STATUS_IE_BUG_EMPTY) {
                status = STATUS_EMPTY;
            }

        var statusType = status / 100 | 0;

        if (statusType === STATUS_TYPE_OK) {
            // if text, just return it
            if (this.xhrType === Resource.XHR_RESPONSE_TYPE.TEXT) {
                this.data = text;
                this.type = Resource.TYPE.TEXT;
            }
            // if json, parse into json object
            else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON) {
                    try {
                        this.data = JSON.parse(text);
                        this.type = Resource.TYPE.JSON;
                    } catch (e) {
                        this.abort('Error trying to parse loaded json: ' + e);

                        return;
                    }
                }
                // if xml, parse into an xml document or div element
                else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
                        try {
                            if (window.DOMParser) {
                                var domparser = new DOMParser();

                                this.data = domparser.parseFromString(text, 'text/xml');
                            } else {
                                var div = document.createElement('div');

                                div.innerHTML = text;

                                this.data = div;
                            }

                            this.type = Resource.TYPE.XML;
                        } catch (e) {
                            this.abort('Error trying to parse loaded xml: ' + e);

                            return;
                        }
                    }
                    // other types just return the response
                    else {
                            this.data = xhr.response || text;
                        }
        } else {
            this.abort('[' + xhr.status + '] ' + xhr.statusText + ': ' + xhr.responseURL);

            return;
        }

        this.complete();
    };

    /**
     * Sets the `crossOrigin` property for this resource based on if the url
     * for this resource is cross-origin. If crossOrigin was manually set, this
     * function does nothing.
     *
     * @private
     * @param {string} url - The url to test.
     * @param {object} [loc=window.location] - The location object to test against.
     * @return {string} The crossOrigin value to use (or empty string for none).
     */

    Resource.prototype._determineCrossOrigin = function _determineCrossOrigin(url, loc) {
        // data: and javascript: urls are considered same-origin
        if (url.indexOf('data:') === 0) {
            return '';
        }

        // default is window.location
        loc = loc || window.location;

        if (!tempAnchor) {
            tempAnchor = document.createElement('a');
        }

        // let the browser determine the full href for the url of this resource and then
        // parse with the node url lib, we can't use the properties of the anchor element
        // because they don't work in IE9 :(
        tempAnchor.href = url;
        url = (0, _parseUri2.default)(tempAnchor.href, { strictMode: true });

        var samePort = !url.port && loc.port === '' || url.port === loc.port;
        var protocol = url.protocol ? url.protocol + ':' : '';

        // if cross origin
        if (url.host !== loc.hostname || !samePort || protocol !== loc.protocol) {
            return 'anonymous';
        }

        return '';
    };

    /**
     * Determines the responseType of an XHR request based on the extension of the
     * resource being loaded.
     *
     * @private
     * @return {Resource.XHR_RESPONSE_TYPE} The responseType to use.
     */

    Resource.prototype._determineXhrType = function _determineXhrType() {
        return Resource._xhrTypeMap[this.extension] || Resource.XHR_RESPONSE_TYPE.TEXT;
    };

    /**
     * Determines the loadType of a resource based on the extension of the
     * resource being loaded.
     *
     * @private
     * @return {Resource.LOAD_TYPE} The loadType to use.
     */

    Resource.prototype._determineLoadType = function _determineLoadType() {
        return Resource._loadTypeMap[this.extension] || Resource.LOAD_TYPE.XHR;
    };

    /**
     * Extracts the extension (sans '.') of the file being loaded by the resource.
     *
     * @private
     * @return {string} The extension.
     */

    Resource.prototype._getExtension = function _getExtension() {
        var url = this.url;
        var ext = '';

        if (this.isDataUrl) {
            var slashIndex = url.indexOf('/');

            ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
        } else {
            var queryStart = url.indexOf('?');
            var hashStart = url.indexOf('#');
            var index = Math.min(queryStart > -1 ? queryStart : url.length, hashStart > -1 ? hashStart : url.length);

            url = url.substring(0, index);
            ext = url.substring(url.lastIndexOf('.') + 1);
        }

        return ext.toLowerCase();
    };

    /**
     * Determines the mime type of an XHR request based on the responseType of
     * resource being loaded.
     *
     * @private
     * @param {Resource.XHR_RESPONSE_TYPE} type - The type to get a mime type for.
     * @return {string} The mime type to use.
     */

    Resource.prototype._getMimeFromXhrType = function _getMimeFromXhrType(type) {
        switch (type) {
            case Resource.XHR_RESPONSE_TYPE.BUFFER:
                return 'application/octet-binary';

            case Resource.XHR_RESPONSE_TYPE.BLOB:
                return 'application/blob';

            case Resource.XHR_RESPONSE_TYPE.DOCUMENT:
                return 'application/xml';

            case Resource.XHR_RESPONSE_TYPE.JSON:
                return 'application/json';

            case Resource.XHR_RESPONSE_TYPE.DEFAULT:
            case Resource.XHR_RESPONSE_TYPE.TEXT:
            /* falls through */
            default:
                return 'text/plain';

        }
    };

    _createClass(Resource, [{
        key: 'isDataUrl',
        get: function get() {
            return this._hasFlag(Resource.STATUS_FLAGS.DATA_URL);
        }

        /**
         * Describes if this resource has finished loading. Is true when the resource has completely
         * loaded.
         *
         * @member {boolean}
         * @readonly
         */

    }, {
        key: 'isComplete',
        get: function get() {
            return this._hasFlag(Resource.STATUS_FLAGS.COMPLETE);
        }

        /**
         * Describes if this resource is currently loading. Is true when the resource starts loading,
         * and is false again when complete.
         *
         * @member {boolean}
         * @readonly
         */

    }, {
        key: 'isLoading',
        get: function get() {
            return this._hasFlag(Resource.STATUS_FLAGS.LOADING);
        }
    }]);

    return Resource;
}();

/**
 * The types of resources a resource could represent.
 *
 * @static
 * @readonly
 * @enum {number}
 */

exports.default = Resource;
Resource.STATUS_FLAGS = {
    NONE: 0,
    DATA_URL: 1 << 0,
    COMPLETE: 1 << 1,
    LOADING: 1 << 2
};

/**
 * The types of resources a resource could represent.
 *
 * @static
 * @readonly
 * @enum {number}
 */
Resource.TYPE = {
    UNKNOWN: 0,
    JSON: 1,
    XML: 2,
    IMAGE: 3,
    AUDIO: 4,
    VIDEO: 5,
    TEXT: 6
};

/**
 * The types of loading a resource can use.
 *
 * @static
 * @readonly
 * @enum {number}
 */
Resource.LOAD_TYPE = {
    /** Uses XMLHttpRequest to load the resource. */
    XHR: 1,
    /** Uses an `Image` object to load the resource. */
    IMAGE: 2,
    /** Uses an `Audio` object to load the resource. */
    AUDIO: 3,
    /** Uses a `Video` object to load the resource. */
    VIDEO: 4
};

/**
 * The XHR ready states, used internally.
 *
 * @static
 * @readonly
 * @enum {string}
 */
Resource.XHR_RESPONSE_TYPE = {
    /** string */
    DEFAULT: 'text',
    /** ArrayBuffer */
    BUFFER: 'arraybuffer',
    /** Blob */
    BLOB: 'blob',
    /** Document */
    DOCUMENT: 'document',
    /** Object */
    JSON: 'json',
    /** String */
    TEXT: 'text'
};

Resource._loadTypeMap = {
    // images
    gif: Resource.LOAD_TYPE.IMAGE,
    png: Resource.LOAD_TYPE.IMAGE,
    bmp: Resource.LOAD_TYPE.IMAGE,
    jpg: Resource.LOAD_TYPE.IMAGE,
    jpeg: Resource.LOAD_TYPE.IMAGE,
    tif: Resource.LOAD_TYPE.IMAGE,
    tiff: Resource.LOAD_TYPE.IMAGE,
    webp: Resource.LOAD_TYPE.IMAGE,
    tga: Resource.LOAD_TYPE.IMAGE,
    svg: Resource.LOAD_TYPE.IMAGE,
    'svg+xml': Resource.LOAD_TYPE.IMAGE, // for SVG data urls

    // audio
    mp3: Resource.LOAD_TYPE.AUDIO,
    ogg: Resource.LOAD_TYPE.AUDIO,
    wav: Resource.LOAD_TYPE.AUDIO,

    // videos
    mp4: Resource.LOAD_TYPE.VIDEO,
    webm: Resource.LOAD_TYPE.VIDEO
};

Resource._xhrTypeMap = {
    // xml
    xhtml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    html: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    htm: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    xml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    tmx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
    svg: Resource.XHR_RESPONSE_TYPE.DOCUMENT,

    // This was added to handle Tiled Tileset XML, but .tsx is also a TypeScript React Component.
    // Since it is way less likely for people to be loading TypeScript files instead of Tiled files,
    // this should probably be fine.
    tsx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,

    // images
    gif: Resource.XHR_RESPONSE_TYPE.BLOB,
    png: Resource.XHR_RESPONSE_TYPE.BLOB,
    bmp: Resource.XHR_RESPONSE_TYPE.BLOB,
    jpg: Resource.XHR_RESPONSE_TYPE.BLOB,
    jpeg: Resource.XHR_RESPONSE_TYPE.BLOB,
    tif: Resource.XHR_RESPONSE_TYPE.BLOB,
    tiff: Resource.XHR_RESPONSE_TYPE.BLOB,
    webp: Resource.XHR_RESPONSE_TYPE.BLOB,
    tga: Resource.XHR_RESPONSE_TYPE.BLOB,

    // json
    json: Resource.XHR_RESPONSE_TYPE.JSON,

    // text
    text: Resource.XHR_RESPONSE_TYPE.TEXT,
    txt: Resource.XHR_RESPONSE_TYPE.TEXT,

    // fonts
    ttf: Resource.XHR_RESPONSE_TYPE.BUFFER,
    otf: Resource.XHR_RESPONSE_TYPE.BUFFER
};

// We can't set the `src` attribute to empty string, so on abort we set it to this 1px transparent gif
Resource.EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

/**
 * Quick helper to set a value on one of the extension maps. Ensures there is no
 * dot at the start of the extension.
 *
 * @ignore
 * @param {object} map - The map to set on.
 * @param {string} extname - The extension (or key) to set.
 * @param {number} val - The value to set.
 */
function setExtMap(map, extname, val) {
    if (extname && extname.indexOf('.') === 0) {
        extname = extname.substring(1);
    }

    if (!extname) {
        return;
    }

    map[extname] = val;
}

/**
 * Quick helper to get string xhr type.
 *
 * @ignore
 * @param {XMLHttpRequest|XDomainRequest} xhr - The request to check.
 * @return {string} The type.
 */
function reqType(xhr) {
    return xhr.toString().replace('object ', '');
}
//# sourceMappingURL=Resource.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 * An observable point is a point that triggers a callback when the point's position is changed.
 *
 * @class
 * @memberof PIXI
 */
var ObservablePoint = function () {
    /**
     * @param {Function} cb - callback when changed
     * @param {object} scope - owner of callback
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    function ObservablePoint(cb, scope) {
        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, ObservablePoint);

        this._x = x;
        this._y = y;

        this.cb = cb;
        this.scope = scope;
    }

    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */


    _createClass(ObservablePoint, [{
        key: "set",
        value: function set(x, y) {
            var _x = x || 0;
            var _y = y || (y !== 0 ? _x : 0);

            if (this._x !== _x || this._y !== _y) {
                this._x = _x;
                this._y = _y;
                this.cb.call(this.scope);
            }
        }

        /**
         * Copies the data from another point
         *
         * @param {PIXI.Point|PIXI.ObservablePoint} point - point to copy from
         */

    }, {
        key: "copy",
        value: function copy(point) {
            if (this._x !== point.x || this._y !== point.y) {
                this._x = point.x;
                this._y = point.y;
                this.cb.call(this.scope);
            }
        }

        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */

    }, {
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._x !== value) {
                this._x = value;
                this.cb.call(this.scope);
            }
        }

        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */

    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._y !== value) {
                this._y = value;
                this.cb.call(this.scope);
            }
        }
    }]);

    return ObservablePoint;
}();

/* harmony default export */ __webpack_exports__["a"] = (ObservablePoint);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Matrix__ = __webpack_require__(12);
// Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group of order 16


var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
var tempMatrices = [];

var mul = [];

function signum(x) {
    if (x < 0) {
        return -1;
    }
    if (x > 0) {
        return 1;
    }

    return 0;
}

function init() {
    for (var i = 0; i < 16; i++) {
        var row = [];

        mul.push(row);

        for (var j = 0; j < 16; j++) {
            var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
            var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
            var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
            var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);

            for (var k = 0; k < 16; k++) {
                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
                    row.push(k);
                    break;
                }
            }
        }
    }

    for (var _i = 0; _i < 16; _i++) {
        var mat = new __WEBPACK_IMPORTED_MODULE_0__Matrix__["a" /* default */]();

        mat.set(ux[_i], uy[_i], vx[_i], vy[_i], 0, 0);
        tempMatrices.push(mat);
    }
}

init();

/**
 * Implements Dihedral Group D_8, see [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html},
 * D8 is the same but with diagonals. Used for texture rotations.
 *
 * Vector xX(i), xY(i) is U-axis of sprite with rotation i
 * Vector yY(i), yY(i) is V-axis of sprite with rotation i
 * Rotations: 0 grad (0), 90 grad (2), 180 grad (4), 270 grad (6)
 * Mirrors: vertical (8), main diagonal (10), horizontal (12), reverse diagonal (14)
 * This is the small part of gameofbombs.com portal system. It works.
 *
 * @author Ivan @ivanpopelyshev
 * @class
 * @memberof PIXI
 */
var GroupD8 = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MIRROR_HORIZONTAL: 12,
    uX: function uX(ind) {
        return ux[ind];
    },
    uY: function uY(ind) {
        return uy[ind];
    },
    vX: function vX(ind) {
        return vx[ind];
    },
    vY: function vY(ind) {
        return vy[ind];
    },
    inv: function inv(rotation) {
        if (rotation & 8) {
            return rotation & 15;
        }

        return -rotation & 7;
    },
    add: function add(rotationSecond, rotationFirst) {
        return mul[rotationSecond][rotationFirst];
    },
    sub: function sub(rotationSecond, rotationFirst) {
        return mul[rotationSecond][GroupD8.inv(rotationFirst)];
    },

    /**
     * Adds 180 degrees to rotation. Commutative operation.
     *
     * @memberof PIXI.GroupD8
     * @param {number} rotation - The number to rotate.
     * @returns {number} rotated number
     */
    rotate180: function rotate180(rotation) {
        return rotation ^ 4;
    },

    /**
     * Direction of main vector can be horizontal, vertical or diagonal.
     * Some objects work with vertical directions different.
     *
     * @memberof PIXI.GroupD8
     * @param {number} rotation - The number to check.
     * @returns {boolean} Whether or not the direction is vertical
     */
    isVertical: function isVertical(rotation) {
        return (rotation & 3) === 2;
    },

    /**
     * @memberof PIXI.GroupD8
     * @param {number} dx - TODO
     * @param {number} dy - TODO
     *
     * @return {number} TODO
     */
    byDirection: function byDirection(dx, dy) {
        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
            if (dy >= 0) {
                return GroupD8.S;
            }

            return GroupD8.N;
        } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
            if (dx > 0) {
                return GroupD8.E;
            }

            return GroupD8.W;
        } else if (dy > 0) {
            if (dx > 0) {
                return GroupD8.SE;
            }

            return GroupD8.SW;
        } else if (dx > 0) {
            return GroupD8.NE;
        }

        return GroupD8.NW;
    },

    /**
     * Helps sprite to compensate texture packer rotation.
     *
     * @memberof PIXI.GroupD8
     * @param {PIXI.Matrix} matrix - sprite world matrix
     * @param {number} rotation - The rotation factor to use.
     * @param {number} tx - sprite anchoring
     * @param {number} ty - sprite anchoring
     */
    matrixAppendRotationInv: function matrixAppendRotationInv(matrix, rotation) {
        var tx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var ty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        // Packer used "rotation", we use "inv(rotation)"
        var mat = tempMatrices[GroupD8.inv(rotation)];

        mat.tx = tx;
        mat.ty = ty;
        matrix.append(mat);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (GroupD8);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function (global) {

    var apple_phone = /iPhone/i,
        apple_ipod = /iPod/i,
        apple_tablet = /iPad/i,
        android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        // Match 'Android' AND 'Mobile'
    android_tablet = /Android/i,
        amazon_phone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazon_tablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windows_phone = /Windows Phone/i,
        windows_tablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        // Match 'Windows' AND 'ARM'
    other_blackberry = /BlackBerry/i,
        other_blackberry_10 = /BB10/i,
        other_opera = /Opera Mini/i,
        other_chrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        other_firefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        // Match 'Firefox' AND 'Mobile'
    seven_inch = new RegExp('(?:' + // Non-capturing group

    'Nexus 7' + // Nexus 7

    '|' + // OR

    'BNTV250' + // B&N Nook Tablet 7 inch

    '|' + // OR

    'Kindle Fire' + // Kindle Fire

    '|' + // OR

    'Silk' + // Kindle Fire, Silk Accelerated

    '|' + // OR

    'GT-P1000' + // Galaxy Tab 7 inch

    ')', // End non-capturing group

    'i'); // Case-insensitive matching

    var match = function match(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsMobileClass = function IsMobileClass(userAgent) {
        var ua = userAgent || navigator.userAgent;

        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
        // iPhone" string. Same probable happens on other tablet platforms.
        // This will confuse detection so strip it out if it exists.
        tmp = ua.split('Twitter');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        this.apple = {
            phone: match(apple_phone, ua),
            ipod: match(apple_ipod, ua),
            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
            phone: match(amazon_phone, ua),
            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
            phone: match(amazon_phone, ua) || match(android_phone, ua),
            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
            phone: match(windows_phone, ua),
            tablet: match(windows_tablet, ua),
            device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.other = {
            blackberry: match(other_blackberry, ua),
            blackberry10: match(other_blackberry_10, ua),
            opera: match(other_opera, ua),
            firefox: match(other_firefox, ua),
            chrome: match(other_chrome, ua),
            device: match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function instantiate() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
    };

    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (true) {
        //AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.isMobile = instantiate();
    }
})(this);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TransformStatic__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Transform__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Bounds__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// _tempDisplayObjectParent = new DisplayObject();

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */

var DisplayObject = function (_EventEmitter) {
    _inherits(DisplayObject, _EventEmitter);

    /**
     *
     */
    function DisplayObject() {
        _classCallCheck(this, DisplayObject);

        var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));

        var TransformClass = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].TRANSFORM_MODE === __WEBPACK_IMPORTED_MODULE_1__const__["h" /* TRANSFORM_MODE */].STATIC ? __WEBPACK_IMPORTED_MODULE_3__TransformStatic__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_4__Transform__["a" /* default */];

        _this.tempDisplayObjectParent = null;

        // TODO: need to create Transform from factory
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing
         *
         * @member {PIXI.TransformBase}
         */
        _this.transform = new TransformClass();

        /**
         * The opacity of the object.
         *
         * @member {number}
         */
        _this.alpha = 1;

        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually
         *
         * @member {boolean}
         */
        _this.visible = true;

        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually
         *
         * @member {boolean}
         */
        _this.renderable = true;

        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container}
         * @readonly
         */
        _this.parent = null;

        /**
         * The multiplied alpha of the displayObject
         *
         * @member {number}
         * @readonly
         */
        _this.worldAlpha = 1;

        /**
         * The area the filter is applied to. This is used as more of an optimisation
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
         *
         * Also works as an interaction mask
         *
         * @member {PIXI.Rectangle}
         */
        _this.filterArea = null;

        _this._filters = null;
        _this._enabledFilters = null;

        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject
         *
         * @member {PIXI.Rectangle}
         * @private
         */
        _this._bounds = new __WEBPACK_IMPORTED_MODULE_5__Bounds__["a" /* default */]();
        _this._boundsID = 0;
        _this._lastBoundsID = -1;
        _this._boundsRect = null;
        _this._localBoundsRect = null;

        /**
         * The original, cached mask of the object
         *
         * @member {PIXI.Graphics|PIXI.Sprite}
         * @private
         */
        _this._mask = null;

        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean}
         * @private
         * @readonly
         */
        _this._destroyed = false;

        /**
         * Fired when this DisplayObject is added to a Container.
         *
         * @event PIXI.DisplayObject#added
         * @param {PIXI.Container} container - The container added to.
         */

        /**
         * Fired when this DisplayObject is removed from a Container.
         *
         * @event PIXI.DisplayObject#removed
         * @param {PIXI.Container} container - The container removed from.
         */
        return _this;
    }

    /**
     * @private
     * @member {PIXI.DisplayObject}
     */


    _createClass(DisplayObject, [{
        key: 'updateTransform',


        /**
         * Updates the object transform for rendering
         *
         * TODO - Optimization pass!
         */
        value: function updateTransform() {
            this.transform.updateTransform(this.parent.transform);
            // multiply the alphas..
            this.worldAlpha = this.alpha * this.parent.worldAlpha;

            this._bounds.updateID++;
        }

        /**
         * recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */

    }, {
        key: '_recursivePostUpdateTransform',
        value: function _recursivePostUpdateTransform() {
            if (this.parent) {
                this.parent._recursivePostUpdateTransform();
                this.transform.updateTransform(this.parent.transform);
            } else {
                this.transform.updateTransform(this._tempDisplayObjectParent.transform);
            }
        }

        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost
         * @param {PIXI.Rectangle} rect - Optional rectangle to store the result of the bounds calculation
         * @return {PIXI.Rectangle} the rectangular bounding area
         */

    }, {
        key: 'getBounds',
        value: function getBounds(skipUpdate, rect) {
            if (!skipUpdate) {
                if (!this.parent) {
                    this.parent = this._tempDisplayObjectParent;
                    this.updateTransform();
                    this.parent = null;
                } else {
                    this._recursivePostUpdateTransform();
                    this.updateTransform();
                }
            }

            if (this._boundsID !== this._lastBoundsID) {
                this.calculateBounds();
            }

            if (!rect) {
                if (!this._boundsRect) {
                    this._boundsRect = new __WEBPACK_IMPORTED_MODULE_6__math__["h" /* Rectangle */]();
                }

                rect = this._boundsRect;
            }

            return this._bounds.getRectangle(rect);
        }

        /**
         * Retrieves the local bounds of the displayObject as a rectangle object
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation
         * @return {PIXI.Rectangle} the rectangular bounding area
         */

    }, {
        key: 'getLocalBounds',
        value: function getLocalBounds(rect) {
            var transformRef = this.transform;
            var parentRef = this.parent;

            this.parent = null;
            this.transform = this._tempDisplayObjectParent.transform;

            if (!rect) {
                if (!this._localBoundsRect) {
                    this._localBoundsRect = new __WEBPACK_IMPORTED_MODULE_6__math__["h" /* Rectangle */]();
                }

                rect = this._localBoundsRect;
            }

            var bounds = this.getBounds(false, rect);

            this.parent = parentRef;
            this.transform = transformRef;

            return bounds;
        }

        /**
         * Calculates the global position of the display object
         *
         * @param {PIXI.Point} position - The world origin to calculate from
         * @param {PIXI.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point)
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.Point} A point object representing the position of this object
         */

    }, {
        key: 'toGlobal',
        value: function toGlobal(position, point) {
            var skipUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!skipUpdate) {
                this._recursivePostUpdateTransform();

                // this parent check is for just in case the item is a root object.
                // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
                // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
                if (!this.parent) {
                    this.parent = this._tempDisplayObjectParent;
                    this.displayObjectUpdateTransform();
                    this.parent = null;
                } else {
                    this.displayObjectUpdateTransform();
                }
            }

            // don't need to update the lot
            return this.worldTransform.apply(position, point);
        }

        /**
         * Calculates the local position of the display object relative to another point
         *
         * @param {PIXI.Point} position - The world origin to calculate from
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from
         * @param {PIXI.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point)
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.Point} A point object representing the position of this object
         */

    }, {
        key: 'toLocal',
        value: function toLocal(position, from, point, skipUpdate) {
            if (from) {
                position = from.toGlobal(position, point, skipUpdate);
            }

            if (!skipUpdate) {
                this._recursivePostUpdateTransform();

                // this parent check is for just in case the item is a root object.
                // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
                // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
                if (!this.parent) {
                    this.parent = this._tempDisplayObjectParent;
                    this.displayObjectUpdateTransform();
                    this.parent = null;
                } else {
                    this.displayObjectUpdateTransform();
                }
            }

            // simply apply the matrix..
            return this.worldTransform.applyInverse(position, point);
        }

        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: 'renderWebGL',
        value: function renderWebGL(renderer) // eslint-disable-line no-unused-vars
        {}
        // OVERWRITE;


        /**
         * Renders the object using the Canvas renderer
         *
         * @param {PIXI.CanvasRenderer} renderer - The renderer
         */

    }, {
        key: 'renderCanvas',
        value: function renderCanvas(renderer) // eslint-disable-line no-unused-vars
        {}
        // OVERWRITE;


        /**
         * Set the parent Container of this DisplayObject
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to
         * @return {PIXI.Container} The Container that this DisplayObject was added to
         */

    }, {
        key: 'setParent',
        value: function setParent(container) {
            if (!container || !container.addChild) {
                throw new Error('setParent: Argument must be a Container');
            }

            container.addChild(this);

            return container;
        }

        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */

    }, {
        key: 'setTransform',
        value: function setTransform() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var scaleX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var scaleY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var skewX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var skewY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            var pivotX = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
            var pivotY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

            this.position.x = x;
            this.position.y = y;
            this.scale.x = !scaleX ? 1 : scaleX;
            this.scale.y = !scaleY ? 1 : scaleY;
            this.rotation = rotation;
            this.skew.x = skewX;
            this.skew.y = skewY;
            this.pivot.x = pivotX;
            this.pivot.y = pivotY;

            return this;
        }

        /**
         * Base destroy method for generic display objects. This will automatically
         * remove the display object from its parent Container as well as remove
         * all current event listeners and internal references. Do not use a DisplayObject
         * after calling `destroy`.
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.removeAllListeners();
            if (this.parent) {
                this.parent.removeChild(this);
            }
            this.transform = null;

            this.parent = null;

            this._bounds = null;
            this._currentBounds = null;
            this._mask = null;

            this.filterArea = null;

            this.interactive = false;
            this.interactiveChildren = false;

            this._destroyed = true;
        }

        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */

    }, {
        key: '_tempDisplayObjectParent',
        get: function get() {
            if (this.tempDisplayObjectParent === null) {
                this.tempDisplayObjectParent = new DisplayObject();
            }

            return this.tempDisplayObjectParent;
        }
    }, {
        key: 'x',
        get: function get() {
            return this.position.x;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.position.x = value;
        }

        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */

    }, {
        key: 'y',
        get: function get() {
            return this.position.y;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.position.y = value;
        }

        /**
         * Current transform of the object based on world (parent) factors
         *
         * @member {PIXI.Matrix}
         * @readonly
         */

    }, {
        key: 'worldTransform',
        get: function get() {
            return this.transform.worldTransform;
        }

        /**
         * Current transform of the object based on local factors: position, scale, other stuff
         *
         * @member {PIXI.Matrix}
         * @readonly
         */

    }, {
        key: 'localTransform',
        get: function get() {
            return this.transform.localTransform;
        }

        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */

    }, {
        key: 'position',
        get: function get() {
            return this.transform.position;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.position.copy(value);
        }

        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */

    }, {
        key: 'scale',
        get: function get() {
            return this.transform.scale;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.scale.copy(value);
        }

        /**
         * The pivot point of the displayObject that it rotates around
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */

    }, {
        key: 'pivot',
        get: function get() {
            return this.transform.pivot;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.pivot.copy(value);
        }

        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */

    }, {
        key: 'skew',
        get: function get() {
            return this.transform.skew;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.skew.copy(value);
        }

        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */

    }, {
        key: 'rotation',
        get: function get() {
            return this.transform.rotation;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.rotation = value;
        }

        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */

    }, {
        key: 'worldVisible',
        get: function get() {
            var item = this;

            do {
                if (!item.visible) {
                    return false;
                }

                item = item.parent;
            } while (item);

            return true;
        }

        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PIXI a regular mask must be a
         * PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
         * utilises shape clipping. To remove a mask, set this property to null.
         *
         * @todo For the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite}
         */

    }, {
        key: 'mask',
        get: function get() {
            return this._mask;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._mask) {
                this._mask.renderable = true;
            }

            this._mask = value;

            if (this._mask) {
                this._mask.renderable = false;
            }
        }

        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to 'null'
         *
         * @member {PIXI.Filter[]}
         */

    }, {
        key: 'filters',
        get: function get() {
            return this._filters && this._filters.slice();
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._filters = value && value.slice();
        }
    }]);

    return DisplayObject;
}(__WEBPACK_IMPORTED_MODULE_0_eventemitter3___default.a);

// performance increase to avoid using call.. (10x faster)


/* harmony default export */ __webpack_exports__["a"] = (DisplayObject);
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TransformBase__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Transform that takes care about its versions
 *
 * @class
 * @extends PIXI.TransformBase
 * @memberof PIXI
 */

var TransformStatic = function (_TransformBase) {
    _inherits(TransformStatic, _TransformBase);

    /**
     *
     */
    function TransformStatic() {
        _classCallCheck(this, TransformStatic);

        /**
        * The coordinate of the object relative to the local coordinates of the parent.
        *
        * @member {PIXI.ObservablePoint}
        */
        var _this = _possibleConstructorReturn(this, (TransformStatic.__proto__ || Object.getPrototypeOf(TransformStatic)).call(this));

        _this.position = new __WEBPACK_IMPORTED_MODULE_0__math__["e" /* ObservablePoint */](_this.onChange, _this, 0, 0);

        /**
         * The scale factor of the object.
         *
         * @member {PIXI.ObservablePoint}
         */
        _this.scale = new __WEBPACK_IMPORTED_MODULE_0__math__["e" /* ObservablePoint */](_this.onChange, _this, 1, 1);

        /**
         * The pivot point of the displayObject that it rotates around
         *
         * @member {PIXI.ObservablePoint}
         */
        _this.pivot = new __WEBPACK_IMPORTED_MODULE_0__math__["e" /* ObservablePoint */](_this.onChange, _this, 0, 0);

        /**
         * The skew amount, on the x and y axis.
         *
         * @member {PIXI.ObservablePoint}
         */
        _this.skew = new __WEBPACK_IMPORTED_MODULE_0__math__["e" /* ObservablePoint */](_this.updateSkew, _this, 0, 0);

        _this._rotation = 0;

        _this._cx = 1; // cos rotation + skewY;
        _this._sx = 0; // sin rotation + skewY;
        _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
        _this._sy = 1; // sin rotation + Math.PI/2 - skewX;

        _this._localID = 0;
        _this._currentLocalID = 0;
        return _this;
    }

    /**
     * Called when a value changes.
     *
     * @private
     */


    _createClass(TransformStatic, [{
        key: 'onChange',
        value: function onChange() {
            this._localID++;
        }

        /**
         * Called when skew or rotation changes
         *
         * @private
         */

    }, {
        key: 'updateSkew',
        value: function updateSkew() {
            this._cx = Math.cos(this._rotation + this.skew._y);
            this._sx = Math.sin(this._rotation + this.skew._y);
            this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
            this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2

            this._localID++;
        }

        /**
         * Updates only local matrix
         */

    }, {
        key: 'updateLocalTransform',
        value: function updateLocalTransform() {
            var lt = this.localTransform;

            if (this._localID !== this._currentLocalID) {
                // get the matrix values of the displayobject based on its transform properties..
                lt.a = this._cx * this.scale._x;
                lt.b = this._sx * this.scale._x;
                lt.c = this._cy * this.scale._y;
                lt.d = this._sy * this.scale._y;

                lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
                lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
                this._currentLocalID = this._localID;

                // force an update..
                this._parentID = -1;
            }
        }

        /**
         * Updates the values of the object and applies the parent's transform.
         *
         * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
         */

    }, {
        key: 'updateTransform',
        value: function updateTransform(parentTransform) {
            var lt = this.localTransform;

            if (this._localID !== this._currentLocalID) {
                // get the matrix values of the displayobject based on its transform properties..
                lt.a = this._cx * this.scale._x;
                lt.b = this._sx * this.scale._x;
                lt.c = this._cy * this.scale._y;
                lt.d = this._sy * this.scale._y;

                lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
                lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
                this._currentLocalID = this._localID;

                // force an update..
                this._parentID = -1;
            }

            if (this._parentID !== parentTransform._worldID) {
                // concat the parent matrix with the objects transform.
                var pt = parentTransform.worldTransform;
                var wt = this.worldTransform;

                wt.a = lt.a * pt.a + lt.b * pt.c;
                wt.b = lt.a * pt.b + lt.b * pt.d;
                wt.c = lt.c * pt.a + lt.d * pt.c;
                wt.d = lt.c * pt.b + lt.d * pt.d;
                wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
                wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

                this._parentID = parentTransform._worldID;

                // update the id of the transform..
                this._worldID++;
            }
        }

        /**
         * Decomposes a matrix and sets the transforms properties based on it.
         *
         * @param {PIXI.Matrix} matrix - The matrix to decompose
         */

    }, {
        key: 'setFromMatrix',
        value: function setFromMatrix(matrix) {
            matrix.decompose(this);
            this._localID++;
        }

        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */

    }, {
        key: 'rotation',
        get: function get() {
            return this._rotation;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._rotation = value;
            this.updateSkew();
        }
    }]);

    return TransformStatic;
}(__WEBPACK_IMPORTED_MODULE_1__TransformBase__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TransformStatic);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TransformBase__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Generic class to deal with traditional 2D matrix transforms
 * local transformation is calculated from position,scale,skew and rotation
 *
 * @class
 * @extends PIXI.TransformBase
 * @memberof PIXI
 */

var Transform = function (_TransformBase) {
  _inherits(Transform, _TransformBase);

  /**
   *
   */
  function Transform() {
    _classCallCheck(this, Transform);

    /**
    * The coordinate of the object relative to the local coordinates of the parent.
    *
    * @member {PIXI.Point}
    */
    var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this));

    _this.position = new __WEBPACK_IMPORTED_MODULE_0__math__["f" /* Point */](0, 0);

    /**
     * The scale factor of the object.
     *
     * @member {PIXI.Point}
     */
    _this.scale = new __WEBPACK_IMPORTED_MODULE_0__math__["f" /* Point */](1, 1);

    /**
     * The skew amount, on the x and y axis.
     *
     * @member {PIXI.ObservablePoint}
     */
    _this.skew = new __WEBPACK_IMPORTED_MODULE_0__math__["e" /* ObservablePoint */](_this.updateSkew, _this, 0, 0);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {PIXI.Point}
     */
    _this.pivot = new __WEBPACK_IMPORTED_MODULE_0__math__["f" /* Point */](0, 0);

    /**
     * The rotation value of the object, in radians
     *
     * @member {Number}
     * @private
     */
    _this._rotation = 0;

    _this._cx = 1; // cos rotation + skewY;
    _this._sx = 0; // sin rotation + skewY;
    _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
    _this._sy = 1; // sin rotation + Math.PI/2 - skewX;
    return _this;
  }

  /**
   * Updates the skew values when the skew or rotation changes.
   *
   * @private
   */


  _createClass(Transform, [{
    key: 'updateSkew',
    value: function updateSkew() {
      this._cx = Math.cos(this._rotation + this.skew._y);
      this._sx = Math.sin(this._rotation + this.skew._y);
      this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
      this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2
    }

    /**
     * Updates only local matrix
     */

  }, {
    key: 'updateLocalTransform',
    value: function updateLocalTransform() {
      var lt = this.localTransform;

      lt.a = this._cx * this.scale.x;
      lt.b = this._sx * this.scale.x;
      lt.c = this._cy * this.scale.y;
      lt.d = this._sy * this.scale.y;

      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
    }

    /**
     * Updates the values of the object and applies the parent's transform.
     *
     * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
     */

  }, {
    key: 'updateTransform',
    value: function updateTransform(parentTransform) {
      var lt = this.localTransform;

      lt.a = this._cx * this.scale.x;
      lt.b = this._sx * this.scale.x;
      lt.c = this._cy * this.scale.y;
      lt.d = this._sy * this.scale.y;

      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);

      // concat the parent matrix with the objects transform.
      var pt = parentTransform.worldTransform;
      var wt = this.worldTransform;

      wt.a = lt.a * pt.a + lt.b * pt.c;
      wt.b = lt.a * pt.b + lt.b * pt.d;
      wt.c = lt.c * pt.a + lt.d * pt.c;
      wt.d = lt.c * pt.b + lt.d * pt.d;
      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

      this._worldID++;
    }

    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param {PIXI.Matrix} matrix - The matrix to decompose
     */

  }, {
    key: 'setFromMatrix',
    value: function setFromMatrix(matrix) {
      matrix.decompose(this);
    }

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */

  }, {
    key: 'rotation',
    get: function get() {
      return this._rotation;
    },
    set: function set(value) // eslint-disable-line require-jsdoc
    {
      this._rotation = value;
      this.updateSkew();
    }
  }]);

  return Transform;
}(__WEBPACK_IMPORTED_MODULE_1__TransformBase__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Transform);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseTexture__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer(1024, 1024, { view: canvas, ratio: 1 });
 * let baseRenderTexture = new PIXI.BaseRenderTexture(renderer, 800, 600);
 * let sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * baseRenderTexture.render(sprite);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let baseRenderTexture = new PIXI.BaseRenderTexture(100, 100);
 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */

var BaseRenderTexture = function (_BaseTexture) {
  _inherits(BaseRenderTexture, _BaseTexture);

  /**
   * @param {number} [width=100] - The width of the base render texture
   * @param {number} [height=100] - The height of the base render texture
   * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
   * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
   */
  function BaseRenderTexture() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var scaleMode = arguments[2];
    var resolution = arguments[3];

    _classCallCheck(this, BaseRenderTexture);

    var _this = _possibleConstructorReturn(this, (BaseRenderTexture.__proto__ || Object.getPrototypeOf(BaseRenderTexture)).call(this, null, scaleMode));

    _this.resolution = resolution || __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].RESOLUTION;

    _this.width = Math.ceil(width);
    _this.height = Math.ceil(height);

    _this.realWidth = _this.width * _this.resolution;
    _this.realHeight = _this.height * _this.resolution;

    _this.scaleMode = scaleMode !== undefined ? scaleMode : __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].SCALE_MODE;
    _this.hasLoaded = true;

    /**
     * A map of renderer IDs to webgl renderTargets
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._glRenderTargets = {};

    /**
     * A reference to the canvas render target (we only need one as this can be shared across renderers)
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._canvasRenderTarget = null;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    _this.valid = false;
    return _this;
  }

  /**
   * Resizes the BaseRenderTexture.
   *
   * @param {number} width - The width to resize to.
   * @param {number} height - The height to resize to.
   */


  _createClass(BaseRenderTexture, [{
    key: 'resize',
    value: function resize(width, height) {
      width = Math.ceil(width);
      height = Math.ceil(height);

      if (width === this.width && height === this.height) {
        return;
      }

      this.valid = width > 0 && height > 0;

      this.width = width;
      this.height = height;

      this.realWidth = this.width * this.resolution;
      this.realHeight = this.height * this.resolution;

      if (!this.valid) {
        return;
      }

      this.emit('update', this);
    }

    /**
     * Destroys this texture
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      _get(BaseRenderTexture.prototype.__proto__ || Object.getPrototypeOf(BaseRenderTexture.prototype), 'destroy', this).call(this, true);
      this.renderer = null;
    }
  }]);

  return BaseRenderTexture;
}(__WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (BaseRenderTexture);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = determineCrossOrigin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url__);


var tempAnchor = void 0;

/**
 * Sets the `crossOrigin` property for this resource based on if the url
 * for this resource is cross-origin. If crossOrigin was manually set, this
 * function does nothing.
 * Nipped from the resource loader!
 *
 * @ignore
 * @param {string} url - The url to test.
 * @param {object} [loc=window.location] - The location object to test against.
 * @return {string} The crossOrigin value to use (or empty string for none).
 */
function determineCrossOrigin(url) {
    var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;

    // data: and javascript: urls are considered same-origin
    if (url.indexOf('data:') === 0) {
        return '';
    }

    // default is window.location
    loc = loc || window.location;

    if (!tempAnchor) {
        tempAnchor = document.createElement('a');
    }

    // let the browser determine the full href for the url of this resource and then
    // parse with the node url lib, we can't use the properties of the anchor element
    // because they don't work in IE9 :(
    tempAnchor.href = url;
    url = __WEBPACK_IMPORTED_MODULE_0_url___default.a.parse(tempAnchor.href);

    var samePort = !url.port && loc.port === '' || url.port === loc.port;

    // if cross origin
    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
        return 'anonymous';
    }

    return '';
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var punycode = __webpack_require__(86);
var util = __webpack_require__(88);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,


// Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


// RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),

// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,

// protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},

// protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},

// protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = __webpack_require__(89);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === 'undefined' ? 'undefined' : _typeof(url)));
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift())) {}
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseTexture__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticker__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_determineCrossOrigin__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * A texture of a [playing] Video.
 *
 * Video base textures mimic PixiJS BaseTexture.from.... method in their creation process.
 *
 * This can be used in several ways, such as:
 *
 * ```js
 * let texture = PIXI.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
 *
 * let texture = PIXI.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
 *
 * let texture = PIXI.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
 *
 * let texture = PIXI.VideoBaseTexture.fromUrls([
 *     { src: '/video.webm', mime: 'video/webm' },
 *     { src: '/video.mp4', mime: 'video/mp4' }
 * ]);
 * ```
 *
 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */

var VideoBaseTexture = function (_BaseTexture) {
    _inherits(VideoBaseTexture, _BaseTexture);

    /**
     * @param {HTMLVideoElement} source - Video source
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     */
    function VideoBaseTexture(source, scaleMode) {
        _classCallCheck(this, VideoBaseTexture);

        if (!source) {
            throw new Error('No video source element specified.');
        }

        // hook in here to check if video is already available.
        // BaseTexture looks for a source.complete boolean, plus width & height.

        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
            source.complete = true;
        }

        var _this = _possibleConstructorReturn(this, (VideoBaseTexture.__proto__ || Object.getPrototypeOf(VideoBaseTexture)).call(this, source, scaleMode));

        _this.width = source.videoWidth;
        _this.height = source.videoHeight;

        _this._autoUpdate = true;
        _this._isAutoUpdating = false;

        /**
         * When set to true will automatically play videos used by this texture once
         * they are loaded. If false, it will not modify the playing state.
         *
         * @member {boolean}
         * @default true
         */
        _this.autoPlay = true;

        _this.update = _this.update.bind(_this);
        _this._onCanPlay = _this._onCanPlay.bind(_this);

        source.addEventListener('play', _this._onPlayStart.bind(_this));
        source.addEventListener('pause', _this._onPlayStop.bind(_this));
        _this.hasLoaded = false;
        _this.__loaded = false;

        if (!_this._isSourceReady()) {
            source.addEventListener('canplay', _this._onCanPlay);
            source.addEventListener('canplaythrough', _this._onCanPlay);
        } else {
            _this._onCanPlay();
        }
        return _this;
    }

    /**
     * Returns true if the underlying source is playing.
     *
     * @private
     * @return {boolean} True if playing.
     */


    _createClass(VideoBaseTexture, [{
        key: '_isSourcePlaying',
        value: function _isSourcePlaying() {
            var source = this.source;

            return source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2;
        }

        /**
         * Returns true if the underlying source is ready for playing.
         *
         * @private
         * @return {boolean} True if ready.
         */

    }, {
        key: '_isSourceReady',
        value: function _isSourceReady() {
            return this.source.readyState === 3 || this.source.readyState === 4;
        }

        /**
         * Runs the update loop when the video is ready to play
         *
         * @private
         */

    }, {
        key: '_onPlayStart',
        value: function _onPlayStart() {
            // Just in case the video has not received its can play even yet..
            if (!this.hasLoaded) {
                this._onCanPlay();
            }

            if (!this._isAutoUpdating && this.autoUpdate) {
                __WEBPACK_IMPORTED_MODULE_2__ticker__["shared"].add(this.update, this, __WEBPACK_IMPORTED_MODULE_3__const__["i" /* UPDATE_PRIORITY */].HIGH);
                this._isAutoUpdating = true;
            }
        }

        /**
         * Fired when a pause event is triggered, stops the update loop
         *
         * @private
         */

    }, {
        key: '_onPlayStop',
        value: function _onPlayStop() {
            if (this._isAutoUpdating) {
                __WEBPACK_IMPORTED_MODULE_2__ticker__["shared"].remove(this.update, this);
                this._isAutoUpdating = false;
            }
        }

        /**
         * Fired when the video is loaded and ready to play
         *
         * @private
         */

    }, {
        key: '_onCanPlay',
        value: function _onCanPlay() {
            this.hasLoaded = true;

            if (this.source) {
                this.source.removeEventListener('canplay', this._onCanPlay);
                this.source.removeEventListener('canplaythrough', this._onCanPlay);

                this.width = this.source.videoWidth;
                this.height = this.source.videoHeight;

                // prevent multiple loaded dispatches..
                if (!this.__loaded) {
                    this.__loaded = true;
                    this.emit('loaded', this);
                }

                if (this._isSourcePlaying()) {
                    this._onPlayStart();
                } else if (this.autoPlay) {
                    this.source.play();
                }
            }
        }

        /**
         * Destroys this texture
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (this._isAutoUpdating) {
                __WEBPACK_IMPORTED_MODULE_2__ticker__["shared"].remove(this.update, this);
            }

            if (this.source && this.source._pixiId) {
                __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].removeFromCache(this.source._pixiId);
                delete this.source._pixiId;

                this.source.pause();
                this.source.src = '';
                this.source.load();
            }

            _get(VideoBaseTexture.prototype.__proto__ || Object.getPrototypeOf(VideoBaseTexture.prototype), 'destroy', this).call(this);
        }

        /**
         * Mimic PixiJS BaseTexture.from.... method.
         *
         * @static
         * @param {HTMLVideoElement} video - Video to create texture from
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @return {PIXI.VideoBaseTexture} Newly created VideoBaseTexture
         */

    }, {
        key: 'autoUpdate',


        /**
         * Should the base texture automatically update itself, set to true by default
         *
         * @member {boolean}
         */
        get: function get() {
            return this._autoUpdate;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (value !== this._autoUpdate) {
                this._autoUpdate = value;

                if (!this._autoUpdate && this._isAutoUpdating) {
                    __WEBPACK_IMPORTED_MODULE_2__ticker__["shared"].remove(this.update, this);
                    this._isAutoUpdating = false;
                } else if (this._autoUpdate && !this._isAutoUpdating) {
                    __WEBPACK_IMPORTED_MODULE_2__ticker__["shared"].add(this.update, this, __WEBPACK_IMPORTED_MODULE_3__const__["i" /* UPDATE_PRIORITY */].HIGH);
                    this._isAutoUpdating = true;
                }
            }
        }
    }], [{
        key: 'fromVideo',
        value: function fromVideo(video, scaleMode) {
            if (!video._pixiId) {
                video._pixiId = 'video_' + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["uid"])();
            }

            var baseTexture = __WEBPACK_IMPORTED_MODULE_1__utils__["BaseTextureCache"][video._pixiId];

            if (!baseTexture) {
                baseTexture = new VideoBaseTexture(video, scaleMode);
                __WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */].addToCache(baseTexture, video._pixiId);
            }

            return baseTexture;
        }

        /**
         * Helper function that creates a new BaseTexture based on the given video element.
         * This BaseTexture can then be used to create a texture
         *
         * @static
         * @param {string|object|string[]|object[]} videoSrc - The URL(s) for the video.
         * @param {string} [videoSrc.src] - One of the source urls for the video
         * @param {string} [videoSrc.mime] - The mimetype of the video (e.g. 'video/mp4'). If not specified
         *  the url's extension will be used as the second part of the mime type.
         * @param {number} scaleMode - See {@link PIXI.SCALE_MODES} for possible values
         * @param {boolean} [crossorigin=(auto)] - Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
         * @return {PIXI.VideoBaseTexture} Newly created VideoBaseTexture
         */

    }, {
        key: 'fromUrl',
        value: function fromUrl(videoSrc, scaleMode, crossorigin) {
            var video = document.createElement('video');

            video.setAttribute('webkit-playsinline', '');
            video.setAttribute('playsinline', '');

            var url = Array.isArray(videoSrc) ? videoSrc[0].src || videoSrc[0] : videoSrc.src || videoSrc;

            if (crossorigin === undefined && url.indexOf('data:') !== 0) {
                video.crossOrigin = Object(__WEBPACK_IMPORTED_MODULE_4__utils_determineCrossOrigin__["a" /* default */])(url);
            } else if (crossorigin) {
                video.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
            }

            // array of objects or strings
            if (Array.isArray(videoSrc)) {
                for (var i = 0; i < videoSrc.length; ++i) {
                    video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
                }
            }
            // single object or string
            else {
                    video.appendChild(createSource(url, videoSrc.mime));
                }

            video.load();

            return VideoBaseTexture.fromVideo(video, scaleMode);
        }
    }]);

    return VideoBaseTexture;
}(__WEBPACK_IMPORTED_MODULE_0__BaseTexture__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (VideoBaseTexture);


VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

function createSource(path, type) {
    if (!type) {
        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
    }

    var source = document.createElement('source');

    source.src = path;
    source.type = type;

    return source;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__ = __webpack_require__(24);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * A standard object to store the Uvs of a texture
 *
 * @class
 * @private
 * @memberof PIXI
 */

var TextureUvs = function () {
    /**
     *
     */
    function TextureUvs() {
        _classCallCheck(this, TextureUvs);

        this.x0 = 0;
        this.y0 = 0;

        this.x1 = 1;
        this.y1 = 0;

        this.x2 = 1;
        this.y2 = 1;

        this.x3 = 0;
        this.y3 = 1;

        this.uvsUint32 = new Uint32Array(4);
    }

    /**
     * Sets the texture Uvs based on the given frame information.
     *
     * @private
     * @param {PIXI.Rectangle} frame - The frame of the texture
     * @param {PIXI.Rectangle} baseFrame - The base frame of the texture
     * @param {number} rotate - Rotation of frame, see {@link PIXI.GroupD8}
     */


    _createClass(TextureUvs, [{
        key: 'set',
        value: function set(frame, baseFrame, rotate) {
            var tw = baseFrame.width;
            var th = baseFrame.height;

            if (rotate) {
                // width and height div 2 div baseFrame size
                var w2 = frame.width / 2 / tw;
                var h2 = frame.height / 2 / th;

                // coordinates of center
                var cX = frame.x / tw + w2;
                var cY = frame.y / th + h2;

                rotate = __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].add(rotate, __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].NW); // NW is top-left corner
                this.x0 = cX + w2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uX(rotate);
                this.y0 = cY + h2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uY(rotate);

                rotate = __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].add(rotate, 2); // rotate 90 degrees clockwise
                this.x1 = cX + w2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uX(rotate);
                this.y1 = cY + h2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uY(rotate);

                rotate = __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].add(rotate, 2);
                this.x2 = cX + w2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uX(rotate);
                this.y2 = cY + h2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uY(rotate);

                rotate = __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].add(rotate, 2);
                this.x3 = cX + w2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uX(rotate);
                this.y3 = cY + h2 * __WEBPACK_IMPORTED_MODULE_0__math_GroupD8__["a" /* default */].uY(rotate);
            } else {
                this.x0 = frame.x / tw;
                this.y0 = frame.y / th;

                this.x1 = (frame.x + frame.width) / tw;
                this.y1 = frame.y / th;

                this.x2 = (frame.x + frame.width) / tw;
                this.y2 = (frame.y + frame.height) / th;

                this.x3 = frame.x / tw;
                this.y3 = (frame.y + frame.height) / th;
            }

            this.uvsUint32[0] = (this.y0 * 65535 & 0xFFFF) << 16 | this.x0 * 65535 & 0xFFFF;
            this.uvsUint32[1] = (this.y1 * 65535 & 0xFFFF) << 16 | this.x1 * 65535 & 0xFFFF;
            this.uvsUint32[2] = (this.y2 * 65535 & 0xFFFF) << 16 | this.x2 * 65535 & 0xFFFF;
            this.uvsUint32[3] = (this.y3 * 65535 & 0xFFFF) << 16 | this.x3 * 65535 & 0xFFFF;
        }
    }]);

    return TextureUvs;
}();

/* harmony default export */ __webpack_exports__["a"] = (TextureUvs);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Creates a Canvas element of the given size.
 *
 * @class
 * @memberof PIXI
 */

var CanvasRenderTarget = function () {
  /**
   * @param {number} width - the width for the newly created canvas
   * @param {number} height - the height for the newly created canvas
   * @param {number} [resolution=1] - The resolution / device pixel ratio of the canvas
   */
  function CanvasRenderTarget(width, height, resolution) {
    _classCallCheck(this, CanvasRenderTarget);

    /**
     * The Canvas object that belongs to this CanvasRenderTarget.
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');

    this.resolution = resolution || __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].RESOLUTION;

    this.resize(width, height);
  }

  /**
   * Clears the canvas that was created by the CanvasRenderTarget class.
   *
   * @private
   */


  _createClass(CanvasRenderTarget, [{
    key: 'clear',
    value: function clear() {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Resizes the canvas to the specified width and height.
     *
     * @param {number} width - the new width of the canvas
     * @param {number} height - the new height of the canvas
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.canvas.width = width * this.resolution;
      this.canvas.height = height * this.resolution;
    }

    /**
     * Destroys this canvas.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.context = null;
      this.canvas = null;
    }

    /**
     * The width of the canvas buffer in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this.canvas.width;
    },
    set: function set(val) // eslint-disable-line require-jsdoc
    {
      this.canvas.width = val;
    }

    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this.canvas.height;
    },
    set: function set(val) // eslint-disable-line require-jsdoc
    {
      this.canvas.height = val;
    }
  }]);

  return CanvasRenderTarget;
}();

/* harmony default export */ __webpack_exports__["a"] = (CanvasRenderTarget);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canUseNewCanvasBlendModes;
/**
 * Creates a little colored canvas
 *
 * @ignore
 * @param {string} color - The color to make the canvas
 * @return {canvas} a small canvas element
 */
function createColoredCanvas(color) {
    var canvas = document.createElement('canvas');

    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');

    context.fillStyle = color;
    context.fillRect(0, 0, 6, 1);

    return canvas;
}

/**
 * Checks whether the Canvas BlendModes are supported by the current browser
 *
 * @return {boolean} whether they are supported
 */
function canUseNewCanvasBlendModes() {
    if (typeof document === 'undefined') {
        return false;
    }

    var magenta = createColoredCanvas('#ff00ff');
    var yellow = createColoredCanvas('#ffff00');

    var canvas = document.createElement('canvas');

    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');

    context.globalCompositeOperation = 'multiply';
    context.drawImage(magenta, 0, 0);
    context.drawImage(yellow, 2, 0);

    var imageData = context.getImageData(2, 0, 1, 1);

    if (!imageData) {
        return false;
    }

    var data = imageData.data;

    return data[0] === 255 && data[1] === 0 && data[2] === 0;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var gl = {
    createContext: __webpack_require__(95),
    setVertexAttribArrays: __webpack_require__(38),
    GLBuffer: __webpack_require__(96),
    GLFramebuffer: __webpack_require__(97),
    GLShader: __webpack_require__(98),
    GLTexture: __webpack_require__(39),
    VertexArrayObject: __webpack_require__(99),
    shader: __webpack_require__(100)
};

// Export for Node-compatible environments
if (typeof module !== 'undefined' && module.exports) {
    // Export the module
    module.exports = gl;
}

// Add to the browser window pixi.gl
if (typeof window !== 'undefined') {
    // add the window object
    window.PIXI = window.PIXI || {};
    window.PIXI.glCore = gl;
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// var GL_MAP = {};

/**
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param attribs {*}
 * @param state {*}
 */
var setVertexAttribArrays = function setVertexAttribArrays(gl, attribs, state) {
    var i;
    if (state) {
        var tempAttribState = state.tempAttribState,
            attribState = state.attribState;

        for (i = 0; i < tempAttribState.length; i++) {
            tempAttribState[i] = false;
        }

        // set the new attribs
        for (i = 0; i < attribs.length; i++) {
            tempAttribState[attribs[i].attribute.location] = true;
        }

        for (i = 0; i < attribState.length; i++) {
            if (attribState[i] !== tempAttribState[i]) {
                attribState[i] = tempAttribState[i];

                if (state.attribState[i]) {
                    gl.enableVertexAttribArray(i);
                } else {
                    gl.disableVertexAttribArray(i);
                }
            }
        }
    } else {
        for (i = 0; i < attribs.length; i++) {
            var attrib = attribs[i];
            gl.enableVertexAttribArray(attrib.attribute.location);
        }
    }
};

module.exports = setVertexAttribArrays;

/***/ }),
/* 39 */
/***/ (function(module, exports) {


/**
 * Helper class to create a WebGL Texture
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param width {number} the width of the texture
 * @param height {number} the height of the texture
 * @param format {number} the pixel format of the texture. defaults to gl.RGBA
 * @param type {number} the gl type of the texture. defaults to gl.UNSIGNED_BYTE
 */
var Texture = function Texture(gl, width, height, format, type) {
	/**
  * The current WebGL rendering context
  *
  * @member {WebGLRenderingContext}
  */
	this.gl = gl;

	/**
  * The WebGL texture
  *
  * @member {WebGLTexture}
  */
	this.texture = gl.createTexture();

	/**
  * If mipmapping was used for this texture, enable and disable with enableMipmap()
  *
  * @member {Boolean}
  */
	// some settings..
	this.mipmap = false;

	/**
  * Set to true to enable pre-multiplied alpha
  *
  * @member {Boolean}
  */
	this.premultiplyAlpha = false;

	/**
  * The width of texture
  *
  * @member {Number}
  */
	this.width = width || -1;
	/**
  * The height of texture
  *
  * @member {Number}
  */
	this.height = height || -1;

	/**
  * The pixel format of the texture. defaults to gl.RGBA
  *
  * @member {Number}
  */
	this.format = format || gl.RGBA;

	/**
  * The gl type of the texture. defaults to gl.UNSIGNED_BYTE
  *
  * @member {Number}
  */
	this.type = type || gl.UNSIGNED_BYTE;
};

/**
 * Uploads this texture to the GPU
 * @param source {HTMLImageElement|ImageData|HTMLVideoElement} the source image of the texture
 */
Texture.prototype.upload = function (source) {
	this.bind();

	var gl = this.gl;

	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

	var newWidth = source.videoWidth || source.width;
	var newHeight = source.videoHeight || source.height;

	if (newHeight !== this.height || newWidth !== this.width) {
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
	} else {
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
	}

	// if the source is a video, we need to use the videoWidth / videoHeight properties as width / height will be incorrect.
	this.width = newWidth;
	this.height = newHeight;
};

var FLOATING_POINT_AVAILABLE = false;

/**
 * Use a data source and uploads this texture to the GPU
 * @param data {TypedArray} the data to upload to the texture
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
Texture.prototype.uploadData = function (data, width, height) {
	this.bind();

	var gl = this.gl;

	if (data instanceof Float32Array) {
		if (!FLOATING_POINT_AVAILABLE) {
			var ext = gl.getExtension("OES_texture_float");

			if (ext) {
				FLOATING_POINT_AVAILABLE = true;
			} else {
				throw new Error('floating point textures not available');
			}
		}

		this.type = gl.FLOAT;
	} else {
		// TODO support for other types
		this.type = this.type || gl.UNSIGNED_BYTE;
	}

	// what type of data?
	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

	if (width !== this.width || height !== this.height) {
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, data || null);
	} else {
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, this.format, this.type, data || null);
	}

	this.width = width;
	this.height = height;

	//	texSubImage2D
};

/**
 * Binds the texture
 * @param  location
 */
Texture.prototype.bind = function (location) {
	var gl = this.gl;

	if (location !== undefined) {
		gl.activeTexture(gl.TEXTURE0 + location);
	}

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
};

/**
 * Unbinds the texture
 */
Texture.prototype.unbind = function () {
	var gl = this.gl;
	gl.bindTexture(gl.TEXTURE_2D, null);
};

/**
 * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
 */
Texture.prototype.minFilter = function (linear) {
	var gl = this.gl;

	this.bind();

	if (this.mipmap) {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	}
};

/**
 * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
 */
Texture.prototype.magFilter = function (linear) {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
};

/**
 * Enables mipmapping
 */
Texture.prototype.enableMipmap = function () {
	var gl = this.gl;

	this.bind();

	this.mipmap = true;

	gl.generateMipmap(gl.TEXTURE_2D);
};

/**
 * Enables linear filtering
 */
Texture.prototype.enableLinearScaling = function () {
	this.minFilter(true);
	this.magFilter(true);
};

/**
 * Enables nearest neighbour interpolation
 */
Texture.prototype.enableNearestScaling = function () {
	this.minFilter(false);
	this.magFilter(false);
};

/**
 * Enables clamping on the texture so WebGL will not repeat it
 */
Texture.prototype.enableWrapClamp = function () {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
};

/**
 * Enable tiling on the texture
 */
Texture.prototype.enableWrapRepeat = function () {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
};

Texture.prototype.enableWrapMirrorRepeat = function () {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
};

/**
 * Destroys this texture
 */
Texture.prototype.destroy = function () {
	var gl = this.gl;
	//TODO
	gl.deleteTexture(this.texture);
};

/**
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param source {HTMLImageElement|ImageData} the source image of the texture
 * @param premultiplyAlpha {Boolean} If we want to use pre-multiplied alpha
 */
Texture.fromSource = function (gl, source, premultiplyAlpha) {
	var texture = new Texture(gl);
	texture.premultiplyAlpha = premultiplyAlpha || false;
	texture.upload(source);

	return texture;
};

/**
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param data {TypedArray} the data to upload to the texture
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
Texture.fromData = function (gl, data, width, height) {
	//console.log(data, width, height);
	var texture = new Texture(gl);
	texture.uploadData(data, width, height);

	return texture;
};

module.exports = Texture;

/***/ }),
/* 40 */
/***/ (function(module, exports) {


/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param attributeLocations {Object} An attribute location map that lets you manually set the attribute locations
 * @return {WebGLProgram} the shader program
 */
var compileProgram = function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations) {
    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);

    // optionally, set the attributes manually for the program rather than letting WebGL decide..
    if (attributeLocations) {
        for (var i in attributeLocations) {
            gl.bindAttribLocation(program, attributeLocations[i], i);
        }
    }

    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '') {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return program;
};

/**
 * @private
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param type {Number} the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @return {WebGLShader} the shader
 */
var compileShader = function compileShader(gl, type, src) {
    var shader = gl.createShader(type);

    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

module.exports = compileProgram;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


var mapType = __webpack_require__(18);
var mapSize = __webpack_require__(42);

/**
 * Extracts the attributes
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the attributes from
 * @return attributes {Object}
 */
var extractAttributes = function extractAttributes(gl, program) {
    var attributes = {};

    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < totalAttributes; i++) {
        var attribData = gl.getActiveAttrib(program, i);
        var type = mapType(gl, attribData.type);

        attributes[attribData.name] = {
            type: type,
            size: mapSize(type),
            location: gl.getAttribLocation(program, attribData.name),
            //TODO - make an attribute object
            pointer: pointer
        };
    }

    return attributes;
};

var pointer = function pointer(type, normalized, stride, start) {
    // console.log(this.location)
    gl.vertexAttribPointer(this.location, this.size, type || gl.FLOAT, normalized || false, stride || 0, start || 0);
};

module.exports = extractAttributes;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param type {String}
 * @return {Number}
 */
var mapSize = function mapSize(type) {
    return GLSL_TO_SIZE[type];
};

var GLSL_TO_SIZE = {
    'float': 1,
    'vec2': 2,
    'vec3': 3,
    'vec4': 4,

    'int': 1,
    'ivec2': 2,
    'ivec3': 3,
    'ivec4': 4,

    'bool': 1,
    'bvec2': 2,
    'bvec3': 3,
    'bvec4': 4,

    'mat2': 4,
    'mat3': 9,
    'mat4': 16,

    'sampler2D': 1
};

module.exports = mapSize;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var mapType = __webpack_require__(18);
var defaultValue = __webpack_require__(44);

/**
 * Extracts the uniforms
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the uniforms from
 * @return uniforms {Object}
 */
var extractUniforms = function extractUniforms(gl, program) {
  var uniforms = {};

  var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

  for (var i = 0; i < totalUniforms; i++) {
    var uniformData = gl.getActiveUniform(program, i);
    var name = uniformData.name.replace(/\[.*?\]/, "");
    var type = mapType(gl, uniformData.type);

    uniforms[name] = {
      type: type,
      size: uniformData.size,
      location: gl.getUniformLocation(program, name),
      value: defaultValue(type, uniformData.size)
    };
  }

  return uniforms;
};

module.exports = extractUniforms;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param type {String} Type of value
 * @param size {Number}
 */
var defaultValue = function defaultValue(type, size) {
    switch (type) {
        case 'float':
            return 0;

        case 'vec2':
            return new Float32Array(2 * size);

        case 'vec3':
            return new Float32Array(3 * size);

        case 'vec4':
            return new Float32Array(4 * size);

        case 'int':
        case 'sampler2D':
            return 0;

        case 'ivec2':
            return new Int32Array(2 * size);

        case 'ivec3':
            return new Int32Array(3 * size);

        case 'ivec4':
            return new Int32Array(4 * size);

        case 'bool':
            return false;

        case 'bvec2':

            return booleanArray(2 * size);

        case 'bvec3':
            return booleanArray(3 * size);

        case 'bvec4':
            return booleanArray(4 * size);

        case 'mat2':
            return new Float32Array([1, 0, 0, 1]);

        case 'mat3':
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

        case 'mat4':
            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
};

var booleanArray = function booleanArray(size) {
    var array = new Array(size);

    for (var i = 0; i < array.length; i++) {
        array[i] = false;
    }

    return array;
};

module.exports = defaultValue;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Sets the float precision on the shader. If the precision is already present this function will do nothing
 * @param {string} src       the shader source
 * @param {string} precision The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 *
 * @return {string} modified shader source
 */
var setPrecision = function setPrecision(src, precision) {
    if (src.substring(0, 9) !== 'precision') {
        return 'precision ' + precision + ' float;\n' + src;
    }

    return src;
};

module.exports = setPrecision;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Extracts the attributes
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param uniforms {Array} @mat ?
 * @return attributes {Object}
 */
var generateUniformAccessObject = function generateUniformAccessObject(gl, uniformData) {
    // this is the object we will be sending back.
    // an object hierachy will be created for structs
    var uniforms = { data: {} };

    uniforms.gl = gl;

    var uniformKeys = Object.keys(uniformData);

    for (var i = 0; i < uniformKeys.length; i++) {
        var fullName = uniformKeys[i];

        var nameTokens = fullName.split('.');
        var name = nameTokens[nameTokens.length - 1];

        var uniformGroup = getUniformGroup(nameTokens, uniforms);

        var uniform = uniformData[fullName];
        uniformGroup.data[name] = uniform;

        uniformGroup.gl = gl;

        Object.defineProperty(uniformGroup, name, {
            get: generateGetter(name),
            set: generateSetter(name, uniform)
        });
    }

    return uniforms;
};

var generateGetter = function generateGetter(name) {
    return function () {
        return this.data[name].value;
    };
};

var GLSL_SINGLE_SETTERS = {
    float: function setSingleFloat(gl, location, value) {
        gl.uniform1f(location, value);
    },
    vec2: function setSingleVec2(gl, location, value) {
        gl.uniform2f(location, value[0], value[1]);
    },
    vec3: function setSingleVec3(gl, location, value) {
        gl.uniform3f(location, value[0], value[1], value[2]);
    },
    vec4: function setSingleVec4(gl, location, value) {
        gl.uniform4f(location, value[0], value[1], value[2], value[3]);
    },

    int: function setSingleInt(gl, location, value) {
        gl.uniform1i(location, value);
    },
    ivec2: function setSingleIvec2(gl, location, value) {
        gl.uniform2i(location, value[0], value[1]);
    },
    ivec3: function setSingleIvec3(gl, location, value) {
        gl.uniform3i(location, value[0], value[1], value[2]);
    },
    ivec4: function setSingleIvec4(gl, location, value) {
        gl.uniform4i(location, value[0], value[1], value[2], value[3]);
    },

    bool: function setSingleBool(gl, location, value) {
        gl.uniform1i(location, value);
    },
    bvec2: function setSingleBvec2(gl, location, value) {
        gl.uniform2i(location, value[0], value[1]);
    },
    bvec3: function setSingleBvec3(gl, location, value) {
        gl.uniform3i(location, value[0], value[1], value[2]);
    },
    bvec4: function setSingleBvec4(gl, location, value) {
        gl.uniform4i(location, value[0], value[1], value[2], value[3]);
    },

    mat2: function setSingleMat2(gl, location, value) {
        gl.uniformMatrix2fv(location, false, value);
    },
    mat3: function setSingleMat3(gl, location, value) {
        gl.uniformMatrix3fv(location, false, value);
    },
    mat4: function setSingleMat4(gl, location, value) {
        gl.uniformMatrix4fv(location, false, value);
    },

    sampler2D: function setSingleSampler2D(gl, location, value) {
        gl.uniform1i(location, value);
    }
};

var GLSL_ARRAY_SETTERS = {
    float: function setFloatArray(gl, location, value) {
        gl.uniform1fv(location, value);
    },
    vec2: function setVec2Array(gl, location, value) {
        gl.uniform2fv(location, value);
    },
    vec3: function setVec3Array(gl, location, value) {
        gl.uniform3fv(location, value);
    },
    vec4: function setVec4Array(gl, location, value) {
        gl.uniform4fv(location, value);
    },
    int: function setIntArray(gl, location, value) {
        gl.uniform1iv(location, value);
    },
    ivec2: function setIvec2Array(gl, location, value) {
        gl.uniform2iv(location, value);
    },
    ivec3: function setIvec3Array(gl, location, value) {
        gl.uniform3iv(location, value);
    },
    ivec4: function setIvec4Array(gl, location, value) {
        gl.uniform4iv(location, value);
    },
    bool: function setBoolArray(gl, location, value) {
        gl.uniform1iv(location, value);
    },
    bvec2: function setBvec2Array(gl, location, value) {
        gl.uniform2iv(location, value);
    },
    bvec3: function setBvec3Array(gl, location, value) {
        gl.uniform3iv(location, value);
    },
    bvec4: function setBvec4Array(gl, location, value) {
        gl.uniform4iv(location, value);
    },
    sampler2D: function setSampler2DArray(gl, location, value) {
        gl.uniform1iv(location, value);
    }
};

function generateSetter(name, uniform) {
    return function (value) {
        this.data[name].value = value;
        var location = this.data[name].location;
        if (uniform.size === 1) {
            GLSL_SINGLE_SETTERS[uniform.type](this.gl, location, value);
        } else {
            // glslSetArray(gl, location, type, value) {
            GLSL_ARRAY_SETTERS[uniform.type](this.gl, location, value);
        }
    };
}

function getUniformGroup(nameTokens, uniform) {
    var cur = uniform;

    for (var i = 0; i < nameTokens.length - 1; i++) {
        var o = cur[nameTokens[i]] || { data: {} };
        cur[nameTokens[i]] = o;
        cur = o;
    }

    return cur;
}

module.exports = generateUniformAccessObject;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// disabling eslint for now, going to rewrite this in v5
/* eslint-disable */




var defaultStyle = {
    align: 'left',
    breakWords: false,
    dropShadow: false,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: 'black',
    dropShadowDistance: 5,
    fill: 'black',
    fillGradientType: __WEBPACK_IMPORTED_MODULE_0__const__["g" /* TEXT_GRADIENT */].LINEAR_VERTICAL,
    fillGradientStops: [],
    fontFamily: 'Arial',
    fontSize: 26,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: 'miter',
    miterLimit: 10,
    padding: 0,
    stroke: 'black',
    strokeThickness: 0,
    textBaseline: 'alphabetic',
    trim: false,
    wordWrap: false,
    wordWrapWidth: 100,
    leading: 0
};

/**
 * A TextStyle Object decorates a Text Object. It can be shared between
 * multiple Text objects. Changing the style will update all text objects using it.
 *
 * @class
 * @memberof PIXI
 */

var TextStyle = function () {
    /**
     * @param {object} [style] - The style parameters
     * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center' or 'right'),
     *  does not affect single line text
     * @param {boolean} [style.breakWords=false] - Indicates if lines can be wrapped within words, it
     *  needs wordWrap to be set to true
     * @param {boolean} [style.dropShadow=false] - Set a drop shadow for the text
     * @param {number} [style.dropShadowAlpha=1] - Set alpha for the drop shadow
     * @param {number} [style.dropShadowAngle=Math.PI/6] - Set a angle of the drop shadow
     * @param {number} [style.dropShadowBlur=0] - Set a shadow blur radius
     * @param {string|number} [style.dropShadowColor='black'] - A fill style to be used on the dropshadow e.g 'red', '#00FF00'
     * @param {number} [style.dropShadowDistance=5] - Set a distance of the drop shadow
     * @param {string|string[]|number|number[]|CanvasGradient|CanvasPattern} [style.fill='black'] - A canvas
     *  fillstyle that will be used on the text e.g 'red', '#00FF00'. Can be an array to create a gradient
     *  eg ['#000000','#FFFFFF']
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
     * @param {number} [style.fillGradientType=PIXI.TEXT_GRADIENT.LINEAR_VERTICAL] - If fill is an array of colours
     *  to create a gradient, this can change the type/direction of the gradient. See {@link PIXI.TEXT_GRADIENT}
     * @param {number[]} [style.fillGradientStops] - If fill is an array of colours to create a gradient, this array can set
     * the stop points (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
     * @param {string|string[]} [style.fontFamily='Arial'] - The font family
     * @param {number|string} [style.fontSize=26] - The font size (as a number it converts to px, but as a string,
     *  equivalents are '26px','20pt','160%' or '1.6em')
     * @param {string} [style.fontStyle='normal'] - The font style ('normal', 'italic' or 'oblique')
     * @param {string} [style.fontVariant='normal'] - The font variant ('normal' or 'small-caps')
     * @param {string} [style.fontWeight='normal'] - The font weight ('normal', 'bold', 'bolder', 'lighter' and '100',
     *  '200', '300', '400', '500', '600', '700', 800' or '900')
     * @param {number} [style.leading=0] - The space between lines
     * @param {number} [style.letterSpacing=0] - The amount of spacing between letters, default is 0
     * @param {number} [style.lineHeight] - The line height, a number that represents the vertical space that a letter uses
     * @param {string} [style.lineJoin='miter'] - The lineJoin property sets the type of corner created, it can resolve
     *      spiked text issues. Possible values "miter" (creates a sharp corner), "round" (creates a round corner) or "bevel"
     *      (creates a squared corner).
     * @param {number} [style.miterLimit=10] - The miter limit to use when using the 'miter' lineJoin mode. This can reduce
     *      or increase the spikiness of rendered text.
     * @param {number} [style.padding=0] - Occasionally some fonts are cropped. Adding some padding will prevent this from
     *     happening by adding padding to all sides of the text.
     * @param {string|number} [style.stroke='black'] - A canvas fillstyle that will be used on the text stroke
     *  e.g 'blue', '#FCFF00'
     * @param {number} [style.strokeThickness=0] - A number that represents the thickness of the stroke.
     *  Default is 0 (no stroke)
     * @param {boolean} [style.trim=false] - Trim transparent borders
     * @param {string} [style.textBaseline='alphabetic'] - The baseline of the text that is rendered.
     * @param {boolean} [style.wordWrap=false] - Indicates if word wrap should be used
     * @param {number} [style.wordWrapWidth=100] - The width at which text will wrap, it needs wordWrap to be set to true
     */
    function TextStyle(style) {
        _classCallCheck(this, TextStyle);

        this.styleID = 0;

        this.reset();

        deepCopyProperties(this, style, style);
    }

    /**
     * Creates a new TextStyle object with the same values as this one.
     * Note that the only the properties of the object are cloned.
     *
     * @return {PIXI.TextStyle} New cloned TextStyle object
     */


    _createClass(TextStyle, [{
        key: 'clone',
        value: function clone() {
            var clonedProperties = {};

            deepCopyProperties(clonedProperties, this, defaultStyle);

            return new TextStyle(clonedProperties);
        }

        /**
         * Resets all properties to the defaults specified in TextStyle.prototype._default
         */

    }, {
        key: 'reset',
        value: function reset() {
            deepCopyProperties(this, defaultStyle, defaultStyle);
        }

        /**
         * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
         *
         * @member {string}
         */

    }, {
        key: 'toFontString',


        /**
         * Generates a font style string to use for `TextMetrics.measureFont()`.
         *
         * @return {string} Font style string, for passing to `TextMetrics.measureFont()`
         */
        value: function toFontString() {
            // build canvas api font setting from individual components. Convert a numeric this.fontSize to px
            var fontSizeString = typeof this.fontSize === 'number' ? this.fontSize + 'px' : this.fontSize;

            // Clean-up fontFamily property by quoting each font name
            // this will support font names with spaces
            var fontFamilies = this.fontFamily;

            if (!Array.isArray(this.fontFamily)) {
                fontFamilies = this.fontFamily.split(',');
            }

            for (var i = fontFamilies.length - 1; i >= 0; i--) {
                // Trim any extra white-space
                var fontFamily = fontFamilies[i].trim();

                // Check if font already contains strings
                if (!/([\"\'])[^\'\"]+\1/.test(fontFamily)) {
                    fontFamily = '"' + fontFamily + '"';
                }
                fontFamilies[i] = fontFamily;
            }

            return this.fontStyle + ' ' + this.fontVariant + ' ' + this.fontWeight + ' ' + fontSizeString + ' ' + fontFamilies.join(',');
        }
    }, {
        key: 'align',
        get: function get() {
            return this._align;
        },
        set: function set(align) // eslint-disable-line require-jsdoc
        {
            if (this._align !== align) {
                this._align = align;
                this.styleID++;
            }
        }

        /**
         * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
         *
         * @member {boolean}
         */

    }, {
        key: 'breakWords',
        get: function get() {
            return this._breakWords;
        },
        set: function set(breakWords) // eslint-disable-line require-jsdoc
        {
            if (this._breakWords !== breakWords) {
                this._breakWords = breakWords;
                this.styleID++;
            }
        }

        /**
         * Set a drop shadow for the text
         *
         * @member {boolean}
         */

    }, {
        key: 'dropShadow',
        get: function get() {
            return this._dropShadow;
        },
        set: function set(dropShadow) // eslint-disable-line require-jsdoc
        {
            if (this._dropShadow !== dropShadow) {
                this._dropShadow = dropShadow;
                this.styleID++;
            }
        }

        /**
         * Set alpha for the drop shadow
         *
         * @member {number}
         */

    }, {
        key: 'dropShadowAlpha',
        get: function get() {
            return this._dropShadowAlpha;
        },
        set: function set(dropShadowAlpha) // eslint-disable-line require-jsdoc
        {
            if (this._dropShadowAlpha !== dropShadowAlpha) {
                this._dropShadowAlpha = dropShadowAlpha;
                this.styleID++;
            }
        }

        /**
         * Set a angle of the drop shadow
         *
         * @member {number}
         */

    }, {
        key: 'dropShadowAngle',
        get: function get() {
            return this._dropShadowAngle;
        },
        set: function set(dropShadowAngle) // eslint-disable-line require-jsdoc
        {
            if (this._dropShadowAngle !== dropShadowAngle) {
                this._dropShadowAngle = dropShadowAngle;
                this.styleID++;
            }
        }

        /**
         * Set a shadow blur radius
         *
         * @member {number}
         */

    }, {
        key: 'dropShadowBlur',
        get: function get() {
            return this._dropShadowBlur;
        },
        set: function set(dropShadowBlur) // eslint-disable-line require-jsdoc
        {
            if (this._dropShadowBlur !== dropShadowBlur) {
                this._dropShadowBlur = dropShadowBlur;
                this.styleID++;
            }
        }

        /**
         * A fill style to be used on the dropshadow e.g 'red', '#00FF00'
         *
         * @member {string|number}
         */

    }, {
        key: 'dropShadowColor',
        get: function get() {
            return this._dropShadowColor;
        },
        set: function set(dropShadowColor) // eslint-disable-line require-jsdoc
        {
            var outputColor = getColor(dropShadowColor);
            if (this._dropShadowColor !== outputColor) {
                this._dropShadowColor = outputColor;
                this.styleID++;
            }
        }

        /**
         * Set a distance of the drop shadow
         *
         * @member {number}
         */

    }, {
        key: 'dropShadowDistance',
        get: function get() {
            return this._dropShadowDistance;
        },
        set: function set(dropShadowDistance) // eslint-disable-line require-jsdoc
        {
            if (this._dropShadowDistance !== dropShadowDistance) {
                this._dropShadowDistance = dropShadowDistance;
                this.styleID++;
            }
        }

        /**
         * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
         * Can be an array to create a gradient eg ['#000000','#FFFFFF']
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
         *
         * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */

    }, {
        key: 'fill',
        get: function get() {
            return this._fill;
        },
        set: function set(fill) // eslint-disable-line require-jsdoc
        {
            var outputColor = getColor(fill);
            if (this._fill !== outputColor) {
                this._fill = outputColor;
                this.styleID++;
            }
        }

        /**
         * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
         * See {@link PIXI.TEXT_GRADIENT}
         *
         * @member {number}
         */

    }, {
        key: 'fillGradientType',
        get: function get() {
            return this._fillGradientType;
        },
        set: function set(fillGradientType) // eslint-disable-line require-jsdoc
        {
            if (this._fillGradientType !== fillGradientType) {
                this._fillGradientType = fillGradientType;
                this.styleID++;
            }
        }

        /**
         * If fill is an array of colours to create a gradient, this array can set the stop points
         * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
         *
         * @member {number[]}
         */

    }, {
        key: 'fillGradientStops',
        get: function get() {
            return this._fillGradientStops;
        },
        set: function set(fillGradientStops) // eslint-disable-line require-jsdoc
        {
            if (!areArraysEqual(this._fillGradientStops, fillGradientStops)) {
                this._fillGradientStops = fillGradientStops;
                this.styleID++;
            }
        }

        /**
         * The font family
         *
         * @member {string|string[]}
         */

    }, {
        key: 'fontFamily',
        get: function get() {
            return this._fontFamily;
        },
        set: function set(fontFamily) // eslint-disable-line require-jsdoc
        {
            if (this.fontFamily !== fontFamily) {
                this._fontFamily = fontFamily;
                this.styleID++;
            }
        }

        /**
         * The font size
         * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
         *
         * @member {number|string}
         */

    }, {
        key: 'fontSize',
        get: function get() {
            return this._fontSize;
        },
        set: function set(fontSize) // eslint-disable-line require-jsdoc
        {
            if (this._fontSize !== fontSize) {
                this._fontSize = fontSize;
                this.styleID++;
            }
        }

        /**
         * The font style
         * ('normal', 'italic' or 'oblique')
         *
         * @member {string}
         */

    }, {
        key: 'fontStyle',
        get: function get() {
            return this._fontStyle;
        },
        set: function set(fontStyle) // eslint-disable-line require-jsdoc
        {
            if (this._fontStyle !== fontStyle) {
                this._fontStyle = fontStyle;
                this.styleID++;
            }
        }

        /**
         * The font variant
         * ('normal' or 'small-caps')
         *
         * @member {string}
         */

    }, {
        key: 'fontVariant',
        get: function get() {
            return this._fontVariant;
        },
        set: function set(fontVariant) // eslint-disable-line require-jsdoc
        {
            if (this._fontVariant !== fontVariant) {
                this._fontVariant = fontVariant;
                this.styleID++;
            }
        }

        /**
         * The font weight
         * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
         *
         * @member {string}
         */

    }, {
        key: 'fontWeight',
        get: function get() {
            return this._fontWeight;
        },
        set: function set(fontWeight) // eslint-disable-line require-jsdoc
        {
            if (this._fontWeight !== fontWeight) {
                this._fontWeight = fontWeight;
                this.styleID++;
            }
        }

        /**
         * The amount of spacing between letters, default is 0
         *
         * @member {number}
         */

    }, {
        key: 'letterSpacing',
        get: function get() {
            return this._letterSpacing;
        },
        set: function set(letterSpacing) // eslint-disable-line require-jsdoc
        {
            if (this._letterSpacing !== letterSpacing) {
                this._letterSpacing = letterSpacing;
                this.styleID++;
            }
        }

        /**
         * The line height, a number that represents the vertical space that a letter uses
         *
         * @member {number}
         */

    }, {
        key: 'lineHeight',
        get: function get() {
            return this._lineHeight;
        },
        set: function set(lineHeight) // eslint-disable-line require-jsdoc
        {
            if (this._lineHeight !== lineHeight) {
                this._lineHeight = lineHeight;
                this.styleID++;
            }
        }

        /**
         * The space between lines
         *
         * @member {number}
         */

    }, {
        key: 'leading',
        get: function get() {
            return this._leading;
        },
        set: function set(leading) // eslint-disable-line require-jsdoc
        {
            if (this._leading !== leading) {
                this._leading = leading;
                this.styleID++;
            }
        }

        /**
         * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
         * Default is 'miter' (creates a sharp corner).
         *
         * @member {string}
         */

    }, {
        key: 'lineJoin',
        get: function get() {
            return this._lineJoin;
        },
        set: function set(lineJoin) // eslint-disable-line require-jsdoc
        {
            if (this._lineJoin !== lineJoin) {
                this._lineJoin = lineJoin;
                this.styleID++;
            }
        }

        /**
         * The miter limit to use when using the 'miter' lineJoin mode
         * This can reduce or increase the spikiness of rendered text.
         *
         * @member {number}
         */

    }, {
        key: 'miterLimit',
        get: function get() {
            return this._miterLimit;
        },
        set: function set(miterLimit) // eslint-disable-line require-jsdoc
        {
            if (this._miterLimit !== miterLimit) {
                this._miterLimit = miterLimit;
                this.styleID++;
            }
        }

        /**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         *
         * @member {number}
         */

    }, {
        key: 'padding',
        get: function get() {
            return this._padding;
        },
        set: function set(padding) // eslint-disable-line require-jsdoc
        {
            if (this._padding !== padding) {
                this._padding = padding;
                this.styleID++;
            }
        }

        /**
         * A canvas fillstyle that will be used on the text stroke
         * e.g 'blue', '#FCFF00'
         *
         * @member {string|number}
         */

    }, {
        key: 'stroke',
        get: function get() {
            return this._stroke;
        },
        set: function set(stroke) // eslint-disable-line require-jsdoc
        {
            var outputColor = getColor(stroke);
            if (this._stroke !== outputColor) {
                this._stroke = outputColor;
                this.styleID++;
            }
        }

        /**
         * A number that represents the thickness of the stroke.
         * Default is 0 (no stroke)
         *
         * @member {number}
         */

    }, {
        key: 'strokeThickness',
        get: function get() {
            return this._strokeThickness;
        },
        set: function set(strokeThickness) // eslint-disable-line require-jsdoc
        {
            if (this._strokeThickness !== strokeThickness) {
                this._strokeThickness = strokeThickness;
                this.styleID++;
            }
        }

        /**
         * The baseline of the text that is rendered.
         *
         * @member {string}
         */

    }, {
        key: 'textBaseline',
        get: function get() {
            return this._textBaseline;
        },
        set: function set(textBaseline) // eslint-disable-line require-jsdoc
        {
            if (this._textBaseline !== textBaseline) {
                this._textBaseline = textBaseline;
                this.styleID++;
            }
        }

        /**
         * Trim transparent borders
         *
         * @member {boolean}
         */

    }, {
        key: 'trim',
        get: function get() {
            return this._trim;
        },
        set: function set(trim) // eslint-disable-line require-jsdoc
        {
            if (this._trim !== trim) {
                this._trim = trim;
                this.styleID++;
            }
        }

        /**
         * Indicates if word wrap should be used
         *
         * @member {boolean}
         */

    }, {
        key: 'wordWrap',
        get: function get() {
            return this._wordWrap;
        },
        set: function set(wordWrap) // eslint-disable-line require-jsdoc
        {
            if (this._wordWrap !== wordWrap) {
                this._wordWrap = wordWrap;
                this.styleID++;
            }
        }

        /**
         * The width at which text will wrap, it needs wordWrap to be set to true
         *
         * @member {number}
         */

    }, {
        key: 'wordWrapWidth',
        get: function get() {
            return this._wordWrapWidth;
        },
        set: function set(wordWrapWidth) // eslint-disable-line require-jsdoc
        {
            if (this._wordWrapWidth !== wordWrapWidth) {
                this._wordWrapWidth = wordWrapWidth;
                this.styleID++;
            }
        }
    }]);

    return TextStyle;
}();

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 *
 * @param {number|number[]} color
 * @return {string} The color as a string.
 */


/* harmony default export */ __webpack_exports__["a"] = (TextStyle);
function getSingleColor(color) {
    if (typeof color === 'number') {
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["hex2string"])(color);
    } else if (typeof color === 'string') {
        if (color.indexOf('0x') === 0) {
            color = color.replace('0x', '#');
        }
    }

    return color;
}

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 * This version can also convert array of colors
 *
 * @param {number|number[]} color
 * @return {string} The color as a string.
 */
function getColor(color) {
    if (!Array.isArray(color)) {
        return getSingleColor(color);
    } else {
        for (var i = 0; i < color.length; ++i) {
            color[i] = getSingleColor(color[i]);
        }

        return color;
    }
}

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 * This version can also convert array of colors
 *
 * @param {Array} array1 First array to compare
 * @param {Array} array2 Second array to compare
 * @return {boolean} Do the arrays contain the same values in the same order
 */
function areArraysEqual(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return false;
    }

    if (array1.length !== array2.length) {
        return false;
    }

    for (var i = 0; i < array1.length; ++i) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

/**
 * Utility function to ensure that object properties are copied by value, and not by reference
 *
 * @param {Object} target Target object to copy properties into
 * @param {Object} source Source object for the proporties to copy
 * @param {string} propertyObj Object containing properties names we want to loop over
 */
function deepCopyProperties(target, source, propertyObj) {
    for (var prop in propertyObj) {
        if (Array.isArray(source[prop])) {
            target[prop] = source[prop].slice();
        } else {
            target[prop] = source[prop];
        }
    }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The TextMetrics object represents the measurement of a block of text with a specified style.
 *
 * @class
 * @memberOf PIXI
 */
var TextMetrics = function () {
    /**
     * @param {string} text - the text that was measured
     * @param {PIXI.TextStyle} style - the style that was measured
     * @param {number} width - the measured width of the text
     * @param {number} height - the measured height of the text
     * @param {array} lines - an array of the lines of text broken by new lines and wrapping if specified in style
     * @param {array} lineWidths - an array of the line widths for each line matched to `lines`
     * @param {number} lineHeight - the measured line height for this style
     * @param {number} maxLineWidth - the maximum line width for all measured lines
     * @param {Object} fontProperties - the font properties object from TextMetrics.measureFont
     */
    function TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties) {
        _classCallCheck(this, TextMetrics);

        this.text = text;
        this.style = style;
        this.width = width;
        this.height = height;
        this.lines = lines;
        this.lineWidths = lineWidths;
        this.lineHeight = lineHeight;
        this.maxLineWidth = maxLineWidth;
        this.fontProperties = fontProperties;
    }

    /**
     * Measures the supplied string of text and returns a Rectangle.
     *
     * @param {string} text - the text to measure.
     * @param {PIXI.TextStyle} style - the text style to use for measuring
     * @param {boolean} [wordWrap] - optional override for if word-wrap should be applied to the text.
     * @param {HTMLCanvasElement} [canvas] - optional specification of the canvas to use for measuring.
     * @return {PIXI.TextMetrics} measured width and height of the text.
     */


    _createClass(TextMetrics, null, [{
        key: 'measureText',
        value: function measureText(text, style, wordWrap) {
            var canvas = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : TextMetrics._canvas;

            wordWrap = wordWrap || style.wordWrap;
            var font = style.toFontString();
            var fontProperties = TextMetrics.measureFont(font);
            var context = canvas.getContext('2d');

            context.font = font;

            var outputText = wordWrap ? TextMetrics.wordWrap(text, style, canvas) : text;
            var lines = outputText.split(/(?:\r\n|\r|\n)/);
            var lineWidths = new Array(lines.length);
            var maxLineWidth = 0;

            for (var i = 0; i < lines.length; i++) {
                var lineWidth = context.measureText(lines[i]).width + (lines[i].length - 1) * style.letterSpacing;

                lineWidths[i] = lineWidth;
                maxLineWidth = Math.max(maxLineWidth, lineWidth);
            }
            var width = maxLineWidth + style.strokeThickness;

            if (style.dropShadow) {
                width += style.dropShadowDistance;
            }

            var lineHeight = style.lineHeight || fontProperties.fontSize + style.strokeThickness;
            var height = Math.max(lineHeight, fontProperties.fontSize + style.strokeThickness) + (lines.length - 1) * (lineHeight + style.leading);

            if (style.dropShadow) {
                height += style.dropShadowDistance;
            }

            return new TextMetrics(text, style, width, height, lines, lineWidths, lineHeight + style.leading, maxLineWidth, fontProperties);
        }

        /**
         * Applies newlines to a string to have it optimally fit into the horizontal
         * bounds set by the Text object's wordWrapWidth property.
         *
         * @private
         * @param {string} text - String to apply word wrapping to
         * @param {PIXI.TextStyle} style - the style to use when wrapping
         * @param {HTMLCanvasElement} [canvas] - optional specification of the canvas to use for measuring.
         * @return {string} New string with new lines applied where required
         */

    }, {
        key: 'wordWrap',
        value: function wordWrap(text, style) {
            var canvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TextMetrics._canvas;

            var context = canvas.getContext('2d');

            // Greedy wrapping algorithm that will wrap words as the line grows longer
            // than its horizontal bounds.
            var result = '';
            var firstChar = text.charAt(0);
            var lines = text.split('\n');
            var wordWrapWidth = style.wordWrapWidth;
            var characterCache = {};

            for (var i = 0; i < lines.length; i++) {
                var spaceLeft = wordWrapWidth;
                var words = lines[i].split(' ');

                for (var j = 0; j < words.length; j++) {
                    var wordWidth = context.measureText(words[j]).width;

                    if (style.breakWords && wordWidth > wordWrapWidth) {
                        // Word should be split in the middle
                        var characters = words[j].split('');

                        for (var c = 0; c < characters.length; c++) {
                            var character = characters[c];
                            var characterWidth = characterCache[character];

                            if (characterWidth === undefined) {
                                characterWidth = context.measureText(character).width;
                                characterCache[character] = characterWidth;
                            }

                            if (characterWidth > spaceLeft) {
                                result += '\n' + character;
                                spaceLeft = wordWrapWidth - characterWidth;
                            } else {
                                if (c === 0 && (j > 0 || firstChar === ' ')) {
                                    result += ' ';
                                }

                                result += character;
                                spaceLeft -= characterWidth;
                            }
                        }
                    } else {
                        var wordWidthWithSpace = wordWidth + context.measureText(' ').width;

                        if (j === 0 || wordWidthWithSpace > spaceLeft) {
                            // Skip printing the newline if it's the first word of the line that is
                            // greater than the word wrap width.
                            if (j > 0) {
                                result += '\n';
                            }
                            result += words[j];
                            spaceLeft = wordWrapWidth - wordWidth;
                        } else {
                            spaceLeft -= wordWidthWithSpace;
                            result += ' ' + words[j];
                        }
                    }
                }

                if (i < lines.length - 1) {
                    result += '\n';
                }
            }

            return result;
        }

        /**
         * Calculates the ascent, descent and fontSize of a given font-style
         *
         * @static
         * @param {string} font - String representing the style of the font
         * @return {PIXI.TextMetrics~FontMetrics} Font properties object
         */

    }, {
        key: 'measureFont',
        value: function measureFont(font) {
            // as this method is used for preparing assets, don't recalculate things if we don't need to
            if (TextMetrics._fonts[font]) {
                return TextMetrics._fonts[font];
            }

            var properties = {};

            var canvas = TextMetrics._canvas;
            var context = TextMetrics._context;

            context.font = font;

            var width = Math.ceil(context.measureText('|MÉq').width);
            var baseline = Math.ceil(context.measureText('M').width);
            var height = 2 * baseline;

            baseline = baseline * 1.4 | 0;

            canvas.width = width;
            canvas.height = height;

            context.fillStyle = '#f00';
            context.fillRect(0, 0, width, height);

            context.font = font;

            context.textBaseline = 'alphabetic';
            context.fillStyle = '#000';
            context.fillText('|MÉq', 0, baseline);

            var imagedata = context.getImageData(0, 0, width, height).data;
            var pixels = imagedata.length;
            var line = width * 4;

            var i = 0;
            var idx = 0;
            var stop = false;

            // ascent. scan from top to bottom until we find a non red pixel
            for (i = 0; i < baseline; ++i) {
                for (var j = 0; j < line; j += 4) {
                    if (imagedata[idx + j] !== 255) {
                        stop = true;
                        break;
                    }
                }
                if (!stop) {
                    idx += line;
                } else {
                    break;
                }
            }

            properties.ascent = baseline - i;

            idx = pixels - line;
            stop = false;

            // descent. scan from bottom to top until we find a non red pixel
            for (i = height; i > baseline; --i) {
                for (var _j = 0; _j < line; _j += 4) {
                    if (imagedata[idx + _j] !== 255) {
                        stop = true;
                        break;
                    }
                }

                if (!stop) {
                    idx -= line;
                } else {
                    break;
                }
            }

            properties.descent = i - baseline;
            properties.fontSize = properties.ascent + properties.descent;

            TextMetrics._fonts[font] = properties;

            return properties;
        }
    }]);

    return TextMetrics;
}();

/**
 * Internal return object for {@link PIXI.TextMetrics.measureFont `TextMetrics.measureFont`}.
 * @class FontMetrics
 * @memberof PIXI.TextMetrics~
 * @property {number} ascent - The ascent distance
 * @property {number} descent - The descent distance
 * @property {number} fontSize - Font size from ascent to descent
 */

/* harmony default export */ __webpack_exports__["a"] = (TextMetrics);
var canvas = document.createElement('canvas');

canvas.width = canvas.height = 10;

/**
 * Cached canvas element for measuring text
 * @memberof PIXI.TextMetrics
 * @type {HTMLCanvasElement}
 * @private
 */
TextMetrics._canvas = canvas;

/**
 * Cache for context to use.
 * @memberof PIXI.TextMetrics
 * @type {CanvasRenderingContext2D}
 * @private
 */
TextMetrics._context = canvas.getContext('2d');

/**
 * Cache of PIXI.TextMetrics~FontMetrics objects.
 * @memberof PIXI.TextMetrics
 * @type {Object}
 * @private
 */
TextMetrics._fonts = {};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A GraphicsData object.
 *
 * @class
 * @memberof PIXI
 */
var GraphicsData = function () {
  /**
   *
   * @param {number} lineWidth - the width of the line to draw
   * @param {number} lineColor - the color of the line to draw
   * @param {number} lineAlpha - the alpha of the line to draw
   * @param {number} fillColor - the color of the fill
   * @param {number} fillAlpha - the alpha of the fill
   * @param {boolean} fill - whether or not the shape is filled with a colour
   * @param {boolean} nativeLines - the method for drawing lines
   * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape - The shape object to draw.
   */
  function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape) {
    _classCallCheck(this, GraphicsData);

    /**
     * @member {number} the width of the line to draw
     */
    this.lineWidth = lineWidth;
    /**
     * @member {boolean} if true the liens will be draw using LINES instead of TRIANGLE_STRIP
     */
    this.nativeLines = nativeLines;

    /**
     * @member {number} the color of the line to draw
     */
    this.lineColor = lineColor;

    /**
     * @member {number} the alpha of the line to draw
     */
    this.lineAlpha = lineAlpha;

    /**
     * @member {number} cached tint of the line to draw
     */
    this._lineTint = lineColor;

    /**
     * @member {number} the color of the fill
     */
    this.fillColor = fillColor;

    /**
     * @member {number} the alpha of the fill
     */
    this.fillAlpha = fillAlpha;

    /**
     * @member {number} cached tint of the fill
     */
    this._fillTint = fillColor;

    /**
     * @member {boolean} whether or not the shape is filled with a colour
     */
    this.fill = fill;

    this.holes = [];

    /**
     * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} The shape object to draw.
     */
    this.shape = shape;

    /**
     * @member {number} The type of the shape, see the Const.Shapes file for all the existing types,
     */
    this.type = shape.type;
  }

  /**
   * Creates a new GraphicsData object with the same values as this one.
   *
   * @return {PIXI.GraphicsData} Cloned GraphicsData object
   */


  _createClass(GraphicsData, [{
    key: "clone",
    value: function clone() {
      return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape);
    }

    /**
     * Adds a hole to the shape.
     *
     * @param {PIXI.Rectangle|PIXI.Circle} shape - The shape of the hole.
     */

  }, {
    key: "addHole",
    value: function addHole(shape) {
      this.holes.push(shape);
    }

    /**
     * Destroys the Graphics data.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.shape = null;
      this.holes = null;
    }
  }]);

  return GraphicsData;
}();

/* harmony default export */ __webpack_exports__["a"] = (GraphicsData);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autoDetectRenderer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_Container__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticker__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







/**
 * Convenience class to create a new PIXI application.
 * This class automatically creates the renderer, ticker
 * and root container.
 *
 * @example
 * // Create the application
 * const app = new PIXI.Application();
 *
 * // Add the view to the DOM
 * document.body.appendChild(app.view);
 *
 * // ex, add display objects
 * app.stage.addChild(PIXI.Sprite.fromImage('something.png'));
 *
 * @class
 * @memberof PIXI
 */

var Application = function () {
    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {object} [options] - The optional renderer parameters
     * @param {boolean} [options.autoStart=true] - automatically starts the rendering after the construction.
     *     Note that setting this parameter to false does NOT stop the shared ticker even if you set
     *     options.sharedTicker to true in case that it is already started. Stop it by your own.
     * @param {number} [options.width=800] - the width of the renderers view
     * @param {number} [options.height=600] - the height of the renderers view
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
     *  need to call toDataUrl on the webgl context
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
     * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *   not before the new render pass.
     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
     *  stopping pixel interpolation.
     * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
     *  FXAA is faster, but may not always look as great **webgl only**
     * @param {boolean} [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
     *  If you experience unexplained flickering try setting this to true. **webgl only**
     * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
     *  for devices with dual graphics card **webgl only**
     * @param {boolean} [options.sharedTicker=false] - `true` to use PIXI.ticker.shared, `false` to create new ticker.
     * @param {boolean} [options.sharedLoader=false] - `true` to use PIXI.loaders.shared, `false` to create new Loader.
     */
    function Application(options, arg2, arg3, arg4, arg5) {
        _classCallCheck(this, Application);

        // Support for constructor(width, height, options, noWebGL, useSharedTicker)
        if (typeof options === 'number') {
            options = Object.assign({
                width: options,
                height: arg2 || __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].RENDER_OPTIONS.height,
                forceCanvas: !!arg4,
                sharedTicker: !!arg5
            }, arg3);
        }

        /**
         * The default options, so we mixin functionality later.
         * @member {object}
         * @protected
         */
        this._options = options = Object.assign({
            autoStart: true,
            sharedTicker: false,
            forceCanvas: false,
            sharedLoader: false
        }, options);

        /**
         * WebGL renderer if available, otherwise CanvasRenderer
         * @member {PIXI.WebGLRenderer|PIXI.CanvasRenderer}
         */
        this.renderer = Object(__WEBPACK_IMPORTED_MODULE_0__autoDetectRenderer__["a" /* autoDetectRenderer */])(options);

        /**
         * The root display container that's rendered.
         * @member {PIXI.Container}
         */
        this.stage = new __WEBPACK_IMPORTED_MODULE_1__display_Container__["a" /* default */]();

        /**
         * Internal reference to the ticker
         * @member {PIXI.ticker.Ticker}
         * @private
         */
        this._ticker = null;

        /**
         * Ticker for doing render updates.
         * @member {PIXI.ticker.Ticker}
         * @default PIXI.ticker.shared
         */
        this.ticker = options.sharedTicker ? __WEBPACK_IMPORTED_MODULE_2__ticker__["shared"] : new __WEBPACK_IMPORTED_MODULE_2__ticker__["Ticker"]();

        // Start the rendering
        if (options.autoStart) {
            this.start();
        }
    }

    _createClass(Application, [{
        key: 'render',


        /**
         * Render the current stage.
         */
        value: function render() {
            this.renderer.render(this.stage);
        }

        /**
         * Convenience method for stopping the render.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this._ticker.stop();
        }

        /**
         * Convenience method for starting the render.
         */

    }, {
        key: 'start',
        value: function start() {
            this._ticker.start();
        }

        /**
         * Reference to the renderer's canvas element.
         * @member {HTMLCanvasElement}
         * @readonly
         */

    }, {
        key: 'destroy',


        /**
         * Destroy and don't use after this.
         * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
         */
        value: function destroy(removeView) {
            var oldTicker = this._ticker;

            this.ticker = null;

            oldTicker.destroy();

            this.stage.destroy();
            this.stage = null;

            this.renderer.destroy(removeView);
            this.renderer = null;

            this._options = null;
        }
    }, {
        key: 'ticker',
        set: function set(ticker) // eslint-disable-line require-jsdoc
        {
            if (this._ticker) {
                this._ticker.remove(this.render, this);
            }
            this._ticker = ticker;
            if (ticker) {
                ticker.add(this.render, this, __WEBPACK_IMPORTED_MODULE_4__const__["i" /* UPDATE_PRIORITY */].LOW);
            }
        },
        get: function get() // eslint-disable-line require-jsdoc
        {
            return this._ticker;
        }
    }, {
        key: 'view',
        get: function get() {
            return this.renderer.view;
        }

        /**
         * Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
         * @member {PIXI.Rectangle}
         * @readonly
         */

    }, {
        key: 'screen',
        get: function get() {
            return this.renderer.screen;
        }
    }]);

    return Application;
}();

/* harmony default export */ __webpack_exports__["a"] = (Application);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = autoDetectRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderers_canvas_CanvasRenderer__ = __webpack_require__(7);


// import WebGLRenderer from './renderers/webgl/WebGLRenderer';

// eslint-disable-next-line valid-jsdoc
/**
 * This helper function will automatically detect which renderer you should be using.
 * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
 * the browser then this function will return a canvas renderer
 *
 * @memberof PIXI
 * @function autoDetectRenderer
 * @param {object} [options] - The optional renderer parameters
 * @param {number} [options.width=800] - the width of the renderers view
 * @param {number} [options.height=600] - the height of the renderers view
 * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
 * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
 * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
 * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
 *  need to call toDataUrl on the webgl context
 * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
 *  (shown if not transparent).
 * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
 *   not before the new render pass.
 * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
 * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
 * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
 *  stopping pixel interpolation.
 * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
 *  FXAA is faster, but may not always look as great **webgl only**
 * @param {boolean} [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
 *  If you experience unexplained flickering try setting this to true. **webgl only**
 * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
 *  for devices with dual graphics card **webgl only**
 * @return {PIXI.WebGLRenderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
 */
function autoDetectRenderer(options, arg1, arg2, arg3) {
    // Backward-compatible support for noWebGL option
    var forceCanvas = options && options.forceCanvas;

    if (arg3 !== undefined) {
        forceCanvas = arg3;
    }

    // if (!forceCanvas && utils.isWebGLSupported())
    // {
    //     return new WebGLRenderer(options, arg1, arg2);
    // }

    return new __WEBPACK_IMPORTED_MODULE_1__renderers_canvas_CanvasRenderer__["a" /* default */](options, arg1, arg2);
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AnimatedSprite__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedSprite", function() { return __WEBPACK_IMPORTED_MODULE_0__AnimatedSprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TilingSprite__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TilingSprite", function() { return __WEBPACK_IMPORTED_MODULE_1__TilingSprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BitmapText__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapText", function() { return __WEBPACK_IMPORTED_MODULE_2__BitmapText__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cacheAsBitmap__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getChildByName__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getGlobalPosition__ = __webpack_require__(115);
/**
 * Additional PIXI DisplayObjects for animation, tiling and bitmap text.
 * @namespace PIXI.extras
 */


// export { default as TilingSpriteRenderer } from './webgl/TilingSpriteRenderer';


// imported for side effect of extending the prototype only, contains no exports




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Holds all information related to an Interaction event
 *
 * @class
 * @memberof PIXI.interaction
 */

var InteractionData = function () {
  /**
   *
   */
  function InteractionData() {
    _classCallCheck(this, InteractionData);

    /**
     * This point stores the global coords of where the touch/mouse event happened
     *
     * @member {PIXI.Point}
     */
    this.global = new __WEBPACK_IMPORTED_MODULE_0__core__["h" /* Point */]();

    /**
     * The target DisplayObject that was interacted with
     *
     * @member {PIXI.DisplayObject}
     */
    this.target = null;

    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
     * @member {MouseEvent|TouchEvent|PointerEvent}
     */
    this.originalEvent = null;

    /**
     * Unique identifier for this interaction
     *
     * @member {number}
     */
    this.identifier = null;

    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     * @type {Boolean}
     */
    this.isPrimary = false;

    /**
     * Indicates which button was pressed on the mouse or pointer device to trigger the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
     * @type {number}
     */
    this.button = 0;

    /**
     * Indicates which buttons are pressed on the mouse or pointer device when the event is triggered.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
     * @type {number}
     */
    this.buttons = 0;

    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     * @type {number}
     */
    this.width = 0;

    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     * @type {number}
     */
    this.height = 0;

    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     * @type {number}
     */
    this.tiltX = 0;

    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     * @type {number}
     */
    this.tiltY = 0;

    /**
     * The type of pointer that triggered the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     * @type {string}
     */
    this.pointerType = null;

    /**
     * Pressure applied by the pointing device during the event. A Touch's force property
     * will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     * @type {number}
     */
    this.pressure = 0;

    /**
     * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
     * @type {number}
     */
    this.rotationAngle = 0;

    /**
     * Twist of a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    this.twist = 0;

    /**
     * Barrel pressure on a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    this.tangentialPressure = 0;
  }

  /**
   * The unique identifier of the pointer. It will be the same as `identifier`.
   * @readonly
   * @member {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
   */


  _createClass(InteractionData, [{
    key: 'getLocalPosition',


    /**
     * This will return the local coordinates of the specified displayObject for this InteractionData
     *
     * @param {PIXI.DisplayObject} displayObject - The DisplayObject that you would like the local
     *  coords off
     * @param {PIXI.Point} [point] - A Point object in which to store the value, optional (otherwise
     *  will create a new point)
     * @param {PIXI.Point} [globalPos] - A Point object containing your custom global coords, optional
     *  (otherwise will use the current global coords)
     * @return {PIXI.Point} A point containing the coordinates of the InteractionData position relative
     *  to the DisplayObject
     */
    value: function getLocalPosition(displayObject, point, globalPos) {
      return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
    }

    /**
     * Copies properties from normalized event data.
     *
     * @param {Touch|MouseEvent|PointerEvent} event The normalized event data
     * @private
     */

  }, {
    key: '_copyEvent',
    value: function _copyEvent(event) {
      // isPrimary should only change on touchstart/pointerdown, so we don't want to overwrite
      // it with "false" on later events when our shim for it on touch events might not be
      // accurate
      if (event.isPrimary) {
        this.isPrimary = true;
      }
      this.button = event.button;
      this.buttons = event.buttons;
      this.width = event.width;
      this.height = event.height;
      this.tiltX = event.tiltX;
      this.tiltY = event.tiltY;
      this.pointerType = event.pointerType;
      this.pressure = event.pressure;
      this.rotationAngle = event.rotationAngle;
      this.twist = event.twist || 0;
      this.tangentialPressure = event.tangentialPressure || 0;
    }

    /**
     * Resets the data for pooling.
     *
     * @private
     */

  }, {
    key: '_reset',
    value: function _reset() {
      // isPrimary is the only property that we really need to reset - everything else is
      // guaranteed to be overwritten
      this.isPrimary = false;
    }
  }, {
    key: 'pointerId',
    get: function get() {
      return this.identifier;
    }
  }]);

  return InteractionData;
}();

/* harmony default export */ __webpack_exports__["a"] = (InteractionData);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Event class that mimics native DOM events.
 *
 * @class
 * @memberof PIXI.interaction
 */
var InteractionEvent = function () {
  /**
   *
   */
  function InteractionEvent() {
    _classCallCheck(this, InteractionEvent);

    /**
     * Whether this event will continue propagating in the tree
     *
     * @member {boolean}
     */
    this.stopped = false;

    /**
     * The object which caused this event to be dispatched.
     * For listener callback see {@link PIXI.interaction.InteractionEvent.currentTarget}.
     *
     * @member {PIXI.DisplayObject}
     */
    this.target = null;

    /**
     * The object whose event listener’s callback is currently being invoked.
     *
     * @member {PIXI.DisplayObject}
     */
    this.currentTarget = null;

    /**
     * Type of the event
     *
     * @member {string}
     */
    this.type = null;

    /**
     * InteractionData related to this event
     *
     * @member {PIXI.interaction.InteractionData}
     */
    this.data = null;
  }

  /**
   * Prevents event from reaching any objects other than the current object.
   *
   */


  _createClass(InteractionEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this.stopped = true;
    }

    /**
     * Resets the event.
     *
     * @private
     */

  }, {
    key: "_reset",
    value: function _reset() {
      this.stopped = false;
      this.currentTarget = null;
      this.target = null;
    }
  }]);

  return InteractionEvent;
}();

/* harmony default export */ __webpack_exports__["a"] = (InteractionEvent);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DisplayObjects with the {@link PIXI.interaction.interactiveTarget} mixin use this class to track interactions
 *
 * @class
 * @private
 * @memberof PIXI.interaction
 */
var InteractionTrackingData = function () {
    /**
     * @param {number} pointerId - Unique pointer id of the event
     */
    function InteractionTrackingData(pointerId) {
        _classCallCheck(this, InteractionTrackingData);

        this._pointerId = pointerId;
        this._flags = InteractionTrackingData.FLAGS.NONE;
    }

    /**
     *
     * @private
     * @param {number} flag - The interaction flag to set
     * @param {boolean} yn - Should the flag be set or unset
     */


    _createClass(InteractionTrackingData, [{
        key: "_doSet",
        value: function _doSet(flag, yn) {
            if (yn) {
                this._flags = this._flags | flag;
            } else {
                this._flags = this._flags & ~flag;
            }
        }

        /**
         * Unique pointer id of the event
         *
         * @readonly
         * @member {number}
         */

    }, {
        key: "pointerId",
        get: function get() {
            return this._pointerId;
        }

        /**
         * State of the tracking data, expressed as bit flags
         *
         * @member {number}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */

    }, {
        key: "flags",
        get: function get() {
            return this._flags;
        }

        /**
         * Set the flags for the tracking data
         *
         * @param {number} flags - Flags to set
         */
        ,
        set: function set(flags) {
            this._flags = flags;
        }

        /**
         * Is the tracked event inactive (not over or down)?
         *
         * @member {number}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */

    }, {
        key: "none",
        get: function get() {
            return this._flags === this.constructor.FLAGS.NONE;
        }

        /**
         * Is the tracked event over the DisplayObject?
         *
         * @member {boolean}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */

    }, {
        key: "over",
        get: function get() {
            return (this._flags & this.constructor.FLAGS.OVER) !== 0;
        }

        /**
         * Set the over flag
         *
         * @param {boolean} yn - Is the event over?
         */
        ,
        set: function set(yn) {
            this._doSet(this.constructor.FLAGS.OVER, yn);
        }

        /**
         * Did the right mouse button come down in the DisplayObject?
         *
         * @member {boolean}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */

    }, {
        key: "rightDown",
        get: function get() {
            return (this._flags & this.constructor.FLAGS.RIGHT_DOWN) !== 0;
        }

        /**
         * Set the right down flag
         *
         * @param {boolean} yn - Is the right mouse button down?
         */
        ,
        set: function set(yn) {
            this._doSet(this.constructor.FLAGS.RIGHT_DOWN, yn);
        }

        /**
         * Did the left mouse button come down in the DisplayObject?
         *
         * @member {boolean}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */

    }, {
        key: "leftDown",
        get: function get() {
            return (this._flags & this.constructor.FLAGS.LEFT_DOWN) !== 0;
        }

        /**
         * Set the left down flag
         *
         * @param {boolean} yn - Is the left mouse button down?
         */
        ,
        set: function set(yn) {
            this._doSet(this.constructor.FLAGS.LEFT_DOWN, yn);
        }
    }]);

    return InteractionTrackingData;
}();

/* harmony default export */ __webpack_exports__["a"] = (InteractionTrackingData);


InteractionTrackingData.FLAGS = Object.freeze({
    NONE: 0,
    OVER: 1 << 0,
    LEFT_DOWN: 1 << 1,
    RIGHT_DOWN: 1 << 2
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Default property values of interactive objects
 * Used by {@link PIXI.interaction.InteractionManager} to automatically give all DisplayObjects these properties
 *
 * @private
 * @name interactiveTarget
 * @memberof PIXI.interaction
 * @example
 *      function MyObject() {}
 *
 *      Object.assign(
 *          core.DisplayObject.prototype,
 *          PIXI.interaction.interactiveTarget
 *      );
 */
/* harmony default export */ __webpack_exports__["a"] = ({

  /**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse
   * events will not be emitted unless `interactive` is set to `true`.
   *
   * @example
   * const sprite = new PIXI.Sprite(texture);
   * sprite.interactive = true;
   * sprite.on('tap', (event) => {
   *    //handle event
   * });
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  interactive: false,

  /**
   * Determines if the children to the displayObject can be clicked/touched
   * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
   *
   * @member {boolean}
   * @memberof PIXI.Container#
   */
  interactiveChildren: true,

  /**
   * Interaction shape. Children will be hit first, then this shape will be checked.
   * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
   *
   * @example
   * const sprite = new PIXI.Sprite(texture);
   * sprite.interactive = true;
   * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
   * @member {PIXI.Rectangle|PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.RoundedRectangle}
   * @memberof PIXI.DisplayObject#
   */
  hitArea: null,

  /**
   * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
   * Setting this changes the 'cursor' property to `'pointer'`.
   *
   * @example
   * const sprite = new PIXI.Sprite(texture);
   * sprite.interactive = true;
   * sprite.buttonMode = true;
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  get buttonMode() {
    return this.cursor === 'pointer';
  },
  set buttonMode(value) {
    if (value) {
      this.cursor = 'pointer';
    } else if (this.cursor === 'pointer') {
      this.cursor = null;
    }
  },

  /**
   * This defines what cursor mode is used when the mouse cursor
   * is hovered over the displayObject.
   *
   * @example
   * const sprite = new PIXI.Sprite(texture);
   * sprite.interactive = true;
   * sprite.cursor = 'wait';
   * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
   *
   * @member {string}
   * @memberof PIXI.DisplayObject#
   */
  cursor: null,

  /**
   * Internal set of all active pointers, by identifier
   *
   * @member {Map<number, InteractionTrackingData>}
   * @memberof PIXI.DisplayObject#
   * @private
   */
  get trackedPointers() {
    if (this._trackedPointers === undefined) this._trackedPointers = {};

    return this._trackedPointers;
  },

  /**
   * Map of all tracked pointers, by identifier. Use trackedPointers to access.
   *
   * @private
   * @type {Map<number, InteractionTrackingData>}
   */
  _trackedPointers: undefined
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var MiniSignalBinding = function () {
  function MiniSignalBinding(fn, once, thisArg) {
    if (once === undefined) once = false;

    _classCallCheck(this, MiniSignalBinding);

    this._fn = fn;
    this._once = once;
    this._thisArg = thisArg;
    this._next = this._prev = this._owner = null;
  }

  _createClass(MiniSignalBinding, [{
    key: 'detach',
    value: function detach() {
      if (this._owner === null) return false;
      this._owner.detach(this);
      return true;
    }
  }]);

  return MiniSignalBinding;
}();

function _addMiniSignalBinding(self, node) {
  if (!self._head) {
    self._head = node;
    self._tail = node;
  } else {
    self._tail._next = node;
    node._prev = self._tail;
    self._tail = node;
  }

  node._owner = self;

  return node;
}

var MiniSignal = function () {
  function MiniSignal() {
    _classCallCheck(this, MiniSignal);

    this._head = this._tail = undefined;
  }

  _createClass(MiniSignal, [{
    key: 'handlers',
    value: function handlers() {
      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var node = this._head;

      if (exists) return !!node;

      var ee = [];

      while (node) {
        ee.push(node);
        node = node._next;
      }

      return ee;
    }
  }, {
    key: 'has',
    value: function has(node) {
      if (!(node instanceof MiniSignalBinding)) {
        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
      }

      return node._owner === this;
    }
  }, {
    key: 'dispatch',
    value: function dispatch() {
      var node = this._head;

      if (!node) return false;

      while (node) {
        if (node._once) this.detach(node);
        node._fn.apply(node._thisArg, arguments);
        node = node._next;
      }

      return true;
    }
  }, {
    key: 'add',
    value: function add(fn) {
      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (typeof fn !== 'function') {
        throw new Error('MiniSignal#add(): First arg must be a Function.');
      }
      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
    }
  }, {
    key: 'once',
    value: function once(fn) {
      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (typeof fn !== 'function') {
        throw new Error('MiniSignal#once(): First arg must be a Function.');
      }
      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
    }
  }, {
    key: 'detach',
    value: function detach(node) {
      if (!(node instanceof MiniSignalBinding)) {
        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
      }
      if (node._owner !== this) return this;

      if (node._prev) node._prev._next = node._next;
      if (node._next) node._next._prev = node._prev;

      if (node === this._head) {
        this._head = node._next;
        if (node._next === null) {
          this._tail = null;
        }
      } else if (node === this._tail) {
        this._tail = node._prev;
        this._tail._next = null;
      }

      node._owner = null;
      return this;
    }
  }, {
    key: 'detachAll',
    value: function detachAll() {
      var node = this._head;
      if (!node) return this;

      this._head = this._tail = null;

      while (node) {
        node._owner = null;
        node = node._next;
      }
      return this;
    }
  }]);

  return MiniSignal;
}();

MiniSignal.MiniSignalBinding = MiniSignalBinding;

exports['default'] = MiniSignal;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseURI(str, opts) {
  opts = opts || {};

  var o = {
    key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
    q: {
      name: 'queryKey',
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  };

  var m = o.parser[opts.strictMode ? 'strict' : 'loose'].exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    uri[o.key[i]] = m[i] || '';
  }uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });

  return uri;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.eachSeries = eachSeries;
exports.queue = queue;
/**
 * Smaller version of the async library constructs.
 *
 */
function _noop() {} /* empty */

/**
 * Iterates an array in series.
 *
 * @param {Array.<*>} array - Array to iterate.
 * @param {function} iterator - Function to call for each element.
 * @param {function} callback - Function to call when done, or on error.
 * @param {boolean} [deferNext=false] - Break synchronous each loop by calling next with a setTimeout of 1.
 */
function eachSeries(array, iterator, callback, deferNext) {
    var i = 0;
    var len = array.length;

    (function next(err) {
        if (err || i === len) {
            if (callback) {
                callback(err);
            }

            return;
        }

        if (deferNext) {
            setTimeout(function () {
                iterator(array[i++], next);
            }, 1);
        } else {
            iterator(array[i++], next);
        }
    })();
}

/**
 * Ensures a function is only called once.
 *
 * @param {function} fn - The function to wrap.
 * @return {function} The wrapping function.
 */
function onlyOnce(fn) {
    return function onceWrapper() {
        if (fn === null) {
            throw new Error('Callback was already called.');
        }

        var callFn = fn;

        fn = null;
        callFn.apply(this, arguments);
    };
}

/**
 * Async queue implementation,
 *
 * @param {function} worker - The worker function to call for each task.
 * @param {number} concurrency - How many workers to run in parrallel.
 * @return {*} The async queue object.
 */
function queue(worker, concurrency) {
    if (concurrency == null) {
        // eslint-disable-line no-eq-null,eqeqeq
        concurrency = 1;
    } else if (concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var workers = 0;
    var q = {
        _tasks: [],
        concurrency: concurrency,
        saturated: _noop,
        unsaturated: _noop,
        buffer: concurrency / 4,
        empty: _noop,
        drain: _noop,
        error: _noop,
        started: false,
        paused: false,
        push: function push(data, callback) {
            _insert(data, false, callback);
        },
        kill: function kill() {
            workers = 0;
            q.drain = _noop;
            q.started = false;
            q._tasks = [];
        },
        unshift: function unshift(data, callback) {
            _insert(data, true, callback);
        },
        process: function process() {
            while (!q.paused && workers < q.concurrency && q._tasks.length) {
                var task = q._tasks.shift();

                if (q._tasks.length === 0) {
                    q.empty();
                }

                workers += 1;

                if (workers === q.concurrency) {
                    q.saturated();
                }

                worker(task.data, onlyOnce(_next(task)));
            }
        },
        length: function length() {
            return q._tasks.length;
        },
        running: function running() {
            return workers;
        },
        idle: function idle() {
            return q._tasks.length + workers === 0;
        },
        pause: function pause() {
            if (q.paused === true) {
                return;
            }

            q.paused = true;
        },
        resume: function resume() {
            if (q.paused === false) {
                return;
            }

            q.paused = false;

            // Need to call q.process once per concurrent
            // worker to preserve full concurrency after pause
            for (var w = 1; w <= q.concurrency; w++) {
                q.process();
            }
        }
    };

    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            // eslint-disable-line no-eq-null,eqeqeq
            throw new Error('task callback must be a function');
        }

        q.started = true;

        if (data == null && q.idle()) {
            // eslint-disable-line no-eq-null,eqeqeq
            // call drain immediately if there are no tasks
            setTimeout(function () {
                return q.drain();
            }, 1);

            return;
        }

        var item = {
            data: data,
            callback: typeof callback === 'function' ? callback : _noop
        };

        if (insertAtFront) {
            q._tasks.unshift(item);
        } else {
            q._tasks.push(item);
        }

        setTimeout(function () {
            return q.process();
        }, 1);
    }

    function _next(task) {
        return function next() {
            workers -= 1;

            task.callback.apply(task, arguments);

            if (arguments[0] != null) {
                // eslint-disable-line no-eq-null,eqeqeq
                q.error(arguments[0], task.data);
            }

            if (workers <= q.concurrency - q.buffer) {
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }

            q.process();
        };
    }

    return q;
}
//# sourceMappingURL=async.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.encodeBinary = encodeBinary;
var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function encodeBinary(input) {
    var output = '';
    var inx = 0;

    while (inx < input.length) {
        // Fill byte buffer array
        var bytebuffer = [0, 0, 0];
        var encodedCharIndexes = [0, 0, 0, 0];

        for (var jnx = 0; jnx < bytebuffer.length; ++jnx) {
            if (inx < input.length) {
                // throw away high-order byte, as documented at:
                // https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
                bytebuffer[jnx] = input.charCodeAt(inx++) & 0xff;
            } else {
                bytebuffer[jnx] = 0;
            }
        }

        // Get each encoded character, 6 bits at a time
        // index 1: first 6 bits
        encodedCharIndexes[0] = bytebuffer[0] >> 2;

        // index 2: second 6 bits (2 least significant bits from input byte 1 + 4 most significant bits from byte 2)
        encodedCharIndexes[1] = (bytebuffer[0] & 0x3) << 4 | bytebuffer[1] >> 4;

        // index 3: third 6 bits (4 least significant bits from input byte 2 + 2 most significant bits from byte 3)
        encodedCharIndexes[2] = (bytebuffer[1] & 0x0f) << 2 | bytebuffer[2] >> 6;

        // index 3: forth 6 bits (6 least significant bits from input byte 3)
        encodedCharIndexes[3] = bytebuffer[2] & 0x3f;

        // Determine whether padding happened, and adjust accordingly
        var paddingBytes = inx - (input.length - 1);

        switch (paddingBytes) {
            case 2:
                // Set last 2 characters to padding char
                encodedCharIndexes[3] = 64;
                encodedCharIndexes[2] = 64;
                break;

            case 1:
                // Set last character to padding char
                encodedCharIndexes[3] = 64;
                break;

            default:
                break; // No padding - proceed
        }

        // Now we will grab each appropriate character out of our keystring
        // based on our index array and append it to the output string
        for (var _jnx = 0; _jnx < encodedCharIndexes.length; ++_jnx) {
            output += _keyStr.charAt(encodedCharIndexes[_jnx]);
        }
    }

    return output;
}
//# sourceMappingURL=b64.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resource_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resource_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_resource_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_textures_Texture__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["a"] = (function () {
    return function textureParser(resource, next) {
        // create a new texture if the data is an Image object
        if (resource.data && resource.type === __WEBPACK_IMPORTED_MODULE_0_resource_loader__["Resource"].TYPE.IMAGE) {
            resource.texture = __WEBPACK_IMPORTED_MODULE_1__core_textures_Texture__["a" /* default */].fromLoader(resource.data, resource.url, resource.name);
        }
        next();
    };
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getResourcePath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resource_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resource_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_resource_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = (function () {
    return function spritesheetParser(resource, next) {
        var imageResourceName = resource.name + '_image';

        // skip if no data, its not json, it isn't spritesheet data, or the image resource already exists
        if (!resource.data || resource.type !== __WEBPACK_IMPORTED_MODULE_0_resource_loader__["Resource"].TYPE.JSON || !resource.data.frames || this.resources[imageResourceName]) {
            next();

            return;
        }

        var loadOptions = {
            crossOrigin: resource.crossOrigin,
            loadType: __WEBPACK_IMPORTED_MODULE_0_resource_loader__["Resource"].LOAD_TYPE.IMAGE,
            metadata: resource.metadata.imageMetadata,
            parentResource: resource
        };

        var resourcePath = getResourcePath(resource, this.baseUrl);

        // load the image for this sheet
        this.add(imageResourceName, resourcePath, loadOptions, function onImageLoad(res) {
            var spritesheet = new __WEBPACK_IMPORTED_MODULE_2__core__["l" /* Spritesheet */](res.texture.baseTexture, resource.data, resource.url);

            spritesheet.parse(function () {
                resource.spritesheet = spritesheet;
                resource.textures = spritesheet.textures;
                next();
            });
        });
    };
});

function getResourcePath(resource, baseUrl) {
    // Prepend url path unless the resource image is a data url
    if (resource.isDataUrl) {
        return resource.data.meta.image;
    }

    return __WEBPACK_IMPORTED_MODULE_1_url___default.a.resolve(resource.url.replace(baseUrl, ''), resource.data.meta.image);
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resource_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resource_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_resource_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extras__ = __webpack_require__(52);





/**
 * Register a BitmapText font from loader resource.
 *
 * @function parseBitmapFontData
 * @memberof PIXI.loaders
 * @param {PIXI.loaders.Resource} resource - Loader resource.
 * @param {PIXI.Texture} texture - Reference to texture.
 */
function parse(resource, texture) {
    resource.bitmapFont = __WEBPACK_IMPORTED_MODULE_3__extras__["BitmapText"].registerFont(resource.data, texture);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return function bitmapFontParser(resource, next) {
        // skip if no data or not xml data
        if (!resource.data || resource.type !== __WEBPACK_IMPORTED_MODULE_2_resource_loader__["Resource"].TYPE.XML) {
            next();

            return;
        }

        // skip if not bitmap font data, using some silly duck-typing
        if (resource.data.getElementsByTagName('page').length === 0 || resource.data.getElementsByTagName('info').length === 0 || resource.data.getElementsByTagName('info')[0].getAttribute('face') === null) {
            next();

            return;
        }

        var xmlUrl = !resource.isDataUrl ? __WEBPACK_IMPORTED_MODULE_0_path__["dirname"](resource.url) : '';

        if (resource.isDataUrl) {
            if (xmlUrl === '.') {
                xmlUrl = '';
            }

            if (this.baseUrl && xmlUrl) {
                // if baseurl has a trailing slash then add one to xmlUrl so the replace works below
                if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/') {
                    xmlUrl += '/';
                }
            }
        }

        // remove baseUrl from xmlUrl
        xmlUrl = xmlUrl.replace(this.baseUrl, '');

        // if there is an xmlUrl now, it needs a trailing slash. Ensure that it does if the string isn't empty.
        if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== '/') {
            xmlUrl += '/';
        }

        var textureUrl = xmlUrl + resource.data.getElementsByTagName('page')[0].getAttribute('file');

        if (__WEBPACK_IMPORTED_MODULE_1__core__["s" /* utils */].TextureCache[textureUrl]) {
            // reuse existing texture
            parse(resource, __WEBPACK_IMPORTED_MODULE_1__core__["s" /* utils */].TextureCache[textureUrl]);
            next();
        } else {
            var loadOptions = {
                crossOrigin: resource.crossOrigin,
                loadType: __WEBPACK_IMPORTED_MODULE_2_resource_loader__["Resource"].LOAD_TYPE.IMAGE,
                metadata: resource.metadata.imageMetadata,
                parentResource: resource
            };

            // load the texture for the font
            this.add(resource.name + '_image', textureUrl, loadOptions, function (res) {
                parse(resource, res.texture);
                next();
            });
        }
    };
});

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pixi__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tween_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tween_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tween_js__);


var Tween = __WEBPACK_IMPORTED_MODULE_1_tween_js___default.a.Tween,
    AnimatedSprite = __WEBPACK_IMPORTED_MODULE_0__pixi__["f" /* extras */].AnimatedSprite,
    zoomLevel = innerWidth / 750;


__WEBPACK_IMPORTED_MODULE_0__pixi__["h" /* utils */].sayHello = function (x) {
    return x;
};

var app = new __WEBPACK_IMPORTED_MODULE_0__pixi__["a" /* Application */]({
    width: 750,
    height: 1200,
    antialiasing: true,
    transparent: false,
    resolution: zoomLevel * devicePixelRatio,
    // forceCanvas: true,
    backgroundColor: 0xaeca96
});
document.body.innerHTML = '<div id="canvas_wrapper"></div><div class="masker_t" style="z-index:8;position:absolute;top:0;left:0;width:100%;height:0;background-color:transparent;"></div>\n<div class="masker_r" style="z-index:8;position:absolute;top:0;right:0;width:0;height:0;background-color:transparent;"></div>\n<div class="masker_b" style="z-index:8;position:absolute;top:0;left:0;width:100%;height:0;background-color:transparent;"></div>\n<div class="masker_l" style="z-index:8;position:absolute;top:0;left:0;width:0;height:0;background-color:transparent;"></div>';
var wrapper = document.getElementById('canvas_wrapper');
wrapper.style.cssText = 'width: ' + app.view.width / devicePixelRatio + 'px; height: ' + app.view.height / devicePixelRatio + 'px;overflow:hidden';
app.view.style.cssText = 'transform-origin: 0 0;transform:scale(' + 1 / devicePixelRatio + ')';
wrapper.appendChild(app.view);
// app.stage.scale.set(zoomLevel)
// app.view.height = app.view.height * zoomLevel
for (var name in resources) {
    app.loader.add(name, resources[name]);
}
var g = new __WEBPACK_IMPORTED_MODULE_0__pixi__["c" /* Graphics */]();
g.beginFill(0xffffff);
g.fillAlpha = 0;
g.lineStyle(8, 0xffffff, 1);
g.moveTo(30, 300);
g.drawRoundedRect(30, 300, app.renderer.width / app.renderer.resolution - 60, 100);
app.stage.addChild(g);
g.fillAlpha = 1;
app.loader.on('progress', function (loader) {
    g.drawRoundedRect(30, 300, loader.progress / 100 * (app.renderer.width / app.renderer.resolution - 60), 100);
}).load(function (loader, res) {
    app.stage.removeChild(g);
    app.ticker.add(function () {
        return __WEBPACK_IMPORTED_MODULE_1_tween_js___default.a.update(__WEBPACK_IMPORTED_MODULE_0__pixi__["g" /* ticker */].shared.lastTime);
    });
    entryScene00(app, loader, res, app.renderer.width / app.renderer.resolution, app.renderer.height / app.renderer.resolution);
});

function entryScene00(app, loader, res, rwidth, rheight) {
    var con_starting = new __WEBPACK_IMPORTED_MODULE_0__pixi__["b" /* Container */](),
        con_s1 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["b" /* Container */](),
        con_s2 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["b" /* Container */]();

    var fg00 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res['resources/fg_01.png'].texture),
        fg01 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res['resources/fg_01.png'].texture),
        fg02 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res['resources/fg_01.png'].texture);

    con_s1.addChild(fg00);
    con_s1.addChild(fg01);
    con_s1.addChild(fg02);
    fg00.rotation = Math.PI / 6;
    fg00.position.set(0, 10);
    fg00.scale.set(1.5, 1.5);

    fg01.position.set(rwidth - fg01.width - 20, 100);
    fg02.position.set(rwidth - fg01.width - 20, 300);
    fg02.scale.set(.8, .8);
    fg02.rotation = -Math.PI / 8;

    var title_01 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.title_01.texture),
        title_02 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.title_02.texture),
        arrow = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res['resources/bg_04.png'].texture);

    title_01.position.set(rwidth / 2 - title_01.width / 2, 100);
    title_02.position.set(rwidth / 2 - title_02.width / 2, 240);
    arrow.position.set(rwidth / 2 - arrow.width / 2, 340);

    var startButton = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.btn_01.texture);

    startButton.interactive = true;
    startButton.buttonMode = true;
    startButton.anchor.set(.5, .5);
    startButton.position.set(rwidth / 2, 500);
    startButton.alpha = 0;
    startButton.on('pointertap', function () {
        if (startButton.$running) {
            return;
        }
        startButton.$running = true;
        new Tween({ s: 0 }).to({ s: Math.PI }, 300).onUpdate(function () {
            startButton.scale.set(1 + Math.sin(this.s) * .1);
        }).start();
        new Tween({ y1: 0, y2: 0 }).to({ y1: -rheight, y2: rheight }, 800).easing(__WEBPACK_IMPORTED_MODULE_1_tween_js___default.a.Easing.Quartic.In).onUpdate(function () {
            con_s1.y = this.y1;
            con_s2.y = this.y2;
        }).onComplete(function () {
            startButton.$running = false;
            entryScene01(app, loader, res, rwidth, rheight);
            app.stage.removeChild(con_starting);
        }).start();
    });

    con_s1.addChild(title_01);
    con_s1.addChild(title_02);
    con_s1.addChild(arrow);
    con_s1.addChild(startButton);
    con_starting.addChild(con_s1);

    var x = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.bg_01.texture);
    con_s2.addChild(x);
    x.position.set(rwidth / 2 - x.width / 2, rheight - x.height);
    con_starting.addChild(con_s2);

    var fg02 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res['resources/fg_02.png'].texture);
    fg02.position.set(fg02.width / 2 - 50, rheight - 280);
    fg02.pivot.set(fg02.width / 2, fg02.height);
    fg02.vscale = 0;
    app.ticker.add(function (delta) {
        fg02.vscale = (fg02.vscale += 2) % 360;
        var scale = 1 + Math.cos(fg02.vscale * Math.PI / 180) * .03;
        fg02.scale.set(scale);
    });

    con_s2.addChild(fg02);

    new Tween({ y1: -rheight, y2: rheight }).to({ y1: 0, y2: 0 }, 800).easing(__WEBPACK_IMPORTED_MODULE_1_tween_js___default.a.Easing.Quartic.Out).onStart(function () {
        con_s1.position.set(0, this.y1);
        con_s2.position.set(40, this.y2);
        app.stage.addChild(con_starting);
        setGlobalMasker(rwidth / 2 - startButton.width / 2, 500 - startButton.height / 2, startButton.width, startButton.height);
    }).onComplete(function () {
        new Tween({ a: 0 }).to({ a: 1 }, 300).onUpdate(function () {
            startButton.alpha = this.a;
        }).start();
    }).onUpdate(function () {
        con_s1.position.set(0, this.y1);
        con_s2.position.set(40, this.y2);
    }).start();
}

function entryScene01(app, loader, res, rwidth, rheight) {
    currentTitle = 0, data = Array(8);
    var root = new __WEBPACK_IMPORTED_MODULE_0__pixi__["b" /* Container */](),
        yes = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.btn_yes.texture),
        no = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.btn_no.texture),
        subtitle = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.subtitle.texture),
        cover = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.cover.texture);

    subtitle.pivot.set(-44, 0);
    subtitle.y = 56;
    cover.pivot.set(-46, 0);
    cover.y = 300;

    yes.anchor.set(.5);
    no.anchor.set(.5);
    yes.interactive = true;
    yes.buttonMode = true;
    no.interactive = true;
    no.buttonMode = true;
    yes.y = 900;
    no.y = 900;

    var $running = false;
    function nextSubTitle(value) {
        if ($running) {
            return;
        }
        $running = true;
        data[currentTitle] = value;
        currentTitle++;
        if (currentTitle >= data.length) {
            app.stage.removeChild(root);
            post_data();
            entryScene02(app, loader, res, app.renderer.width / app.renderer.resolution, app.renderer.height / app.renderer.resolution);
            return;
        }
        new Tween({ x: rwidth, s: 0 }).to({ x: 0, s: Math.PI }, 300).onStart(function () {
            subtitle.x = this.x - currentTitle * rwidth;
            cover.x = this.x - currentTitle * rwidth;
        }).onUpdate(function () {
            subtitle.x = this.x - currentTitle * rwidth;
            cover.x = this.x - currentTitle * rwidth;
        }).onComplete(function () {
            $running = false;
        }).start();
    }
    yes.on('pointertap', function () {
        if (yes.$running) {
            return;
        }
        yes.$running = true;
        new Tween({ s: 0 }).to({ s: Math.PI }, 300).onUpdate(function () {
            yes.scale.set(1 + Math.sin(this.s) * .1);
        }).onComplete(function () {
            yes.$running = false;
            nextSubTitle(1);
        }).start();
    });
    no.on('pointertap', function () {
        if (no.$running) {
            return;
        }
        no.$running = true;
        new Tween({ s: 0 }).to({ s: Math.PI }, 300).onUpdate(function () {
            no.scale.set(1 + Math.sin(this.s) * .1);
        }).onComplete(function () {
            no.$running = false;
            nextSubTitle(0);
        }).start();
    });
    new Tween({ x1: rwidth / 4 - rwidth, x2: rwidth / 4 * 3 + rwidth }).to({ x1: rwidth / 4, x2: rwidth / 4 * 3 }, 500).easing(__WEBPACK_IMPORTED_MODULE_1_tween_js___default.a.Easing.Quartic.Out).onStart(function () {
        yes.x = this.x1;
        no.x = this.x2;
        root.addChild(subtitle);
        root.addChild(cover);
        root.addChild(yes);
        root.addChild(no);
        setGlobalMasker(rwidth / 4 - yes.width / 2, 900 - yes.height / 2, 750 - (rwidth / 2 - yes.width), yes.height);
    }).onUpdate(function () {
        yes.x = this.x1;
        no.x = this.x2;
    }).start();
    app.stage.addChild(root);
}

function entryScene02(app, loader, res, rwidth, rheight) {
    var root = new __WEBPACK_IMPORTED_MODULE_0__pixi__["b" /* Container */](),
        retest = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.btn_retest.texture),
        blackboard = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.blackboard.texture),
        score = data.reduce(function (a, b) {
        return a + b;
    }, 0),
        result = results.filter(function (r) {
        return score >= r.min && score <= r.max;
    })[0] || results[0];

    qrcode.src = result.pic_2;
    document.body.appendChild(qrcode);

    var pic1 = __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */].fromImage(result.pic_1, false);
    pic1.x = 12;
    pic1.y = 20;
    root.addChild(pic1);

    blackboard.x = 50;
    blackboard.y = 292;
    root.addChild(blackboard);

    retest.interactive = true;
    retest.buttonMode = true;
    retest.anchor.set(.5);
    retest.x = rwidth / 2;
    retest.y = 615 + retest.height / 2;
    retest.on('pointertap', function () {
        if (this.$running) {
            return;
        }
        this.$running = true;
        new Tween({ s: 0 }).to({ s: Math.PI }, 300).onUpdate(function () {
            retest.scale.set(1 + Math.sin(this.s) * .1);
        }).onComplete(function () {
            retest.$running = false;
            app.stage.removeChild(root);
            qrcode && qrcode.parentNode && qrcode.parentNode.removeChild(qrcode);
            entryScene00(app, loader, res, app.renderer.width / app.renderer.resolution, app.renderer.height / app.renderer.resolution);
        }).start();
    });
    root.addChild(retest);

    var tips = new __WEBPACK_IMPORTED_MODULE_0__pixi__["d" /* Sprite */](res.tips.texture);
    tips.x = 90;
    tips.y = 864;
    root.addChild(tips);

    setGlobalMasker(rwidth / 2 - retest.width / 2, 615, retest.width, retest.height);

    var _1 = res.head_icon_01.texture,
        _2 = res.head_icon_02.texture,
        _3 = res.head_icon_03.texture;
    var head = new AnimatedSprite([_1, _1, _1, _1, _1, _1, _1, _1, _2, _3, _1, _1, _2, _3]);
    head.loop = true;
    head.animationSpeed = .2;
    head.x = 550;
    head.y = 733;
    head.play();
    root.addChild(head);

    var text_1 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["e" /* Text */](result.text_1, { fontSize: 24, fill: 0xffffff, lineHeight: 38 });
    text_1.x = 120;
    text_1.y = 350;
    root.addChild(text_1);

    var text_2 = new __WEBPACK_IMPORTED_MODULE_0__pixi__["e" /* Text */](result.text_2, { fontSize: 24, fill: 0xffffff, lineHeight: 38 });
    text_2.x = 86;
    text_2.y = 944;
    root.addChild(text_2);
    app.stage.addChild(root);
}

var masker_t = document.querySelector('.masker_t'),
    masker_r = document.querySelector('.masker_r'),
    masker_b = document.querySelector('.masker_b'),
    masker_l = document.querySelector('.masker_l'),
    qrcode = new Image();

qrcode.style.cssText = 'display: block; width: 100%; height: auto;';
qrcode.src = 'about:blank';

function setGlobalMasker(x, y, w, h) {
    masker_t.style.cssText += ['', 'height: ' + y * zoomLevel + 'px', ''].join(';');
    masker_r.style.cssText += ['', 'top: ' + y * zoomLevel + 'px', 'width: ' + (750 - x - w) * zoomLevel + 'px', 'height: ' + h * zoomLevel + 'px', ''].join(';');
    masker_b.style.cssText += ['', 'top: ' + (y + h) * zoomLevel + 'px', 'height: ' + (app.view.height / devicePixelRatio - (y + h) * zoomLevel) + 'px', ''].join(';');
    masker_l.style.cssText += ['', 'top: ' + y * zoomLevel + 'px', 'width: ' + x * zoomLevel + 'px', 'height: ' + h * zoomLevel + 'px', ''].join(';');
}

function post_data() {
    var _data = {};
    data.forEach(function (r, i) {
        _data[i + 1] = r;
    });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', api_url);
    xhr.send(JSON.stringify(_data));
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfill__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__core__["s"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extras__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interaction__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loaders__ = __webpack_require__(118);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__extras__; });
/* unused harmony reexport interaction */
/* unused harmony reexport loaders */
// import polyfills. Done as an export to make sure polyfills are imported first


// export core


// export libs
// import deprecation from './deprecation';
// import * as accessibility from './accessibility';
// import * as extract from './extract';

// import * as filters from './filters';


// import * as mesh from './mesh';
// import * as particles from './particles';
// import * as prepare from './prepare';

// handle mixins now, after all code has been added, including deprecation

__WEBPACK_IMPORTED_MODULE_1__core__["s" /* utils */].mixins.performMixins();

/**
 * Alias for {@link PIXI.loaders.shared}.
 * @name loader
 * @memberof PIXI
 * @type {PIXI.loader.Loader}
 */
var loader = __WEBPACK_IMPORTED_MODULE_4__loaders__["a" /* shared */] || null;



// Apply the deprecations
if (typeof deprecation === 'function') {
    deprecation(exports);
}

// Always export PixiJS globally.
// global.PIXI = exports; // eslint-disable-line

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Object_assign__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestAnimationFrame__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestAnimationFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__requestAnimationFrame__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Math_sign__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Math_sign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Math_sign__);




if (!window.ArrayBuffer) {
    window.ArrayBuffer = Array;
}

if (!window.Float32Array) {
    window.Float32Array = Array;
}

if (!window.Uint32Array) {
    window.Uint32Array = Array;
}

if (!window.Uint16Array) {
    window.Uint16Array = Array;
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
// References:
// https://github.com/sindresorhus/object-assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



if (!Object.assign) {
    Object.assign = __WEBPACK_IMPORTED_MODULE_0_object_assign___default.a;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

var ONE_FRAME_TIME = 16;

// Date.now
if (!(Date.now && Date.prototype.getTime)) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// performance.now
if (!(global.performance && global.performance.now)) {
    var startTime = Date.now();

    if (!global.performance) {
        global.performance = {};
    }

    global.performance.now = function () {
        return Date.now() - startTime;
    };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
    var p = vendors[x];

    global.requestAnimationFrame = global[p + 'RequestAnimationFrame'];
    global.cancelAnimationFrame = global[p + 'CancelAnimationFrame'] || global[p + 'CancelRequestAnimationFrame'];
}

if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function');
        }

        var currentTime = Date.now();
        var delay = ONE_FRAME_TIME + lastTime - currentTime;

        if (delay < 0) {
            delay = 0;
        }

        lastTime = currentTime;

        return setTimeout(function () {
            lastTime = Date.now();
            callback(performance.now());
        }, delay);
    };
}

if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = function (id) {
        return clearTimeout(id);
    };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// References:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

if (!Math.sign) {
    Math.sign = function mathSign(x) {
        x = Number(x);

        if (x === 0 || isNaN(x)) {
            return x;
        }

        return x > 0 ? 1 : -1;
    };
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rectangle__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 */

var Circle = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the center of this circle
   * @param {number} [y=0] - The Y coordinate of the center of this circle
   * @param {number} [radius=0] - The radius of the circle
   */
  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Circle);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.radius = radius;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default PIXI.SHAPES.CIRC
     * @see PIXI.SHAPES
     */
    this.type = __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].CIRC;
  }

  /**
   * Creates a clone of this Circle instance
   *
   * @return {PIXI.Circle} a copy of the Circle
   */


  _createClass(Circle, [{
    key: 'clone',
    value: function clone() {
      return new Circle(this.x, this.y, this.radius);
    }

    /**
     * Checks whether the x and y coordinates given are contained within this circle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Circle
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      if (this.radius <= 0) {
        return false;
      }

      var r2 = this.radius * this.radius;
      var dx = this.x - x;
      var dy = this.y - y;

      dx *= dx;
      dy *= dy;

      return dx + dy <= r2;
    }

    /**
    * Returns the framing rectangle of the circle as a Rectangle object
    *
    * @return {PIXI.Rectangle} the framing rectangle
    */

  }, {
    key: 'getBounds',
    value: function getBounds() {
      return new __WEBPACK_IMPORTED_MODULE_0__Rectangle__["a" /* default */](this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
  }]);

  return Circle;
}();

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rectangle__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 */

var Ellipse = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the center of this circle
   * @param {number} [y=0] - The Y coordinate of the center of this circle
   * @param {number} [width=0] - The half width of this ellipse
   * @param {number} [height=0] - The half height of this ellipse
   */
  function Ellipse() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Ellipse);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default PIXI.SHAPES.ELIP
     * @see PIXI.SHAPES
     */
    this.type = __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].ELIP;
  }

  /**
   * Creates a clone of this Ellipse instance
   *
   * @return {PIXI.Ellipse} a copy of the ellipse
   */


  _createClass(Ellipse, [{
    key: 'clone',
    value: function clone() {
      return new Ellipse(this.x, this.y, this.width, this.height);
    }

    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coords are within this ellipse
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }

      // normalize the coords to an ellipse with center 0,0
      var normx = (x - this.x) / this.width;
      var normy = (y - this.y) / this.height;

      normx *= normx;
      normy *= normy;

      return normx + normy <= 1;
    }

    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     *
     * @return {PIXI.Rectangle} the framing rectangle
     */

  }, {
    key: 'getBounds',
    value: function getBounds() {
      return new __WEBPACK_IMPORTED_MODULE_0__Rectangle__["a" /* default */](this.x - this.width, this.y - this.height, this.width, this.height);
    }
  }]);

  return Ellipse;
}();

/* harmony default export */ __webpack_exports__["a"] = (Ellipse);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * @class
 * @memberof PIXI
 */

var Polygon = function () {
    /**
     * @param {PIXI.Point[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    function Polygon() {
        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
            points[_key] = arguments[_key];
        }

        _classCallCheck(this, Polygon);

        if (Array.isArray(points[0])) {
            points = points[0];
        }

        // if this is an array of points, convert it to a flat array of numbers
        if (points[0] instanceof __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */]) {
            var p = [];

            for (var i = 0, il = points.length; i < il; i++) {
                p.push(points[i].x, points[i].y);
            }

            points = p;
        }

        this.closed = true;

        /**
         * An array of the points of this polygon
         *
         * @member {number[]}
         */
        this.points = points;

        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        this.type = __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].POLY;
    }

    /**
     * Creates a clone of this polygon
     *
     * @return {PIXI.Polygon} a copy of the polygon
     */


    _createClass(Polygon, [{
        key: 'clone',
        value: function clone() {
            return new Polygon(this.points.slice());
        }

        /**
         * Closes the polygon, adding points if necessary.
         *
         */

    }, {
        key: 'close',
        value: function close() {
            var points = this.points;

            // close the poly if the value is true!
            if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
                points.push(points[0], points[1]);
            }
        }

        /**
         * Checks whether the x and y coordinates passed to this function are contained within this polygon
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this polygon
         */

    }, {
        key: 'contains',
        value: function contains(x, y) {
            var inside = false;

            // use some raycasting to test hits
            // https://github.com/substack/point-in-polygon/blob/master/index.js
            var length = this.points.length / 2;

            for (var i = 0, j = length - 1; i < length; j = i++) {
                var xi = this.points[i * 2];
                var yi = this.points[i * 2 + 1];
                var xj = this.points[j * 2];
                var yj = this.points[j * 2 + 1];
                var intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;

                if (intersect) {
                    inside = !inside;
                }
            }

            return inside;
        }
    }]);

    return Polygon;
}();

/* harmony default export */ __webpack_exports__["a"] = (Polygon);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
 * top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 */

var RoundedRectangle = function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    function RoundedRectangle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;

        _classCallCheck(this, RoundedRectangle);

        /**
         * @member {number}
         * @default 0
         */
        this.x = x;

        /**
         * @member {number}
         * @default 0
         */
        this.y = y;

        /**
         * @member {number}
         * @default 0
         */
        this.width = width;

        /**
         * @member {number}
         * @default 0
         */
        this.height = height;

        /**
         * @member {number}
         * @default 20
         */
        this.radius = radius;

        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readonly
         * @default PIXI.SHAPES.RREC
         * @see PIXI.SHAPES
         */
        this.type = __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].RREC;
    }

    /**
     * Creates a clone of this Rounded Rectangle
     *
     * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
     */


    _createClass(RoundedRectangle, [{
        key: 'clone',
        value: function clone() {
            return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
        }

        /**
         * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
         */

    }, {
        key: 'contains',
        value: function contains(x, y) {
            if (this.width <= 0 || this.height <= 0) {
                return false;
            }
            if (x >= this.x && x <= this.x + this.width) {
                if (y >= this.y && y <= this.y + this.height) {
                    if (y >= this.y + this.radius && y <= this.y + this.height - this.radius || x >= this.x + this.radius && x <= this.x + this.width - this.radius) {
                        return true;
                    }
                    var dx = x - (this.x + this.radius);
                    var dy = y - (this.y + this.radius);
                    var radius2 = this.radius * this.radius;

                    if (dx * dx + dy * dy <= radius2) {
                        return true;
                    }
                    dx = x - (this.x + this.width - this.radius);
                    if (dx * dx + dy * dy <= radius2) {
                        return true;
                    }
                    dy = y - (this.y + this.height - this.radius);
                    if (dx * dx + dy * dy <= radius2) {
                        return true;
                    }
                    dx = x - (this.x + this.radius);
                    if (dx * dx + dy * dy <= radius2) {
                        return true;
                    }
                }
            }

            return false;
        }
    }]);

    return RoundedRectangle;
}();

/* harmony default export */ __webpack_exports__["a"] = (RoundedRectangle);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = maxRecommendedTextures;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ismobilejs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ismobilejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ismobilejs__);


function maxRecommendedTextures(max) {
    if (__WEBPACK_IMPORTED_MODULE_0_ismobilejs___default.a.tablet || __WEBPACK_IMPORTED_MODULE_0_ismobilejs___default.a.phone) {
        // check if the res is iphone 6 or higher..
        return 4;
    }

    // desktop should be ok
    return max;
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canUploadSameBuffer;
function canUploadSameBuffer() {
	// Uploading the same buffer multiple times in a single frame can cause perf issues.
	// Apparent on IOS so only check for that at the moment
	// this check may become more complex if this issue pops up elsewhere.
	var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

	return !ios;
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Mixins functionality to make an object have "plugins".
 *
 * @example
 *      function MyObject() {}
 *
 *      pluginTarget.mixin(MyObject);
 *
 * @mixin
 * @memberof PIXI.utils
 * @param {object} obj - The object to mix into.
 */
function pluginTarget(obj) {
    obj.__plugins = {};

    /**
     * Adds a plugin to an object
     *
     * @param {string} pluginName - The events that should be listed.
     * @param {Function} ctor - The constructor function for the plugin.
     */
    obj.registerPlugin = function registerPlugin(pluginName, ctor) {
        obj.__plugins[pluginName] = ctor;
    };

    /**
     * Instantiates all the plugins of this object
     *
     */
    obj.prototype.initPlugins = function initPlugins() {
        this.plugins = this.plugins || {};

        for (var o in obj.__plugins) {
            this.plugins[o] = new obj.__plugins[o](this);
        }
    };

    /**
     * Removes all the plugins of this object
     *
     */
    obj.prototype.destroyPlugins = function destroyPlugins() {
        for (var o in this.plugins) {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        this.plugins = null;
    };
}

/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * Mixes in the properties of the pluginTarget into another object
     *
     * @param {object} obj - The obj to mix into
     */
    mixin: function mixin(obj) {
        pluginTarget(obj);
    }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["mixin"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["delayMixin"] = delayMixin;
/* harmony export (immutable) */ __webpack_exports__["performMixins"] = performMixins;
/**
 * Mixes all enumerable properties and methods from a source object to a target object.
 *
 * @memberof PIXI.utils.mixins
 * @function mixin
 * @param {object} target The prototype or instance that properties and methods should be added to.
 * @param {object} source The source of properties and methods to mix in.
 */
function mixin(target, source) {
    if (!target || !source) return;
    // in ES8/ES2017, this would be really easy:
    // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

    // get all the enumerable property keys
    var keys = Object.keys(source);

    // loop through properties
    for (var i = 0; i < keys.length; ++i) {
        var propertyName = keys[i];

        // Set the property using the property descriptor - this works for accessors and normal value properties
        Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
    }
}

var mixins = [];

/**
 * Queues a mixin to be handled towards the end of the initialization of PIXI, so that deprecation
 * can take effect.
 *
 * @memberof PIXI.utils.mixins
 * @function delayMixin
 * @private
 * @param {object} target The prototype or instance that properties and methods should be added to.
 * @param {object} source The source of properties and methods to mix in.
 */
function delayMixin(target, source) {
    mixins.push(target, source);
}

/**
 * Handles all mixins queued via delayMixin().
 *
 * @memberof PIXI.utils.mixins
 * @function performMixins
 * @private
 */
function performMixins() {
    for (var i = 0; i < mixins.length; i += 2) {
        mixin(mixins[i], mixins[i + 1]);
    }
    mixins.length = 0;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */

module.exports = function removeItems(arr, startIdx, removeCount) {
  var i,
      length = arr.length;

  if (startIdx >= length || removeCount === 0) {
    return;
  }

  removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;

  var len = length - removeCount;

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }

  arr.length = len;
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapPremultipliedBlendModes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);


/**
 * Corrects PixiJS blend, takes premultiplied alpha into account
 *
 * @memberof PIXI
 * @function mapPremultipliedBlendModes
 * @private
 * @param {Array<number[]>} [array] - The array to output into.
 * @return {Array<number[]>} Mapped modes.
 */

function mapPremultipliedBlendModes() {
    var pm = [];
    var npm = [];

    for (var i = 0; i < 32; i++) {
        pm[i] = i;
        npm[i] = i;
    }

    pm[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL_NPM] = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL;
    pm[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD_NPM] = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD;
    pm[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN_NPM] = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN;

    npm[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL] = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL_NPM;
    npm[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD] = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD_NPM;
    npm[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN] = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN_NPM;

    var array = [];

    array.push(npm);
    array.push(pm);

    return array;
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TickerListener__ = __webpack_require__(84);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





/**
 * A Ticker class that runs an update loop that other objects listen to.
 * This class is composed around listeners
 * meant for execution on the next requested animation frame.
 * Animation frames are requested only when necessary,
 * e.g. When the ticker is started and the emitter has listeners.
 *
 * @class
 * @memberof PIXI.ticker
 */

var Ticker = function () {
    /**
     *
     */
    function Ticker() {
        var _this = this;

        _classCallCheck(this, Ticker);

        /**
         * The first listener. All new listeners added are chained on this.
         * @private
         * @type {TickerListener}
         */
        this._head = new __WEBPACK_IMPORTED_MODULE_2__TickerListener__["a" /* default */](null, null, Infinity);

        /**
         * Internal current frame request ID
         * @private
         */
        this._requestId = null;

        /**
         * Internal value managed by minFPS property setter and getter.
         * This is the maximum allowed milliseconds between updates.
         * @private
         */
        this._maxElapsedMS = 100;

        /**
         * Whether or not this ticker should invoke the method
         * {@link PIXI.ticker.Ticker#start} automatically
         * when a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.autoStart = false;

        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link PIXI.ticker.Ticker#minFPS}
         * and is scaled with {@link PIXI.ticker.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         *
         * @member {number}
         * @default 1
         */
        this.deltaTime = 1;

        /**
         * Time elapsed in milliseconds from last frame to this frame.
         * Opposed to what the scalar {@link PIXI.ticker.Ticker#deltaTime}
         * is based, this value is neither capped nor scaled.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number}
         * @default 16.66
         */
        this.elapsedMS = 1 / __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].TARGET_FPMS;

        /**
         * The last time {@link PIXI.ticker.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         *
         * @member {number}
         * @default -1
         */
        this.lastTime = -1;

        /**
         * Factor of current {@link PIXI.ticker.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         *
         * @member {number}
         * @default 1
         */
        this.speed = 1;

        /**
         * Whether or not this ticker has been started.
         * `true` if {@link PIXI.ticker.Ticker#start} has been called.
         * `false` if {@link PIXI.ticker.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link PIXI.ticker.Ticker#autoStart} being `true`
         * and a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.started = false;

        /**
         * Internal tick method bound to ticker instance.
         * This is because in early 2015, Function.bind
         * is still 60% slower in high performance scenarios.
         * Also separating frame requests from update method
         * so listeners may be called at any time and with
         * any animation API, just invoke ticker.update(time).
         *
         * @private
         * @param {number} time - Time since last tick.
         */
        this._tick = function (time) {
            _this._requestId = null;

            if (_this.started) {
                // Invoke listeners now
                _this.update(time);
                // Listener side effects may have modified ticker state.
                if (_this.started && _this._requestId === null && _this._head.next) {
                    _this._requestId = requestAnimationFrame(_this._tick);
                }
            }
        };
    }

    /**
     * Conditionally requests a new animation frame.
     * If a frame has not already been requested, and if the internal
     * emitter has listeners, a new frame is requested.
     *
     * @private
     */


    _createClass(Ticker, [{
        key: '_requestIfNeeded',
        value: function _requestIfNeeded() {
            if (this._requestId === null && this._head.next) {
                // ensure callbacks get correct delta
                this.lastTime = performance.now();
                this._requestId = requestAnimationFrame(this._tick);
            }
        }

        /**
         * Conditionally cancels a pending animation frame.
         *
         * @private
         */

    }, {
        key: '_cancelIfNeeded',
        value: function _cancelIfNeeded() {
            if (this._requestId !== null) {
                cancelAnimationFrame(this._requestId);
                this._requestId = null;
            }
        }

        /**
         * Conditionally requests a new animation frame.
         * If the ticker has been started it checks if a frame has not already
         * been requested, and if the internal emitter has listeners. If these
         * conditions are met, a new frame is requested. If the ticker has not
         * been started, but autoStart is `true`, then the ticker starts now,
         * and continues with the previous conditions to request a new frame.
         *
         * @private
         */

    }, {
        key: '_startIfPossible',
        value: function _startIfPossible() {
            if (this.started) {
                this._requestIfNeeded();
            } else if (this.autoStart) {
                this.start();
            }
        }

        /**
         * Register a handler for tick events. Calls continuously unless
         * it is removed or the ticker is stopped.
         *
         * @param {Function} fn - The listener function to be added for updates
         * @param {Function} [context] - The listener context
         * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns {PIXI.ticker.Ticker} This instance of a ticker
         */

    }, {
        key: 'add',
        value: function add(fn, context) {
            var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_1__const__["i" /* UPDATE_PRIORITY */].NORMAL;

            return this._addListener(new __WEBPACK_IMPORTED_MODULE_2__TickerListener__["a" /* default */](fn, context, priority));
        }

        /**
         * Add a handler for the tick event which is only execute once.
         *
         * @param {Function} fn - The listener function to be added for one update
         * @param {Function} [context] - The listener context
         * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns {PIXI.ticker.Ticker} This instance of a ticker
         */

    }, {
        key: 'addOnce',
        value: function addOnce(fn, context) {
            var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_1__const__["i" /* UPDATE_PRIORITY */].NORMAL;

            return this._addListener(new __WEBPACK_IMPORTED_MODULE_2__TickerListener__["a" /* default */](fn, context, priority, true));
        }

        /**
         * Internally adds the event handler so that it can be sorted by priority.
         * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
         * before the rendering.
         *
         * @private
         * @param {TickerListener} listener - Current listener being added.
         * @returns {PIXI.ticker.Ticker} This instance of a ticker
         */

    }, {
        key: '_addListener',
        value: function _addListener(listener) {
            // For attaching to head
            var current = this._head.next;
            var previous = this._head;

            // Add the first item
            if (!current) {
                listener.connect(previous);
            } else {
                // Go from highest to lowest priority
                while (current) {
                    if (listener.priority > current.priority) {
                        listener.connect(previous);
                        break;
                    }
                    previous = current;
                    current = current.next;
                }

                // Not yet connected
                if (!listener.previous) {
                    listener.connect(previous);
                }
            }

            this._startIfPossible();

            return this;
        }

        /**
         * Removes any handlers matching the function and context parameters.
         * If no handlers are left after removing, then it cancels the animation frame.
         *
         * @param {Function} fn - The listener function to be removed
         * @param {Function} [context] - The listener context to be removed
         * @returns {PIXI.ticker.Ticker} This instance of a ticker
         */

    }, {
        key: 'remove',
        value: function remove(fn, context) {
            var listener = this._head.next;

            while (listener) {
                // We found a match, lets remove it
                // no break to delete all possible matches
                // incase a listener was added 2+ times
                if (listener.match(fn, context)) {
                    listener = listener.destroy();
                } else {
                    listener = listener.next;
                }
            }

            if (!this._head.next) {
                this._cancelIfNeeded();
            }

            return this;
        }

        /**
         * Starts the ticker. If the ticker has listeners
         * a new animation frame is requested at this point.
         */

    }, {
        key: 'start',
        value: function start() {
            if (!this.started) {
                this.started = true;
                this._requestIfNeeded();
            }
        }

        /**
         * Stops the ticker. If the ticker has requested
         * an animation frame it is canceled at this point.
         */

    }, {
        key: 'stop',
        value: function stop() {
            if (this.started) {
                this.started = false;
                this._cancelIfNeeded();
            }
        }

        /**
         * Destroy the ticker and don't use after this. Calling
         * this method removes all references to internal events.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.stop();

            var listener = this._head.next;

            while (listener) {
                listener = listener.destroy(true);
            }

            this._head.destroy();
            this._head = null;
        }

        /**
         * Triggers an update. An update entails setting the
         * current {@link PIXI.ticker.Ticker#elapsedMS},
         * the current {@link PIXI.ticker.Ticker#deltaTime},
         * invoking all listeners with current deltaTime,
         * and then finally setting {@link PIXI.ticker.Ticker#lastTime}
         * with the value of currentTime that was provided.
         * This method will be called automatically by animation
         * frame callbacks if the ticker instance has been started
         * and listeners are added.
         *
         * @param {number} [currentTime=performance.now()] - the current time of execution
         */

    }, {
        key: 'update',
        value: function update() {
            var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();

            var elapsedMS = void 0;

            // If the difference in time is zero or negative, we ignore most of the work done here.
            // If there is no valid difference, then should be no reason to let anyone know about it.
            // A zero delta, is exactly that, nothing should update.
            //
            // The difference in time can be negative, and no this does not mean time traveling.
            // This can be the result of a race condition between when an animation frame is requested
            // on the current JavaScript engine event loop, and when the ticker's start method is invoked
            // (which invokes the internal _requestIfNeeded method). If a frame is requested before
            // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
            // can receive a time argument that can be less than the lastTime value that was set within
            // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
            //
            // This check covers this browser engine timing issue, as well as if consumers pass an invalid
            // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.

            if (currentTime > this.lastTime) {
                // Save uncapped elapsedMS for measurement
                elapsedMS = this.elapsedMS = currentTime - this.lastTime;

                // cap the milliseconds elapsed used for deltaTime
                if (elapsedMS > this._maxElapsedMS) {
                    elapsedMS = this._maxElapsedMS;
                }

                this.deltaTime = elapsedMS * __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].TARGET_FPMS * this.speed;

                // Cache a local reference, in-case ticker is destroyed
                // during the emit, we can still check for head.next
                var head = this._head;

                // Invoke listeners added to internal emitter
                var listener = head.next;

                while (listener) {
                    listener = listener.emit(this.deltaTime);
                }

                if (!head.next) {
                    this._cancelIfNeeded();
                }
            } else {
                this.deltaTime = this.elapsedMS = 0;
            }

            this.lastTime = currentTime;
        }

        /**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link PIXI.ticker.Ticker#speed}, which is specific
         * to scaling {@link PIXI.ticker.Ticker#deltaTime}.
         *
         * @member {number}
         * @readonly
         */

    }, {
        key: 'FPS',
        get: function get() {
            return 1000 / this.elapsedMS;
        }

        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.ticker.Ticker#update}.
         * This value is used to cap {@link PIXI.ticker.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.ticker.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */

    }, {
        key: 'minFPS',
        get: function get() {
            return 1000 / this._maxElapsedMS;
        },
        set: function set(fps) // eslint-disable-line require-jsdoc
        {
            // Clamp: 0 to TARGET_FPMS
            var minFPMS = Math.min(Math.max(0, fps) / 1000, __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].TARGET_FPMS);

            this._maxElapsedMS = 1 / minFPMS;
        }
    }]);

    return Ticker;
}();

/* harmony default export */ __webpack_exports__["a"] = (Ticker);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Internal class for handling the priority sorting of ticker handlers.
 *
 * @private
 * @class
 * @memberof PIXI.ticker
 */
var TickerListener = function () {
    /**
     * Constructor
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {Function} [context=null] - The listener context
     * @param {number} [priority=0] - The priority for emitting
     * @param {boolean} [once=false] - If the handler should fire once
     */
    function TickerListener(fn) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, TickerListener);

        /**
         * The handler function to execute.
         * @member {Function}
         */
        this.fn = fn;

        /**
         * The calling to execute.
         * @member {Function}
         */
        this.context = context;

        /**
         * The current priority.
         * @member {number}
         */
        this.priority = priority;

        /**
         * If this should only execute once.
         * @member {boolean}
         */
        this.once = once;

        /**
         * The next item in chain.
         * @member {TickerListener}
         */
        this.next = null;

        /**
         * The previous item in chain.
         * @member {TickerListener}
         */
        this.previous = null;

        /**
         * `true` if this listener has been destroyed already.
         * @member {boolean}
         * @private
         */
        this._destroyed = false;
    }

    /**
     * Simple compare function to figure out if a function and context match.
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {Function} context - The listener context
     * @return {boolean} `true` if the listener match the arguments
     */


    _createClass(TickerListener, [{
        key: "match",
        value: function match(fn, context) {
            context = context || null;

            return this.fn === fn && this.context === context;
        }

        /**
         * Emit by calling the current function.
         * @param {number} deltaTime - time since the last emit.
         * @return {TickerListener} Next ticker
         */

    }, {
        key: "emit",
        value: function emit(deltaTime) {
            if (this.fn) {
                if (this.context) {
                    this.fn.call(this.context, deltaTime);
                } else {
                    this.fn(deltaTime);
                }
            }

            var redirect = this.next;

            if (this.once) {
                this.destroy(true);
            }

            // Soft-destroying should remove
            // the next reference
            if (this._destroyed) {
                this.next = null;
            }

            return redirect;
        }

        /**
         * Connect to the list.
         * @param {TickerListener} previous - Input node, previous listener
         */

    }, {
        key: "connect",
        value: function connect(previous) {
            this.previous = previous;
            if (previous.next) {
                previous.next.previous = this;
            }
            this.next = previous.next;
            previous.next = this;
        }

        /**
         * Destroy and don't use after this.
         * @param {boolean} [hard = false] `true` to remove the `next` reference, this
         *        is considered a hard destroy. Soft destroy maintains the next reference.
         * @return {TickerListener} The listener to redirect while emitting or removing.
         */

    }, {
        key: "destroy",
        value: function destroy() {
            var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this._destroyed = true;
            this.fn = null;
            this.context = null;

            // Disconnect, hook up next and previous
            if (this.previous) {
                this.previous.next = this.next;
            }

            if (this.next) {
                this.next.previous = this.previous;
            }

            // Redirect to the next item
            var redirect = this.previous;

            // Remove references
            this.next = hard ? null : redirect;
            this.previous = null;

            return redirect;
        }
    }]);

    return TickerListener;
}();

/* harmony default export */ __webpack_exports__["a"] = (TickerListener);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display_Container__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textures_RenderTexture__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_eventemitter3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var tempMatrix = new __WEBPACK_IMPORTED_MODULE_1__math__["d" /* Matrix */]();

/**
 * The SystemRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
 * and {@link PIXI.WebGLRenderer} which can be used for rendering a PixiJS scene.
 *
 * @abstract
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */

var SystemRenderer = function (_EventEmitter) {
  _inherits(SystemRenderer, _EventEmitter);

  // eslint-disable-next-line valid-jsdoc
  /**
   * @param {string} system - The name of the system this renderer is for.
   * @param {object} [options] - The optional renderer parameters
   * @param {number} [options.width=800] - the width of the screen
   * @param {number} [options.height=600] - the height of the screen
   * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
   * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
   * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
   * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
   * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
   *  resolution of the renderer retina would be 2.
   * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
   *  enable this if you need to call toDataUrl on the webgl context.
   * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
   *      not before the new render pass.
   * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
   *  (shown if not transparent).
   * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
   *  stopping pixel interpolation.
   */
  function SystemRenderer(system, options, arg2, arg3) {
    _classCallCheck(this, SystemRenderer);

    var _this = _possibleConstructorReturn(this, (SystemRenderer.__proto__ || Object.getPrototypeOf(SystemRenderer)).call(this));

    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["sayHello"])(system);

    // Support for constructor(system, screenWidth, screenHeight, options)
    if (typeof options === 'number') {
      options = Object.assign({
        width: options,
        height: arg2 || __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].RENDER_OPTIONS.height
      }, arg3);
    }

    // Add the default render options
    options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].RENDER_OPTIONS, options);

    /**
     * The supplied constructor options.
     *
     * @member {Object}
     * @readOnly
     */
    _this.options = options;

    /**
     * The type of the renderer.
     *
     * @member {number}
     * @default PIXI.RENDERER_TYPE.UNKNOWN
     * @see PIXI.RENDERER_TYPE
     */
    _this.type = __WEBPACK_IMPORTED_MODULE_2__const__["c" /* RENDERER_TYPE */].UNKNOWN;

    /**
     * Measurements of the screen. (0, 0, screenWidth, screenHeight)
     *
     * Its safe to use as filterArea or hitArea for whole stage
     *
     * @member {PIXI.Rectangle}
     */
    _this.screen = new __WEBPACK_IMPORTED_MODULE_1__math__["h" /* Rectangle */](0, 0, options.width, options.height);

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    _this.view = options.view || document.createElement('canvas');

    /**
     * The resolution / device pixel ratio of the renderer
     *
     * @member {number}
     * @default 1
     */
    _this.resolution = options.resolution || __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].RESOLUTION;

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    _this.transparent = options.transparent;

    /**
     * Whether css dimensions of canvas view should be resized to screen dimensions automatically
     *
     * @member {boolean}
     */
    _this.autoResize = options.autoResize || false;

    /**
     * Tracks the blend modes useful for this renderer.
     *
     * @member {object<string, mixed>}
     */
    _this.blendModes = null;

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of
     * the stencil buffer is retained after rendering.
     *
     * @member {boolean}
     */
    _this.preserveDrawingBuffer = options.preserveDrawingBuffer;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
     * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
     * to clear the canvas every frame. Disable this by setting this to false. For example if
     * your game has a canvas filling background image you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    _this.clearBeforeRender = options.clearBeforeRender;

    /**
     * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     * @member {boolean}
     */
    _this.roundPixels = options.roundPixels;

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    _this._backgroundColor = 0x000000;

    /**
     * The background color as an [R, G, B] array.
     *
     * @member {number[]}
     * @private
     */
    _this._backgroundColorRgba = [0, 0, 0, 0];

    /**
     * The background color as a string.
     *
     * @member {string}
     * @private
     */
    _this._backgroundColorString = '#000000';

    _this.backgroundColor = options.backgroundColor || _this._backgroundColor; // run bg color setter

    /**
     * This temporary display object used as the parent of the currently being rendered item
     *
     * @member {PIXI.DisplayObject}
     * @private
     */
    _this._tempDisplayObjectParent = new __WEBPACK_IMPORTED_MODULE_4__display_Container__["a" /* default */]();

    /**
     * The last root object that the renderer tried to render.
     *
     * @member {PIXI.DisplayObject}
     * @private
     */
    _this._lastObjectRendered = _this._tempDisplayObjectParent;
    return _this;
  }

  /**
   * Same as view.width, actual number of pixels in the canvas by horizontal
   *
   * @member {number}
   * @readonly
   * @default 800
   */


  _createClass(SystemRenderer, [{
    key: 'resize',


    /**
     * Resizes the screen and canvas to the specified width and height
     * Canvas dimensions are multiplied by resolution
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */
    value: function resize(screenWidth, screenHeight) {
      this.screen.width = screenWidth;
      this.screen.height = screenHeight;

      this.view.width = screenWidth * this.resolution;
      this.view.height = screenHeight * this.resolution;

      if (this.autoResize) {
        this.view.style.width = screenWidth + 'px';
        this.view.style.height = screenHeight + 'px';
      }
    }

    /**
     * Useful function that returns a texture of the display object that can then be used to create sprites
     * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
     *
     * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from
     * @param {number} scaleMode - Should be one of the scaleMode consts
     * @param {number} resolution - The resolution / device pixel ratio of the texture being generated
     * @param {PIXI.Rectangle} [region] - The region of the displayObject, that shall be rendered,
     *        if no region is specified, defaults to the local bounds of the displayObject.
     * @return {PIXI.Texture} a texture of the graphics object
     */

  }, {
    key: 'generateTexture',
    value: function generateTexture(displayObject, scaleMode, resolution, region) {
      region = region || displayObject.getLocalBounds();

      var renderTexture = __WEBPACK_IMPORTED_MODULE_5__textures_RenderTexture__["a" /* default */].create(region.width | 0, region.height | 0, scaleMode, resolution);

      tempMatrix.tx = -region.x;
      tempMatrix.ty = -region.y;

      this.render(displayObject, renderTexture, false, tempMatrix, true);

      return renderTexture;
    }

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */

  }, {
    key: 'destroy',
    value: function destroy(removeView) {
      if (removeView && this.view.parentNode) {
        this.view.parentNode.removeChild(this.view);
      }

      this.type = __WEBPACK_IMPORTED_MODULE_2__const__["c" /* RENDERER_TYPE */].UNKNOWN;

      this.view = null;

      this.screen = null;

      this.resolution = 0;

      this.transparent = false;

      this.autoResize = false;

      this.blendModes = null;

      this.options = null;

      this.preserveDrawingBuffer = false;
      this.clearBeforeRender = false;

      this.roundPixels = false;

      this._backgroundColor = 0;
      this._backgroundColorRgba = null;
      this._backgroundColorString = null;

      this._tempDisplayObjectParent = null;
      this._lastObjectRendered = null;
    }

    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this.view.width;
    }

    /**
     * Same as view.height, actual number of pixels in the canvas by vertical
     *
     * @member {number}
     * @readonly
     * @default 600
     */

  }, {
    key: 'height',
    get: function get() {
      return this.view.height;
    }
  }, {
    key: 'backgroundColor',
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) // eslint-disable-line require-jsdoc
    {
      this._backgroundColor = value;
      this._backgroundColorString = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["hex2string"])(value);
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["hex2rgb"])(value, this._backgroundColorRgba);
    }
  }]);

  return SystemRenderer;
}(__WEBPACK_IMPORTED_MODULE_6_eventemitter3___default.a);

/* harmony default export */ __webpack_exports__["a"] = (SystemRenderer);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function (root) {

	/** Detect free variables */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
		root = freeGlobal;
	}

	/**
  * The `punycode` object.
  * @name punycode
  * @type Object
  */
	var punycode,


	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647,
	    // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	    tMin = 1,
	    tMax = 26,
	    skew = 38,
	    damp = 700,
	    initialBias = 72,
	    initialN = 128,
	    // 0x80
	delimiter = '-',
	    // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	    regexNonASCII = /[^\x20-\x7E]/,
	    // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
	    // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},


	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	    floor = Math.floor,
	    stringFromCharCode = String.fromCharCode,


	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
  * A generic error utility function.
  * @private
  * @param {String} type The error type.
  * @returns {Error} Throws a `RangeError` with the applicable error message.
  */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
  * A generic `Array#map` utility function.
  * @private
  * @param {Array} array The array to iterate over.
  * @param {Function} callback The function that gets called for every array
  * item.
  * @returns {Array} A new array of values returned by the callback function.
  */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
  * A simple `Array#map`-like wrapper to work with domain name strings or email
  * addresses.
  * @private
  * @param {String} domain The domain name or email address.
  * @param {Function} callback The function that gets called for every
  * character.
  * @returns {Array} A new string of characters returned by the callback
  * function.
  */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
  * Creates an array containing the numeric code points of each Unicode
  * character in the string. While JavaScript uses UCS-2 internally,
  * this function will convert a pair of surrogate halves (each of which
  * UCS-2 exposes as separate characters) into a single code point,
  * matching UTF-16.
  * @see `punycode.ucs2.encode`
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode.ucs2
  * @name decode
  * @param {String} string The Unicode input string (UCS-2).
  * @returns {Array} The new array of code points.
  */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
  * Creates a string based on an array of numeric code points.
  * @see `punycode.ucs2.decode`
  * @memberOf punycode.ucs2
  * @name encode
  * @param {Array} codePoints The array of numeric code points.
  * @returns {String} The new Unicode string (UCS-2).
  */
	function ucs2encode(array) {
		return map(array, function (value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
  * Converts a basic code point into a digit/integer.
  * @see `digitToBasic()`
  * @private
  * @param {Number} codePoint The basic numeric code point value.
  * @returns {Number} The numeric value of a basic code point (for use in
  * representing integers) in the range `0` to `base - 1`, or `base` if
  * the code point does not represent a value.
  */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
  * Converts a digit/integer into a basic code point.
  * @see `basicToDigit()`
  * @private
  * @param {Number} digit The numeric value of a basic code point.
  * @returns {Number} The basic code point whose value (when used for
  * representing integers) is `digit`, which needs to be in the range
  * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
  * used; else, the lowercase form is used. The behavior is undefined
  * if `flag` is non-zero and `digit` has no uppercase form.
  */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
  * Bias adaptation function as per section 3.4 of RFC 3492.
  * https://tools.ietf.org/html/rfc3492#section-3.4
  * @private
  */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
  * Converts a Punycode string of ASCII-only symbols to a string of Unicode
  * symbols.
  * @memberOf punycode
  * @param {String} input The Punycode string of ASCII-only symbols.
  * @returns {String} The resulting string of Unicode symbols.
  */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,

		/** Cached calculation results */
		baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;
			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);
		}

		return ucs2encode(output);
	}

	/**
  * Converts a string of Unicode symbols (e.g. a domain name label) to a
  * Punycode string of ASCII-only symbols.
  * @memberOf punycode
  * @param {String} input The string of Unicode symbols.
  * @returns {String} The resulting Punycode string of ASCII-only symbols.
  */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],

		/** `inputLength` will hold the number of code points in `input`. */
		inputLength,

		/** Cached calculation results */
		handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base;; /* no condition */k += base) {
						t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;
		}
		return output.join('');
	}

	/**
  * Converts a Punycode string representing a domain name or an email address
  * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
  * it doesn't matter if you call it on a string that has already been
  * converted to Unicode.
  * @memberOf punycode
  * @param {String} input The Punycoded domain name or email address to
  * convert to Unicode.
  * @returns {String} The Unicode representation of the given Punycode
  * string.
  */
	function toUnicode(input) {
		return mapDomain(input, function (string) {
			return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
		});
	}

	/**
  * Converts a Unicode string representing a domain name or an email address to
  * Punycode. Only the non-ASCII parts of the domain name will be converted,
  * i.e. it doesn't matter if you call it with a domain that's already in
  * ASCII.
  * @memberOf punycode
  * @param {String} input The domain name or email address to convert, as a
  * Unicode string.
  * @returns {String} The Punycode representation of the given domain name or
  * email address.
  */
	function toASCII(input) {
		return mapDomain(input, function (string) {
			return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
		'version': '1.4.1',
		/**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if ("function" == 'function' && _typeof(__webpack_require__(32)) == 'object' && __webpack_require__(32)) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}
})(this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)(module), __webpack_require__(22)))

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(90);
exports.encode = exports.stringify = __webpack_require__(91);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use restrict";

//Number of bits in an integer

var INT_BITS = 32;

//Constants
exports.INT_BITS = INT_BITS;
exports.INT_MAX = 0x7fffffff;
exports.INT_MIN = -1 << INT_BITS - 1;

//Returns -1, 0, +1 depending on sign of x
exports.sign = function (v) {
  return (v > 0) - (v < 0);
};

//Computes absolute value of integer
exports.abs = function (v) {
  var mask = v >> INT_BITS - 1;
  return (v ^ mask) - mask;
};

//Computes minimum of integers x and y
exports.min = function (x, y) {
  return y ^ (x ^ y) & -(x < y);
};

//Computes maximum of integers x and y
exports.max = function (x, y) {
  return x ^ (x ^ y) & -(x < y);
};

//Checks if a number is a power of two
exports.isPow2 = function (v) {
  return !(v & v - 1) && !!v;
};

//Computes log base 2 of v
exports.log2 = function (v) {
  var r, shift;
  r = (v > 0xFFFF) << 4;v >>>= r;
  shift = (v > 0xFF) << 3;v >>>= shift;r |= shift;
  shift = (v > 0xF) << 2;v >>>= shift;r |= shift;
  shift = (v > 0x3) << 1;v >>>= shift;r |= shift;
  return r | v >> 1;
};

//Computes log base 10 of v
exports.log10 = function (v) {
  return v >= 1000000000 ? 9 : v >= 100000000 ? 8 : v >= 10000000 ? 7 : v >= 1000000 ? 6 : v >= 100000 ? 5 : v >= 10000 ? 4 : v >= 1000 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
};

//Counts number of bits
exports.popCount = function (v) {
  v = v - (v >>> 1 & 0x55555555);
  v = (v & 0x33333333) + (v >>> 2 & 0x33333333);
  return (v + (v >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
};

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function (v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
};

//Rounds down to previous power of 2
exports.prevPow2 = function (v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v >>> 1);
};

//Computes parity of word
exports.parity = function (v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return 0x6996 >>> v & 1;
};

var REVERSE_TABLE = new Array(256);

(function (tab) {
  for (var i = 0; i < 256; ++i) {
    var v = i,
        r = i,
        s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = r << s & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function (v) {
  return REVERSE_TABLE[v & 0xff] << 24 | REVERSE_TABLE[v >>> 8 & 0xff] << 16 | REVERSE_TABLE[v >>> 16 & 0xff] << 8 | REVERSE_TABLE[v >>> 24 & 0xff];
};

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function (x, y) {
  x &= 0xFFFF;
  x = (x | x << 8) & 0x00FF00FF;
  x = (x | x << 4) & 0x0F0F0F0F;
  x = (x | x << 2) & 0x33333333;
  x = (x | x << 1) & 0x55555555;

  y &= 0xFFFF;
  y = (y | y << 8) & 0x00FF00FF;
  y = (y | y << 4) & 0x0F0F0F0F;
  y = (y | y << 2) & 0x33333333;
  y = (y | y << 1) & 0x55555555;

  return x | y << 1;
};

//Extracts the nth interleaved component
exports.deinterleave2 = function (v, n) {
  v = v >>> n & 0x55555555;
  v = (v | v >>> 1) & 0x33333333;
  v = (v | v >>> 2) & 0x0F0F0F0F;
  v = (v | v >>> 4) & 0x00FF00FF;
  v = (v | v >>> 16) & 0x000FFFF;
  return v << 16 >> 16;
};

//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function (x, y, z) {
  x &= 0x3FF;
  x = (x | x << 16) & 4278190335;
  x = (x | x << 8) & 251719695;
  x = (x | x << 4) & 3272356035;
  x = (x | x << 2) & 1227133513;

  y &= 0x3FF;
  y = (y | y << 16) & 4278190335;
  y = (y | y << 8) & 251719695;
  y = (y | y << 4) & 3272356035;
  y = (y | y << 2) & 1227133513;
  x |= y << 1;

  z &= 0x3FF;
  z = (z | z << 16) & 4278190335;
  z = (z | z << 8) & 251719695;
  z = (z | z << 4) & 3272356035;
  z = (z | z << 2) & 1227133513;

  return x | z << 2;
};

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function (v, n) {
  v = v >>> n & 1227133513;
  v = (v | v >>> 2) & 3272356035;
  v = (v | v >>> 4) & 251719695;
  v = (v | v >>> 8) & 4278190335;
  v = (v | v >>> 16) & 0x3FF;
  return v << 22 >> 22;
};

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function (v) {
  var t = v | v - 1;
  return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * A set of functions used to handle masking.
 *
 * @class
 * @memberof PIXI
 */

var CanvasMaskManager = function () {
    /**
     * @param {PIXI.CanvasRenderer} renderer - The canvas renderer.
     */
    function CanvasMaskManager(renderer) {
        _classCallCheck(this, CanvasMaskManager);

        this.renderer = renderer;
    }

    /**
     * This method adds it to the current stack of masks.
     *
     * @param {object} maskData - the maskData that will be pushed
     */


    _createClass(CanvasMaskManager, [{
        key: 'pushMask',
        value: function pushMask(maskData) {
            var renderer = this.renderer;

            renderer.context.save();

            var cacheAlpha = maskData.alpha;
            var transform = maskData.transform.worldTransform;
            var resolution = renderer.resolution;

            renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

            // TODO suport sprite alpha masks??
            // lots of effort required. If demand is great enough..
            if (!maskData._texture) {
                this.renderGraphicsShape(maskData);
                renderer.context.clip();
            }

            maskData.worldAlpha = cacheAlpha;
        }

        /**
         * Renders a PIXI.Graphics shape.
         *
         * @param {PIXI.Graphics} graphics - The object to render.
         */

    }, {
        key: 'renderGraphicsShape',
        value: function renderGraphicsShape(graphics) {
            var context = this.renderer.context;
            var len = graphics.graphicsData.length;

            if (len === 0) {
                return;
            }

            context.beginPath();

            for (var i = 0; i < len; i++) {
                var data = graphics.graphicsData[i];
                var shape = data.shape;

                if (data.type === __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].POLY) {
                    var points = shape.points;

                    context.moveTo(points[0], points[1]);

                    for (var j = 1; j < points.length / 2; j++) {
                        context.lineTo(points[j * 2], points[j * 2 + 1]);
                    }

                    // if the first and last point are the same close the path - much neater :)
                    if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
                        context.closePath();
                    }
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].RECT) {
                    context.rect(shape.x, shape.y, shape.width, shape.height);
                    context.closePath();
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].CIRC) {
                    // TODO - need to be Undefined!
                    context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
                    context.closePath();
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].ELIP) {
                    // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

                    var w = shape.width * 2;
                    var h = shape.height * 2;

                    var x = shape.x - w / 2;
                    var y = shape.y - h / 2;

                    var kappa = 0.5522848;
                    var ox = w / 2 * kappa; // control point offset horizontal
                    var oy = h / 2 * kappa; // control point offset vertical
                    var xe = x + w; // x-end
                    var ye = y + h; // y-end
                    var xm = x + w / 2; // x-middle
                    var ym = y + h / 2; // y-middle

                    context.moveTo(x, ym);
                    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
                    context.closePath();
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_0__const__["e" /* SHAPES */].RREC) {
                    var rx = shape.x;
                    var ry = shape.y;
                    var width = shape.width;
                    var height = shape.height;
                    var radius = shape.radius;

                    var maxRadius = Math.min(width, height) / 2 | 0;

                    radius = radius > maxRadius ? maxRadius : radius;

                    context.moveTo(rx, ry + radius);
                    context.lineTo(rx, ry + height - radius);
                    context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
                    context.lineTo(rx + width - radius, ry + height);
                    context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
                    context.lineTo(rx + width, ry + radius);
                    context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
                    context.lineTo(rx + radius, ry);
                    context.quadraticCurveTo(rx, ry, rx, ry + radius);
                    context.closePath();
                }
            }
        }

        /**
         * Restores the current drawing context to the state it was before the mask was applied.
         *
         * @param {PIXI.CanvasRenderer} renderer - The renderer context to use.
         */

    }, {
        key: 'popMask',
        value: function popMask(renderer) {
            renderer.context.restore();
            renderer.invalidateBlendMode();
        }

        /**
         * Destroys this canvas mask manager.
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            /* empty */
        }
    }]);

    return CanvasMaskManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (CanvasMaskManager);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapCanvasBlendModesToPixi;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canUseNewCanvasBlendModes__ = __webpack_require__(36);



/**
 * Maps blend combinations to Canvas.
 *
 * @memberof PIXI
 * @function mapCanvasBlendModesToPixi
 * @private
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
function mapCanvasBlendModesToPixi() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (Object(__WEBPACK_IMPORTED_MODULE_1__canUseNewCanvasBlendModes__["a" /* default */])()) {
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD] = 'lighter'; // IS THIS OK???
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].MULTIPLY] = 'multiply';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN] = 'screen';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].OVERLAY] = 'overlay';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].DARKEN] = 'darken';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].LIGHTEN] = 'lighten';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].COLOR_DODGE] = 'color-dodge';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].COLOR_BURN] = 'color-burn';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].HARD_LIGHT] = 'hard-light';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SOFT_LIGHT] = 'soft-light';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].DIFFERENCE] = 'difference';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].EXCLUSION] = 'exclusion';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].HUE] = 'hue';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SATURATION] = 'saturate';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].COLOR] = 'color';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].LUMINOSITY] = 'luminosity';
    } else {
        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD] = 'lighter'; // IS THIS OK???
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].MULTIPLY] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].OVERLAY] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].DARKEN] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].LIGHTEN] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].COLOR_DODGE] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].COLOR_BURN] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].HARD_LIGHT] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SOFT_LIGHT] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].DIFFERENCE] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].EXCLUSION] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].HUE] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SATURATION] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].COLOR] = 'source-over';
        array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].LUMINOSITY] = 'source-over';
    }
    // not-premultiplied, only for webgl
    array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL_NPM] = array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].NORMAL];
    array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD_NPM] = array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].ADD];
    array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN_NPM] = array[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* BLEND_MODES */].SCREEN];

    return array;
}

/***/ }),
/* 95 */
/***/ (function(module, exports) {


/**
 * Helper class to create a webGL Context
 *
 * @class
 * @memberof PIXI.glCore
 * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
 * @param options {Object} An options object that gets passed in to the canvas element containing the context attributes,
 *                         see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext for the options available
 * @return {WebGLRenderingContext} the WebGL context
 */
var createContext = function createContext(canvas, options) {
    var gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);

    if (!gl) {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    return gl;
};

module.exports = createContext;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);

/**
 * Helper class to create a webGL buffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param type {gl.ARRAY_BUFFER | gl.ELEMENT_ARRAY_BUFFER} @mat
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 * @param drawType {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
 */
var Buffer = function Buffer(gl, type, data, drawType) {

  /**
      * The current WebGL rendering context
      *
      * @member {WebGLRenderingContext}
      */
  this.gl = gl;

  /**
      * The WebGL buffer, created upon instantiation
      *
      * @member {WebGLBuffer}
      */
  this.buffer = gl.createBuffer();

  /**
      * The type of the buffer
      *
      * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
      */
  this.type = type || gl.ARRAY_BUFFER;

  /**
      * The draw type of the buffer
      *
      * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
      */
  this.drawType = drawType || gl.STATIC_DRAW;

  /**
      * The data in the buffer, as a typed array
      *
      * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
      */
  this.data = EMPTY_ARRAY_BUFFER;

  if (data) {
    this.upload(data);
  }

  this._updateID = 0;
};

/**
 * Uploads the buffer to the GPU
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data to upload
 * @param offset {Number} if only a subset of the data should be uploaded, this is the amount of data to subtract
 * @param dontBind {Boolean} whether to bind the buffer before uploading it
 */
Buffer.prototype.upload = function (data, offset, dontBind) {
  // todo - needed?
  if (!dontBind) this.bind();

  var gl = this.gl;

  data = data || this.data;
  offset = offset || 0;

  if (this.data.byteLength >= data.byteLength) {
    gl.bufferSubData(this.type, offset, data);
  } else {
    gl.bufferData(this.type, data, this.drawType);
  }

  this.data = data;
};
/**
 * Binds the buffer
 *
 */
Buffer.prototype.bind = function () {
  var gl = this.gl;
  gl.bindBuffer(this.type, this.buffer);
};

Buffer.createVertexBuffer = function (gl, data, drawType) {
  return new Buffer(gl, gl.ARRAY_BUFFER, data, drawType);
};

Buffer.createIndexBuffer = function (gl, data, drawType) {
  return new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
};

Buffer.create = function (gl, type, data, drawType) {
  return new Buffer(gl, type, data, drawType);
};

/**
 * Destroys the buffer
 *
 */
Buffer.prototype.destroy = function () {
  this.gl.deleteBuffer(this.buffer);
};

module.exports = Buffer;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


var Texture = __webpack_require__(39);

/**
 * Helper class to create a webGL Framebuffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 */
var Framebuffer = function Framebuffer(gl, width, height) {
  /**
   * The current WebGL rendering context
   *
   * @member {WebGLRenderingContext}
   */
  this.gl = gl;

  /**
   * The frame buffer
   *
   * @member {WebGLFramebuffer}
   */
  this.framebuffer = gl.createFramebuffer();

  /**
   * The stencil buffer
   *
   * @member {WebGLRenderbuffer}
   */
  this.stencil = null;

  /**
   * The stencil buffer
   *
   * @member {PIXI.glCore.GLTexture}
   */
  this.texture = null;

  /**
   * The width of the drawing area of the buffer
   *
   * @member {Number}
   */
  this.width = width || 100;
  /**
   * The height of the drawing area of the buffer
   *
   * @member {Number}
   */
  this.height = height || 100;
};

/**
 * Adds a texture to the frame buffer
 * @param texture {PIXI.glCore.GLTexture}
 */
Framebuffer.prototype.enableTexture = function (texture) {
  var gl = this.gl;

  this.texture = texture || new Texture(gl);

  this.texture.bind();

  //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

  this.bind();

  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
};

/**
 * Initialises the stencil buffer
 */
Framebuffer.prototype.enableStencil = function () {
  if (this.stencil) return;

  var gl = this.gl;

  this.stencil = gl.createRenderbuffer();

  gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);

  // TODO.. this is depth AND stencil?
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
};

/**
 * Erases the drawing area and fills it with a colour
 * @param  r {Number} the red value of the clearing colour
 * @param  g {Number} the green value of the clearing colour
 * @param  b {Number} the blue value of the clearing colour
 * @param  a {Number} the alpha value of the clearing colour
 */
Framebuffer.prototype.clear = function (r, g, b, a) {
  this.bind();

  var gl = this.gl;

  gl.clearColor(r, g, b, a);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

/**
 * Binds the frame buffer to the WebGL context
 */
Framebuffer.prototype.bind = function () {
  var gl = this.gl;
  gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
};

/**
 * Unbinds the frame buffer to the WebGL context
 */
Framebuffer.prototype.unbind = function () {
  var gl = this.gl;
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};
/**
 * Resizes the drawing area of the buffer to the given width and height
 * @param  width  {Number} the new width
 * @param  height {Number} the new height
 */
Framebuffer.prototype.resize = function (width, height) {
  var gl = this.gl;

  this.width = width;
  this.height = height;

  if (this.texture) {
    this.texture.uploadData(null, width, height);
  }

  if (this.stencil) {
    // update the stencil buffer width and height
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
  }
};

/**
 * Destroys this buffer
 */
Framebuffer.prototype.destroy = function () {
  var gl = this.gl;

  //TODO
  if (this.texture) {
    this.texture.destroy();
  }

  gl.deleteFramebuffer(this.framebuffer);

  this.gl = null;

  this.stencil = null;
  this.texture = null;
};

/**
 * Creates a frame buffer with a texture containing the given data
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 */
Framebuffer.createRGBA = function (gl, width, height, data) {
  var texture = Texture.fromData(gl, null, width, height);
  texture.enableNearestScaling();
  texture.enableWrapClamp();

  //now create the framebuffer object and attach the texture to it.
  var fbo = new Framebuffer(gl, width, height);
  fbo.enableTexture(texture);
  //fbo.enableStencil(); // get this back on soon!

  //fbo.enableStencil(); // get this back on soon!

  fbo.unbind();

  return fbo;
};

/**
 * Creates a frame buffer with a texture containing the given data
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 */
Framebuffer.createFloat32 = function (gl, width, height, data) {
  // create a new texture..
  var texture = new Texture.fromData(gl, data, width, height);
  texture.enableNearestScaling();
  texture.enableWrapClamp();

  //now create the framebuffer object and attach the texture to it.
  var fbo = new Framebuffer(gl, width, height);
  fbo.enableTexture(texture);

  fbo.unbind();

  return fbo;
};

module.exports = Framebuffer;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


var compileProgram = __webpack_require__(40),
    extractAttributes = __webpack_require__(41),
    extractUniforms = __webpack_require__(43),
    setPrecision = __webpack_require__(45),
    generateUniformAccessObject = __webpack_require__(46);

/**
 * Helper class to create a webGL Shader
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param precision {string} The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 * @param attributeLocations {object} A key value pair showing which location eact attribute should sit eg {position:0, uvs:1}
 */
var Shader = function Shader(gl, vertexSrc, fragmentSrc, precision, attributeLocations) {
	/**
  * The current WebGL rendering context
  *
  * @member {WebGLRenderingContext}
  */
	this.gl = gl;

	if (precision) {
		vertexSrc = setPrecision(vertexSrc, precision);
		fragmentSrc = setPrecision(fragmentSrc, precision);
	}

	/**
  * The shader program
  *
  * @member {WebGLProgram}
  */
	// First compile the program..
	this.program = compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations);

	/**
  * The attributes of the shader as an object containing the following properties
  * {
  * 	type,
  * 	size,
  * 	location,
  * 	pointer
  * }
  * @member {Object}
  */
	// next extract the attributes
	this.attributes = extractAttributes(gl, this.program);

	this.uniformData = extractUniforms(gl, this.program);

	/**
  * The uniforms of the shader as an object containing the following properties
  * {
  * 	gl,
  * 	data
  * }
  * @member {Object}
  */
	this.uniforms = generateUniformAccessObject(gl, this.uniformData);
};
/**
 * Uses this shader
 * 
 * @return {PIXI.glCore.GLShader} Returns itself.
 */
Shader.prototype.bind = function () {
	this.gl.useProgram(this.program);
	return this;
};

/**
 * Destroys this shader
 * TODO
 */
Shader.prototype.destroy = function () {
	this.attributes = null;
	this.uniformData = null;
	this.uniforms = null;

	var gl = this.gl;
	gl.deleteProgram(this.program);
};

module.exports = Shader;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


// state object//
var setVertexAttribArrays = __webpack_require__(38);

/**
 * Helper class to work with WebGL VertexArrayObjects (vaos)
 * Only works if WebGL extensions are enabled (they usually are)
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 */
function VertexArrayObject(gl, state) {
    this.nativeVaoExtension = null;

    if (!VertexArrayObject.FORCE_NATIVE) {
        this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
    }

    this.nativeState = state;

    if (this.nativeVaoExtension) {
        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();

        var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

        // VAO - overwrite the state..
        this.nativeState = {
            tempAttribState: new Array(maxAttribs),
            attribState: new Array(maxAttribs)
        };
    }

    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     * An array of attributes
     *
     * @member {Array}
     */
    this.attributes = [];

    /**
     * @member {PIXI.glCore.GLBuffer}
     */
    this.indexBuffer = null;

    /**
     * A boolean flag
     *
     * @member {Boolean}
     */
    this.dirty = false;
}

VertexArrayObject.prototype.constructor = VertexArrayObject;
module.exports = VertexArrayObject;

/**
* Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
* If you find on older devices that things have gone a bit weird then set this to true.
*/
/**
 * Lets the VAO know if you should use the WebGL extension or the native methods.
 * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
 * If you find on older devices that things have gone a bit weird then set this to true.
 * @static
 * @property {Boolean} FORCE_NATIVE
 */
VertexArrayObject.FORCE_NATIVE = false;

/**
 * Binds the buffer
 */
VertexArrayObject.prototype.bind = function () {
    if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);

        if (this.dirty) {
            this.dirty = false;
            this.activate();
            return this;
        }
        if (this.indexBuffer) {
            this.indexBuffer.bind();
        }
    } else {
        this.activate();
    }

    return this;
};

/**
 * Unbinds the buffer
 */
VertexArrayObject.prototype.unbind = function () {
    if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(null);
    }

    return this;
};

/**
 * Uses this vao
 */
VertexArrayObject.prototype.activate = function () {

    var gl = this.gl;
    var lastBuffer = null;

    for (var i = 0; i < this.attributes.length; i++) {
        var attrib = this.attributes[i];

        if (lastBuffer !== attrib.buffer) {
            attrib.buffer.bind();
            lastBuffer = attrib.buffer;
        }

        gl.vertexAttribPointer(attrib.attribute.location, attrib.attribute.size, attrib.type || gl.FLOAT, attrib.normalized || false, attrib.stride || 0, attrib.start || 0);
    }

    setVertexAttribArrays(gl, this.attributes, this.nativeState);

    if (this.indexBuffer) {
        this.indexBuffer.bind();
    }

    return this;
};

/**
 *
 * @param buffer     {PIXI.gl.GLBuffer}
 * @param attribute  {*}
 * @param type       {String}
 * @param normalized {Boolean}
 * @param stride     {Number}
 * @param start      {Number}
 */
VertexArrayObject.prototype.addAttribute = function (buffer, attribute, type, normalized, stride, start) {
    this.attributes.push({
        buffer: buffer,
        attribute: attribute,

        location: attribute.location,
        type: type || this.gl.FLOAT,
        normalized: normalized || false,
        stride: stride || 0,
        start: start || 0
    });

    this.dirty = true;

    return this;
};

/**
 *
 * @param buffer   {PIXI.gl.GLBuffer}
 */
VertexArrayObject.prototype.addIndex = function (buffer /*, options*/) {
    this.indexBuffer = buffer;

    this.dirty = true;

    return this;
};

/**
 * Unbinds this vao and disables it
 */
VertexArrayObject.prototype.clear = function () {
    // var gl = this.gl;

    // TODO - should this function unbind after clear?
    // for now, no but lets see what happens in the real world!
    if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
    }

    this.attributes.length = 0;
    this.indexBuffer = null;

    return this;
};

/**
 * @param type  {Number}
 * @param size  {Number}
 * @param start {Number}
 */
VertexArrayObject.prototype.draw = function (type, size, start) {
    var gl = this.gl;

    if (this.indexBuffer) {
        gl.drawElements(type, size || this.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2);
    } else {
        // TODO need a better way to calculate size..
        gl.drawArrays(type, start, size || this.getSize());
    }

    return this;
};

/**
 * Destroy this vao
 */
VertexArrayObject.prototype.destroy = function () {
    // lose references
    this.gl = null;
    this.indexBuffer = null;
    this.attributes = null;
    this.nativeState = null;

    if (this.nativeVao) {
        this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
    }

    this.nativeVaoExtension = null;
    this.nativeVao = null;
};

VertexArrayObject.prototype.getSize = function () {
    var attrib = this.attributes[0];
    return attrib.buffer.data.length / (attrib.stride / 4 || attrib.attribute.size);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    compileProgram: __webpack_require__(40),
    defaultValue: __webpack_require__(44),
    extractAttributes: __webpack_require__(41),
    extractUniforms: __webpack_require__(43),
    generateUniformAccessObject: __webpack_require__(46),
    setPrecision: __webpack_require__(45),
    mapSize: __webpack_require__(42),
    mapType: __webpack_require__(18)
};

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderers_canvas_CanvasRenderer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CanvasTinter__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var canvasRenderWorldTransform = new __WEBPACK_IMPORTED_MODULE_2__math__["d" /* Matrix */]();

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original PixiJS version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now
 * share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasSpriteRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/CanvasSpriteRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching sprites.
 *
 * @class
 * @private
 * @memberof PIXI
 */

var CanvasSpriteRenderer = function () {
    /**
     * @param {PIXI.WebGLRenderer} renderer -The renderer sprite this batch works for.
     */
    function CanvasSpriteRenderer(renderer) {
        _classCallCheck(this, CanvasSpriteRenderer);

        this.renderer = renderer;
    }

    /**
     * Renders the sprite object.
     *
     * @param {PIXI.Sprite} sprite - the sprite to render when using this spritebatch
     */


    _createClass(CanvasSpriteRenderer, [{
        key: 'render',
        value: function render(sprite) {
            var texture = sprite._texture;
            var renderer = this.renderer;

            var width = texture._frame.width;
            var height = texture._frame.height;

            var wt = sprite.transform.worldTransform;
            var dx = 0;
            var dy = 0;

            if (texture.orig.width <= 0 || texture.orig.height <= 0 || !texture.baseTexture.source) {
                return;
            }

            renderer.setBlendMode(sprite.blendMode);

            //  Ignore null sources
            if (texture.valid) {
                renderer.context.globalAlpha = sprite.worldAlpha;

                // If smoothingEnabled is supported and we need to change the smoothing property for sprite texture
                var smoothingEnabled = texture.baseTexture.scaleMode === __WEBPACK_IMPORTED_MODULE_1__const__["d" /* SCALE_MODES */].LINEAR;

                if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled) {
                    renderer.context[renderer.smoothProperty] = smoothingEnabled;
                }

                if (texture.trim) {
                    dx = texture.trim.width / 2 + texture.trim.x - sprite.anchor.x * texture.orig.width;
                    dy = texture.trim.height / 2 + texture.trim.y - sprite.anchor.y * texture.orig.height;
                } else {
                    dx = (0.5 - sprite.anchor.x) * texture.orig.width;
                    dy = (0.5 - sprite.anchor.y) * texture.orig.height;
                }

                if (texture.rotate) {
                    wt.copy(canvasRenderWorldTransform);
                    wt = canvasRenderWorldTransform;
                    __WEBPACK_IMPORTED_MODULE_2__math__["c" /* GroupD8 */].matrixAppendRotationInv(wt, texture.rotate, dx, dy);
                    // the anchor has already been applied above, so lets set it to zero
                    dx = 0;
                    dy = 0;
                }

                dx -= width / 2;
                dy -= height / 2;

                // Allow for pixel rounding
                if (renderer.roundPixels) {
                    renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution | 0, wt.ty * renderer.resolution | 0);

                    dx = dx | 0;
                    dy = dy | 0;
                } else {
                    renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution, wt.ty * renderer.resolution);
                }

                var resolution = texture.baseTexture.resolution;

                if (sprite.tint !== 0xFFFFFF) {
                    if (sprite.cachedTint !== sprite.tint || sprite.tintedTexture.tintId !== sprite._texture._updateID) {
                        sprite.cachedTint = sprite.tint;

                        // TODO clean up caching - how to clean up the caches?
                        sprite.tintedTexture = __WEBPACK_IMPORTED_MODULE_3__CanvasTinter__["a" /* default */].getTintedTexture(sprite, sprite.tint);
                    }

                    renderer.context.drawImage(sprite.tintedTexture, 0, 0, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
                } else {
                    renderer.context.drawImage(texture.baseTexture.source, texture._frame.x * resolution, texture._frame.y * resolution, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
                }
            }
        }

        /**
         * destroy the sprite object.
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.renderer = null;
        }
    }]);

    return CanvasSpriteRenderer;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (CanvasSpriteRenderer);


__WEBPACK_IMPORTED_MODULE_0__renderers_canvas_CanvasRenderer__["a" /* default */].registerPlugin('sprite', CanvasSpriteRenderer);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprites_Sprite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_Texture__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextStyle__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TextMetrics__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_trimCanvas__ = __webpack_require__(103);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint max-depth: [2, 8] */










var defaultDestroyOptions = {
    texture: true,
    children: false,
    baseTexture: true
};

/**
 * A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string,
 * or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *
 * A Text can be created directly from a string and a style object
 *
 * ```js
 * let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
 * ```
 *
 * @class
 * @extends PIXI.Sprite
 * @memberof PIXI
 */

var Text = function (_Sprite) {
    _inherits(Text, _Sprite);

    /**
     * @param {string} text - The string that you would like the text to display
     * @param {object|PIXI.TextStyle} [style] - The style parameters
     * @param {HTMLCanvasElement} [canvas] - The canvas element for drawing text
     */
    function Text(text, style, canvas) {
        _classCallCheck(this, Text);

        canvas = canvas || document.createElement('canvas');

        canvas.width = 3;
        canvas.height = 3;

        var texture = __WEBPACK_IMPORTED_MODULE_1__textures_Texture__["a" /* default */].fromCanvas(canvas, __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].SCALE_MODE, 'text');

        texture.orig = new __WEBPACK_IMPORTED_MODULE_2__math__["h" /* Rectangle */]();
        texture.trim = new __WEBPACK_IMPORTED_MODULE_2__math__["h" /* Rectangle */]();

        // base texture is already automatically added to the cache, now adding the actual texture
        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, texture));

        __WEBPACK_IMPORTED_MODULE_1__textures_Texture__["a" /* default */].addToCache(_this._texture, _this._texture.baseTexture.textureCacheIds[0]);

        /**
         * The canvas element that everything is drawn to
         *
         * @member {HTMLCanvasElement}
         */
        _this.canvas = canvas;

        /**
         * The canvas 2d context that everything is drawn with
         * @member {CanvasRenderingContext2D}
         */
        _this.context = _this.canvas.getContext('2d');

        /**
         * The resolution / device pixel ratio of the canvas. This is set automatically by the renderer.
         * @member {number}
         * @default 1
         */
        _this.resolution = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].RESOLUTION;

        /**
         * Private tracker for the current text.
         *
         * @member {string}
         * @private
         */
        _this._text = null;

        /**
         * Private tracker for the current style.
         *
         * @member {object}
         * @private
         */
        _this._style = null;
        /**
         * Private listener to track style changes.
         *
         * @member {Function}
         * @private
         */
        _this._styleListener = null;

        /**
         * Private tracker for the current font.
         *
         * @member {string}
         * @private
         */
        _this._font = '';

        _this.text = text;
        _this.style = style;

        _this.localStyleID = -1;
        return _this;
    }

    /**
     * Renders text and updates it when needed.
     *
     * @private
     * @param {boolean} respectDirty - Whether to abort updating the text if the Text isn't dirty and the function is called.
     */


    _createClass(Text, [{
        key: 'updateText',
        value: function updateText(respectDirty) {
            var style = this._style;

            // check if style has changed..
            if (this.localStyleID !== style.styleID) {
                this.dirty = true;
                this.localStyleID = style.styleID;
            }

            if (!this.dirty && respectDirty) {
                return;
            }

            this._font = this._style.toFontString();

            var context = this.context;
            var measured = __WEBPACK_IMPORTED_MODULE_7__TextMetrics__["a" /* default */].measureText(this._text, this._style, this._style.wordWrap, this.canvas);
            var width = measured.width;
            var height = measured.height;
            var lines = measured.lines;
            var lineHeight = measured.lineHeight;
            var lineWidths = measured.lineWidths;
            var maxLineWidth = measured.maxLineWidth;
            var fontProperties = measured.fontProperties;

            this.canvas.width = Math.ceil((width + style.padding * 2) * this.resolution);
            this.canvas.height = Math.ceil((height + style.padding * 2) * this.resolution);

            context.scale(this.resolution, this.resolution);

            context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            context.font = this._font;
            context.strokeStyle = style.stroke;
            context.lineWidth = style.strokeThickness;
            context.textBaseline = style.textBaseline;
            context.lineJoin = style.lineJoin;
            context.miterLimit = style.miterLimit;

            var linePositionX = void 0;
            var linePositionY = void 0;

            if (style.dropShadow) {
                context.fillStyle = style.dropShadowColor;
                context.globalAlpha = style.dropShadowAlpha;
                context.shadowBlur = style.dropShadowBlur;

                if (style.dropShadowBlur > 0) {
                    context.shadowColor = style.dropShadowColor;
                }

                var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
                var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;

                for (var i = 0; i < lines.length; i++) {
                    linePositionX = style.strokeThickness / 2;
                    linePositionY = style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent;

                    if (style.align === 'right') {
                        linePositionX += maxLineWidth - lineWidths[i];
                    } else if (style.align === 'center') {
                        linePositionX += (maxLineWidth - lineWidths[i]) / 2;
                    }

                    if (style.fill) {
                        this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding);

                        if (style.stroke && style.strokeThickness) {
                            context.strokeStyle = style.dropShadowColor;
                            this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding, true);
                            context.strokeStyle = style.stroke;
                        }
                    }
                }
            }

            // reset the shadow blur and alpha that was set by the drop shadow, for the regular text
            context.shadowBlur = 0;
            context.globalAlpha = 1;

            // set canvas text styles
            context.fillStyle = this._generateFillStyle(style, lines);

            // draw lines line by line
            for (var _i = 0; _i < lines.length; _i++) {
                linePositionX = style.strokeThickness / 2;
                linePositionY = style.strokeThickness / 2 + _i * lineHeight + fontProperties.ascent;

                if (style.align === 'right') {
                    linePositionX += maxLineWidth - lineWidths[_i];
                } else if (style.align === 'center') {
                    linePositionX += (maxLineWidth - lineWidths[_i]) / 2;
                }

                if (style.stroke && style.strokeThickness) {
                    this.drawLetterSpacing(lines[_i], linePositionX + style.padding, linePositionY + style.padding, true);
                }

                if (style.fill) {
                    this.drawLetterSpacing(lines[_i], linePositionX + style.padding, linePositionY + style.padding);
                }
            }

            this.updateTexture();
        }

        /**
         * Render the text with letter-spacing.
         * @param {string} text - The text to draw
         * @param {number} x - Horizontal position to draw the text
         * @param {number} y - Vertical position to draw the text
         * @param {boolean} [isStroke=false] - Is this drawing for the outside stroke of the
         *  text? If not, it's for the inside fill
         * @private
         */

    }, {
        key: 'drawLetterSpacing',
        value: function drawLetterSpacing(text, x, y) {
            var isStroke = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var style = this._style;

            // letterSpacing of 0 means normal
            var letterSpacing = style.letterSpacing;

            if (letterSpacing === 0) {
                if (isStroke) {
                    this.context.strokeText(text, x, y);
                } else {
                    this.context.fillText(text, x, y);
                }

                return;
            }

            var characters = String.prototype.split.call(text, '');
            var currentPosition = x;
            var index = 0;
            var current = '';

            while (index < text.length) {
                current = characters[index++];
                if (isStroke) {
                    this.context.strokeText(current, currentPosition, y);
                } else {
                    this.context.fillText(current, currentPosition, y);
                }
                currentPosition += this.context.measureText(current).width + letterSpacing;
            }
        }

        /**
         * Updates texture size based on canvas size
         *
         * @private
         */

    }, {
        key: 'updateTexture',
        value: function updateTexture() {
            var canvas = this.canvas;

            if (this._style.trim) {
                var trimmed = Object(__WEBPACK_IMPORTED_MODULE_8__utils_trimCanvas__["a" /* default */])(canvas);

                canvas.width = trimmed.width;
                canvas.height = trimmed.height;
                this.context.putImageData(trimmed.data, 0, 0);
            }

            var texture = this._texture;
            var style = this._style;
            var padding = style.trim ? 0 : style.padding;
            var baseTexture = texture.baseTexture;

            baseTexture.hasLoaded = true;
            baseTexture.resolution = this.resolution;

            baseTexture.realWidth = canvas.width;
            baseTexture.realHeight = canvas.height;
            baseTexture.width = canvas.width / this.resolution;
            baseTexture.height = canvas.height / this.resolution;

            texture.trim.width = texture._frame.width = canvas.width / this.resolution;
            texture.trim.height = texture._frame.height = canvas.height / this.resolution;
            texture.trim.x = -padding;
            texture.trim.y = -padding;

            texture.orig.width = texture._frame.width - padding * 2;
            texture.orig.height = texture._frame.height - padding * 2;

            // call sprite onTextureUpdate to update scale if _width or _height were set
            this._onTextureUpdate();

            baseTexture.emit('update', baseTexture);

            this.dirty = false;
        }

        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: 'renderWebGL',
        value: function renderWebGL(renderer) {
            if (this.resolution !== renderer.resolution) {
                this.resolution = renderer.resolution;
                this.dirty = true;
            }

            this.updateText(true);

            _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'renderWebGL', this).call(this, renderer);
        }

        /**
         * Renders the object using the Canvas renderer
         *
         * @private
         * @param {PIXI.CanvasRenderer} renderer - The renderer
         */

    }, {
        key: '_renderCanvas',
        value: function _renderCanvas(renderer) {
            if (this.resolution !== renderer.resolution) {
                this.resolution = renderer.resolution;
                this.dirty = true;
            }

            this.updateText(true);

            _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), '_renderCanvas', this).call(this, renderer);
        }

        /**
         * Gets the local bounds of the text object.
         *
         * @param {Rectangle} rect - The output rectangle.
         * @return {Rectangle} The bounds.
         */

    }, {
        key: 'getLocalBounds',
        value: function getLocalBounds(rect) {
            this.updateText(true);

            return _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'getLocalBounds', this).call(this, rect);
        }

        /**
         * calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.
         */

    }, {
        key: '_calculateBounds',
        value: function _calculateBounds() {
            this.updateText(true);
            this.calculateVertices();
            // if we have already done this on THIS frame.
            this._bounds.addQuad(this.vertexData);
        }

        /**
         * Method to be called upon a TextStyle change.
         * @private
         */

    }, {
        key: '_onStyleChange',
        value: function _onStyleChange() {
            this.dirty = true;
        }

        /**
         * Generates the fill style. Can automatically generate a gradient based on the fill style being an array
         *
         * @private
         * @param {object} style - The style.
         * @param {string[]} lines - The lines of text.
         * @return {string|number|CanvasGradient} The fill style
         */

    }, {
        key: '_generateFillStyle',
        value: function _generateFillStyle(style, lines) {
            if (!Array.isArray(style.fill)) {
                return style.fill;
            }

            // cocoon on canvas+ cannot generate textures, so use the first colour instead
            if (navigator.isCocoonJS) {
                return style.fill[0];
            }

            // the gradient will be evenly spaced out according to how large the array is.
            // ['#FF0000', '#00FF00', '#0000FF'] would created stops at 0.25, 0.5 and 0.75
            var gradient = void 0;
            var totalIterations = void 0;
            var currentIteration = void 0;
            var stop = void 0;

            var width = this.canvas.width / this.resolution;
            var height = this.canvas.height / this.resolution;

            // make a copy of the style settings, so we can manipulate them later
            var fill = style.fill.slice();
            var fillGradientStops = style.fillGradientStops.slice();

            // wanting to evenly distribute the fills. So an array of 4 colours should give fills of 0.25, 0.5 and 0.75
            if (!fillGradientStops.length) {
                var lengthPlus1 = fill.length + 1;

                for (var i = 1; i < lengthPlus1; ++i) {
                    fillGradientStops.push(i / lengthPlus1);
                }
            }

            // stop the bleeding of the last gradient on the line above to the top gradient of the this line
            // by hard defining the first gradient colour at point 0, and last gradient colour at point 1
            fill.unshift(style.fill[0]);
            fillGradientStops.unshift(0);

            fill.push(style.fill[style.fill.length - 1]);
            fillGradientStops.push(1);

            if (style.fillGradientType === __WEBPACK_IMPORTED_MODULE_4__const__["g" /* TEXT_GRADIENT */].LINEAR_VERTICAL) {
                // start the gradient at the top center of the canvas, and end at the bottom middle of the canvas
                gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);

                // we need to repeat the gradient so that each individual line of text has the same vertical gradient effect
                // ['#FF0000', '#00FF00', '#0000FF'] over 2 lines would create stops at 0.125, 0.25, 0.375, 0.625, 0.75, 0.875
                totalIterations = (fill.length + 1) * lines.length;
                currentIteration = 0;
                for (var _i2 = 0; _i2 < lines.length; _i2++) {
                    currentIteration += 1;
                    for (var j = 0; j < fill.length; j++) {
                        if (typeof fillGradientStops[j] === 'number') {
                            stop = fillGradientStops[j] / lines.length + _i2 / lines.length;
                        } else {
                            stop = currentIteration / totalIterations;
                        }
                        gradient.addColorStop(stop, fill[j]);
                        currentIteration++;
                    }
                }
            } else {
                // start the gradient at the center left of the canvas, and end at the center right of the canvas
                gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);

                // can just evenly space out the gradients in this case, as multiple lines makes no difference
                // to an even left to right gradient
                totalIterations = fill.length + 1;
                currentIteration = 1;

                for (var _i3 = 0; _i3 < fill.length; _i3++) {
                    if (typeof fillGradientStops[_i3] === 'number') {
                        stop = fillGradientStops[_i3];
                    } else {
                        stop = currentIteration / totalIterations;
                    }
                    gradient.addColorStop(stop, fill[_i3]);
                    currentIteration++;
                }
            }

            return gradient;
        }

        /**
         * Destroys this text object.
         * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
         * the majority of the time the texture will not be shared with any other Sprites.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their
         *  destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
         */

    }, {
        key: 'destroy',
        value: function destroy(options) {
            if (typeof options === 'boolean') {
                options = { children: options };
            }

            options = Object.assign({}, defaultDestroyOptions, options);

            _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'destroy', this).call(this, options);

            // make sure to reset the the context and canvas.. dont want this hanging around in memory!
            this.context = null;
            this.canvas = null;

            this._style = null;
        }

        /**
         * The width of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'width',
        get: function get() {
            this.updateText(true);

            return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.updateText(true);

            var s = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["sign"])(this.scale.x) || 1;

            this.scale.x = s * value / this._texture.orig.width;
            this._width = value;
        }

        /**
         * The height of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            this.updateText(true);

            return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.updateText(true);

            var s = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["sign"])(this.scale.y) || 1;

            this.scale.y = s * value / this._texture.orig.height;
            this._height = value;
        }

        /**
         * Set the style of the text. Set up an event listener to listen for changes on the style
         * object and mark the text as dirty.
         *
         * @member {object|PIXI.TextStyle}
         */

    }, {
        key: 'style',
        get: function get() {
            return this._style;
        },
        set: function set(style) // eslint-disable-line require-jsdoc
        {
            style = style || {};

            if (style instanceof __WEBPACK_IMPORTED_MODULE_6__TextStyle__["a" /* default */]) {
                this._style = style;
            } else {
                this._style = new __WEBPACK_IMPORTED_MODULE_6__TextStyle__["a" /* default */](style);
            }

            this.localStyleID = -1;
            this.dirty = true;
        }

        /**
         * Set the copy for the text object. To split a line you can use '\n'.
         *
         * @member {string}
         */

    }, {
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(text) // eslint-disable-line require-jsdoc
        {
            text = String(text === '' || text === null || text === undefined ? ' ' : text);

            if (this._text === text) {
                return;
            }
            this._text = text;
            this.dirty = true;
        }
    }]);

    return Text;
}(__WEBPACK_IMPORTED_MODULE_0__sprites_Sprite__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = trimCanvas;
/**
 * Trim transparent borders from a canvas
 *
 * @memberof PIXI
 * @function trimCanvas
 * @private
 * @param {HTMLCanvasElement} canvas - the canvas to trim
 * @returns {object} Trim data
 */
function trimCanvas(canvas) {
    // https://gist.github.com/remy/784508

    var width = canvas.width;
    var height = canvas.height;

    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, width, height);
    var pixels = imageData.data;
    var len = pixels.length;

    var bound = {
        top: null,
        left: null,
        right: null,
        bottom: null
    };
    var i = void 0;
    var x = void 0;
    var y = void 0;

    for (i = 0; i < len; i += 4) {
        if (pixels[i + 3] !== 0) {
            x = i / 4 % width;
            y = ~~(i / 4 / width);

            if (bound.top === null) {
                bound.top = y;
            }

            if (bound.left === null) {
                bound.left = x;
            } else if (x < bound.left) {
                bound.left = x;
            }

            if (bound.right === null) {
                bound.right = x + 1;
            } else if (bound.right < x) {
                bound.right = x + 1;
            }

            if (bound.bottom === null) {
                bound.bottom = y;
            } else if (bound.bottom < y) {
                bound.bottom = y;
            }
        }
    }

    width = bound.right - bound.left;
    height = bound.bottom - bound.top + 1;

    var data = context.getImageData(bound.left, bound.top, width, height);

    return {
        height: height,
        width: width,
        data: data
    };
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display_Container__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_RenderTexture__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textures_Texture__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GraphicsData__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprites_Sprite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__const__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__display_Bounds__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_bezierCurveTo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__renderers_canvas_CanvasRenderer__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var canvasRenderer = void 0;
var tempMatrix = new __WEBPACK_IMPORTED_MODULE_5__math__["d" /* Matrix */]();
var tempPoint = new __WEBPACK_IMPORTED_MODULE_5__math__["f" /* Point */]();
var tempColor1 = new Float32Array(4);
var tempColor2 = new Float32Array(4);

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */

var Graphics = function (_Container) {
    _inherits(Graphics, _Container);

    /**
     *
     * @param {boolean} [nativeLines=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     */
    function Graphics() {
        var nativeLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, Graphics);

        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number}
         * @default 1
         */
        var _this = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this));

        _this.fillAlpha = 1;

        /**
         * The width (thickness) of any lines drawn.
         *
         * @member {number}
         * @default 0
         */
        _this.lineWidth = 0;

        /**
         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         *
         * @member {boolean}
         */
        _this.nativeLines = nativeLines;

        /**
         * The color of any lines drawn.
         *
         * @member {string}
         * @default 0
         */
        _this.lineColor = 0;

        /**
         * Graphics data
         *
         * @member {PIXI.GraphicsData[]}
         * @private
         */
        _this.graphicsData = [];

        /**
         * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to
         * reset the tint.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        _this.tint = 0xFFFFFF;

        /**
         * The previous tint applied to the graphic shape. Used to compare to the current tint and
         * check if theres change.
         *
         * @member {number}
         * @private
         * @default 0xFFFFFF
         */
        _this._prevTint = 0xFFFFFF;

        /**
         * The blend mode to be applied to the graphic shape. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        _this.blendMode = __WEBPACK_IMPORTED_MODULE_7__const__["a" /* BLEND_MODES */].NORMAL;

        /**
         * Current path
         *
         * @member {PIXI.GraphicsData}
         * @private
         */
        _this.currentPath = null;

        /**
         * Array containing some WebGL-related properties used by the WebGL renderer.
         *
         * @member {object<number, object>}
         * @private
         */
        // TODO - _webgl should use a prototype object, not a random undocumented object...
        _this._webGL = {};

        /**
         * Whether this shape is being used as a mask.
         *
         * @member {boolean}
         */
        _this.isMask = false;

        /**
         * The bounds' padding used for bounds calculation.
         *
         * @member {number}
         */
        _this.boundsPadding = 0;

        /**
         * A cache of the local bounds to prevent recalculation.
         *
         * @member {PIXI.Rectangle}
         * @private
         */
        _this._localBounds = new __WEBPACK_IMPORTED_MODULE_8__display_Bounds__["a" /* default */]();

        /**
         * Used to detect if the graphics object has changed. If this is set to true then the graphics
         * object will be recalculated.
         *
         * @member {boolean}
         * @private
         */
        _this.dirty = 0;

        /**
         * Used to detect if we need to do a fast rect check using the id compare method
         * @type {Number}
         */
        _this.fastRectDirty = -1;

        /**
         * Used to detect if we clear the graphics webGL data
         * @type {Number}
         */
        _this.clearDirty = 0;

        /**
         * Used to detect if we we need to recalculate local bounds
         * @type {Number}
         */
        _this.boundsDirty = -1;

        /**
         * Used to detect if the cached sprite object needs to be updated.
         *
         * @member {boolean}
         * @private
         */
        _this.cachedSpriteDirty = false;

        _this._spriteRect = null;
        _this._fastRect = false;

        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof PIXI.Graphics#
         * @default false
         */
        return _this;
    }

    /**
     * Creates a new Graphics object with the same values as this one.
     * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
     *
     * @return {PIXI.Graphics} A clone of the graphics object
     */


    _createClass(Graphics, [{
        key: 'clone',
        value: function clone() {
            var clone = new Graphics();

            clone.renderable = this.renderable;
            clone.fillAlpha = this.fillAlpha;
            clone.lineWidth = this.lineWidth;
            clone.lineColor = this.lineColor;
            clone.tint = this.tint;
            clone.blendMode = this.blendMode;
            clone.isMask = this.isMask;
            clone.boundsPadding = this.boundsPadding;
            clone.dirty = 0;
            clone.cachedSpriteDirty = this.cachedSpriteDirty;

            // copy graphics data
            for (var i = 0; i < this.graphicsData.length; ++i) {
                clone.graphicsData.push(this.graphicsData[i].clone());
            }

            clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

            clone.updateLocalBounds();

            return clone;
        }

        /**
         * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
         * method or the drawCircle() method.
         *
         * @param {number} [lineWidth=0] - width of the line to draw, will update the objects stored style
         * @param {number} [color=0] - color of the line to draw, will update the objects stored style
         * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'lineStyle',
        value: function lineStyle() {
            var lineWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            this.lineWidth = lineWidth;
            this.lineColor = color;
            this.lineAlpha = alpha;

            if (this.currentPath) {
                if (this.currentPath.shape.points.length) {
                    // halfway through a line? start a new one!
                    var shape = new __WEBPACK_IMPORTED_MODULE_5__math__["g" /* Polygon */](this.currentPath.shape.points.slice(-2));

                    shape.closed = false;

                    this.drawShape(shape);
                } else {
                    // otherwise its empty so lets just set the line properties
                    this.currentPath.lineWidth = this.lineWidth;
                    this.currentPath.lineColor = this.lineColor;
                    this.currentPath.lineAlpha = this.lineAlpha;
                }
            }

            return this;
        }

        /**
         * Moves the current drawing position to x, y.
         *
         * @param {number} x - the X coordinate to move to
         * @param {number} y - the Y coordinate to move to
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'moveTo',
        value: function moveTo(x, y) {
            var shape = new __WEBPACK_IMPORTED_MODULE_5__math__["g" /* Polygon */]([x, y]);

            shape.closed = false;
            this.drawShape(shape);

            return this;
        }

        /**
         * Draws a line using the current line style from the current drawing position to (x, y);
         * The current drawing position is then set to (x, y).
         *
         * @param {number} x - the X coordinate to draw to
         * @param {number} y - the Y coordinate to draw to
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'lineTo',
        value: function lineTo(x, y) {
            this.currentPath.shape.points.push(x, y);
            this.dirty++;

            return this;
        }

        /**
         * Calculate the points for a quadratic bezier curve and then draws it.
         * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
         *
         * @param {number} cpX - Control point x
         * @param {number} cpY - Control point y
         * @param {number} toX - Destination point x
         * @param {number} toY - Destination point y
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'quadraticCurveTo',
        value: function quadraticCurveTo(cpX, cpY, toX, toY) {
            if (this.currentPath) {
                if (this.currentPath.shape.points.length === 0) {
                    this.currentPath.shape.points = [0, 0];
                }
            } else {
                this.moveTo(0, 0);
            }

            var n = 20;
            var points = this.currentPath.shape.points;
            var xa = 0;
            var ya = 0;

            if (points.length === 0) {
                this.moveTo(0, 0);
            }

            var fromX = points[points.length - 2];
            var fromY = points[points.length - 1];

            for (var i = 1; i <= n; ++i) {
                var j = i / n;

                xa = fromX + (cpX - fromX) * j;
                ya = fromY + (cpY - fromY) * j;

                points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
            }

            this.dirty++;

            return this;
        }

        /**
         * Calculate the points for a bezier curve and then draws it.
         *
         * @param {number} cpX - Control point x
         * @param {number} cpY - Control point y
         * @param {number} cpX2 - Second Control point x
         * @param {number} cpY2 - Second Control point y
         * @param {number} toX - Destination point x
         * @param {number} toY - Destination point y
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'bezierCurveTo',
        value: function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
            if (this.currentPath) {
                if (this.currentPath.shape.points.length === 0) {
                    this.currentPath.shape.points = [0, 0];
                }
            } else {
                this.moveTo(0, 0);
            }

            var points = this.currentPath.shape.points;

            var fromX = points[points.length - 2];
            var fromY = points[points.length - 1];

            points.length -= 2;

            Object(__WEBPACK_IMPORTED_MODULE_9__utils_bezierCurveTo__["a" /* default */])(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);

            this.dirty++;

            return this;
        }

        /**
         * The arcTo() method creates an arc/curve between two tangents on the canvas.
         *
         * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
         *
         * @param {number} x1 - The x-coordinate of the beginning of the arc
         * @param {number} y1 - The y-coordinate of the beginning of the arc
         * @param {number} x2 - The x-coordinate of the end of the arc
         * @param {number} y2 - The y-coordinate of the end of the arc
         * @param {number} radius - The radius of the arc
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'arcTo',
        value: function arcTo(x1, y1, x2, y2, radius) {
            if (this.currentPath) {
                if (this.currentPath.shape.points.length === 0) {
                    this.currentPath.shape.points.push(x1, y1);
                }
            } else {
                this.moveTo(x1, y1);
            }

            var points = this.currentPath.shape.points;
            var fromX = points[points.length - 2];
            var fromY = points[points.length - 1];
            var a1 = fromY - y1;
            var b1 = fromX - x1;
            var a2 = y2 - y1;
            var b2 = x2 - x1;
            var mm = Math.abs(a1 * b2 - b1 * a2);

            if (mm < 1.0e-8 || radius === 0) {
                if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
                    points.push(x1, y1);
                }
            } else {
                var dd = a1 * a1 + b1 * b1;
                var cc = a2 * a2 + b2 * b2;
                var tt = a1 * a2 + b1 * b2;
                var k1 = radius * Math.sqrt(dd) / mm;
                var k2 = radius * Math.sqrt(cc) / mm;
                var j1 = k1 * tt / dd;
                var j2 = k2 * tt / cc;
                var cx = k1 * b2 + k2 * b1;
                var cy = k1 * a2 + k2 * a1;
                var px = b1 * (k2 + j1);
                var py = a1 * (k2 + j1);
                var qx = b2 * (k1 + j2);
                var qy = a2 * (k1 + j2);
                var startAngle = Math.atan2(py - cy, px - cx);
                var endAngle = Math.atan2(qy - cy, qx - cx);

                this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
            }

            this.dirty++;

            return this;
        }

        /**
         * The arc method creates an arc/curve (used to create circles, or parts of circles).
         *
         * @param {number} cx - The x-coordinate of the center of the circle
         * @param {number} cy - The y-coordinate of the center of the circle
         * @param {number} radius - The radius of the circle
         * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
         *  of the arc's circle)
         * @param {number} endAngle - The ending angle, in radians
         * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
         *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
         *  indicates counter-clockwise.
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'arc',
        value: function arc(cx, cy, radius, startAngle, endAngle) {
            var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

            if (startAngle === endAngle) {
                return this;
            }

            if (!anticlockwise && endAngle <= startAngle) {
                endAngle += Math.PI * 2;
            } else if (anticlockwise && startAngle <= endAngle) {
                startAngle += Math.PI * 2;
            }

            var sweep = endAngle - startAngle;
            var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 40;

            if (sweep === 0) {
                return this;
            }

            var startX = cx + Math.cos(startAngle) * radius;
            var startY = cy + Math.sin(startAngle) * radius;

            // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
            var points = this.currentPath ? this.currentPath.shape.points : null;

            if (points) {
                if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
                    points.push(startX, startY);
                }
            } else {
                this.moveTo(startX, startY);
                points = this.currentPath.shape.points;
            }

            var theta = sweep / (segs * 2);
            var theta2 = theta * 2;

            var cTheta = Math.cos(theta);
            var sTheta = Math.sin(theta);

            var segMinus = segs - 1;

            var remainder = segMinus % 1 / segMinus;

            for (var i = 0; i <= segMinus; ++i) {
                var real = i + remainder * i;

                var angle = theta + startAngle + theta2 * real;

                var c = Math.cos(angle);
                var s = -Math.sin(angle);

                points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
            }

            this.dirty++;

            return this;
        }

        /**
         * Specifies a simple one-color fill that subsequent calls to other Graphics methods
         * (such as lineTo() or drawCircle()) use when drawing.
         *
         * @param {number} [color=0] - the color of the fill
         * @param {number} [alpha=1] - the alpha of the fill
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'beginFill',
        value: function beginFill() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            this.filling = true;
            this.fillColor = color;
            this.fillAlpha = alpha;

            if (this.currentPath) {
                if (this.currentPath.shape.points.length <= 2) {
                    this.currentPath.fill = this.filling;
                    this.currentPath.fillColor = this.fillColor;
                    this.currentPath.fillAlpha = this.fillAlpha;
                }
            }

            return this;
        }

        /**
         * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
         *
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'endFill',
        value: function endFill() {
            this.filling = false;
            this.fillColor = null;
            this.fillAlpha = 1;

            return this;
        }

        /**
         *
         * @param {number} x - The X coord of the top-left of the rectangle
         * @param {number} y - The Y coord of the top-left of the rectangle
         * @param {number} width - The width of the rectangle
         * @param {number} height - The height of the rectangle
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'drawRect',
        value: function drawRect(x, y, width, height) {
            this.drawShape(new __WEBPACK_IMPORTED_MODULE_5__math__["h" /* Rectangle */](x, y, width, height));

            return this;
        }

        /**
         *
         * @param {number} x - The X coord of the top-left of the rectangle
         * @param {number} y - The Y coord of the top-left of the rectangle
         * @param {number} width - The width of the rectangle
         * @param {number} height - The height of the rectangle
         * @param {number} radius - Radius of the rectangle corners
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'drawRoundedRect',
        value: function drawRoundedRect(x, y, width, height, radius) {
            this.drawShape(new __WEBPACK_IMPORTED_MODULE_5__math__["i" /* RoundedRectangle */](x, y, width, height, radius));

            return this;
        }

        /**
         * Draws a circle.
         *
         * @param {number} x - The X coordinate of the center of the circle
         * @param {number} y - The Y coordinate of the center of the circle
         * @param {number} radius - The radius of the circle
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'drawCircle',
        value: function drawCircle(x, y, radius) {
            this.drawShape(new __WEBPACK_IMPORTED_MODULE_5__math__["a" /* Circle */](x, y, radius));

            return this;
        }

        /**
         * Draws an ellipse.
         *
         * @param {number} x - The X coordinate of the center of the ellipse
         * @param {number} y - The Y coordinate of the center of the ellipse
         * @param {number} width - The half width of the ellipse
         * @param {number} height - The half height of the ellipse
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'drawEllipse',
        value: function drawEllipse(x, y, width, height) {
            this.drawShape(new __WEBPACK_IMPORTED_MODULE_5__math__["b" /* Ellipse */](x, y, width, height));

            return this;
        }

        /**
         * Draws a polygon using the given path.
         *
         * @param {number[]|PIXI.Point[]|PIXI.Polygon} path - The path data used to construct the polygon.
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'drawPolygon',
        value: function drawPolygon(path) {
            // prevents an argument assignment deopt
            // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
            var points = path;

            var closed = true;

            if (points instanceof __WEBPACK_IMPORTED_MODULE_5__math__["g" /* Polygon */]) {
                closed = points.closed;
                points = points.points;
            }

            if (!Array.isArray(points)) {
                // prevents an argument leak deopt
                // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
                points = new Array(arguments.length);

                for (var i = 0; i < points.length; ++i) {
                    points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
                }
            }

            var shape = new __WEBPACK_IMPORTED_MODULE_5__math__["g" /* Polygon */](points);

            shape.closed = closed;

            this.drawShape(shape);

            return this;
        }

        /**
         * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
         *
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */

    }, {
        key: 'clear',
        value: function clear() {
            if (this.lineWidth || this.filling || this.graphicsData.length > 0) {
                this.lineWidth = 0;
                this.filling = false;

                this.boundsDirty = -1;
                this.dirty++;
                this.clearDirty++;
                this.graphicsData.length = 0;
            }

            this.currentPath = null;
            this._spriteRect = null;

            return this;
        }

        /**
         * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
         * masked with gl.scissor.
         *
         * @returns {boolean} True if only 1 rect.
         */

    }, {
        key: 'isFastRect',
        value: function isFastRect() {
            return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === __WEBPACK_IMPORTED_MODULE_7__const__["e" /* SHAPES */].RECT && !this.graphicsData[0].lineWidth;
        }

        /**
         * Renders the object using the WebGL renderer
         *
         * @private
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: '_renderWebGL',
        value: function _renderWebGL(renderer) {
            // if the sprite is not visible or the alpha is 0 then no need to render this element
            if (this.dirty !== this.fastRectDirty) {
                this.fastRectDirty = this.dirty;
                this._fastRect = this.isFastRect();
            }

            // TODO this check can be moved to dirty?
            if (this._fastRect) {
                this._renderSpriteRect(renderer);
            } else {
                renderer.setObjectRenderer(renderer.plugins.graphics);
                renderer.plugins.graphics.render(this);
            }
        }

        /**
         * Renders a sprite rectangle.
         *
         * @private
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: '_renderSpriteRect',
        value: function _renderSpriteRect(renderer) {
            var rect = this.graphicsData[0].shape;

            if (!this._spriteRect) {
                this._spriteRect = new __WEBPACK_IMPORTED_MODULE_4__sprites_Sprite__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__textures_Texture__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__textures_Texture__["a" /* default */].WHITE));
            }

            var sprite = this._spriteRect;

            if (this.tint === 0xffffff) {
                sprite.tint = this.graphicsData[0].fillColor;
            } else {
                var t1 = tempColor1;
                var t2 = tempColor2;

                Object(__WEBPACK_IMPORTED_MODULE_6__utils__["hex2rgb"])(this.graphicsData[0].fillColor, t1);
                Object(__WEBPACK_IMPORTED_MODULE_6__utils__["hex2rgb"])(this.tint, t2);

                t1[0] *= t2[0];
                t1[1] *= t2[1];
                t1[2] *= t2[2];

                sprite.tint = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["rgb2hex"])(t1);
            }
            sprite.alpha = this.graphicsData[0].fillAlpha;
            sprite.worldAlpha = this.worldAlpha * sprite.alpha;
            sprite.blendMode = this.blendMode;

            sprite._texture._frame.width = rect.width;
            sprite._texture._frame.height = rect.height;

            sprite.transform.worldTransform = this.transform.worldTransform;

            sprite.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
            sprite._onAnchorUpdate();

            sprite._renderWebGL(renderer);
        }

        /**
         * Renders the object using the Canvas renderer
         *
         * @private
         * @param {PIXI.CanvasRenderer} renderer - The renderer
         */

    }, {
        key: '_renderCanvas',
        value: function _renderCanvas(renderer) {
            if (this.isMask === true) {
                return;
            }

            renderer.plugins.graphics.render(this);
        }

        /**
         * Retrieves the bounds of the graphic shape as a rectangle object
         *
         * @private
         */

    }, {
        key: '_calculateBounds',
        value: function _calculateBounds() {
            if (this.boundsDirty !== this.dirty) {
                this.boundsDirty = this.dirty;
                this.updateLocalBounds();

                this.cachedSpriteDirty = true;
            }

            var lb = this._localBounds;

            this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
        }

        /**
         * Tests if a point is inside this graphics object
         *
         * @param {PIXI.Point} point - the point to test
         * @return {boolean} the result of the test
         */

    }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
            this.worldTransform.applyInverse(point, tempPoint);

            var graphicsData = this.graphicsData;

            for (var i = 0; i < graphicsData.length; ++i) {
                var data = graphicsData[i];

                if (!data.fill) {
                    continue;
                }

                // only deal with fills..
                if (data.shape) {
                    if (data.shape.contains(tempPoint.x, tempPoint.y)) {
                        if (data.holes) {
                            for (var _i = 0; _i < data.holes.length; _i++) {
                                var hole = data.holes[_i];

                                if (hole.contains(tempPoint.x, tempPoint.y)) {
                                    return false;
                                }
                            }
                        }

                        return true;
                    }
                }
            }

            return false;
        }

        /**
         * Update the bounds of the object
         *
         */

    }, {
        key: 'updateLocalBounds',
        value: function updateLocalBounds() {
            var minX = Infinity;
            var maxX = -Infinity;

            var minY = Infinity;
            var maxY = -Infinity;

            if (this.graphicsData.length) {
                var shape = 0;
                var x = 0;
                var y = 0;
                var w = 0;
                var h = 0;

                for (var i = 0; i < this.graphicsData.length; i++) {
                    var data = this.graphicsData[i];
                    var type = data.type;
                    var lineWidth = data.lineWidth;

                    shape = data.shape;

                    if (type === __WEBPACK_IMPORTED_MODULE_7__const__["e" /* SHAPES */].RECT || type === __WEBPACK_IMPORTED_MODULE_7__const__["e" /* SHAPES */].RREC) {
                        x = shape.x - lineWidth / 2;
                        y = shape.y - lineWidth / 2;
                        w = shape.width + lineWidth;
                        h = shape.height + lineWidth;

                        minX = x < minX ? x : minX;
                        maxX = x + w > maxX ? x + w : maxX;

                        minY = y < minY ? y : minY;
                        maxY = y + h > maxY ? y + h : maxY;
                    } else if (type === __WEBPACK_IMPORTED_MODULE_7__const__["e" /* SHAPES */].CIRC) {
                        x = shape.x;
                        y = shape.y;
                        w = shape.radius + lineWidth / 2;
                        h = shape.radius + lineWidth / 2;

                        minX = x - w < minX ? x - w : minX;
                        maxX = x + w > maxX ? x + w : maxX;

                        minY = y - h < minY ? y - h : minY;
                        maxY = y + h > maxY ? y + h : maxY;
                    } else if (type === __WEBPACK_IMPORTED_MODULE_7__const__["e" /* SHAPES */].ELIP) {
                        x = shape.x;
                        y = shape.y;
                        w = shape.width + lineWidth / 2;
                        h = shape.height + lineWidth / 2;

                        minX = x - w < minX ? x - w : minX;
                        maxX = x + w > maxX ? x + w : maxX;

                        minY = y - h < minY ? y - h : minY;
                        maxY = y + h > maxY ? y + h : maxY;
                    } else {
                        // POLY
                        var points = shape.points;
                        var x2 = 0;
                        var y2 = 0;
                        var dx = 0;
                        var dy = 0;
                        var rw = 0;
                        var rh = 0;
                        var cx = 0;
                        var cy = 0;

                        for (var j = 0; j + 2 < points.length; j += 2) {
                            x = points[j];
                            y = points[j + 1];
                            x2 = points[j + 2];
                            y2 = points[j + 3];
                            dx = Math.abs(x2 - x);
                            dy = Math.abs(y2 - y);
                            h = lineWidth;
                            w = Math.sqrt(dx * dx + dy * dy);

                            if (w < 1e-9) {
                                continue;
                            }

                            rw = (h / w * dy + dx) / 2;
                            rh = (h / w * dx + dy) / 2;
                            cx = (x2 + x) / 2;
                            cy = (y2 + y) / 2;

                            minX = cx - rw < minX ? cx - rw : minX;
                            maxX = cx + rw > maxX ? cx + rw : maxX;

                            minY = cy - rh < minY ? cy - rh : minY;
                            maxY = cy + rh > maxY ? cy + rh : maxY;
                        }
                    }
                }
            } else {
                minX = 0;
                maxX = 0;
                minY = 0;
                maxY = 0;
            }

            var padding = this.boundsPadding;

            this._localBounds.minX = minX - padding;
            this._localBounds.maxX = maxX + padding;

            this._localBounds.minY = minY - padding;
            this._localBounds.maxY = maxY + padding;
        }

        /**
         * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
         *
         * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
         * @return {PIXI.GraphicsData} The generated GraphicsData object.
         */

    }, {
        key: 'drawShape',
        value: function drawShape(shape) {
            if (this.currentPath) {
                // check current path!
                if (this.currentPath.shape.points.length <= 2) {
                    this.graphicsData.pop();
                }
            }

            this.currentPath = null;

            var data = new __WEBPACK_IMPORTED_MODULE_3__GraphicsData__["a" /* default */](this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, shape);

            this.graphicsData.push(data);

            if (data.type === __WEBPACK_IMPORTED_MODULE_7__const__["e" /* SHAPES */].POLY) {
                data.shape.closed = data.shape.closed || this.filling;
                this.currentPath = data;
            }

            this.dirty++;

            return data;
        }

        /**
         * Generates a canvas texture.
         *
         * @param {number} scaleMode - The scale mode of the texture.
         * @param {number} resolution - The resolution of the texture.
         * @return {PIXI.Texture} The new texture.
         */

    }, {
        key: 'generateCanvasTexture',
        value: function generateCanvasTexture(scaleMode) {
            var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var bounds = this.getLocalBounds();

            var canvasBuffer = __WEBPACK_IMPORTED_MODULE_1__textures_RenderTexture__["a" /* default */].create(bounds.width, bounds.height, scaleMode, resolution);

            if (!canvasRenderer) {
                canvasRenderer = new __WEBPACK_IMPORTED_MODULE_10__renderers_canvas_CanvasRenderer__["a" /* default */]();
            }

            this.transform.updateLocalTransform();
            this.transform.localTransform.copy(tempMatrix);

            tempMatrix.invert();

            tempMatrix.tx -= bounds.x;
            tempMatrix.ty -= bounds.y;

            canvasRenderer.render(this, canvasBuffer, true, tempMatrix);

            var texture = __WEBPACK_IMPORTED_MODULE_2__textures_Texture__["a" /* default */].fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas, scaleMode, 'graphics');

            texture.baseTexture.resolution = resolution;
            texture.baseTexture.update();

            return texture;
        }

        /**
         * Closes the current path.
         *
         * @return {PIXI.Graphics} Returns itself.
         */

    }, {
        key: 'closePath',
        value: function closePath() {
            // ok so close path assumes next one is a hole!
            var currentPath = this.currentPath;

            if (currentPath && currentPath.shape) {
                currentPath.shape.close();
            }

            return this;
        }

        /**
         * Adds a hole in the current path.
         *
         * @return {PIXI.Graphics} Returns itself.
         */

    }, {
        key: 'addHole',
        value: function addHole() {
            // this is a hole!
            var hole = this.graphicsData.pop();

            this.currentPath = this.graphicsData[this.graphicsData.length - 1];

            this.currentPath.addHole(hole.shape);
            this.currentPath = null;

            return this;
        }

        /**
         * Destroys the Graphics object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */

    }, {
        key: 'destroy',
        value: function destroy(options) {
            _get(Graphics.prototype.__proto__ || Object.getPrototypeOf(Graphics.prototype), 'destroy', this).call(this, options);

            // destroy each of the GraphicsData objects
            for (var i = 0; i < this.graphicsData.length; ++i) {
                this.graphicsData[i].destroy();
            }

            // for each webgl data entry, destroy the WebGLGraphicsData
            for (var id in this._webgl) {
                for (var j = 0; j < this._webgl[id].data.length; ++j) {
                    this._webgl[id].data[j].destroy();
                }
            }

            if (this._spriteRect) {
                this._spriteRect.destroy();
            }

            this.graphicsData = null;

            this.currentPath = null;
            this._webgl = null;
            this._localBounds = null;
        }
    }]);

    return Graphics;
}(__WEBPACK_IMPORTED_MODULE_0__display_Container__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Graphics);


Graphics._SPRITE_TEXTURE = null;

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bezierCurveTo;
/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @param {number} fromX - Starting point x
 * @param {number} fromY - Starting point y
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} cpX2 - Second Control point x
 * @param {number} cpY2 - Second Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [path=[]] - Path array to push points into
 * @return {number[]} Array of points of the curve
 */
function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
    var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];

    var n = 20;
    var dt = 0;
    var dt2 = 0;
    var dt3 = 0;
    var t2 = 0;
    var t3 = 0;

    path.push(fromX, fromY);

    for (var i = 1, j = 0; i <= n; ++i) {
        j = i / n;

        dt = 1 - j;
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }

    return path;
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderers_canvas_CanvasRenderer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original PixiJS version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they
 * now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasGraphicsRenderer:
 * https://github.com/libgdx/libgdx/blob/1.0.0/gdx/src/com/badlogic/gdx/graphics/glutils/ShapeRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching graphics objects.
 *
 * @class
 * @private
 * @memberof PIXI
 */

var CanvasGraphicsRenderer = function () {
    /**
     * @param {PIXI.CanvasRenderer} renderer - The current PIXI renderer.
     */
    function CanvasGraphicsRenderer(renderer) {
        _classCallCheck(this, CanvasGraphicsRenderer);

        this.renderer = renderer;
    }

    /**
     * Renders a Graphics object to a canvas.
     *
     * @param {PIXI.Graphics} graphics - the actual graphics object to render
     */


    _createClass(CanvasGraphicsRenderer, [{
        key: 'render',
        value: function render(graphics) {
            var renderer = this.renderer;
            var context = renderer.context;
            var worldAlpha = graphics.worldAlpha;
            var transform = graphics.transform.worldTransform;
            var resolution = renderer.resolution;

            // if the tint has changed, set the graphics object to dirty.
            if (this._prevTint !== this.tint) {
                this.dirty = true;
            }

            context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

            if (graphics.dirty) {
                this.updateGraphicsTint(graphics);
                graphics.dirty = false;
            }

            renderer.setBlendMode(graphics.blendMode);

            for (var i = 0; i < graphics.graphicsData.length; i++) {
                var data = graphics.graphicsData[i];
                var shape = data.shape;

                var fillColor = data._fillTint;
                var lineColor = data._lineTint;

                context.lineWidth = data.lineWidth;

                if (data.type === __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].POLY) {
                    context.beginPath();

                    this.renderPolygon(shape.points, shape.closed, context);

                    for (var j = 0; j < data.holes.length; j++) {
                        this.renderPolygon(data.holes[j].points, true, context);
                    }

                    if (data.fill) {
                        context.globalAlpha = data.fillAlpha * worldAlpha;
                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                        context.fill();
                    }
                    if (data.lineWidth) {
                        context.globalAlpha = data.lineAlpha * worldAlpha;
                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                        context.stroke();
                    }
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].RECT) {
                    if (data.fillColor || data.fillColor === 0) {
                        context.globalAlpha = data.fillAlpha * worldAlpha;
                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                        context.fillRect(shape.x, shape.y, shape.width, shape.height);
                    }
                    if (data.lineWidth) {
                        context.globalAlpha = data.lineAlpha * worldAlpha;
                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                        context.strokeRect(shape.x, shape.y, shape.width, shape.height);
                    }
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].CIRC) {
                    // TODO - need to be Undefined!
                    context.beginPath();
                    context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
                    context.closePath();

                    if (data.fill) {
                        context.globalAlpha = data.fillAlpha * worldAlpha;
                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                        context.fill();
                    }
                    if (data.lineWidth) {
                        context.globalAlpha = data.lineAlpha * worldAlpha;
                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                        context.stroke();
                    }
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].ELIP) {
                    // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

                    var w = shape.width * 2;
                    var h = shape.height * 2;

                    var x = shape.x - w / 2;
                    var y = shape.y - h / 2;

                    context.beginPath();

                    var kappa = 0.5522848;
                    var ox = w / 2 * kappa; // control point offset horizontal
                    var oy = h / 2 * kappa; // control point offset vertical
                    var xe = x + w; // x-end
                    var ye = y + h; // y-end
                    var xm = x + w / 2; // x-middle
                    var ym = y + h / 2; // y-middle

                    context.moveTo(x, ym);
                    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

                    context.closePath();

                    if (data.fill) {
                        context.globalAlpha = data.fillAlpha * worldAlpha;
                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                        context.fill();
                    }
                    if (data.lineWidth) {
                        context.globalAlpha = data.lineAlpha * worldAlpha;
                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                        context.stroke();
                    }
                } else if (data.type === __WEBPACK_IMPORTED_MODULE_1__const__["e" /* SHAPES */].RREC) {
                    var rx = shape.x;
                    var ry = shape.y;
                    var width = shape.width;
                    var height = shape.height;
                    var radius = shape.radius;

                    var maxRadius = Math.min(width, height) / 2 | 0;

                    radius = radius > maxRadius ? maxRadius : radius;

                    context.beginPath();
                    context.moveTo(rx, ry + radius);
                    context.lineTo(rx, ry + height - radius);
                    context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
                    context.lineTo(rx + width - radius, ry + height);
                    context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
                    context.lineTo(rx + width, ry + radius);
                    context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
                    context.lineTo(rx + radius, ry);
                    context.quadraticCurveTo(rx, ry, rx, ry + radius);
                    context.closePath();

                    if (data.fillColor || data.fillColor === 0) {
                        context.globalAlpha = data.fillAlpha * worldAlpha;
                        context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                        context.fill();
                    }

                    if (data.lineWidth) {
                        context.globalAlpha = data.lineAlpha * worldAlpha;
                        context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                        context.stroke();
                    }
                }
            }
        }

        /**
         * Updates the tint of a graphics object
         *
         * @private
         * @param {PIXI.Graphics} graphics - the graphics that will have its tint updated
         */

    }, {
        key: 'updateGraphicsTint',
        value: function updateGraphicsTint(graphics) {
            graphics._prevTint = graphics.tint;

            var tintR = (graphics.tint >> 16 & 0xFF) / 255;
            var tintG = (graphics.tint >> 8 & 0xFF) / 255;
            var tintB = (graphics.tint & 0xFF) / 255;

            for (var i = 0; i < graphics.graphicsData.length; ++i) {
                var data = graphics.graphicsData[i];

                var fillColor = data.fillColor | 0;
                var lineColor = data.lineColor | 0;

                // super inline cos im an optimization NAZI :)
                data._fillTint = ((fillColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (fillColor & 0xFF) / 255 * tintB * 255;

                data._lineTint = ((lineColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (lineColor & 0xFF) / 255 * tintB * 255;
            }
        }

        /**
         * Renders a polygon.
         *
         * @param {PIXI.Point[]} points - The points to render
         * @param {boolean} close - Should the polygon be closed
         * @param {CanvasRenderingContext2D} context - The rendering context to use
         */

    }, {
        key: 'renderPolygon',
        value: function renderPolygon(points, close, context) {
            context.moveTo(points[0], points[1]);

            for (var j = 1; j < points.length / 2; ++j) {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            if (close) {
                context.closePath();
            }
        }

        /**
         * destroy graphics object
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.renderer = null;
        }
    }]);

    return CanvasGraphicsRenderer;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (CanvasGraphicsRenderer);


__WEBPACK_IMPORTED_MODULE_0__renderers_canvas_CanvasRenderer__["a" /* default */].registerPlugin('graphics', CanvasGraphicsRenderer);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * Utility class for maintaining reference to a collection
 * of Textures on a single Spritesheet.
 *
 * @class
 * @memberof PIXI
 */

var Spritesheet = function () {
    _createClass(Spritesheet, null, [{
        key: 'BATCH_SIZE',

        /**
         * The maximum number of Textures to build per process.
         *
         * @type {number}
         * @default 1000
         */
        get: function get() {
            return 1000;
        }

        /**
         * @param {PIXI.BaseTexture} baseTexture Reference to the source BaseTexture object.
         * @param {Object} data - Spritesheet image data.
         * @param {string} [resolutionFilename] - The filename to consider when determining
         *        the resolution of the spritesheet. If not provided, the imageUrl will
         *        be used on the BaseTexture.
         */

    }]);

    function Spritesheet(baseTexture, data) {
        var resolutionFilename = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Spritesheet);

        /**
         * Reference to ths source texture
         * @type {PIXI.BaseTexture}
         */
        this.baseTexture = baseTexture;

        /**
         * Map of spritesheet textures.
         * @type {Object}
         */
        this.textures = {};

        /**
         * Reference to the original JSON data.
         * @type {Object}
         */
        this.data = data;

        /**
         * The resolution of the spritesheet.
         * @type {number}
         */
        this.resolution = this._updateResolution(resolutionFilename || this.baseTexture.imageUrl);

        /**
         * Map of spritesheet frames.
         * @type {Object}
         * @private
         */
        this._frames = this.data.frames;

        /**
         * Collection of frame names.
         * @type {string[]}
         * @private
         */
        this._frameKeys = Object.keys(this._frames);

        /**
         * Current batch index being processed.
         * @type {number}
         * @private
         */
        this._batchIndex = 0;

        /**
         * Callback when parse is completed.
         * @type {Function}
         * @private
         */
        this._callback = null;
    }

    /**
     * Generate the resolution from the filename or fallback
     * to the meta.scale field of the JSON data.
     *
     * @private
     * @param {string} resolutionFilename - The filename to use for resolving
     *        the default resolution.
     * @return {number} Resolution to use for spritesheet.
     */


    _createClass(Spritesheet, [{
        key: '_updateResolution',
        value: function _updateResolution(resolutionFilename) {
            var scale = this.data.meta.scale;

            // Use a defaultValue of `null` to check if a url-based resolution is set
            var resolution = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["getResolutionOfUrl"])(resolutionFilename, null);

            // No resolution found via URL
            if (resolution === null) {
                // Use the scale value or default to 1
                resolution = scale !== undefined ? parseFloat(scale) : 1;
            }

            // For non-1 resolutions, update baseTexture
            if (resolution !== 1) {
                this.baseTexture.resolution = resolution;
                this.baseTexture.update();
            }

            return resolution;
        }

        /**
         * Parser spritesheet from loaded data. This is done asynchronously
         * to prevent creating too many Texture within a single process.
         *
         * @param {Function} callback - Callback when complete returns
         *        a map of the Textures for this spritesheet.
         */

    }, {
        key: 'parse',
        value: function parse(callback) {
            this._batchIndex = 0;
            this._callback = callback;

            if (this._frameKeys.length <= Spritesheet.BATCH_SIZE) {
                this._processFrames(0);
                this._parseComplete();
            } else {
                this._nextBatch();
            }
        }

        /**
         * Process a batch of frames
         *
         * @private
         * @param {number} initialFrameIndex - The index of frame to start.
         */

    }, {
        key: '_processFrames',
        value: function _processFrames(initialFrameIndex) {
            var frameIndex = initialFrameIndex;
            var maxFrames = Spritesheet.BATCH_SIZE;
            var sourceScale = this.baseTexture.sourceScale;

            while (frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length) {
                var i = this._frameKeys[frameIndex];
                var rect = this._frames[i].frame;

                if (rect) {
                    var frame = null;
                    var trim = null;
                    var orig = new __WEBPACK_IMPORTED_MODULE_0____["i" /* Rectangle */](0, 0, Math.floor(this._frames[i].sourceSize.w * sourceScale) / this.resolution, Math.floor(this._frames[i].sourceSize.h * sourceScale) / this.resolution);

                    if (this._frames[i].rotated) {
                        frame = new __WEBPACK_IMPORTED_MODULE_0____["i" /* Rectangle */](Math.floor(rect.x * sourceScale) / this.resolution, Math.floor(rect.y * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution);
                    } else {
                        frame = new __WEBPACK_IMPORTED_MODULE_0____["i" /* Rectangle */](Math.floor(rect.x * sourceScale) / this.resolution, Math.floor(rect.y * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution);
                    }

                    //  Check to see if the sprite is trimmed
                    if (this._frames[i].trimmed) {
                        trim = new __WEBPACK_IMPORTED_MODULE_0____["i" /* Rectangle */](Math.floor(this._frames[i].spriteSourceSize.x * sourceScale) / this.resolution, Math.floor(this._frames[i].spriteSourceSize.y * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution);
                    }

                    this.textures[i] = new __WEBPACK_IMPORTED_MODULE_0____["n" /* Texture */](this.baseTexture, frame, orig, trim, this._frames[i].rotated ? 2 : 0);

                    // lets also add the frame to pixi's global cache for fromFrame and fromImage functions
                    __WEBPACK_IMPORTED_MODULE_0____["n" /* Texture */].addToCache(this.textures[i], i);
                }

                frameIndex++;
            }
        }

        /**
         * The parse has completed.
         *
         * @private
         */

    }, {
        key: '_parseComplete',
        value: function _parseComplete() {
            var callback = this._callback;

            this._callback = null;
            this._batchIndex = 0;
            callback.call(this, this.textures);
        }

        /**
         * Begin the next batch of textures.
         *
         * @private
         */

    }, {
        key: '_nextBatch',
        value: function _nextBatch() {
            var _this = this;

            this._processFrames(this._batchIndex * Spritesheet.BATCH_SIZE);
            this._batchIndex++;
            setTimeout(function () {
                if (_this._batchIndex * Spritesheet.BATCH_SIZE < _this._frameKeys.length) {
                    _this._nextBatch();
                } else {
                    _this._parseComplete();
                }
            }, 0);
        }

        /**
         * Destroy Spritesheet and don't use after this.
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            var destroyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            for (var i in this.textures) {
                this.textures[i].destroy();
            }
            this._frames = null;
            this._frameKeys = null;
            this.data = null;
            this.textures = null;
            if (destroyBase) {
                this.baseTexture.destroy();
            }
            this.baseTexture = null;
        }
    }]);

    return Spritesheet;
}();

/* harmony default export */ __webpack_exports__["a"] = (Spritesheet);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var tempMat = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix__["a" /* default */]();

/**
 * Class controls uv transform and frame clamp for texture
 * Can be used in Texture "transform" field, or separately, you can use different clamp settings on the same texture.
 * If you want to add support for texture region of certain feature or filter, that's what you're looking for.
 *
 * @see PIXI.Texture
 * @see PIXI.mesh.Mesh
 * @see PIXI.extras.TilingSprite
 * @class
 * @memberof PIXI
 */

var TextureMatrix = function () {
    /**
     *
     * @param {PIXI.Texture} texture observed texture
     * @param {number} [clampMargin] Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
     * @constructor
     */
    function TextureMatrix(texture, clampMargin) {
        _classCallCheck(this, TextureMatrix);

        this._texture = texture;

        this.mapCoord = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix__["a" /* default */]();

        this.uClampFrame = new Float32Array(4);

        this.uClampOffset = new Float32Array(2);

        this._lastTextureID = -1;

        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
         *
         * @default 0
         * @member {number}
         */
        this.clampOffset = 0;

        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         *
         * @default 0.5
         * @member {number}
         */
        this.clampMargin = typeof clampMargin === 'undefined' ? 0.5 : clampMargin;
    }

    /**
     * texture property
     * @member {PIXI.Texture}
     */


    _createClass(TextureMatrix, [{
        key: 'multiplyUvs',


        /**
         * Multiplies uvs array to transform
         * @param {Float32Array} uvs mesh uvs
         * @param {Float32Array} [out=uvs] output
         * @returns {Float32Array} output
         */
        value: function multiplyUvs(uvs, out) {
            if (out === undefined) {
                out = uvs;
            }

            var mat = this.mapCoord;

            for (var i = 0; i < uvs.length; i += 2) {
                var x = uvs[i];
                var y = uvs[i + 1];

                out[i] = x * mat.a + y * mat.c + mat.tx;
                out[i + 1] = x * mat.b + y * mat.d + mat.ty;
            }

            return out;
        }

        /**
         * updates matrices if texture was changed
         * @param {boolean} forceUpdate if true, matrices will be updated any case
         * @returns {boolean} whether or not it was updated
         */

    }, {
        key: 'update',
        value: function update(forceUpdate) {
            var tex = this._texture;

            if (!tex || !tex.valid) {
                return false;
            }

            if (!forceUpdate && this._lastTextureID === tex._updateID) {
                return false;
            }

            this._lastTextureID = tex._updateID;

            var uvs = tex._uvs;

            this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);

            var orig = tex.orig;
            var trim = tex.trim;

            if (trim) {
                tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
                this.mapCoord.append(tempMat);
            }

            var texBase = tex.baseTexture;
            var frame = this.uClampFrame;
            var margin = this.clampMargin / texBase.resolution;
            var offset = this.clampOffset;

            frame[0] = (tex._frame.x + margin + offset) / texBase.width;
            frame[1] = (tex._frame.y + margin + offset) / texBase.height;
            frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
            frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
            this.uClampOffset[0] = offset / texBase.realWidth;
            this.uClampOffset[1] = offset / texBase.realHeight;

            return true;
        }
    }, {
        key: 'texture',
        get: function get() {
            return this._texture;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._texture = value;
            this._lastTextureID = -1;
        }
    }]);

    return TextureMatrix;
}();

/* harmony default export */ __webpack_exports__["a"] = (TextureMatrix);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_gl_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_gl_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_gl_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function checkPrecision(src, def) {
    if (src instanceof Array) {
        if (src[0].substring(0, 9) !== 'precision') {
            var copy = src.slice(0);

            copy.unshift('precision ' + def + ' float;');

            return copy;
        }
    } else if (src.substring(0, 9) !== 'precision') {
        return 'precision ' + def + ' float;\n' + src;
    }

    return src;
}

/**
 * Wrapper class, webGL Shader for Pixi.
 * Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 *
 * @class
 * @extends GLShader
 * @memberof PIXI
 */

var Shader = function (_GLShader) {
    _inherits(Shader, _GLShader);

    /**
     *
     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
     * @param {string|string[]} vertexSrc - The vertex shader source as an array of strings.
     * @param {string|string[]} fragmentSrc - The fragment shader source as an array of strings.
     */
    function Shader(gl, vertexSrc, fragmentSrc) {
        _classCallCheck(this, Shader);

        return _possibleConstructorReturn(this, (Shader.__proto__ || Object.getPrototypeOf(Shader)).call(this, gl, checkPrecision(vertexSrc, __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].PRECISION_VERTEX), checkPrecision(fragmentSrc, __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].PRECISION_FRAGMENT)));
    }

    return Shader;
}(__WEBPACK_IMPORTED_MODULE_0_pixi_gl_core__["GLShader"]);

/* unused harmony default export */ var _unused_webpack_default_export = (Shader);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * @typedef FrameObject
 * @type {object}
 * @property {PIXI.Texture} texture - The {@link PIXI.Texture} of the frame
 * @property {number} time - the duration of the frame in ms
 */

/**
 * An AnimatedSprite is a simple way to display an animation depicted by a list of textures.
 *
 * ```js
 * let alienImages = ["image_sequence_01.png","image_sequence_02.png","image_sequence_03.png","image_sequence_04.png"];
 * let textureArray = [];
 *
 * for (let i=0; i < 4; i++)
 * {
 *      let texture = PIXI.Texture.fromImage(alienImages[i]);
 *      textureArray.push(texture);
 * };
 *
 * let mc = new PIXI.AnimatedSprite(textureArray);
 * ```
 *
 * @class
 * @extends PIXI.Sprite
 * @memberof PIXI.extras
 */

var AnimatedSprite = function (_core$Sprite) {
    _inherits(AnimatedSprite, _core$Sprite);

    /**
     * @param {PIXI.Texture[]|FrameObject[]} textures - an array of {@link PIXI.Texture} or frame
     *  objects that make up the animation
     * @param {boolean} [autoUpdate=true] - Whether to use PIXI.ticker.shared to auto update animation time.
     */
    function AnimatedSprite(textures, autoUpdate) {
        _classCallCheck(this, AnimatedSprite);

        /**
         * @private
         */
        var _this = _possibleConstructorReturn(this, (AnimatedSprite.__proto__ || Object.getPrototypeOf(AnimatedSprite)).call(this, textures[0] instanceof __WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */] ? textures[0] : textures[0].texture));

        _this._textures = null;

        /**
         * @private
         */
        _this._durations = null;

        _this.textures = textures;

        /**
         * `true` uses PIXI.ticker.shared to auto update animation time.
         * @type {boolean}
         * @default true
         * @private
         */
        _this._autoUpdate = autoUpdate !== false;

        /**
         * The speed that the AnimatedSprite will play at. Higher is faster, lower is slower
         *
         * @member {number}
         * @default 1
         */
        _this.animationSpeed = 1;

        /**
         * Whether or not the animate sprite repeats after playing.
         *
         * @member {boolean}
         * @default true
         */
        _this.loop = true;

        /**
         * Function to call when a AnimatedSprite finishes playing
         *
         * @member {Function}
         */
        _this.onComplete = null;

        /**
         * Function to call when a AnimatedSprite changes which texture is being rendered
         *
         * @member {Function}
         */
        _this.onFrameChange = null;

        /**
        * Function to call when 'loop' is true, and an AnimatedSprite is played and loops around to start again
        *
        * @member {Function}
        */
        _this.onLoop = null;

        /**
         * Elapsed time since animation has been started, used internally to display current texture
         *
         * @member {number}
         * @private
         */
        _this._currentTime = 0;

        /**
         * Indicates if the AnimatedSprite is currently playing
         *
         * @member {boolean}
         * @readonly
         */
        _this.playing = false;
        return _this;
    }

    /**
     * Stops the AnimatedSprite
     *
     */


    _createClass(AnimatedSprite, [{
        key: 'stop',
        value: function stop() {
            if (!this.playing) {
                return;
            }

            this.playing = false;
            if (this._autoUpdate) {
                __WEBPACK_IMPORTED_MODULE_0__core__["r" /* ticker */].shared.remove(this.update, this);
            }
        }

        /**
         * Plays the AnimatedSprite
         *
         */

    }, {
        key: 'play',
        value: function play() {
            if (this.playing) {
                return;
            }

            this.playing = true;
            if (this._autoUpdate) {
                __WEBPACK_IMPORTED_MODULE_0__core__["r" /* ticker */].shared.add(this.update, this, __WEBPACK_IMPORTED_MODULE_0__core__["q" /* UPDATE_PRIORITY */].HIGH);
            }
        }

        /**
         * Stops the AnimatedSprite and goes to a specific frame
         *
         * @param {number} frameNumber - frame index to stop at
         */

    }, {
        key: 'gotoAndStop',
        value: function gotoAndStop(frameNumber) {
            this.stop();

            var previousFrame = this.currentFrame;

            this._currentTime = frameNumber;

            if (previousFrame !== this.currentFrame) {
                this.updateTexture();
            }
        }

        /**
         * Goes to a specific frame and begins playing the AnimatedSprite
         *
         * @param {number} frameNumber - frame index to start at
         */

    }, {
        key: 'gotoAndPlay',
        value: function gotoAndPlay(frameNumber) {
            var previousFrame = this.currentFrame;

            this._currentTime = frameNumber;

            if (previousFrame !== this.currentFrame) {
                this.updateTexture();
            }

            this.play();
        }

        /**
         * Updates the object transform for rendering.
         *
         * @private
         * @param {number} deltaTime - Time since last tick.
         */

    }, {
        key: 'update',
        value: function update(deltaTime) {
            var elapsed = this.animationSpeed * deltaTime;
            var previousFrame = this.currentFrame;

            if (this._durations !== null) {
                var lag = this._currentTime % 1 * this._durations[this.currentFrame];

                lag += elapsed / 60 * 1000;

                while (lag < 0) {
                    this._currentTime--;
                    lag += this._durations[this.currentFrame];
                }

                var sign = Math.sign(this.animationSpeed * deltaTime);

                this._currentTime = Math.floor(this._currentTime);

                while (lag >= this._durations[this.currentFrame]) {
                    lag -= this._durations[this.currentFrame] * sign;
                    this._currentTime += sign;
                }

                this._currentTime += lag / this._durations[this.currentFrame];
            } else {
                this._currentTime += elapsed;
            }

            if (this._currentTime < 0 && !this.loop) {
                this.gotoAndStop(0);

                if (this.onComplete) {
                    this.onComplete();
                }
            } else if (this._currentTime >= this._textures.length && !this.loop) {
                this.gotoAndStop(this._textures.length - 1);

                if (this.onComplete) {
                    this.onComplete();
                }
            } else if (previousFrame !== this.currentFrame) {
                if (this.loop && this.onLoop) {
                    if (this.animationSpeed > 0 && this.currentFrame < previousFrame) {
                        this.onLoop();
                    } else if (this.animationSpeed < 0 && this.currentFrame > previousFrame) {
                        this.onLoop();
                    }
                }

                this.updateTexture();
            }
        }

        /**
         * Updates the displayed texture to match the current frame index
         *
         * @private
         */

    }, {
        key: 'updateTexture',
        value: function updateTexture() {
            this._texture = this._textures[this.currentFrame];
            this._textureID = -1;
            this.cachedTint = 0xFFFFFF;

            if (this.onFrameChange) {
                this.onFrameChange(this.currentFrame);
            }
        }

        /**
         * Stops the AnimatedSprite and destroys it
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */

    }, {
        key: 'destroy',
        value: function destroy(options) {
            this.stop();
            _get(AnimatedSprite.prototype.__proto__ || Object.getPrototypeOf(AnimatedSprite.prototype), 'destroy', this).call(this, options);
        }

        /**
         * A short hand way of creating a movieclip from an array of frame ids
         *
         * @static
         * @param {string[]} frames - The array of frames ids the movieclip will use as its texture frames
         * @return {AnimatedSprite} The new animated sprite with the specified frames.
         */

    }, {
        key: 'totalFrames',


        /**
         * totalFrames is the total number of frames in the AnimatedSprite. This is the same as number of textures
         * assigned to the AnimatedSprite.
         *
         * @readonly
         * @member {number}
         * @default 0
         */
        get: function get() {
            return this._textures.length;
        }

        /**
         * The array of textures used for this AnimatedSprite
         *
         * @member {PIXI.Texture[]}
         */

    }, {
        key: 'textures',
        get: function get() {
            return this._textures;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (value[0] instanceof __WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */]) {
                this._textures = value;
                this._durations = null;
            } else {
                this._textures = [];
                this._durations = [];

                for (var i = 0; i < value.length; i++) {
                    this._textures.push(value[i].texture);
                    this._durations.push(value[i].time);
                }
            }
            this.gotoAndStop(0);
            this.updateTexture();
        }

        /**
        * The AnimatedSprites current frame index
        *
        * @member {number}
        * @readonly
        */

    }, {
        key: 'currentFrame',
        get: function get() {
            var currentFrame = Math.floor(this._currentTime) % this._textures.length;

            if (currentFrame < 0) {
                currentFrame += this._textures.length;
            }

            return currentFrame;
        }
    }], [{
        key: 'fromFrames',
        value: function fromFrames(frames) {
            var textures = [];

            for (var i = 0; i < frames.length; ++i) {
                textures.push(__WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */].fromFrame(frames[i]));
            }

            return new AnimatedSprite(textures);
        }

        /**
         * A short hand way of creating a movieclip from an array of image ids
         *
         * @static
         * @param {string[]} images - the array of image urls the movieclip will use as its texture frames
         * @return {AnimatedSprite} The new animate sprite with the specified images as frames.
         */

    }, {
        key: 'fromImages',
        value: function fromImages(images) {
            var textures = [];

            for (var i = 0; i < images.length; ++i) {
                textures.push(__WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */].fromImage(images[i]));
            }

            return new AnimatedSprite(textures);
        }
    }]);

    return AnimatedSprite;
}(__WEBPACK_IMPORTED_MODULE_0__core__["k" /* Sprite */]);

/* harmony default export */ __webpack_exports__["a"] = (AnimatedSprite);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_sprites_canvas_CanvasTinter__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var tempPoint = new __WEBPACK_IMPORTED_MODULE_0__core__["h" /* Point */]();

/**
 * A tiling sprite is a fast way of rendering a tiling image
 *
 * @class
 * @extends PIXI.Sprite
 * @memberof PIXI.extras
 */

var TilingSprite = function (_core$Sprite) {
    _inherits(TilingSprite, _core$Sprite);

    /**
     * @param {PIXI.Texture} texture - the texture of the tiling sprite
     * @param {number} [width=100] - the width of the tiling sprite
     * @param {number} [height=100] - the height of the tiling sprite
     */
    function TilingSprite(texture) {
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        _classCallCheck(this, TilingSprite);

        /**
         * Tile transform
         *
         * @member {PIXI.TransformStatic}
         */
        var _this = _possibleConstructorReturn(this, (TilingSprite.__proto__ || Object.getPrototypeOf(TilingSprite)).call(this, texture));

        _this.tileTransform = new __WEBPACK_IMPORTED_MODULE_0__core__["p" /* TransformStatic */]();

        // /// private

        /**
         * The with of the tiling sprite
         *
         * @member {number}
         * @private
         */
        _this._width = width;

        /**
         * The height of the tiling sprite
         *
         * @member {number}
         * @private
         */
        _this._height = height;

        /**
         * Canvas pattern
         *
         * @type {CanvasPattern}
         * @private
         */
        _this._canvasPattern = null;

        /**
         * transform that is applied to UV to get the texture coords
         *
         * @member {PIXI.TextureMatrix}
         */
        _this.uvTransform = texture.transform || new __WEBPACK_IMPORTED_MODULE_0__core__["o" /* TextureMatrix */](texture);

        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_renderWebGL' method.
         *
         * @member {string}
         * @default 'tilingSprite'
         */
        _this.pluginName = 'tilingSprite';

        /**
         * Whether or not anchor affects uvs
         *
         * @member {boolean}
         * @default false
         */
        _this.uvRespectAnchor = false;
        return _this;
    }
    /**
     * Changes frame clamping in corresponding textureTransform, shortcut
     * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
     *
     * @default 0.5
     * @member {number}
     */


    _createClass(TilingSprite, [{
        key: '_onTextureUpdate',


        /**
         * @private
         */
        value: function _onTextureUpdate() {
            if (this.uvTransform) {
                this.uvTransform.texture = this._texture;
            }
            this.cachedTint = 0xFFFFFF;
        }

        /**
         * Renders the object using the WebGL renderer
         *
         * @private
         * @param {PIXI.WebGLRenderer} renderer - The renderer
         */

    }, {
        key: '_renderWebGL',
        value: function _renderWebGL(renderer) {
            // tweak our texture temporarily..
            var texture = this._texture;

            if (!texture || !texture.valid) {
                return;
            }

            this.tileTransform.updateLocalTransform();
            this.uvTransform.update();

            renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
            renderer.plugins[this.pluginName].render(this);
        }

        /**
         * Renders the object using the Canvas renderer
         *
         * @private
         * @param {PIXI.CanvasRenderer} renderer - a reference to the canvas renderer
         */

    }, {
        key: '_renderCanvas',
        value: function _renderCanvas(renderer) {
            var texture = this._texture;

            if (!texture.baseTexture.hasLoaded) {
                return;
            }

            var context = renderer.context;
            var transform = this.worldTransform;
            var resolution = renderer.resolution;
            var baseTexture = texture.baseTexture;
            var baseTextureResolution = baseTexture.resolution;
            var modX = this.tilePosition.x / this.tileScale.x % texture._frame.width * baseTextureResolution;
            var modY = this.tilePosition.y / this.tileScale.y % texture._frame.height * baseTextureResolution;

            // create a nice shiny pattern!
            if (this._textureID !== this._texture._updateID || this.cachedTint !== this.tint) {
                this._textureID = this._texture._updateID;
                // cut an object from a spritesheet..
                var tempCanvas = new __WEBPACK_IMPORTED_MODULE_0__core__["b" /* CanvasRenderTarget */](texture._frame.width, texture._frame.height, baseTextureResolution);

                // Tint the tiling sprite
                if (this.tint !== 0xFFFFFF) {
                    this.tintedTexture = __WEBPACK_IMPORTED_MODULE_1__core_sprites_canvas_CanvasTinter__["a" /* default */].getTintedTexture(this, this.tint);
                    tempCanvas.context.drawImage(this.tintedTexture, 0, 0);
                } else {
                    tempCanvas.context.drawImage(baseTexture.source, -texture._frame.x * baseTextureResolution, -texture._frame.y * baseTextureResolution);
                }
                this.cachedTint = this.tint;
                this._canvasPattern = tempCanvas.context.createPattern(tempCanvas.canvas, 'repeat');
            }

            // set context state..
            context.globalAlpha = this.worldAlpha;
            context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

            renderer.setBlendMode(this.blendMode);

            // fill the pattern!
            context.fillStyle = this._canvasPattern;

            // TODO - this should be rolled into the setTransform above..
            context.scale(this.tileScale.x / baseTextureResolution, this.tileScale.y / baseTextureResolution);

            var anchorX = this.anchor.x * -this._width;
            var anchorY = this.anchor.y * -this._height;

            if (this.uvRespectAnchor) {
                context.translate(modX, modY);

                context.fillRect(-modX + anchorX, -modY + anchorY, this._width / this.tileScale.x * baseTextureResolution, this._height / this.tileScale.y * baseTextureResolution);
            } else {
                context.translate(modX + anchorX, modY + anchorY);

                context.fillRect(-modX, -modY, this._width / this.tileScale.x * baseTextureResolution, this._height / this.tileScale.y * baseTextureResolution);
            }
        }

        /**
         * Updates the bounds of the tiling sprite.
         *
         * @private
         */

    }, {
        key: '_calculateBounds',
        value: function _calculateBounds() {
            var minX = this._width * -this._anchor._x;
            var minY = this._height * -this._anchor._y;
            var maxX = this._width * (1 - this._anchor._x);
            var maxY = this._height * (1 - this._anchor._y);

            this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
        }

        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {PIXI.Rectangle} rect - The output rectangle.
         * @return {PIXI.Rectangle} The bounds.
         */

    }, {
        key: 'getLocalBounds',
        value: function getLocalBounds(rect) {
            // we can do a fast local bounds if the sprite has no children!
            if (this.children.length === 0) {
                this._bounds.minX = this._width * -this._anchor._x;
                this._bounds.minY = this._height * -this._anchor._y;
                this._bounds.maxX = this._width * (1 - this._anchor._x);
                this._bounds.maxY = this._height * (1 - this._anchor._x);

                if (!rect) {
                    if (!this._localBoundsRect) {
                        this._localBoundsRect = new __WEBPACK_IMPORTED_MODULE_0__core__["i" /* Rectangle */]();
                    }

                    rect = this._localBoundsRect;
                }

                return this._bounds.getRectangle(rect);
            }

            return _get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), 'getLocalBounds', this).call(this, rect);
        }

        /**
         * Checks if a point is inside this tiling sprite.
         *
         * @param {PIXI.Point} point - the point to check
         * @return {boolean} Whether or not the sprite contains the point.
         */

    }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
            this.worldTransform.applyInverse(point, tempPoint);

            var width = this._width;
            var height = this._height;
            var x1 = -width * this.anchor._x;

            if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
                var y1 = -height * this.anchor._y;

                if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */

    }, {
        key: 'destroy',
        value: function destroy(options) {
            _get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), 'destroy', this).call(this, options);

            this.tileTransform = null;
            this.uvTransform = null;
        }

        /**
         * Helper function that creates a new tiling sprite based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {number|string|PIXI.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
         * @param {number} width - the width of the tiling sprite
         * @param {number} height - the height of the tiling sprite
         * @return {PIXI.Texture} The newly created texture
         */

    }, {
        key: 'clampMargin',
        get: function get() {
            return this.uvTransform.clampMargin;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.uvTransform.clampMargin = value;
            this.uvTransform.update(true);
        }

        /**
         * The scaling of the image that is being tiled
         *
         * @member {PIXI.ObservablePoint}
         */

    }, {
        key: 'tileScale',
        get: function get() {
            return this.tileTransform.scale;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.tileTransform.scale.copy(value);
        }

        /**
         * The offset of the image that is being tiled
         *
         * @member {PIXI.ObservablePoint}
         */

    }, {
        key: 'tilePosition',
        get: function get() {
            return this.tileTransform.position;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.tileTransform.position.copy(value);
        }
    }, {
        key: 'width',


        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        get: function get() {
            return this._width;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._width = value;
        }

        /**
         * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return this._height;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._height = value;
        }
    }], [{
        key: 'from',
        value: function from(source, width, height) {
            return new TilingSprite(__WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */].from(source), width, height);
        }

        /**
         * Helper function that creates a tiling sprite that will use a texture from the TextureCache based on the frameId
         * The frame ids are created when a Texture packer file has been loaded
         *
         * @static
         * @param {string} frameId - The frame Id of the texture in the cache
         * @param {number} width - the width of the tiling sprite
         * @param {number} height - the height of the tiling sprite
         * @return {PIXI.extras.TilingSprite} A new TilingSprite using a texture from the texture cache matching the frameId
         */

    }, {
        key: 'fromFrame',
        value: function fromFrame(frameId, width, height) {
            var texture = __WEBPACK_IMPORTED_MODULE_0__core__["s" /* utils */].TextureCache[frameId];

            if (!texture) {
                throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
            }

            return new TilingSprite(texture, width, height);
        }

        /**
         * Helper function that creates a sprite that will contain a texture based on an image url
         * If the image is not in the texture cache it will be loaded
         *
         * @static
         * @param {string} imageId - The image url of the texture
         * @param {number} width - the width of the tiling sprite
         * @param {number} height - the height of the tiling sprite
         * @param {boolean} [crossorigin] - if you want to specify the cross-origin parameter
         * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - if you want to specify the scale mode,
         *  see {@link PIXI.SCALE_MODES} for possible values
         * @return {PIXI.extras.TilingSprite} A new TilingSprite using a texture from the texture cache matching the image id
         */

    }, {
        key: 'fromImage',
        value: function fromImage(imageId, width, height, crossorigin, scaleMode) {
            return new TilingSprite(__WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */].fromImage(imageId, crossorigin, scaleMode), width, height);
        }
    }]);

    return TilingSprite;
}(__WEBPACK_IMPORTED_MODULE_0__core__["k" /* Sprite */]);

/* harmony default export */ __webpack_exports__["a"] = (TilingSprite);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_math_ObservablePoint__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * A BitmapText object will create a line or multiple lines of text using bitmap font. To
 * split a line you can use '\n', '\r' or '\r\n' in your string. You can generate the fnt files using:
 *
 * A BitmapText can only be created when the font is loaded
 *
 * ```js
 * // in this case the font is in a file called 'desyrel.fnt'
 * let bitmapText = new PIXI.extras.BitmapText("text using a fancy font!", {font: "35px Desyrel", align: "right"});
 * ```
 *
 * http://www.angelcode.com/products/bmfont/ for windows or
 * http://www.bmglyph.com/ for mac.
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI.extras
 */

var BitmapText = function (_core$Container) {
    _inherits(BitmapText, _core$Container);

    /**
     * @param {string} text - The copy that you would like the text to display
     * @param {object} style - The style parameters
     * @param {string|object} style.font - The font descriptor for the object, can be passed as a string of form
     *      "24px FontName" or "FontName" or as an object with explicit name/size properties.
     * @param {string} [style.font.name] - The bitmap font id
     * @param {number} [style.font.size] - The size of the font in pixels, e.g. 24
     * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center' or 'right'), does not affect
     *      single line text
     * @param {number} [style.tint=0xFFFFFF] - The tint color
     */
    function BitmapText(text) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, BitmapText);

        /**
         * Private tracker for the width of the overall text
         *
         * @member {number}
         * @private
         */
        var _this = _possibleConstructorReturn(this, (BitmapText.__proto__ || Object.getPrototypeOf(BitmapText)).call(this));

        _this._textWidth = 0;

        /**
         * Private tracker for the height of the overall text
         *
         * @member {number}
         * @private
         */
        _this._textHeight = 0;

        /**
         * Private tracker for the letter sprite pool.
         *
         * @member {PIXI.Sprite[]}
         * @private
         */
        _this._glyphs = [];

        /**
         * Private tracker for the current style.
         *
         * @member {object}
         * @private
         */
        _this._font = {
            tint: style.tint !== undefined ? style.tint : 0xFFFFFF,
            align: style.align || 'left',
            name: null,
            size: 0
        };

        /**
         * Private tracker for the current font.
         *
         * @member {object}
         * @private
         */
        _this.font = style.font; // run font setter

        /**
         * Private tracker for the current text.
         *
         * @member {string}
         * @private
         */
        _this._text = text;

        /**
         * The max width of this bitmap text in pixels. If the text provided is longer than the
         * value provided, line breaks will be automatically inserted in the last whitespace.
         * Disable by setting value to 0
         *
         * @member {number}
         * @private
         */
        _this._maxWidth = 0;

        /**
         * The max line height. This is useful when trying to use the total height of the Text,
         * ie: when trying to vertically align.
         *
         * @member {number}
         * @private
         */
        _this._maxLineHeight = 0;

        /**
         * Text anchor. read-only
         *
         * @member {PIXI.ObservablePoint}
         * @private
         */
        _this._anchor = new __WEBPACK_IMPORTED_MODULE_1__core_math_ObservablePoint__["a" /* default */](function () {
            _this.dirty = true;
        }, _this, 0, 0);

        /**
         * The dirty state of this object.
         *
         * @member {boolean}
         */
        _this.dirty = false;

        _this.updateText();
        return _this;
    }

    /**
     * Renders text and updates it when needed
     *
     * @private
     */


    _createClass(BitmapText, [{
        key: 'updateText',
        value: function updateText() {
            var data = BitmapText.fonts[this._font.name];
            var scale = this._font.size / data.size;
            var pos = new __WEBPACK_IMPORTED_MODULE_0__core__["h" /* Point */]();
            var chars = [];
            var lineWidths = [];

            var prevCharCode = null;
            var lastLineWidth = 0;
            var maxLineWidth = 0;
            var line = 0;
            var lastSpace = -1;
            var lastSpaceWidth = 0;
            var spacesRemoved = 0;
            var maxLineHeight = 0;

            for (var i = 0; i < this.text.length; i++) {
                var charCode = this.text.charCodeAt(i);

                if (/(\s)/.test(this.text.charAt(i))) {
                    lastSpace = i;
                    lastSpaceWidth = lastLineWidth;
                }

                if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
                    lineWidths.push(lastLineWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
                    line++;

                    pos.x = 0;
                    pos.y += data.lineHeight;
                    prevCharCode = null;
                    continue;
                }

                if (lastSpace !== -1 && this._maxWidth > 0 && pos.x * scale > this._maxWidth) {
                    __WEBPACK_IMPORTED_MODULE_0__core__["s" /* utils */].removeItems(chars, lastSpace - spacesRemoved, i - lastSpace);
                    i = lastSpace;
                    lastSpace = -1;
                    ++spacesRemoved;

                    lineWidths.push(lastSpaceWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
                    line++;

                    pos.x = 0;
                    pos.y += data.lineHeight;
                    prevCharCode = null;
                    continue;
                }

                var charData = data.chars[charCode];

                if (!charData) {
                    continue;
                }

                if (prevCharCode && charData.kerning[prevCharCode]) {
                    pos.x += charData.kerning[prevCharCode];
                }

                chars.push({
                    texture: charData.texture,
                    line: line,
                    charCode: charCode,
                    position: new __WEBPACK_IMPORTED_MODULE_0__core__["h" /* Point */](pos.x + charData.xOffset, pos.y + charData.yOffset)
                });
                lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
                pos.x += charData.xAdvance;
                maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
                prevCharCode = charCode;
            }

            lineWidths.push(lastLineWidth);
            maxLineWidth = Math.max(maxLineWidth, lastLineWidth);

            var lineAlignOffsets = [];

            for (var _i = 0; _i <= line; _i++) {
                var alignOffset = 0;

                if (this._font.align === 'right') {
                    alignOffset = maxLineWidth - lineWidths[_i];
                } else if (this._font.align === 'center') {
                    alignOffset = (maxLineWidth - lineWidths[_i]) / 2;
                }

                lineAlignOffsets.push(alignOffset);
            }

            var lenChars = chars.length;
            var tint = this.tint;

            for (var _i2 = 0; _i2 < lenChars; _i2++) {
                var c = this._glyphs[_i2]; // get the next glyph sprite

                if (c) {
                    c.texture = chars[_i2].texture;
                } else {
                    c = new __WEBPACK_IMPORTED_MODULE_0__core__["k" /* Sprite */](chars[_i2].texture);
                    this._glyphs.push(c);
                }

                c.position.x = (chars[_i2].position.x + lineAlignOffsets[chars[_i2].line]) * scale;
                c.position.y = chars[_i2].position.y * scale;
                c.scale.x = c.scale.y = scale;
                c.tint = tint;

                if (!c.parent) {
                    this.addChild(c);
                }
            }

            // remove unnecessary children.
            for (var _i3 = lenChars; _i3 < this._glyphs.length; ++_i3) {
                this.removeChild(this._glyphs[_i3]);
            }

            this._textWidth = maxLineWidth * scale;
            this._textHeight = (pos.y + data.lineHeight) * scale;

            // apply anchor
            if (this.anchor.x !== 0 || this.anchor.y !== 0) {
                for (var _i4 = 0; _i4 < lenChars; _i4++) {
                    this._glyphs[_i4].x -= this._textWidth * this.anchor.x;
                    this._glyphs[_i4].y -= this._textHeight * this.anchor.y;
                }
            }
            this._maxLineHeight = maxLineHeight * scale;
        }

        /**
         * Updates the transform of this object
         *
         * @private
         */

    }, {
        key: 'updateTransform',
        value: function updateTransform() {
            this.validate();
            this.containerUpdateTransform();
        }

        /**
         * Validates text before calling parent's getLocalBounds
         *
         * @return {PIXI.Rectangle} The rectangular bounding area
         */

    }, {
        key: 'getLocalBounds',
        value: function getLocalBounds() {
            this.validate();

            return _get(BitmapText.prototype.__proto__ || Object.getPrototypeOf(BitmapText.prototype), 'getLocalBounds', this).call(this);
        }

        /**
         * Updates text when needed
         *
         * @private
         */

    }, {
        key: 'validate',
        value: function validate() {
            if (this.dirty) {
                this.updateText();
                this.dirty = false;
            }
        }

        /**
         * The tint of the BitmapText object
         *
         * @member {number}
         */

    }, {
        key: 'tint',
        get: function get() {
            return this._font.tint;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._font.tint = typeof value === 'number' && value >= 0 ? value : 0xFFFFFF;

            this.dirty = true;
        }

        /**
         * The alignment of the BitmapText object
         *
         * @member {string}
         * @default 'left'
         */

    }, {
        key: 'align',
        get: function get() {
            return this._font.align;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._font.align = value || 'left';

            this.dirty = true;
        }

        /**
         * The anchor sets the origin point of the text.
         * The default is 0,0 this means the text's origin is the top left
         * Setting the anchor to 0.5,0.5 means the text's origin is centered
         * Setting the anchor to 1,1 would mean the text's origin point will be the bottom right corner
         *
         * @member {PIXI.Point | number}
         */

    }, {
        key: 'anchor',
        get: function get() {
            return this._anchor;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (typeof value === 'number') {
                this._anchor.set(value);
            } else {
                this._anchor.copy(value);
            }
        }

        /**
         * The font descriptor of the BitmapText object
         *
         * @member {string|object}
         */

    }, {
        key: 'font',
        get: function get() {
            return this._font;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (!value) {
                return;
            }

            if (typeof value === 'string') {
                value = value.split(' ');

                this._font.name = value.length === 1 ? value[0] : value.slice(1).join(' ');
                this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText.fonts[this._font.name].size;
            } else {
                this._font.name = value.name;
                this._font.size = typeof value.size === 'number' ? value.size : parseInt(value.size, 10);
            }

            this.dirty = true;
        }

        /**
         * The text of the BitmapText object
         *
         * @member {string}
         */

    }, {
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            value = value.toString() || ' ';
            if (this._text === value) {
                return;
            }
            this._text = value;
            this.dirty = true;
        }

        /**
         * The max width of this bitmap text in pixels. If the text provided is longer than the
         * value provided, line breaks will be automatically inserted in the last whitespace.
         * Disable by setting value to 0
         *
         * @member {number}
         */

    }, {
        key: 'maxWidth',
        get: function get() {
            return this._maxWidth;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._maxWidth === value) {
                return;
            }
            this._maxWidth = value;
            this.dirty = true;
        }

        /**
         * The max line height. This is useful when trying to use the total height of the Text,
         * ie: when trying to vertically align.
         *
         * @member {number}
         * @readonly
         */

    }, {
        key: 'maxLineHeight',
        get: function get() {
            this.validate();

            return this._maxLineHeight;
        }

        /**
         * The width of the overall text, different from fontSize,
         * which is defined in the style object
         *
         * @member {number}
         * @readonly
         */

    }, {
        key: 'textWidth',
        get: function get() {
            this.validate();

            return this._textWidth;
        }

        /**
         * The height of the overall text, different from fontSize,
         * which is defined in the style object
         *
         * @member {number}
         * @readonly
         */

    }, {
        key: 'textHeight',
        get: function get() {
            this.validate();

            return this._textHeight;
        }

        /**
         * Register a bitmap font with data and a texture.
         *
         * @static
         * @param {XMLDocument} xml - The XML document data.
         * @param {PIXI.Texture} texture - Texture with all symbols.
         * @return {Object} Result font object with font, size, lineHeight and char fields.
         */

    }], [{
        key: 'registerFont',
        value: function registerFont(xml, texture) {
            var data = {};
            var info = xml.getElementsByTagName('info')[0];
            var common = xml.getElementsByTagName('common')[0];
            var fileName = xml.getElementsByTagName('page')[0].getAttribute('file');
            var res = Object(__WEBPACK_IMPORTED_MODULE_2__core_utils__["getResolutionOfUrl"])(fileName, __WEBPACK_IMPORTED_MODULE_3__core_settings__["a" /* default */].RESOLUTION);

            data.font = info.getAttribute('face');
            data.size = parseInt(info.getAttribute('size'), 10);
            data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10) / res;
            data.chars = {};

            // parse letters
            var letters = xml.getElementsByTagName('char');

            for (var i = 0; i < letters.length; i++) {
                var letter = letters[i];
                var charCode = parseInt(letter.getAttribute('id'), 10);

                var textureRect = new __WEBPACK_IMPORTED_MODULE_0__core__["i" /* Rectangle */](parseInt(letter.getAttribute('x'), 10) / res + texture.frame.x / res, parseInt(letter.getAttribute('y'), 10) / res + texture.frame.y / res, parseInt(letter.getAttribute('width'), 10) / res, parseInt(letter.getAttribute('height'), 10) / res);

                data.chars[charCode] = {
                    xOffset: parseInt(letter.getAttribute('xoffset'), 10) / res,
                    yOffset: parseInt(letter.getAttribute('yoffset'), 10) / res,
                    xAdvance: parseInt(letter.getAttribute('xadvance'), 10) / res,
                    kerning: {},
                    texture: new __WEBPACK_IMPORTED_MODULE_0__core__["n" /* Texture */](texture.baseTexture, textureRect)

                };
            }

            // parse kernings
            var kernings = xml.getElementsByTagName('kerning');

            for (var _i5 = 0; _i5 < kernings.length; _i5++) {
                var kerning = kernings[_i5];
                var first = parseInt(kerning.getAttribute('first'), 10) / res;
                var second = parseInt(kerning.getAttribute('second'), 10) / res;
                var amount = parseInt(kerning.getAttribute('amount'), 10) / res;

                if (data.chars[second]) {
                    data.chars[second].kerning[first] = amount;
                }
            }

            // I'm leaving this as a temporary fix so we can test the bitmap fonts in v3
            // but it's very likely to change
            BitmapText.fonts[data.font] = data;

            return data;
        }
    }]);

    return BitmapText;
}(__WEBPACK_IMPORTED_MODULE_0__core__["d" /* Container */]);

/* harmony default export */ __webpack_exports__["a"] = (BitmapText);


BitmapText.fonts = {};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_textures_Texture__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_textures_BaseTexture__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var DisplayObject = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* DisplayObject */];
var _tempMatrix = new __WEBPACK_IMPORTED_MODULE_0__core__["g" /* Matrix */]();

DisplayObject.prototype._cacheAsBitmap = false;
DisplayObject.prototype._cacheData = false;

// figured theres no point adding ALL the extra variables to prototype.
// this model can hold the information needed. This can also be generated on demand as
// most objects are not cached as bitmaps.
/**
 * @class
 * @ignore
 */

var CacheData =
/**
 *
 */
function CacheData() {
    _classCallCheck(this, CacheData);

    this.textureCacheId = null;

    this.originalRenderWebGL = null;
    this.originalRenderCanvas = null;
    this.originalCalculateBounds = null;
    this.originalGetLocalBounds = null;

    this.originalUpdateTransform = null;
    this.originalHitTest = null;
    this.originalDestroy = null;
    this.originalMask = null;
    this.originalFilterArea = null;
    this.sprite = null;
};

Object.defineProperties(DisplayObject.prototype, {
    /**
     * Set this to true if you want this display object to be cached as a bitmap.
     * This basically takes a snap shot of the display object as it is at that moment. It can
     * provide a performance benefit for complex static displayObjects.
     * To remove simply set this property to 'false'
     *
     * IMPORTANT GOTCHA - make sure that all your textures are preloaded BEFORE setting this property to true
     * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
     *
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     */
    cacheAsBitmap: {
        get: function get() {
            return this._cacheAsBitmap;
        },
        set: function set(value) {
            if (this._cacheAsBitmap === value) {
                return;
            }

            this._cacheAsBitmap = value;

            var data = void 0;

            if (value) {
                if (!this._cacheData) {
                    this._cacheData = new CacheData();
                }

                data = this._cacheData;

                data.originalRenderWebGL = this.renderWebGL;
                data.originalRenderCanvas = this.renderCanvas;

                data.originalUpdateTransform = this.updateTransform;
                data.originalCalculateBounds = this._calculateBounds;
                data.originalGetLocalBounds = this.getLocalBounds;

                data.originalDestroy = this.destroy;

                data.originalContainsPoint = this.containsPoint;

                data.originalMask = this._mask;
                data.originalFilterArea = this.filterArea;

                this.renderWebGL = this._renderCachedWebGL;
                this.renderCanvas = this._renderCachedCanvas;

                this.destroy = this._cacheAsBitmapDestroy;
            } else {
                data = this._cacheData;

                if (data.sprite) {
                    this._destroyCachedDisplayObject();
                }

                this.renderWebGL = data.originalRenderWebGL;
                this.renderCanvas = data.originalRenderCanvas;
                this._calculateBounds = data.originalCalculateBounds;
                this.getLocalBounds = data.originalGetLocalBounds;

                this.destroy = data.originalDestroy;

                this.updateTransform = data.originalUpdateTransform;
                this.containsPoint = data.originalContainsPoint;

                this._mask = data.originalMask;
                this.filterArea = data.originalFilterArea;
            }
        }
    }
});

/**
 * Renders a cached version of the sprite with WebGL
 *
 * @private
 * @memberof PIXI.DisplayObject#
 * @param {PIXI.WebGLRenderer} renderer - the WebGL renderer
 */
DisplayObject.prototype._renderCachedWebGL = function _renderCachedWebGL(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
    }

    this._initCachedDisplayObject(renderer);

    this._cacheData.sprite._transformID = -1;
    this._cacheData.sprite.worldAlpha = this.worldAlpha;
    this._cacheData.sprite._renderWebGL(renderer);
};

/**
 * Prepares the WebGL renderer to cache the sprite
 *
 * @private
 * @memberof PIXI.DisplayObject#
 * @param {PIXI.WebGLRenderer} renderer - the WebGL renderer
 */
DisplayObject.prototype._initCachedDisplayObject = function _initCachedDisplayObject(renderer) {
    if (this._cacheData && this._cacheData.sprite) {
        return;
    }

    // make sure alpha is set to 1 otherwise it will get rendered as invisible!
    var cacheAlpha = this.alpha;

    this.alpha = 1;

    // first we flush anything left in the renderer (otherwise it would get rendered to the cached texture)
    renderer.currentRenderer.flush();
    // this.filters= [];

    // next we find the dimensions of the untransformed object
    // this function also calls updatetransform on all its children as part of the measuring.
    // This means we don't need to update the transform again in this function
    // TODO pass an object to clone too? saves having to create a new one each time!
    var bounds = this.getLocalBounds().clone();

    // add some padding!
    if (this._filters) {
        var padding = this._filters[0].padding;

        bounds.pad(padding);
    }

    // for now we cache the current renderTarget that the webGL renderer is currently using.
    // this could be more elegent..
    var cachedRenderTarget = renderer._activeRenderTarget;
    // We also store the filter stack - I will definitely look to change how this works a little later down the line.
    var stack = renderer.filterManager.filterStack;

    // this renderTexture will be used to store the cached DisplayObject

    var renderTexture = __WEBPACK_IMPORTED_MODULE_0__core__["j" /* RenderTexture */].create(bounds.width | 0, bounds.height | 0);

    var textureCacheId = 'cacheAsBitmap_' + Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["uid"])();

    this._cacheData.textureCacheId = textureCacheId;

    __WEBPACK_IMPORTED_MODULE_2__core_textures_BaseTexture__["a" /* default */].addToCache(renderTexture.baseTexture, textureCacheId);
    __WEBPACK_IMPORTED_MODULE_1__core_textures_Texture__["a" /* default */].addToCache(renderTexture, textureCacheId);

    // need to set //
    var m = _tempMatrix;

    m.tx = -bounds.x;
    m.ty = -bounds.y;

    // reset
    this.transform.worldTransform.identity();

    // set all properties to there original so we can render to a texture
    this.renderWebGL = this._cacheData.originalRenderWebGL;

    renderer.render(this, renderTexture, true, m, true);
    // now restore the state be setting the new properties

    renderer.bindRenderTarget(cachedRenderTarget);

    renderer.filterManager.filterStack = stack;

    this.renderWebGL = this._renderCachedWebGL;
    this.updateTransform = this.displayObjectUpdateTransform;

    this._mask = null;
    this.filterArea = null;

    // create our cached sprite
    var cachedSprite = new __WEBPACK_IMPORTED_MODULE_0__core__["k" /* Sprite */](renderTexture);

    cachedSprite.transform.worldTransform = this.transform.worldTransform;
    cachedSprite.anchor.x = -(bounds.x / bounds.width);
    cachedSprite.anchor.y = -(bounds.y / bounds.height);
    cachedSprite.alpha = cacheAlpha;
    cachedSprite._bounds = this._bounds;

    // easy bounds..
    this._calculateBounds = this._calculateCachedBounds;
    this.getLocalBounds = this._getCachedLocalBounds;

    this._cacheData.sprite = cachedSprite;

    this.transform._parentID = -1;
    // restore the transform of the cached sprite to avoid the nasty flicker..
    if (!this.parent) {
        this.parent = renderer._tempDisplayObjectParent;
        this.updateTransform();
        this.parent = null;
    } else {
        this.updateTransform();
    }

    // map the hit test..
    this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
};

/**
 * Renders a cached version of the sprite with canvas
 *
 * @private
 * @memberof PIXI.DisplayObject#
 * @param {PIXI.WebGLRenderer} renderer - the WebGL renderer
 */
DisplayObject.prototype._renderCachedCanvas = function _renderCachedCanvas(renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
    }

    this._initCachedDisplayObjectCanvas(renderer);

    this._cacheData.sprite.worldAlpha = this.worldAlpha;

    this._cacheData.sprite.renderCanvas(renderer);
};

// TODO this can be the same as the webGL verison.. will need to do a little tweaking first though..
/**
 * Prepares the Canvas renderer to cache the sprite
 *
 * @private
 * @memberof PIXI.DisplayObject#
 * @param {PIXI.WebGLRenderer} renderer - the WebGL renderer
 */
DisplayObject.prototype._initCachedDisplayObjectCanvas = function _initCachedDisplayObjectCanvas(renderer) {
    if (this._cacheData && this._cacheData.sprite) {
        return;
    }

    // get bounds actually transforms the object for us already!
    var bounds = this.getLocalBounds();

    var cacheAlpha = this.alpha;

    this.alpha = 1;

    var cachedRenderTarget = renderer.context;

    var renderTexture = __WEBPACK_IMPORTED_MODULE_0__core__["j" /* RenderTexture */].create(bounds.width | 0, bounds.height | 0);

    var textureCacheId = 'cacheAsBitmap_' + Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["uid"])();

    this._cacheData.textureCacheId = textureCacheId;

    __WEBPACK_IMPORTED_MODULE_2__core_textures_BaseTexture__["a" /* default */].addToCache(renderTexture.baseTexture, textureCacheId);
    __WEBPACK_IMPORTED_MODULE_1__core_textures_Texture__["a" /* default */].addToCache(renderTexture, textureCacheId);

    // need to set //
    var m = _tempMatrix;

    this.transform.localTransform.copy(m);
    m.invert();

    m.tx -= bounds.x;
    m.ty -= bounds.y;

    // m.append(this.transform.worldTransform.)
    // set all properties to there original so we can render to a texture
    this.renderCanvas = this._cacheData.originalRenderCanvas;

    // renderTexture.render(this, m, true);
    renderer.render(this, renderTexture, true, m, false);

    // now restore the state be setting the new properties
    renderer.context = cachedRenderTarget;

    this.renderCanvas = this._renderCachedCanvas;
    this._calculateBounds = this._calculateCachedBounds;

    this._mask = null;
    this.filterArea = null;

    // create our cached sprite
    var cachedSprite = new __WEBPACK_IMPORTED_MODULE_0__core__["k" /* Sprite */](renderTexture);

    cachedSprite.transform.worldTransform = this.transform.worldTransform;
    cachedSprite.anchor.x = -(bounds.x / bounds.width);
    cachedSprite.anchor.y = -(bounds.y / bounds.height);
    cachedSprite._bounds = this._bounds;
    cachedSprite.alpha = cacheAlpha;

    if (!this.parent) {
        this.parent = renderer._tempDisplayObjectParent;
        this.updateTransform();
        this.parent = null;
    } else {
        this.updateTransform();
    }

    this.updateTransform = this.displayObjectUpdateTransform;

    this._cacheData.sprite = cachedSprite;

    this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
};

/**
 * Calculates the bounds of the cached sprite
 *
 * @private
 */
DisplayObject.prototype._calculateCachedBounds = function _calculateCachedBounds() {
    this._cacheData.sprite._calculateBounds();
};

/**
 * Gets the bounds of the cached sprite.
 *
 * @private
 * @return {Rectangle} The local bounds.
 */
DisplayObject.prototype._getCachedLocalBounds = function _getCachedLocalBounds() {
    return this._cacheData.sprite.getLocalBounds();
};

/**
 * Destroys the cached sprite.
 *
 * @private
 */
DisplayObject.prototype._destroyCachedDisplayObject = function _destroyCachedDisplayObject() {
    this._cacheData.sprite._texture.destroy(true);
    this._cacheData.sprite = null;

    __WEBPACK_IMPORTED_MODULE_2__core_textures_BaseTexture__["a" /* default */].removeFromCache(this._cacheData.textureCacheId);
    __WEBPACK_IMPORTED_MODULE_1__core_textures_Texture__["a" /* default */].removeFromCache(this._cacheData.textureCacheId);

    this._cacheData.textureCacheId = null;
};

/**
 * Destroys the cached object.
 *
 * @private
 * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
 *  have been set to that value.
 *  Used when destroying containers, see the Container.destroy method.
 */
DisplayObject.prototype._cacheAsBitmapDestroy = function _cacheAsBitmapDestroy(options) {
    this.cacheAsBitmap = false;
    this.destroy(options);
};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);


/**
 * The instance name of the object.
 *
 * @memberof PIXI.DisplayObject#
 * @member {string}
 */
__WEBPACK_IMPORTED_MODULE_0__core__["e" /* DisplayObject */].prototype.name = null;

/**
 * Returns the display object in the container
 *
 * @memberof PIXI.Container#
 * @param {string} name - instance name
 * @return {PIXI.DisplayObject} The child with the specified name.
 */
__WEBPACK_IMPORTED_MODULE_0__core__["d" /* Container */].prototype.getChildByName = function getChildByName(name) {
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].name === name) {
            return this.children[i];
        }
    }

    return null;
};

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);


/**
 * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
 *
 * @memberof PIXI.DisplayObject#
 * @param {Point} point - the point to write the global value to. If null a new point will be returned
 * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
 *  being updated. This means the calculation returned MAY be out of date BUT will give you a
 *  nice performance boost
 * @return {Point} The updated point
 */
__WEBPACK_IMPORTED_MODULE_0__core__["e" /* DisplayObject */].prototype.getGlobalPosition = function getGlobalPosition() {
    var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new __WEBPACK_IMPORTED_MODULE_0__core__["h" /* Point */]();
    var skipUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (this.parent) {
        this.parent.toGlobal(this.position, point, skipUpdate);
    } else {
        point.x = this.position.x;
        point.y = this.position.y;
    }

    return point;
};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InteractionData__ = __webpack_require__(53);
/* unused harmony reexport InteractionData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InteractionManager__ = __webpack_require__(117);
/* unused harmony reexport InteractionManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interactiveTarget__ = __webpack_require__(56);
/* unused harmony reexport interactiveTarget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InteractionTrackingData__ = __webpack_require__(55);
/* unused harmony reexport InteractionTrackingData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__InteractionEvent__ = __webpack_require__(54);
/* unused harmony reexport InteractionEvent */
/**
 * This namespace contains a renderer plugin for handling mouse, pointer, and touch events.
 *
 * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
 * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.WebGLRenderer#plugins}.
 * @namespace PIXI.interaction
 */






/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InteractionData__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InteractionEvent__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InteractionTrackingData__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interactiveTarget__ = __webpack_require__(56);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// Mix interactiveTarget into core.DisplayObject.prototype, after deprecation has been handled
__WEBPACK_IMPORTED_MODULE_0__core__["s" /* utils */].mixins.delayMixin(__WEBPACK_IMPORTED_MODULE_0__core__["e" /* DisplayObject */].prototype, __WEBPACK_IMPORTED_MODULE_5__interactiveTarget__["a" /* default */]);

var MOUSE_POINTER_ID = 'MOUSE';

// helpers for hitTest() - only used inside hitTest()
var hitTestEvent = {
    target: null,
    data: {
        global: null
    }
};

/**
 * The interaction manager deals with mouse, touch and pointer events. Any DisplayObject can be interactive
 * if its interactive parameter is set to true
 * This manager also supports multitouch.
 *
 * An instance of this class is automatically created by default, and can be found at renderer.plugins.interaction
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI.interaction
 */

var InteractionManager = function (_EventEmitter) {
    _inherits(InteractionManager, _EventEmitter);

    /**
     * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer - A reference to the current renderer
     * @param {object} [options] - The options for the manager.
     * @param {boolean} [options.autoPreventDefault=true] - Should the manager automatically prevent default browser actions.
     * @param {number} [options.interactionFrequency=10] - Frequency increases the interaction events will be checked.
     */
    function InteractionManager(renderer, options) {
        _classCallCheck(this, InteractionManager);

        var _this = _possibleConstructorReturn(this, (InteractionManager.__proto__ || Object.getPrototypeOf(InteractionManager)).call(this));

        options = options || {};

        /**
         * The renderer this interaction manager works for.
         *
         * @member {PIXI.SystemRenderer}
         */
        _this.renderer = renderer;

        /**
         * Should default browser actions automatically be prevented.
         * Does not apply to pointer events for backwards compatibility
         * preventDefault on pointer events stops mouse events from firing
         * Thus, for every pointer event, there will always be either a mouse of touch event alongside it.
         *
         * @member {boolean}
         * @default true
         */
        _this.autoPreventDefault = options.autoPreventDefault !== undefined ? options.autoPreventDefault : true;

        /**
         * Frequency in milliseconds that the mousemove, moveover & mouseout interaction events will be checked.
         *
         * @member {number}
         * @default 10
         */
        _this.interactionFrequency = options.interactionFrequency || 10;

        /**
         * The mouse data
         *
         * @member {PIXI.interaction.InteractionData}
         */
        _this.mouse = new __WEBPACK_IMPORTED_MODULE_1__InteractionData__["a" /* default */]();
        _this.mouse.identifier = MOUSE_POINTER_ID;

        // setting the mouse to start off far off screen will mean that mouse over does
        //  not get called before we even move the mouse.
        _this.mouse.global.set(-999999);

        /**
         * Actively tracked InteractionData
         *
         * @private
         * @member {Object.<number,PIXI.interation.InteractionData>}
         */
        _this.activeInteractionData = {};
        _this.activeInteractionData[MOUSE_POINTER_ID] = _this.mouse;

        /**
         * Pool of unused InteractionData
         *
         * @private
         * @member {PIXI.interation.InteractionData[]}
         */
        _this.interactionDataPool = [];

        /**
         * An event data object to handle all the event tracking/dispatching
         *
         * @member {object}
         */
        _this.eventData = new __WEBPACK_IMPORTED_MODULE_2__InteractionEvent__["a" /* default */]();

        /**
         * The DOM element to bind to.
         *
         * @private
         * @member {HTMLElement}
         */
        _this.interactionDOMElement = null;

        /**
         * This property determines if mousemove and touchmove events are fired only when the cursor
         * is over the object.
         * Setting to true will make things work more in line with how the DOM verison works.
         * Setting to false can make things easier for things like dragging
         * It is currently set to false as this is how PixiJS used to work. This will be set to true in
         * future versions of pixi.
         *
         * @member {boolean}
         * @default false
         */
        _this.moveWhenInside = false;

        /**
         * Have events been attached to the dom element?
         *
         * @private
         * @member {boolean}
         */
        _this.eventsAdded = false;

        /**
         * Is the mouse hovering over the renderer?
         *
         * @private
         * @member {boolean}
         */
        _this.mouseOverRenderer = false;

        /**
         * Does the device support touch events
         * https://www.w3.org/TR/touch-events/
         *
         * @readonly
         * @member {boolean}
         */
        _this.supportsTouchEvents = 'ontouchstart' in window;

        /**
         * Does the device support pointer events
         * https://www.w3.org/Submission/pointer-events/
         *
         * @readonly
         * @member {boolean}
         */
        _this.supportsPointerEvents = !!window.PointerEvent;

        // this will make it so that you don't have to call bind all the time

        /**
         * @private
         * @member {Function}
         */
        _this.onPointerUp = _this.onPointerUp.bind(_this);
        _this.processPointerUp = _this.processPointerUp.bind(_this);

        /**
         * @private
         * @member {Function}
         */
        _this.onPointerCancel = _this.onPointerCancel.bind(_this);
        _this.processPointerCancel = _this.processPointerCancel.bind(_this);

        /**
         * @private
         * @member {Function}
         */
        _this.onPointerDown = _this.onPointerDown.bind(_this);
        _this.processPointerDown = _this.processPointerDown.bind(_this);

        /**
         * @private
         * @member {Function}
         */
        _this.onPointerMove = _this.onPointerMove.bind(_this);
        _this.processPointerMove = _this.processPointerMove.bind(_this);

        /**
         * @private
         * @member {Function}
         */
        _this.onPointerOut = _this.onPointerOut.bind(_this);
        _this.processPointerOverOut = _this.processPointerOverOut.bind(_this);

        /**
         * @private
         * @member {Function}
         */
        _this.onPointerOver = _this.onPointerOver.bind(_this);

        /**
         * Dictionary of how different cursor modes are handled. Strings are handled as CSS cursor
         * values, objects are handled as dictionaries of CSS values for interactionDOMElement,
         * and functions are called instead of changing the CSS.
         * Default CSS cursor values are provided for 'default' and 'pointer' modes.
         * @member {Object.<string, (string|Function|Object.<string, string>)>}
         */
        _this.cursorStyles = {
            default: 'inherit',
            pointer: 'pointer'
        };

        /**
         * The mode of the cursor that is being used.
         * The value of this is a key from the cursorStyles dictionary.
         *
         * @member {string}
         */
        _this.currentCursorMode = null;

        /**
         * Internal cached let.
         *
         * @private
         * @member {string}
         */
        _this.cursor = null;

        /**
         * Internal cached let.
         *
         * @private
         * @member {PIXI.Point}
         */
        _this._tempPoint = new __WEBPACK_IMPORTED_MODULE_0__core__["h" /* Point */]();

        /**
         * The current resolution / device pixel ratio.
         *
         * @member {number}
         * @default 1
         */
        _this.resolution = 1;

        _this.setTargetElement(_this.renderer.view, _this.renderer.resolution);

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed on the display
         * object.
         *
         * @event PIXI.interaction.InteractionManager#mousedown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * on the display object.
         *
         * @event PIXI.interaction.InteractionManager#rightdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released over the display
         * object.
         *
         * @event PIXI.interaction.InteractionManager#mouseup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * over the display object.
         *
         * @event PIXI.interaction.InteractionManager#rightup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
         * the display object.
         *
         * @event PIXI.interaction.InteractionManager#click
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * and released on the display object.
         *
         * @event PIXI.interaction.InteractionManager#rightclick
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released outside the
         * display object that initially registered a
         * [mousedown]{@link PIXI.interaction.InteractionManager#event:mousedown}.
         *
         * @event PIXI.interaction.InteractionManager#mouseupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * outside the display object that initially registered a
         * [rightdown]{@link PIXI.interaction.InteractionManager#event:rightdown}.
         *
         * @event PIXI.interaction.InteractionManager#rightupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved while over the display object
         *
         * @event PIXI.interaction.InteractionManager#mousemove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved onto the display object
         *
         * @event PIXI.interaction.InteractionManager#mouseover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved off the display object
         *
         * @event PIXI.interaction.InteractionManager#mouseout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed on the display object.
         *
         * @event PIXI.interaction.InteractionManager#pointerdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released over the display object.
         *
         * @event PIXI.interaction.InteractionManager#pointerup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a pointer event
         *
         * @event PIXI.interaction.InteractionManager#pointercancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed and released on the display object.
         *
         * @event PIXI.interaction.InteractionManager#pointertap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released outside the display object that initially
         * registered a [pointerdown]{@link PIXI.interaction.InteractionManager#event:pointerdown}.
         *
         * @event PIXI.interaction.InteractionManager#pointerupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved while over the display object
         *
         * @event PIXI.interaction.InteractionManager#pointermove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved onto the display object
         *
         * @event PIXI.interaction.InteractionManager#pointerover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved off the display object
         *
         * @event PIXI.interaction.InteractionManager#pointerout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed on the display object.
         *
         * @event PIXI.interaction.InteractionManager#touchstart
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed from the display object.
         *
         * @event PIXI.interaction.InteractionManager#touchend
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a touch
         *
         * @event PIXI.interaction.InteractionManager#touchcancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed and removed from the display object.
         *
         * @event PIXI.interaction.InteractionManager#tap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed outside of the display object that initially
         * registered a [touchstart]{@link PIXI.interaction.InteractionManager#event:touchstart}.
         *
         * @event PIXI.interaction.InteractionManager#touchendoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is moved along the display object.
         *
         * @event PIXI.interaction.InteractionManager#touchmove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed on the display.
         * object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mousedown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released over the display
         * object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * over the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
         * the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#click
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * and released on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightclick
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released outside the
         * display object that initially registered a
         * [mousedown]{@link PIXI.DisplayObject#event:mousedown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * outside the display object that initially registered a
         * [rightdown]{@link PIXI.DisplayObject#event:rightdown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved while over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mousemove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved onto the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved off the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a pointer event.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointercancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed and released on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointertap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released outside the display object that initially
         * registered a [pointerdown]{@link PIXI.DisplayObject#event:pointerdown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved while over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointermove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved onto the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved off the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchstart
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed from the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchend
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a touch.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchcancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed and removed from the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#tap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed outside of the display object that initially
         * registered a [touchstart]{@link PIXI.DisplayObject#event:touchstart}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchendoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is moved along the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchmove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */
        return _this;
    }

    /**
     * Hit tests a point against the display tree, returning the first interactive object that is hit.
     *
     * @param {PIXI.Point} globalPoint - A point to hit test with, in global space.
     * @param {PIXI.Container} [root] - The root display object to start from. If omitted, defaults
     * to the last rendered root of the associated renderer.
     * @return {PIXI.DisplayObject} The hit display object, if any.
     */


    _createClass(InteractionManager, [{
        key: 'hitTest',
        value: function hitTest(globalPoint, root) {
            // clear the target for our hit test
            hitTestEvent.target = null;
            // assign the global point
            hitTestEvent.data.global = globalPoint;
            // ensure safety of the root
            if (!root) {
                root = this.renderer._lastObjectRendered;
            }
            // run the hit test
            this.processInteractive(hitTestEvent, root, null, true);
            // return our found object - it'll be null if we didn't hit anything

            return hitTestEvent.target;
        }

        /**
         * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
         * other DOM elements on top of the renderers Canvas element. With this you'll be bale to deletegate
         * another DOM element to receive those events.
         *
         * @param {HTMLCanvasElement} element - the DOM element which will receive mouse and touch events.
         * @param {number} [resolution=1] - The resolution / device pixel ratio of the new element (relative to the canvas).
         */

    }, {
        key: 'setTargetElement',
        value: function setTargetElement(element) {
            var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            this.removeEvents();

            this.interactionDOMElement = element;

            this.resolution = resolution;

            this.addEvents();
        }

        /**
         * Registers all the DOM events
         *
         * @private
         */

    }, {
        key: 'addEvents',
        value: function addEvents() {
            if (!this.interactionDOMElement) {
                return;
            }

            __WEBPACK_IMPORTED_MODULE_0__core__["r" /* ticker */].shared.add(this.update, this, __WEBPACK_IMPORTED_MODULE_0__core__["q" /* UPDATE_PRIORITY */].INTERACTION);

            if (window.navigator.msPointerEnabled) {
                this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
                this.interactionDOMElement.style['-ms-touch-action'] = 'none';
            } else if (this.supportsPointerEvents) {
                this.interactionDOMElement.style['touch-action'] = 'none';
            }

            /**
             * These events are added first, so that if pointer events are normalised, they are fired
             * in the same order as non-normalised events. ie. pointer event 1st, mouse / touch 2nd
             */
            if (this.supportsPointerEvents) {
                window.document.addEventListener('pointermove', this.onPointerMove, true);
                this.interactionDOMElement.addEventListener('pointerdown', this.onPointerDown, true);
                // pointerout is fired in addition to pointerup (for touch events) and pointercancel
                // we already handle those, so for the purposes of what we do in onPointerOut, we only
                // care about the pointerleave event
                this.interactionDOMElement.addEventListener('pointerleave', this.onPointerOut, true);
                this.interactionDOMElement.addEventListener('pointerover', this.onPointerOver, true);
                window.addEventListener('pointercancel', this.onPointerCancel, true);
                window.addEventListener('pointerup', this.onPointerUp, true);
            } else {
                window.document.addEventListener('mousemove', this.onPointerMove, true);
                this.interactionDOMElement.addEventListener('mousedown', this.onPointerDown, true);
                this.interactionDOMElement.addEventListener('mouseout', this.onPointerOut, true);
                this.interactionDOMElement.addEventListener('mouseover', this.onPointerOver, true);
                window.addEventListener('mouseup', this.onPointerUp, true);
            }

            // always look directly for touch events so that we can provide original data
            // In a future version we should change this to being just a fallback and rely solely on
            // PointerEvents whenever available
            if (this.supportsTouchEvents) {
                this.interactionDOMElement.addEventListener('touchstart', this.onPointerDown, true);
                this.interactionDOMElement.addEventListener('touchcancel', this.onPointerCancel, true);
                this.interactionDOMElement.addEventListener('touchend', this.onPointerUp, true);
                this.interactionDOMElement.addEventListener('touchmove', this.onPointerMove, true);
            }

            this.eventsAdded = true;
        }

        /**
         * Removes all the DOM events that were previously registered
         *
         * @private
         */

    }, {
        key: 'removeEvents',
        value: function removeEvents() {
            if (!this.interactionDOMElement) {
                return;
            }

            __WEBPACK_IMPORTED_MODULE_0__core__["r" /* ticker */].shared.remove(this.update, this);

            if (window.navigator.msPointerEnabled) {
                this.interactionDOMElement.style['-ms-content-zooming'] = '';
                this.interactionDOMElement.style['-ms-touch-action'] = '';
            } else if (this.supportsPointerEvents) {
                this.interactionDOMElement.style['touch-action'] = '';
            }

            if (this.supportsPointerEvents) {
                window.document.removeEventListener('pointermove', this.onPointerMove, true);
                this.interactionDOMElement.removeEventListener('pointerdown', this.onPointerDown, true);
                this.interactionDOMElement.removeEventListener('pointerleave', this.onPointerOut, true);
                this.interactionDOMElement.removeEventListener('pointerover', this.onPointerOver, true);
                window.removeEventListener('pointercancel', this.onPointerCancel, true);
                window.removeEventListener('pointerup', this.onPointerUp, true);
            } else {
                window.document.removeEventListener('mousemove', this.onPointerMove, true);
                this.interactionDOMElement.removeEventListener('mousedown', this.onPointerDown, true);
                this.interactionDOMElement.removeEventListener('mouseout', this.onPointerOut, true);
                this.interactionDOMElement.removeEventListener('mouseover', this.onPointerOver, true);
                window.removeEventListener('mouseup', this.onPointerUp, true);
            }

            if (this.supportsTouchEvents) {
                this.interactionDOMElement.removeEventListener('touchstart', this.onPointerDown, true);
                this.interactionDOMElement.removeEventListener('touchcancel', this.onPointerCancel, true);
                this.interactionDOMElement.removeEventListener('touchend', this.onPointerUp, true);
                this.interactionDOMElement.removeEventListener('touchmove', this.onPointerMove, true);
            }

            this.interactionDOMElement = null;

            this.eventsAdded = false;
        }

        /**
         * Updates the state of interactive objects.
         * Invoked by a throttled ticker update from {@link PIXI.ticker.shared}.
         *
         * @param {number} deltaTime - time delta since last tick
         */

    }, {
        key: 'update',
        value: function update(deltaTime) {
            this._deltaTime += deltaTime;

            if (this._deltaTime < this.interactionFrequency) {
                return;
            }

            this._deltaTime = 0;

            if (!this.interactionDOMElement) {
                return;
            }

            // if the user move the mouse this check has already been done using the mouse move!
            if (this.didMove) {
                this.didMove = false;

                return;
            }

            this.cursor = null;

            // Resets the flag as set by a stopPropagation call. This flag is usually reset by a user interaction of any kind,
            // but there was a scenario of a display object moving under a static mouse cursor.
            // In this case, mouseover and mouseevents would not pass the flag test in dispatchEvent function
            for (var k in this.activeInteractionData) {
                // eslint-disable-next-line no-prototype-builtins
                if (this.activeInteractionData.hasOwnProperty(k)) {
                    var interactionData = this.activeInteractionData[k];

                    if (interactionData.originalEvent && interactionData.pointerType !== 'touch') {
                        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, interactionData.originalEvent, interactionData);

                        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, true);
                    }
                }
            }

            this.setCursorMode(this.cursor);

            // TODO
        }

        /**
         * Sets the current cursor mode, handling any callbacks or CSS style changes.
         *
         * @param {string} mode - cursor mode, a key from the cursorStyles dictionary
         */

    }, {
        key: 'setCursorMode',
        value: function setCursorMode(mode) {
            mode = mode || 'default';
            // if the mode didn't actually change, bail early
            if (this.currentCursorMode === mode) {
                return;
            }
            this.currentCursorMode = mode;
            var style = this.cursorStyles[mode];

            // only do things if there is a cursor style for it
            if (style) {
                switch (typeof style === 'undefined' ? 'undefined' : _typeof(style)) {
                    case 'string':
                        // string styles are handled as cursor CSS
                        this.interactionDOMElement.style.cursor = style;
                        break;
                    case 'function':
                        // functions are just called, and passed the cursor mode
                        style(mode);
                        break;
                    case 'object':
                        // if it is an object, assume that it is a dictionary of CSS styles,
                        // apply it to the interactionDOMElement
                        Object.assign(this.interactionDOMElement.style, style);
                        break;
                }
            } else if (typeof mode === 'string' && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode)) {
                // if it mode is a string (not a Symbol) and cursorStyles doesn't have any entry
                // for the mode, then assume that the dev wants it to be CSS for the cursor.
                this.interactionDOMElement.style.cursor = mode;
            }
        }

        /**
         * Dispatches an event on the display object that was interacted with
         *
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - the display object in question
         * @param {string} eventString - the name of the event (e.g, mousedown)
         * @param {object} eventData - the event data object
         * @private
         */

    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(displayObject, eventString, eventData) {
            if (!eventData.stopped) {
                eventData.currentTarget = displayObject;
                eventData.type = eventString;

                displayObject.emit(eventString, eventData);

                if (displayObject[eventString]) {
                    displayObject[eventString](eventData);
                }
            }
        }

        /**
         * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
         * resulting value is stored in the point. This takes into account the fact that the DOM
         * element could be scaled and positioned anywhere on the screen.
         *
         * @param  {PIXI.Point} point - the point that the result will be stored in
         * @param  {number} x - the x coord of the position to map
         * @param  {number} y - the y coord of the position to map
         */

    }, {
        key: 'mapPositionToPoint',
        value: function mapPositionToPoint(point, x, y) {
            var rect = void 0;

            // IE 11 fix
            if (!this.interactionDOMElement.parentElement) {
                rect = { x: 0, y: 0, width: 0, height: 0 };
            } else {
                rect = this.interactionDOMElement.getBoundingClientRect();
            }

            var resolutionMultiplier = navigator.isCocoonJS ? this.resolution : 1.0 / this.resolution;

            point.x = (x - rect.left) * (this.interactionDOMElement.width / rect.width) * resolutionMultiplier;
            point.y = (y - rect.top) * (this.interactionDOMElement.height / rect.height) * resolutionMultiplier;
        }

        /**
         * This function is provides a neat way of crawling through the scene graph and running a
         * specified function on all interactive objects it finds. It will also take care of hit
         * testing the interactive objects and passes the hit across in the function.
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - event containing the point that
         *  is tested for collision
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - the displayObject
         *  that will be hit test (recursively crawls its children)
         * @param {Function} [func] - the function that will be called on each interactive object. The
         *  interactionEvent, displayObject and hit will be passed to the function
         * @param {boolean} [hitTest] - this indicates if the objects inside should be hit test against the point
         * @param {boolean} [interactive] - Whether the displayObject is interactive
         * @return {boolean} returns true if the displayObject hit the point
         */

    }, {
        key: 'processInteractive',
        value: function processInteractive(interactionEvent, displayObject, func, hitTest, interactive) {
            if (!displayObject || !displayObject.visible) {
                return false;
            }

            var point = interactionEvent.data.global;

            // Took a little while to rework this function correctly! But now it is done and nice and optimised. ^_^
            //
            // This function will now loop through all objects and then only hit test the objects it HAS
            // to, not all of them. MUCH faster..
            // An object will be hit test if the following is true:
            //
            // 1: It is interactive.
            // 2: It belongs to a parent that is interactive AND one of the parents children have not already been hit.
            //
            // As another little optimisation once an interactive object has been hit we can carry on
            // through the scenegraph, but we know that there will be no more hits! So we can avoid extra hit tests
            // A final optimisation is that an object is not hit test directly if a child has already been hit.

            interactive = displayObject.interactive || interactive;

            var hit = false;
            var interactiveParent = interactive;

            // if the displayobject has a hitArea, then it does not need to hitTest children.
            if (displayObject.hitArea) {
                interactiveParent = false;
            }
            // it has a mask! Then lets hit test that before continuing
            else if (hitTest && displayObject._mask) {
                    if (!displayObject._mask.containsPoint(point)) {
                        hitTest = false;
                    }
                }

            // ** FREE TIP **! If an object is not interactive or has no buttons in it
            // (such as a game scene!) set interactiveChildren to false for that displayObject.
            // This will allow PixiJS to completely ignore and bypass checking the displayObjects children.
            if (displayObject.interactiveChildren && displayObject.children) {
                var children = displayObject.children;

                for (var i = children.length - 1; i >= 0; i--) {
                    var child = children[i];

                    // time to get recursive.. if this function will return if something is hit..
                    var childHit = this.processInteractive(interactionEvent, child, func, hitTest, interactiveParent);

                    if (childHit) {
                        // its a good idea to check if a child has lost its parent.
                        // this means it has been removed whilst looping so its best
                        if (!child.parent) {
                            continue;
                        }

                        // we no longer need to hit test any more objects in this container as we we
                        // now know the parent has been hit
                        interactiveParent = false;

                        // If the child is interactive , that means that the object hit was actually
                        // interactive and not just the child of an interactive object.
                        // This means we no longer need to hit test anything else. We still need to run
                        // through all objects, but we don't need to perform any hit tests.

                        if (childHit) {
                            if (interactionEvent.target) {
                                hitTest = false;
                            }
                            hit = true;
                        }
                    }
                }
            }

            // no point running this if the item is not interactive or does not have an interactive parent.
            if (interactive) {
                // if we are hit testing (as in we have no hit any objects yet)
                // We also don't need to worry about hit testing if once of the displayObjects children
                // has already been hit - but only if it was interactive, otherwise we need to keep
                // looking for an interactive child, just in case we hit one
                if (hitTest && !interactionEvent.target) {
                    if (displayObject.hitArea) {
                        displayObject.worldTransform.applyInverse(point, this._tempPoint);
                        if (displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
                            hit = true;
                        }
                    } else if (displayObject.containsPoint) {
                        if (displayObject.containsPoint(point)) {
                            hit = true;
                        }
                    }
                }

                if (displayObject.interactive) {
                    if (hit && !interactionEvent.target) {
                        interactionEvent.target = displayObject;
                    }

                    if (func) {
                        func(interactionEvent, displayObject, !!hit);
                    }
                }
            }

            return hit;
        }

        /**
         * Is called when the pointer button is pressed down on the renderer element
         *
         * @private
         * @param {PointerEvent} originalEvent - The DOM event of a pointer button being pressed down
         */

    }, {
        key: 'onPointerDown',
        value: function onPointerDown(originalEvent) {
            // if we support touch events, then only use those for touch events, not pointer events
            if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') return;

            var events = this.normalizeToPointerData(originalEvent);

            /**
             * No need to prevent default on natural pointer events, as there are no side effects
             * Normalized events, however, may have the double mousedown/touchstart issue on the native android browser,
             * so still need to be prevented.
             */

            // Guaranteed that there will be at least one event in events, and all events must have the same pointer type

            if (this.autoPreventDefault && events[0].isNormalized) {
                originalEvent.preventDefault();
            }

            var eventLen = events.length;

            for (var i = 0; i < eventLen; i++) {
                var event = events[i];

                var interactionData = this.getInteractionDataForPointerId(event);

                var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

                interactionEvent.data.originalEvent = originalEvent;

                this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerDown, true);

                this.emit('pointerdown', interactionEvent);
                if (event.pointerType === 'touch') {
                    this.emit('touchstart', interactionEvent);
                }
                // emit a mouse event for "pen" pointers, the way a browser would emit a fallback event
                else if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                        var isRightButton = event.button === 2;

                        this.emit(isRightButton ? 'rightdown' : 'mousedown', this.eventData);
                    }
            }
        }

        /**
         * Processes the result of the pointer down check and dispatches the event if need be
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - The display object that was tested
         * @param {boolean} hit - the result of the hit test on the display object
         */

    }, {
        key: 'processPointerDown',
        value: function processPointerDown(interactionEvent, displayObject, hit) {
            var data = interactionEvent.data;
            var id = interactionEvent.data.identifier;

            if (hit) {
                if (!displayObject.trackedPointers[id]) {
                    displayObject.trackedPointers[id] = new __WEBPACK_IMPORTED_MODULE_3__InteractionTrackingData__["a" /* default */](id);
                }
                this.dispatchEvent(displayObject, 'pointerdown', interactionEvent);

                if (data.pointerType === 'touch') {
                    this.dispatchEvent(displayObject, 'touchstart', interactionEvent);
                } else if (data.pointerType === 'mouse' || data.pointerType === 'pen') {
                    var isRightButton = data.button === 2;

                    if (isRightButton) {
                        displayObject.trackedPointers[id].rightDown = true;
                    } else {
                        displayObject.trackedPointers[id].leftDown = true;
                    }

                    this.dispatchEvent(displayObject, isRightButton ? 'rightdown' : 'mousedown', interactionEvent);
                }
            }
        }

        /**
         * Is called when the pointer button is released on the renderer element
         *
         * @private
         * @param {PointerEvent} originalEvent - The DOM event of a pointer button being released
         * @param {boolean} cancelled - true if the pointer is cancelled
         * @param {Function} func - Function passed to {@link processInteractive}
         */

    }, {
        key: 'onPointerComplete',
        value: function onPointerComplete(originalEvent, cancelled, func) {
            var events = this.normalizeToPointerData(originalEvent);

            var eventLen = events.length;

            // if the event wasn't targeting our canvas, then consider it to be pointerupoutside
            // in all cases (unless it was a pointercancel)
            var eventAppend = originalEvent.target !== this.interactionDOMElement ? 'outside' : '';

            for (var i = 0; i < eventLen; i++) {
                var event = events[i];

                var interactionData = this.getInteractionDataForPointerId(event);

                var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

                interactionEvent.data.originalEvent = originalEvent;

                // perform hit testing for events targeting our canvas or cancel events
                this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, func, cancelled || !eventAppend);

                this.emit(cancelled ? 'pointercancel' : 'pointerup' + eventAppend, interactionEvent);

                if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                    var isRightButton = event.button === 2;

                    this.emit(isRightButton ? 'rightup' + eventAppend : 'mouseup' + eventAppend, interactionEvent);
                } else if (event.pointerType === 'touch') {
                    this.emit(cancelled ? 'touchcancel' : 'touchend' + eventAppend, interactionEvent);
                    this.releaseInteractionDataForPointerId(event.pointerId, interactionData);
                }
            }
        }

        /**
         * Is called when the pointer button is cancelled
         *
         * @private
         * @param {PointerEvent} event - The DOM event of a pointer button being released
         */

    }, {
        key: 'onPointerCancel',
        value: function onPointerCancel(event) {
            // if we support touch events, then only use those for touch events, not pointer events
            if (this.supportsTouchEvents && event.pointerType === 'touch') return;

            this.onPointerComplete(event, true, this.processPointerCancel);
        }

        /**
         * Processes the result of the pointer cancel check and dispatches the event if need be
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - The display object that was tested
         */

    }, {
        key: 'processPointerCancel',
        value: function processPointerCancel(interactionEvent, displayObject) {
            var data = interactionEvent.data;

            var id = interactionEvent.data.identifier;

            if (displayObject.trackedPointers[id] !== undefined) {
                delete displayObject.trackedPointers[id];
                this.dispatchEvent(displayObject, 'pointercancel', interactionEvent);

                if (data.pointerType === 'touch') {
                    this.dispatchEvent(displayObject, 'touchcancel', interactionEvent);
                }
            }
        }

        /**
         * Is called when the pointer button is released on the renderer element
         *
         * @private
         * @param {PointerEvent} event - The DOM event of a pointer button being released
         */

    }, {
        key: 'onPointerUp',
        value: function onPointerUp(event) {
            // if we support touch events, then only use those for touch events, not pointer events
            if (this.supportsTouchEvents && event.pointerType === 'touch') return;

            this.onPointerComplete(event, false, this.processPointerUp);
        }

        /**
         * Processes the result of the pointer up check and dispatches the event if need be
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - The display object that was tested
         * @param {boolean} hit - the result of the hit test on the display object
         */

    }, {
        key: 'processPointerUp',
        value: function processPointerUp(interactionEvent, displayObject, hit) {
            var data = interactionEvent.data;

            var id = interactionEvent.data.identifier;

            var trackingData = displayObject.trackedPointers[id];

            var isTouch = data.pointerType === 'touch';

            var isMouse = data.pointerType === 'mouse' || data.pointerType === 'pen';

            // Mouse only
            if (isMouse) {
                var isRightButton = data.button === 2;

                var flags = __WEBPACK_IMPORTED_MODULE_3__InteractionTrackingData__["a" /* default */].FLAGS;

                var test = isRightButton ? flags.RIGHT_DOWN : flags.LEFT_DOWN;

                var isDown = trackingData !== undefined && trackingData.flags & test;

                if (hit) {
                    this.dispatchEvent(displayObject, isRightButton ? 'rightup' : 'mouseup', interactionEvent);

                    if (isDown) {
                        this.dispatchEvent(displayObject, isRightButton ? 'rightclick' : 'click', interactionEvent);
                    }
                } else if (isDown) {
                    this.dispatchEvent(displayObject, isRightButton ? 'rightupoutside' : 'mouseupoutside', interactionEvent);
                }
                // update the down state of the tracking data
                if (trackingData) {
                    if (isRightButton) {
                        trackingData.rightDown = false;
                    } else {
                        trackingData.leftDown = false;
                    }
                }
            }

            // Pointers and Touches, and Mouse
            if (hit) {
                this.dispatchEvent(displayObject, 'pointerup', interactionEvent);
                if (isTouch) this.dispatchEvent(displayObject, 'touchend', interactionEvent);

                if (trackingData) {
                    this.dispatchEvent(displayObject, 'pointertap', interactionEvent);
                    if (isTouch) {
                        this.dispatchEvent(displayObject, 'tap', interactionEvent);
                        // touches are no longer over (if they ever were) when we get the touchend
                        // so we should ensure that we don't keep pretending that they are
                        trackingData.over = false;
                    }
                }
            } else if (trackingData) {
                this.dispatchEvent(displayObject, 'pointerupoutside', interactionEvent);
                if (isTouch) this.dispatchEvent(displayObject, 'touchendoutside', interactionEvent);
            }
            // Only remove the tracking data if there is no over/down state still associated with it
            if (trackingData && trackingData.none) {
                delete displayObject.trackedPointers[id];
            }
        }

        /**
         * Is called when the pointer moves across the renderer element
         *
         * @private
         * @param {PointerEvent} originalEvent - The DOM event of a pointer moving
         */

    }, {
        key: 'onPointerMove',
        value: function onPointerMove(originalEvent) {
            // if we support touch events, then only use those for touch events, not pointer events
            if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') return;

            var events = this.normalizeToPointerData(originalEvent);

            if (events[0].pointerType === 'mouse') {
                this.didMove = true;

                this.cursor = null;
            }

            var eventLen = events.length;

            for (var i = 0; i < eventLen; i++) {
                var event = events[i];

                var interactionData = this.getInteractionDataForPointerId(event);

                var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

                interactionEvent.data.originalEvent = originalEvent;

                var interactive = event.pointerType === 'touch' ? this.moveWhenInside : true;

                this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerMove, interactive);
                this.emit('pointermove', interactionEvent);
                if (event.pointerType === 'touch') this.emit('touchmove', interactionEvent);
                if (event.pointerType === 'mouse' || event.pointerType === 'pen') this.emit('mousemove', interactionEvent);
            }

            if (events[0].pointerType === 'mouse') {
                this.setCursorMode(this.cursor);

                // TODO BUG for parents interactive object (border order issue)
            }
        }

        /**
         * Processes the result of the pointer move check and dispatches the event if need be
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - The display object that was tested
         * @param {boolean} hit - the result of the hit test on the display object
         */

    }, {
        key: 'processPointerMove',
        value: function processPointerMove(interactionEvent, displayObject, hit) {
            var data = interactionEvent.data;

            var isTouch = data.pointerType === 'touch';

            var isMouse = data.pointerType === 'mouse' || data.pointerType === 'pen';

            if (isMouse) {
                this.processPointerOverOut(interactionEvent, displayObject, hit);
            }

            if (!this.moveWhenInside || hit) {
                this.dispatchEvent(displayObject, 'pointermove', interactionEvent);
                if (isTouch) this.dispatchEvent(displayObject, 'touchmove', interactionEvent);
                if (isMouse) this.dispatchEvent(displayObject, 'mousemove', interactionEvent);
            }
        }

        /**
         * Is called when the pointer is moved out of the renderer element
         *
         * @private
         * @param {PointerEvent} originalEvent - The DOM event of a pointer being moved out
         */

    }, {
        key: 'onPointerOut',
        value: function onPointerOut(originalEvent) {
            // if we support touch events, then only use those for touch events, not pointer events
            if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') return;

            var events = this.normalizeToPointerData(originalEvent);

            // Only mouse and pointer can call onPointerOut, so events will always be length 1
            var event = events[0];

            if (event.pointerType === 'mouse') {
                this.mouseOverRenderer = false;
                this.setCursorMode(null);
            }

            var interactionData = this.getInteractionDataForPointerId(event);

            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

            interactionEvent.data.originalEvent = event;

            this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, false);

            this.emit('pointerout', interactionEvent);
            if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                this.emit('mouseout', interactionEvent);
            } else {
                // we can get touchleave events after touchend, so we want to make sure we don't
                // introduce memory leaks
                this.releaseInteractionDataForPointerId(interactionData.identifier);
            }
        }

        /**
         * Processes the result of the pointer over/out check and dispatches the event if need be
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
         * @param {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject - The display object that was tested
         * @param {boolean} hit - the result of the hit test on the display object
         */

    }, {
        key: 'processPointerOverOut',
        value: function processPointerOverOut(interactionEvent, displayObject, hit) {
            var data = interactionEvent.data;

            var id = interactionEvent.data.identifier;

            var isMouse = data.pointerType === 'mouse' || data.pointerType === 'pen';

            var trackingData = displayObject.trackedPointers[id];

            // if we just moused over the display object, then we need to track that state
            if (hit && !trackingData) {
                trackingData = displayObject.trackedPointers[id] = new __WEBPACK_IMPORTED_MODULE_3__InteractionTrackingData__["a" /* default */](id);
            }

            if (trackingData === undefined) return;

            if (hit && this.mouseOverRenderer) {
                if (!trackingData.over) {
                    trackingData.over = true;
                    this.dispatchEvent(displayObject, 'pointerover', interactionEvent);
                    if (isMouse) {
                        this.dispatchEvent(displayObject, 'mouseover', interactionEvent);
                    }
                }

                // only change the cursor if it has not already been changed (by something deeper in the
                // display tree)
                if (isMouse && this.cursor === null) {
                    this.cursor = displayObject.cursor;
                }
            } else if (trackingData.over) {
                trackingData.over = false;
                this.dispatchEvent(displayObject, 'pointerout', this.eventData);
                if (isMouse) {
                    this.dispatchEvent(displayObject, 'mouseout', interactionEvent);
                }
                // if there is no mouse down information for the pointer, then it is safe to delete
                if (trackingData.none) {
                    delete displayObject.trackedPointers[id];
                }
            }
        }

        /**
         * Is called when the pointer is moved into the renderer element
         *
         * @private
         * @param {PointerEvent} originalEvent - The DOM event of a pointer button being moved into the renderer view
         */

    }, {
        key: 'onPointerOver',
        value: function onPointerOver(originalEvent) {
            var events = this.normalizeToPointerData(originalEvent);

            // Only mouse and pointer can call onPointerOver, so events will always be length 1
            var event = events[0];

            var interactionData = this.getInteractionDataForPointerId(event);

            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

            interactionEvent.data.originalEvent = event;

            if (event.pointerType === 'mouse') {
                this.mouseOverRenderer = true;
            }

            this.emit('pointerover', interactionEvent);
            if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                this.emit('mouseover', interactionEvent);
            }
        }

        /**
         * Get InteractionData for a given pointerId. Store that data as well
         *
         * @private
         * @param {PointerEvent} event - Normalized pointer event, output from normalizeToPointerData
         * @return {PIXI.interaction.InteractionData} - Interaction data for the given pointer identifier
         */

    }, {
        key: 'getInteractionDataForPointerId',
        value: function getInteractionDataForPointerId(event) {
            var pointerId = event.pointerId;

            var interactionData = void 0;

            if (pointerId === MOUSE_POINTER_ID || event.pointerType === 'mouse') {
                interactionData = this.mouse;
            } else if (this.activeInteractionData[pointerId]) {
                interactionData = this.activeInteractionData[pointerId];
            } else {
                interactionData = this.interactionDataPool.pop() || new __WEBPACK_IMPORTED_MODULE_1__InteractionData__["a" /* default */]();
                interactionData.identifier = pointerId;
                this.activeInteractionData[pointerId] = interactionData;
            }
            // copy properties from the event, so that we can make sure that touch/pointer specific
            // data is available
            interactionData._copyEvent(event);

            return interactionData;
        }

        /**
         * Return unused InteractionData to the pool, for a given pointerId
         *
         * @private
         * @param {number} pointerId - Identifier from a pointer event
         */

    }, {
        key: 'releaseInteractionDataForPointerId',
        value: function releaseInteractionDataForPointerId(pointerId) {
            var interactionData = this.activeInteractionData[pointerId];

            if (interactionData) {
                delete this.activeInteractionData[pointerId];
                interactionData._reset();
                this.interactionDataPool.push(interactionData);
            }
        }

        /**
         * Configure an InteractionEvent to wrap a DOM PointerEvent and InteractionData
         *
         * @private
         * @param {PIXI.interaction.InteractionEvent} interactionEvent - The event to be configured
         * @param {PointerEvent} pointerEvent - The DOM event that will be paired with the InteractionEvent
         * @param {PIXI.interaction.InteractionData} interactionData - The InteractionData that will be paired
         *        with the InteractionEvent
         * @return {PIXI.interaction.InteractionEvent} the interaction event that was passed in
         */

    }, {
        key: 'configureInteractionEventForDOMEvent',
        value: function configureInteractionEventForDOMEvent(interactionEvent, pointerEvent, interactionData) {
            interactionEvent.data = interactionData;

            this.mapPositionToPoint(interactionData.global, pointerEvent.clientX, pointerEvent.clientY);

            // This is the way InteractionManager processed touch events before the refactoring, so I've kept
            // it here. But it doesn't make that much sense to me, since mapPositionToPoint already factors
            // in this.resolution, so this just divides by this.resolution twice for touch events...
            if (navigator.isCocoonJS && pointerEvent.pointerType === 'touch') {
                interactionData.global.x = interactionData.global.x / this.resolution;
                interactionData.global.y = interactionData.global.y / this.resolution;
            }

            // Not really sure why this is happening, but it's how a previous version handled things
            if (pointerEvent.pointerType === 'touch') {
                pointerEvent.globalX = interactionData.global.x;
                pointerEvent.globalY = interactionData.global.y;
            }

            interactionData.originalEvent = pointerEvent;
            interactionEvent._reset();

            return interactionEvent;
        }

        /**
         * Ensures that the original event object contains all data that a regular pointer event would have
         *
         * @private
         * @param {TouchEvent|MouseEvent|PointerEvent} event - The original event data from a touch or mouse event
         * @return {PointerEvent[]} An array containing a single normalized pointer event, in the case of a pointer
         *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
         */

    }, {
        key: 'normalizeToPointerData',
        value: function normalizeToPointerData(event) {
            var normalizedEvents = [];

            if (this.supportsTouchEvents && event instanceof TouchEvent) {
                for (var i = 0, li = event.changedTouches.length; i < li; i++) {
                    var touch = event.changedTouches[i];

                    if (typeof touch.button === 'undefined') touch.button = event.touches.length ? 1 : 0;
                    if (typeof touch.buttons === 'undefined') touch.buttons = event.touches.length ? 1 : 0;
                    if (typeof touch.isPrimary === 'undefined') {
                        touch.isPrimary = event.touches.length === 1 && event.type === 'touchstart';
                    }
                    if (typeof touch.width === 'undefined') touch.width = touch.radiusX || 1;
                    if (typeof touch.height === 'undefined') touch.height = touch.radiusY || 1;
                    if (typeof touch.tiltX === 'undefined') touch.tiltX = 0;
                    if (typeof touch.tiltY === 'undefined') touch.tiltY = 0;
                    if (typeof touch.pointerType === 'undefined') touch.pointerType = 'touch';
                    if (typeof touch.pointerId === 'undefined') touch.pointerId = touch.identifier || 0;
                    if (typeof touch.pressure === 'undefined') touch.pressure = touch.force || 0.5;
                    touch.twist = 0;
                    touch.tangentialPressure = 0;
                    // TODO: Remove these, as layerX/Y is not a standard, is deprecated, has uneven
                    // support, and the fill ins are not quite the same
                    // offsetX/Y might be okay, but is not the same as clientX/Y when the canvas's top
                    // left is not 0,0 on the page
                    if (typeof touch.layerX === 'undefined') touch.layerX = touch.offsetX = touch.clientX;
                    if (typeof touch.layerY === 'undefined') touch.layerY = touch.offsetY = touch.clientY;

                    // mark the touch as normalized, just so that we know we did it
                    touch.isNormalized = true;

                    normalizedEvents.push(touch);
                }
            }
            // apparently PointerEvent subclasses MouseEvent, so yay
            else if (event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof window.PointerEvent))) {
                    if (typeof event.isPrimary === 'undefined') event.isPrimary = true;
                    if (typeof event.width === 'undefined') event.width = 1;
                    if (typeof event.height === 'undefined') event.height = 1;
                    if (typeof event.tiltX === 'undefined') event.tiltX = 0;
                    if (typeof event.tiltY === 'undefined') event.tiltY = 0;
                    if (typeof event.pointerType === 'undefined') event.pointerType = 'mouse';
                    if (typeof event.pointerId === 'undefined') event.pointerId = MOUSE_POINTER_ID;
                    if (typeof event.pressure === 'undefined') event.pressure = 0.5;
                    event.twist = 0;
                    event.tangentialPressure = 0;

                    // mark the mouse event as normalized, just so that we know we did it
                    event.isNormalized = true;

                    normalizedEvents.push(event);
                } else {
                    normalizedEvents.push(event);
                }

            return normalizedEvents;
        }

        /**
         * Destroys the interaction manager
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.removeEvents();

            this.removeAllListeners();

            this.renderer = null;

            this.mouse = null;

            this.eventData = null;

            this.interactionDOMElement = null;

            this.onPointerDown = null;
            this.processPointerDown = null;

            this.onPointerUp = null;
            this.processPointerUp = null;

            this.onPointerCancel = null;
            this.processPointerCancel = null;

            this.onPointerMove = null;
            this.processPointerMove = null;

            this.onPointerOut = null;
            this.processPointerOverOut = null;

            this.onPointerOver = null;

            this._tempPoint = null;
        }
    }]);

    return InteractionManager;
}(__WEBPACK_IMPORTED_MODULE_4_eventemitter3___default.a);

// core.WebGLRenderer.registerPlugin('interaction', InteractionManager);


/* unused harmony default export */ var _unused_webpack_default_export = (InteractionManager);
__WEBPACK_IMPORTED_MODULE_0__core__["c" /* CanvasRenderer */].registerPlugin('interaction', InteractionManager);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Application__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader__ = __webpack_require__(119);
/* unused harmony reexport Loader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bitmapFontParser__ = __webpack_require__(63);
/* unused harmony reexport bitmapFontParser */
/* unused harmony reexport parseBitmapFontData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spritesheetParser__ = __webpack_require__(62);
/* unused harmony reexport spritesheetParser */
/* unused harmony reexport getResourcePath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textureParser__ = __webpack_require__(61);
/* unused harmony reexport textureParser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_resource_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_resource_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_resource_loader__);
/* unused harmony reexport Resource */



/**
 * This namespace contains APIs which extends the {@link https://github.com/englercj/resource-loader resource-loader} module
 * for loading assets, data, and other resources dynamically.
 * @example
 * const loader = new PIXI.loaders.Loader();
 * loader.add('bunny', 'data/bunny.png')
 *       .add('spaceship', 'assets/spritesheet.json');
 * loader.load((loader, resources) => {
 *    // resources.bunny
 *    // resources.spaceship
 * });
 * @namespace PIXI.loaders
 */





/**
 * Reference to **resource-loader**'s Resource class.
 * See https://github.com/englercj/resource-loader
 * @class Resource
 * @memberof PIXI.loaders
 */


/**
 * A premade instance of the loader that can be used to load resources.
 * @name shared
 * @memberof PIXI.loaders
 * @type {PIXI.loaders.Loader}
 */
var shared = new __WEBPACK_IMPORTED_MODULE_1__loader__["a" /* default */]();

shared.destroy = function () {
    // protect destroying shared loader
};



// Mixin the loader construction
var AppPrototype = __WEBPACK_IMPORTED_MODULE_0__core_Application__["a" /* default */].prototype;

AppPrototype._loader = null;

/**
 * Loader instance to help with asset loading.
 * @name PIXI.Application#loader
 * @type {PIXI.loaders.Loader}
 */
Object.defineProperty(AppPrototype, 'loader', {
    get: function get() {
        if (!this._loader) {
            var sharedLoader = this._options.sharedLoader;

            this._loader = sharedLoader ? shared : new __WEBPACK_IMPORTED_MODULE_1__loader__["a" /* default */]();
        }

        return this._loader;
    }
});

// Override the destroy function
// making sure to destroy the current Loader
AppPrototype._parentDestroy = AppPrototype.destroy;
AppPrototype.destroy = function destroy(removeView) {
    if (this._loader) {
        this._loader.destroy();
        this._loader = null;
    }
    this._parentDestroy(removeView);
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resource_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resource_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_resource_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_resource_loader_lib_middlewares_parsing_blob__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_resource_loader_lib_middlewares_parsing_blob___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_resource_loader_lib_middlewares_parsing_blob__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textureParser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spritesheetParser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bitmapFontParser__ = __webpack_require__(63);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 *
 * The new loader, extends Resource Loader by Chad Engler: https://github.com/englercj/resource-loader
 *
 * ```js
 * const loader = PIXI.loader; // PixiJS exposes a premade instance for you to use.
 * //or
 * const loader = new PIXI.loaders.Loader(); // you can also create your own if you want
 *
 * const sprites = {};
 *
 * // Chainable `add` to enqueue a resource
 * loader.add('bunny', 'data/bunny.png')
 *       .add('spaceship', 'assets/spritesheet.json');
 * loader.add('scoreFont', 'assets/score.fnt');
 *
 * // Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
 * // This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
 * loader.pre(cachingMiddleware);
 *
 * // Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
 * // This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
 * loader.use(parsingMiddleware);
 *
 * // The `load` method loads the queue of resources, and calls the passed in callback called once all
 * // resources have loaded.
 * loader.load((loader, resources) => {
 *     // resources is an object where the key is the name of the resource loaded and the value is the resource object.
 *     // They have a couple default properties:
 *     // - `url`: The URL that the resource was loaded from
 *     // - `error`: The error that happened when trying to load (if any)
 *     // - `data`: The raw data that was loaded
 *     // also may contain other properties based on the middleware that runs.
 *     sprites.bunny = new PIXI.TilingSprite(resources.bunny.texture);
 *     sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
 *     sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
 * });
 *
 * // throughout the process multiple signals can be dispatched.
 * loader.onProgress.add(() => {}); // called once per loaded/errored file
 * loader.onError.add(() => {}); // called once per errored file
 * loader.onLoad.add(() => {}); // called once per loaded file
 * loader.onComplete.add(() => {}); // called once when the queued resources all load.
 * ```
 *
 * @see https://github.com/englercj/resource-loader
 *
 * @class
 * @extends module:resource-loader.ResourceLoader
 * @memberof PIXI.loaders
 */

var Loader = function (_ResourceLoader) {
    _inherits(Loader, _ResourceLoader);

    /**
     * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
     * @param {number} [concurrency=10] - The number of resources to load concurrently.
     */
    function Loader(baseUrl, concurrency) {
        _classCallCheck(this, Loader);

        var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, baseUrl, concurrency));

        __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default.a.call(_this);

        for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
            _this.use(Loader._pixiMiddleware[i]());
        }

        // Compat layer, translate the new v2 signals into old v1 events.
        _this.onStart.add(function (l) {
            return _this.emit('start', l);
        });
        _this.onProgress.add(function (l, r) {
            return _this.emit('progress', l, r);
        });
        _this.onError.add(function (e, l, r) {
            return _this.emit('error', e, l, r);
        });
        _this.onLoad.add(function (l, r) {
            return _this.emit('load', l, r);
        });
        _this.onComplete.add(function (l, r) {
            return _this.emit('complete', l, r);
        });
        return _this;
    }

    /**
     * Adds a default middleware to the PixiJS loader.
     *
     * @static
     * @param {Function} fn - The middleware to add.
     */


    _createClass(Loader, [{
        key: 'destroy',


        /**
         * Destroy the loader, removes references.
         */
        value: function destroy() {
            this.removeAllListeners();
            this.reset();
        }
    }], [{
        key: 'addPixiMiddleware',
        value: function addPixiMiddleware(fn) {
            Loader._pixiMiddleware.push(fn);
        }
    }]);

    return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_resource_loader___default.a);

// Copy EE3 prototype (mixin)


/* harmony default export */ __webpack_exports__["a"] = (Loader);
for (var k in __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default.a.prototype) {
    Loader.prototype[k] = __WEBPACK_IMPORTED_MODULE_2_eventemitter3___default.a.prototype[k];
}

Loader._pixiMiddleware = [
// parse any blob into more usable objects (e.g. Image)
__WEBPACK_IMPORTED_MODULE_1_resource_loader_lib_middlewares_parsing_blob__["blobMiddlewareFactory"],
// parse any Image objects into textures
__WEBPACK_IMPORTED_MODULE_3__textureParser__["a" /* default */],
// parse any spritesheet data into multiple textures
__WEBPACK_IMPORTED_MODULE_4__spritesheetParser__["a" /* default */],
// parse bitmap font data into multiple textures
__WEBPACK_IMPORTED_MODULE_5__bitmapFontParser__["a" /* default */]];

// Add custom extentions
var Resource = __WEBPACK_IMPORTED_MODULE_0_resource_loader___default.a.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _miniSignals = __webpack_require__(57);

var _miniSignals2 = _interopRequireDefault(_miniSignals);

var _parseUri = __webpack_require__(58);

var _parseUri2 = _interopRequireDefault(_parseUri);

var _async = __webpack_require__(59);

var async = _interopRequireWildcard(_async);

var _Resource = __webpack_require__(21);

var _Resource2 = _interopRequireDefault(_Resource);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// some constants
var MAX_PROGRESS = 100;
var rgxExtractUrlHash = /(#[\w-]+)?$/;

/**
 * Manages the state and loading of multiple resources to load.
 *
 * @class
 */

var Loader = function () {
    /**
     * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
     * @param {number} [concurrency=10] - The number of resources to load concurrently.
     */
    function Loader() {
        var _this = this;

        var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var concurrency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

        _classCallCheck(this, Loader);

        /**
         * The base url for all resources loaded by this loader.
         *
         * @member {string}
         */
        this.baseUrl = baseUrl;

        /**
         * The progress percent of the loader going through the queue.
         *
         * @member {number}
         */
        this.progress = 0;

        /**
         * Loading state of the loader, true if it is currently loading resources.
         *
         * @member {boolean}
         */
        this.loading = false;

        /**
         * A querystring to append to every URL added to the loader.
         *
         * This should be a valid query string *without* the question-mark (`?`). The loader will
         * also *not* escape values for you. Make sure to escape your parameters with
         * [`encodeURIComponent`](https://mdn.io/encodeURIComponent) before assigning this property.
         *
         * @example
         * const loader = new Loader();
         *
         * loader.defaultQueryString = 'user=me&password=secret';
         *
         * // This will request 'image.png?user=me&password=secret'
         * loader.add('image.png').load();
         *
         * loader.reset();
         *
         * // This will request 'image.png?v=1&user=me&password=secret'
         * loader.add('iamge.png?v=1').load();
         */
        this.defaultQueryString = '';

        /**
         * The middleware to run before loading each resource.
         *
         * @member {function[]}
         */
        this._beforeMiddleware = [];

        /**
         * The middleware to run after loading each resource.
         *
         * @member {function[]}
         */
        this._afterMiddleware = [];

        /**
         * The tracks the resources we are currently completing parsing for.
         *
         * @member {Resource[]}
         */
        this._resourcesParsing = [];

        /**
         * The `_loadResource` function bound with this object context.
         *
         * @private
         * @member {function}
         * @param {Resource} r - The resource to load
         * @param {Function} d - The dequeue function
         * @return {undefined}
         */
        this._boundLoadResource = function (r, d) {
            return _this._loadResource(r, d);
        };

        /**
         * The resources waiting to be loaded.
         *
         * @private
         * @member {Resource[]}
         */
        this._queue = async.queue(this._boundLoadResource, concurrency);

        this._queue.pause();

        /**
         * All the resources for this loader keyed by name.
         *
         * @member {object<string, Resource>}
         */
        this.resources = {};

        /**
         * Dispatched once per loaded or errored resource.
         *
         * The callback looks like {@link Loader.OnProgressSignal}.
         *
         * @member {Signal}
         */
        this.onProgress = new _miniSignals2.default();

        /**
         * Dispatched once per errored resource.
         *
         * The callback looks like {@link Loader.OnErrorSignal}.
         *
         * @member {Signal}
         */
        this.onError = new _miniSignals2.default();

        /**
         * Dispatched once per loaded resource.
         *
         * The callback looks like {@link Loader.OnLoadSignal}.
         *
         * @member {Signal}
         */
        this.onLoad = new _miniSignals2.default();

        /**
         * Dispatched when the loader begins to process the queue.
         *
         * The callback looks like {@link Loader.OnStartSignal}.
         *
         * @member {Signal}
         */
        this.onStart = new _miniSignals2.default();

        /**
         * Dispatched when the queued resources all load.
         *
         * The callback looks like {@link Loader.OnCompleteSignal}.
         *
         * @member {Signal}
         */
        this.onComplete = new _miniSignals2.default();

        /**
         * When the progress changes the loader and resource are disaptched.
         *
         * @memberof Loader
         * @callback OnProgressSignal
         * @param {Loader} loader - The loader the progress is advancing on.
         * @param {Resource} resource - The resource that has completed or failed to cause the progress to advance.
         */

        /**
         * When an error occurrs the loader and resource are disaptched.
         *
         * @memberof Loader
         * @callback OnErrorSignal
         * @param {Loader} loader - The loader the error happened in.
         * @param {Resource} resource - The resource that caused the error.
         */

        /**
         * When a load completes the loader and resource are disaptched.
         *
         * @memberof Loader
         * @callback OnLoadSignal
         * @param {Loader} loader - The loader that laoded the resource.
         * @param {Resource} resource - The resource that has completed loading.
         */

        /**
         * When the loader starts loading resources it dispatches this callback.
         *
         * @memberof Loader
         * @callback OnStartSignal
         * @param {Loader} loader - The loader that has started loading resources.
         */

        /**
         * When the loader completes loading resources it dispatches this callback.
         *
         * @memberof Loader
         * @callback OnCompleteSignal
         * @param {Loader} loader - The loader that has finished loading resources.
         */
    }

    /**
     * Adds a resource (or multiple resources) to the loader queue.
     *
     * This function can take a wide variety of different parameters. The only thing that is always
     * required the url to load. All the following will work:
     *
     * ```js
     * loader
     *     // normal param syntax
     *     .add('key', 'http://...', function () {})
     *     .add('http://...', function () {})
     *     .add('http://...')
     *
     *     // object syntax
     *     .add({
     *         name: 'key2',
     *         url: 'http://...'
     *     }, function () {})
     *     .add({
     *         url: 'http://...'
     *     }, function () {})
     *     .add({
     *         name: 'key3',
     *         url: 'http://...'
     *         onComplete: function () {}
     *     })
     *     .add({
     *         url: 'https://...',
     *         onComplete: function () {},
     *         crossOrigin: true
     *     })
     *
     *     // you can also pass an array of objects or urls or both
     *     .add([
     *         { name: 'key4', url: 'http://...', onComplete: function () {} },
     *         { url: 'http://...', onComplete: function () {} },
     *         'http://...'
     *     ])
     *
     *     // and you can use both params and options
     *     .add('key', 'http://...', { crossOrigin: true }, function () {})
     *     .add('http://...', { crossOrigin: true }, function () {});
     * ```
     *
     * @param {string} [name] - The name of the resource to load, if not passed the url is used.
     * @param {string} [url] - The url for this resource, relative to the baseUrl of this loader.
     * @param {object} [options] - The options for the load.
     * @param {boolean} [options.crossOrigin] - Is this request cross-origin? Default is to determine automatically.
     * @param {Resource.LOAD_TYPE} [options.loadType=Resource.LOAD_TYPE.XHR] - How should this resource be loaded?
     * @param {Resource.XHR_RESPONSE_TYPE} [options.xhrType=Resource.XHR_RESPONSE_TYPE.DEFAULT] - How should
     *      the data being loaded be interpreted when using XHR?
     * @param {object} [options.metadata] - Extra configuration for middleware and the Resource object.
     * @param {HTMLImageElement|HTMLAudioElement|HTMLVideoElement} [options.metadata.loadElement=null] - The
     *      element to use for loading, instead of creating one.
     * @param {boolean} [options.metadata.skipSource=false] - Skips adding source(s) to the load element. This
     *      is useful if you want to pass in a `loadElement` that you already added load sources to.
     * @param {function} [cb] - Function to call when this specific resource completes loading.
     * @return {Loader} Returns itself.
     */

    Loader.prototype.add = function add(name, url, options, cb) {
        // special case of an array of objects or urls
        if (Array.isArray(name)) {
            for (var i = 0; i < name.length; ++i) {
                this.add(name[i]);
            }

            return this;
        }

        // if an object is passed instead of params
        if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
            cb = url || name.callback || name.onComplete;
            options = name;
            url = name.url;
            name = name.name || name.key || name.url;
        }

        // case where no name is passed shift all args over by one.
        if (typeof url !== 'string') {
            cb = options;
            options = url;
            url = name;
        }

        // now that we shifted make sure we have a proper url.
        if (typeof url !== 'string') {
            throw new Error('No url passed to add resource to loader.');
        }

        // options are optional so people might pass a function and no options
        if (typeof options === 'function') {
            cb = options;
            options = null;
        }

        // if loading already you can only add resources that have a parent.
        if (this.loading && (!options || !options.parentResource)) {
            throw new Error('Cannot add resources while the loader is running.');
        }

        // check if resource already exists.
        if (this.resources[name]) {
            throw new Error('Resource named "' + name + '" already exists.');
        }

        // add base url if this isn't an absolute url
        url = this._prepareUrl(url);

        // create the store the resource
        this.resources[name] = new _Resource2.default(name, url, options);

        if (typeof cb === 'function') {
            this.resources[name].onAfterMiddleware.once(cb);
        }

        // if actively loading, make sure to adjust progress chunks for that parent and its children
        if (this.loading) {
            var parent = options.parentResource;
            var incompleteChildren = [];

            for (var _i = 0; _i < parent.children.length; ++_i) {
                if (!parent.children[_i].isComplete) {
                    incompleteChildren.push(parent.children[_i]);
                }
            }

            var fullChunk = parent.progressChunk * (incompleteChildren.length + 1); // +1 for parent
            var eachChunk = fullChunk / (incompleteChildren.length + 2); // +2 for parent & new child

            parent.children.push(this.resources[name]);
            parent.progressChunk = eachChunk;

            for (var _i2 = 0; _i2 < incompleteChildren.length; ++_i2) {
                incompleteChildren[_i2].progressChunk = eachChunk;
            }

            this.resources[name].progressChunk = eachChunk;
        }

        // add the resource to the queue
        this._queue.push(this.resources[name]);

        return this;
    };

    /**
     * Sets up a middleware function that will run *before* the
     * resource is loaded.
     *
     * @method before
     * @param {function} fn - The middleware function to register.
     * @return {Loader} Returns itself.
     */

    Loader.prototype.pre = function pre(fn) {
        this._beforeMiddleware.push(fn);

        return this;
    };

    /**
     * Sets up a middleware function that will run *after* the
     * resource is loaded.
     *
     * @alias use
     * @method after
     * @param {function} fn - The middleware function to register.
     * @return {Loader} Returns itself.
     */

    Loader.prototype.use = function use(fn) {
        this._afterMiddleware.push(fn);

        return this;
    };

    /**
     * Resets the queue of the loader to prepare for a new load.
     *
     * @return {Loader} Returns itself.
     */

    Loader.prototype.reset = function reset() {
        this.progress = 0;
        this.loading = false;

        this._queue.kill();
        this._queue.pause();

        // abort all resource loads
        for (var k in this.resources) {
            var res = this.resources[k];

            if (res._onLoadBinding) {
                res._onLoadBinding.detach();
            }

            if (res.isLoading) {
                res.abort();
            }
        }

        this.resources = {};

        return this;
    };

    /**
     * Starts loading the queued resources.
     *
     * @param {function} [cb] - Optional callback that will be bound to the `complete` event.
     * @return {Loader} Returns itself.
     */

    Loader.prototype.load = function load(cb) {
        // register complete callback if they pass one
        if (typeof cb === 'function') {
            this.onComplete.once(cb);
        }

        // if the queue has already started we are done here
        if (this.loading) {
            return this;
        }

        // distribute progress chunks
        var chunk = 100 / this._queue._tasks.length;

        for (var i = 0; i < this._queue._tasks.length; ++i) {
            this._queue._tasks[i].data.progressChunk = chunk;
        }

        // update loading state
        this.loading = true;

        // notify of start
        this.onStart.dispatch(this);

        // start loading
        this._queue.resume();

        return this;
    };

    /**
     * Prepares a url for usage based on the configuration of this object
     *
     * @private
     * @param {string} url - The url to prepare.
     * @return {string} The prepared url.
     */

    Loader.prototype._prepareUrl = function _prepareUrl(url) {
        var parsedUrl = (0, _parseUri2.default)(url, { strictMode: true });
        var result = void 0;

        // absolute url, just use it as is.
        if (parsedUrl.protocol || !parsedUrl.path || url.indexOf('//') === 0) {
            result = url;
        }
        // if baseUrl doesn't end in slash and url doesn't start with slash, then add a slash inbetween
        else if (this.baseUrl.length && this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 && url.charAt(0) !== '/') {
                result = this.baseUrl + '/' + url;
            } else {
                result = this.baseUrl + url;
            }

        // if we need to add a default querystring, there is a bit more work
        if (this.defaultQueryString) {
            var hash = rgxExtractUrlHash.exec(result)[0];

            result = result.substr(0, result.length - hash.length);

            if (result.indexOf('?') !== -1) {
                result += '&' + this.defaultQueryString;
            } else {
                result += '?' + this.defaultQueryString;
            }

            result += hash;
        }

        return result;
    };

    /**
     * Loads a single resource.
     *
     * @private
     * @param {Resource} resource - The resource to load.
     * @param {function} dequeue - The function to call when we need to dequeue this item.
     */

    Loader.prototype._loadResource = function _loadResource(resource, dequeue) {
        var _this2 = this;

        resource._dequeue = dequeue;

        // run before middleware
        async.eachSeries(this._beforeMiddleware, function (fn, next) {
            fn.call(_this2, resource, function () {
                // if the before middleware marks the resource as complete,
                // break and don't process any more before middleware
                next(resource.isComplete ? {} : null);
            });
        }, function () {
            if (resource.isComplete) {
                _this2._onLoad(resource);
            } else {
                resource._onLoadBinding = resource.onComplete.once(_this2._onLoad, _this2);
                resource.load();
            }
        }, true);
    };

    /**
     * Called once each resource has loaded.
     *
     * @private
     */

    Loader.prototype._onComplete = function _onComplete() {
        this.loading = false;

        this.onComplete.dispatch(this, this.resources);
    };

    /**
     * Called each time a resources is loaded.
     *
     * @private
     * @param {Resource} resource - The resource that was loaded
     */

    Loader.prototype._onLoad = function _onLoad(resource) {
        var _this3 = this;

        resource._onLoadBinding = null;

        // remove this resource from the async queue, and add it to our list of resources that are being parsed
        this._resourcesParsing.push(resource);
        resource._dequeue();

        // run all the after middleware for this resource
        async.eachSeries(this._afterMiddleware, function (fn, next) {
            fn.call(_this3, resource, next);
        }, function () {
            resource.onAfterMiddleware.dispatch(resource);

            _this3.progress += resource.progressChunk;
            _this3.onProgress.dispatch(_this3, resource);

            if (resource.error) {
                _this3.onError.dispatch(resource.error, _this3, resource);
            } else {
                _this3.onLoad.dispatch(_this3, resource);
            }

            _this3._resourcesParsing.splice(_this3._resourcesParsing.indexOf(resource), 1);

            // do completion check
            if (_this3._queue.idle() && _this3._resourcesParsing.length === 0) {
                _this3.progress = MAX_PROGRESS;
                _this3._onComplete();
            }
        }, true);
    };

    return Loader;
}();

exports.default = Loader;
//# sourceMappingURL=Loader.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.blobMiddlewareFactory = blobMiddlewareFactory;

var _Resource = __webpack_require__(21);

var _Resource2 = _interopRequireDefault(_Resource);

var _b = __webpack_require__(60);

var _b2 = _interopRequireDefault(_b);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Url = window.URL || window.webkitURL;

// a middleware for transforming XHR loaded Blobs into more useful objects
function blobMiddlewareFactory() {
    return function blobMiddleware(resource, next) {
        if (!resource.data) {
            next();

            return;
        }

        // if this was an XHR load of a blob
        if (resource.xhr && resource.xhrType === _Resource2.default.XHR_RESPONSE_TYPE.BLOB) {
            // if there is no blob support we probably got a binary string back
            if (!window.Blob || typeof resource.data === 'string') {
                var type = resource.xhr.getResponseHeader('content-type');

                // this is an image, convert the binary string into a data url
                if (type && type.indexOf('image') === 0) {
                    resource.data = new Image();
                    resource.data.src = 'data:' + type + ';base64,' + _b2.default.encodeBinary(resource.xhr.responseText);

                    resource.type = _Resource2.default.TYPE.IMAGE;

                    // wait until the image loads and then callback
                    resource.data.onload = function () {
                        resource.data.onload = null;

                        next();
                    };

                    // next will be called on load
                    return;
                }
            }
            // if content type says this is an image, then we should transform the blob into an Image object
            else if (resource.data.type.indexOf('image') === 0) {
                    var _ret = function () {
                        var src = Url.createObjectURL(resource.data);

                        resource.blob = resource.data;
                        resource.data = new Image();
                        resource.data.src = src;

                        resource.type = _Resource2.default.TYPE.IMAGE;

                        // cleanup the no longer used blob after the image loads
                        // TODO: Is this correct? Will the image be invalid after revoking?
                        resource.data.onload = function () {
                            Url.revokeObjectURL(src);
                            resource.data.onload = null;

                            next();
                        };

                        // next will be called on load.
                        return {
                            v: void 0
                        };
                    }();

                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
                }
        }

        next();
    };
}
//# sourceMappingURL=blob.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};

// path.relative(from, to)
// posix version
exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

var TWEEN = TWEEN || function () {

	var _tweens = [];

	return {

		getAll: function getAll() {

			return _tweens;
		},

		removeAll: function removeAll() {

			_tweens = [];
		},

		add: function add(tween) {

			_tweens.push(tween);
		},

		remove: function remove(tween) {

			var i = _tweens.indexOf(tween);

			if (i !== -1) {
				_tweens.splice(i, 1);
			}
		},

		update: function update(time, preserve) {

			if (_tweens.length === 0) {
				return false;
			}

			var i = 0;

			time = time !== undefined ? time : TWEEN.now();

			while (i < _tweens.length) {

				if (_tweens[i].update(time) || preserve) {
					i++;
				} else {
					_tweens.splice(i, 1);
				}
			}

			return true;
		}
	};
}();

// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof window === 'undefined' && typeof process !== 'undefined') {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use window.performance.now if it is available.
else if (typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = window.performance.now.bind(window.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
			TWEEN.now = Date.now;
		}
		// Otherwise, use 'new Date().getTime()'.
		else {
				TWEEN.now = function () {
					return new Date().getTime();
				};
			}

TWEEN.Tween = function (object) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _repeatDelayTime;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	this.to = function (properties, duration) {

		_valuesEnd = properties;

		if (duration !== undefined) {
			_duration = duration;
		}

		return this;
	};

	this.start = function (time) {

		TWEEN.add(this);

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : TWEEN.now();
		_startTime += _delayTime;

		for (var property in _valuesEnd) {

			// Check if an Array was provided as property value
			if (_valuesEnd[property] instanceof Array) {

				if (_valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (_object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			_valuesStart[property] = _object[property];

			if (_valuesStart[property] instanceof Array === false) {
				_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[property] = _valuesStart[property] || 0;
		}

		return this;
	};

	this.stop = function () {

		if (!_isPlaying) {
			return this;
		}

		TWEEN.remove(this);
		_isPlaying = false;

		if (_onStopCallback !== null) {
			_onStopCallback.call(_object, _object);
		}

		this.stopChainedTweens();
		return this;
	};

	this.end = function () {

		this.update(_startTime + _duration);
		return this;
	};

	this.stopChainedTweens = function () {

		for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
			_chainedTweens[i].stop();
		}
	};

	this.delay = function (amount) {

		_delayTime = amount;
		return this;
	};

	this.repeat = function (times) {

		_repeat = times;
		return this;
	};

	this.repeatDelay = function (amount) {

		_repeatDelayTime = amount;
		return this;
	};

	this.yoyo = function (yoyo) {

		_yoyo = yoyo;
		return this;
	};

	this.easing = function (easing) {

		_easingFunction = easing;
		return this;
	};

	this.interpolation = function (interpolation) {

		_interpolationFunction = interpolation;
		return this;
	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;
	};

	this.onStart = function (callback) {

		_onStartCallback = callback;
		return this;
	};

	this.onUpdate = function (callback) {

		_onUpdateCallback = callback;
		return this;
	};

	this.onComplete = function (callback) {

		_onCompleteCallback = callback;
		return this;
	};

	this.onStop = function (callback) {

		_onStopCallback = callback;
		return this;
	};

	this.update = function (time) {

		var property;
		var elapsed;
		var value;

		if (time < _startTime) {
			return true;
		}

		if (_onStartCallbackFired === false) {

			if (_onStartCallback !== null) {
				_onStartCallback.call(_object, _object);
			}

			_onStartCallbackFired = true;
		}

		elapsed = (time - _startTime) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		value = _easingFunction(elapsed);

		for (property in _valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			var start = _valuesStart[property] || 0;
			var end = _valuesEnd[property];

			if (end instanceof Array) {

				_object[property] = _interpolationFunction(end, value);
			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof end === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof end === 'number') {
					_object[property] = start + (end - start) * value;
				}
			}
		}

		if (_onUpdateCallback !== null) {
			_onUpdateCallback.call(_object, value);
		}

		if (elapsed === 1) {

			if (_repeat > 0) {

				if (isFinite(_repeat)) {
					_repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in _valuesStartRepeat) {

					if (typeof _valuesEnd[property] === 'string') {
						_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[property];

						_valuesStartRepeat[property] = _valuesEnd[property];
						_valuesEnd[property] = tmp;
					}

					_valuesStart[property] = _valuesStartRepeat[property];
				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				if (_repeatDelayTime !== undefined) {
					_startTime = time + _repeatDelayTime;
				} else {
					_startTime = time + _delayTime;
				}

				return true;
			} else {

				if (_onCompleteCallback !== null) {

					_onCompleteCallback.call(_object, _object);
				}

				for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					_chainedTweens[i].start(_startTime + _duration);
				}

				return false;
			}
		}

		return true;
	};
};

TWEEN.Easing = {

	Linear: {

		None: function None(k) {

			return k;
		}

	},

	Quadratic: {

		In: function In(k) {

			return k * k;
		},

		Out: function Out(k) {

			return k * (2 - k);
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return -0.5 * (--k * (k - 2) - 1);
		}

	},

	Cubic: {

		In: function In(k) {

			return k * k * k;
		},

		Out: function Out(k) {

			return --k * k * k + 1;
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);
		}

	},

	Quartic: {

		In: function In(k) {

			return k * k * k * k;
		},

		Out: function Out(k) {

			return 1 - --k * k * k * k;
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return -0.5 * ((k -= 2) * k * k * k - 2);
		}

	},

	Quintic: {

		In: function In(k) {

			return k * k * k * k * k;
		},

		Out: function Out(k) {

			return --k * k * k * k * k + 1;
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);
		}

	},

	Sinusoidal: {

		In: function In(k) {

			return 1 - Math.cos(k * Math.PI / 2);
		},

		Out: function Out(k) {

			return Math.sin(k * Math.PI / 2);
		},

		InOut: function InOut(k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));
		}

	},

	Exponential: {

		In: function In(k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);
		},

		Out: function Out(k) {

			return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
		},

		InOut: function InOut(k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
		}

	},

	Circular: {

		In: function In(k) {

			return 1 - Math.sqrt(1 - k * k);
		},

		Out: function Out(k) {

			return Math.sqrt(1 - --k * k);
		},

		InOut: function InOut(k) {

			if ((k *= 2) < 1) {
				return -0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
		}

	},

	Elastic: {

		In: function In(k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
		},

		Out: function Out(k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
		},

		InOut: function InOut(k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
		}

	},

	Back: {

		In: function In(k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);
		},

		Out: function Out(k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;
		},

		InOut: function InOut(k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
		}

	},

	Bounce: {

		In: function In(k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);
		},

		Out: function Out(k) {

			if (k < 1 / 2.75) {
				return 7.5625 * k * k;
			} else if (k < 2 / 2.75) {
				return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
			} else if (k < 2.5 / 2.75) {
				return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
			} else {
				return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
			}
		},

		InOut: function InOut(k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
		}

	}

};

TWEEN.Interpolation = {

	Linear: function Linear(v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	},

	Bezier: function Bezier(v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;
	},

	CatmullRom: function CatmullRom(v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
		}
	},

	Utils: {

		Linear: function Linear(p0, p1, t) {

			return (p1 - p0) * t + p0;
		},

		Bernstein: function Bernstein(n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);
		},

		Factorial: function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;
			};
		}(),

		CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (true) {

		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return TWEEN;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {

		// Node.js
		module.exports = TWEEN;
	} else if (root !== undefined) {

		// Global variable
		root.TWEEN = TWEEN;
	}
})(this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)))

/***/ })
/******/ ]);
//# sourceMappingURL=release.js.map