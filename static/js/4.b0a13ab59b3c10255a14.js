webpackJsonp([4,13],{

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(679)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(671),
  /* template */
  __webpack_require__(683),
  /* scopeId */
  "data-v-78a93360",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(700)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(688),
  /* template */
  __webpack_require__(706),
  /* scopeId */
  "data-v-71a8816c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var EventsBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutations__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(556);




var store = {
  debug: true,
  state: {
    successAddCs: false,
    errorAddCs: false,
    csList: [],
    csRef: []
  },
  actions: {
    UPDATE_ACCESS_TOKEN: __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* UPDATE_ACCESS_TOKEN */],
    ADD_CS: __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* ADD_CS */],
    GET_CS: __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* GET_CS */],
    ADD_PROJECT: __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* ADD_PROJECT */],
    ERASE_CS_DATA: __WEBPACK_IMPORTED_MODULE_1__actions__["e" /* ERASE_CS_DATA */],
    ERASE_PROJECT_DATA: __WEBPACK_IMPORTED_MODULE_1__actions__["f" /* ERASE_PROJECT_DATA */]
  },
  mutations: {
    ADD_SUCCESS_CS: __WEBPACK_IMPORTED_MODULE_0__mutations__["a" /* ADD_SUCCESS_CS */],
    ERROR_ADD_CS: __WEBPACK_IMPORTED_MODULE_0__mutations__["b" /* ERROR_ADD_CS */],
    SET_CS_LIST: __WEBPACK_IMPORTED_MODULE_0__mutations__["c" /* SET_CS_LIST */]
  },
  getters: {
    GET_CS_BY_NAME: __WEBPACK_IMPORTED_MODULE_2__getters__["a" /* GET_CS_BY_NAME */],
    GET_BASE_PROJECT_URL: __WEBPACK_IMPORTED_MODULE_2__getters__["b" /* GET_BASE_PROJECT_URL */]
  }
};
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

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
    var length = array == null ? 0 : array.length;
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
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
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
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
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
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
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
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
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
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
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

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
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
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

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
      this.size = 0;
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
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
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
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
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
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

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
      this.size = 0;
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
      --this.size;
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
        ++this.size;
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

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

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
      this.size = 0;
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
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
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
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

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
          length = values == null ? 0 : values.length;

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

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

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
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

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
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
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
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
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
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
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
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

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
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
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
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
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
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
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
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
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
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
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
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
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
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
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
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
      return value != null && (type == 'object' || type == 'function');
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
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
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
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
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
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

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

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
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

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39), __webpack_require__(56)(module)))

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_RUN_ISSUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_BUILD_ISSUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_R7_ISSUES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventsStore_eventsBus__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(553);



var _this = this;




var GET_ALL_RUN_ISSUES = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_3__services__["a" /* default */].getAllRunIssues().then(function (res) {
              __WEBPACK_IMPORTED_MODULE_2__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('SET_RUN_ISSUES', res.issues);
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function GET_ALL_RUN_ISSUES() {
    return _ref.apply(this, arguments);
  };
}();

var GET_ALL_BUILD_ISSUES = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_3__services__["a" /* default */].getAllBuildIssues().then(function (res) {
              __WEBPACK_IMPORTED_MODULE_2__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('SET_BUILD_ISSUES', res.issues);
            });

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function GET_ALL_BUILD_ISSUES() {
    return _ref2.apply(this, arguments);
  };
}();

var GET_ALL_R7_ISSUES = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_3__services__["a" /* default */].getAllR7Issues().then(function (res) {
              __WEBPACK_IMPORTED_MODULE_2__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('SET_R7_ISSUES', res.issues);
            });

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function GET_ALL_R7_ISSUES() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


/* harmony default export */ __webpack_exports__["a"] = ({
  getAllRunIssues: function getAllRunIssues() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var headers, init, request, response;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = new Headers();

              headers.append('Content-Type', 'application/json');
              init = { method: 'GET',
                headers: headers,
                mode: 'CORS',
                'Access-Control-Allow-Origin': '*',
                cache: 'default' };
              _context.prev = 3;
              request = new Request('https://alm-dashboard.eu-de.mybluemix.net/jira/rest/api/run', init);
              _context.next = 7;
              return fetch(request);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              response = _context.sent;
              return _context.abrupt('return', response);

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](3);
              return _context.abrupt('return', _context.t0);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[3, 14]]);
    }))();
  },
  getAllBuildIssues: function getAllBuildIssues() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var headers, init, request, response;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              headers = new Headers();

              headers.append('Content-Type', 'application/json');
              init = { method: 'GET',
                headers: headers,
                mode: 'CORS',
                'Access-Control-Allow-Origin': '*',
                cache: 'default' };
              _context2.prev = 3;
              request = new Request('https://alm-dashboard.eu-de.mybluemix.net/jira/rest/api/build', init);
              _context2.next = 7;
              return fetch(request);

            case 7:
              response = _context2.sent;
              _context2.next = 10;
              return response.json();

            case 10:
              response = _context2.sent;
              return _context2.abrupt('return', response);

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2['catch'](3);
              return _context2.abrupt('return', _context2.t0);

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[3, 14]]);
    }))();
  },
  getAllR7Issues: function getAllR7Issues() {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var headers, init, request, response;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              headers = new Headers();

              headers.append('Content-Type', 'application/json');
              init = { method: 'GET',
                headers: headers,
                mode: 'CORS',
                'Access-Control-Allow-Origin': '*',
                cache: 'default' };
              _context3.prev = 3;
              request = new Request('https://alm-dashboard.eu-de.mybluemix.net/jira/rest/api/r7', init);
              _context3.next = 7;
              return fetch(request);

            case 7:
              response = _context3.sent;
              _context3.next = 10;
              return response.json();

            case 10:
              response = _context3.sent;
              return _context3.abrupt('return', response);

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3['catch'](3);
              return _context3.abrupt('return', _context3.t0);

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[3, 14]]);
    }))();
  }
});

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_CS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ERASE_CS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ERASE_PROJECT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_ACCESS_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventsStore_eventsBus__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cs_store_actions__ = __webpack_require__(552);



var _this = this;





var ADD_CS = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(cs) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2__services__["a" /* default */].addNewCs(cs).then(function (res) {
              __WEBPACK_IMPORTED_MODULE_3__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('ADD_SUCCESS_CS');
              GET_CS();
            }, function () {
              __WEBPACK_IMPORTED_MODULE_3__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('ERROR_ADD_CS');
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function ADD_CS(_x) {
    return _ref.apply(this, arguments);
  };
}();

var GET_CS = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2__services__["a" /* default */].getAllCs().then(function (res) {
              __WEBPACK_IMPORTED_MODULE_3__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('SET_CS_LIST', res);
            });

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function GET_CS() {
    return _ref2.apply(this, arguments);
  };
}();

var ERASE_CS_DATA = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(id, objects) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2__services__["a" /* default */].deleteCsData(id, objects).then(function (res) {}, function () {});

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function ERASE_CS_DATA(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var ADD_PROJECT = function () {
  var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(project) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2__services__["a" /* default */].addProject(project).then(function (res) {
              __WEBPACK_IMPORTED_MODULE_3__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('ADD_SUCCESS_PROJECT');
            }, function () {
              __WEBPACK_IMPORTED_MODULE_3__events_eventsStore_eventsBus__["a" /* EventsBus */].$emit('ERROR_ADD_PROJECT');
            });

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function ADD_PROJECT(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var ERASE_PROJECT_DATA = function () {
  var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(id) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2__services__["a" /* default */].deleteProject(id).then(function (res) {
              console.log(res);
            }, function () {});

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function ERASE_PROJECT_DATA(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var UPDATE_ACCESS_TOKEN = function () {
  var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(csUpdate) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2__services__["a" /* default */].updateAccessToken(csUpdate).then(function (res) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__cs_store_actions__["a" /* GET_ALL_BUILD_ISSUES */])();
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__cs_store_actions__["b" /* GET_ALL_RUN_ISSUES */])();
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__cs_store_actions__["c" /* GET_ALL_R7_ISSUES */])();
            });

          case 2:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this);
  }));

  return function UPDATE_ACCESS_TOKEN(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CS_BY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_BASE_PROJECT_URL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



var GET_CS_BY_NAME = function GET_CS_BY_NAME(cs) {
  var data = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.csRef, { 'csname': cs });
  return data;
};

var GET_BASE_PROJECT_URL = function GET_BASE_PROJECT_URL(urlList, selectedSource) {
  var data = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(urlList, { 'name': selectedSource });
  return data[0].url;
};

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_SUCCESS_CS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ERROR_ADD_CS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_CS_LIST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_eventsStore_eventsBus__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(550);



var ADD_SUCCESS_CS = __WEBPACK_IMPORTED_MODULE_0__events_eventsStore_eventsBus__["a" /* EventsBus */].$on('ADD_SUCCESS_CS', function () {
  __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.successAddCs = true;
});

var ERROR_ADD_CS = __WEBPACK_IMPORTED_MODULE_0__events_eventsStore_eventsBus__["a" /* EventsBus */].$on('ERROR_ADD_CS', function () {
  __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.errorAddCs = true;
});

var SET_CS_LIST = __WEBPACK_IMPORTED_MODULE_0__events_eventsStore_eventsBus__["a" /* EventsBus */].$on('SET_CS_LIST', function (res) {
  __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.csList = res[0];
  __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.csRef = res[1];
});

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__url_conf__ = __webpack_require__(37);






var HEADERS = { 'Content-Type': 'application/json' };

/* harmony default export */ __webpack_exports__["a"] = ({
  addNewCs: function addNewCs(cs) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["f" /* BASE_URL_CS */] + '/' + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */], {
                method: 'POST',
                body: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(cs),
                headers: HEADERS
              }).then(function (res) {
                console.log(res);
                return res;
              }, function (err) {
                return err;
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  getAllCs: function getAllCs() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var csArray, csRef, response;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              csArray = [];
              csRef = [];
              _context2.next = 4;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["f" /* BASE_URL_CS */] + '/' + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */]);

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              response = _context2.sent;

              csRef = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(response));
              response.forEach(function (res) {
                csArray.push(res.csname.toUpperCase());
              });
              return _context2.abrupt('return', [csArray, csRef]);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  deleteCsData: function deleteCsData(id, objects) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var cs, events;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["f" /* BASE_URL_CS */] + '/' + id + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */], {
                method: 'DELETE',
                headers: HEADERS
              });

            case 2:
              cs = _context3.sent;
              _context3.next = 5;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["g" /* BASE_URL_EVENTS */] + '/' + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */], {
                method: 'DELETE',
                data: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(objects),
                headers: HEADERS
              }).then(function (success) {
                console.log(success);
              }, function (err) {
                console.log(err);
              });

            case 5:
              events = _context3.sent;


              __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([cs, events]);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  addProject: function addProject(project) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["e" /* BASE_URL_PROJECT */] + '/' + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */], {
                method: 'POST',
                body: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(project),
                headers: HEADERS
              }).then(function (res) {
                console.log(res);
                return res;
              }, function (err) {
                return err;
              });

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  deleteProject: function deleteProject(id) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee5() {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["e" /* BASE_URL_PROJECT */] + '/' + id + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */], {
                method: 'DELETE'
              }).then(function (res) {
                console.log(res);
              }, function () {});

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  },
  updateAccessToken: function updateAccessToken(csUpdate) {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee6() {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__url_conf__["f" /* BASE_URL_CS */] + '/' + csUpdate._id.$oid + __WEBPACK_IMPORTED_MODULE_5__url_conf__["d" /* API_KEY */], {
                method: 'PUT',
                body: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(csUpdate),
                headers: HEADERS
              }).then(function (res) {
                console.log(res, 'ayo');
                return res;
              }, function (err) {
                return err;
              });

            case 2:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }))();
  }
});

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_tabs_VuesticTabs_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_tabs_VuesticTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_tabs_VuesticTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsStore__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_management_store_store__ = __webpack_require__(550);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'news-form',
  components: {
    InlineEditor: __WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js___default.a,
    VuesticWidget: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget___default.a,
    VuesticTabs: __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_tabs_VuesticTabs_vue___default.a
  },
  props: ['currentData'],
  data: function data() {
    return {
      sharedState: __WEBPACK_IMPORTED_MODULE_3__newsStore__["a" /* default */].state,
      sharedContentManagementStore: __WEBPACK_IMPORTED_MODULE_4__content_management_store_store__["a" /* default */],
      state: {
        buttonMsg: ''
      }
    };
  },
  mounted: function mounted() {
    this.initCMS();
    if (this.sharedState.currentNews._id !== undefined) {
      this.state.buttonMsg = 'VALIDER LES MODIFICATIONS';
      return this.state.buttonMsg;
    }
    console.log(this.sharedState);
    this.state.buttonMsg = 'PUBLIER LA NEWS';
  },
  beforeDestroy: function beforeDestroy() {
    this.sharedState.currentNews = {};
  },

  methods: {
    setNews: function setNews() {
      var news = {};
      this.sharedContentManagementStore.state.csList.forEach(function (cs) {
        news[cs] = document.getElementById(cs).innerHTML;
      });
      news.goodnews = document.getElementById('goodNewsEditor').innerHTML;
      news.badnews = document.getElementById('badNewsEditor').innerHTML;
      news.date = new Date();
      news._id = this.sharedState.currentNews._id;
      console.log('state', this.sharedState.currentNews);
      if (this.sharedState.currentNews !== false) {
        console.log(news);
        __WEBPACK_IMPORTED_MODULE_3__newsStore__["a" /* default */].setEditedNews(news);
        __WEBPACK_IMPORTED_MODULE_3__newsStore__["a" /* default */].editNews();
      } else {
        __WEBPACK_IMPORTED_MODULE_3__newsStore__["a" /* default */].setNews(news);
        this.createNews(news);
      }
    },
    initCMS: function initCMS() {
      var _this = this;

      this.sharedContentManagementStore.actions.GET_CS().then(function () {
        _this.sharedContentManagementStore.state.csList.forEach(function (cs) {
          __WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js___default.a.create(document.querySelector('#' + cs)).then(function (editor) {
            if (_this.sharedState.currentNews[cs] !== undefined) {
              return editor.setData(_this.sharedState.currentNews[cs]);
            }
            editor.setData(_this.sharedState.baseNews.news);
          }).catch(function (error) {
            console.error(error);
          });
        });
        __WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js___default.a.create(document.querySelector('#goodNewsEditor')).then(function (goodNewsEditor) {
          if (_this.sharedState.currentNews.goodnews !== undefined) {
            return goodNewsEditor.setData(_this.sharedState.currentNews.goodnews);
          }
          goodNewsEditor.setData(_this.sharedState.baseNews.goodNews);
        }).catch(function (error) {
          console.error(error);
        });
        __WEBPACK_IMPORTED_MODULE_0__static_inlinejs_js___default.a.create(document.querySelector('#badNewsEditor')).then(function (badNewsEditor) {
          if (_this.sharedState.currentNews.badnews !== undefined) {
            return badNewsEditor.setData(_this.sharedState.currentNews.badnews);
          }
          badNewsEditor.setData(_this.sharedState.baseNews.badNews);
        }).catch(function (error) {
          console.error(error);
        });
      });
    },
    createNews: function createNews() {
      __WEBPACK_IMPORTED_MODULE_3__newsStore__["a" /* default */].postNews();
    }
  }
});

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(519)();
// imports


// module
exports.push([module.i, "\n.form-group[data-v-78a93360] {\n  min-width: 200px;\n  max-width: 400px;\n  width: 80%;\n}\n@media (min-width: 768px) {\n.wizard-completed-tab[data-v-78a93360] {\n    margin-top: -3.125rem;\n}\n}\n", "", {"version":3,"sources":["/Users/ludwig/Documents/Travail/SOPRA/ag2r/src/components/news/NewsForm.vue"],"names":[],"mappings":";AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;CACZ;AACD;AACA;IACI,sBAAsB;CACzB;CACA","file":"NewsForm.vue","sourcesContent":["\n.form-group[data-v-78a93360] {\n  min-width: 200px;\n  max-width: 400px;\n  width: 80%;\n}\n@media (min-width: 768px) {\n.wizard-completed-tab[data-v-78a93360] {\n    margin-top: -3.125rem;\n}\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(675);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(520)("37486696", content, true);

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "setup-profile-tab dashboard-tab"
  }, [_c('vuestic-widget', {
    staticClass: "no-padding no-v-padding"
  }, [_c('vuestic-tabs', {
    ref: "tabs",
    attrs: {
      "names": ['News CS', 'Points positif', 'Points négatif']
    }
  }, [_c('div', {
    attrs: {
      "slot": "News CS"
    },
    slot: "News CS"
  }, _vm._l((_vm.sharedContentManagementStore.state.csList), function(cs) {
    return _c('vuestic-widget', {
      staticClass: "no-padding no-v-padding"
    }, [_c('vuestic-tabs', {
      ref: "tabs",
      refInFor: true,
      attrs: {
        "names": [cs]
      }
    }, [_c('div', {
      attrs: {
        "slot": cs
      },
      slot: cs
    }, [_c('div', {
      staticStyle: {
        "width": "100%",
        "padding": "50px"
      },
      attrs: {
        "id": cs
      }
    })])])], 1)
  })), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "Points positif"
    },
    slot: "Points positif"
  }, [_c('div', {
    staticClass: "widget",
    staticStyle: {
      "width": "100%",
      "padding": "50px"
    },
    attrs: {
      "id": "goodNewsEditor"
    }
  })]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "Points négatif"
    },
    slot: "Points négatif"
  }, [_c('div', {
    staticClass: "widget",
    staticStyle: {
      "width": "100%",
      "padding": "50px"
    },
    attrs: {
      "id": "badNewsEditor"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-12  d-flex justify-content-center"
  }, [_c('button', {
    staticClass: "btn btn-info",
    on: {
      "click": function($event) {
        _vm.setNews()
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.state.buttonMsg) + "\n      ")])]), _vm._v(" "), _c('br')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(function(e,t){ true?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports.InlineEditor=t():e.InlineEditor=t()})(this,function(){var e=Number.POSITIVE_INFINITY,t=Math.floor,o=Math.max,n=Math.min;return function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=279)}([function(e,t){'use strict';function a(e){const t=e.match(/^([^:]+):/);return t?e+` Read more: ${n}#${t[1]}.\n`:e}t.a=a;const n='https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/framework/guides/support/error-codes.html';class o extends Error{constructor(e,t){e=a(e),t&&(e+=' '+JSON.stringify(t)),super(e),this.name='CKEditorError',this.data=t}static isCKEditorError(e){return e instanceof o}}t.b=o},function(e,t,a){'use strict';var o=a(53),i=a(18),r=a(54),s=a(0),l=a(26);class d{constructor(e,t){if(!e.is('element')&&!e.is('documentFragment'))throw new s.b('model-position-root-invalid: Position root invalid.');if(!(t instanceof Array)||0===t.length)throw new s.b('model-position-path-incorrect: Position path must be an array with at least one item.',{path:t});t=e.getPath().concat(t),e=e.root,this.root=e,this.path=t}get offset(){return Object(i.a)(this.path)}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)e=e.getChild(e.offsetToIndex(this.path[t]));return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const e=this.parent.getChild(this.index);return e instanceof l.a&&e.startOffset<this.offset?e:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return'different';const t=Object(r.a)(this.path,e.path);return'same'===t?'same':'prefix'===t?'before':'extension'===t?'after':this.path[t]<e.path[t]?'before':'after'}getLastMatchingPosition(e,t={}){t.startPosition=this;const a=new o.a(t);return a.skip(e),a.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is('documentFragment')?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(e){if(this.root!=e.root)return[];const t=Object(r.a)(this.path,e.path),a='string'==typeof t?n(this.path.length,e.path.length):t;return this.path.slice(0,a)}getCommonAncestor(e){const t=this.getAncestors(),a=e.getAncestors();let n=0;for(;t[n]==a[n]&&t[n];)n++;return 0==n?null:t[n-1]}getShiftedBy(e){const t=d.createFromPosition(this),a=t.offset+e;return t.offset=0>a?0:a,t}isAfter(e){return'after'==this.compareWith(e)}isBefore(e){return'before'==this.compareWith(e)}isEqual(e){return'same'==this.compareWith(e)}isTouching(e){let t=null,a=null;const n=this.compareWith(e);switch(n){case'same':return!0;case'before':t=d.createFromPosition(this),a=d.createFromPosition(e);break;case'after':t=d.createFromPosition(e),a=d.createFromPosition(this);break;default:return!1;}for(let n=t.parent;t.path.length+a.path.length;){if(t.isEqual(a))return!0;if(t.path.length>a.path.length){if(t.offset!==n.maxOffset)return!1;t.path=t.path.slice(0,-1),n=n.parent,t.offset++}else{if(0!==a.offset)return!1;a.path=a.path.slice(0,-1)}}}_getTransformedByDeletion(e,t){const a=d.createFromPosition(this);if(this.root!=e.root)return a;if('same'==Object(r.a)(e.getParentPath(),this.getParentPath())){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;a.offset-=t}}else if('prefix'==Object(r.a)(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;if(e.offset<=this.path[n]){if(e.offset+t>this.path[n])return null;a.path[n]-=t}}return a}_getTransformedByInsertion(e,t,a){const n=d.createFromPosition(this);if(this.root!=e.root)return n;if('same'==Object(r.a)(e.getParentPath(),this.getParentPath()))(e.offset<this.offset||e.offset==this.offset&&a)&&(n.offset+=t);else if('prefix'==Object(r.a)(e.getParentPath(),this.getParentPath())){const a=e.path.length-1;e.offset<=this.path[a]&&(n.path[a]+=t)}return n}_getTransformedByMove(e,t,a,n,o){let i=this._getTransformedByDeletion(e,a);return t=t._getTransformedByDeletion(e,a),i=null===i||o&&i.isEqual(e)?this._getCombined(e,t):i._getTransformedByInsertion(t,a,n),i}_getCombined(e,t){const a=e.path.length-1,n=d.createFromPosition(t);return n.offset=n.offset+this.path[a]-e.offset,n.path=n.path.concat(this.path.slice(a+1)),n}static createAt(e,t){if(e instanceof d)return this.createFromPosition(e);else{const a=e;if('end'==t)t=a.maxOffset;else{if('before'==t)return this.createBefore(a);if('after'==t)return this.createAfter(a);t||(t=0)}return this.createFromParentAndOffset(a,t)}}static createAfter(e){if(!e.parent)throw new s.b('model-position-after-root: You cannot make a position after root.',{root:e});return this.createFromParentAndOffset(e.parent,e.endOffset)}static createBefore(e){if(!e.parent)throw new s.b('model-position-before-root: You cannot make a position before root.',{root:e});return this.createFromParentAndOffset(e.parent,e.startOffset)}static createFromParentAndOffset(e,t){if(!e.is('element')&&!e.is('documentFragment'))throw new s.b('model-position-parent-incorrect: Position parent have to be a element or document fragment.');const a=e.getPath();return a.push(t),new this(e.root,a)}static createFromPosition(e){return new this(e.root,e.path.slice())}static fromJSON(e,t){if('$graveyard'===e.root)return new d(t.graveyard,e.path);if(!t.hasRoot(e.root))throw new s.b('model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.',{rootName:e.root});return new d(t.getRoot(e.root),e.path)}}t.a=d},function(e,t,a){'use strict';var n=a(12),o=a(4);class i{constructor(e){this.editor=e}destroy(){this.stopListening()}}t.a=i,Object(o.a)(i,n.a)},function(e,t,a){'use strict';var n=a(1),o=a(53),i=a(0);class r{constructor(e,t=null){this.start=n.a.createFromPosition(e),this.end=t?n.a.createFromPosition(t):n.a.createFromPosition(e)}*[Symbol.iterator](){yield*new o.a({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const a=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return a&&n}containsItem(e){const t=n.a.createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new r(this.start,e.start)),this.containsPosition(e.end)&&t.push(new r(e.end,this.end))):t.push(r.createFromRange(this)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,a=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(a=e.end),new r(t,a)}return null}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,a=n.a.createFromPosition(this.start);for(let n=a.parent;a.path.length>t+1;){const t=n.maxOffset-a.offset;0!=t&&e.push(new r(a,a.getShiftedBy(t))),a.path=a.path.slice(0,-1),a.offset++,n=n.parent}for(;a.path.length<=this.end.path.length;){const t=this.end.path[a.path.length-1],n=t-a.offset;0!=n&&e.push(new r(a,a.getShiftedBy(n))),a.offset=t,a.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new o.a(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new o.a(e);for(const a of t)yield a.item}*getPositions(e={}){e.boundaries=this;const t=new o.a(e);yield t.position;for(const a of t)yield a.nextPosition}getTransformedByDelta(e){const t=[r.createFromRange(this)],a=new Set(['insert','move','remove','reinsert']);for(const n of e.operations)if(a.has(n.type))for(let a=0;a<t.length;a++){const o=t[a]._getTransformedByDocumentChange(n.type,e.type,n.targetPosition||n.position,n.howMany||n.nodes.maxOffset,n.sourcePosition);t.splice(a,1,...o),a+=o.length-1}return t}getTransformedByDeltas(e){const t=[r.createFromRange(this)];for(const a of e)for(let e=0;e<t.length;e++){const n=t[e].getTransformedByDelta(a);t.splice(e,1,...n),e+=n.length-1}for(let a=0;a<t.length;a++){const e=t[a];for(let n=a+1;n<t.length;n++){const a=t[n];(e.containsRange(a)||a.containsRange(e)||e.isEqual(a))&&t.splice(n,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}_getTransformedByDocumentChange(e,t,a,n,o){if('insert'==e)return this._getTransformedByInsertion(a,n,!1,!1);else{const e=r.createFromPositionAndShift(o,n);if('merge'==t&&this.isCollapsed&&(this.start.isEqual(e.start)||this.start.isEqual(e.end))){const t=this.start.offset-e.start.offset;return[new r(a.getShiftedBy(t))]}if('split'==t&&this.isCollapsed&&this.end.isEqual(e.end))return[new r(a.getShiftedBy(n))];if((e.containsPosition(this.start)||e.start.isEqual(this.start))&&this.containsPosition(e.end)&&this.end.isAfter(a)){const e=this.start._getCombined(o,a._getTransformedByDeletion(o,n)),t=this.end._getTransformedByMove(o,a,n,!1,!1);return[new r(e,t)]}if((e.containsPosition(this.end)||e.end.isEqual(this.end))&&this.containsPosition(e.start)&&this.start.isBefore(a)){const e=this.start._getTransformedByMove(o,a,n,!0,!1),t=this.end._getCombined(o,a._getTransformedByDeletion(o,n));return[new r(e,t)]}return this._getTransformedByMove(o,a,n)}}_getTransformedByInsertion(e,t,a=!1,n=!1){if(a&&this.containsPosition(e))return[new r(this.start,e),new r(e._getTransformedByInsertion(e,t,!0),this.end._getTransformedByInsertion(e,t,this.isCollapsed))];else{const a=r.createFromRange(this),o=!!a.isCollapsed||!n,i=!!a.isCollapsed||n;return a.start=a.start._getTransformedByInsertion(e,t,o),a.end=a.end._getTransformedByInsertion(e,t,i),[a]}}_getTransformedByMove(e,t,a){if(this.isCollapsed){const n=this.start._getTransformedByMove(e,t,a,!0,!1);return[new r(n)]}let n;const o=new r(e,e.getShiftedBy(a)),i=this.getDifference(o);let s=null;const l=this.getIntersection(o);1==i.length?s=new r(i[0].start._getTransformedByDeletion(e,a),i[0].end._getTransformedByDeletion(e,a)):2==i.length&&(s=new r(this.start,this.end._getTransformedByDeletion(e,a)));const d=t._getTransformedByDeletion(e,a);return n=s?s._getTransformedByInsertion(d,a,null!==l):[],l&&n.push(new r(l.start._getCombined(o.start,d),l.end._getCombined(o.start,d))),n}static createFromPositionAndShift(e,t){const a=e,n=e.getShiftedBy(t);return 0<t?new this(a,n):new this(n,a)}static createFromParentsAndOffsets(e,t,a,o){return new this(n.a.createFromParentAndOffset(e,t),n.a.createFromParentAndOffset(a,o))}static createFromRange(e){return new this(e.start,e.end)}static createIn(e){return this.createFromParentsAndOffsets(e,0,e,e.maxOffset)}static createOn(e){return this.createFromPositionAndShift(n.a.createBefore(e),e.offsetSize)}static createCollapsedAt(e,t){const a=n.a.createAt(e,t),o=n.a.createFromPosition(a);return new r(a,o)}static createFromRanges(e){if(0===e.length)throw new i.b('range-create-from-ranges-empty-array: At least one range has to be passed.');else if(1==e.length)return this.createFromRange(e[0]);const t=e[0];e.sort((e,t)=>e.start.isAfter(t.start)?1:-1);const a=e.indexOf(t),o=new this(t.start,t.end);for(let t=a-1;0<=t&&e[t].end.isEqual(o.start);t++)o.start=n.a.createFromPosition(e[t].start);for(let t=a+1;t<e.length&&e[t].start.isEqual(o.end);t++)o.end=n.a.createFromPosition(e[t].end);return o}static fromJSON(e,t){return new this(n.a.fromJSON(e.start,t),n.a.fromJSON(e.end,t))}}t.a=r},function(e,t){'use strict';t.a=function(e,...t){t.forEach((t)=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach((a)=>{if(!(a in e.prototype)){const n=Object.getOwnPropertyDescriptor(t,a);n.enumerable=!1,Object.defineProperty(e.prototype,a,n)}})})}},function(e,t,a){'use strict';function n(e){return'string'==typeof e?[new r.a(e)]:(Object(s.a)(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new r.a(e):e))}var o=a(65),i=a(83),r=a(26),s=a(34);class l extends o.a{constructor(e,t,a){super(t),this.name=e,this._children=new i.a,a&&this.insertChildren(0,a)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(e,t=null){return t?'element'==e&&t==this.name:'element'==e||e==this.name}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}clone(e=!1){const t=e?Array.from(this._children).map((e)=>e.clone(!0)):null;return new l(this.name,this.getAttributes(),t)}offsetToIndex(e){return this._children.offsetToIndex(e)}appendChildren(e){this.insertChildren(this.childCount,e)}insertChildren(e,t){t=n(t);for(const a of t)null!==a.parent&&a.remove(),a.parent=this;this._children.insertNodes(e,t)}removeChildren(e,t=1){const a=this._children.removeNodes(e,t);for(const n of a)n.parent=null;return a}getNodeByPath(e){let t=this;for(const a of e)t=t.getChild(t.offsetToIndex(a));return t}toJSON(){const e=super.toJSON();if(e.name=this.name,0<this._children.length){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}static fromJSON(e){let t=null;if(e.children){t=[];for(const a of e.children)a.name?t.push(l.fromJSON(a)):t.push(r.a.fromJSON(a))}return new l(e.name,e.attributes,t)}}t.a=l},function(e,t,a){'use strict';function n(e){return!!e&&((e.value&&(e=e.value),Array.isArray(e))?e.some(n):!!(e instanceof I))}function o(e,t){return e.map((e)=>e instanceof I?e.getValue(t):e)}function i(e,t,{node:a}){let n=o(e,a);n=1==e.length&&e[0]instanceof B?n[0]:n.reduce(h,''),k(n)?t.remove():t.set(n)}function r(e){return{set(t){e.textContent=t},remove(){e.textContent=''}}}function s(e,t,a){return{set(n){e.setAttributeNS(a,t,n)},remove(){e.removeAttributeNS(a,t)}}}function l(e,t){return{set(a){e.style[t]=a},remove(){e.style[t]=null}}}function d(e){const t=Object(V.a)(e,(e)=>{if(e&&(e instanceof I||y(e)||w(e)||v(e)))return e});return t}function c(e){if('string'==typeof e?e=p(e):e.text&&g(e),e.on&&(e.eventListeners=u(e.on),delete e.on),!e.text){e.attributes&&m(e.attributes);const t=new S.a;if(e.children)if(v(e.children))t.add(e.children);else for(const a of e.children)y(a)||w(a)?t.add(a):t.add(new F(a));e.children=t}return e}function m(e){for(const t in e)e[t].value&&(e[t].value=[].concat(e[t].value)),f(e,t)}function u(e){for(const t in e)f(e,t);return e}function p(e){return{text:[e]}}function g(e){Array.isArray(e.text)||(e.text=[e.text])}function f(e,t){Array.isArray(e[t])||(e[t]=[e[t]])}function h(e,t){return k(t)?e:k(e)?t:`${e} ${t}`}function b(e,t){for(const n in t)e[n]?e[n].push(...t[n]):e[n]=t[n]}function _(e,t){if(t.attributes&&(!e.attributes&&(e.attributes={}),b(e.attributes,t.attributes)),t.eventListeners&&(!e.eventListeners&&(e.eventListeners={}),b(e.eventListeners,t.eventListeners)),t.text&&e.text.push(...t.text),t.children&&t.children.length){if(e.children.length!=t.children.length)throw new C.b('ui-template-extend-children-mismatch: The number of children in extended definition does not match.');let a=0;for(const n of t.children)_(e.children.get(a++),n)}}function k(e){return!e&&0!==e}function w(e){return e instanceof E.a}function y(e){return e instanceof F}function v(e){return e instanceof S.a}function x(){return{children:[],bindings:[],attributes:{}}}function A(e){return'class'==e||'style'==e}var C=a(0),T=a(4),P=a(8),E=a(7),S=a(112),V=a(433),O=a(17),R=a(16);class F{constructor(e){Object.assign(this,c(d(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData=x(),this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new C.b('ui-template-revert-not-applied: Attempting reverting a template which has not been applied yet.');this._revertTemplateFromNode(e,this._revertData)}static bind(e,t){return{to(a,n){return new N({eventNameOrFunction:a,attribute:a,observable:e,emitter:t,callback:n})},if(a,n,o){return new B({observable:e,emitter:t,attribute:a,valueIfTrue:n,callback:o})}}}static extend(e,t){e._isRendered&&R.a.warn('template-extend-render: Attempting to extend a template which has already been rendered.'),_(e,c(d(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new C.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering new Node.');return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||'http://www.w3.org/1999/xhtml',this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(''),n(this.text)?this._bindToObservable({schema:this.text,updater:r(t),data:e}):t.textContent=this.text.join(''),t}_renderAttributes(e){let t,a,o,i;if(this.attributes){const r=e.node,l=e.revertData;for(t in this.attributes)if(o=r.getAttribute(t),a=this.attributes[t],l&&(l.attributes[t]=o),i=Object(O.a)(a[0])&&a[0].ns?a[0].ns:null,n(a)){const n=i?a[0].value:a;l&&A(t)&&n.unshift(o),this._bindToObservable({schema:n,updater:s(r,t,i),data:e})}else'style'==t&&'string'!=typeof a[0]?this._renderStyleAttribute(a[0],e):(l&&o&&A(t)&&a.unshift(o),a=a.map((e)=>e?e.value||e:e).reduce((e,t)=>e.concat(t),[]).reduce(h,''),k(a)||r.setAttributeNS(i,t,a))}}_renderStyleAttribute(e,t){const a=t.node;for(const o in e){const i=e[o];n(i)?this._bindToObservable({schema:[i],updater:l(a,o),data:t}):a.style[o]=i}}_renderElementChildren(e){const t=e.node,a=e.intoFragment?document.createDocumentFragment():t,n=e.isApplying;let o=0;for(const i of this.children)if(v(i)){if(!n){i.setParent(t);for(const e of i)a.appendChild(e.element)}}else if(w(i))n||a.appendChild(i.element);else if(n){const t=e.revertData,n=x();t.children.push(n),i._renderNode({node:a.childNodes[o++],isApplying:!0,revertData:n})}else a.appendChild(i.render());e.intoFragment&&t.appendChild(a)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const a=this.eventListeners[t].map((a)=>{const[n,o]=t.split('@');return a.activateDomEventListener(n,o,e)});e.revertData&&e.revertData.bindings.push(a)}}_bindToObservable({schema:e,updater:t,data:a}){const n=a.revertData;i(e,t,a);const o=e.filter((e)=>!k(e)).filter((e)=>e.observable).map((n)=>n.activateAttributeListener(e,t,a));n&&n.bindings.push(o)}_revertTemplateFromNode(e,t){for(const a of t.bindings)for(const e of a)e();if(t.text)return void(e.textContent=t.text);for(const a in t.attributes){const n=t.attributes[a];null===n?e.removeAttribute(a):e.setAttribute(a,n)}for(let a=0;a<t.children.length;++a)this._revertTemplateFromNode(e.childNodes[a],t.children[a])}}t.a=F,Object(T.a)(F,P.c);class I{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,a){const n=()=>i(e,t,a);return this.emitter.listenTo(this.observable,'change:'+this.attribute,n),()=>{this.emitter.stopListening(this.observable,'change:'+this.attribute,n)}}}class N extends I{activateDomEventListener(e,t,a){const n=(e,a)=>{(!t||a.target.matches(t))&&('function'==typeof this.eventNameOrFunction?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(a.node,e,n),()=>{this.emitter.stopListening(a.node,e,n)}}}class B extends I{getValue(e){const t=super.getValue(e);return!k(t)&&(this.valueIfTrue||!0)}}},function(e,t,a){'use strict';var n=a(0),o=a(112),i=a(6),r=a(110),s=a(12),l=a(113),d=a(4),c=a(34);class m{constructor(e){this.locale=e,this.t=e&&e.t,this.set('ready',!1),this._viewCollections=new l.a,this._unboundChildren=this.createCollection(),this._viewCollections.on('add',(t,a)=>{a.locale=e})}get element(){return this._element?this._element:this.template?(this._addTemplateChildren(),this._element=this.template.render()):null}set element(e){this._element=e}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=i.a.bind(this,this)}createCollection(){const e=new o.a;return this._viewCollections.add(e),e}addChildren(e){Object(c.a)(e)||(e=[e]),e.map((e)=>this._unboundChildren.add(e))}removeChildren(e){Object(c.a)(e)||(e=[e]),e.map((e)=>this._unboundChildren.remove(e))}init(){if(this.ready)throw new n.b('ui-view-init-reinit: This View has already been initialized.');this._viewCollections.map((e)=>e.init()),this.ready=!0}destroy(){this.stopListening(),this._viewCollections.map((e)=>e.destroy())}_addTemplateChildren(){const e=(t)=>{if(t.children)for(const a of t.children)a instanceof m?this.addChildren(a):e(a)};e(this.template)}}t.a=m,Object(d.a)(m,r.a),Object(d.a)(m,s.a)},function(e,t,a){'use strict';function n(e,t){e[f]||(e[f]=t||Object(u.a)())}function o(e){return e[f]}function i(e){return e._events||Object.defineProperty(e,'_events',{value:{}}),e._events}function r(){return{callbacks:[],childEvents:[]}}function s(e,t){const a=i(e);if(a[t])return;let n=t,o=null;const s=[];for(;''!==n&&!a[n];)a[n]=r(),s.push(a[n]),o&&a[n].childEvents.push(o),o=n,n=n.substr(0,n.lastIndexOf(':'));if(''!==n){for(const e of s)e.callbacks=a[n].callbacks.slice();a[n].childEvents.push(o)}}function l(e,t){const a=i(e)[t];if(!a)return[];let n=[a.callbacks];for(let o=0;o<a.childEvents.length;o++){const t=l(e,a.childEvents[o]);n=n.concat(t)}return n}function d(e,t){let a;return e._events&&(a=e._events[t])&&a.callbacks.length?a.callbacks:-1<t.indexOf(':')?d(e,t.substr(0,t.lastIndexOf(':'))):null}function c(e,t,a){for(let[n,o]of e){o?'function'==typeof o&&(o=o(t.name)):o=t.name;const e=new m.a(t.source,o);e.path=[...t.path],n.fire(e,...a)}}t.a=function(e,t){return e[g]&&e[g][t]?e[g][t].emitter:null},t.b=n;var m=a(289),u=a(62),p=a(291);const g=Symbol('listeningTo'),f=Symbol('emitterId'),h={on(e,t,a={}){s(this,e);const n=l(this,e),o=p.a.get(a.priority);t={callback:t,context:a.context||this,priority:o};for(const r of n){let e=!1;for(let a=0;a<r.length;a++)if(r[a].priority<o){r.splice(a,0,t),e=!0;break}e||r.push(t)}},once(e,t,a){this.on(e,function(e,...a){e.off(),t.call(this,e,...a)},a)},off(e,t,a){const n=l(this,e);for(const o of n)for(let e=0;e<o.length;e++)o[e].callback==t&&(a&&a!=o[e].context||(o.splice(e,1),e--))},listenTo(e,t,a,i){let r,s;this[g]||(this[g]={});const l=this[g];o(e)||n(e);const d=o(e);(r=l[d])||(r=l[d]={emitter:e,callbacks:{}}),(s=r.callbacks[t])||(s=r.callbacks[t]=[]),s.push(a),e.on(t,a,i)},stopListening(e,t,a){const n=this[g];let i=e&&o(e);const r=n&&i&&n[i],s=r&&t&&r.callbacks[t];if(n&&(!e||r)&&(!t||s))if(a)e.off(t,a);else if(s){for(;a=s.pop();)e.off(t,a);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(e,t);delete n[i]}else{for(i in n)this.stopListening(n[i].emitter);delete this[g]}},fire(e,...t){const a=e instanceof m.a?e:new m.a(this,e),n=a.name;let o=d(this,n);if(a.path.push(this),o){const e=[a,...t];o=Array.from(o);for(let t=0;t<o.length&&(o[t].callback.apply(o[t].context,e),a.off.called&&(delete a.off.called,this.off(n,o[t].callback,o[t].context)),!a.stop.called);t++);}if(this._delegations){const e=this._delegations.get(n),o=this._delegations.get('*');e&&c(e,a,t),o&&c(o,a,t)}return a.return},delegate(...e){return{to:(t,a)=>{this._delegations||(this._delegations=new Map);for(const n of e){const e=this._delegations.get(n);e?e.set(t,a):this._delegations.set(n,new Map([[t,a]]))}}}},stopDelegating(e,t){if(this._delegations)if(!e)this._delegations.clear();else if(!t)this._delegations.delete(e);else{const a=this._delegations.get(e);a&&a.delete(t)}}};t.c=h},function(e,t,a){'use strict';var n=a(159),i=a(13),r=o;t.a=function(e,t){if('function'!=typeof e)throw new TypeError('Expected a function');return t=r(void 0===t?e.length-1:Object(i.a)(t),0),function(){for(var a=arguments,o=-1,i=r(a.length-t,0),s=Array(i);++o<i;)s[o]=a[t+o];switch(t){case 0:return e.call(this,s);case 1:return e.call(this,a[0],s);case 2:return e.call(this,a[0],a[1],s);}var l=Array(t+1);for(o=-1;++o<t;)l[o]=a[o];return l[t]=s,Object(n.a)(e,this,l)}}},function(e,t,a){'use strict';var n=a(373),o=a(380),i=a(193),r=a(15),s=a(388);t.a=function(e){return'function'==typeof e?e:null==e?i.a:'object'==typeof e?Object(r.a)(e)?Object(o.a)(e[0],e[1]):Object(n.a)(e):Object(s.a)(e)}},function(e,t,a){'use strict';var n=a(12),o=a(4);class i{constructor(e){function t(){this.isEnabled=!1}this.editor=e,this.set('value',void 0),this.set('isEnabled',!1),this.decorate('execute'),this.listenTo(this.editor.document,'changesDone',()=>{this.refresh()}),this.on('execute',(e)=>{this.isEnabled||e.stop()},{priority:'high'}),this.listenTo(e,'change:isReadOnly',(e,a,n)=>{n?(this.on('change:isEnabled',t,{priority:'lowest'}),this.isEnabled=!1):(this.off('change:isEnabled',t),this.refresh())})}refresh(){this.isEnabled=!0}execute(){}destroy(){this.stopListening()}}t.a=i,Object(o.a)(i,n.a)},function(e,t,a){'use strict';function n(e){f in e||(Object.defineProperty(e,f,{value:new Map}),Object.defineProperty(e,h,{value:new Map}),Object.defineProperty(e,b,{value:new Map}))}function o(...e){const t=r(...e),a=Array.from(this._bindings.keys()),n=a.length;if(!t.callback&&1<t.to.length)throw new u.b('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');if(1<n&&t.callback)throw new u.b('observable-bind-to-extra-callback: Cannot bind multiple attributes and use a callback in one binding.');t.to.forEach((e)=>{if(e.attrs.length&&e.attrs.length!==n)throw new u.b('observable-bind-to-attrs-length: The number of attributes must match.');e.attrs.length||(e.attrs=this._bindAttrs)}),this._to=t.to,t.callback&&(this._bindings.get(a[0]).callback=t.callback),c(this._observable,this._to),l(this),this._bindAttrs.forEach((e)=>{d(this._observable,e)})}function i(e){return e.every((e)=>'string'==typeof e)}function r(...e){if(!e.length)throw new u.b('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');const t={to:[]};let n;return'function'==typeof e[e.length-1]&&(t.callback=e.pop()),e.forEach((e)=>{if('string'==typeof e)n.attrs.push(e);else if('object'==typeof e)n={observable:e,attrs:[]},t.to.push(n);else throw new u.b('observable-bind-to-parse-error: Invalid argument syntax in `to()`.')}),t}function s(e,t,a,n){const o=e[h],i=o.get(a),r=i||{};r[n]||(r[n]=new Set),r[n].add(t),i||o.set(a,r)}function l(e){let t;e._bindings.forEach((a,n)=>{e._to.forEach((o)=>{t=o.attrs[a.callback?0:e._bindAttrs.indexOf(n)],a.to.push([o.observable,t]),s(e._observable,a,o.observable,t)})})}function d(e,t){const a=e[b],n=a.get(t);let o;n.callback?o=n.callback.apply(e,n.to.map((e)=>e[0][e[1]])):(o=n.to[0],o=o[0][o[1]]),e.hasOwnProperty(t)?e[t]=o:e.set(t,o)}function c(e,t){t.forEach((t)=>{const a=e[h];let n;a.get(t.observable)||e.listenTo(t.observable,'change',(o,i)=>{n=a.get(t.observable)[i],n&&n.forEach((t)=>{d(e,t.attr)})})})}var m=a(8),u=a(0),p=a(45),g=a(17);const f=Symbol('attributes'),h=Symbol('boundObservables'),b=Symbol('boundAttributes'),_={set(e,t){if(Object(g.a)(e))return void Object.keys(e).forEach((t)=>{this.set(t,e[t])},this);n(this);const a=this[f];if(e in this&&!a.has(e))throw new u.b('observable-set-cannot-override: Cannot override an existing property.');Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get(){return a.get(e)},set(t){const n=a.get(e);n===t&&a.has(e)||(a.set(e,t),this.fire('change:'+e,e,t,n))}}),this[e]=t},bind(...e){if(!e.length||!i(e))throw new u.b('observable-bind-wrong-attrs: All attributes must be strings.');if(new Set(e).size!==e.length)throw new u.b('observable-bind-duplicate-attrs: Attributes must be unique.');n(this);const t=this[b];e.forEach((e)=>{if(t.has(e))throw new u.b('observable-bind-rebind: Cannot bind the same attribute more that once.')});const r=new Map;return e.forEach((e)=>{const n={attr:e,to:[]};t.set(e,n),r.set(e,n)}),{to:o,_observable:this,_bindAttrs:e,_to:[],_bindings:r}},unbind(...e){if(!(f in this))return;const t=this[b],a=this[h];if(e.length){if(!i(e))throw new u.b('observable-unbind-wrong-attrs: Attributes must be strings.');e.forEach((e)=>{const n=t.get(e);let o,i,r,s;n.to.forEach((e)=>{o=e[0],i=e[1],r=a.get(o),s=r[i],s.delete(n),s.size||delete r[i],Object.keys(r).length||(a.delete(o),this.stopListening(o,'change'))}),t.delete(e)})}else a.forEach((e,t)=>{this.stopListening(t,'change')}),a.clear(),t.clear()},decorate(e){const t=this[e];if(!t)throw new u.b('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.',{object:this,methodName:e});this.on(e,(e,a)=>{e.return=t.apply(this,a)}),this[e]=function(...t){return this.fire(e,t)}}};t.a=_,Object(p.a)(_,m.c)},function(e,t,a){'use strict';var n=a(295);t.a=function(e){var t=Object(n.a)(e),a=t%1;return t===t?a?t-a:t:0}},function(e,t,a){'use strict';var n=a(80),o=a(44);t.a=function(e){return Object(o.a)(e)&&Object(n.a)(e)}},function(e,t){'use strict';var a=Array.isArray;t.a=a},function(e,t,a){'use strict';var n=a(0);const o={error(e,t){console.error(Object(n.a)(e),t)},warn(e,t){console.warn(Object(n.a)(e),t)}};t.a=o},function(e,t){'use strict';t.a=function(e){var t=typeof e;return!!e&&('object'==t||'function'==t)}},function(e,t){'use strict';t.a=function(e){var t=e?e.length:0;return t?e[t-1]:void 0}},function(e,t,a){'use strict';var n=a(0),o=a(360);const i=new Map;t.a=class{static fromJSON(e,t){if(!i.has(e.__className))throw new n.b('delta-fromjson-no-deserializer: This delta has no defined deserializer',{name:e.__className});const a=i.get(e.__className),r=new a;for(const a of e.operations)r.addOperation(o.a.fromJSON(a,t));for(const a in e)'__className'!=a&&void 0===r[a]&&(r[a]=e[a]);return r}static register(e){i.set(e.className,e)}}},function(e,t,a){'use strict';t.b=function(e,t){if(o.prototype[e])throw new n.b('model-batch-register-taken: This batch method name is already taken.',{name:e});o.prototype[e]=t};var n=a(0);class o{constructor(e,t='default'){this.document=e,this.deltas=[],this.type=t}get baseVersion(){return 0<this.deltas.length?this.deltas[0].baseVersion:null}addDelta(e){return e.batch=this,this.deltas.push(e),e}*getOperations(){for(const e of this.deltas)yield*e.operations}}t.a=o},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(465),r=a(466),s=a(28);class l extends n.a{constructor(e){super(e),this.set('label'),this.set('keystroke'),this.set('tooltip'),this.set('tooltipPosition','s'),this.set('type','button'),this.set('isOn',!1),this.set('isEnabled',!0),this.set('isVisible',!0),this.set('withText',!1),this.set('icon'),this.set('tabindex',-1),this.bind('_tooltipString').to(this,'tooltip',this,'label',this,'keystroke',this._getTooltipString.bind(this)),this.tooltipView=this._createTooltipView();const t=this.bindTemplate;this.template=new o.a({tag:'button',attributes:{class:['ck-button',t.to('isEnabled',(e)=>e?'ck-enabled':'ck-disabled'),t.if('isVisible','ck-hidden',(e)=>!e),t.to('isOn',(e)=>e?'ck-on':'ck-off'),t.if('withText','ck-button_with-text')],type:t.to('type',(e)=>e?e:'button'),tabindex:t.to('tabindex')},children:[{tag:'span',attributes:{class:['ck-button__label']},children:[{text:t.to('label')}]},this.tooltipView],on:{mousedown:t.to((e)=>{e.preventDefault()}),click:t.to((e)=>{this.isEnabled?this.fire('execute'):e.preventDefault()})}})}init(){if(this.icon){const e=this.iconView=new i.a;e.bind('content').to(this,'icon'),this.element.insertBefore(e.element,this.element.firstChild),this.addChildren(e)}super.init()}focus(){this.element.focus()}_createTooltipView(){const e=new r.a;return e.bind('text').to(this,'_tooltipString'),e.bind('position').to(this,'tooltipPosition'),e}_getTooltipString(e,t,a){return e?'string'==typeof e?e:(a&&(a=Object(s.b)(a)),e instanceof Function?e(t,a):`${t}${a?` (${a})`:''}`):''}}t.a=l},function(e,t,a){'use strict';var n=a(67),o=a(54),i=a(0),r=a(91);class s{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is('text')?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is('text')?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const e=this.parent.is('text')?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof r.a);)if(e.parent)e=e.parent;else return null;return e}getShiftedBy(e){const t=s.createFromPosition(this),a=t.offset+e;return t.offset=0>a?0:a,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const a=new n.a(t);return a.skip(e),a.position}getAncestors(){return this.parent.is('documentFragment')?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),a=e.getAncestors();let n=0;for(;t[n]==a[n]&&t[n];)n++;return 0==n?null:t[n-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return'before'==this.compareWith(e)}isAfter(e){return'after'==this.compareWith(e)}compareWith(e){if(this.isEqual(e))return'same';if(this.parent===e.parent)return 0>this.offset-e.offset?'before':'after';const t=this.getAncestors(),a=e.getAncestors(),n=Object(o.a)(t,a);let i;switch(n){case 0:return'different';case'prefix':i=t.length-1;break;case'extension':i=a.length-1;break;default:i=n-1;}const r=t[i],s=t[i+1],l=a[i+1];if(r===this.parent){const e=this.offset-l.index;return 0>=e?'before':'after'}if(r===e.parent){const t=s.index-e.offset;return 0>t?'before':'after'}const d=s.index-l.index;return 0>d?'before':'after'}static createAt(e,t){if(e instanceof s)return this.createFromPosition(e);else{const a=e;if('end'==t)t=a.is('text')?a.data.length:a.childCount;else{if('before'==t)return this.createBefore(a);if('after'==t)return this.createAfter(a);t||(t=0)}return new s(a,t)}}static createAfter(e){if(e.is('textProxy'))return new s(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new i.b('view-position-after-root: You can not make position after root.',{root:e});return new s(e.parent,e.index+1)}static createBefore(e){if(e.is('textProxy'))return new s(e.textNode,e.offsetInText);if(!e.parent)throw new i.b('view-position-before-root: You can not make position before root.',{root:e});return new s(e.parent,e.index)}static createFromPosition(e){return new this(e.parent,e.offset)}}t.a=s},function(e,t,a){'use strict';function n(e,t){t=i(t);const a=t.reduce((e,t)=>e+t.offsetSize,0),n=e.parent;s(e);const o=e.index;return n.insertChildren(o,t),r(n,o+t.length),r(n,o),new u.a(e,e.getShiftedBy(a))}function o(e){if(!e.isFlat)throw new f.b('model-writer-remove-range-not-flat: Trying to remove a range which starts and ends in different element.');const t=e.start.parent;s(e.start),s(e.end);const a=t.removeChildren(e.start.index,e.end.index-e.start.index);return r(t,e.start.index),a}function i(e){const t=[];e instanceof Array||(e=[e]);for(let a=0;a<e.length;a++)if('string'==typeof e[a])t.push(new c.a(e[a]));else if(e[a]instanceof m.a)t.push(new c.a(e[a].data,e[a].getAttributes()));else if(e[a]instanceof p.a||e[a]instanceof g.a)for(const n of e[a])t.push(n);else e[a]instanceof d.a&&t.push(e[a]);for(let a=1;a<t.length;a++){const e=t[a],n=t[a-1];e instanceof c.a&&n instanceof c.a&&l(e,n)&&(t.splice(a-1,2,new c.a(n.data+e.data,n.getAttributes())),a--)}return t}function r(e,t){const a=e.getChild(t-1),n=e.getChild(t);if(a&&n&&a.is('text')&&n.is('text')&&l(a,n)){const o=new c.a(a.data+n.data,a.getAttributes());e.removeChildren(t-1,2),e.insertChildren(t-1,o)}}function s(e){const t=e.textNode,a=e.parent;if(t){const n=e.offset-t.startOffset,o=t.index;a.removeChildren(o,1);const i=new c.a(t.data.substr(0,n),t.getAttributes()),r=new c.a(t.data.substr(n),t.getAttributes());a.insertChildren(o,[i,r])}}function l(e,t){const a=e.getAttributes(),n=t.getAttributes();for(const o of a){if(o[1]!==t.getAttribute(o[0]))return!1;n.next()}return n.next().done}t.b=n,t.d=o,t.c=i;var d=a(65),c=a(26),m=a(66),u=a(3),p=a(39),g=a(83),f=a(0);t.a={insert:n,remove:o,move:function(e,t){if(!e.isFlat)throw new f.b('model-writer-move-range-not-flat: Trying to move a range which starts and ends in different element.');const a=this.remove(e);return t=t._getTransformedByDeletion(e.start,e.end.offset-e.start.offset),this.insert(t,a)},setAttribute:function(e,t,a){s(e.start),s(e.end);for(const n of e.getItems()){const e=n.is('textProxy')?n.textNode:n;null===a?e.removeAttribute(t):e.setAttribute(t,a),r(e.parent,e.index)}r(e.end.parent,e.end.index)},removeAttribute:function(e,t){this.setAttribute(e,t,null)},normalizeNodes:i}},function(e,t,a){'use strict';var n=a(68),o=a(19);class i{constructor(){this.batch=null,this.operations=[]}get baseVersion(){return 0<this.operations.length?this.operations[0].baseVersion:null}set baseVersion(e){for(const t of this.operations)t.baseVersion=e++}get _reverseDeltaClass(){return i}addOperation(e){return e.delta=this,this.operations.push(e),e}clone(){const e=new this.constructor;for(const t of this.operations)e.addOperation(t.clone());return e}getReversed(){const e=new this._reverseDeltaClass;for(const t of this.operations)e.addOperation(t.getReversed());e.operations.reverse();for(let t=0;t<e.operations.length;t++)e.operations[t].baseVersion=this.operations[this.operations.length-1].baseVersion+t+1;return e}toJSON(){const e=Object(n.a)(this);return e.__className=this.constructor.className,delete e.batch,e}static get className(){return'engine.model.delta.Delta'}}t.a=i,o.a.register(i)},function(e,t,a){'use strict';function n(e,t,a,r,s){var l=-1,d=e.length;for(a||(a=i.a),s||(s=[]);++l<d;){var c=e[l];0<t&&a(c)?1<t?n(c,t-1,a,r,s):Object(o.a)(s,c):!r&&(s[s.length]=c)}return s}var o=a(89),i=a(372);t.a=n},function(e,t,a){'use strict';var n=a(65);class o extends n.a{constructor(e,t){super(t),this.data=e||''}get offsetSize(){return this.data.length}is(e){return'text'==e}clone(){return new o(this.data,this.getAttributes())}toJSON(){const e=super.toJSON();return e.data=this.data,e}static fromJSON(e){return new o(e.data,e.attributes)}}t.a=o},function(e,t,a){'use strict';function n(e,t){let a=null,n=0,o=0,r=null;if(e.clear(),''!==t){';'!=t.charAt(t.length-1)&&(t+=';');for(let s=0;s<t.length;s++){const i=t.charAt(s);if(null==a)switch(i){case':':r||(r=t.substr(n,s-n),o=s+1);break;case'"':case'\'':a=i;break;case';':const l=t.substr(o,s-o);r&&e.set(r.trim(),l.trim()),r=null,n=s+1;}else i===a&&(a=null)}}}function o(e,t){const a=t.split(/\s+/);e.clear(),a.forEach((t)=>e.add(t))}function i(e){return'string'==typeof e?[new s.a(e)]:(Object(d.a)(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new s.a(e):e))}var r=a(84),s=a(35),l=a(165),d=a(34),c=a(77),m=a(176);class u extends r.a{constructor(e,t,a){if(super(),this.name=e,this._attrs=Object(c.a)(t)?Object(l.a)(t):new Map(t),this._children=[],a&&this.insertChildren(0,a),this._classes=new Set,this._attrs.has('class')){const e=this._attrs.get('class');o(this._classes,e),this._attrs.delete('class')}this._styles=new Map,this._attrs.has('style')&&(n(this._styles,this._attrs.get('style')),this._attrs.delete('style')),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(e,t=null){return t?'element'==e&&t==this.name:'element'==e||e==this.name}clone(e=!1){const t=[];if(e)for(const a of this.getChildren())t.push(a.clone(e));const a=new this.constructor(this.name,this._attrs,t);return a._classes=new Set(this._classes),a._styles=new Map(this._styles),a._customProperties=new Map(this._customProperties),a.getFillerOffset=this.getFillerOffset,a}appendChildren(e){return this.insertChildren(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){0<this._classes.size&&(yield'class'),0<this._styles.size&&(yield'style');for(const e of this._attrs.keys())yield e}*getAttributes(){yield*this._attrs.entries(),0<this._classes.size&&(yield['class',this.getAttribute('class')]),0<this._styles.size&&(yield['style',this.getAttribute('style')])}getAttribute(e){if('class'==e)return 0<this._classes.size?[...this._classes].join(' '):void 0;if('style'==e){if(0<this._styles.size){let e='';for(const[t,a]of this._styles)e+=`${t}:${a};`;return e}return}return this._attrs.get(e)}hasAttribute(e){return'class'==e?0<this._classes.size:'style'==e?0<this._styles.size:this._attrs.has(e)}setAttribute(e,t){this._fireChange('attributes',this),'class'==e?o(this._classes,t):'style'==e?n(this._styles,t):this._attrs.set(e,t)}insertChildren(e,t){this._fireChange('children',this);let a=0;t=i(t);for(const n of t)null!==n.parent&&n.remove(),n.parent=this,this._children.splice(e,0,n),e++,a++;return a}removeAttribute(e){return this._fireChange('attributes',this),'class'==e?!!(0<this._classes.size)&&(this._classes.clear(),!0):'style'==e?!!(0<this._styles.size)&&(this._styles.clear(),!0):this._attrs.delete(e)}removeChildren(e,t=1){this._fireChange('children',this);for(let a=e;a<e+t;a++)this._children[a].parent=null;return this._children.splice(e,t)}isSimilar(e){if(!(e instanceof u))return!1;if(this===e)return!0;if(this.name!=e.name)return!1;if(this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,a]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==a)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const[t,a]of this._styles)if(!e._styles.has(t)||e._styles.get(t)!==a)return!1;return!0}addClass(...e){this._fireChange('attributes',this),e.forEach((e)=>this._classes.add(e))}removeClass(...e){this._fireChange('attributes',this),e.forEach((e)=>this._classes.delete(e))}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}setStyle(e,t){if(this._fireChange('attributes',this),Object(c.a)(e)){const t=Object.keys(e);for(const a of t)this._styles.set(a,e[a])}else this._styles.set(e,t)}getStyle(e){return this._styles.get(e)}getStyleNames(){return this._styles.keys()}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}removeStyle(...e){this._fireChange('attributes',this),e.forEach((e)=>this._styles.delete(e))}findAncestor(...e){const t=new m.a(...e);for(let a=this.parent;a;){if(t.match(a))return a;a=a.parent}return null}setCustomProperty(e,t){this._customProperties.set(e,t)}getCustomProperty(e){return this._customProperties.get(e)}removeCustomProperty(e){return this._customProperties.delete(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(','),t=Array.from(this._styles).map((e)=>`${e[0]}:${e[1]}`).sort().join(';'),a=Array.from(this._attrs).map((e)=>`${e[0]}="${e[1]}"`).sort().join(' ');return this.name+(''==e?'':` class="${e}"`)+(''==t?'':` style="${t}"`)+(''==a?'':` ${a}`)}}t.a=u},function(e,t,a){'use strict';function n(e){let t;if('string'!=typeof e)t=e.keyCode+(e.altKey?s.alt:0)+(e.ctrlKey?s.ctrl:0)+(e.shiftKey?s.shift:0);else if(t=s[e.toLowerCase()],!t)throw new i.b('keyboard-unknown-key: Unknown key name.',{key:e});return t}function o(e){return e.split(/\s*\+\s*/)}t.a=n,t.d=function(e){return'string'==typeof e&&(e=o(e)),e.map((e)=>'string'==typeof e?n(e):e).reduce((e,t)=>t+e,0)},t.b=function(e){const t=o(e);return r.a.mac&&'ctrl'==t[0].toLowerCase()?'\u2318'+(t[1]||''):e};var i=a(0),r=a(350);const s=function(){const e={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let t=65;90>=t;t++){const a=String.fromCharCode(t);e[a.toLowerCase()]=t}for(let t=48;57>=t;t++)e[t-48]=t;for(let t=112;123>=t;t++)e['f'+(t-111)]=t;return e}();t.c=s},function(e,t,a){'use strict';var n=a(40),o=a(1),i=a(3),r=a(0),s=a(54),l=a(23);class d extends n.a{constructor(e,t,a,n){super(n),this.sourcePosition=o.a.createFromPosition(e),this.howMany=t,this.targetPosition=o.a.createFromPosition(a),this.isSticky=!1}get type(){return'move'}clone(){const e=new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion);return e.isSticky=this.isSticky,e}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany),t=new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1);return t.isSticky=this.isSticky,t}_execute(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,a=this.sourcePosition.offset,n=this.targetPosition.offset;if(!e||!t)throw new r.b('move-operation-position-invalid: Source position or target position is invalid.');else if(a+this.howMany>e.maxOffset)throw new r.b('move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.');else if(e===t&&a<n&&n<a+this.howMany)throw new r.b('move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.');else if(this.sourcePosition.root==this.targetPosition.root&&'prefix'==Object(s.a)(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const e=this.sourcePosition.path.length-1;if(this.targetPosition.path[e]>=a&&this.targetPosition.path[e]<a+this.howMany)throw new r.b('move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.')}const o=l.a.move(i.a.createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition);return{sourcePosition:this.sourcePosition,range:o}}static get className(){return'engine.model.operation.MoveOperation'}static fromJSON(e,t){const a=o.a.fromJSON(e.sourcePosition,t),n=o.a.fromJSON(e.targetPosition,t),i=new this(a,e.howMany,n,e.baseVersion);return e.isSticky&&(i.isSticky=!0),i}}t.a=d},function(e,t){'use strict';t.a=function(e,t){for(var a=-1,n=e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}},function(e){function t(e,t){var n=e[1]||'',o=e[3];if(!o)return n;if(t&&'function'==typeof btoa){var i=a(o),r=o.sources.map(function(e){return'/*# sourceURL='+o.sourceRoot+e+' */'});return[n].concat(r).concat([i]).join('\n')}return[n].join('\n')}function a(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+t)+' */'}e.exports=function(e){var a=[];return a.toString=function(){return this.map(function(a){var n=t(a,e);return a[2]?'@media '+a[2]+'{'+n+'}':n}).join('')},a.i=function(e,t){'string'==typeof e&&(e=[[null,e,'']]);for(var n={},o=0,i;o<this.length;o++)i=this[o][0],'number'==typeof i&&(n[i]=!0);for(o=0;o<e.length;o++){var r=e[o];'number'==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]='('+r[2]+') and ('+t+')'),a.push(r))}},a}},function(e,t,a){function n(e,t){for(var a=0;a<e.length;a++){var n=e[a],o=g[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],t))}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(c(n.parts[i],t));g[n.id]={id:n.id,refs:1,parts:r}}}}function o(e,t){for(var a=[],n={},o=0;o<e.length;o++){var i=e[o],r=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],d=i[3],c={css:s,media:l,sourceMap:d};n[r]?n[r].parts.push(c):a.push(n[r]={id:r,parts:[c]})}return a}function i(e,t){var a=h(e.insertInto);if(!a)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var n=k[k.length-1];if('top'===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),k.push(t);else if('bottom'===e.insertAt)a.appendChild(t);else throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.')}function r(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=k.indexOf(e);0<=t&&k.splice(t,1)}function s(e){var t=document.createElement('style');return e.attrs.type='text/css',d(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement('link');return e.attrs.type='text/css',e.attrs.rel='stylesheet',d(t,e.attrs),i(e,t),t}function d(e,t){Object.keys(t).forEach(function(a){e.setAttribute(a,t[a])})}function c(e,t){var a,n,o,i;if(t.transform&&e.css)if(i=t.transform(e.css),i)e.css=i;else return function(){};if(t.singleton){var d=_++;a=b||(b=s(t)),n=m.bind(null,a,d,!1),o=m.bind(null,a,d,!0)}else e.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(a=l(t),n=p.bind(null,a,t),o=function(){r(a),a.href&&URL.revokeObjectURL(a.href)}):(a=s(t),n=u.bind(null,a),o=function(){r(a)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function m(e,t,a,n){var o=a?'':n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function u(e,t){var a=t.css,n=t.media;if(n&&e.setAttribute('media',n),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function p(e,t,a){var n=a.css,o=a.sourceMap,i=t.convertToAbsoluteUrls===void 0&&o;(t.convertToAbsoluteUrls||i)&&(n=w(n)),o&&(n+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+' */');var r=new Blob([n],{type:'text/css'}),s=e.href;e.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var g={},f=function(e){var t;return function(){return'undefined'==typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var t={};return function(a){return'undefined'==typeof t[a]&&(t[a]=e.call(this,a)),t[a]}}(function(e){return document.querySelector(e)}),b=null,_=0,k=[],w=a(443);e.exports=function(e,t){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');t=t||{},t.attrs='object'==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=f()),t.insertInto||(t.insertInto='head'),t.insertAt||(t.insertAt='bottom');var a=o(e,t);return n(a,t),function(e){for(var r=[],s=0;s<a.length;s++){var i=a[s],l=g[i.id];l.refs--,r.push(l)}if(e){var d=o(e,t);n(d,t)}for(var s=0,l;s<r.length;s++)if(l=r[s],0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}};var y=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join('\n')}}()},function(e,t,a){'use strict';(function(e,n){var o=a(300),i={function:!0,object:!0},r=i[typeof exports]&&exports&&!exports.nodeType?exports:void 0,s=i[typeof e]&&e&&!e.nodeType?e:void 0,l=Object(o.a)(r&&s&&'object'==typeof n&&n),d=Object(o.a)(i[typeof self]&&self),c=Object(o.a)(i[typeof window]&&window),m=Object(o.a)(i[typeof this]&&this),u=l||c!==(m&&m.window)&&c||d||m||Function('return this')();t.a=u}).call(t,a(161)(e),a(299))},function(e,t){'use strict';t.a=function(e){return!!(e&&e[Symbol.iterator])}},function(e,t,a){'use strict';var n=a(84);class o extends n.a{constructor(e){super(),this._data=e}clone(){return new o(this.data)}is(e){return'text'==e}get data(){return this._data}set data(e){this._fireChange('text',this),this._data=e}isSimilar(e){return!!(e instanceof o)&&(this===e||this.data===e.data)}}t.a=o},function(e,t,a){'use strict';function n(e){return!!e.getCustomProperty(r)&&Object(o.c)(e)}t.c=function(e,t){return e.setCustomProperty(r,!0),Object(o.d)(e,{label:function(){const a=e.getChild(0),n=a.getAttribute('alt');return n?`${n} ${t}`:t}})},t.b=function(e){const t=e.getSelectedElement();return!!(t&&n(t))},t.a=function(e){return e instanceof i.a&&'image'==e.name};var o=a(157),i=a(5);const r=Symbol('isImage')},function(e,t){'use strict';var a=/^(?:0|[1-9]\d*)$/;t.a=function(e,t){return t=null==t?9007199254740991:t,!!t&&('number'==typeof e||a.test(e))&&-1<e&&0==e%1&&e<t}},function(e,t,a){'use strict';function n(e){return e.item.is('attributeElement')||e.item.is('uiElement')}var o=a(22),i=a(67);class r{constructor(e,t=null){this.start=o.a.createFromPosition(e),this.end=t?o.a.createFromPosition(t):o.a.createFromPosition(e)}*[Symbol.iterator](){yield*new i.a({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(n,{direction:'backward'}),t=this.end.getLastMatchingPosition(n);return e.parent.is('text')&&e.isAtStart&&(e=o.a.createBefore(e.parent)),t.parent.is('text')&&t.isAtEnd&&(t=o.a.createAfter(t.parent)),new r(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(n);if(e.isAfter(this.end)||e.isEqual(this.end))return new r(e,e);let t=this.end.getLastMatchingPosition(n,{direction:'backward'});const a=e.nodeAfter,i=t.nodeBefore;return a&&a.is('text')&&(e=new o.a(a,0)),i&&i.is('text')&&(t=new o.a(i,i.data.length)),new r(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const a=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return a&&n}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new r(this.start,e.start)),this.containsPosition(e.end)&&t.push(new r(e.end,this.end))):t.push(r.createFromRange(this)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,a=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(a=e.end),new r(t,a)}return null}getWalker(e={}){return e.boundaries=this,new i.a(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new i.a(e);for(const a of t)yield a.item}*getPositions(e={}){e.boundaries=this;const t=new i.a(e);yield t.position;for(const a of t)yield a.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static createFromParentsAndOffsets(e,t,a,n){return new this(new o.a(e,t),new o.a(a,n))}static createFromRange(e){return new this(e.start,e.end)}static createFromPositionAndShift(e,t){const a=e,n=e.getShiftedBy(t);return 0<t?new this(a,n):new this(n,a)}static createIn(e){return this.createFromParentsAndOffsets(e,0,e,e.childCount)}static createOn(e){return this.createFromPositionAndShift(o.a.createBefore(e),1)}static createCollapsedAt(e,t){const a=o.a.createAt(e,t),n=o.a.createFromPosition(a);return new r(a,n)}}t.a=r},function(e,t,a){'use strict';function n(e){return'string'==typeof e?[new r.a(e)]:(Object(s.a)(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new r.a(e):e))}var o=a(83),i=a(5),r=a(26),s=a(34);class l{constructor(e){this.markers=new Map,this._children=new o.a,e&&this.insertChildren(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return'documentFragment'==e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const a of e)t=t.getChild(t.offsetToIndex(a));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}appendChildren(e){this.insertChildren(this.childCount,e)}insertChildren(e,t){t=n(t);for(const a of t)null!==a.parent&&a.remove(),a.parent=this;this._children.insertNodes(e,t)}removeChildren(e,t=1){const a=this._children.removeNodes(e,t);for(const n of a)n.parent=null;return a}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const a of e)a.name?t.push(i.a.fromJSON(a)):t.push(r.a.fromJSON(a));return new l(t)}}t.a=l},function(e,t,a){'use strict';var n=a(68);class o{constructor(e){this.baseVersion=e}toJSON(){const e=Object(n.a)(this,!0);return e.__className=this.constructor.className,delete e.delta,e}static get className(){return'engine.model.operation.Operation'}static fromJSON(e){return new this(e.baseVersion)}}t.a=o},function(e,t,a){'use strict';var n=a(29),o=a(98);class i extends n.a{get type(){return'remove'}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new o.a(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}static get className(){return'engine.model.operation.RemoveOperation'}}t.a=i},function(e,t){'use strict';t.a=function(e,t,a){var n=-1,o=e.length;0>t&&(t=-t>o?0:o+t),a=a>o?o:a,0>a&&(a+=o),o=t>a?0:a-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}},function(e,t,a){'use strict';function n(e,t,a,o){if(Object(d.a)(e)){for(const i of e)n(i,t,a,o);return}const i=Array.from(e.getAttributeKeys());i.push(t.key);const r={name:e.name||'$text',attributes:i,inside:a.context};o.schema.check(r)&&e.setAttribute(t.key,t.value)}t.a=function(){return new c};var o=a(176),i=a(5),r=a(1),s=a(23),l=a(0),d=a(34);class c{constructor(){this._dispatchers=[],this._from=[]}for(...e){return this._dispatchers=e,this}fromElement(e){return this.from({name:e})}fromAttribute(e,t=/.*/){const a={};'style'===e||'class'===e?a[e]=t:(a.attribute={},a.attribute[e]=t);const n=new o.a(a);return this._from.push({matcher:n,consume:!1,priority:null,attributeKey:e}),this}from(e){return e instanceof o.a||(e=new o.a(e)),this._from.push({matcher:e,consume:!1,priority:null}),this}consuming(e){const t=this._from[this._from.length-1];return t.consume=e,this}withPriority(e){const t=this._from[this._from.length-1];return t.priority=e,this}toElement(e){this._setCallback(function(t){return(a,n,o,l)=>{const d=t.matcher.matchAll(n.input);if(d)for(const a of d){const d=e instanceof Function?e(n.input):new i.a(e);if(!d)continue;const c=Array.from(d.getAttributeKeys());if(!l.schema.check({name:d.name,attributes:c,inside:n.context}))continue;if(!o.consume(n.input,t.consume||a.match))continue;n.context.push(d);const m=l.convertChildren(n.input,o,n),u=r.a.createAt(d,'end');s.a.insert(u,m),n.context.pop(),n.output=d;break}}},'normal')}toAttribute(e,t){this._setCallback(function(a){return(o,i,r,s)=>{const l=a.matcher.matchAll(i.input);if(l)for(const o of l){if(!r.consume(i.input,a.consume||o.match))continue;i.output||(i.output=s.convertChildren(i.input,r,i));let l;if(!(e instanceof Function))l={key:e,value:t?t:i.input.getAttribute(a.attributeKey)};else if(l=e(i.input),!l)return;n(i.output,l,i,s);break}}},'low')}toMarker(e){this._setCallback(function(t){return(a,n,o)=>{const r=t.matcher.matchAll(n.input);if(!r)return;let s;if(s=e instanceof Function?e(n.input):new i.a('$marker',{"data-name":n.input.getAttribute('data-name')}),'$marker'!=s.name||'string'!=typeof s.getAttribute('data-name'))throw new l.b('build-view-converter-invalid-marker: Invalid model element to mark marker range.');for(const e of r)if(o.consume(n.input,t.consume||e.match)){n.output=s;break}}},'normal')}_setCallback(e,t){for(const a of this._from){const n=a.matcher.getElementName(),o=n?'element:'+n:'element',i=e(a),r=null===a.priority?t:a.priority;for(const e of this._dispatchers)e.on(o,i,{priority:r})}}}},function(e,t){'use strict';t.a=function(e){return!!e&&'object'==typeof e}},function(e,t,a){'use strict';var n=a(292);a.d(t,'a',function(){return n.a})},function(e,t,a){'use strict';var n=a(44),o=Object.prototype,i=o.toString;t.a=function(e){return'symbol'==typeof e||Object(n.a)(e)&&i.call(e)=='[object Symbol]'}},function(e,t,a){'use strict';function n(){for(const e of this.getChildren())if(!e.is('uiElement'))return null;return this.childCount}var o=a(27);class i extends o.a{constructor(e,t,a){super(e,t,a),this.getFillerOffset=n}is(e,t=null){return t?'containerElement'==e&&t==this.name||super.is(e,t):'containerElement'==e||super.is(e)}}t.a=i},function(e,t,a){'use strict';var n=a(40),o=a(1),i=a(83),r=a(41),s=a(23),l=a(26),d=a(5);class c extends n.a{constructor(e,t,a){super(a),this.position=o.a.createFromPosition(e),this.nodes=new i.a(Object(s.c)(t))}get type(){return'insert'}clone(){const e=new i.a([...this.nodes].map((e)=>e.clone(!0)));return new c(this.position,e,this.baseVersion)}getReversed(){const e=this.position.root.document.graveyard,t=new o.a(e,[0]);return new r.a(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_execute(){const e=this.nodes;this.nodes=new i.a([...e].map((e)=>e.clone(!0)));const t=Object(s.b)(this.position,e);return{range:t}}static get className(){return'engine.model.operation.InsertOperation'}static fromJSON(e,t){const a=[];for(const n of e.nodes)n.name?a.push(d.a.fromJSON(n)):a.push(l.a.fromJSON(n));return new c(o.a.fromJSON(e.position,t),a,e.baseVersion)}}t.a=c},function(e,t,a){'use strict';var n=a(97),o=a(135),i=a(137),r=a(139),s=a(398),l=a(90);t.a=function(e,t,a){var d=-1,c=o.a,m=e.length,u=!0,p=[],g=p;if(a)u=!1,c=i.a;else if(m>=200){var f=t?null:Object(s.a)(e);if(f)return Object(l.a)(f);u=!1,c=r.a,g=new n.a}else g=t?[]:p;outer:for(;++d<m;){var h=e[d],b=t?t(h):h;if(h=a||0!==h?h:0,u&&b===b){for(var _=g.length;_--;)if(g[_]===b)continue outer;t&&g.push(b),p.push(h)}else c(g,b,a)||(g!==p&&g.push(b),p.push(h))}return p}},function(e,t,a){'use strict';var n=a(110),o=a(28);t.a=class{constructor(){this._listener=Object.create(n.a)}listenTo(e){this._listener.listenTo(e,'keydown',(e,t)=>{this._listener.fire('_keydown:'+Object(o.a)(t),t)})}set(e,t,a={}){const n=Object(o.d)(e),i=a.priority;this._listener.listenTo(this._listener,'_keydown:'+n,(e,a)=>{t(a,()=>{a.preventDefault(),a.stopPropagation(),e.stop()}),e.return=!0},{priority:i})}press(e){return!!this._listener.fire('_keydown:'+Object(o.a)(e),e)}destroy(){this._listener.stopListening()}}},function(e,t,a){'use strict';t.a=function(){return new d};var n=a(70),o=a(260),i=a(92),r=a(47),s=a(94),l=a(0);class d{constructor(){this._dispatchers=[],this._from=null}for(...e){return this._dispatchers=e,this}fromElement(e){return this._from={type:'element',name:e,priority:null},this}fromAttribute(e){return this._from={type:'attribute',key:e,priority:null},this}fromMarker(e){return this._from={type:'marker',name:e,priority:null},this}withPriority(e){return this._from.priority=e,this}toElement(e){const t=null===this._from.priority?'normal':this._from.priority;for(const a of this._dispatchers)if('element'==this._from.type)e='string'==typeof e?new r.a(e):e,a.on('insert:'+this._from.name,Object(n.e)(e),{priority:t});else if('attribute'==this._from.type)e='string'==typeof e?new i.a(e):e,a.on('addAttribute:'+this._from.key,Object(n.m)(e),{priority:t}),a.on('changeAttribute:'+this._from.key,Object(n.m)(e),{priority:t}),a.on('removeAttribute:'+this._from.key,Object(n.l)(e),{priority:t}),a.on('selectionAttribute:'+this._from.key,Object(o.e)(e),{priority:t});else{const t=null===this._from.priority?'normal':this._from.priority;e='string'==typeof e?new s.a(e):e,a.on('addMarker:'+this._from.name,Object(n.g)(e),{priority:t}),a.on('removeMarker:'+this._from.name,Object(n.j)(e),{priority:t})}}toHighlight(e){const t=null===this._from.priority?'normal':this._from.priority;if('marker'!=this._from.type)throw new l.b('build-model-converter-non-marker-to-highlight: Conversion to a highlight is supported only from model markers.');for(const a of this._dispatchers)a.on('addMarker:'+this._from.name,Object(n.d)(e),{priority:t}),a.on('addMarker:'+this._from.name,Object(n.c)(e),{priority:t}),a.on('removeMarker:'+this._from.name,Object(n.d)(e),{priority:t}),a.on('removeMarker:'+this._from.name,Object(n.c)(e),{priority:t}),a.on('selectionMarker:'+this._from.name,Object(o.f)(e),{priority:t})}toAttribute(e,t){if('attribute'!=this._from.type)throw new l.b('build-model-converter-non-attribute-to-attribute: To-attribute conversion is supported only from model attributes.');let a=e?'string'==typeof e?t?function(){return{key:e,value:t}}:function(t){return{key:e,value:t}}:e:void 0;for(const o of this._dispatchers){const e={priority:this._from.priority||'normal'};o.on('addAttribute:'+this._from.key,Object(n.k)(a),e),o.on('changeAttribute:'+this._from.key,Object(n.k)(a),e),o.on('removeAttribute:'+this._from.key,Object(n.i)(a),e)}}}},function(e,t){'use strict';t.a=function(e,t){return e===t||e!==e&&t!==t}},function(e,t,a){'use strict';function n(e,t,a,n,o){return{done:!1,value:{type:e,item:t,previousPosition:a,nextPosition:n,length:o}}}var o=a(26),i=a(66),r=a(5),s=a(1),l=a(0);class d{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new l.b('model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');const t=e.direction||'forward';if('forward'!=t&&'backward'!=t)throw new l.b('model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.',{direction:t});this.direction=t,this.boundaries=e.boundaries||null,this.position=e.startPosition?s.a.createFromPosition(e.startPosition):s.a.createFromPosition(this.boundaries['backward'==this.direction?'end':'start']),this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,a,n,o;do n=this.position,o=this._visitedParent,({done:t,value:a}=this.next());while(!t&&e(a));t||(this.position=n,this._visitedParent=o)}next(){return'forward'==this.direction?this._next():this._previous()}_next(){const e=this.position,t=s.a.createFromPosition(this.position),a=this._visitedParent;if(null===a.parent&&t.offset===a.maxOffset)return{done:!0};if(a===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const l=t.textNode?t.textNode:t.nodeAfter;if(l instanceof r.a)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=l),this.position=t,n('elementStart',l,e,t,1);if(l instanceof o.a){let o;if(this.singleCharacters)o=1;else{let e=l.endOffset;this._boundaryEndParent==a&&this.boundaries.end.offset<e&&(e=this.boundaries.end.offset),o=e-t.offset}const r=t.offset-l.startOffset,s=new i.a(l,r,o);return t.offset+=o,this.position=t,n('text',s,e,t,o)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=a.parent,this.ignoreElementEnd?this._next():n('elementEnd',a,e,t)}_previous(){const e=this.position,t=s.a.createFromPosition(this.position),a=this._visitedParent;if(null===a.parent&&0===t.offset)return{done:!0};if(a==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const l=t.textNode?t.textNode:t.nodeBefore;if(l instanceof r.a)return t.offset--,this.shallow?(this.position=t,n('elementStart',l,e,t,1)):(t.path.push(l.maxOffset),this.position=t,this._visitedParent=l,this.ignoreElementEnd?this._previous():n('elementEnd',l,e,t));if(l instanceof o.a){let o;if(this.singleCharacters)o=1;else{let e=l.startOffset;this._boundaryStartParent==a&&this.boundaries.start.offset>e&&(e=this.boundaries.start.offset),o=t.offset-e}const r=t.offset-l.startOffset,s=new i.a(l,r-o,o);return t.offset-=o,this.position=t,n('text',s,e,t,o)}return t.path.pop(),this.position=t,this._visitedParent=a.parent,n('elementStart',a,e,t,1)}}t.a=d},function(e,t){'use strict';t.a=function(e,t){const a=n(e.length,t.length);for(let n=0;n<a;n++)if(e[n]!=t[n])return n;return e.length==t.length?'same':e.length<t.length?'prefix':'extension'}},function(e,t,a){'use strict';var n=a(167);t.a=function(e,t){var a=e[t];return Object(n.a)(a)?a:void 0}},function(e,t,a){'use strict';var n=a(15),o=a(46),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;t.a=function(e,t){if(Object(n.a)(e))return!1;var a=typeof e;return'number'==a||'symbol'==a||'boolean'==a||null==e||Object(o.a)(e)||r.test(e)||!i.test(e)||null!=t&&e in Object(t)}},function(e,t,a){'use strict';var n=a(46);t.a=function(e){if('string'==typeof e||Object(n.a)(e))return e;var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t}},function(e,t,a){'use strict';function n(e,t){return!t.has(e)&&(t.add(e),e.document.schema.itemExtends(e.name,'$block')&&e.parent)}function o(e,t){const a=e.parent.getAncestors({parentFirst:!0,includeSelf:!0}),o=a.find((e)=>n(e,t));return a.forEach((e)=>t.add(e)),o}var i=a(1),r=a(5),s=a(3),l=a(8),d=a(0),c=a(4),m=a(121),u=a(405),p=a(34);class g{constructor(e,t){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setRanges(e,t)}get anchor(){if(0<this._ranges.length){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(0<this._ranges.length){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){const e=this._ranges.length;return!(1!==e)&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let a=!1;for(const n of e._ranges)if(t.isEqual(n)){a=!0;break}if(!a)return!1}return!0}*getRanges(){for(const e of this._ranges)yield s.a.createFromRange(e)}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?s.a.createFromRange(e):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?s.a.createFromRange(e):null}getFirstPosition(){const e=this.getFirstRange();return e?i.a.createFromPosition(e.start):null}getLastPosition(){const e=this.getLastRange();return e?i.a.createFromPosition(e.end):null}addRange(e,t=!1){this._pushRange(e),this._lastRangeBackward=!!t,this.fire('change:range',{directChange:!0})}removeAllRanges(){0<this._ranges.length&&(this._removeAllRanges(),this.fire('change:range',{directChange:!0}))}setRanges(e,t=!1){e=Array.from(e);const a=e.some((e)=>{if(!(e instanceof s.a))throw new d.b('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');return this._ranges.every((t)=>!t.isEqual(e))});if(e.length!==this._ranges.length||a){this._removeAllRanges();for(const t of e)this._pushRange(t);this._lastRangeBackward=!!t,this.fire('change:range',{directChange:!0})}}setTo(e){e instanceof g?this.setRanges(e.getRanges(),e.isBackward):e instanceof s.a?this.setRanges([e]):Object(p.a)(e)?this.setRanges(e):this.setRanges([new s.a(e)])}setIn(e){this.setRanges([s.a.createIn(e)])}setOn(e){this.setRanges([s.a.createOn(e)])}setCollapsedAt(e,t){const a=i.a.createAt(e,t),n=new s.a(a,a);this.setRanges([n])}collapseToStart(){const e=this.getFirstPosition();null!==e&&this.setRanges([new s.a(e,e)])}collapseToEnd(){const e=this.getLastPosition();null!==e&&this.setRanges([new s.a(e,e)])}moveFocusTo(e,t){if(null===this.anchor)throw new d.b('model-selection-moveFocusTo-no-ranges: Cannot set selection focus if there are no ranges in selection.');const a=i.a.createAt(e,t);if('same'!=a.compareWith(this.focus)){const e=this.anchor;this._ranges.length&&this._popRange(),'before'==a.compareWith(e)?this.addRange(new s.a(a,e),!0):this.addRange(new s.a(e,a))}}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}clearAttributes(){if(0<this._attrs.size){const e=Array.from(this._attrs.keys());this._attrs.clear(),this.fire('change:attribute',{attributeKeys:e,directChange:!0})}}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire('change:attribute',{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire('change:attribute',{attributeKeys:[e],directChange:!0}))}setAttributesTo(e){if(e=Object(m.a)(e),!Object(u.a)(e,this._attrs)){const t=new Set(Array.from(e.keys()).concat(Array.from(this._attrs.keys())));for(const[a,n]of e)this._attrs.get(a)===n&&t.delete(a);this._attrs=e,this.fire('change:attribute',{attributeKeys:Array.from(t),directChange:!0})}}getSelectedElement(){if(1!==this.rangeCount)return null;const e=this.getFirstRange(),t=e.start.nodeAfter,a=e.end.nodeBefore;return t instanceof r.a&&t==a?t:null}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const a=o(t.start,e);a&&(yield a);for(const a of t.getWalker())'elementEnd'==a.type&&n(a.item,e)&&(yield a.item);const r=o(t.end,e);r&&!t.end.isTouching(i.a.createAt(r))&&(yield r)}}containsEntireContent(e=this.anchor.root){const t=i.a.createAt(e),a=i.a.createAt(e,'end');return t.isTouching(this.getFirstPosition())&&a.isTouching(this.getLastPosition())}static createFromSelection(e){const t=new this;return t.setTo(e),t}_pushRange(e){if(!(e instanceof s.a))throw new d.b('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');this._checkRange(e),this._ranges.push(s.a.createFromRange(e))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new d.b('model-selection-range-intersects: Trying to add a range that intersects with another range from selection.',{addedRange:e,intersectingRange:this._ranges[t]})}_popRange(){this._ranges.pop()}_removeAllRanges(){for(;0<this._ranges.length;)this._popRange()}}t.a=g,Object(c.a)(g,l.c)},function(e,t,a){'use strict';var n=a(110),o=a(4);class i{constructor(e){this.document=e,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}t.a=i,Object(o.a)(i,n.a)},function(e,t,a){'use strict';var n=a(110),o=a(12),i=a(0),r=a(4);class s{constructor(){this.set('isFocused',!1),this.focusedElement=null,this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new i.b('focusTracker-add-element-already-exist');this.listenTo(e,'focus',()=>this._focus(e),{useCapture:!0}),this.listenTo(e,'blur',()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(e),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}t.a=s,Object(r.a)(s,n.a),Object(r.a)(s,o.a)},function(e,t){'use strict';t.a=function(e){const t=e.next();return t.done?null:t.value}},function(e,a){'use strict';a.a=function(){let e='e';for(let a=0;8>a;a++)e+=t(65536*(1+Math.random())).toString(16).substring(1);return e}},function(e,t,a){'use strict';var n=a(52),o=Object.prototype,i=o.hasOwnProperty;t.a=function(e,t,a){var o=e[t];i.call(e,t)&&Object(n.a)(o,a)&&(a!==void 0||t in e)||(e[t]=a)}},function(e,t,a){'use strict';var n=a(17),o=Object.prototype,i=o.toString;t.a=function(e){var t=Object(n.a)(e)?i.call(e):'';return t=='[object Function]'||t=='[object GeneratorFunction]'}},function(e,t,a){'use strict';var n=a(121),o=a(0);class i{constructor(e){this.parent=null,this._attrs=Object(n.a)(e)}get index(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildIndex(this)))throw new o.b('model-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get startOffset(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildStartOffset(this)))throw new o.b('model-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get document(){return this.root==this?null:this.root.document||null}clone(){return new i(this._attrs)}getPath(){const e=[];for(let t=this;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let a=e.includeSelf?this:this.parent;a;)t[e.parentFirst?'push':'unshift'](a),a=a.parent;return t}getCommonAncestor(e,t={}){const a=this.getAncestors(t),n=e.getAncestors(t);let o=0;for(;a[o]==n[o]&&a[o];)o++;return 0==o?null:a[o-1]}remove(){this.parent.removeChildren(this.index)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}setAttribute(e,t){this._attrs.set(e,t)}setAttributesTo(e){this._attrs=Object(n.a)(e)}removeAttribute(e){return this._attrs.delete(e)}clearAttributes(){this._attrs.clear()}toJSON(){const e={};return this._attrs.size&&(e.attributes=[...this._attrs]),e}}t.a=i},function(e,t,a){'use strict';var n=a(0);class o{constructor(e,t,a){if(this.textNode=e,0>t||t>e.offsetSize)throw new n.b('model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');if(0>a||t+a>e.offsetSize)throw new n.b('model-textproxy-wrong-length: Given length value is incorrect.');this.data=e.data.substring(t,t+a),this.offsetInText=t}get startOffset(){return null===this.textNode.startOffset?null:this.textNode.startOffset+this.offsetInText}get offsetSize(){return this.data.length}get endOffset(){return null===this.startOffset?null:this.startOffset+this.offsetSize}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return'textProxy'==e}getPath(){const e=this.textNode.getPath();return 0<e.length&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let a=e.includeSelf?this:this.parent;a;)t[e.parentFirst?'push':'unshift'](a),a=a.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}t.a=o},function(e,t,a){'use strict';var n=a(27),o=a(35),i=a(348),r=a(22),s=a(0);class l{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new s.b('view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');if(e.direction&&'forward'!=e.direction&&'backward'!=e.direction)throw new s.b('view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.',{direction:e.direction});this.boundaries=e.boundaries||null,this.position=e.startPosition?r.a.createFromPosition(e.startPosition):r.a.createFromPosition(e.boundaries['backward'==e.direction?'end':'start']),this.direction=e.direction||'forward',this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,a,n;do n=this.position,({done:t,value:a}=this.next());while(!t&&e(a));t||(this.position=n)}next(){return'forward'==this.direction?this._next():this._previous()}_next(){let e=r.a.createFromPosition(this.position);const t=this.position,a=e.parent;if(null===a.parent&&e.offset===a.childCount)return{done:!0};if(a===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let s;if(a instanceof o.a){if(e.isAtEnd)return this.position=r.a.createAfter(a),this._next();s=a.data[e.offset]}else s=a.getChild(e.offset);if(s instanceof n.a)return this.shallow?e.offset++:e=new r.a(s,0),this.position=e,this._formatReturnValue('elementStart',s,t,e,1);if(!(s instanceof o.a)){if('string'==typeof s){let n;if(this.singleCharacters)n=1;else{const t=a===this._boundaryEndParent?this.boundaries.end.offset:a.data.length;n=t-e.offset}const o=new i.a(a,e.offset,n);return e.offset+=n,this.position=e,this._formatReturnValue('text',o,t,e,n)}return e=r.a.createAfter(a),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue('elementEnd',a,t,e)}if(this.singleCharacters)return e=new r.a(s,0),this.position=e,this._next();else{let a=s.data.length,n=s;return s==this._boundaryEndParent?(a=this.boundaries.end.offset,n=new i.a(s,0,a),e=r.a.createAfter(n)):e.offset++,this.position=e,this._formatReturnValue('text',n,t,e,a)}}_previous(){let e=r.a.createFromPosition(this.position);const t=this.position,a=e.parent;if(null===a.parent&&0===e.offset)return{done:!0};if(a==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let s;if(a instanceof o.a){if(e.isAtStart)return this.position=r.a.createBefore(a),this._previous();s=a.data[e.offset-1]}else s=a.getChild(e.offset-1);if(s instanceof n.a)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue('elementStart',s,t,e,1)):(e=new r.a(s,s.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue('elementEnd',s,t,e));if(!(s instanceof o.a)){if('string'==typeof s){let n;if(!this.singleCharacters){const t=a===this._boundaryStartParent?this.boundaries.start.offset:0;n=e.offset-t}else n=1;e.offset-=n;const o=new i.a(a,e.offset,n);return this.position=e,this._formatReturnValue('text',o,t,e,n)}return e=r.a.createBefore(a),this.position=e,this._formatReturnValue('elementStart',a,t,e,1)}if(this.singleCharacters)return e=new r.a(s,s.data.length),this.position=e,this._previous();else{let a=s.data.length,n=s;if(s==this._boundaryStartParent){const t=this.boundaries.start.offset;n=new i.a(s,t,s.data.length-t),a=n.data.length,e=r.a.createBefore(n)}else e.offset--;return this.position=e,this._formatReturnValue('text',n,t,e,a)}}_formatReturnValue(e,t,a,n,o){return t instanceof i.a&&(t.offsetInText+t.data.length==t.textNode.data.length&&('forward'!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?a=r.a.createAfter(t.textNode):(n=r.a.createAfter(t.textNode),this.position=n)),0===t.offsetInText&&('backward'!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?a=r.a.createBefore(t.textNode):(n=r.a.createBefore(t.textNode),this.position=n))),{done:!1,value:{type:e,item:t,previousPosition:a,nextPosition:n,length:o}}}}t.a=l},function(e,t,a){'use strict';var n=a(166);t.a=function(e){return Object(n.a)(e,!1,!0)}},function(e,t,a){'use strict';var n=a(170),o=a(326),i=a(162),r=a(80),s=a(37),l=a(82);t.a=function(e){var t=Object(l.a)(e);if(!(t||Object(r.a)(e)))return Object(o.a)(e);var a=Object(i.a)(e),d=a||[],c=d.length;for(var m in e)!Object(n.a)(e,m)||!!a&&('length'==m||Object(s.a)(m,c))||t&&'constructor'==m||d.push(m);return d}},function(e,t,a){'use strict';function n(e){const t=e.split(':');return t[0]+':'+t[1]}function o(e,t){const a=new m.a({startPosition:e,singleCharacters:!0});let n=0;for(const o of a)if('text'==o.type&&(n++,n==t))return a.position}function i(e){const t=new g('span',e.attributes);if(e.class){const a=Array.isArray(e.class)?e.class:[e.class];t.addClass(...a)}return e.priority&&(t.priority=e.priority),t.setCustomProperty('highlightDescriptorId',e.id),t}t.e=function(e){return(t,a,n,o)=>{const i=e instanceof r.a?e.clone(!0):e(a,n,o);if(i&&n.consume(a.item,'insert')){const e=o.mapper.toViewPosition(a.range.start);o.mapper.bindElements(a.item,i),u.a.insert(e,i)}}},t.f=function(){return(e,t,a,n)=>{if(a.consume(t.item,'insert')){const e=n.mapper.toViewPosition(t.range.start),a=new l.a(t.item.data);u.a.insert(e,a)}}},t.g=function(e){return(t,a,n,o)=>{let i,s;if(e instanceof r.a?(i=e.clone(!0),s=e.clone(!0)):(a.isOpening=!0,i=e(a,n,o),a.isOpening=!1,s=e(a,n,o)),i&&s){const e=a.markerRange,r=t.name;if(!e.isCollapsed||n.consume(e,r)){for(const t of e)if(!n.consume(t.item,r))return;const t=o.mapper;u.a.insert(t.toViewPosition(e.start),i),e.isCollapsed||u.a.insert(t.toViewPosition(e.end),s)}}}},t.k=function(e){return e=e||((e,t)=>({value:e,key:t})),(t,a,o,i)=>{if(o.consume(a.item,n(t.name))){const{key:t,value:n}=e(a.attributeNewValue,a.attributeKey,a,o,i);i.mapper.toViewElement(a.item).setAttribute(t,n)}}},t.i=function(e){return e=e||((e,t)=>({key:t})),(t,a,o,i)=>{if(o.consume(a.item,n(t.name))){const{key:t}=e(a.attributeOldValue,a.attributeKey,a,o,i);i.mapper.toViewElement(a.item).removeAttribute(t)}}},t.m=function(e){return(t,a,o,i)=>{const s=e instanceof r.a?e.clone(!0):e(a.attributeNewValue,a,o,i);if(!s)return;if(!o.consume(a.item,n(t.name)))return;let l=i.mapper.toViewRange(a.range);if(null!==a.attributeOldValue&&!(e instanceof r.a)){const t=e(a.attributeOldValue,a,o,i);l=u.a.unwrap(l,t)}u.a.wrap(l,s)}},t.l=function(e){return(t,a,o,i)=>{const s=e instanceof r.a?e.clone(!0):e(a.attributeOldValue,a,o,i);if(s&&o.consume(a.item,n(t.name))){const e=i.mapper.toViewRange(a.range);u.a.unwrap(e,s)}}},t.h=function(){return(e,t,a,n)=>{if(!a.consume(t.item,'remove'))return;let i=n.mapper.toViewPosition(t.sourcePosition),r;if(t.item.is('element'))i=i.getLastMatchingPosition((e)=>!e.item.is('containerElement')),i.parent.is('text')&&i.isAtEnd&&(i=c.a.createAfter(i.parent)),r=d.a.createOn(i.nodeAfter);else{const e=o(i,t.item.offsetSize);r=new d.a(i,e)}u.a.remove(r.getTrimmed()),'$graveyard'==t.item.root.rootName&&n.mapper.unbindModelElement(t.item)}},t.d=function(e){return(t,a,n,o)=>{const r='function'==typeof e?e(a,n,o):e,s=a.item;if(r&&!a.markerRange.isCollapsed&&s.is('textProxy')&&n.consume(s,t.name)){r.id||(r.id=a.markerName);const e=i(r),n=o.mapper.toViewRange(a.range);'addMarker'==t.name.split(':')[0]?u.a.wrap(n,e):u.a.unwrap(n,e)}}},t.c=function(e){return(t,a,n,o)=>{const i='function'==typeof e?e(a,n,o):e,r=a.item;if(i&&!a.markerRange.isCollapsed&&r.is('element')&&n.test(a.item,t.name)){i.priority||(i.priority=10),i.id||(i.id=a.markerName);const e=o.mapper.toViewElement(r),s='addMarker'==t.name.split(':')[0],l=s?'addHighlight':'removeHighlight';if(e&&e.getCustomProperty(l)){n.consume(a.item,t.name);for(const e of p.a.createIn(r))n.consume(e.item,t.name);e.getCustomProperty(l)(e,i)}}}},t.j=function(e){return(t,a,n,o)=>{let i,s;if(e instanceof r.a?(i=e.clone(!0),s=e.clone(!0)):(a.isOpening=!0,i=e(a,n,o),a.isOpening=!1,s=e(a,n,o)),i&&s){const e=a.markerRange,r=t.name;if(!e.isCollapsed||n.consume(e,r)){for(const t of e)if(!n.consume(t.item,r))return;const t=o.mapper.toViewRange(e);u.a.clear(t.getEnlarged(),s),i.isSimilar(s)||u.a.clear(t.getEnlarged(),i)}}}},t.b=n,t.a=i;var r=a(27),s=a(92),l=a(35),d=a(38),c=a(22),m=a(67),u=a(93),p=a(3);class g extends s.a{isSimilar(e){return!!e.is('attributeElement')&&this.getCustomProperty('highlightDescriptorId')===e.getCustomProperty('highlightDescriptorId')}}},function(e,t,a){'use strict';var n=a(40);class o extends n.a{get type(){return'noop'}clone(){return new o(this.baseVersion)}getReversed(){return new o(this.baseVersion+1)}_execute(){return{}}static get className(){return'engine.model.operation.NoOperation'}}t.a=o},function(e,t,a){'use strict';var n=a(97),o=a(135),i=a(137),r=a(30),s=a(138),l=a(139);t.a=function(e,t,a,d){var c=-1,m=o.a,u=!0,p=e.length,g=[],f=t.length;if(!p)return g;a&&(t=Object(r.a)(t,Object(s.a)(a))),d?(m=i.a,u=!1):t.length>=200&&(m=l.a,u=!1,t=new n.a(t));outer:for(;++c<p;){var h=e[c],b=a?a(h):h;if(h=d||0!==h?h:0,u&&b===b){for(var _=f;_--;)if(t[_]===b)continue outer;g.push(h)}else m(t,b,d)||g.push(h)}return g}},function(e,t,a){'use strict';function n(e){return e instanceof Text&&e.data.substr(0,r)===s}function o(e,t){if(t.keyCode==i.c.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(1==e.rangeCount&&e.getRangeAt(0).collapsed){const t=e.getRangeAt(0).startContainer,a=e.getRangeAt(0).startOffset;n(t)&&a<=r&&e.collapse(t,0)}}}a.d(t,'b',function(){return s}),t.i=n,t.h=function(e){return e.data.length==r&&n(e)},t.e=function(e){return n(e)?e.data.slice(r):e.data},t.g=function(e,t){let a=l.get(t);return a||(a=t(window.document),l.set(t,a)),e.isEqualNode(a)},t.f=function(e){e.on('keydown',o)};var i=a(28);t.a=(e)=>{const t=e.createElement('br');return t.dataset.ckeFiller=!0,t};t.d=(e)=>e.createTextNode('\xA0');const r=7;t.c=r;let s='';for(let n=0;n<r;n++)s+='\u200B';const l=new WeakMap},function(e,t){'use strict';t.a={window,document}},function(e,t,a){'use strict';var n=a(59),o=a(154);class i extends n.a{constructor(e){super(e),this.useCapture=!1}observe(e){const t='string'==typeof this.domEventType?[this.domEventType]:this.domEventType;t.forEach((t)=>{this.listenTo(e,t,(e,t)=>{this.isEnabled&&this.onDomEvent(t)},{useCapture:this.useCapture})})}fire(e,t,a){this.isEnabled&&this.document.fire(e,new o.a(this.document,t,a))}}t.a=i},function(e,t,a){'use strict';var n=a(2),o=a(0),i=a(12),r=a(113),s=a(4),l=a(16),d=a(470),c=a(62);class m extends n.a{static get pluginName(){return'FileRepository'}init(){this.loaders=new r.a,this.set('uploaded',0),this.set('uploadTotal',null),this.bind('uploadedPercent').to(this,'uploaded',this,'uploadTotal',(e,t)=>t?100*(e/t):0)}getLoader(e){for(const t of this.loaders)if(t.file==e)return t;return null}createLoader(e){if(!this.createAdapter)return l.a.error('filerepository-no-adapter: Upload adapter is not defined.'),null;const t=new u(e);return t._adapter=this.createAdapter(t),this.loaders.add(t),t.on('change:uploaded',()=>{let e=0;for(const t of this.loaders)e+=t.uploaded;this.uploaded=e}),t.on('change:uploadTotal',()=>{let e=0;for(const t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e}),t}destroyLoader(e){const t=e instanceof u?e:this.getLoader(e);t._destroy(),this.loaders.remove(t)}}t.a=m,Object(s.a)(m,i.a);class u{constructor(e,t){this.id=Object(c.a)(),this.file=e,this._adapter=t,this._reader=new d.a,this.set('status','idle'),this.set('uploaded',0),this.set('uploadTotal',null),this.bind('uploadedPercent').to(this,'uploaded',this,'uploadTotal',(e,t)=>t?100*(e/t):0),this.set('uploadResponse',null)}read(){if('idle'!=this.status)throw new o.b('filerepository-read-wrong-status: You cannot call read if the status is different than idle.');return this.status='reading',this._reader.read(this.file).then((e)=>(this.status='idle',e)).catch((e)=>{if('aborted'===e)throw this.status='aborted','aborted';throw this.status='error',this._reader.error})}upload(){if('idle'!=this.status)throw new o.b('filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.');return this.status='uploading',this._adapter.upload().then((e)=>(this.uploadResponse=e,this.status='idle',e)).catch((e)=>{if('aborted'===this.status)throw'aborted';throw this.status='error',e})}abort(){const e=this.status;this.status='aborted','reading'==e&&this._reader.abort(),'uploading'==e&&this._adapter.abort&&this._adapter.abort(),this._destroy()}_destroy(){this._reader=void 0,this._adapter=void 0,this.data=void 0,this.uploadResponse=void 0,this.file=void 0}}Object(s.a)(u,i.a)},function(e,t,a){'use strict';var n=a(116),o=a(78),i=a(44),r=Object.prototype,s=Function.prototype.toString,l=r.hasOwnProperty,d=s.call(Object),c=r.toString;t.a=function(e){if(!Object(i.a)(e)||c.call(e)!='[object Object]'||Object(o.a)(e))return!1;var t=Object(n.a)(e);if(null===t)return!0;var a=l.call(t,'constructor')&&t.constructor;return'function'==typeof a&&a instanceof a&&s.call(a)==d}},function(e,t){'use strict';t.a=function(e){var t=!1;if(null!=e&&'function'!=typeof e.toString)try{t=!!(e+'')}catch(t){}return t}},function(e,t,a){'use strict';var n=a(52),o=a(80),i=a(37),r=a(17);t.a=function(e,t,a){if(!Object(r.a)(a))return!1;var s=typeof t;return!('number'==s?!(Object(o.a)(a)&&Object(i.a)(t,a.length)):!('string'==s&&t in a))&&Object(n.a)(a[t],e)}},function(e,t,a){'use strict';var n=a(294),o=a(64),i=a(81);t.a=function(e){return null!=e&&Object(i.a)(Object(n.a)(e))&&!Object(o.a)(e)}},function(e,t){'use strict';t.a=function(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=9007199254740991}},function(e,t){'use strict';var a=Object.prototype;t.a=function(e){var t=e&&e.constructor,n='function'==typeof t&&t.prototype||a;return e===n}},function(e,t,a){'use strict';var n=a(65),o=a(0);class i{constructor(e){this._nodes=[],e&&this.insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return-1==t?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return null===t?null:this._nodes.slice(0,t).reduce((e,t)=>e+t.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new o.b('model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.');return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const a of this._nodes){if(e>=t&&e<t+a.offsetSize)return this.getNodeIndex(a);t+=a.offsetSize}if(t!=e)throw new o.b('model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.');return this.length}insertNodes(e,t){for(const a of t)if(!(a instanceof n.a))throw new o.b('model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.');this._nodes.splice(e,0,...t)}removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map((e)=>e.toJSON())}}t.a=i},function(e,t,a){'use strict';var n=a(0),o=a(8),i=a(4),r=a(68);class s{constructor(){this.parent=null}get index(){let e;if(!this.parent)return null;if(-1==(e=this.parent.getChildIndex(this)))throw new n.b('view-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get document(){return this.parent instanceof s?this.parent.document:null}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let a=e.includeSelf?this:this.parent;a;)t[e.parentFirst?'push':'unshift'](a),a=a.parent;return t}getCommonAncestor(e,t={}){const a=this.getAncestors(t),n=e.getAncestors(t);let o=0;for(;a[o]==n[o]&&a[o];)o++;return 0==o?null:a[o-1]}remove(){this.parent.removeChildren(this.index)}_fireChange(e,t){this.fire('change:'+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Object(r.a)(this);return delete e.parent,e}}t.a=s,Object(i.a)(s,o.c)},function(e,t,a){'use strict';function n(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}var o=a(302),i=a(303),r=a(304),s=a(305),l=a(306);n.prototype.clear=o.a,n.prototype['delete']=i.a,n.prototype.get=r.a,n.prototype.has=s.a,n.prototype.set=l.a,t.a=n},function(e,t,a){'use strict';var n=a(52);t.a=function(e,t){for(var a=e.length;a--;)if(Object(n.a)(e[a][0],t))return a;return-1}},function(e,t,a){'use strict';var n=a(55),o=Object(n.a)(Object,'create');t.a=o},function(e,t,a){'use strict';var n=a(320);t.a=function(e,t){var a=e.__data__;return Object(n.a)(t)?a['string'==typeof t?'string':'hash']:a.map}},function(e,t){'use strict';t.a=function(e,t){for(var a=-1,n=t.length,o=e.length;++a<n;)e[o+a]=t[a];return e}},function(e,t){'use strict';t.a=function(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=e}),a}},function(e,t,a){'use strict';var n=a(47),o=a(0),i=a(4),r=a(12);const s=Symbol('document');class l extends n.a{constructor(e,t,a){super(e,t,a),this.set('isReadOnly',!1),this.set('isFocused',!1)}get document(){return this.getCustomProperty(s)}set document(e){if(this.getCustomProperty(s))throw new o.b('view-editableelement-document-already-set: View document is already set.');this.setCustomProperty(s,e),this.bind('isReadOnly').to(e),this.bind('isFocused').to(e,'isFocused',(t)=>t&&e.selection.editableElement==this),this.listenTo(e,'render',()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this},{priority:'high'})}}t.a=l,Object(i.a)(l,r.a)},function(e,t,a){'use strict';function n(){if(o(this))return null;let e=this.parent;for(;e&&e.is('attributeElement');){if(1<o(e))return null;e=e.parent}return!e||1<o(e)?null:this.childCount}function o(e){return Array.from(e.getChildren()).filter((e)=>!e.is('uiElement')).length}var i=a(27);const r=10;class s extends i.a{constructor(e,t,a){super(e,t,a),this.priority=r,this.getFillerOffset=n}is(e,t=null){return t?'attributeElement'==e&&t==this.name||super.is(e,t):'attributeElement'==e||super.is(e)}clone(e){const t=super.clone(e);return t.priority=this.priority,t}isSimilar(e){return super.isSimilar(e)&&this.priority==e.priority}}t.a=s,s.DEFAULT_PRIORITY=r},function(t,a,n){'use strict';function o(e){const t=e.offset,a=e.parent;if(a.is('text'))return e;if(a.is('attributeElement')&&0===a.childCount){const e=a.parent,t=a.index;return a.remove(),o(new A.a(e,t))}const n=a.getChild(t-1),i=a.getChild(t);if(!n||!i)return e;if(n.is('text')&&i.is('text'))return b(n,i);if(n.is('attributeElement')&&i.is('attributeElement')&&n.isSimilar(i)){const e=n.childCount;return n.appendChildren(i.getChildren()),i.remove(),o(new A.a(n,e))}return e}function i(e,t){t=Object(F.a)(t)?[...t]:[t],y(t);const a=d(e);if(!a)throw new O.b('view-writer-invalid-position-container');const n=m(e,!0),i=a.insertChildren(n.offset,t),r=n.getShiftedBy(i),s=o(n);if(0===i)return new V.a(s,s);else{s.isEqual(n)||r.offset--;const e=o(r);return new V.a(s,e)}}function r(e){if(x(e),e.isCollapsed)return new R.a;const{start:t,end:a}=c(e,!0),n=t.parent,i=a.offset-t.offset,r=n.removeChildren(t.offset,i),s=o(t);return e.start=s,e.end=A.a.createFromPosition(s),new R.a(r)}function s(e,t){let a;if(t.isAfter(e.end)){t=m(t,!0);const n=t.parent,o=n.childCount;e=c(e,!0),a=r(e),t.offset+=n.childCount-o}else a=r(e);return i(t,a)}function l(e,t){if(!(t instanceof T.a))throw new O.b('view-writer-wrap-invalid-attribute');if(x(e),e.isCollapsed)return e;if(e.end.isEqual(e.start.getShiftedBy(1))){const a=e.start.nodeAfter;if(a instanceof T.a&&_(t,a))return e}if(w(e)&&_(t,e.start.parent)){const t=e.start.parent.parent,a=e.start.parent.index;return V.a.createFromParentsAndOffsets(t,a,t,a+1)}const{start:a,end:n}=c(e,!0),i=a.parent,r=u(i,a.offset,n.offset,t),s=p(i,r.start.offset,r.end.offset,t),l=o(s.start);l.isEqual(s.start)||s.end.offset--;const d=o(s.end);return new V.a(l,d)}function d(e){let t=e.parent;for(;!v(t);){if(!t)return;t=t.parent}return t}function c(e,t=!1){const a=e.start,n=e.end;if(x(e),e.isCollapsed){const a=m(e.start,t);return new V.a(a,a)}const o=m(n,t),i=o.parent.childCount,r=m(a,t);return o.offset+=o.parent.childCount-i,new V.a(r,o)}function m(e,t=!1){const a=e.offset,n=e.parent;if(e.parent.is('emptyElement'))throw new O.b('view-writer-cannot-break-empty-element');if(e.parent.is('uiElement'))throw new O.b('view-writer-cannot-break-ui-element');if(!t&&n.is('text')&&v(n.parent))return A.a.createFromPosition(e);if(v(n))return A.a.createFromPosition(e);if(n.is('text'))return m(h(e),t);const o=n.childCount;if(a==o){const e=new A.a(n.parent,n.index+1);return m(e,t)}if(0===a){const e=new A.a(n.parent,n.index);return m(e,t)}else{const e=n.index+1,o=n.clone();n.parent.insertChildren(e,o);const i=n.childCount-a,r=n.removeChildren(a,i);o.appendChildren(r);const s=new A.a(n.parent,e);return m(s,t)}}function u(e,t,a,n){let r=t;const i=[];for(;r<a;){const t=e.getChild(r);if(t.isSimilar(n)){const n=t.getChildren(),o=t.childCount;t.remove(),e.insertChildren(r,n),i.push(new A.a(e,r),new A.a(e,r+o)),r+=o,a+=o-1}else t.is('attributeElement')&&u(t,0,t.childCount,n),r++}let s=0;for(const r of i){if(r.offset-=s,r.offset==t||r.offset==a)continue;const e=o(r);e.isEqual(r)||(s++,a--)}return V.a.createFromParentsAndOffsets(e,t,e,a)}function p(e,t,a,n){let r=t;const i=[];for(;r<a;){const t=e.getChild(r),a=t.is('text'),o=t.is('attributeElement'),s=t.is('emptyElement'),l=t.is('uiElement');if(a||s||l||o&&g(n,t)){const a=n.clone();t.remove(),a.appendChildren(t),e.insertChildren(r,a),i.push(new A.a(e,r))}else o&&p(t,0,t.childCount,n);r++}let s=0;for(const r of i){if(r.offset-=s,r.offset==t)continue;const e=o(r);e.isEqual(r)||(s++,a--)}return V.a.createFromParentsAndOffsets(e,t,e,a)}function g(e,t){if(e.priority<t.priority)return!0;return!(e.priority>t.priority)&&e.getIdentity()<t.getIdentity()}function f(e){const t=e.nodeBefore;if(t&&t.is('text'))return new A.a(t,t.data.length);const a=e.nodeAfter;return a&&a.is('text')?new A.a(a,0):e}function h(e){if(e.offset==e.parent.data.length)return new A.a(e.parent.parent,e.parent.index+1);if(0===e.offset)return new A.a(e.parent.parent,e.parent.index);const t=e.parent.data.slice(e.offset);return e.parent.data=e.parent.data.slice(0,e.offset),e.parent.parent.insertChildren(e.parent.index+1,new S.a(t)),new A.a(e.parent.parent,e.parent.index+1)}function b(e,t){const a=e.data.length;return e.data+=t.data,t.remove(),new A.a(e,a)}function _(e,t){if(e.name!==t.name||e.priority!==t.priority)return!1;for(const a of e.getAttributeKeys())if('class'!==a&&'style'!==a&&t.hasAttribute(a)&&t.getAttribute(a)!==e.getAttribute(a))return!1;for(const a of e.getStyleNames())if(t.hasStyle(a)&&t.getStyle(a)!==e.getStyle(a))return!1;for(const a of e.getAttributeKeys())'class'!==a&&'style'!==a&&(t.hasAttribute(a)||t.setAttribute(a,e.getAttribute(a)));for(const a of e.getStyleNames())t.hasStyle(a)||t.setStyle(a,e.getStyle(a));for(const a of e.getClassNames())t.hasClass(a)||t.addClass(a);return!0}function k(e,t){if(e.name!==t.name||e.priority!==t.priority)return!1;for(const a of e.getAttributeKeys())if('class'!==a&&'style'!==a&&(!t.hasAttribute(a)||t.getAttribute(a)!==e.getAttribute(a)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const a of e.getStyleNames())if(!t.hasStyle(a)||t.getStyle(a)!==e.getStyle(a))return!1;for(const a of e.getAttributeKeys())'class'!==a&&'style'!==a&&t.removeAttribute(a);return t.removeClass(...e.getClassNames()),t.removeStyle(...e.getStyleNames()),!0}function w(e){return e.start.parent==e.end.parent&&e.start.parent.is('attributeElement')&&0===e.start.offset&&e.end.offset===e.start.parent.childCount}function y(e){for(const t of e){if(!I.some((e)=>t instanceof e))throw new O.b('view-writer-insert-invalid-node');t.is('text')||y(t.getChildren())}}function v(e){return e&&(e.is('containerElement')||e.is('documentFragment'))}function x(e){const t=d(e.start),a=d(e.end);if(!t||!a||t!==a)throw new O.b('view-writer-invalid-range-container')}var A=n(22),C=n(47),T=n(92),P=n(178),E=n(94),S=n(35),V=n(38),O=n(0),R=n(128),F=n(34);a.a={breakAttributes:function(e){return e instanceof A.a?m(e):c(e)},breakContainer:function(e){const t=e.parent;if(!t.is('containerElement'))throw new O.b('view-writer-break-non-container-element: Trying to break an element which is not a container element.');if(!t.parent)throw new O.b('view-writer-break-root: Trying to break root element.');if(e.isAtStart)return A.a.createBefore(t);if(!e.isAtEnd){const a=t.clone(!1);i(A.a.createAfter(t),a);const n=new V.a(e,A.a.createAt(t,'end')),o=new A.a(a,0);s(n,o)}return A.a.createAfter(t)},mergeAttributes:o,mergeContainers:function(e){const t=e.nodeBefore,a=e.nodeAfter;if(!t||!a||!t.is('containerElement')||!a.is('containerElement'))throw new O.b('view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.');const n=t.getChild(t.childCount-1),o=n instanceof S.a?A.a.createAt(n,'end'):A.a.createAt(t,'end');return s(V.a.createIn(a),A.a.createAt(t,'end')),r(V.a.createOn(a)),o},insert:i,remove:r,clear:function(e,t){x(e);const a=e.getWalker({direction:'backward',ignoreElementEnd:!0});for(const n of a){const a=n.item;let o;if(a.is('element')&&t.isSimilar(a))o=V.a.createOn(a);else if(!n.nextPosition.isAfter(e.start)&&(a.is('text')||a.is('textProxy'))){const e=a.getAncestors().find((e)=>e.is('element')&&t.isSimilar(e));e&&(o=V.a.createIn(e))}o&&(o.end.isAfter(e.end)&&(o.end=e.end),o.start.isBefore(e.start)&&(o.start=e.start),r(o))}},move:s,wrap:l,wrapPosition:function(t,a){if(!(a instanceof T.a))throw new O.b('view-writer-wrap-invalid-attribute');if(a.isSimilar(t.parent))return f(A.a.createFromPosition(t));t.parent.is('text')&&(t=h(t));const n=new T.a;n.priority=e,n.isSimilar=()=>!1,t.parent.insertChildren(t.offset,n);const o=new V.a(t,t.getShiftedBy(1));l(o,a);const i=new A.a(n.parent,n.index);n.remove();const r=i.nodeBefore,s=i.nodeAfter;return r instanceof S.a&&s instanceof S.a?b(r,s):f(i)},unwrap:function(e,t){if(!(t instanceof T.a))throw new O.b('view-writer-unwrap-invalid-attribute');if(x(e),e.isCollapsed)return e;if(e.end.isEqual(e.start.getShiftedBy(1))){const a=e.start.nodeAfter;if(!t.isSimilar(a)&&a instanceof T.a&&k(t,a))return e}const{start:a,end:n}=c(e,!0),i=a.parent,r=u(i,a.offset,n.offset,t),s=o(r.start);s.isEqual(r.start)||r.end.offset--;const l=o(r.end);return new V.a(s,l)},rename:function(e,t){const a=new C.a(t,e.getAttributes());return i(A.a.createAfter(e),a),s(V.a.createIn(e),A.a.createAt(a)),r(V.a.createOn(e)),a}};const I=[S.a,T.a,C.a,P.a,E.a]},function(e,t,a){'use strict';function n(){return null}function o(e,t,a){if(t.keyCode==l.c.arrowright){const e=t.domTarget.ownerDocument.defaultView.getSelection(),n=1==e.rangeCount&&e.getRangeAt(0).collapsed;if(n||t.shiftKey){const t=e.focusNode,o=e.focusOffset,i=a.domPositionToView(t,o);if(null===i)return;let r=!1;const s=i.getLastMatchingPosition((e)=>(e.item.is('uiElement')&&(r=!0),e.item.is('uiElement')||e.item.is('attributeElement')));if(r){const t=a.viewPositionToDom(s);n?e.collapse(t.parent,t.offset):e.extend(t.parent,t.offset)}}}}t.b=function(e){e.on('keydown',(t,a)=>o(t,a,e.domConverter))};var i=a(27),r=a(0),s=a(84),l=a(28);class d extends i.a{constructor(e,t,a){super(e,t,a),this.getFillerOffset=n}is(e,t=null){return t?'uiElement'==e&&t==this.name||super.is(e,t):'uiElement'==e||super.is(e)}insertChildren(e,t){if(t&&(t instanceof s.a||0<Array.from(t).length))throw new r.b('view-uielement-cannot-add: Cannot add child nodes to UIElement instance.')}render(e){const t=e.createElement(this.name);for(const a of this.getAttributeKeys())t.setAttribute(a,this.getAttribute(a));return t}}t.a=d},function(e,t,a){'use strict';var n=a(40),o=a(3),i=a(0),r=a(23),s=a(361);class l extends n.a{constructor(e,t,a,n,i){super(i),this.range=o.a.createFromRange(e),this.key=t,this.oldValue=a===void 0?null:a,this.newValue=n===void 0?null:n}get type(){return null===this.oldValue?'addAttribute':null===this.newValue?'removeAttribute':'changeAttribute'}clone(){return new l(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new l(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_execute(){for(const e of this.range.getItems()){if(null!==this.oldValue&&!Object(s.a)(e.getAttribute(this.key),this.oldValue))throw new i.b('attribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.',{item:e,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&e.hasAttribute(this.key))throw new i.b('attribute-operation-attribute-exists: The attribute with given key already exists.',{node:e,key:this.key})}return Object(s.a)(this.oldValue,this.newValue)||r.a.setAttribute(this.range,this.key,this.newValue),{range:this.range,key:this.key,oldValue:this.oldValue,newValue:this.newValue}}static get className(){return'engine.model.operation.AttributeOperation'}static fromJSON(e,t){return new l(o.a.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}t.a=l},function(e,t,a){'use strict';function n(e,t,a,s,l){return!(e!==t)||(null!=e&&null!=t&&(Object(i.a)(e)||Object(r.a)(t))?Object(o.a)(e,t,n,a,s,l):e!==e&&t!==t)}var o=a(362),i=a(17),r=a(44);t.a=n},function(e,t,a){'use strict';function n(e){var t=-1,a=e?e.length:0;for(this.__data__=new o.a;++t<a;)this.add(e[t])}var o=a(123),i=a(363),r=a(364);n.prototype.add=n.prototype.push=i.a,n.prototype.has=r.a,t.a=n},function(e,t,a){'use strict';var n=a(29),o=a(41);class i extends n.a{get position(){return this.targetPosition}set position(e){this.targetPosition=e}get type(){return'reinsert'}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new o.a(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}static get className(){return'engine.model.operation.ReinsertOperation'}}t.a=i},function(e,t,a){'use strict';function n(e,t,a){const n=new c;e.addDelta(n);const o=e.document.graveyard,i=new l.a(o,[0]),r=new s.a(t,a,i,e.document.version);n.addOperation(r),e.document.applyOperation(r)}var o=a(100),i=a(20),r=a(19),s=a(41),l=a(1),d=a(3);class c extends o.a{static get className(){return'engine.model.delta.RemoveDelta'}}t.a=c,Object(i.b)('remove',function(e){if(e instanceof d.a){const t=e.getMinimalFlatRanges().reverse();for(const e of t)n(this,e.start,e.end.offset-e.start.offset)}else n(this,l.a.createBefore(e),1);return this}),r.a.register(c)},function(e,t,a){'use strict';function n(e,t,a,n,o){const i=new s.a(a,n,o,e.document.version);t.addOperation(i),e.document.applyOperation(i)}var o=a(24),i=a(19),r=a(20),s=a(29),l=a(1),d=a(3),c=a(0);class m extends o.a{get type(){return'move'}get howMany(){return this._moveOperation?this._moveOperation.howMany:null}get sourcePosition(){return this._moveOperation?this._moveOperation.sourcePosition:null}get targetPosition(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return m}static get className(){return'engine.model.delta.MoveDelta'}}t.a=m,Object(r.b)('move',function(e,t){const a=new m;if(this.addDelta(a),e instanceof d.a){if(!e.isFlat)throw new c.b('batch-move-range-not-flat: Range to move is not flat.');n(this,a,e.start,e.end.offset-e.start.offset,t)}else n(this,a,l.a.createBefore(e),1,t);return this}),i.a.register(m)},function(e,t,a){'use strict';var n=a(24),o=a(19),i=a(102),r=a(20),s=a(1),l=a(5),d=a(41),c=a(29),m=a(0);class u extends n.a{get type(){return'merge'}get position(){return this._removeOperation?this._removeOperation.sourcePosition:null}get _removeOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return i.a}static get className(){return'engine.model.delta.MergeDelta'}}t.a=u,Object(r.b)('merge',function(e){const t=new u;this.addDelta(t);const a=e.nodeBefore,n=e.nodeAfter;if(!(a instanceof l.a))throw new m.b('batch-merge-no-element-before: Node before merge position must be an element.');if(!(n instanceof l.a))throw new m.b('batch-merge-no-element-after: Node after merge position must be an element.');const o=s.a.createFromParentAndOffset(n,0),i=s.a.createFromParentAndOffset(a,a.maxOffset),r=new c.a(o,n.maxOffset,i,this.document.version);r.isSticky=!0,t.addOperation(r),this.document.applyOperation(r);const p=this.document.graveyard,g=new s.a(p,[0]),f=new d.a(e,1,g,this.document.version);return t.addOperation(f),this.document.applyOperation(f),this}),o.a.register(u)},function(e,t,a){'use strict';var n=a(24),o=a(19),i=a(20),r=a(1),s=a(5),l=a(48),d=a(29),c=a(0),m=a(101);class u extends n.a{get type(){return'split'}get position(){return this._moveOperation?this._moveOperation.sourcePosition:null}get _cloneOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]&&this.operations[1]instanceof d.a?this.operations[1]:null}get _reverseDeltaClass(){return m.a}static get className(){return'engine.model.delta.SplitDelta'}}t.a=u,Object(i.b)('split',function(e){const t=new u;this.addDelta(t);const a=e.parent;if(!a.parent)throw new c.b('batch-split-root: Root element can not be split.');const n=new s.a(a.name,a.getAttributes()),o=new l.a(r.a.createAfter(a),n,this.document.version);t.addOperation(o),this.document.applyOperation(o);const i=new d.a(e,a.maxOffset-e.offset,r.a.createFromParentAndOffset(n,0),this.document.version);return i.isSticky=!0,t.addOperation(i),this.document.applyOperation(i),this}),o.a.register(u)},function(e,t,a){'use strict';var n=a(24),o=a(19),i=a(104),r=a(20),s=a(1),l=a(41),d=a(29),c=a(0);class m extends n.a{get type(){return'unwrap'}get position(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return i.a}static get className(){return'engine.model.delta.UnwrapDelta'}}t.a=m,Object(r.b)('unwrap',function(e){if(null===e.parent)throw new c.b('batch-unwrap-element-no-parent: Trying to unwrap an element which has no parent.');const t=new m;this.addDelta(t);const a=s.a.createFromParentAndOffset(e,0),n=new d.a(a,e.maxOffset,s.a.createBefore(e),this.document.version);n.isSticky=!0,t.addOperation(n),this.document.applyOperation(n);const o=this.document.graveyard,i=new s.a(o,[0]),r=new l.a(s.a.createBefore(e),1,i,this.document.version);return t.addOperation(r),this.document.applyOperation(r),this}),o.a.register(m)},function(e,t,a){'use strict';var n=a(24),o=a(19),i=a(103),r=a(20),s=a(1),l=a(3),d=a(5),c=a(48),m=a(29),u=a(0);class p extends n.a{get type(){return'wrap'}get range(){const e=this._moveOperation;return e?l.a.createFromPositionAndShift(e.sourcePosition,e.howMany):null}get howMany(){const e=this.range;return e?e.end.offset-e.start.offset:0}get _insertOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return i.a}static get className(){return'engine.model.delta.WrapDelta'}}t.a=p,Object(r.b)('wrap',function(e,t){if(!e.isFlat)throw new u.b('batch-wrap-range-not-flat: Range to wrap is not flat.');const a=t instanceof d.a?t:new d.a(t);if(0<a.childCount)throw new u.b('batch-wrap-element-not-empty: Element to wrap with is not empty.');if(null!==a.parent)throw new u.b('batch-wrap-element-attached: Element to wrap with is already attached to tree model.');const n=new p;this.addDelta(n);const o=new c.a(e.end,a,this.document.version);n.addOperation(o),this.document.applyOperation(o);const i=s.a.createFromParentAndOffset(a,0),r=new m.a(e.start,e.end.offset-e.start.offset,i,this.document.version);return n.addOperation(r),this.document.applyOperation(r),this}),o.a.register(p)},function(e,t,a){'use strict';var n=a(15),o=a(381);t.a=function(e){return Object(n.a)(e)?e:Object(o.a)(e)}},function(e,t,a){'use strict';var n=a(42);t.a=function(e,t,a,o){for(var i=e.length,r=o?i:-1;(o?r--:++r<i)&&t(e[r],r,e););return a?Object(n.a)(e,o?0:r,o?r+1:i):Object(n.a)(e,o?r+1:0,o?i:r)}},function(e,t,a){'use strict';var n=a(148),o=a(193),i=a(46);t.a=function(e,t,a){var r=0,s=e?e.length:r;if('number'==typeof t&&t===t&&s<=4294967295>>>1){for(;r<s;){var l=r+s>>>1,d=e[l];null!==d&&!Object(i.a)(d)&&(a?d<=t:d<t)?r=l+1:s=l}return s}return Object(n.a)(e,t,o.a,a)}},function(e,t,a){'use strict';var n=a(109),i=a(30),r=a(118),s=a(163),l=a(14);t.a=function(e){if(!(e&&e.length))return[];var t=0;return e=Object(n.a)(e,function(e){if(Object(l.a)(e))return t=o(e.length,t),!0}),Object(s.a)(t,function(t){return Object(i.a)(e,Object(r.a)(t))})}},function(e,t){'use strict';t.a=function(e,t){for(var a=-1,n=e.length,o=0,i=[];++a<n;){var r=e[a];t(r,a,e)&&(i[o++]=r)}return i}},function(e,t,a){'use strict';function n(e){return e['data-ck-expando']||(e['data-ck-expando']=Object(r.a)())}function o(e){return e&&Object(l.a)(e.addEventListener)}var i=a(8),r=a(62),s=a(45),l=a(167);const d=Object(s.a)({},i.c,{listenTo(...e){const t=e[0];o(t)&&(e[0]=this._getProxyEmitter(t)||new c(t)),i.c.listenTo.apply(this,e)},stopListening(...e){const t=e[0];if(o(t)){const a=this._getProxyEmitter(t);if(!a)return;e[0]=a}i.c.stopListening.apply(this,e)},_getProxyEmitter(e){return Object(i.a)(this,n(e))}});t.a=d;class c{constructor(e){Object(i.b)(this,n(e)),this._domNode=e}}Object(s.a)(c.prototype,i.c,{on(e,t,a={}){if(i.c.on.call(this,e,t,a),!(this._domListeners&&this._domListeners[e])){const t=this._createDomListener(e,!!a.useCapture);this._domNode.addEventListener(e,t,!!a.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}},off(e,t,a){i.c.off.call(this,e,t,a);let n;!this._domListeners[e]||(n=this._events[e])&&n.callbacks.length||this._domListeners[e].removeListener()},_createDomListener(e,t){const a=(t)=>{this.fire(e,t)};return a.removeListener=()=>{this._domNode.removeEventListener(e,a,t),delete this._domListeners[e]},a}})},function(e,t,a){'use strict';var n=a(0),o=a(38),i=a(22),r=a(4),s=a(8),l=a(27),d=a(152),c=a(34);class m{constructor(e,t){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel='',e&&this.setRanges(e,t)}setFake(e=!0,t={}){this._isFake=e,this._fakeSelectionLabel=e?t.label||'':'',this.fire('change')}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1],t=this._lastRangeBackward?e.end:e.start;return i.a.createFromPosition(t)}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1],t=this._lastRangeBackward?e.start:e.end;return i.a.createFromPosition(t)}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}addRange(e,t){if(!(e instanceof o.a))throw new n.b('view-selection-invalid-range: Invalid Range.');this._pushRange(e),this._lastRangeBackward=!!t,this.fire('change')}*getRanges(){for(const e of this._ranges)yield o.a.createFromRange(e)}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?o.a.createFromRange(e):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?o.a.createFromRange(e):null}getFirstPosition(){const e=this.getFirstRange();return e?i.a.createFromPosition(e.start):null}getLastPosition(){const e=this.getLastRange();return e?i.a.createFromPosition(e.end):null}isEqual(e){if(this.isFake!=e.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel)return!1;if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let a=!1;for(const n of e._ranges)if(t.isEqual(n)){a=!0;break}if(!a)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Object(d.a)(this.getRanges()),a=Object(d.a)(e.getRanges());if(t!=a)return!1;if(0==t)return!0;for(let t of this.getRanges()){t=t.getTrimmed();let a=!1;for(let n of e.getRanges())if(n=n.getTrimmed(),t.start.isEqual(n.start)&&t.end.isEqual(n.end)){a=!0;break}if(!a)return!1}return!0}removeAllRanges(){this._ranges.length&&(this._ranges=[],this.fire('change'))}setRanges(e,t){this._ranges=[];for(const a of e){if(!(a instanceof o.a))throw new n.b('view-selection-invalid-range: Invalid Range.');this._pushRange(a)}this._lastRangeBackward=!!t,this.fire('change')}setTo(e){e instanceof m?(this._isFake=e._isFake,this._fakeSelectionLabel=e._fakeSelectionLabel,this.setRanges(e.getRanges(),e.isBackward)):e instanceof o.a?this.setRanges([e]):Object(c.a)(e)?this.setRanges(e):this.setRanges([new o.a(e)])}setIn(e){this.setRanges([o.a.createIn(e)])}setOn(e){this.setRanges([o.a.createOn(e)])}setCollapsedAt(e,t){const a=i.a.createAt(e,t),n=new o.a(a,a);this.setRanges([n])}collapseToStart(){const e=this.getFirstPosition();null!==e&&this.setRanges([new o.a(e,e)])}collapseToEnd(){const e=this.getLastPosition();null!==e&&this.setRanges([new o.a(e,e)])}moveFocusTo(e,t){if(null===this.anchor)throw new n.b('view-selection-moveFocusTo-no-ranges: Cannot set selection focus if there are no ranges in selection.');const a=i.a.createAt(e,t);if('same'!=a.compareWith(this.focus)){const e=this.anchor;this._ranges.pop(),'before'==a.compareWith(e)?this.addRange(new o.a(a,e),!0):this.addRange(new o.a(e,a))}}getSelectedElement(){if(1!==this.rangeCount)return null;const e=this.getFirstRange(),t=e.start.nodeAfter,a=e.end.nodeBefore;return t instanceof l.a&&t==a?t:null}static createFromSelection(e){const t=new m;return t.setTo(e),t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new n.b('view-selection-range-intersects: Trying to add a range that intersects with another range from selection.',{addedRange:e,intersectingRange:t});this._ranges.push(o.a.createFromRange(e))}}t.a=m,Object(r.a)(m,s.c)},function(e,t,a){'use strict';function n(e){return e.every((e)=>'string'==typeof e)}var o=a(0),i=a(12),r=a(113),s=a(4);class l extends r.a{constructor(e){super({idProperty:'viewUid'}),this.on('add',(e,t,a)=>{t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[a])}),this.on('remove',(e,t)=>{t.element&&this._parentElement&&t.element.remove()}),this.locale=e,this.set('ready',!1),this._parentElement=null}init(){if(this.ready)throw new o.b('ui-viewcollection-init-reinit: This ViewCollection has already been initialized.');this.map((e)=>e.init()),this.ready=!0}destroy(){this.map((e)=>e.destroy())}add(e,t){super.add(e,t),this.ready&&!e.ready&&e.init()}setParent(e){this._parentElement=e}delegate(...e){if(!e.length||!n(e))throw new o.b('ui-viewcollection-delegate-wrong-events: All event names must be strings.');return{to:(t)=>{for(const a of this)for(const n of e)a.delegate(n).to(t);this.on('add',(a,n)=>{for(const o of e)n.delegate(o).to(t)}),this.on('remove',(a,n)=>{for(const o of e)n.stopDelegating(o,t)})}}}}t.a=l,Object(s.a)(r.a,i.a)},function(e,t,a){'use strict';var n=a(8),o=a(0),i=a(62),r=a(4);class s{constructor(e){this._items=[],this._itemMap=new Map,this._idProperty=e&&e.idProperty||'id',this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap}get length(){return this._items.length}add(e,t){let a;const n=this._idProperty;if(n in e){if(a=e[n],'string'!=typeof a)throw new o.b('collection-add-invalid-id');if(this.get(a))throw new o.b('collection-add-item-already-exists')}else e[n]=a=Object(i.a)();if(void 0===t)t=this._items.length;else if(t>this._items.length||0>t)throw new o.b('collection-add-item-invalid-index');return this._items.splice(t,0,e),this._itemMap.set(a,e),this.fire('add',e,t),this}get(e){let t;if('string'==typeof e)t=this._itemMap.get(e);else if('number'==typeof e)t=this._items[e];else throw new o.b('collection-get-invalid-arg: Index or id must be given.');return t||null}getIndex(e){let t;return t='string'==typeof e?this._itemMap.get(e):e,this._items.indexOf(t)}remove(e){let t=!1,a,n,i;const r=this._idProperty;if('string'==typeof e?(n=e,i=this._itemMap.get(n),t=!i,i&&(a=this._items.indexOf(i))):'number'==typeof e?(a=e,i=this._items[a],t=!i,i&&(n=i[r])):(i=e,n=i[r],a=this._items.indexOf(i),t=-1==a||!this._itemMap.get(n)),t)throw new o.b('collection-remove-404: Item not found.');this._items.splice(a,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(s),this.fire('remove',i),i}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(e){if(this._bindToCollection)throw new o.b('collection-bind-to-rebind: The collection cannot be bound more than once.');return this._bindToCollection=e,{as:(e)=>{this._setUpBindToBinding((t)=>new e(t))},using:(e)=>{'function'==typeof e?this._setUpBindToBinding((t)=>e(t)):this._setUpBindToBinding((t)=>t[e])}}}_setUpBindToBinding(e){const t=this._bindToCollection,a=(a,n,o)=>{const i=t._bindToCollection==this,r=t._bindToInternalToExternalMap.get(n);if(i&&r)this._bindToExternalToInternalMap.set(n,r),this._bindToInternalToExternalMap.set(r,n);else{const t=e(n);this._bindToExternalToInternalMap.set(n,t),this._bindToInternalToExternalMap.set(t,n),this.add(t,o)}};for(const n of t)a(null,n);this.listenTo(t,'add',a),this.listenTo(t,'remove',(e,t)=>{const a=this._bindToExternalToInternalMap.get(t);a&&this.remove(a)})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}t.a=s,Object(r.a)(s,n.c)},function(e,t,a){'use strict';function n(e){return!!(e.focus&&'none'!=o.a.window.getComputedStyle(e.element).display)}var o=a(74);class i{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let a=e.actions[t];'string'==typeof a&&(a=[a]);for(const n of a)e.keystrokeHandler.set(n,(e,a)=>{this[t](),a()})}}get first(){return this.focusables.find(n)||null}get last(){return this.focusables.filter(n).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((t,a)=>{const n=t.element===this.focusTracker.focusedElement;return n&&(e=a),n}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,a=this.focusables.length;if(!a)return null;if(null===t)return this[1===e?'first':'last'];let o=(t+a+e)%a;do{const t=this.focusables.get(o);if(n(t))return t;o=(o+a+e)%a}while(o!==t);return null}}t.a=i},function(e,t,a){'use strict';function n(e,t,a,n){if(a.test(t.input,{name:t.input.name})&&r(t.input,t.context,n.schema,!1)){t.context.push('paragraph');const e=n.convertItem(t.input,a,t);t.context.pop(),t.output=e}}function o(e,t,a,n){if(!t.output)return;const o=g.paragraphLikeElements.has(t.input.name)&&!t.output.is('element'),i=t.input.is('documentFragment')||t.input.is('element')&&t.output.is('element')||o;if(!i)return;const s=t.output.is('element');s&&t.context.push(t.output);let l=null;for(let s=0;s<t.output.childCount;s++){const e=t.output.getChild(s);r(e,t.context,n.schema,o)?(l?s--:(l=new c.a('paragraph'),t.output.insertChildren(e.index,l)),e.remove(),l.appendChildren(e)):l=null}s&&t.context.pop()}function r(e,t,a,n){const o=e.name||'$text';return!n&&a.check({name:o,inside:t})?!1:!!a.check({name:'paragraph',inside:t})&&!!a.check({name:o,inside:t.concat('paragraph')})}function i(e,t){for(const a of e.getRootNames()){const n=e.getRoot(a);n.isEmpty?!f.has(n)&&f.set(n,t):f.delete(n)}}function s(){for(const[e,t]of f){const a=t.document,n=a.schema;n.check({name:'paragraph',inside:[e]})&&a.enqueueChanges(()=>{f.delete(e),t.insert(m.a.createAt(e),new c.a('paragraph'))})}}var l=a(517),d=a(2),c=a(5),m=a(1),u=a(51),p=a(43);class g extends d.a{static get pluginName(){return'Paragraph'}init(){const e=this.editor,t=e.document,a=e.data,r=e.editing;e.commands.add('paragraph',new l.a(e)),t.schema.registerItem('paragraph','$block'),Object(u.a)().for(a.modelToView,r.modelToView).fromElement('paragraph').toElement('p'),Object(p.a)().for(a.viewToModel).fromElement('p').toElement('paragraph'),a.viewToModel.on('element',n,{priority:'low'}),a.viewToModel.on('text',n,{priority:'lowest'}),a.viewToModel.on('element',o,{priority:'lowest'}),a.viewToModel.on('documentFragment',o,{priority:'lowest'}),t.on('change',(e,a,n,o)=>{'transparent'==o.type||i(t,o)}),t.on('changesDone',s,{priority:'lowest'}),e.on('dataReady',()=>{i(t,t.batch('transparent')),s()},{priority:'lowest'})}}t.a=g,g.paragraphLikeElements=new Set(['blockquote','dd','div','dt','h1','h2','h3','h4','h5','h6','li','p','td']);const f=new Map},function(e,t){'use strict';var a=Object.getPrototypeOf;t.a=function(e){return a(Object(e))}},function(e,t,a){'use strict';var n=a(63);t.a=function(e,t,a,o){a||(a={});for(var i=-1,r=t.length;++i<r;){var s=t[i],l=o?o(a[s],e[s],s,a,e):e[s];Object(n.a)(a,s,l)}return a}},function(e,t){'use strict';t.a=function(e){return function(t){return null==t?void 0:t[e]}}},function(e,t,a){'use strict';var n=a(14),o=Object.prototype,i=o.hasOwnProperty,r=o.toString,s=o.propertyIsEnumerable;t.a=function(e){return Object(n.a)(e)&&i.call(e,'callee')&&(!s.call(e,'callee')||r.call(e)=='[object Arguments]')}},function(e,t,a){'use strict';var n=a(15),o=a(44),i=Object.prototype,r=i.toString;t.a=function(e){return'string'==typeof e||!Object(n.a)(e)&&Object(o.a)(e)&&r.call(e)=='[object String]'}},function(e,t,a){'use strict';t.a=function(e){return Object(n.a)(e)?Object(o.a)(e):new Map(e)};var n=a(77),o=a(165)},function(e,t,a){'use strict';function n(e){this.__data__=new o.a(e)}var o=a(85),i=a(307),r=a(308),s=a(309),l=a(310),d=a(311);n.prototype.clear=i.a,n.prototype['delete']=r.a,n.prototype.get=s.a,n.prototype.has=l.a,n.prototype.set=d.a,t.a=n},function(e,t,a){'use strict';function n(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}var o=a(312),i=a(319),r=a(321),s=a(322),l=a(323);n.prototype.clear=o.a,n.prototype['delete']=i.a,n.prototype.get=r.a,n.prototype.has=s.a,n.prototype.set=l.a,t.a=n},function(e,t,a){'use strict';function n(e){return h.call(e)}var o=a(331),i=a(169),r=a(332),s=a(173),l=a(333),d=a(168),c='[object Map]',m='[object Promise]',u='[object Set]',p='[object WeakMap]',g='[object DataView]',f=Object.prototype,h=f.toString,b=Object(d.a)(o.a),_=Object(d.a)(i.a),k=Object(d.a)(r.a),w=Object(d.a)(s.a),y=Object(d.a)(l.a);(o.a&&n(new o.a(new ArrayBuffer(1)))!=g||i.a&&n(new i.a)!=c||r.a&&n(r.a.resolve())!=m||s.a&&n(new s.a)!=u||l.a&&n(new l.a)!=p)&&(n=function(e){var t=h.call(e),a=t=='[object Object]'?e.constructor:void 0,n=a?Object(d.a)(a):void 0;if(n)switch(n){case b:return g;case _:return c;case k:return m;case w:return u;case y:return p;}return t}),t.a=n},function(e,t,a){'use strict';var n=a(174);t.a=function(e){var t=new e.constructor(e.byteLength);return new n.a(t).set(new n.a(e)),t}},function(e,t){'use strict';t.a=function(e){var t=-1,a=Array(e.size);return e.forEach(function(e,n){a[++t]=[n,e]}),a}},function(e,t,a){'use strict';var n=a(33),o=n.a.Symbol;t.a=o},function(e,t,a){'use strict';function n(e){return'string'==typeof e?[new o.a(e)]:(Object(r.a)(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new o.a(e):e))}var o=a(35),i=a(4),r=a(34),s=a(8);class l{constructor(e){this._children=[],e&&this.insertChildren(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return'documentFragment'==e}appendChildren(e){return this.insertChildren(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}insertChildren(e,t){this._fireChange('children',this);let a=0;t=n(t);for(const n of t)null!==n.parent&&n.remove(),n.parent=this,this._children.splice(e,0,n),e++,a++;return a}removeChildren(e,t=1){this._fireChange('children',this);for(let a=e;a<e+t;a++)this._children[a].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire('change:'+e,t)}}t.a=l,Object(i.a)(l,s.c)},function(e,t,a){'use strict';function n(e,t,a,n){n instanceof p.a?i(e,e.document,t,a,n):o(e,e.document,t,a,n)}function o(e,t,a,n,o){const i=o.getAttribute(a);let r,s;const l=o.is('rootElement')?new f:new g;i!=n&&(e.addDelta(l),o.is('rootElement')?s=new c.a(o,a,i,n,t.version):(r=o.is('element')?new p.a(u.a.createBefore(o),u.a.createFromParentAndOffset(o,0)):new p.a(u.a.createBefore(o),u.a.createAfter(o)),s=new d.a(r,a,i,n,t.version)),l.addOperation(s),t.applyOperation(s))}function i(e,t,a,n,o){function i(){0===r.operations.length&&e.addDelta(r);const o=new p.a(s,l),i=new d.a(o,a,c,n,t.version);r.addOperation(i),t.applyOperation(i)}const r=new g;let s=o.start,l,c,m;for(const r of o)m=r.item.getAttribute(a),l&&c!=m&&(c!=n&&i(),s=l),l=r.nextPosition,c=m;l instanceof u.a&&l!=s&&c!=n&&i()}var r=a(24),s=a(19),l=a(20),d=a(95),c=a(132),m=a(71),u=a(1),p=a(3);class g extends r.a{get type(){return'attribute'}get key(){return this.operations[0]?this.operations[0].key:null}get value(){return this.operations[0]?this.operations[0].newValue:null}get range(){if(this._range)return this._range;let e=null,t=null;for(const a of this.operations)a instanceof m.a||((null==e||e.isAfter(a.range.start))&&(e=a.range.start),(null==t||t.isBefore(a.range.end))&&(t=a.range.end));return e&&t?(this._range=new p.a(e,t),this._range):null}get _reverseDeltaClass(){return g}toJSON(){const e=super.toJSON();return delete e._range,e}static get className(){return'engine.model.delta.AttributeDelta'}}t.a=g;class f extends r.a{static get className(){return'engine.model.delta.RootAttributeDelta'}}Object(l.b)('setAttribute',function(e,t,a){return n(this,t,a,e),this}),Object(l.b)('removeAttribute',function(e,t){return n(this,t,null,e),this}),s.a.register(g),s.a.register(f)},function(e,t,a){'use strict';var n=a(40),o=a(3);class i extends n.a{constructor(e,t,a,n,i){super(i),this.name=e,this.oldRange=t?o.a.createFromRange(t):null,this.newRange=a?o.a.createFromRange(a):null,this._markers=n}get type(){return'marker'}clone(){return new i(this.name,this.oldRange,this.newRange,this._markers,this.baseVersion)}getReversed(){return new i(this.name,this.newRange,this.oldRange,this._markers,this.baseVersion+1)}_execute(){const e=this.newRange?'set':'remove';return this._markers[e](this.name,this.newRange),{name:this.name,type:e}}toJSON(){const e=super.toJSON();return delete e._markers,e}static get className(){return'engine.model.operation.MarkerOperation'}static fromJSON(e,t){return new i(e.name,e.oldRange?o.a.fromJSON(e.oldRange,t):null,e.newRange?o.a.fromJSON(e.newRange,t):null,t.markers,e.baseVersion)}}t.a=i},function(e,t,a){'use strict';var n=a(40),o=a(5),i=a(0),r=a(1);class s extends n.a{constructor(e,t,a,n){super(n),this.position=e,this.oldName=t,this.newName=a}get type(){return'rename'}clone(){return new s(r.a.createFromPosition(this.position),this.oldName,this.newName,this.baseVersion)}getReversed(){return new s(r.a.createFromPosition(this.position),this.newName,this.oldName,this.baseVersion+1)}_execute(){const e=this.position.nodeAfter;if(!(e instanceof o.a))throw new i.b('rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.');else if(e.name!==this.oldName)throw new i.b('rename-operation-wrong-name: Element to change has different name than operation\'s old name.');return e.name!=this.newName&&(e.name=this.newName),{element:e,oldName:this.oldName}}static get className(){return'engine.model.operation.RenameOperation'}static fromJSON(e,t){return new s(r.a.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}t.a=s},function(e,t,a){'use strict';var n=a(40),o=a(0);class i extends n.a{constructor(e,t,a,n,o){super(o),this.root=e,this.key=t,this.oldValue=a,this.newValue=n}get type(){return null===this.oldValue?'addRootAttribute':null===this.newValue?'removeRootAttribute':'changeRootAttribute'}clone(){return new i(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new i(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_execute(){if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new o.b('rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.',{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new o.b('rootattribute-operation-attribute-exists: The attribute with given key already exists.',{root:this.root,key:this.key});return null===this.newValue?this.root.removeAttribute(this.key):this.root.setAttribute(this.key,this.newValue),{root:this.root,key:this.key,oldValue:this.oldValue,newValue:this.newValue}}static get className(){return'engine.model.operation.RootAttributeOperation'}static fromJSON(e,t){if(!t.hasRoot(e.root))throw new o.b('rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.',{rootName:e});return new i(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}t.a=i},function(e,t,a){'use strict';var n=a(24),o=a(99),i=a(19),r=a(48),s=a(20),l=a(23),d=a(39),c=a(3),m=a(1);class u extends n.a{get type(){return'insert'}get position(){return this._insertOperation?this._insertOperation.position:null}get nodes(){return this._insertOperation?this._insertOperation.nodes:null}get _insertOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return o.a}static get className(){return'engine.model.delta.InsertDelta'}}t.a=u,Object(s.b)('insert',function(e,t){const a=Object(l.c)(t);if(0===a.length)return this;const n=new u,o=new r.a(e,a,this.document.version);if(this.addDelta(n),n.addOperation(o),this.document.applyOperation(o),t instanceof d.a)for(const[a,n]of t.markers){const t=m.a.createAt(n.root),o=new c.a(n.start._getCombined(t,e),n.end._getCombined(t,e));this.setMarker(a,o)}return this}),i.a.register(u)},function(e,t,a){'use strict';function n(e,t,a){t.addOperation(a),e.document.applyOperation(a)}var o=a(24),i=a(19),r=a(20),s=a(131),l=a(5),d=a(1),c=a(0);class m extends o.a{get type(){return'rename'}get _reverseDeltaClass(){return m}static get className(){return'engine.model.delta.RenameDelta'}}t.a=m,Object(r.b)('rename',function(e,t){if(!(e instanceof l.a))throw new c.b('batch-rename-not-element-instance: Trying to rename an object which is not an instance of Element.');const a=new m;this.addDelta(a);const o=new s.a(d.a.createBefore(e),e.name,t,this.document.version);return n(this,a,o),this}),i.a.register(m)},function(e,t,a){'use strict';var n=a(136);t.a=function(e,t){return!!e.length&&-1<Object(n.a)(e,t,0)}},function(e,t,a){'use strict';var n=a(188);t.a=function(e,t,a){if(t!==t)return Object(n.a)(e,a);for(var o=a-1,i=e.length;++o<i;)if(e[o]===t)return o;return-1}},function(e,t){'use strict';t.a=function(e,t,a){for(var n=-1,o=e.length;++n<o;)if(a(t,e[n]))return!0;return!1}},function(e,t){'use strict';t.a=function(e){return function(t){return e(t)}}},function(e,t){'use strict';t.a=function(e,t){return e.has(t)}},function(e,t,a){'use strict';var n=a(105),o=a(56),i=a(57);t.a=function(e,t){t=Object(o.a)(t,e)?[t]:Object(n.a)(t);for(var a=0,r=t.length;null!=e&&a<r;)e=e[Object(i.a)(t[a++])];return a&&a==r?e:void 0}},function(e,t,a){'use strict';var o=a(42),i=a(13);t.a=function(e,t,a){var n=e?e.length:0;return n?(t=a||void 0===t?1:Object(i.a)(t),Object(o.a)(e,0>t?0:t,n)):[]}},function(e,t,a){'use strict';var o=a(42),i=a(13);t.a=function(e,t,a){var n=e?e.length:0;return n?(t=a||void 0===t?1:Object(i.a)(t),t=n-t,Object(o.a)(e,0,0>t?0:t)):[]}},function(e,t){'use strict';t.a=function(e){return e&&e.length?e[0]:void 0}},function(e,t,a){'use strict';var o=a(97),i=a(135),r=a(137),s=a(30),l=a(138),d=a(139);t.a=function(e,t,a){for(var c=a?r.a:i.a,m=e[0].length,u=e.length,p=u,g=Array(u),f=Infinity,h=[];p--;){var b=e[p];p&&t&&(b=Object(s.a)(b,Object(l.a)(t))),f=n(b.length,f),g[p]=!a&&(t||120<=m&&120<=b.length)?new o.a(p&&b):void 0}b=e[0];var _=-1,k=g[0];outer:for(;++_<m&&h.length<f;){var w=b[_],y=t?t(w):w;if(w=a||0!==w?w:0,k?!Object(d.a)(k,y):!c(h,y,a)){for(p=u;--p;){var v=g[p];if(v?!Object(d.a)(v,y):!c(e[p],y,a))continue outer}k&&k.push(y),h.push(w)}}return h}},function(e,t,a){'use strict';var n=a(14);t.a=function(e){return Object(n.a)(e)?e:[]}},function(e,t,a){'use strict';var n=a(147);t.a=function(e,t){return e&&e.length&&t&&t.length?Object(n.a)(e,t):e}},function(e,t,a){'use strict';var n=a(30),o=a(136),i=a(394),r=a(138),s=Array.prototype,l=s.splice;t.a=function(e,t,a,s){var d=s?i.a:o.a,c=-1,m=t.length,u=e;for(a&&(u=Object(n.a)(e,Object(r.a)(a)));++c<m;)for(var p=0,g=t[c],f=a?a(g):g;-1<(p=d(u,f,p,s));)u!==e&&l.call(u,p,1),l.call(e,p,1);return e}},function(e,a,o){'use strict';var i=o(46);a.a=function(e,a,o,r){a=o(a);for(var s=0,l=e?e.length:0,d=a!==a,c=null===a,m=Object(i.a)(a),u=void 0===a;s<l;){var p=t((s+l)/2),g=o(e[p]),f=g!==void 0,h=null===g,b=g===g,_=Object(i.a)(g);if(d)var k=r||b;else k=u?b&&(r||f):c?b&&f&&(r||!h):m?b&&f&&!h&&(r||!_):h||_?!1:r?g<=a:g<a;k?s=p+1:l=p}return n(l,4294967295-1)}},function(e,t,a){'use strict';var n=a(159),o=a(30),i=a(108);t.a=function(e,t){if(!(e&&e.length))return[];var a=Object(i.a)(e);return null==t?a:Object(o.a)(a,function(e){return Object(n.a)(t,void 0,e)})}},function(e,t,a){'use strict';var n=a(89),o=a(72),i=a(49);t.a=function(e,t,a){for(var r=-1,s=e.length;++r<s;)var l=l?Object(n.a)(Object(o.a)(l,e[r],t,a),Object(o.a)(e[r],l,t,a)):e[r];return l&&l.length?Object(i.a)(l,t,a):[]}},function(e,t,a){'use strict';function n(){const e=new Set(['insert','move','remove','reinsert']);this.listenTo(this.root.document,'change',(t,a,n,i,r)=>{e.has(a)&&o.call(this,a,r,i,n.range,n.sourcePosition)},{priority:'high'})}function o(e,t,a,n,o){const r=n.end.offset-n.start.offset;let s=n.start;('move'==e||'remove'==e||'reinsert'==e)&&(s=s._getTransformedByInsertion(o,r));const l=this._getTransformedByDocumentChange(e,t,s,r,o);('move'==e||'remove'==e||'reinsert'==e)&&3==l.length&&(l[2]=n);const d=i.a.createFromRanges(l),c=!d.isEqual(this),m=this.containsPosition(s),u=o&&(this.containsPosition(o)||this.start.isEqual(o));if(c){const t=i.a.createFromRange(this);this.start=d.start,this.end=d.end,this.fire('change:range',t,{type:e,batch:a,range:n,sourcePosition:o})}else(m||u)&&this.fire('change:content',i.a.createFromRange(this),{type:e,batch:a,range:n,sourcePosition:o})}var i=a(3),r=a(8),s=a(4);class l extends i.a{constructor(e,t){super(e,t),n.call(this)}detach(){this.stopListening()}}t.a=l,Object(s.a)(l,r.c)},function(e,t){'use strict';function a(e){let t=0;for(const a of e)t++;return t}t.a=a},function(e,t,a){'use strict';function n(e,t,a){let n=Object(f.a)(e);return a&&(n=n.slice(n.indexOf(a)+1)),n.some((e)=>e.tagName&&t.includes(e.tagName.toLowerCase()))}function o(e,t){for(;e&&e!=p.a.document;)t(e),e=e.parentNode}var i=a(35),r=a(27),s=a(22),l=a(38),d=a(111),c=a(128),m=a(67),u=a(73),p=a(74),g=a(414),f=a(253),h=a(415);t.a=class{constructor(e={}){this.blockFiller=e.blockFiller||u.a,this.preElements=['pre'],this.blockElements=['p','div','h1','h2','h3','h4','h5','h6'],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,d.a.createFromSelection(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const t of Array.from(e.childNodes))this.unbindDomElement(t)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}viewToDom(e,t,a={}){if(e.is('text')){const a=this._processDataFromViewText(e);return t.createTextNode(a)}else{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is('documentFragment'))n=t.createDocumentFragment(),a.bind&&this.bindDocumentFragments(n,e);else{if(e.is('uiElement'))return n=e.render(t),a.bind&&this.bindElements(n,e),n;n=t.createElement(e.name),a.bind&&this.bindElements(n,e);for(const t of e.getAttributeKeys())n.setAttribute(t,e.getAttribute(t))}if(a.withChildren||void 0===a.withChildren)for(const o of this.viewChildrenToDom(e,t,a))n.appendChild(o);return n}}*viewChildrenToDom(e,t,a={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const i of e.getChildren())n===o&&(yield this.blockFiller(t)),yield this.viewToDom(i,t,a),o++;n===o&&(yield this.blockFiller(t))}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),a=this.viewPositionToDom(e.end),n=document.createRange();return n.setStart(t.parent,t.offset),n.setEnd(a.parent,a.offset),n}viewPositionToDom(e){const t=e.parent;if(t.is('text')){const a=this.findCorrespondingDomText(t);if(!a)return null;let n=e.offset;return Object(u.i)(a)&&(n+=u.c),{parent:a,offset:n}}else{let a,n,o;if(0===e.offset){if(a=this.mapViewToDom(t),!a)return null;o=a.childNodes[0]}else{const t=e.nodeBefore;if(n=t.is('text')?this.findCorrespondingDomText(t):this.mapViewToDom(e.nodeBefore),!n)return null;a=n.parentNode,o=n.nextSibling}if(this.isText(o)&&Object(u.i)(o))return{parent:o,offset:u.c};const i=n?Object(g.a)(n)+1:0;return{parent:a,offset:i}}}domToView(e,t={}){if(Object(u.g)(e,this.blockFiller))return null;const a=this.getParentUIElement(e,this._domToViewMapping);if(a)return a;if(this.isText(e)){if(Object(u.h)(e))return null;else{const t=this._processDataFromDomText(e);return''===t?null:new i.a(t)}}else if(this.isComment(e))return null;else{if(this.mapDomToView(e))return this.mapDomToView(e);let a;if(this.isDocumentFragment(e))a=new c.a,t.bind&&this.bindDocumentFragments(e,a);else{const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();a=new r.a(n),t.bind&&this.bindElements(e,a);const o=e.attributes;for(let e=o.length-1;0<=e;e--)a.setAttribute(o[e].name,o[e].value)}if(t.withChildren||void 0===t.withChildren)for(const n of this.domChildrenToView(e,t))a.appendChildren(n);return a}}*domChildrenToView(e,t={}){for(let a=0;a<e.childNodes.length;a++){const n=e.childNodes[a],o=this.domToView(n,t);null!==o&&(yield o)}}domSelectionToView(e){if(1===e.rangeCount){let t=e.getRangeAt(0).startContainer;this.isText(t)&&(t=t.parentNode);const a=this.fakeSelectionToView(t);if(a)return a}const t=new d.a,a=this.isDomSelectionBackward(e);for(let n=0;n<e.rangeCount;n++){const o=e.getRangeAt(n),i=this.domRangeToView(o);i&&t.addRange(i,a)}return t}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),a=this.domPositionToView(e.endContainer,e.endOffset);return t&&a?new l.a(t,a):null}domPositionToView(e,t){if(Object(u.g)(e,this.blockFiller))return this.domPositionToView(e.parentNode,Object(g.a)(e));const a=this.mapDomToView(e);if(a&&a.is('uiElement'))return s.a.createBefore(a);if(this.isText(e)){if(Object(u.h)(e))return this.domPositionToView(e.parentNode,Object(g.a)(e));const a=this.findCorrespondingViewText(e);let n=t;return a?(Object(u.i)(e)&&(n-=u.c,n=0>n?0:n),new s.a(a,n)):null}if(0===t){const t=this.mapDomToView(e);if(t)return new s.a(t,0)}else{const a=e.childNodes[t-1],n=this.isText(a)?this.findCorrespondingViewText(a):this.mapDomToView(a);if(n&&n.parent)return new s.a(n.parent,n.index+1)}return null}mapDomToView(e){return this.getParentUIElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Object(u.h)(e))return null;const t=this.getParentUIElement(e);if(t)return t;const a=e.previousSibling;if(a){if(!this.isElement(a))return null;const e=this.mapDomToView(a);if(e){const t=e.nextSibling;return t instanceof i.a?e.nextSibling:null}}else{const t=this.mapDomToView(e.parentNode);if(t){const e=t.getChild(0);return e instanceof i.a?e:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:e,scrollY:a}=p.a.window,n=[];o(t,(e)=>{const{scrollLeft:t,scrollTop:a}=e;n.push([t,a])}),t.focus(),o(t,(e)=>{const[t,a]=n.shift();e.scrollLeft=t,e.scrollTop=a}),p.a.window.scrollTo(e,a)}}isText(e){return e&&e.nodeType==Node.TEXT_NODE}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(e){return e&&e.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const a=t.collapsed;return t.detach(),a}getParentUIElement(e){const t=Object(f.a)(e);for(t.pop();t.length;){const e=t.pop(),a=this._domToViewMapping.get(e);if(a&&a.is('uiElement'))return a}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}_isDomSelectionPositionCorrect(e,t){if(this.isText(e)&&Object(u.i)(e)&&t<u.c)return!1;if(this.isElement(e)&&Object(u.i)(e.childNodes[t]))return!1;const a=this.mapDomToView(e);return a&&a.is('uiElement')?!1:!0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some((e)=>this.preElements.includes(e.name)))return t;if(' '==t.charAt(0)){const a=this._getTouchingViewTextNode(e,!1),n=a&&this._nodeEndsWithSpace(a);(n||!a)&&(t='\xA0'+t.substr(1))}if(' '==t.charAt(t.length-1)){const a=this._getTouchingViewTextNode(e,!0);a||(t=t.substr(0,t.length-1)+'\xA0')}return t.replace(/ {2}/g,' \xA0')}_nodeEndsWithSpace(e){if(e.getAncestors().some((e)=>this.preElements.includes(e.name)))return!1;const t=this._processDataFromViewText(e);return' '==t.charAt(t.length-1)}_processDataFromDomText(e){let t=Object(u.e)(e);if(n(e,this.preElements))return t;t=t.replace(/[ \n\t\r]{1,}/g,' ');const a=this._getTouchingDomTextNode(e,!1),o=this._getTouchingDomTextNode(e,!0);return(!a||/[^\S\u00A0]/.test(a.data.charAt(a.data.length-1)))&&(t=t.replace(/^ /,'')),o||(t=t.replace(/ $/,'')),t=t.replace(/ \u00A0/g,'  '),(!a||/[^\S\u00A0]/.test(a.data.charAt(a.data.length-1)))&&(t=t.replace(/^\u00A0/,' ')),o&&'\xA0'!=o.data.charAt(0)||(t=t.replace(/\u00A0( *)$/,' $1')),t}_getTouchingViewTextNode(e,t){const a=new m.a({startPosition:t?s.a.createAfter(e):s.a.createBefore(e),direction:t?'forward':'backward'});for(const n of a){if(n.item.is('containerElement'))return null;if(n.item.is('text'))return n.item}return null}_getTouchingDomTextNode(e,t){if(!e.parentNode)return null;const a=t?'nextNode':'previousNode',o=e.ownerDocument,i=o.createTreeWalker(o.childNodes[0],NodeFilter.SHOW_TEXT);i.currentNode=e;const r=i[a]();if(null!==r){const t=Object(h.a)(e,r);if(t&&!n(e,this.blockElements,t)&&!n(r,this.blockElements,t))return r}return null}}},function(e,t,a){'use strict';var n=a(45);class o{constructor(e,t,a){this.document=e,this.domEvent=t,this.domTarget=t.target,Object(n.a)(this,a)}get target(){return this.document.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}t.a=o},function(e,t){'use strict';t.a=function(e){return'[object Range]'==Object.prototype.toString.apply(e)}},function(e,t,a){'use strict';function n(e){return Object(c.a)(e)?e:Object(d.a)(e)?e.commonAncestorContainer:'function'==typeof e?n(e()):null}function o(e,t){return e.top-t.height-f.arrowVerticalOffset}function i(e){return e.bottom+f.arrowVerticalOffset}var r=a(7),s=a(6),l=a(436),d=a(155),c=a(258),m=a(438),u=a(74);const p=Object(m.a)('px'),g=u.a.document.body;class f extends r.a{constructor(e){super(e);const t=this.bindTemplate;this.set('top',0),this.set('left',0),this.set('position','arrow_nw'),this.set('isVisible',!1),this.set('withArrow',!0),this.set('className'),this.content=this.createCollection(),this.template=new s.a({tag:'div',attributes:{class:['ck-balloon-panel',t.to('position',(e)=>`ck-balloon-panel_${e}`),t.if('isVisible','ck-balloon-panel_visible'),t.if('withArrow','ck-balloon-panel_with-arrow'),t.to('className')],style:{top:t.to('top',p),left:t.to('left',p)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=f.defaultPositions,a=Object.assign({},{element:this.element,positions:[t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouthWest,t.northArrowSouthEast],limiter:g,fitInViewport:!0},e),{top:n,left:o,name:i}=Object(l.a)(a);Object.assign(this,{top:n,left:o,position:i})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,'change:isVisible',this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,'change:isVisible',this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=n(e.target),a=e.limiter?n(e.limiter):g;this.listenTo(u.a.document,'scroll',(n,o)=>{const i=o.target,r=t&&i.contains(t),s=a&&i.contains(a);(r||s||!t||!a)&&this.attachTo(e)},{useCapture:!0}),this.listenTo(u.a.window,'resize',()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(u.a.document,'scroll'),this.stopListening(u.a.window,'resize')}}t.a=f,f.arrowHorizontalOffset=30,f.arrowVerticalOffset=15,f.defaultPositions={northArrowSouth:(e,t)=>({top:o(e,t),left:e.left+e.width/2-t.width/2,name:'arrow_s'}),northArrowSouthEast:(e,t)=>({top:o(e,t),left:e.left+e.width/2-t.width+f.arrowHorizontalOffset,name:'arrow_se'}),northArrowSouthWest:(e,t)=>({top:o(e,t),left:e.left+e.width/2-f.arrowHorizontalOffset,name:'arrow_sw'}),northWestArrowSouth:(e,t)=>({top:o(e,t),left:e.left-t.width/2,name:'arrow_s'}),northWestArrowSouthWest:(e,t)=>({top:o(e,t),left:e.left-f.arrowHorizontalOffset,name:'arrow_sw'}),northWestArrowSouthEast:(e,t)=>({top:o(e,t),left:e.left-t.width+f.arrowHorizontalOffset,name:'arrow_se'}),northEastArrowSouth:(e,t)=>({top:o(e,t),left:e.right-t.width/2,name:'arrow_s'}),northEastArrowSouthEast:(e,t)=>({top:o(e,t),left:e.right-t.width+f.arrowHorizontalOffset,name:'arrow_se'}),northEastArrowSouthWest:(e,t)=>({top:o(e,t),left:e.right-f.arrowHorizontalOffset,name:'arrow_sw'}),southArrowNorth:(e,t)=>({top:i(e,t),left:e.left+e.width/2-t.width/2,name:'arrow_n'}),southArrowNorthEast:(e,t)=>({top:i(e,t),left:e.left+e.width/2-t.width+f.arrowHorizontalOffset,name:'arrow_ne'}),southArrowNorthWest:(e,t)=>({top:i(e,t),left:e.left+e.width/2-f.arrowHorizontalOffset,name:'arrow_nw'}),southWestArrowNorth:(e,t)=>({top:i(e,t),left:e.left-t.width/2,name:'arrow_n'}),southWestArrowNorthWest:(e,t)=>({top:i(e,t),left:e.left-f.arrowHorizontalOffset,name:'arrow_nw'}),southWestArrowNorthEast:(e,t)=>({top:i(e,t),left:e.left-t.width+f.arrowHorizontalOffset,name:'arrow_ne'}),southEastArrowNorth:(e,t)=>({top:i(e,t),left:e.right-t.width/2,name:'arrow_n'}),southEastArrowNorthEast:(e,t)=>({top:i(e,t),left:e.right-t.width+f.arrowHorizontalOffset,name:'arrow_ne'}),southEastArrowNorthWest:(e,t)=>({top:i(e,t),left:e.right-f.arrowHorizontalOffset,name:'arrow_nw'})}},function(e,t,a){'use strict';function n(e,t,a){const n=new r.a;n.on('change:top',(n,o)=>{o.oldDescriptor&&a(e,o.oldDescriptor),o.newDescriptor&&t(e,o.newDescriptor)}),e.setCustomProperty('addHighlight',(e,t)=>n.add(t)),e.setCustomProperty('removeHighlight',(e,t)=>n.remove(t))}function o(e,t){e.setCustomProperty(l,t)}function i(){return null}t.c=function(e){return!!e.getCustomProperty(s)},t.d=function(e,t={}){function a(e){return Array.isArray(e)?e:[e]}return e.setAttribute('contenteditable',!1),e.getFillerOffset=i,e.addClass(d),e.setCustomProperty(s,!0),t.label&&o(e,t.label),n(e,(e,t)=>e.addClass(...a(t.class)),(e,t)=>e.removeClass(...a(t.class))),e},t.b=function(e){const t=e.getCustomProperty(l);return t?'function'==typeof t?t():t:''},t.e=function(e){return e.addClass('ck-editable'),e.setAttribute('contenteditable',!e.isReadOnly),e.on('change:isReadOnly',(t,a,n)=>{e.setAttribute('contenteditable',!n)}),e.on('change:isFocused',(t,a,n)=>{n?e.addClass('ck-editable_focused'):e.removeClass('ck-editable_focused')}),e};var r=a(492);const s=Symbol('isWidget'),l=Symbol('label'),d='ck-widget';t.a='ck-widget_selected'},function(e,t,a){'use strict';var n=a(2),o=a(156),i=a(0),r=a(61);class s extends n.a{static get pluginName(){return'ContextualBalloon'}init(){this.view=new o.a,this.positionLimiter=()=>{const e=this.editor.editing.view,t=e.selection.editableElement;return t?e.domConverter.mapViewToDom(t.root):null},this._stack=new Map,this.editor.ui.focusTracker.add(this.view.element),this.editor.ui.view.body.add(this.view)}get visibleView(){const e=this._stack.get(this.view.content.get(0));return e?e.view:null}hasView(e){return this._stack.has(e)}add(e){if(this.hasView(e.view))throw new i.b('contextualballoon-add-view-exist: Cannot add configuration of the same view twice.');this.visibleView&&this.view.content.remove(this.visibleView),this._stack.set(e.view,e),this._show(e)}remove(e){if(!this.hasView(e))throw new i.b('contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.');if(this.visibleView===e){this.view.content.remove(e),this._stack.delete(e);const t=Array.from(this._stack.values()).pop();t?this._show(t):this.view.hide()}else this._stack.delete(e)}updatePosition(e){e&&(this._stack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition())}_show({view:e,balloonClassName:t=''}){this.view.className=t,this.view.content.add(e),this.view.pin(this._getBalloonPosition())}_getBalloonPosition(){let e=Object(r.a)(this._stack.values()).position;return e&&!e.limiter&&(e=Object.assign({},e,{limiter:this.positionLimiter})),e}}t.a=s},function(e,t){'use strict';t.a=function(e,t,a){var n=a.length;return 0===n?e.call(t):1===n?e.call(t,a[0]):2===n?e.call(t,a[0],a[1]):3===n?e.call(t,a[0],a[1],a[2]):e.apply(t,a)}},function(e,t,a){'use strict';var n=a(64),o=a(17),i=a(46),r=0/0,s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,c=/^0o[0-7]+$/i,m=parseInt;t.a=function(e){if('number'==typeof e)return e;if(Object(i.a)(e))return r;if(Object(o.a)(e)){var t=Object(n.a)(e.valueOf)?e.valueOf():e;e=Object(o.a)(t)?t+'':t}if('string'!=typeof e)return 0===e?e:+e;e=e.replace(s,'');var a=d.test(e);return a||c.test(e)?m(e.slice(2),a?2:8):l.test(e)?r:+e}},function(e){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,'loaded',{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,'id',{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,'exports',{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,a){'use strict';var n=a(163),o=a(119),i=a(15),r=a(81),s=a(120);t.a=function(e){var t=e?e.length:void 0;return Object(r.a)(t)&&(Object(i.a)(e)||Object(s.a)(e)||Object(o.a)(e))?Object(n.a)(t,String):null}},function(e,t){'use strict';t.a=function(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}},function(e,t,a){'use strict';var n=a(1),o=a(3),i=a(22),r=a(38),s=a(35),l=a(8),d=a(4);class c{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this.on('modelToViewPosition',(e,t)=>{if(!t.viewPosition){const e=this._modelToViewMapping.get(t.modelPosition.parent);t.viewPosition=this._findPositionIn(e,t.modelPosition.offset)}},{priority:'low'}),this.on('viewToModelPosition',(e,t)=>{if(t.modelPosition)return;let a=t.viewPosition.parent,o=this._viewToModelMapping.get(a);for(;!o;)a=a.parent,o=this._viewToModelMapping.get(a);const i=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,a);t.modelPosition=n.a.createFromParentAndOffset(o,i)},{priority:'low'})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e){const t=this.toModelElement(e);this._unbindElements(t,e)}unbindModelElement(e){const t=this.toViewElement(e);this._unbindElements(e,t)}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new o.a(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new r.a(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire('viewToModelPosition',t),t.modelPosition}toViewPosition(e){const t={modelPosition:e,mapper:this};return this.fire('modelToViewPosition',t),t.viewPosition}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}_toModelOffset(e,t,a){if(a!=e){const n=this._toModelOffset(e.parent,e.index,a),o=this._toModelOffset(e,t,e);return n+o}if(e.is('text'))return t;let n=0;for(let o=0;o<t;o++)n+=this.getModelLength(e.getChild(o));return n}_unbindElements(e,t){this._viewToModelMapping.delete(t),this._modelToViewMapping.delete(e)}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name)){const t=this._viewToModelLengthCallbacks.get(e.name);return t(e)}if(this._viewToModelMapping.has(e))return 1;if(e.is('text'))return e.data.length;if(e.is('uiElement'))return 0;else{let t=0;for(const a of e.getChildren())t+=this.getModelLength(a);return t}}_findPositionIn(e,t){let a=0,n=0,o=0,r;if(e.is('text'))return new i.a(e,t);for(;n<t;)r=e.getChild(o),a=this.getModelLength(r),n+=a,o++;return n==t?this._moveViewPositionToTextNode(new i.a(e,o)):this._findPositionIn(r,t-(n-a))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,a=e.nodeAfter;if(t instanceof s.a)return new i.a(t,t.data.length);return a instanceof s.a?new i.a(a,0):e}}t.a=c,Object(d.a)(c,l.c)},function(e,t){'use strict';t.a=function(e){const t=new Map;for(const a in e)t.set(a,e[a]);return t}},function(e,t,a){'use strict';function n(e,t,a,T,P,E,S){var V;if(T&&(V=E?T(e,P,E,S):T(e)),void 0!==V)return V;if(!Object(k.a)(e))return e;var O=Object(h.a)(e);if(!O){var R=Object(u.a)(e),F=R==v||R==x;if(Object(b.a)(e))return Object(l.a)(e,t);if(R==A||R==y||F&&!E){if(Object(_.a)(e))return E?e:{};if(V=Object(f.a)(F?{}:e),!t)return Object(c.a)(e,Object(s.a)(V,e))}else{if(!C[R])return E?e:{};V=Object(g.a)(e,R,n,t)}}else if(V=Object(p.a)(e),!t)return Object(d.a)(e,V);S||(S=new o.a);var I=S.get(e);if(I)return I;if(S.set(e,V),!O)var N=a?Object(m.a)(e):Object(w.a)(e);return Object(i.a)(N||e,function(o,i){N&&(i=o,o=e[i]),Object(r.a)(V,i,n(o,t,a,T,i,e,S))}),V}var o=a(122),i=a(324),r=a(63),s=a(325),l=a(327),d=a(171),c=a(328),m=a(329),u=a(124),p=a(334),g=a(335),f=a(344),h=a(15),b=a(346),_=a(78),k=a(17),w=a(69),y='[object Arguments]',v='[object Function]',x='[object GeneratorFunction]',A='[object Object]',C={};C[y]=C['[object Array]']=C['[object ArrayBuffer]']=C['[object DataView]']=C['[object Boolean]']=C['[object Date]']=C['[object Float32Array]']=C['[object Float64Array]']=C['[object Int8Array]']=C['[object Int16Array]']=C['[object Int32Array]']=C['[object Map]']=C['[object Number]']=C[A]=C['[object RegExp]']=C['[object Set]']=C['[object String]']=C['[object Symbol]']=C['[object Uint8Array]']=C['[object Uint8ClampedArray]']=C['[object Uint16Array]']=C['[object Uint32Array]']=!0,C['[object Error]']=C[v]=C['[object WeakMap]']=!1,t.a=n},function(e,t,a){'use strict';var n=a(64),o=a(78),i=a(17),r=a(168),s=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,d=Object.prototype,c=Function.prototype.toString,m=d.hasOwnProperty,u=RegExp('^'+c.call(m).replace(s,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');t.a=function(e){if(!Object(i.a)(e))return!1;var t=Object(n.a)(e)||Object(o.a)(e)?u:l;return t.test(Object(r.a)(e))}},function(e,t){'use strict';var a=Function.prototype.toString;t.a=function(e){if(null!=e){try{return a.call(e)}catch(t){}try{return e+''}catch(t){}}return''}},function(e,t,a){'use strict';var n=a(55),o=a(33),i=Object(n.a)(o.a,'Map');t.a=i},function(e,t,a){'use strict';var n=a(116),o=Object.prototype,i=o.hasOwnProperty;t.a=function(e,t){return i.call(e,t)||'object'==typeof e&&t in e&&null===Object(n.a)(e)}},function(e,t){'use strict';t.a=function(e,t){var a=-1,n=e.length;for(t||(t=Array(n));++a<n;)t[a]=e[a];return t}},function(e,t){'use strict';function a(e){return n(Object(e))}var n=Object.getOwnPropertySymbols;n||(a=function(){return[]}),t.a=a},function(e,t,a){'use strict';var n=a(55),o=a(33),i=Object(n.a)(o.a,'Set');t.a=i},function(e,t,a){'use strict';var n=a(33),o=n.a.Uint8Array;t.a=o},function(e,t){'use strict';t.a=function(e,t,a,n){var o=-1,i=e.length;for(n&&i&&(a=e[++o]);++o<i;)a=t(a,e[o],o,e);return a}},function(e,t){'use strict';function a(e,t){if('function'==typeof t)return t(e);const a={};return t.name&&(a.name=n(t.name,e.name),!a.name)?null:t.attribute&&(a.attribute=o(t.attribute,e),!a.attribute)?null:t.class&&(a.class=i(t.class,e),!a.class)?!1:t.style&&(a.style=r(t.style,e),!a.style)?!1:a}function n(e,t){return e instanceof RegExp?e.test(t):e===t}function o(e,t){const a=[];for(const n in e){const o=e[n];if(t.hasAttribute(n)){const e=t.getAttribute(n);if(o instanceof RegExp){if(o.test(e))a.push(n);else return null;}else if(e===o)a.push(n);else return null}else return null}return a}function i(e,t){const a=[];for(const n of e)if(n instanceof RegExp){const e=t.getClassNames();for(const t of e)n.test(t)&&a.push(t);if(0===a.length)return null}else if(t.hasClass(n))a.push(n);else return null;return a}function r(e,t){const a=[];for(const n in e){const o=e[n];if(t.hasStyle(n)){const e=t.getStyle(n);if(o instanceof RegExp){if(o.test(e))a.push(n);else return null;}else if(e===o)a.push(n);else return null}else return null}return a}t.a=class{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)('string'==typeof t||t instanceof RegExp)&&(t={name:t}),t.class&&('string'==typeof t.class||t.class instanceof RegExp)&&(t.class=[t.class]),this._patterns.push(t)}match(...e){for(const t of e)for(const e of this._patterns){const n=a(t,e);if(n)return{element:t,pattern:e,match:n}}return null}matchAll(...e){const t=[];for(const n of e)for(const e of this._patterns){const o=a(n,e);o&&t.push({element:n,pattern:e,match:o})}return 0<t.length?t:null}getElementName(){if(1!==this._patterns.length)return null;const e=this._patterns[0],t=e.name;return'function'!=typeof e&&t&&!(t instanceof RegExp)?t:null}}},function(e,t,a){'use strict';function n(e,t,a){const n=t.getRange(),o=Array.from(e.getAncestors());o.shift(),o.reverse();const i=o.some((e)=>{if(n.containsItem(e)){const t=a.toViewElement(e);return!!t.getCustomProperty('addHighlight')}});return!i}var o=a(349),i=a(3),r=a(1),s=a(39),l=a(8),d=a(4),c=a(45);class m{constructor(e,t={}){this._modelDocument=e,this.conversionApi=Object(c.a)({dispatcher:this},t)}convertChange(e,t){'remove'!==e&&t.range&&'$graveyard'==t.range.root.rootName||'remove'==e&&'$graveyard'==t.sourcePosition.root.rootName||'rename'==e&&'$graveyard'==t.element.root.rootName||('insert'==e||'reinsert'==e?this.convertInsertion(t.range):'move'==e?this.convertMove(t.sourcePosition,t.range):'remove'==e?this.convertRemove(t.sourcePosition,t.range):'addAttribute'==e||'removeAttribute'==e||'changeAttribute'==e?this.convertAttribute(e,t.range,t.key,t.oldValue,t.newValue):'rename'==e&&this.convertRename(t.element,t.oldName))}convertInsertion(e){const t=this._createInsertConsumable(e);for(const a of e){const e=a.item,n=i.a.createFromPositionAndShift(a.previousPosition,a.length),o={item:e,range:n};this._testAndFire('insert',o,t);for(const a of e.getAttributeKeys())o.attributeKey=a,o.attributeOldValue=null,o.attributeNewValue=e.getAttribute(a),this._testAndFire(`addAttribute:${a}`,o,t)}for(const t of this._modelDocument.markers){const a=t.getRange(),o=a.getIntersection(e);o&&n(e.start,t,this.conversionApi.mapper)&&this.convertMarker('addMarker',t.name,o)}}convertMove(e,t){if(t.start.isBefore(e)){this.convertInsertion(t);const a=e._getTransformedByInsertion(t.start,t.end.offset-t.start.offset);this.convertRemove(a,t)}else this.convertRemove(e,t),this.convertInsertion(t)}convertRemove(e,t){const a=this._createConsumableForRange(t,'remove');for(const n of t.getItems({shallow:!0})){this._testAndFire('remove',{sourcePosition:e,item:n},a)}}convertAttribute(e,t,a,n,o){if(n!=o){const r=this._createConsumableForRange(t,e+':'+a);for(const s of t){const t=s.item,l=i.a.createFromPositionAndShift(s.previousPosition,s.length);this._testAndFire(`${e}:${a}`,{item:t,range:l,attributeKey:a,attributeOldValue:n,attributeNewValue:o},r)}}}convertRename(e,t){if(e.name!=t){const a=e.clone(!0);a.name=t,this.conversionApi.mapper.bindElements(a,this.conversionApi.mapper.toViewElement(e));const n=new s.a;n.appendChildren(a),this.convertRemove(r.a.createBefore(e),i.a.createOn(a)),this.convertInsertion(i.a.createOn(e))}}convertSelection(e){const t=Array.from(this._modelDocument.markers.getMarkersAtPosition(e.getFirstPosition())),a=this._createSelectionConsumable(e,t);this.fire('selection',{selection:e},a,this.conversionApi);for(const o of t){const t=o.getRange();if(!n(e.getFirstPosition(),o,this.conversionApi.mapper))continue;const i={selection:e,markerName:o.name,markerRange:t};a.test(e,'selectionMarker:'+o.name)&&this.fire('selectionMarker:'+o.name,i,a,this.conversionApi)}for(const t of e.getAttributeKeys()){const n={selection:e,key:t,value:e.getAttribute(t)};a.test(e,'selectionAttribute:'+n.key)&&this.fire('selectionAttribute:'+n.key,n,a,this.conversionApi)}}convertMarker(e,t,a){if(a.root.document&&'$graveyard'!=a.root.rootName){const n=e+':'+t;if(a.isCollapsed){const e=new o.a;return e.add(a,n),void this.fire(n,{markerName:t,markerRange:a},e,this.conversionApi)}const r=this._createConsumableForRange(a,n);for(const e of a){const o=e.item;if(!r.test(o,n))continue;const s={item:o,range:i.a.createFromPositionAndShift(e.previousPosition,e.length),markerName:t,markerRange:a};this.fire(n,s,r,this.conversionApi)}}}_createInsertConsumable(e){const t=new o.a;for(const a of e){const e=a.item;t.add(e,'insert');for(const a of e.getAttributeKeys())t.add(e,'addAttribute:'+a)}return t}_createConsumableForRange(e,t){const a=new o.a;for(const n of e.getItems())a.add(n,t);return a}_createSelectionConsumable(e,t){const a=new o.a;a.add(e,'selection');for(const n of t)a.add(e,'selectionMarker:'+n.name);for(const n of e.getAttributeKeys())a.add(e,'selectionAttribute:'+n);return a}_testAndFire(e,t,a){if(a.test(t.item,e)){const n=t.item.name||'$text';this.fire(e+':'+n,t,a,this.conversionApi)}}}t.a=m,Object(d.a)(m,l.c)},function(e,t,a){'use strict';function n(){return null}var o=a(27),i=a(0),r=a(84);class s extends o.a{constructor(e,t,a){super(e,t,a),this.getFillerOffset=n}is(e,t=null){return t?'emptyElement'==e&&t==this.name||super.is(e,t):'emptyElement'==e||super.is(e)}insertChildren(e,t){if(t&&(t instanceof r.a||0<Array.from(t).length))throw new i.b('view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.')}}t.a=s},function(e,t,a){'use strict';function n(){const e=new Set(['insert','move','remove','reinsert']);this.listenTo(this.root.document,'change',(t,a,n)=>{e.has(a)&&o.call(this,a,n.range,n.sourcePosition)},{priority:'high'})}function o(e,t,a){const n=t.end.offset-t.start.offset;let o;switch(e){case'insert':const i='sticksToNext'==this.stickiness;o=this._getTransformedByInsertion(t.start,n,i);break;case'move':case'remove':case'reinsert':const s=r.a.createFromPositionAndShift(a,n),l=s.containsPosition(this)||s.start.isEqual(this)&&'sticksToNext'==this.stickiness||s.end.isEqual(this)&&'sticksToPrevious'==this.stickiness;if(l)o=this._getCombined(a,t.start);else{const e='sticksToNext'==this.stickiness;o=this._getTransformedByMove(a,t.start,n,e)}}if(!this.isEqual(o)){const e=i.a.createFromPosition(this);this.path=o.path,this.root=o.root,this.fire('change',e)}}var i=a(1),r=a(3),s=a(8),l=a(4),d=a(0);class c extends i.a{constructor(e,t,a){if(super(e,t),!this.root.is('rootElement'))throw new d.b('model-liveposition-root-not-rootelement: LivePosition\'s root has to be an instance of RootElement.');this.stickiness=a||'sticksToNext',n.call(this)}detach(){this.stopListening()}}t.a=c,Object(l.a)(c,s.c)},function(e,t){'use strict';function a(e){return!!e&&1==e.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e)}function n(e){return!!e&&1==e.length&&/[\ud800-\udbff]/.test(e)}function o(e){return!!e&&1==e.length&&/[\udc00-\udfff]/.test(e)}t.b=function(e,t){return n(e.charAt(t-1))&&o(e.charAt(t))},t.a=function(e,t){return a(e.charAt(t))}},function(e,t,a){'use strict';var n=a(97),o=a(365);t.a=function(e,t,a,i,r,s){var l=r&2,d=e.length,c=t.length;if(d!=c&&!(l&&c>d))return!1;var m=s.get(e);if(m)return m==t;var u=-1,p=!0,g=r&1?new n.a:void 0;for(s.set(e,t);++u<d;){var f=e[u],h=t[u];if(i)var b=l?i(h,f,u,t,e,s):i(f,h,u,e,t,s);if(void 0!==b){if(b)continue;p=!1;break}if(g){if(!Object(o.a)(t,function(e,t){if(!g.has(t)&&(f===e||a(f,e,i,r,s)))return g.add(t)})){p=!1;break}}else if(!(f===h||a(f,h,i,r,s))){p=!1;break}}return s['delete'](e),p}},function(e,t,a){'use strict';var n=a(133),o=a(20),i=a(19),r=a(48),s=a(23);class l extends n.a{static get className(){return'engine.model.delta.WeakInsertDelta'}}t.a=l,Object(o.b)('weakInsert',function(e,t){const a=new l;this.addDelta(a),t=Object(s.c)(t);for(const a of t)a.setAttributesTo(this.document.selection.getAttributes());const n=new r.a(e,t,this.document.version);return a.addOperation(n),this.document.applyOperation(n),this}),i.a.register(l)},function(e,t,a){'use strict';function n(e,t){for(const a of t)for(const t of a.operations)t.baseVersion=++e;return t}function o(e){return e.reduce((e,t)=>e+t.operations.length,0)}function i(e,t){const a=e[e.length-1];let n=a.operations.length+a.baseVersion;const o=new g.a;for(let a=0;a<t;a++)o.addOperation(new A.a(n++));e.push(o)}function r(e,t,a){c(e,t,a),s(e,t,a),d(t,a),l(t,a)}function s(e,t,a){const n=a.originalDelta.get(t);if(a.document.history.isUndoingDelta(n)){const t=a.document.history.getUndoneDelta(n),o=a.wasAffected.get(e),i=o.get(t);i!==void 0&&(a.insertBefore=i)}}function l(e,t){const a=t.originalDelta.get(e),n=t.document.history;t.forceNotSticky=n.isUndoneDelta(a)||n.isUndoingDelta(a)}function d(e,t){const a=t.document.history,n=t.originalDelta.get(e);t.forceWeakRemove=a.isUndoneDelta(n)}function c(e,t,a){a.wasAffected.get(e)||a.wasAffected.set(e,new Map);const n=a.originalDelta.get(t);let o=!!a.wasAffected.get(e).get(n);for(const n of e.operations){for(const e of t.operations)if(n instanceof C.a&&e instanceof C.a&&m(n,e)){o=!0;break}if(o)break}a.wasAffected.get(e).set(n,o)}function m(e,t){const a=e.targetPosition,n=t.sourcePosition,o=Object(E.a)(n.getParentPath(),a.getParentPath());return!(a.root!=n.root)&&'same'==o&&n.offset<a.offset}function u(e,t,a){delete a.insertBefore,delete a.forceNotSticky,delete a.forceWeakRemove;const n=a.wasAffected.get(e);a.wasAffected.delete(e);for(const o of t)a.wasAffected.set(o,new Map(n))}function p(e,t){let a=[],n=null,o;switch(e){case f.a:case h.a:for(const e of t)n=e instanceof A.a?new g.a:e instanceof T.a?new h.a:new f.a,n.addOperation(e),a.push(n);return a;case _.a:case k.a:return n=new e,n.addOperation(t[0]),n.addOperation(t[1]),a=p(f.a,t.slice(2)),[n].concat(a);case b.a:case w.a:return a=p(f.a,t.slice(0,-2)),n=new e,n.addOperation(t[t.length-2]),n.addOperation(t[t.length-1]),a.concat(n);case y.a:return n=t[0]instanceof A.a?new g.a:new y.a,n.addOperation(t[0]),[n];case v.a:for(o=0;o<t.length&&!!(t[o]instanceof A.a);o++);o==t.length?n=new g.a:(n=new v.a,0!=o&&t.unshift(t.splice(o,1)[0]));for(const e of t)n.addOperation(e);return[n];default:n=new e;for(const e of t)n.addOperation(e);return[n];}}var g=a(24),f=a(100),h=a(99),b=a(101),_=a(102),k=a(104),w=a(103),y=a(134),v=a(129),x=a(370),A=a(71),C=a(29),T=a(41),P=a(371),E=a(54);const S=new Map,V={transform(e,t,a){const o=V.getTransformationCase(e,t)||V.defaultTransform,i=o(e,t,Object.assign({},a)),r=P.a.last(t.operations).baseVersion;return n(r,i)},defaultTransform(e,t,a){const n=[];let o=t.operations,r=[];for(const i of e.operations){const e=[i];for(const t of o)for(let n=0;n<e.length;n++){const o=e[n],i=Object(x.a)(o,t,a);Array.prototype.splice.apply(e,[n,1].concat(i)),n+=i.length-1;const s=Object.assign({},a);s.isStrong=!a.isStrong,s.insertBefore=a.insertBefore===void 0?void 0:!a.insertBefore;const l=Object(x.a)(t,o,s);Array.prototype.push.apply(r,l)}o=r,r=[];for(const t of e)n.push(t)}return p(e.constructor,n)},addTransformationCase(e,t,a){let n=S.get(e);n||(n=new Map,S.set(e,n)),n.set(t,a)},getTransformationCase(e,t){let a=S.get(e.constructor);if(!a||!a.get(t.constructor)){const n=S.keys();for(const o of n)if(e instanceof o&&S.get(o).get(t.constructor)){a=S.get(o);break}}return a?a.get(t.constructor):void 0},transformDeltaSets(e,t,a=null){const n=Array.from(e),s=Array.from(t),d=null!==a,c={isStrong:!0};if(d){c.wasAffected=new Map,c.originalDelta=new Map,c.document=a,c.undoMode=!0;for(const e of s)c.originalDelta.set(e,e)}for(let o=0;o<n.length;o++){const e=[n[o]];for(let t=0;t<s.length;t++){const a=[s[t]];for(let t=0;t<e.length;t++)for(let n=0;n<a.length;n++){d&&r(e[t],a[n],c);const o=V.transform(e[t],a[n],{insertBefore:c.insertBefore,forceNotSticky:c.forceNotSticky,isStrong:c.isStrong,forceWeakRemove:c.forceWeakRemove,undoMode:c.undoMode}),i=V.transform(a[n],e[t],{insertBefore:!c.insertBefore,forceNotSticky:c.forceNotSticky,isStrong:!c.isStrong,forceWeakRemove:c.forceWeakRemove,undoMode:c.undoMode});if(d){u(e[t],o,c);const r=c.originalDelta.get(a[n]);for(const e of i)c.originalDelta.set(e,r)}e.splice(t,1,...o),t+=o.length-1,a.splice(n,1,...i),n+=i.length-1}s.splice(t,1,...a),t+=a.length-1}n.splice(o,1,...e),o+=e.length-1}const l=o(n)-o(e),m=o(s)-o(t);return m<l?i(s,l-m):l<m&&i(n,m-l),{deltasA:n,deltasB:s}}};t.a=V},function(e,t,a){'use strict';var n=a(42),i=a(79),r=a(13),s=Math.ceil;t.a=function(e,t,a){t=(a?Object(i.a)(e,t,a):void 0===t)?1:o(Object(r.a)(t),0);var l=e?e.length:0;if(!l||1>t)return[];for(var d=0,c=0,m=Array(s(l/t));d<l;)m[c++]=Object(n.a)(e,d,d+=t);return m}},function(e,t){'use strict';t.a=function(e){for(var t=-1,a=e?e.length:0,n=0,o=[];++t<a;){var i=e[t];i&&(o[n++]=i)}return o}},function(e,t,a){'use strict';var n=a(89),o=a(25),i=a(171),r=a(15);t.a=function(){for(var e=arguments.length,t=Array(e?e-1:0),a=arguments[0],s=e;s--;)t[s-1]=arguments[s];return e?Object(n.a)(Object(r.a)(a)?Object(i.a)(a):[a],Object(o.a)(t,1)):[]}},function(e,t,a){'use strict';var n=a(72),o=a(25),i=a(14),r=a(9),s=Object(r.a)(function(e,t){return Object(i.a)(e)?Object(n.a)(e,Object(o.a)(t,1,i.a,!0)):[]});t.a=s},function(e,t){'use strict';t.a=function(e,t,a){for(var n=e.length,o=t+(a?0:-1);a?o--:++o<n;){var i=e[o];if(i!==i)return o}return-1}},function(e,t,a){'use strict';var n=a(72),o=a(25),i=a(10),r=a(14),s=a(18),l=a(9),d=Object(l.a)(function(e,t){var a=Object(s.a)(t);return Object(r.a)(a)&&(a=void 0),Object(r.a)(e)?Object(n.a)(e,Object(o.a)(t,1,r.a,!0),Object(i.a)(a)):[]});t.a=d},function(e,t,a){'use strict';var n=a(17);t.a=function(e){return e===e&&!Object(n.a)(e)}},function(e,t){'use strict';t.a=function(e,t){return function(a){return null!=a&&a[e]===t&&(t!==void 0||e in Object(a))}}},function(e,t,a){'use strict';var n=a(140);t.a=function(e,t,a){var o=null==e?void 0:Object(n.a)(e,t);return o===void 0?a:o}},function(e,t){'use strict';t.a=function(e){return e}},function(e,t,a){'use strict';var n=a(72),o=a(25),i=a(14),r=a(18),s=a(9),l=Object(s.a)(function(e,t){var a=Object(r.a)(t);return Object(i.a)(a)&&(a=void 0),Object(i.a)(e)?Object(n.a)(e,Object(o.a)(t,1,i.a,!0),void 0,a):[]});t.a=l},function(e,t,a){'use strict';var n=a(10),o=a(106);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(n.a)(t,3),!0,!0):[]}},function(e,t,a){'use strict';var n=a(10),o=a(106);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(n.a)(t,3),!0):[]}},function(e,t,a){'use strict';var n=a(390),o=a(79);t.a=function(e,t,a,i){var r=e?e.length:0;return r?(a&&'number'!=typeof a&&Object(o.a)(e,t,a)&&(a=0,i=r),Object(n.a)(e,t,a,i)):[]}},function(e,t,a){'use strict';var n=a(199),o=a(10);t.a=function(e,t){return e&&e.length?Object(n.a)(e,Object(o.a)(t,3)):-1}},function(e,t){'use strict';t.a=function(e,t,a){for(var n=e.length,o=a?n:-1;a?o--:++o<n;)if(t(e[o],o,e))return o;return-1}},function(e,t,a){'use strict';var n=a(199),o=a(10);t.a=function(e,t){return e&&e.length?Object(n.a)(e,Object(o.a)(t,3),!0):-1}},function(e,t,a){'use strict';var n=a(143);a.d(t,'a',function(){return n.a})},function(e,t,a){'use strict';var n=a(25);t.a=function(e){var t=e?e.length:0;return t?Object(n.a)(e,1):[]}},function(e,t,a){'use strict';var n=a(25);t.a=function(e){var t=e?e.length:0;return t?Object(n.a)(e,1/0):[]}},function(e,t,a){'use strict';var n=a(25),o=a(13);t.a=function(e,t){var a=e?e.length:0;return a?(t=void 0===t?1:Object(o.a)(t),Object(n.a)(e,t)):[]}},function(e,t){'use strict';t.a=function(e){for(var t=-1,a=e?e.length:0,n={};++t<a;){var o=e[t];n[o[0]]=o[1]}return n}},function(e,t,a){'use strict';var n=a(136),i=a(13);t.a=function(e,t,a){var r=e?e.length:0;return r?(a=Object(i.a)(a),0>a&&(a=o(r+a,0)),Object(n.a)(e,t,a)):-1}},function(e,t,a){'use strict';var n=a(142);t.a=function(e){return Object(n.a)(e,1)}},function(e,t,a){'use strict';var n=a(30),o=a(144),i=a(145),r=a(9),s=Object(r.a)(function(e){var t=Object(n.a)(e,i.a);return t.length&&t[0]===e[0]?Object(o.a)(t):[]});t.a=s},function(e,t,a){'use strict';var n=a(30),o=a(144),i=a(10),r=a(145),s=a(18),l=a(9),d=Object(l.a)(function(e){var t=Object(s.a)(e),a=Object(n.a)(e,r.a);return t===Object(s.a)(a)?t=void 0:a.pop(),a.length&&a[0]===e[0]?Object(o.a)(a,Object(i.a)(t)):[]});t.a=d},function(e,t,a){'use strict';var n=a(30),o=a(144),i=a(145),r=a(18),s=a(9),l=Object(s.a)(function(e){var t=Object(r.a)(e),a=Object(n.a)(e,i.a);return t===Object(r.a)(a)?t=void 0:a.pop(),a.length&&a[0]===e[0]?Object(o.a)(a,void 0,t):[]});t.a=l},function(e,t){'use strict';var a=Array.prototype,n=a.join;t.a=function(e,t){return e?n.call(e,t):''}},function(e,t,a){'use strict';var i=a(188),r=a(13);t.a=function(e,t,a){var s=e?e.length:0;if(!s)return-1;var l=s;if(void 0!==a&&(l=Object(r.a)(a),l=(0>l?o(s+l,0):n(l,s-1))+1),t!==t)return Object(i.a)(e,l,!0);for(;l--;)if(e[l]===t)return l;return-1}},function(e,t,a){'use strict';var o=a(393),i=a(13);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(i.a)(t)):void 0}},function(e,t,a){'use strict';var n=a(146),o=a(9),i=Object(o.a)(n.a);t.a=i},function(e,t,a){'use strict';var n=a(10),o=a(147);t.a=function(e,t,a){return e&&e.length&&t&&t.length?Object(o.a)(e,t,Object(n.a)(a)):e}},function(e,t,a){'use strict';var n=a(147);t.a=function(e,t,a){return e&&e.length&&t&&t.length?Object(n.a)(e,t,void 0,a):e}},function(e,t,a){'use strict';var n=a(30),o=a(395),i=a(25),r=a(218),s=a(397),l=a(37),d=a(9),c=Object(d.a)(function(e,t){t=Object(i.a)(t,1);var a=e?e.length:0,d=Object(o.a)(e,t);return Object(r.a)(e,Object(n.a)(t,function(e){return Object(l.a)(e,a)?+e:e}).sort(s.a)),d});t.a=c},function(e,t,a){'use strict';var n=a(105),o=a(37),i=a(56),r=a(18),s=a(396),l=a(57),d=Array.prototype,c=d.splice;t.a=function(e,t){for(var a=e?t.length:0,d=a-1;a--;){var m=t[a];if(a==d||m!==u){var u=m;if(Object(o.a)(m))c.call(e,m,1);else if(!Object(i.a)(m,e)){var p=Object(n.a)(m),g=Object(s.a)(e,p);null!=g&&delete g[Object(l.a)(Object(r.a)(p))]}else delete e[Object(l.a)(m)]}}return e}},function(e,t,a){'use strict';var n=a(10),o=a(218);t.a=function(e,t){var a=[];if(!(e&&e.length))return a;var i=-1,r=[],s=e.length;for(t=Object(n.a)(t,3);++i<s;){var l=e[i];t(l,i,e)&&(a.push(l),r.push(i))}return Object(o.a)(e,r),a}},function(e,t){'use strict';var a=Array.prototype,n=a.reverse;t.a=function(e){return e?n.call(e):e}},function(e,t,a){'use strict';var n=a(42),o=a(79),i=a(13);t.a=function(e,t,a){var r=e?e.length:0;return r?(a&&'number'!=typeof a&&Object(o.a)(e,t,a)?(t=0,a=r):(t=null==t?0:Object(i.a)(t),a=void 0===a?r:Object(i.a)(a)),Object(n.a)(e,t,a)):[]}},function(e,t,a){'use strict';var n=a(107);t.a=function(e,t){return Object(n.a)(e,t)}},function(e,t,a){'use strict';var n=a(10),o=a(148);t.a=function(e,t,a){return Object(o.a)(e,t,Object(n.a)(a))}},function(e,t,a){'use strict';var n=a(107),o=a(52);t.a=function(e,t){var a=e?e.length:0;if(a){var i=Object(n.a)(e,t);if(i<a&&Object(o.a)(e[i],t))return i}return-1}},function(e,t,a){'use strict';var n=a(107);t.a=function(e,t){return Object(n.a)(e,t,!0)}},function(e,t,a){'use strict';var n=a(10),o=a(148);t.a=function(e,t,a){return Object(o.a)(e,t,Object(n.a)(a),!0)}},function(e,t,a){'use strict';var n=a(107),o=a(52);t.a=function(e,t){var a=e?e.length:0;if(a){var i=Object(n.a)(e,t,!0)-1;if(Object(o.a)(e[i],t))return i}return-1}},function(e,t,a){'use strict';var n=a(229);t.a=function(e){return e&&e.length?Object(n.a)(e):[]}},function(e,t,a){'use strict';var n=a(52);t.a=function(e,t){for(var a=-1,o=e.length,i=0,r=[];++a<o;){var s=e[a],l=t?t(s):s;if(!a||!Object(n.a)(l,d)){var d=l;r[i++]=0===s?0:s}}return r}},function(e,t,a){'use strict';var n=a(10),o=a(229);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(n.a)(t)):[]}},function(e,t,a){'use strict';var n=a(141);t.a=function(e){return Object(n.a)(e,1)}},function(e,t,a){'use strict';var o=a(42),i=a(13);t.a=function(e,t,a){return e&&e.length?(t=a||void 0===t?1:Object(i.a)(t),Object(o.a)(e,0,0>t?0:t)):[]}},function(e,t,a){'use strict';var o=a(42),i=a(13);t.a=function(e,t,a){var n=e?e.length:0;return n?(t=a||void 0===t?1:Object(i.a)(t),t=n-t,Object(o.a)(e,0>t?0:t,n)):[]}},function(e,t,a){'use strict';var n=a(10),o=a(106);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(n.a)(t,3),!1,!0):[]}},function(e,t,a){'use strict';var n=a(10),o=a(106);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(n.a)(t,3)):[]}},function(e,t,a){'use strict';var n=a(25),o=a(49),i=a(14),r=a(9),s=Object(r.a)(function(e){return Object(o.a)(Object(n.a)(e,1,i.a,!0))});t.a=s},function(e,t,a){'use strict';var n=a(25),o=a(10),i=a(49),r=a(14),s=a(18),l=a(9),d=Object(l.a)(function(e){var t=Object(s.a)(e);return Object(r.a)(t)&&(t=void 0),Object(i.a)(Object(n.a)(e,1,r.a,!0),Object(o.a)(t))});t.a=d},function(e,t,a){'use strict';var n=a(25),o=a(49),i=a(14),r=a(18),s=a(9),l=Object(s.a)(function(e){var t=Object(r.a)(e);return Object(i.a)(t)&&(t=void 0),Object(o.a)(Object(n.a)(e,1,i.a,!0),void 0,t)});t.a=l},function(e,t,a){'use strict';var n=a(49);t.a=function(e){return e&&e.length?Object(n.a)(e):[]}},function(e,t,a){'use strict';var n=a(10),o=a(49);t.a=function(e,t){return e&&e.length?Object(o.a)(e,Object(n.a)(t)):[]}},function(e,t,a){'use strict';var n=a(49);t.a=function(e,t){return e&&e.length?Object(n.a)(e,void 0,t):[]}},function(e,t,a){'use strict';var n=a(72),o=a(14),i=a(9),r=Object(i.a)(function(e,t){return Object(o.a)(e)?Object(n.a)(e,t):[]});t.a=r},function(e,t,a){'use strict';var n=a(109),o=a(150),i=a(14),r=a(9),s=Object(r.a)(function(e){return Object(o.a)(Object(n.a)(e,i.a))});t.a=s},function(e,t,a){'use strict';var n=a(109),o=a(10),i=a(150),r=a(14),s=a(18),l=a(9),d=Object(l.a)(function(e){var t=Object(s.a)(e);return Object(r.a)(t)&&(t=void 0),Object(i.a)(Object(n.a)(e,r.a),Object(o.a)(t))});t.a=d},function(e,t,a){'use strict';var n=a(109),o=a(150),i=a(14),r=a(18),s=a(9),l=Object(s.a)(function(e){var t=Object(r.a)(e);return Object(i.a)(t)&&(t=void 0),Object(o.a)(Object(n.a)(e,i.a),void 0,t)});t.a=l},function(e,t,a){'use strict';var n=a(9),o=a(108),i=Object(n.a)(o.a);t.a=i},function(e,t,a){'use strict';var n=a(63),o=a(248);t.a=function(e,t){return Object(o.a)(e||[],t||[],n.a)}},function(e,t){'use strict';t.a=function(e,t,a){for(var n=-1,o=e.length,i=t.length,r={};++n<o;){var s=n<i?t[n]:void 0;a(r,e[n],s)}return r}},function(e,t,a){'use strict';var n=a(400),o=a(248);t.a=function(e,t){return Object(o.a)(e||[],t||[],n.a)}},function(e,t,a){'use strict';var n=a(9),o=a(149),i=Object(n.a)(function(e){var t=e.length,a=1<t?e[t-1]:void 0;return a='function'==typeof a?(e.pop(),a):void 0,Object(o.a)(e,a)});t.a=i},function(e,t,a){'use strict';function n(e){return e instanceof d.a||e instanceof l.a?e.getAttributes():null}function o(e,t,a){if(!t||'transparent'==t.type)return;const n=e.range&&e.range.start.parent;!n||n.isEmpty||a.enqueueChanges(()=>{const e=Array.from(n.getAttributeKeys()).filter((e)=>e.startsWith(g));for(const a of e)t.removeAttribute(n,a)})}var i=a(1),r=a(3),s=a(151),l=a(26),d=a(66),c=a(121),m=a(0),u=a(16),p=a(58);const g='selection:',f=new Set(['addAttribute','removeAttribute','changeAttribute','addRootAttribute','removeRootAttribute','changeRootAttribute']);class h extends p.a{constructor(e){super(),this._document=e,this._attributePriority=new Map,this.listenTo(this._document,'change',(e,t,a,n)=>{f.has(t)&&this._updateAttributes(!1),o(a,n,this._document)})}get isCollapsed(){const e=this._ranges.length;return 0===e?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return 0<this._ranges.length}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}addRange(e,t=!1){super.addRange(e,t),this.refreshAttributes()}removeAllRanges(){super.removeAllRanges(),this.refreshAttributes()}setRanges(e,t=!1){super.setRanges(e,t),this.refreshAttributes()}setAttribute(e,t){if(this.isCollapsed&&this.anchor.parent.isEmpty&&this._storeAttribute(e,t),this._setAttribute(e,t)){this.fire('change:attribute',{attributeKeys:[e],directChange:!0})}}removeAttribute(e){if(this.isCollapsed&&this.anchor.parent.isEmpty&&this._removeStoredAttribute(e),this._removeAttribute(e)){this.fire('change:attribute',{attributeKeys:[e],directChange:!0})}}setAttributesTo(e){e=Object(c.a)(e),this.isCollapsed&&this.anchor.parent.isEmpty&&this._setStoredAttributesTo(e);const t=this._setAttributesTo(e);if(0<t.size){const e=Array.from(t);this.fire('change:attribute',{attributeKeys:e,directChange:!0})}}clearAttributes(){this.setAttributesTo([])}refreshAttributes(){this._updateAttributes(!0)}static createFromSelection(){throw new m.b('documentselection-cannot-create: Cannot create a new DocumentSelection instance.')}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(!(e instanceof r.a))throw new m.b('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');if(e.root==this._document.graveyard)return void u.a.warn('model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.');this._checkRange(e);const t=s.a.createFromRange(e);return this.listenTo(t,'change:range',(e,a,n)=>{t.root==this._document.graveyard&&this._fixGraveyardSelection(t,n.sourcePosition),this.fire('change:range',{directChange:!1})}),t}_updateAttributes(e){const t=Object(c.a)(this._getSurroundingAttributes()),a=Object(c.a)(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[e,t]of this._attributePriority)'low'==t&&(this._attrs.delete(e),this._attributePriority.delete(e));this._setAttributesTo(t,!1);const n=[];for(const[t,o]of this.getAttributes())a.has(t)&&a.get(t)===o||n.push(t);for(const[t]of a)this.hasAttribute(t)||n.push(t);0<n.length&&this.fire('change:attribute',{attributeKeys:n,directChange:!1})}static _getStoreAttributeKey(e){return g+e}static _isStoreAttributeKey(e){return e.startsWith(g)}_setAttribute(e,t,a=!0){const n=a?'normal':'low';if('low'==n&&'normal'==this._attributePriority.get(e))return!1;const o=super.getAttribute(e);return o!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,n),!0)}_removeAttribute(e,t=!0){const a=t?'normal':'low';return'low'==a&&'normal'==this._attributePriority.get(e)?!1:!!super.hasAttribute(e)&&(this._attrs.delete(e),this._attributePriority.set(e,a),!0)}_setAttributesTo(e,t=!0){const a=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,t)&&a.add(n);for(const[n,o]of e){const e=this._setAttribute(n,o,t);e&&a.add(n)}return a}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())if(t.startsWith(g)){const a=t.substr(g.length);yield[a,e.getAttribute(t)]}}_removeStoredAttribute(e){const t=h._getStoreAttributeKey(e);this._document.batch().removeAttribute(this.anchor.parent,t)}_storeAttribute(e,t){const a=h._getStoreAttributeKey(e);this._document.batch().setAttribute(this.anchor.parent,a,t)}_setStoredAttributesTo(e){const t=this.anchor.parent,a=this._document.batch();for(const[n]of this._getStoredAttributes()){const e=h._getStoreAttributeKey(n);a.removeAttribute(t,e)}for(const[n,o]of e){const e=h._getStoreAttributeKey(n);a.setAttribute(t,e,o)}}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._document.schema;let a=null;if(!this.isCollapsed){const e=this.getFirstRange();for(const n of e){if(n.item.is('element')&&t.objects.has(n.item.name))break;'text'==n.type&&null==a&&(a=n.item.getAttributes())}}else{const t=e.textNode?e.textNode:e.nodeBefore,o=e.textNode?e.textNode:e.nodeAfter;if(a=n(t),a||(a=n(o)),!a)for(let e=t;e&&!a;)e=e.previousSibling,a=n(e);if(!a)for(let e=o;e&&!a;)e=e.nextSibling,a=n(e);a||(a=this._getStoredAttributes())}return a}_fixGraveyardSelection(e,t){const a=i.a.createFromPosition(t),n=this._document.getNearestSelectionRange(a),o=this._ranges.indexOf(e);if(this._ranges.splice(o,1),e.detach(),n){const e=this._prepareRange(n);this._ranges.splice(o,0,e)}this.fire('change:range',{directChange:!1})}}t.a=h},function(e,t){'use strict';t.a=function(e,t,a){function i(n){const i=(m[n-1]===void 0?-1:m[n-1])+1,u=m[n+1]===void 0?-1:m[n+1],p=i>u?-1:1;c[n+p]&&(c[n]=c[n+p].slice(0)),c[n]||(c[n]=[]),c[n].push(i>u?r:s);let g=o(i,u),f=g-n;for(;f<l&&g<d&&a(e[f],t[g]);)f++,g++,c[n].push('equal');return g}a=a||function(e,t){return e===t};let r,s;if(t.length<e.length){const a=e;e=t,t=a,r='delete',s='insert'}else r='insert',s='delete';const l=e.length,d=t.length,n=d-l,c={},m={};let u=0,g;do{for(g=-u;g<n;g++)m[g]=i(g);for(g=n+u;g>n;g--)m[g]=i(g);m[n]=i(n),u++}while(m[n]!==d);return c[n].slice(1)}},function(e,t){'use strict';t.a=function(e){const t=[];for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}},function(e,t,a){'use strict';var n=a(91);const o=Symbol('rootName');class i extends n.a{constructor(e){super(e),this.rootName='main'}is(e,t=null){return t?'rootElement'==e&&t==this.name||super.is(e,t):'rootElement'==e||super.is(e)}get rootName(){return this.getCustomProperty(o)}set rootName(e){this.setCustomProperty(o,e)}}t.a=i},function(e,t,a){'use strict';var n=a(59),o=a(111),i=a(73),r=a(416);class s extends n.a{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e.renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){function t(e,t){if(!Array.isArray(e))return e===t||e.is('text')&&t.is('text')&&e.data===t.data}if(0===e.length)return;const a=this.domConverter,n=new Map,s=new Set;for(const t of e)if('childList'===t.type){const e=a.mapDomToView(t.target);if(e&&e.is('uiElement'))continue;e&&!this._isBogusBrMutation(t)&&s.add(e)}for(const t of e){const e=a.mapDomToView(t.target);if(!(e&&e.is('uiElement'))&&'characterData'===t.type){const e=a.findCorrespondingViewText(t.target);e&&!s.has(e.parent)?n.set(e,{type:'text',oldText:e.data,newText:Object(i.e)(t.target),node:e}):!e&&Object(i.i)(t.target)&&s.add(a.mapDomToView(t.target.parentNode))}}const l=[];for(const t of n.values())this.renderer.markToSync('text',t.node),l.push(t);for(const n of s){const e=a.mapViewToDom(n),o=Array.from(n.getChildren()),i=Array.from(a.domChildrenToView(e));Object(r.a)(o,i,t)||(this.renderer.markToSync('children',n),l.push({type:'children',oldChildren:o,newChildren:i,node:n}))}const d=e[0].target.ownerDocument.getSelection();let c=null;if(d&&d.anchorNode){const e=a.domPositionToView(d.anchorNode,d.anchorOffset),t=a.domPositionToView(d.focusNode,d.focusOffset);e&&t&&(c=new o.a,c.setCollapsedAt(e),c.moveFocusTo(t))}this.document.fire('mutations',l,c),this.document.render()}_isBogusBrMutation(e){let t=null;return null===e.nextSibling&&0===e.removedNodes.length&&1==e.addedNodes.length&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is('element','br')}}t.a=s},function(e,t,a){'use strict';var i=a(17),r=a(418),s=a(160);t.a=function(e,t,a){function l(t){var a=w,n=y;return w=y=void 0,h=t,x=e.apply(n,a),x}function d(e){return h=e,A=setTimeout(u,t),b?l(e):x}function c(e){var a=e-f,o=e-h,i=t-a;return _?n(i,v-o):i}function m(e){var a=e-f,n=e-h;return!f||a>=t||0>a||_&&n>=v}function u(){var e=Object(r.a)();return m(e)?p(e):void(A=setTimeout(u,c(e)))}function p(e){return(clearTimeout(A),A=void 0,k&&w)?l(e):(w=y=void 0,x)}function g(){var e=Object(r.a)(),a=m(e);if(w=arguments,y=this,f=e,a){if(void 0===A)return d(f);if(_)return clearTimeout(A),A=setTimeout(u,t),l(f)}return void 0===A&&(A=setTimeout(u,t)),x}var f=0,h=0,b=!1,_=!1,k=!0,w,y,v,x,A;if('function'!=typeof e)throw new TypeError('Expected a function');return t=Object(s.a)(t)||0,Object(i.a)(a)&&(b=!!a.leading,_='maxWait'in a,v=_?o(Object(s.a)(a.maxWait)||0,t):v,k='trailing'in a?!!a.trailing:k),g.cancel=function(){void 0!==A&&clearTimeout(A),f=h=0,w=y=A=void 0},g.flush=function(){return void 0===A?x:p(Object(r.a)())},g}},function(e,t,a){'use strict';function i(e,t){for(const a of g)e[a]=t[a]}function r(e){return!!Object(d.a)(e)&&e===e.ownerDocument.body}var s=a(155),l=a(423),d=a(258),c=a(259),m=a(16);class u{constructor(e){const t=Object(s.a)(e);if(Object.defineProperty(this,'_source',{value:e._source||e,writable:!0,enumerable:!1}),Object(d.a)(e)||t){const a=t?e.startContainer:e;a.ownerDocument&&a.ownerDocument.body.contains(a)||m.a.warn('rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.',{source:e}),t?i(this,u.getDomRangeRects(e)[0]):i(this,e.getBoundingClientRect())}else if(Object(l.a)(e)){const{innerWidth:t,innerHeight:a}=e;i(this,{top:0,right:t,bottom:a,left:0,width:t,height:a})}else i(this,e)}clone(){return new u(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:o(this.top,e.top),right:n(this.right,e.right),bottom:n(this.bottom,e.bottom),left:o(this.left,e.left)};return t.width=t.right-t.left,t.height=t.bottom-t.top,0>t.width||0>t.height?null:new u(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!r(e))for(let a=e.parentNode||e.commonAncestorContainer;a&&!r(a);){const e=new u(a),n=t.getIntersection(e);if(n)n.getArea()<t.getArea()&&(t=n);else return null;a=a.parentNode}return t}isEqual(e){for(const t of g)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!!(t&&t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,a;if(Object(l.a)(e))t=e.innerWidth-e.document.documentElement.clientWidth,a=e.innerHeight-e.document.documentElement.clientHeight;else{const n=Object(c.a)(this._source);t=e.offsetWidth-e.clientWidth,a=e.offsetHeight-e.clientHeight,this.moveBy(n.left,n.top)}return this.width-=t,this.right-=t,this.height-=a,this.bottom-=a,this}static getDomRangeRects(e){const t=[],a=Array.from(e.getClientRects());if(a.length)for(const e of a)t.push(new u(e));else{const a=new u(e.startContainer.getBoundingClientRect());a.right=a.left,a.width=0,t.push(a)}return t}}t.a=u;const g=['top','right','bottom','left','width','height']},function(e,t,a){'use strict';var n=a(44),o=a(77);t.a=function(e){return!!e&&1===e.nodeType&&Object(n.a)(e)&&!Object(o.a)(e)}},function(e,t){'use strict';t.a=function(e){const t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}},function(e,t,a){'use strict';function n(e,t,a,n,i){if(!e.isCollapsed)return;if(!n.consume(e,i))return;let l=t.getFirstPosition();o(l.parent)&&(l=l.getLastMatchingPosition((e)=>e.item.is('uiElement'))),l=s.a.wrapPosition(l,a),t.removeAllRanges(),t.addRange(new r.a(l,l))}function o(e){if(!e.is('element'))return!1;for(const t of e.getChildren())if(!t.is('uiElement'))return!1;return!0}t.d=function(){return(e,t,a,n)=>{const o=t.selection;if(!o.isCollapsed&&a.consume(o,'selection')){n.viewSelection.removeAllRanges();for(const e of o.getRanges()){const t=n.mapper.toViewRange(e);n.viewSelection.addRange(t,o.isBackward)}}}},t.c=function(){return(e,t,a,n)=>{const o=t.selection;if(o.isCollapsed&&a.consume(o,'selection')){const e=o.getFirstPosition(),t=n.mapper.toViewPosition(e),a=s.a.breakAttributes(t);n.viewSelection.removeAllRanges(),n.viewSelection.addRange(new r.a(a,a))}}},t.e=function(e){return(t,a,o,r)=>{const s=e instanceof i.a?e.clone(!0):e(a.value,a,a.selection,o,r);if(s){const e='selectionAttribute:'+a.key;n(a.selection,r.viewSelection,s,o,e)}}},t.f=function(e){return(t,a,o,i)=>{const r='function'==typeof e?e(a,o,i):e;if(r){r.id||(r.id=a.markerName);const e=Object(l.a)(r),t='selectionMarker:'+a.markerName;n(a.selection,i.viewSelection,e,o,t)}}},t.a=function(){return(e,t,a,n)=>{for(const o of n.viewSelection.getRanges())o.isCollapsed&&o.end.parent.document&&s.a.mergeAttributes(o.start);n.viewSelection.removeAllRanges()}},t.b=function(){return(e,t,a,n)=>n.viewSelection.setFake(!1)};var i=a(27),r=a(38),s=a(93),l=a(70)},function(e,t){'use strict';t.a=function(e,t){e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t}},function(e,t,a){'use strict';var n=a(426),o=a(153),i=a(73);t.a=class{constructor(){this._domParser=new DOMParser,this._domConverter=new o.a({blockFiller:i.d}),this._htmlWriter=new n.a}toData(e){const t=this._domConverter.viewToDom(e,document);return this._htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this._domConverter.domToView(t)}_toDom(e){const t=this._domParser.parseFromString(e,'text/html'),a=t.createDocumentFragment(),n=t.body.childNodes;for(;0<n.length;)a.appendChild(n[0]);return a}}},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(60),r=a(114),s=a(50),l=a(439),d=a(440),c=a(16);class m extends n.a{constructor(e){super(e),this.items=this.createCollection(),this.focusTracker=new i.a,this.keystrokes=new s.a,this._focusCycler=new r.a({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:['arrowleft','arrowup'],focusNext:['arrowright','arrowdown']}}),this.template=new o.a({tag:'div',attributes:{class:['ck-toolbar']},children:this.items,on:{mousedown:Object(d.a)(this)}}),this.items.on('add',(e,t)=>{this.focusTracker.add(t.element)}),this.items.on('remove',(e,t)=>{this.focusTracker.remove(t.element)})}init(){this.keystrokes.listenTo(this.element),super.init()}focus(){this._focusCycler.focusFirst()}fillFromConfig(e,t){e.map((e)=>{'|'==e?this.items.add(new l.a):t.has(e)?this.items.add(t.create(e)):c.a.warn('toolbarview-item-unavailable: The requested toolbar item is unavailable.',{name:e})})}}t.a=m},function(e,t,a){'use strict';var n=a(152);class o{constructor(e,t=20){this.document=e,this.size=0,this.limit=t,this.isLocked=!1,this._changeCallback=(e,t,a,n)=>{this._onBatch(n)},this._selectionChangeCallback=()=>{this._reset()},e.on('change',this._changeCallback),e.selection.on('change:range',this._selectionChangeCallback),e.selection.on('change:attribute',this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.document.batch()),this._batch}input(e){this.size+=e,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.document.off('change',this._changeCallback),this.document.selection.off('change:range',this._selectionChangeCallback),this.document.selection.off('change:attribute',this._selectionChangeCallback)}_onBatch(e){'transparent'!=e.type&&e!==this._batch&&1>=Object(n.a)(e.getOperations())&&this._reset(!0)}_reset(e){(!this.isLocked||e)&&(this._batch=null,this.size=0)}}t.a=o},function(e,t,a){'use strict';function n(e,t){const n=o([e],t);n.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let o=1;o<n.length;o++){const e=n[o-1],t=n[o];e.end.isTouching(t.start)&&(e.end=t.end,n.splice(o,1),o--)}return n}function o(e,t){for(const a of t)for(const t of a.operations)for(let a=0;a<e.length;a++){let n;switch(t.type){case'insert':n=e[a]._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0);break;case'move':case'remove':case'reinsert':n=e[a]._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!0);}n&&(e.splice(a,1,...n),a=a+n.length-1)}return e}var i=a(11);class r extends i.a{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=0<this._stack.length}addBatch(e){const t=this.editor.document.selection,a={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:a}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,a){const o=this.editor.document,i=[];for(const r of e){const e=n(r,a),t=e.find((e)=>e.start.root!=o.graveyard);t&&i.push(t)}i.length&&o.selection.setRanges(i,t)}_undo(e){const t=this.editor.document,a=t.batch();this._createdBatches.add(a);const n=e.deltas.slice();n.reverse();for(const o of n){const e=o.baseVersion+o.operations.length,n=Array.from(t.history.getDeltas(e)),i=t.transformDeltas([o.getReversed()],n,!0),r=i.deltasA;for(const e of r){e.baseVersion=t.version,a.addDelta(e);for(const a of e.operations)t.applyOperation(a);t.history.setDeltaAsUndone(o,e)}}return a}}t.a=r},function(e,t,a){'use strict';var n=a(11);class o extends n.a{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.document;this.value=e.selection.hasAttribute(this.attributeKey),this.isEnabled=e.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(e={}){const t=this.editor.document,a=t.selection,n=e.forceValue===void 0?!this.value:e.forceValue;t.enqueueChanges(()=>{if(a.isCollapsed)n?a.setAttribute(this.attributeKey,!0):a.removeAttribute(this.attributeKey);else{const o=t.schema.getValidRanges(a.getRanges(),this.attributeKey),i=e.batch||t.batch();for(const e of o)n?i.setAttribute(e,this.attributeKey,n):i.removeAttribute(e,this.attributeKey)}})}}t.a=o},function(e,t,a){'use strict';var n=a(2),o=a(268),i=a(493),r=a(497),s=a(36),l=a(505),d=a.n(l);class c extends n.a{static get requires(){return[o.a,i.a,r.a]}static get pluginName(){return'Image'}init(){const e=this.editor,t=e.plugins.get('ContextualToolbar');t&&this.listenTo(t,'show',(t)=>{Object(s.b)(e.editing.view.selection)&&t.stop()},{priority:'high'})}}t.a=c},function(e,t,a){'use strict';function n(){return new c.a('figure',{class:'image'},new m.a('img'))}var o=a(2),i=a(51),r=a(43),s=a(491),l=a(36),d=a(5),c=a(47),m=a(178);class u extends o.a{init(){const e=this.editor,a=e.document,o=a.schema,c=e.data,m=e.editing,u=e.t;o.registerItem('image'),o.requireAttributes('image',['src']),o.allow({name:'image',attributes:['alt','src','srcset'],inside:'$root'}),o.objects.add('image'),Object(i.a)().for(c.modelToView).fromElement('image').toElement(()=>n()),Object(i.a)().for(m.modelToView).fromElement('image').toElement(()=>Object(l.c)(n(),u('image widget'))),Object(s.b)([m.modelToView,c.modelToView],'src'),Object(s.b)([m.modelToView,c.modelToView],'alt'),Object(s.b)([m.modelToView,c.modelToView],'srcset',s.d),Object(r.a)().for(c.viewToModel).from({name:'img',attribute:{src:/./}}).toElement((e)=>new d.a('image',{src:e.getAttribute('src')})),c.viewToModel.on('element:img',s.a,{priority:'low'}),c.viewToModel.on('element',s.c,{priority:'low'}),Object(r.a)().for(c.viewToModel).from({name:'img',attribute:{alt:/./}}).consuming({attribute:['alt']}).toAttribute((e)=>({key:'alt',value:e.getAttribute('alt')})),Object(r.a)().for(c.viewToModel).from({name:'img',attribute:{srcset:/./}}).consuming({attribute:['srcset']}).toAttribute((e)=>{const t={data:e.getAttribute('srcset')};return e.hasAttribute('width')&&(t.width=e.getAttribute('width')),{key:'srcset',value:t}}),c.viewToModel.on('element:figure',Object(s.e)())}}t.a=u},function(e,t){'use strict';t.a=function({emitter:e,activator:t,callback:a,contextElements:n}){e.listenTo(document,'mousedown',(e,{target:o})=>{if(t()){for(const e of n)if(e.contains(o))return;a()}})}},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(62),r=a(501);class s extends n.a{constructor(e,t){super(e);const a=`ck-input-${Object(i.a)()}`;this.set('label'),this.set('value'),this.set('isReadOnly',!1),this.labelView=this._createLabelView(a),this.inputView=this._createInputView(t,a);const n=this.bindTemplate;this.template=new o.a({tag:'div',attributes:{class:[n.if('isReadOnly','ck-disabled')]},children:[this.labelView,this.inputView]})}_createLabelView(e){const t=new r.a(this.locale);return t.for=e,t.bind('text').to(this,'label'),t}_createInputView(e,t){const a=new e(this.locale);return a.id=t,a.bind('value').to(this),a.bind('isReadOnly').to(this),a}select(){this.inputView.select()}focus(){this.inputView.focus()}}t.a=s},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e){super(e),this.set('value'),this.set('id'),this.set('placeholder'),this.set('isReadOnly',!1);const t=this.bindTemplate;this.template=new o.a({tag:'input',attributes:{type:'text',class:['ck-input','ck-input-text'],id:t.to('id'),placeholder:t.to('placeholder'),readonly:t.to('isReadOnly')}}),this.on('change:value',(e,t,a)=>{this.element.value=a||''})}select(){this.element.select()}focus(){this.element.focus()}}t.a=i},function(e,t){'use strict';t.a=function({view:e}){e.listenTo(e.element,'submit',(t,a)=>{a.preventDefault(),e.fire('submit')},{useCapture:!0})}},function(e,t,a){'use strict';function n(e){const t=e.editing.view,a=o.a.defaultPositions;return{target:t.domConverter.viewToDom(t.selection.getSelectedElement()),positions:[a.northArrowSouth,a.southArrowNorth]}}t.b=function(e){const t=e.plugins.get('ContextualBalloon');if(Object(i.b)(e.editing.view.selection)){const a=n(e);t.updatePosition(a)}},t.a=n;var o=a(156),i=a(36)},function(e,t,a){'use strict';var n=a(2),o=a(507),i=a(512);class r extends n.a{static get pluginName(){return'ImageUpload'}static get requires(){return[o.a,i.a]}}t.a=r},function(e,t,a){'use strict';var n=a(2),i=a(76),r=a(508),s=a(509),l=a(58),d=a(276);class c extends n.a{static get requires(){return[i.a,s.a]}init(){const e=this.editor,t=e.document,a=t.schema,n=e.plugins.get(i.a);a.allow({name:'image',attributes:['uploadId'],inside:'$root'}),a.allow({name:'image',attributes:['uploadStatus'],inside:'$root'}),a.requireAttributes('image',['uploadId']),e.commands.add('imageUpload',new r.a(e)),e.editing.view.on('clipboardInput',(a,n)=>{let o=new l.a(n.targetRanges.map((t)=>e.editing.mapper.toModelRange(t)));for(const i of n.dataTransfer.files){const n=Object(d.a)(o);Object(d.b)(i)&&(e.execute('imageUpload',{file:i,insertAt:n}),a.stop()),o=t.selection}}),e.editing.view.on('dragover',(e,t)=>{t.preventDefault()}),t.on('change',(e,t,a)=>{if('insert'===t||'reinsert'===t||'remove'===t)for(const e of a.range)if('elementStart'===e.type&&'image'===e.item.name){const a=e.item,o=a.getAttribute('uploadId');if(o){const e=n.loaders.get(o);e&&('insert'===t&&'idle'==e.status&&this.load(e,a),'remove'===t&&e.abort())}}})}load(e,a){function n(){t.enqueueChanges(()=>{t.batch('transparent').removeAttribute(a,'uploadId'),t.batch('transparent').removeAttribute(a,'uploadStatus')}),d.destroyLoader(e)}const r=this.editor,l=r.locale.t,t=r.document,d=r.plugins.get(i.a),c=r.plugins.get(s.a);t.enqueueChanges(()=>{t.batch('transparent').setAttribute(a,'uploadStatus','reading')}),e.read().then((n)=>{const o=r.editing.mapper.toViewElement(a),i=o.getChild(0),s=e.upload();return i.setAttribute('src',n),r.editing.view.render(),t.enqueueChanges(()=>{t.batch('transparent').setAttribute(a,'uploadStatus','uploading')}),s}).then((e)=>{t.enqueueChanges(()=>{t.batch('transparent').setAttribute(a,'uploadStatus','complete'),t.batch('transparent').setAttribute(a,'src',e.default);let n=0;const i=Object.keys(e).filter((e)=>{const t=parseInt(e,10);if(!isNaN(t))return n=o(n,t),!0}).map((t)=>`${e[t]} ${t}w`).join(', ');''!=i&&t.batch('transparent').setAttribute(a,'srcset',{data:i,width:n})}),n()}).catch((o)=>{'error'==e.status&&c.showWarning(o,{title:l('Upload failed'),namespace:'upload'}),n(),t.enqueueChanges(()=>{t.batch('transparent').remove(a)})})}}t.a=c},function(e,t,a){'use strict';t.b=function(e){const t=/^image\/(jpeg|png|gif|bmp)$/;return t.test(e.type)},t.a=function(e){const t=e.getSelectedElement();if(t)return n.a.createAfter(t);const a=e.getSelectedBlocks().next().value;if(a){if(a.isEmpty)return n.a.createAt(a);const t=n.a.createAfter(a);return e.focus.isTouching(t)?t:n.a.createBefore(a)}return e.focus};var n=a(1)},function(e,t,a){'use strict';var n=a(92);class o extends n.a{}t.a=o},function(e,t,a){'use strict';function n(e,t,a){let n=e.textNode||(a?e.nodeBefore:e.nodeAfter),o=null;for(;n&&n.getAttribute('linkHref')==t;)o=n,n=a?n.previousSibling:n.nextSibling;return o?i.a.createAt(o,a?'before':'after'):e}t.a=function(e,t){return new o.a(n(e,t,!0),n(e,t,!1))};var o=a(3),i=a(1)},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var n=a(280),o=a(444),i=a(469),r=a(472),s=a(475),l=a(478),d=a(481),c=a(487),m=a(516),u=a(267),p=a(529),g=a(537),f=a(545),h=a(546),b=a(555),_=a(115),k=a(274);class w extends n.a{}t['default']=w,w.build={plugins:[o.a,i.a,r.a,s.a,l.a,d.a,c.a,m.a,u.a,p.a,g.a,f.a,h.a,b.a,_.a,k.a],config:{toolbar:{items:['headings','bold','italic','link','bulletedList','numberedList','blockQuote','undo','redo']},image:{toolbar:['imageStyleFull','imageStyleSide','|','imageTextAlternative']}}}},function(e,t,a){'use strict';var n=a(281),o=a(262),i=a(427),r=a(431),s=a(261),l=a(441),d=a.n(l);class c extends n.a{constructor(e,t){super(e,t),this.document.createRoot(),this.data.processor=new o.a,this.ui=new i.a(this,new r.a(this.locale,e))}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>Object(s.a)(this.element,e))}static create(e,t){return new Promise((a)=>{const n=new this(e,t);a(n.initPlugins().then(()=>{n.ui.init(),n.fire('uiReady')}).then(()=>n.loadDataFromEditorElement()).then(()=>{n.fire('dataReady'),n.fire('ready')}).then(()=>n))})}}t.a=c},function(e,t,a){'use strict';var n=a(282),o=a(408),i=a(409),r=a(64),s=a(425),l=a(261);class d extends n.a{constructor(e,t){super(t),this.element=e,this.editing=new i.a(this.document),this.editing.view.bind('isReadOnly').to(this),this.keystrokes=new o.a(this),this.keystrokes.listenTo(this.editing.view),this._attachToForm()}destroy(){return Promise.resolve().then(()=>this.keystrokes.destroy()).then(()=>this.editing.destroy()).then(super.destroy())}setData(e){this.data.set(e)}getData(){return this.data.get()}updateEditorElement(){Object(l.a)(this.element,this.getData())}loadDataFromEditorElement(){this.setData(Object(s.a)(this.element))}_attachToForm(){const e=this.element;if(e&&'textarea'===e.tagName.toLowerCase()&&e.form){let t;const a=e.form,n=()=>this.updateEditorElement();Object(r.a)(a.submit)&&(t=a.submit,a.submit=()=>{n(),t.apply(a)}),a.addEventListener('submit',n),this.on('destroy',()=>{a.removeEventListener('submit',n),t&&(a.submit=t)})}}static create(e,t){return new Promise((a)=>{const n=new this(e,t);a(n.initPlugins().then(()=>{n.fire('dataReady'),n.fire('ready')}).then(()=>n))})}}t.a=d},function(e,t,a){'use strict';var n=a(283),o=a(284),i=a(285),r=a(286),s=a(288),l=a(358),d=a(12),c=a(4);class m{constructor(e){const t=this.constructor.build&&this.constructor.build.plugins;this.config=new n.a(e,this.constructor.build&&this.constructor.build.config),this.config.define('plugins',t),this.plugins=new o.a(this,t),this.commands=new i.a,this.locale=new r.a(this.config.get('lang')),this.t=this.locale.t,this.document=new l.a,this.data=new s.a(this.document),this.set('isReadOnly',!1)}initPlugins(){function e(e,t){return e.reduce((e,a)=>a[t]?e.then(a[t].bind(a)):e,Promise.resolve())}const t=this,a=this.config;return function(){const e=a.get('plugins')||[],n=a.get('removePlugins')||[];return t.plugins.load(e,n)}().then((t)=>e(t,'init').then(()=>e(t,'afterInit'))).then(()=>this.fire('pluginsReady'))}destroy(){return this.fire('destroy'),this.stopListening(),this.commands.destroy(),this.plugins.destroy().then(()=>{this.document.destroy(),this.data.destroy()})}execute(...e){this.commands.execute(...e)}static create(e){return new Promise((t)=>{const a=new this(e);t(a.initPlugins().then(()=>{a.fire('dataReady'),a.fire('ready')}).then(()=>a))})}}t.a=m,Object(c.a)(m,d.a)},function(e,t,a){'use strict';var n=a(77);t.a=class{constructor(e,t){this._config={},t&&this.define(t),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}_setToTarget(e,t,a,o=!1){if(Object(n.a)(t))return void this._setObjectToTarget(e,t,o);const i=t.split('.');t=i.pop();for(const r of i)Object(n.a)(e[r])||(e[r]={}),e=e[r];return Object(n.a)(a)?(Object(n.a)(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,a,o)):void(o&&'undefined'!=typeof e[t]||(e[t]=a))}_getFromSource(e,t){const a=t.split('.');t=a.pop();for(const o of a){if(!Object(n.a)(e[o])){e=null;break}e=e[o]}return e?e[t]:void 0}_setObjectToTarget(e,t,a){Object.keys(t).forEach((n)=>{this._setToTarget(e,n,t[n],a)})}}},function(e,t,a){'use strict';var n=a(0),o=a(16);class i{constructor(e,t=[]){this._editor=e,this._availablePlugins=new Map,this._plugins=new Map;for(const a of t)this._availablePlugins.set(a,a),a.pluginName&&this._availablePlugins.set(a.pluginName,a)}*[Symbol.iterator](){for(const e of this._plugins)'function'==typeof e[0]&&(yield e)}get(e){return this._plugins.get(e)}load(e,t=[]){function a(e){return p.includes(e)||l.get(e)||c.has(e)?void 0:i(e).catch((t)=>{throw o.a.error('plugincollection-load: It was not possible to load the plugin.',{plugin:e}),t})}function i(e){return new Promise((o)=>{c.add(e),e.requires&&e.requires.forEach((o)=>{const i=r(o);if(t.includes(i))throw new n.b('plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.',{plugin:i,requiredBy:e});a(i)});const i=new e(d);l._add(e,i),m.push(i),o()})}function r(e){return'function'==typeof e?e:l._availablePlugins.get(e)}function s(e){return e.map((e)=>r(e)).filter((e)=>!!e)}const l=this,d=this._editor,c=new Set,m=[],u=s(e),p=s(t),g=function(e){const t=[];for(const a of e)r(a)||t.push(a);return t.length?t:null}(e);if(g){const e='plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.';return o.a.error(e,{plugins:g}),Promise.reject(new n.b(e,{plugins:g}))}return Promise.all(u.map(a)).then(()=>m)}destroy(){const e=Array.from(this).map(([,e])=>e).filter((e)=>'function'==typeof e.destroy).map((e)=>e.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const a=e.pluginName;a&&(this._plugins.has(a)?o.a.warn('plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.',{pluginName:a,plugin1:this._plugins.get(a).constructor,plugin2:e}):this._plugins.set(a,t))}}t.a=i},function(e,t,a){'use strict';var n=a(0);class o{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const a=this.get(e);if(!a)throw new n.b('commandcollection-command-not-found: Command does not exist.',{commandName:e});a.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}t.a=o},function(e,t,a){'use strict';var n=a(287);t.a=class{constructor(e){this.lang=e||'en',this.t=(...e)=>this._t(...e)}_t(e,t){let a=Object(n.a)(this.lang,e);return t&&(a=a.replace(/%(\d+)/g,(e,a)=>a<t.length?t[a]:e)),a}}},function(e,t){'use strict';function a(e,t){return e in n&&t in n[e]}t.a=function(e,t){return a(e,t)?n[e][t]:t.replace(/ \[context: [^\]]+\]$/,'')};let n={}},function(e,t,a){'use strict';var n=a(4),o=a(12),i=a(164),r=a(177),s=a(70),l=a(351),d=a(353),c=a(128),m=a(3),u=a(1),p=a(5),g=a(354),f=a(355),h=a(356),b=a(357);class _{constructor(e,t){this.model=e,this.processor=t,this.mapper=new i.a,this.modelToView=new r.a(this.model,{mapper:this.mapper}),this.modelToView.on('insert:$text',Object(s.f)(),{priority:'lowest'}),this.viewToModel=new l.a({schema:e.schema}),this.viewToModel.on('text',Object(d.a)(),{priority:'lowest'}),this.viewToModel.on('element',Object(d.b)(),{priority:'lowest'}),this.viewToModel.on('documentFragment',Object(d.b)(),{priority:'lowest'}),['insertContent','deleteContent','modifySelection','getSelectedContent'].forEach((e)=>this.decorate(e))}get(e='main'){return this.stringify(this.model.getRoot(e))}stringify(e){const t=this.toView(e);return this.processor.toData(t)}toView(e){const t=m.a.createIn(e),a=new c.a;return this.mapper.bindElements(e,a),this.modelToView.convertInsertion(t),this.mapper.clearBindings(),a}set(e,t='main'){const a=this.model.getRoot(t);this.model.enqueueChanges(()=>{this.model.selection.removeAllRanges(),this.model.selection.clearAttributes(),this.model.batch('transparent').remove(m.a.createIn(a)).insert(u.a.createAt(a,0),this.parse(e))})}parse(e,t='$root'){const a=this.processor.toView(e);return this.toModel(a,t)}toModel(e,t='$root'){return this.viewToModel.convert(e,{context:[t]})}destroy(){}insertContent(e,t,a){Object(g.a)(this,e,t,a)}deleteContent(e,t,a){Object(f.a)(e,t,a)}modifySelection(e,t){Object(h.a)(this,e,t)}getSelectedContent(e){return Object(b.a)(e)}hasContent(e){if(e instanceof p.a&&(e=m.a.createIn(e)),e.isCollapsed)return!1;for(const t of e.getItems())if(t.is('textProxy')||this.model.schema.objects.has(t.name))return!0;return!1}}t.a=_,Object(n.a)(_,o.a)},function(e,t,a){'use strict';var n=a(290);t.a=class{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=Object(n.a)(),this.off=Object(n.a)()}}},function(e,t){'use strict';t.a=function(){return function e(){e.called=!0}}},function(e,t){'use strict';const a={get(e){return'number'==typeof e?e:this[e]||this.normal},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};t.a=a},function(e,t,a){'use strict';var n=a(63),o=a(117),i=a(293),r=a(80),s=a(82),l=a(296),d=Object.prototype,c=d.propertyIsEnumerable,m=!c.call({valueOf:1},'valueOf'),u=Object(i.a)(function(e,t){if(m||Object(s.a)(t)||Object(r.a)(t))return void Object(o.a)(t,Object(l.a)(t),e);for(var a in t)Object(n.a)(e,a,t[a])});t.a=u},function(e,t,a){'use strict';var n=a(79),o=a(9);t.a=function(e){return Object(o.a)(function(t,a){var o=-1,i=a.length,r=1<i?a[i-1]:void 0,s=2<i?a[2]:void 0;for(r=3<e.length&&'function'==typeof r?(i--,r):void 0,s&&Object(n.a)(a[0],a[1],s)&&(r=3>i?void 0:r,i=1),t=Object(t);++o<i;){var l=a[o];l&&e(t,l,o,r)}return t})}},function(e,t,a){'use strict';var n=a(118),o=Object(n.a)('length');t.a=o},function(e,t,a){'use strict';var n=a(160),o=1/0;t.a=function(e){if(!e)return 0===e?e:0;if(e=Object(n.a)(e),e===o||e===-o){var t=0>e?-1:1;return t*1.7976931348623157e308}return e===e?e:0}},function(e,t,a){'use strict';var n=a(297),o=a(162),i=a(37),r=a(82),s=Object.prototype,l=s.hasOwnProperty;t.a=function(e){for(var t=-1,a=Object(r.a)(e),s=Object(n.a)(e),d=s.length,c=Object(o.a)(e),m=c||[],u=m.length;++t<d;){var p=s[t];!!c&&('length'==p||Object(i.a)(p,u))||'constructor'==p&&(a||!l.call(e,p))||m.push(p)}return m}},function(e,t,a){'use strict';function n(e){e=null==e?e:Object(e);var t=[];for(var a in e)t.push(a);return t}var o=a(298),i=a(301),r=Object.prototype,s=o.a?o.a.enumerate:void 0,l=r.propertyIsEnumerable;s&&!l.call({valueOf:1},'valueOf')&&(n=function(e){return Object(i.a)(s(e))}),t.a=n},function(e,t,a){'use strict';var n=a(33),o=n.a.Reflect;t.a=o},function(e){var t=function(){return this}();try{t=t||Function('return this')()||(1,eval)('this')}catch(a){'object'==typeof window&&(t=window)}e.exports=t},function(e,t){'use strict';t.a=function(e){return e&&e.Object===Object?e:null}},function(e,t){'use strict';t.a=function(e){for(var t=[],a;!(a=e.next()).done;)t.push(a.value);return t}},function(e,t){'use strict';t.a=function(){this.__data__=[]}},function(e,t,a){'use strict';var n=a(86),o=Array.prototype,i=o.splice;t.a=function(e){var t=this.__data__,a=Object(n.a)(t,e);if(0>a)return!1;var o=t.length-1;return a==o?t.pop():i.call(t,a,1),!0}},function(e,t,a){'use strict';var n=a(86);t.a=function(e){var t=this.__data__,a=Object(n.a)(t,e);return 0>a?void 0:t[a][1]}},function(e,t,a){'use strict';var n=a(86);t.a=function(e){return-1<Object(n.a)(this.__data__,e)}},function(e,t,a){'use strict';var n=a(86);t.a=function(e,t){var a=this.__data__,o=Object(n.a)(a,e);return 0>o?a.push([e,t]):a[o][1]=t,this}},function(e,t,a){'use strict';var n=a(85);t.a=function(){this.__data__=new n.a}},function(e,t){'use strict';t.a=function(e){return this.__data__['delete'](e)}},function(e,t){'use strict';t.a=function(e){return this.__data__.get(e)}},function(e,t){'use strict';t.a=function(e){return this.__data__.has(e)}},function(e,t,a){'use strict';var n=a(85),o=a(123);t.a=function(e,t){var a=this.__data__;return a instanceof n.a&&a.__data__.length==200&&(a=this.__data__=new o.a(a.__data__)),a.set(e,t),this}},function(e,t,a){'use strict';var n=a(313),o=a(85),i=a(169);t.a=function(){this.__data__={hash:new n.a,map:new(i.a||o.a),string:new n.a}}},function(e,t,a){'use strict';function n(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}var o=a(314),i=a(315),r=a(316),s=a(317),l=a(318);n.prototype.clear=o.a,n.prototype['delete']=i.a,n.prototype.get=r.a,n.prototype.has=s.a,n.prototype.set=l.a,t.a=n},function(e,t,a){'use strict';var n=a(87);t.a=function(){this.__data__=n.a?Object(n.a)(null):{}}},function(e,t){'use strict';t.a=function(e){return this.has(e)&&delete this.__data__[e]}},function(e,t,a){'use strict';var n=a(87),o=Object.prototype,i=o.hasOwnProperty;t.a=function(e){var t=this.__data__;if(n.a){var a=t[e];return a==='__lodash_hash_undefined__'?void 0:a}return i.call(t,e)?t[e]:void 0}},function(e,t,a){'use strict';var n=a(87),o=Object.prototype,i=o.hasOwnProperty;t.a=function(e){var t=this.__data__;return n.a?t[e]!==void 0:i.call(t,e)}},function(e,t,a){'use strict';var n=a(87);t.a=function(e,t){var a=this.__data__;return a[e]=n.a&&void 0===t?'__lodash_hash_undefined__':t,this}},function(e,t,a){'use strict';var n=a(88);t.a=function(e){return Object(n.a)(this,e)['delete'](e)}},function(e,t){'use strict';t.a=function(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e}},function(e,t,a){'use strict';var n=a(88);t.a=function(e){return Object(n.a)(this,e).get(e)}},function(e,t,a){'use strict';var n=a(88);t.a=function(e){return Object(n.a)(this,e).has(e)}},function(e,t,a){'use strict';var n=a(88);t.a=function(e,t){return Object(n.a)(this,e).set(e,t),this}},function(e,t){'use strict';t.a=function(e,t){for(var a=-1,n=e.length;++a<n&&!(!1===t(e[a],a,e)););return e}},function(e,t,a){'use strict';var n=a(117),o=a(69);t.a=function(e,t){return e&&Object(n.a)(t,Object(o.a)(t),e)}},function(e,t){'use strict';var a=Object.keys;t.a=function(e){return a(Object(e))}},function(e,t){'use strict';t.a=function(e,t){if(t)return e.slice();var a=new e.constructor(e.length);return e.copy(a),a}},function(e,t,a){'use strict';var n=a(117),o=a(172);t.a=function(e,t){return Object(n.a)(e,Object(o.a)(e),t)}},function(e,t,a){'use strict';var n=a(330),o=a(172),i=a(69);t.a=function(e){return Object(n.a)(e,i.a,o.a)}},function(e,t,a){'use strict';var n=a(89),o=a(15);t.a=function(e,t,a){var i=t(e);return Object(o.a)(e)?i:Object(n.a)(i,a(e))}},function(e,t,a){'use strict';var n=a(55),o=a(33),i=Object(n.a)(o.a,'DataView');t.a=i},function(e,t,a){'use strict';var n=a(55),o=a(33),i=Object(n.a)(o.a,'Promise');t.a=i},function(e,t,a){'use strict';var n=a(55),o=a(33),i=Object(n.a)(o.a,'WeakMap');t.a=i},function(e,t){'use strict';var a=Object.prototype,n=a.hasOwnProperty;t.a=function(e){var t=e.length,a=e.constructor(t);return t&&'string'==typeof e[0]&&n.call(e,'index')&&(a.index=e.index,a.input=e.input),a}},function(e,t,a){'use strict';var n=a(125),o=a(336),i=a(337),r=a(339),s=a(340),l=a(342),d=a(343);t.a=function(e,t,a,c){var m=e.constructor;return t==='[object ArrayBuffer]'?Object(n.a)(e):t==='[object Boolean]'||t==='[object Date]'?new m(+e):t==='[object DataView]'?Object(o.a)(e,c):t==='[object Float32Array]'||t==='[object Float64Array]'||t==='[object Int8Array]'||t==='[object Int16Array]'||t==='[object Int32Array]'||t==='[object Uint8Array]'||t==='[object Uint8ClampedArray]'||t==='[object Uint16Array]'||t==='[object Uint32Array]'?Object(d.a)(e,c):t==='[object Map]'?Object(i.a)(e,c,a):t==='[object Number]'||t==='[object String]'?new m(e):t==='[object RegExp]'?Object(r.a)(e):t==='[object Set]'?Object(s.a)(e,c,a):t==='[object Symbol]'?Object(l.a)(e):void 0}},function(e,t,a){'use strict';var n=a(125);t.a=function(e,t){var a=t?Object(n.a)(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}},function(e,t,a){'use strict';var n=a(338),o=a(175),i=a(126);t.a=function(e,t,a){var r=t?a(Object(i.a)(e),!0):Object(i.a)(e);return Object(o.a)(r,n.a,new e.constructor)}},function(e,t){'use strict';t.a=function(e,t){return e.set(t[0],t[1]),e}},function(e,t){'use strict';var a=/\w*$/;t.a=function(e){var t=new e.constructor(e.source,a.exec(e));return t.lastIndex=e.lastIndex,t}},function(e,t,a){'use strict';var n=a(341),o=a(175),i=a(90);t.a=function(e,t,a){var r=t?a(Object(i.a)(e),!0):Object(i.a)(e);return Object(o.a)(r,n.a,new e.constructor)}},function(e,t){'use strict';t.a=function(e,t){return e.add(t),e}},function(e,t,a){'use strict';var n=a(127),o=n.a?n.a.prototype:void 0,i=o?o.valueOf:void 0;t.a=function(e){return i?Object(i.call(e)):{}}},function(e,t,a){'use strict';var n=a(125);t.a=function(e,t){var a=t?Object(n.a)(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}},function(e,t,a){'use strict';var n=a(345),o=a(116),i=a(82);t.a=function(e){return'function'!=typeof e.constructor||Object(i.a)(e)?{}:Object(n.a)(Object(o.a)(e))}},function(e,t,a){'use strict';var n=a(17),o=Object.create;t.a=function(e){return Object(n.a)(e)?o(e):{}}},function(e,t,a){'use strict';(function(e){var n=a(347),o=a(33),i={function:!0,object:!0},r=i[typeof exports]&&exports&&!exports.nodeType?exports:void 0,s=i[typeof e]&&e&&!e.nodeType?e:void 0,l=s&&s.exports===r?r:void 0,d=l?o.a.Buffer:void 0,c=d?function(e){return e instanceof d}:Object(n.a)(!1);t.a=c}).call(t,a(161)(e))},function(e,t){'use strict';t.a=function(e){return function(){return e}}},function(e,t,a){'use strict';var n=a(0);class o{constructor(e,t,a){if(this.textNode=e,0>t||t>e.data.length)throw new n.b('view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');if(0>a||t+a>e.data.length)throw new n.b('view-textproxy-wrong-length: Given length value is incorrect.');this.data=e.data.substring(t,t+a),this.offsetInText=t}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return'textProxy'==e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let a=e.includeSelf?this.textNode:this.parent;null!==a;)t[e.parentFirst?'push':'unshift'](a),a=a.parent;return t}}t.a=o},function(e,t,a){'use strict';var n=a(66);t.a=class{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){e instanceof n.a&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return e instanceof n.a&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){e instanceof n.a&&(e=this._getSymbolForTextProxy(e));const a=this._consumable.get(e);if(a===void 0)return null;const o=a.get(t);return void 0===o?null:o}revert(e,t){e instanceof n.a&&(e=this._getSymbolForTextProxy(e));const a=this.test(e,t);return!1===a?(this._consumable.get(e).set(t,!0),!0):!0!==a&&null}_getSymbolForTextProxy(e){let t=null;const a=this._textProxyRegistry.get(e.startOffset);if(a){const n=a.get(e.endOffset);n&&(t=n.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e.startOffset,e.endOffset,e.parent)),t}_addSymbolForTextProxy(e,t,a){const n=Symbol('textProxySymbol');let o,i;return o=this._textProxyRegistry.get(e),o||(o=new Map,this._textProxyRegistry.set(e,o)),i=o.get(t),i||(i=new Map,o.set(t,i)),i.set(a,n),n}}},function(e,t){'use strict';const a=navigator.userAgent.toLowerCase(),n={mac:function(e){return-1<e.indexOf('macintosh')}(a)};t.a=n},function(e,t,a){'use strict';function n(e){const t=new Set,a=new Map,n=new s.a({startPosition:r.a.createAt(e,0),ignoreElementEnd:!0});for(const a of n)'$marker'==a.item.name&&t.add(a.item);for(const n of t){const e=n.getAttribute('data-name'),t=r.a.createBefore(n);a.has(e)?a.get(e).end=r.a.createFromPosition(t):a.set(e,new i.a(r.a.createFromPosition(t))),Object(c.d)(i.a.createOn(n))}return a}var o=a(352),i=a(3),r=a(1),s=a(53),l=a(65),d=a(39),c=a(23),m=a(8),u=a(4),p=a(45),g=a(16);class f{constructor(e={}){this.conversionApi=Object(p.a)({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this)}convert(e,t={}){this.fire('viewCleanup',e);const a=o.a.createFrom(e);let i=this._convertItem(e,a,t);return i?(i.is('documentFragment')||(i=new d.a([i])),i.markers=n(i),i):new d.a}_convertItem(e,t,a={}){const n=Object(p.a)({},a,{input:e,output:null});return e.is('element')?this.fire('element:'+e.name,n,t,this.conversionApi):e.is('text')?this.fire('text',n,t,this.conversionApi):this.fire('documentFragment',n,t,this.conversionApi),n.output&&!(n.output instanceof l.a||n.output instanceof d.a)?(g.a.warn('view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.',[e,n.output]),null):n.output}_convertChildren(e,t,a={}){const n=Array.from(e.getChildren()),o=n.map((e)=>this._convertItem(e,t,a)).filter((e)=>e instanceof l.a||e instanceof d.a).reduce((e,t)=>e.concat(t.is('documentFragment')?Array.from(t.getChildren()):t),[]);return new d.a(o)}}t.a=f,Object(u.a)(f,m.c)},function(e,t,a){'use strict';var n=a(15),o=a(0);class i{constructor(){this._consumables=new Map}add(e,t){let a;return e.is('text')||e.is('documentFragment')?void this._consumables.set(e,!0):void(this._consumables.has(e)?a=this._consumables.get(e):(a=new r,this._consumables.set(e,a)),a.add(t))}test(e,t){const a=this._consumables.get(e);return void 0===a?null:e.is('text')||e.is('documentFragment')?a:a.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is('text')||e.is('documentFragment')?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const a=this._consumables.get(e);a!==void 0&&(e.is('text')||e.is('documentFragment')?this._consumables.set(e,!0):a.revert(t))}static consumablesFromElement(e){const t={name:!0,attribute:[],class:[],style:[]},a=e.getAttributeKeys();for(const n of a)'style'!=n&&'class'!=n&&t.attribute.push(n);const n=e.getClassNames();for(const a of n)t.class.push(a);const o=e.getStyleNames();for(const a of o)t.style.push(a);return t}static createFrom(e,t){if(t||(t=new i),e.is('text'))return t.add(e),t;e.is('element')&&t.add(e,i.consumablesFromElement(e)),e.is('documentFragment')&&t.add(e);for(const a of e.getChildren())t=i.createFrom(a,t);return t}}t.a=i;class r{constructor(){this._canConsumeName=null,this._consumables={attribute:new Map,style:new Map,class:new Map}}add(e){for(const t in e.name&&(this._canConsumeName=!0),this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const a=this._test(t,e[t]);if(!0!==a)return a}return!0}consume(e){for(const t in e.name&&(this._canConsumeName=!1),this._consumables)t in e&&this._consume(t,e[t])}revert(e){for(const t in e.name&&(this._canConsumeName=!0),this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const a=Object(n.a)(t)?t:[t],i=this._consumables[e];for(const n of a){if('attribute'===e&&('class'===n||'style'===n))throw new o.b('viewconsumable-invalid-attribute: Classes and styles should be handled separately.');i.set(n,!0)}}_test(e,t){const a=Object(n.a)(t)?t:[t],o=this._consumables[e];for(const n of a)if('attribute'===e&&('class'===n||'style'===n)){const e=this._test(n,[...this._consumables[n].keys()]);if(!0!==e)return e}else{const e=o.get(n);if(e===void 0)return null;if(!e)return!1}return!0}_consume(e,t){const a=Object(n.a)(t)?t:[t],o=this._consumables[e];for(const n of a)'attribute'===e&&('class'===n||'style'===n)?this._consume(n,[...this._consumables[n].keys()]):o.set(n,!1)}_revert(e,t){const a=Object(n.a)(t)?t:[t],o=this._consumables[e];for(const n of a)if('attribute'===e&&('class'===n||'style'===n))this._revert(n,[...this._consumables[n].keys()]);else{const e=o.get(n);!1===e&&o.set(n,!0)}}}},function(e,t,a){'use strict';t.b=function(){return(e,t,a,o)=>{if(!t.output&&a.consume(t.input,{name:!0})){const e=o.convertChildren(t.input,a,t);t.output=new n.a(Object(i.c)(e))}}},t.a=function(){return(e,t,a,n)=>{const i={name:'$text',inside:t.context};n.schema.check(i)&&a.consume(t.input)&&(t.output=new o.a(t.input.data))}};var n=a(39),o=a(26),i=a(23)},function(e,t,a){'use strict';function n(e){return e.is('text')?'$text':e.name}t.a=function(e,t,a,n){n||(n=e.model.batch()),a.isCollapsed||e.deleteContent(a,n);const o=new d(e,n,a.anchor);let i;i=t.is('documentFragment')?t.getChildren():[t],o.handleNodes(i,{isFirst:!0,isLast:!0});const r=o.getSelectionRange();r?a.setRanges([r]):l.a.warn('insertcontent-no-range: Cannot determine a proper selection range after insertion.')};var o=a(1),i=a(179),r=a(5),s=a(3),l=a(16);class d{constructor(e,t,a){this.dataController=e,this.batch=t,this.position=a,this.canMergeWith=new Set([this.position.parent]),this.schema=e.model.schema}handleNodes(e,t){e=Array.from(e);for(let a=0;a<e.length;a++){const n=e[a];this._handleNode(n,{isFirst:0===a&&t.isFirst,isLast:a===e.length-1&&t.isLast})}}getSelectionRange(){return this.nodeToSelect?s.a.createOn(this.nodeToSelect):this.dataController.model.getNearestSelectionRange(this.position)}_handleNode(e,t){if(this._checkIsObject(e))return void this._handleObject(e,t);const a=this._checkAndSplitToAllowedPosition(e,t);return a?void(this._insert(e),this._mergeSiblingsOf(e,t)):void this._handleDisallowedNode(e,t)}_handleObject(e,t){this._checkAndSplitToAllowedPosition(e)?this._insert(e):this._tryAutoparagraphing(e,t)}_handleDisallowedNode(e,t){e.is('element')?this.handleNodes(e.getChildren(),t):this.schema.check({name:'$text',inside:this.position})?(this.schema.removeDisallowedAttributes([e],this.position),this._handleNode(e,t)):this._tryAutoparagraphing(e,t)}_insert(e){if(!this._checkIsAllowed(e,this.position))return void l.a.error('insertcontent-wrong-position: The node cannot be inserted on the given position.',{node:e,position:this.position});const t=i.a.createFromPosition(this.position);this.batch.insert(this.position,e),this.position=o.a.createFromPosition(t),t.detach(),this.nodeToSelect=this._checkIsObject(e)&&!this.schema.check({name:'$text',inside:this.position})?e:null}_mergeSiblingsOf(e,t){if(e instanceof r.a){const a=t.isFirst&&e.previousSibling instanceof r.a&&this.canMergeWith.has(e.previousSibling),n=t.isLast&&e.nextSibling instanceof r.a&&this.canMergeWith.has(e.nextSibling),s=i.a.createBefore(e),d=i.a.createAfter(e);if(a){const e=i.a.createFromPosition(this.position);this.batch.merge(s);const t=e.nodeBefore;this.schema.removeDisallowedAttributes(t.getChildren(),o.a.createAt(t),this.batch),this.position=o.a.createFromPosition(e),e.detach()}if(n){this.position.isEqual(d)||l.a.error('insertcontent-wrong-position-on-merge: The insertion position should equal the merge position'),this.position=o.a.createAt(d.nodeBefore,'end');const e=new i.a(this.position.root,this.position.path,'sticksToPrevious');this.batch.merge(d),this.schema.removeDisallowedAttributes(e.parent.getChildren(),e,this.batch),this.position=o.a.createFromPosition(e),e.detach()}s.detach(),d.detach(),a||n||this.schema.removeDisallowedAttributes(e.getChildren(),o.a.createAt(e),this.batch)}}_tryAutoparagraphing(e,t){const a=new r.a('paragraph');this._getAllowedIn(a,this.position.parent)&&(e.is('text')&&!this._checkIsAllowed(e,[a])&&this.schema.removeDisallowedAttributes([e],[a]),this._checkIsAllowed(e,[a])&&(a.appendChildren(e),this._handleNode(a,t)))}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(e,this.position.parent);if(!t)return!1;for(;t!=this.position.parent;){if(this.schema.limits.has(this.position.parent.name))return!1;if(this.position.isAtStart){const e=this.position.parent;this.position=o.a.createBefore(e),e.isEmpty&&this.batch.remove(e)}else if(this.position.isAtEnd)this.position=o.a.createAfter(this.position.parent);else{const e=o.a.createAfter(this.position.parent);this.batch.split(this.position),this.position=e,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(e,t){return this._checkIsAllowed(e,[t])?t:t.parent?this._getAllowedIn(e,t.parent):null}_checkIsAllowed(e,t){return this.schema.check({name:n(e),attributes:Array.from(e.getAttributeKeys()),inside:t})}_checkIsObject(e){return this.schema.objects.has(n(e))}}},function(e,t,a){'use strict';function n(e,t,a){const o=t.parent,r=a.parent;if(o!=r&&o.parent&&r.parent&&i(t,a)){for(t=c.a.createAfter(o),a=c.a.createBefore(r),r.isEmpty?e.remove(r):(!a.isEqual(t)&&e.move(r,t),e.merge(t));a.parent.isEmpty;){const t=a.parent;a=c.a.createBefore(t),e.remove(t)}n(e,t,a)}}function o(e,t){const a=e.check({name:'$text',inside:t}),n=e.check({name:'paragraph',inside:t});return!a&&n}function i(e,t){const a=e.root.document.schema,n=new m.a(e,t);for(const o of n.getWalker())if(a.objects.has(o.item.name)||a.limits.has(o.item.name))return!1;return!0}function r(e,t,a){const n=new u.a('paragraph');e.insert(t,n),a.setCollapsedAt(n)}function s(e,t){const a=e.document.schema.getLimitElement(t);e.remove(m.a.createIn(a)),r(e,c.a.createAt(a),t)}function l(e,t){const a=e.getLimitElement(t);if(!t.containsEntireContent(a))return!1;const n=t.getFirstRange();return n.start.parent!=n.end.parent&&e.check({name:'paragraph',inside:a.name})}t.a=function(e,t,a={}){if(!e.isCollapsed){const i=t.document.schema;if(!a.doNotResetEntireContent&&l(i,e))return void s(t,e);const c=e.getFirstRange(),m=c.start,u=d.a.createFromPosition(c.end);c.start.isTouching(c.end)||t.remove(c),a.leaveUnmerged||(n(t,m,u),i.removeDisallowedAttributes(m.parent.getChildren(),m,t)),e.setCollapsedAt(m),o(i,m)&&r(t,m,e),u.detach()}};var d=a(179),c=a(1),m=a(3),u=a(5)},function(e,t,a){'use strict';function n(e,t){if('text'==t.type)return o(e.walker,e.unit);if(t.type==(e.isForward?'elementStart':'elementEnd')){if(e.schema.objects.has(t.item.name))return r.a.createAt(t.item,e.isForward?'after':'before');if(e.schema.check({name:'$text',inside:t.nextPosition}))return t.nextPosition}else{if(e.schema.limits.has(t.item.name))return void e.walker.skip(()=>!0);if(e.schema.check({name:'$text',inside:t.nextPosition}))return t.nextPosition}}function o(e,t){const a=e.position.textNode;if(a){const n=a.data;for(let o=e.position.offset-a.startOffset;Object(d.b)(n,o)||'character'==t&&Object(d.a)(n,o);)e.next(),o=e.position.offset-a.startOffset}return e.position}function i(e,t){const a=e.root,n=r.a.createAt(a,t?'end':0);return t?new l.a(e,n):new l.a(n,e)}t.a=function(e,t,a={}){const o=e.model.schema,r='backward'!=a.direction,l=a.unit?a.unit:'character',d=t.focus,c=new s.a({boundaries:i(d,r),singleCharacters:!0,direction:r?'forward':'backward'}),m={walker:c,schema:o,isForward:r,unit:l};for(let o;o=c.next();){if(o.done)return;const e=n(m,o.value);if(e)return void t.moveFocusTo(e)}};var r=a(1),s=a(53),l=a(3),d=a(180)},function(e,t,a){'use strict';function n(e){const t=[];Array.from(e.getItems({direction:'backward'})).map((e)=>i.a.createOn(e)).filter((t)=>{const a=(t.start.isAfter(e.start)||t.start.isEqual(e.start))&&(t.end.isBefore(e.end)||t.end.isEqual(e.end));return a}).forEach((e)=>{t.push(e.start.parent),Object(l.d)(e)}),t.forEach((e)=>{for(let t=e;t.parent&&t.isEmpty;){const e=i.a.createOn(t);t=t.parent,Object(l.d)(e)}})}t.a=function(e){const t=new o.a,a=e.getFirstRange();if(!a||a.isCollapsed)return t;const l=a.start.root,d=a.start.getCommonPath(a.end),c=l.getNodeByPath(d);let m=a.start.parent==a.end.parent?a:i.a.createFromParentsAndOffsets(c,a.start.path[d.length],c,a.end.path[d.length]+1);const u=m.end.offset-m.start.offset;for(const a of m.getItems({shallow:!0}))a.is('textProxy')?t.appendChildren(new s.a(a.data,a.getAttributes())):t.appendChildren(a.clone(!0));if(m!=a){const e=a._getTransformedByMove(m.start,r.a.createAt(t,0),u)[0],o=new i.a(r.a.createAt(t),e.start),s=new i.a(e.end,r.a.createAt(t,'end'));n(s),n(o)}return t};var o=a(39),i=a(3),r=a(1),s=a(26),l=a(23)},function(e,t,a){'use strict';function n(e){const t=e.textNode;if(t){const a=t.data,n=e.offset-t.startOffset;return!Object(y.b)(a,n)&&!Object(y.a)(a,n)}return!0}function*o(e,t){for(let a=!1;!a;){if(a=!0,e){const t=e.next();t.done||(a=!1,yield{walker:e,value:t.value})}if(t){const e=t.next();e.done||(a=!1,yield{walker:t,value:e.value})}}}var i=a(359),r=a(369),s=a(3),l=a(1),d=a(403),c=a(20),m=a(404),u=a(251),p=a(406),g=a(53),f=a(407),h=a(183),b=a(68),_=a(8),k=a(0),w=a(4),y=a(180);const v='$graveyard';class x{constructor(){this.version=0,this.schema=new p.a,this.history=new m.a(this),this.markers=new f.a,this.selection=new u.a(this),this._pendingChanges=[],this.roots=new Map,this.selection.on('change:range',()=>{for(const e of this.selection.getRanges())if(!this._validateSelectionRange(e))throw new k.b('document-selection-wrong-position: Range from document selection starts or ends at incorrect position.',{range:e})}),this.createRoot('$root',v)}get graveyard(){return this.getRoot(v)}applyOperation(e){if(e.baseVersion!==this.version)throw new k.b('model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.',{operation:e});const t=e._execute();this.version++,this.history.addDelta(e.delta),this.fire('change',e.type,t,e.delta.batch,e.delta.type)}batch(e){return new c.a(this,e)}createRoot(e='$root',t='main'){if(this.roots.has(t))throw new k.b('model-document-createRoot-name-exists: Root with specified name already exists.',{name:t});const a=new d.a(this,e,t);return this.roots.set(t,a),a}destroy(){this.selection.destroy(),this.stopListening()}enqueueChanges(e){if(this._pendingChanges.push(e),1==this._pendingChanges.length){for(;this._pendingChanges.length;)this._pendingChanges[0](),this._pendingChanges.shift();this.fire('changesDone')}}getRoot(e='main'){if(!this.roots.has(e))throw new k.b('model-document-getRoot-root-not-exist: Root with specified name does not exist.',{name:e});return this.roots.get(e)}hasRoot(e){return this.roots.has(e)}getRootNames(){return Array.from(this.roots.keys()).filter((e)=>e!=v)}getNearestSelectionRange(e,t='both'){if(this.schema.check({name:'$text',inside:e}))return new s.a(e);let a,n;('both'==t||'backward'==t)&&(a=new g.a({startPosition:e,direction:'backward'})),('both'==t||'forward'==t)&&(n=new g.a({startPosition:e}));for(const i of o(a,n)){const e=i.walker==a?'elementEnd':'elementStart',t=i.value;if(t.type==e&&this.schema.objects.has(t.item.name))return s.a.createOn(t.item);if(this.schema.check({name:'$text',inside:t.nextPosition}))return new s.a(t.nextPosition)}return null}transformDeltas(e,t,a=!1){return h.a.transformDeltaSets(e,t,a?this:null)}toJSON(){const e=Object(b.a)(this);return e.selection='[engine.model.DocumentSelection]',e}_getDefaultRoot(){for(const e of this.roots.values())if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=new l.a(e,[0]),a=this.getNearestSelectionRange(t);return a||new s.a(t)}_validateSelectionRange(e){return n(e.start)&&n(e.end)}}t.a=x,Object(w.a)(x,_.c)},function(e,t,a){'use strict';var n=a(129),o=a(133),i=a(101),r=a(100),s=a(99),l=a(134),d=a(102),c=a(103),m=a(182),u=a(104)},function(e,t,a){'use strict';var n=a(95),o=a(48),i=a(130),r=a(29),s=a(71),l=a(40),d=a(98),c=a(41),m=a(131),u=a(132);const p={};p[n.a.className]=n.a,p[o.a.className]=o.a,p[i.a.className]=i.a,p[r.a.className]=r.a,p[s.a.className]=s.a,p[l.a.className]=l.a,p[d.a.className]=d.a,p[c.a.className]=c.a,p[m.a.className]=m.a,p[u.a.className]=u.a;t.a=class{static fromJSON(e,t){return p[e.__className].fromJSON(e,t)}}},function(e,t,a){'use strict';var n=a(96);t.a=function(e,t){return Object(n.a)(e,t)}},function(e,t,a){'use strict';var n=a(122),o=a(181),i=a(366),r=a(367),s=a(124),l=a(15),d=a(78),c=a(368),m='[object Arguments]',u='[object Array]',p='[object Object]',g=Object.prototype,f=g.hasOwnProperty;t.a=function(e,t,a,g,h,b){var _=Object(l.a)(e),k=Object(l.a)(t),w=u,y=u;_||(w=Object(s.a)(e),w=w==m?p:w),k||(y=Object(s.a)(t),y=y==m?p:y);var v=w==p&&!Object(d.a)(e),x=y==p&&!Object(d.a)(t),A=w==y;if(A&&!v)return b||(b=new n.a),_||Object(c.a)(e)?Object(o.a)(e,t,a,g,h,b):Object(i.a)(e,t,w,a,g,h,b);if(!(h&2)){var C=v&&f.call(e,'__wrapped__'),T=x&&f.call(t,'__wrapped__');if(C||T){var P=C?e.value():e,E=T?t.value():t;return b||(b=new n.a),a(P,E,g,h,b)}}return!!A&&(b||(b=new n.a),Object(r.a)(e,t,a,g,h,b))}},function(e,t){'use strict';t.a=function(e){return this.__data__.set(e,'__lodash_hash_undefined__'),this}},function(e,t){'use strict';t.a=function(e){return this.__data__.has(e)}},function(e,t){'use strict';t.a=function(e,t){for(var a=-1,n=e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}},function(e,t,a){'use strict';var n=a(127),o=a(174),i=a(181),r=a(126),s=a(90),l=n.a?n.a.prototype:void 0,d=l?l.valueOf:void 0;t.a=function(e,t,a,n,l,c,m){switch(a){case'[object DataView]':if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case'[object ArrayBuffer]':return e.byteLength==t.byteLength&&n(new o.a(e),new o.a(t));case'[object Boolean]':case'[object Date]':return+e==+t;case'[object Error]':return e.name==t.name&&e.message==t.message;case'[object Number]':return e==+e?e==+t:t!=+t;case'[object RegExp]':case'[object String]':return e==t+'';case'[object Map]':var u=r.a;case'[object Set]':var p=c&2;if(u||(u=s.a),e.size!=t.size&&!p)return!1;var g=m.get(e);return g?g==t:(c|=1,m.set(e,t),Object(i.a)(u(e),u(t),n,l,c,m));case'[object Symbol]':if(d)return d.call(e)==d.call(t);}return!1}},function(e,t,a){'use strict';var n=a(170),o=a(69);t.a=function(e,t,a,i,r,s){var l=r&2,d=Object(o.a)(e),c=d.length,m=Object(o.a)(t),u=m.length;if(c!=u&&!l)return!1;for(var p=c,g;p--;)if(g=d[p],l?!(g in t):!Object(n.a)(t,g))return!1;var f=s.get(e);if(f)return f==t;var h=!0;s.set(e,t);for(var b=l;++p<c;){g=d[p];var _=e[g],k=t[g];if(i)var w=l?i(k,_,g,t,e,s):i(_,k,g,e,t,s);if(void 0===w?!(_===k||a(_,k,i,r,s)):!w){h=!1;break}b||(b='constructor'==g)}if(h&&!b){var y=e.constructor,v=t.constructor;y!=v&&'constructor'in e&&'constructor'in t&&!('function'==typeof y&&y instanceof y&&'function'==typeof v&&v instanceof v)&&(h=!1)}return s['delete'](e),h}},function(e,t,a){'use strict';var n=a(81),o=a(44),i={};i['[object Float32Array]']=i['[object Float64Array]']=i['[object Int8Array]']=i['[object Int16Array]']=i['[object Int32Array]']=i['[object Uint8Array]']=i['[object Uint8ClampedArray]']=i['[object Uint16Array]']=i['[object Uint32Array]']=!0,i['[object Arguments]']=i['[object Array]']=i['[object ArrayBuffer]']=i['[object Boolean]']=i['[object DataView]']=i['[object Date]']=i['[object Error]']=i['[object Function]']=i['[object Map]']=i['[object Number]']=i['[object Object]']=i['[object RegExp]']=i['[object Set]']=i['[object String]']=i['[object WeakMap]']=!1;var r=Object.prototype,s=r.toString;t.a=function(e){return Object(o.a)(e)&&Object(n.a)(e.length)&&!!i[s.call(e)]}},function(e,t,a){'use strict';function n(e,t){const a=e.clone(),n=a.operations[0];return n.oldRange&&(n.oldRange=n.oldRange.getTransformedByDelta(t)[0]),n.newRange&&(n.newRange=n.newRange.getTransformedByDelta(t)[0]),[a]}function o(e,t){function a(){const a=new s.a(e.position.getShiftedBy(l),e.position.getShiftedBy(d)),o=new c.a(a,t.key,r,t.value,0);n.addOperation(o)}const n=new g.a,o=e.nodes;let r=o.getNode(0).getAttribute(t.key),l=0,d=o.getNode(0).offsetSize;for(let n=1;n<o.length;n++){const e=o.getNode(n),i=e.getAttribute(t.key);i!=r&&(r!=t.value&&a(),r=i,l=d),d+=e.offsetSize}return a(),n}function i(){const e=new p.a;return e.addOperation(new d.a(0)),e}var r=a(183),s=a(3),l=a(1),d=a(71),c=a(95),m=a(48),u=a(98),p=a(24),g=a(129),f=a(133),h=a(402),b=a(101),_=a(100),k=a(102),w=a(182),y=a(104),v=a(103),x=a(134),A=a(99),C=a(54);const T=r.a.addTransformationCase,P=r.a.defaultTransform;T(g.a,w.a,(e,t,a)=>{const n=P(e,t,a);return e.range.containsPosition(t.position)&&n.push(o(t,e)),n}),T(g.a,k.a,(e,t,a)=>{if(!t.position)return P(e,t,a);const n=a.undoMode,o=new l.a(t.position.root,t.position.path.slice(0,-1)),i=P(e,t,a);if(n||!(t._cloneOperation instanceof m.a))return i;for(const n of e.operations)if(n.range.containsPosition(o)||n.range.start.isEqual(o)){const e=new g.a,a=o.getShiftedBy(1),r=l.a.createFromPosition(a);r.path.push(0);const d=t._cloneOperation.nodes.getNode(0).getAttribute(n.key);e.addOperation(new c.a(new s.a(a,r),n.key,d===void 0?null:d,n.newValue,0)),i.push(e);break}return i}),T(f.a,b.a,(e,t,a)=>{if(!t.position)return P(e,t,a);const n=a.undoMode;return!n&&e.position.isEqual(t.position)?[t.getReversed(),e.clone()]:P(e,t,a)}),T(h.a,k.a,n),T(h.a,b.a,n),T(h.a,y.a,n),T(h.a,v.a,n),T(h.a,_.a,n),T(h.a,x.a,n),T(_.a,b.a,(e,t,a)=>{const n=a.undoMode;if(n||!t.position)return P(e,t,a);const o=e.sourcePosition.root==t.position.root&&'same'===Object(C.a)(e.sourcePosition.getParentPath(),t.position.getParentPath()),i=e.sourcePosition.offset<=t.position.offset&&e.sourcePosition.offset+e.howMany>t.position.offset;return o&&i?[t.getReversed(),e.clone()]:P(e,t,a)}),T(b.a,f.a,(e,t,a)=>{if(!e.position)return P(e,t,a);const n=a.undoMode;return!n&&e.position.isEqual(t.position)?[i()]:P(e,t,a)}),T(b.a,_.a,(e,t,a)=>{const n=a.undoMode;if(n||!e.position)return P(e,t,a);const o=e.position.root==t.sourcePosition.root&&'same'===Object(C.a)(e.position.getParentPath(),t.sourcePosition.getParentPath()),r=t.sourcePosition.offset<=e.position.offset&&t.sourcePosition.offset+t.howMany>e.position.offset;return o&&r?[i()]:P(e,t,a)}),T(k.a,k.a,(e,t,a)=>{const n=a.undoMode;if(n)return P(e,t,a);if(!e.position||!t.position)return P(e,t,a);const o=e.position.getParentPath(),i=t.position.getParentPath();if(e.position.root==t.position.root&&'same'==Object(C.a)(o,i))if(e=e.clone(),e.position.offset<t.position.offset||e.position.offset==t.position.offset&&a.isStrong){e._cloneOperation instanceof u.a&&t._cloneOperation instanceof u.a&&e._cloneOperation.sourcePosition.offset>t._cloneOperation.sourcePosition.offset&&e._cloneOperation.sourcePosition.offset--;const a=s.a.createFromPositionAndShift(e.position,e._moveOperation.howMany),n=s.a.createFromPositionAndShift(t.position,t._moveOperation.howMany),o=a.getDifference(n);let i=0;for(const e of o)i+=e.end.offset-e.start.offset;return 0==i?(e.operations.pop(),e.addOperation(new d.a(e.operations[0].baseVersion+1))):e.operations[1].howMany=i,[e]}else{const n=Object.assign({},a);return n.isStrong=!0,n.insertBefore=!0,P(e,t,n)}return P(e,t,a)}),T(k.a,v.a,(e,t,a)=>e.position?e.position.root==t.position.root&&'same'===Object(C.a)(t.position.path,e.position.getParentPath())?[i()]:P(e,t,a):P(e,t,a)),T(k.a,y.a,(e,t,a)=>{if(!e.position)return P(e,t,a);const n=e.position.root==t.range.start.root,o=n&&'same'===Object(C.a)(e.position.getParentPath(),t.range.start.getParentPath()),r=t.range.start.offset<e.position.offset&&t.range.end.offset>=e.position.offset;if(o&&r)return[i()];if(n&&'same'===Object(C.a)(e.position.getParentPath(),t.range.end.getShiftedBy(-1).path)){const a=e.clone(),n=l.a.createFromPosition(t.range.start);n.path.push(t.howMany-1);const o=n.getShiftedBy(1);a._cloneOperation.position=o;const i=l.a.createFromPosition(n);i.path.push(e.position.offset),a._moveOperation.sourcePosition=i;const r=l.a.createFromPosition(o);return r.path.push(0),a._moveOperation.targetPosition=r,[a]}return P(e,t,a)}),T(k.a,g.a,(e,t,a)=>{if(!e.position)return P(e,t,a);e=e.clone();const n=a.undoMode,o=new l.a(e.position.root,e.position.path.slice(0,-1));if(n||!(e._cloneOperation instanceof m.a))return[e];for(const n of t.operations)if(n.range.containsPosition(o)||n.range.start.isEqual(o)){null===n.newValue?e._cloneOperation.nodes.getNode(0).removeAttribute(n.key):e._cloneOperation.nodes.getNode(0).setAttribute(n.key,n.newValue);break}return[e]}),T(v.a,k.a,(e,t,a)=>t.position?e.position.root==t.position.root&&'same'===Object(C.a)(e.position.path,t.position.getParentPath())?[t.getReversed(),e.clone()]:P(e,t,a):P(e,t,a)),T(w.a,g.a,(e,t)=>{const a=[e.clone()];return t.range.containsPosition(e.position)&&a.push(o(e,t)),a}),T(y.a,k.a,(e,t,a)=>{if(!t.position)return P(e,t,a);const n=e.range.start.root==t.position.root,o=n&&'same'===Object(C.a)(e.range.start.getParentPath(),t.position.getParentPath()),i=e.range.start.offset<t.position.offset&&e.range.end.offset>=t.position.offset;if(o&&i)return[t.getReversed(),e.clone()];if(n&&'same'===Object(C.a)(t.position.getParentPath(),e.range.end.getShiftedBy(-1).path)){const t=e.clone();return t._insertOperation.position.offset++,t._moveOperation.howMany++,t._moveOperation.targetPosition.path[t._moveOperation.targetPosition.path.length-2]++,[t]}return P(e,t,a)}),T(x.a,k.a,(e,t,a)=>{const n=a.undoMode,o=P(e,t,a);if(n||!(t._cloneOperation instanceof m.a))return o;const i=t._cloneOperation.position.getShiftedBy(-1);if(i&&e.operations[0].position.isEqual(i)){const t=e.clone();t.operations[0].position=i.getShiftedBy(1),o.push(t)}return o}),T(k.a,x.a,(e,t,a)=>{e=e.clone();const n=a.undoMode;if(n||!(e._cloneOperation instanceof m.a))return[e];const o=e._cloneOperation.position.getShiftedBy(-1);if(o&&!n&&t.operations[0].position.isEqual(o)){const a=t.clone();return a.operations[0].position=o.getShiftedBy(1),a.operations[0].oldName=e._cloneOperation.nodes.getNode(0).name,[e,a]}return[e]}),T(A.a,k.a,(e,t,a)=>{const n=P(e,t,a),o=t._cloneOperation.position||t._cloneOperation.targetPosition;if(!o)return P(e,t,a);const i=a.undoMode;if(i)return n;for(const i of n)if(i instanceof A.a){const e=i._moveOperation,t=e.sourcePosition.getShiftedBy(e.howMany);t.isEqual(o)&&(e.howMany+=1)}return n}),T(k.a,A.a,(e,t,a)=>{const n=a.undoMode;if(n)return P(e,t,a);const o=e._cloneOperation.position||e._cloneOperation.targetPosition;if(!o)return P(e,t,a);t=t.clone();const i=t._moveOperation,r=i.sourcePosition.getShiftedBy(i.howMany);return r.isEqual(o)&&(i.howMany+=1),P(e,t,a)})},function(e,t,a){'use strict';function n(e){return[e.clone()]}function o(e,t){for(let a=0;a<t.length;a++)t[a].baseVersion=e+a+1;return t}function i(e,t){return null===e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)}function r(e){return 0===e.length?null:1==e.length?e[0]:(e[0].end=e[e.length-1].end,e[0])}function s(e,t,n){const a=[];for(let o=0;o<e.length;o++){const i=l(e[o],t,n.isSticky);a.push(i);for(let t=o+1;t<e.length;t++)e[t]=e[t]._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany)[0];t=t._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!0,!1)}return a}function l(e,t,a){let n='$graveyard'==t.root.rootName?f.a:'$graveyard'==e.start.root.rootName?h.a:g.a;const o=new n(e.start,e.end.offset-e.start.offset,t,0);return o.isSticky=a,o}var d=a(48),c=a(95),m=a(132),u=a(131),p=a(130),g=a(29),f=a(41),h=a(98),_=a(71),k=a(3),w=a(54);t.a=function(e,t,a={isStrong:!1}){let i,r;e instanceof d.a?i=y.InsertOperation:e instanceof c.a?i=y.AttributeOperation:e instanceof m.a?i=y.RootAttributeOperation:e instanceof u.a?i=y.RenameOperation:e instanceof p.a?i=y.MarkerOperation:e instanceof g.a?i=y.MoveOperation:r=n,i&&(t instanceof d.a?r=i.InsertOperation:t instanceof c.a?r=i.AttributeOperation:t instanceof m.a?r=i.RootAttributeOperation:t instanceof u.a?r=i.RenameOperation:t instanceof p.a?r=i.MarkerOperation:t instanceof g.a?r=i.MoveOperation:r=n);const s=r(e,t,a);return o(e.baseVersion,s)};const y={InsertOperation:{InsertOperation(e,t,a){const n=e.clone(),o=void 0===a.insertBefore?!a.isStrong:a.insertBefore;return n.position=n.position._getTransformedByInsertion(t.position,t.nodes.maxOffset,o),[n]},AttributeOperation:n,RootAttributeOperation:n,RenameOperation:n,MarkerOperation:n,MoveOperation(e,t,a){const n=e.clone(),o=void 0===a.insertBefore?!a.isStrong:a.insertBefore;return n.position=e.position._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,o,t.isSticky&&!a.forceNotSticky),[n]}},AttributeOperation:{InsertOperation(e,t){const a=e.range._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0,!1);return a.reverse().map((t)=>new c.a(t,e.key,e.oldValue,e.newValue,e.baseVersion))},AttributeOperation(e,t,a){if(e.key===t.key){const n=e.range.getDifference(t.range).map((t)=>new c.a(t,e.key,e.oldValue,e.newValue,e.baseVersion)),o=e.range.getIntersection(t.range);return o&&(a.isStrong?n.push(new c.a(o,t.key,t.newValue,e.newValue,e.baseVersion)):0===n.length&&n.push(new _.a(0))),n}return[e.clone()]},RootAttributeOperation:n,RenameOperation:n,MarkerOperation:n,MoveOperation(e,t){const a=k.a.createFromPositionAndShift(t.sourcePosition,t.howMany);let n=[];const o=r(e.range.getDifference(a)),i=e.range.getIntersection(a);return null!==o&&(o.start=o.start._getTransformedByDeletion(t.sourcePosition,t.howMany),o.end=o.end._getTransformedByDeletion(t.sourcePosition,t.howMany),n=o._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,!0,!1).reverse()),null!==i&&(i.start=i.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),i.end=i.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.push(i)),n.map((t)=>new c.a(t,e.key,e.oldValue,e.newValue,e.baseVersion))}},RootAttributeOperation:{InsertOperation:n,AttributeOperation:n,RootAttributeOperation(e,t,a){return e.root!==t.root||e.key!==t.key||(e.newValue===t.newValue||a.isStrong)&&e.newValue!==t.newValue?[e.clone()]:[new _.a(e.baseVersion)]},RenameOperation:n,MarkerOperation:n,MoveOperation:n},RenameOperation:{InsertOperation(e,t){const a=e.clone();return a.position=a.position._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0),[a]},AttributeOperation:n,RootAttributeOperation:n,RenameOperation(e,t,a){const n=e.clone();if(e.position.isEqual(t.position))if(a.isStrong)n.oldName=t.newName;else return[new _.a(e.baseVersion)];return[n]},MarkerOperation:n,MoveOperation(e,t){const a=e.clone(),n=a.position.isEqual(t.sourcePosition);return a.position=a.position._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!0,n),[a]}},MarkerOperation:{InsertOperation(e,t){const a=e.clone();return a.oldRange&&(a.oldRange=a.oldRange._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,!1)[0]),a.newRange&&(a.newRange=a.newRange._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,!1)[0]),[a]},AttributeOperation:n,RootAttributeOperation:n,RenameOperation:n,MarkerOperation(e,t,a){const n=e.clone();if(e.name==t.name)if(a.isStrong)n.oldRange=t.newRange;else return[new _.a(e.baseVersion)];return[n]},MoveOperation(e,t){const a=e.clone();if(a.oldRange){const e=a.oldRange._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany);a.oldRange=k.a.createFromRanges(e)}if(a.newRange){const e=a.newRange._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany);a.newRange=k.a.createFromRanges(e)}return[a]}},MoveOperation:{InsertOperation(e,t,a){let n=k.a.createFromPositionAndShift(e.sourcePosition,e.howMany);n=n._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,e.isSticky&&!a.forceNotSticky)[0];const o=void 0===a.insertBefore?!a.isStrong:a.insertBefore,i=new e.constructor(n.start,n.end.offset-n.start.offset,e.targetPosition._getTransformedByInsertion(t.position,t.nodes.maxOffset,o),e.baseVersion);return i.isSticky=e.isSticky,[i]},AttributeOperation:n,RootAttributeOperation:n,RenameOperation:n,MarkerOperation:n,MoveOperation(e,t,a){const n=k.a.createFromPositionAndShift(e.sourcePosition,e.howMany),o=k.a.createFromPositionAndShift(t.sourcePosition,t.howMany);let r=a.isStrong;const l=e.isSticky&&!a.forceNotSticky,d=void 0===a.insertBefore?!r:a.insertBefore,c=e.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,d,t.isSticky&&!a.forceNotSticky);if(i(e,t)&&i(t,e))return[t.getReversed()];const m=n.containsPosition(t.targetPosition)||n.start.isEqual(t.targetPosition)&&l||n.end.isEqual(t.targetPosition)&&l;if(m&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!l),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,l),s([n],c,e);const u=o.containsPosition(e.targetPosition)||o.start.isEqual(e.targetPosition)&&t.isSticky&&!a.forceNotSticky||o.end.isEqual(e.targetPosition)&&t.isSticky&&!a.forceNotSticky;if(u&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),s([n],c,e);const p=Object(w.a)(e.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if('prefix'==p||'extension'==p)return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!l),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,l),s([n],c,e);a.forceWeakRemove||(e instanceof f.a&&!(t instanceof f.a)?r=!0:!(e instanceof f.a)&&t instanceof f.a&&(r=!1));const g=[],h=n.getDifference(o);for(const n of h){n.start=n.start._getTransformedByDeletion(t.sourcePosition,t.howMany),n.end=n.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const e='same'==Object(w.a)(n.start.getParentPath(),t.getMovedRangeStart().getParentPath()),a=n._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,e,l);g.push(...a)}const b=n.getIntersection(o);return null!==b&&r&&!m&&(b.start=b.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),b.end=b.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),0===g.length?g.push(b):1==g.length?o.start.isBefore(n.start)||o.start.isEqual(n.start)?g.unshift(b):g.push(b):g.splice(1,0,b)),0===g.length?[new _.a(e.baseVersion)]:s(g,c,e)}}}},function(e,t,a){'use strict';var n=a(184),o=a(185),i=a(186),r=a(187),s=a(189),l=a(194),d=a(141),c=a(142),m=a(195),u=a(196),p=a(197),g=a(198),f=a(200),h=a(201),b=a(202),_=a(203),k=a(204),w=a(205),y=a(143),v=a(206),x=a(207),A=a(208),C=a(209),T=a(210),P=a(211),E=a(18),S=a(212),V=a(213),O=a(214),R=a(146),F=a(215),I=a(216),N=a(217),B=a(219),M=a(220),D=a(221),L=a(222),j=a(223),z=a(224),q=a(225),H=a(226),W=a(227),$=a(228),U=a(230),K=a(231),Q=a(232),J=a(233),Y=a(234),G=a(235),X=a(236),Z=a(237),ee=a(238),te=a(239),ae=a(240),ne=a(241),oe=a(108),ie=a(149),re=a(242),se=a(243),le=a(244),de=a(245),ce=a(246),me=a(247),ue=a(249),pe=a(250),ge=a(401);a.d(t,'a',function(){return ge.a})},function(e,t,a){'use strict';var n=a(119),o=a(15);t.a=function(e){return Object(o.a)(e)||Object(n.a)(e)}},function(e,t,a){'use strict';var n=a(374),o=a(375),i=a(191);t.a=function(e){var t=Object(o.a)(e);return 1==t.length&&t[0][2]?Object(i.a)(t[0][0],t[0][1]):function(a){return a===e||Object(n.a)(a,e,t)}}},function(e,t,a){'use strict';var n=a(122),o=a(96);t.a=function(e,t,a,i){var r=a.length,s=r,l=!i;if(null==e)return!s;for(e=Object(e);r--;){var d=a[r];if(l&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++r<s;){d=a[r];var c=d[0],m=e[c],u=d[1];if(!(l&&d[2])){var p=new n.a;if(i)var g=i(m,u,c,e,t,p);if(void 0===g?!Object(o.a)(u,m,i,1|2,p):!g)return!1}else if(void 0===m&&!(c in e))return!1}return!0}},function(e,t,a){'use strict';var n=a(190),o=a(376);t.a=function(e){for(var t=Object(o.a)(e),a=t.length;a--;)t[a][2]=Object(n.a)(t[a][1]);return t}},function(e,t,a){'use strict';var n=a(377),o=a(69),i=Object(n.a)(o.a);t.a=i},function(e,t,a){'use strict';var n=a(378),o=a(124),i=a(126),r=a(379);t.a=function(e){return function(t){var a=Object(o.a)(t);return a=='[object Map]'?Object(i.a)(t):a=='[object Set]'?Object(r.a)(t):Object(n.a)(t,e(t))}}},function(e,t,a){'use strict';var n=a(30);t.a=function(e,t){return Object(n.a)(t,function(t){return[t,e[t]]})}},function(e,t){'use strict';t.a=function(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=[e,e]}),a}},function(e,t,a){'use strict';var n=a(96),o=a(192),i=a(385),r=a(56),s=a(190),l=a(191),d=a(57);t.a=function(e,t){return Object(r.a)(e)&&Object(s.a)(t)?Object(l.a)(Object(d.a)(e),t):function(a){var r=Object(o.a)(a,e);return r===void 0&&r===t?Object(i.a)(a,e):Object(n.a)(t,r,void 0,1|2)}}},function(e,t,a){'use strict';var n=a(382),o=a(383),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,r=/\\(\\)?/g,s=Object(n.a)(function(e){var t=[];return Object(o.a)(e).replace(i,function(e,a,n,o){t.push(n?o.replace(r,'$1'):a||e)}),t});t.a=s},function(e,t,a){'use strict';function n(e,t){if('function'!=typeof e||t&&'function'!=typeof t)throw new TypeError(i);var a=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=a.cache;if(i.has(o))return i.get(o);var r=e.apply(this,n);return a.cache=i.set(o,r),r};return a.cache=new(n.Cache||o.a),a}var o=a(123),i='Expected a function';n.Cache=o.a,t.a=n},function(e,t,a){'use strict';var n=a(384);t.a=function(e){return null==e?'':Object(n.a)(e)}},function(e,t,a){'use strict';var n=a(127),o=a(46),i=n.a?n.a.prototype:void 0,r=i?i.toString:void 0;t.a=function(e){if('string'==typeof e)return e;if(Object(o.a)(e))return r?r.call(e):'';var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t}},function(e,t,a){'use strict';var n=a(386),o=a(387);t.a=function(e,t){return null!=e&&Object(o.a)(e,t,n.a)}},function(e,t){'use strict';t.a=function(e,t){return t in Object(e)}},function(e,t,a){'use strict';var n=a(105),o=a(119),i=a(15),r=a(37),s=a(56),l=a(81),d=a(120),c=a(57);t.a=function(e,t,a){t=Object(s.a)(t,e)?[t]:Object(n.a)(t);for(var m=-1,u=t.length,p;++m<u;){var g=Object(c.a)(t[m]);if(!(p=null!=e&&a(e,g)))break;e=e[g]}if(p)return p;var u=e?e.length:0;return!!u&&Object(l.a)(u)&&Object(r.a)(g,u)&&(Object(i.a)(e)||Object(d.a)(e)||Object(o.a)(e))}},function(e,t,a){'use strict';var n=a(118),o=a(389),i=a(56),r=a(57);t.a=function(e){return Object(i.a)(e)?Object(n.a)(Object(r.a)(e)):Object(o.a)(e)}},function(e,t,a){'use strict';var n=a(140);t.a=function(e){return function(t){return Object(n.a)(t,e)}}},function(e,t,a){'use strict';var n=a(13),o=a(391);t.a=function(e,t,a,i){var r=e.length;for(a=Object(n.a)(a),0>a&&(a=-a>r?0:r+a),i=void 0===i||i>r?r:Object(n.a)(i),0>i&&(i+=r),i=a>i?0:Object(o.a)(i);a<i;)e[a++]=t;return e}},function(e,t,a){'use strict';var n=a(392),o=a(13);t.a=function(e){return e?Object(n.a)(Object(o.a)(e),0,4294967295):0}},function(e,t){'use strict';t.a=function(e,t,a){return e===e&&(void 0!==a&&(e=e<=a?e:a),void 0!==t&&(e=e>=t?e:t)),e}},function(e,t,a){'use strict';var o=a(37);t.a=function(e,t){var a=e.length;if(a)return t+=0>t?a:0,Object(o.a)(t,a)?e[t]:void 0}},function(e,t){'use strict';t.a=function(e,t,a,n){for(var o=a-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}},function(e,t,a){'use strict';var n=a(192);t.a=function(e,t){for(var a=-1,o=t.length,i=Array(o);++a<o;)i[a]=null==e?void 0:Object(n.a)(e,t[a]);return i}},function(e,t,a){'use strict';var n=a(140),o=a(42);t.a=function(e,t){return 1==t.length?e:Object(n.a)(e,Object(o.a)(t,0,-1))}},function(e,t,a){'use strict';var n=a(46);t.a=function(e,t){if(e!==t){var a=e!==void 0,o=null===e,i=e===e,r=Object(n.a)(e),s=t!==void 0,l=null===t,d=t===t,c=Object(n.a)(t);if(!l&&!c&&!r&&e>t||r&&s&&d&&!l&&!c||o&&s&&d||!a&&d||!i)return 1;if(!o&&!r&&!c&&e<t||c&&a&&i&&!o&&!r||l&&a&&i||!s&&i||!d)return-1}return 0}},function(e,t,a){'use strict';var n=a(173),o=a(399),i=a(90),r=n.a&&1/Object(i.a)(new n.a([,-0]))[1]==1/0?function(e){return new n.a(e)}:o.a;t.a=r},function(e,t){'use strict';t.a=function(){}},function(e,t,a){'use strict';var n=a(63),o=a(105),i=a(37),r=a(56),s=a(17),l=a(57);t.a=function(e,t,a,d){t=Object(r.a)(t,e)?[t]:Object(o.a)(t);for(var c=-1,m=t.length,u=e;null!=u&&++c<m;){var p=Object(l.a)(t[c]);if(Object(s.a)(u)){var g=a;if(c!=m-1){var f=u[p];g=d?d(f,p,u):void 0,g===void 0&&(g=null==f?Object(i.a)(t[c+1])?[]:{}:f)}Object(n.a)(u,p,g)}u=u[p]}return e}},function(e,t,a){'use strict';var n=a(184),o=a(185),i=a(186),r=a(187),s=a(189),l=a(194),d=a(141),c=a(142),m=a(195),u=a(196),p=a(197),g=a(198),f=a(200),h=a(201),b=a(202),_=a(203),k=a(204),w=a(205),y=a(143),v=a(206),x=a(207),A=a(208),C=a(209),T=a(210),P=a(211),E=a(18),S=a(212),V=a(213),O=a(214),R=a(146),F=a(215),I=a(216),N=a(217),B=a(219),M=a(220),D=a(221),L=a(222),j=a(223),z=a(224),q=a(225),H=a(226),W=a(227),$=a(228),U=a(230),K=a(231),Q=a(232),J=a(233),Y=a(234),G=a(235),X=a(236),Z=a(237),ee=a(238),te=a(239),ae=a(240),ne=a(241),oe=a(108),ie=a(149),re=a(242),se=a(243),le=a(244),de=a(245),ce=a(246),me=a(247),ue=a(249),pe=a(250);t.a={chunk:n.a,compact:o.a,concat:i.a,difference:r.a,differenceBy:s.a,differenceWith:l.a,drop:d.a,dropRight:c.a,dropRightWhile:m.a,dropWhile:u.a,fill:p.a,findIndex:g.a,findLastIndex:f.a,first:h.a,flatten:b.a,flattenDeep:_.a,flattenDepth:k.a,fromPairs:w.a,head:y.a,indexOf:v.a,initial:x.a,intersection:A.a,intersectionBy:C.a,intersectionWith:T.a,join:P.a,last:E.a,lastIndexOf:S.a,nth:V.a,pull:O.a,pullAll:R.a,pullAllBy:F.a,pullAllWith:I.a,pullAt:N.a,remove:B.a,reverse:M.a,slice:D.a,sortedIndex:L.a,sortedIndexBy:j.a,sortedIndexOf:z.a,sortedLastIndex:q.a,sortedLastIndexBy:H.a,sortedLastIndexOf:W.a,sortedUniq:$.a,sortedUniqBy:U.a,tail:K.a,take:Q.a,takeRight:J.a,takeRightWhile:Y.a,takeWhile:G.a,union:X.a,unionBy:Z.a,unionWith:ee.a,uniq:te.a,uniqBy:ae.a,uniqWith:ne.a,unzip:oe.a,unzipWith:ie.a,without:re.a,xor:se.a,xorBy:le.a,xorWith:de.a,zip:ce.a,zipObject:me.a,zipObjectDeep:ue.a,zipWith:pe.a}},function(e,t,a){'use strict';function n(e,t,a,n){const o=e.document,i=new d,r=new s.a(t,a,n,o.markers,o.version);e.addDelta(i),i.addOperation(r),o.applyOperation(r)}var o=a(24),i=a(19),r=a(20),s=a(130),l=a(0);class d extends o.a{get type(){return'marker'}get _reverseDeltaClass(){return d}static get className(){return'engine.model.delta.MarkerDelta'}}t.a=d,Object(r.b)('setMarker',function(e,t){const a='string'==typeof e?e:e.name,o=this.document.markers.get(a);if(!t&&!o)throw new l.b('batch-setMarker-no-range: Range parameter is required when adding a new marker.');const i=o?o.getRange():null;return t?n(this,a,i,t):n(this,a,null,i),this}),Object(r.b)('removeMarker',function(e){const t='string'==typeof e?e:e.name;if(!this.document.markers.has(t))throw new l.b('batch-removeMarker-no-marker: Trying to remove marker which does not exist.');const a=this.document.markers.get(t).getRange();return n(this,t,a,null),this}),i.a.register(d)},function(e,t,a){'use strict';var n=a(5);class o extends n.a{constructor(e,t,a='main'){super(t),this._doc=e,this.rootName=a}get document(){return this._doc}is(e,t){return t?'rootElement'==e&&t==this.name||super.is(e,t):'rootElement'==e||super.is(e)}toJSON(){return this.rootName}}t.a=o},function(t,a,n){'use strict';var o=n(0);a.a=class{constructor(){this._deltas=[],this._historyPoints=new Map,this._undoPairs=new Map,this._undoneDeltas=new Set}addDelta(e){if(0<e.operations.length&&!this._historyPoints.has(e.baseVersion)){const t=this._deltas.length;this._deltas[t]=e,this._historyPoints.set(e.baseVersion,t)}}*getDeltas(t=0,a=e){if(0!==this._deltas.length){let e=this._getIndex(t);if(-1!=e)for(;e<this._deltas.length;){const t=this._deltas[e++];if(t.baseVersion>=a)break;yield t}}}getDelta(e){const t=this._historyPoints.get(e);return t===void 0?null:this._deltas[t]}setDeltaAsUndone(e,t){this._undoPairs.set(t,e),this._undoneDeltas.add(e)}isUndoingDelta(e){return this._undoPairs.has(e)}isUndoneDelta(e){return this._undoneDeltas.has(e)}getUndoneDelta(e){return this._undoPairs.get(e)}_getIndex(e){const t=this._historyPoints.get(e);if(t===void 0){const t=this._deltas[this._deltas.length-1],a=t.baseVersion+t.operations.length;if(0>e||e>=a)return-1;throw new o.b('model-history-wrong-version: Given base version points to the middle of a delta.')}return t}}},function(e,t){'use strict';t.a=function(e,t){if(e.size!=t.size)return!1;for(const a of e.entries()){const e=JSON.stringify(a[1]),n=JSON.stringify(t.get(a[0]));if(e!==n)return!1}return!0}},function(e,t,a){'use strict';function n(e,t,a){for(let n=a.length-1,o=t.length-1;0<=n&&0<=o;){const i=t[o];if(!e.hasItem(i))return!1;const r=e._extensionChains.get(i);if(r.includes(a[n]))n--,o--;else return!1}return!0}var o=a(1),i=a(5),r=a(3),s=a(251),l=a(68),d=a(15),c=a(120),m=a(0);class u{constructor(){this.objects=new Set,this.limits=new Set,this._items=new Map,this._extensionChains=new Map,this.registerItem('$root'),this.registerItem('$block'),this.registerItem('$inline'),this.registerItem('$text','$inline'),this.allow({name:'$block',inside:'$root'}),this.allow({name:'$inline',inside:'$block'}),this.limits.add('$root'),this.registerItem('$clipboardHolder','$root'),this.allow({name:'$inline',inside:'$clipboardHolder'})}allow(e){this._getItem(e.name).allow(u._normalizeQueryPath(e.inside),e.attributes)}disallow(e){this._getItem(e.name).disallow(u._normalizeQueryPath(e.inside),e.attributes)}requireAttributes(e,t){this._getItem(e).requireAttributes(t)}check(e){if(!this.hasItem(e.name))return!1;Object(d.a)(e.attributes)?0===e.attributes.length&&e.attributes.push(void 0):e.attributes=[e.attributes];const t=u._normalizeQueryPath(e.inside),a=this._extensionChains.get(e.name).map((e)=>this._getItem(e));if(!this._getItem(e.name)._checkRequiredAttributes(e.attributes))return!1;for(const n of e.attributes)for(const e of a)if(e._hasMatchingPath('disallow',t,n))return!1;for(const n of e.attributes){if(n&&s.a._isStoreAttributeKey(n))continue;let e=!1;for(const o of a)if(o._hasMatchingPath('allow',t,n)){e=!0;break}if(!e)return!1}return!0}hasItem(e){return this._items.has(e)}registerItem(e,t){if(this.hasItem(e))throw new m.b('model-schema-item-exists: Item with specified name already exists in schema.');if(!!t&&!this.hasItem(t))throw new m.b('model-schema-no-item: Item with specified name does not exist in schema.');this._items.set(e,new p(this));const a=this.hasItem(t)?this._extensionChains.get(t).concat(e):[e];this._extensionChains.set(e,a)}itemExtends(e,t){if(!this.hasItem(e)||!this.hasItem(t))throw new m.b('model-schema-no-item: Item with specified name does not exist in schema.');const a=this._extensionChains.get(e);return a.some((e)=>e==t)}checkAttributeInSelection(e,t){if(e.isCollapsed)return this.check({name:'$text',inside:e.getFirstPosition(),attributes:t});else{const a=e.getRanges();for(const e of a)for(const a of e){const e=a.item.name||'$text',n=Array.from(a.item.getAttributeKeys()).concat(t);if(this.check({name:e,inside:a.previousPosition,attributes:n}))return!0}}return!1}getValidRanges(e,t){const a=[];for(const n of e){let e=n.start,i=n.start;const s=n.end;for(const s of n.getWalker()){const n=s.item.name||'$text',l=o.a.createBefore(s.item);this.check({name:n,inside:l,attributes:t})||(!i.isEqual(e)&&a.push(new r.a(i,e)),i=s.nextPosition),e=s.nextPosition}i&&!i.isEqual(s)&&a.push(new r.a(i,s))}return a}getLimitElement(e){let t=Array.from(e.getRanges()).reduce((e,t)=>e?e.getCommonAncestor(t.getCommonAncestor()):t.getCommonAncestor(),null);for(;!this.limits.has(t.name)&&t.parent;)t=t.parent;return t}removeDisallowedAttributes(e,t,a){for(const n of e){const e=n.is('text')?'$text':n.name,o=Array.from(n.getAttributeKeys()),i=u._normalizeQueryPath(t);if(!this.check({name:e,attributes:o,inside:i}))for(const t of n.getAttributeKeys())this.check({name:e,attributes:t,inside:i})||(a?a.removeAttribute(n,t):n.removeAttribute(t));n.is('element')&&this.removeDisallowedAttributes(n.getChildren(),i.concat(n.name),a)}}_getItem(e){if(!this.hasItem(e))throw new m.b('model-schema-no-item: Item with specified name does not exist in schema.');return this._items.get(e)}static _normalizeQueryPath(e){let t=[];if(Object(d.a)(e))for(const a of e)a instanceof i.a?t.push(a.name):Object(c.a)(a)&&t.push(a);else if(e instanceof o.a){for(let a=e.parent;null!==a;)t.push(a.name),a=a.parent;t.reverse()}else Object(c.a)(e)&&(t=e.split(' '));return t}}t.a=u;class p{constructor(e){this._schema=e,this._allowed=[],this._disallowed=[],this._requiredAttributes=[]}allow(e,t){this._addPath('_allowed',e,t)}disallow(e,t){this._addPath('_disallowed',e,t)}requireAttributes(e){this._requiredAttributes.push(e)}toJSON(){const e=Object(l.a)(this);return e._schema='[model.Schema]',e}_addPath(e,t,a){t=t.slice(),Object(d.a)(a)||(a=[a]);for(const n of a)this[e].push({path:t,attribute:n})}_getPaths(e,t){const a='allow'===e?this._allowed:this._disallowed,n=[];for(const o of a)o.attribute===t&&n.push(o.path);return n}_checkRequiredAttributes(e){let t=!0;for(const a of this._requiredAttributes){t=!0;for(const n of a)if(-1==e.indexOf(n)){t=!1;break}if(t)break}return t}_hasMatchingPath(e,t,a){const o=this._getPaths(e,a);for(const i of o)if(n(this._schema,t,i))return!0;return!1}}},function(e,t,a){'use strict';var n=a(151),o=a(1),i=a(3),r=a(8),s=a(0),l=a(4);class d{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){return this._markers.has(e)}get(e){return this._markers.get(e)||null}set(e,t){const a=e instanceof c?e.name:e,o=this._markers.get(a);if(o){const e=o.getRange();if(e.isEqual(t))return o;this.remove(a)}const i=n.a.createFromRange(t),r=new c(a,i);return this._markers.set(a,r),this.fire('add:'+a,r),r}remove(e){const t=e instanceof c?e.name:e,a=this._markers.get(t);return!!a&&(this._markers.delete(t),this.fire('remove:'+t,a),this._destroyMarker(a),!0)}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+':')&&(yield t)}_destroyMarker(e){e.stopListening(),e._liveRange.detach(),e._liveRange=null}}t.a=d,Object(l.a)(d,r.c);class c{constructor(e,t){this.name=e,this._liveRange=t,this._liveRange.delegate('change:range').to(this),this._liveRange.delegate('change:content').to(this)}getStart(){if(!this._liveRange)throw new s.b('marker-destroyed: Cannot use a destroyed marker instance.');return o.a.createFromPosition(this._liveRange.start)}getEnd(){if(!this._liveRange)throw new s.b('marker-destroyed: Cannot use a destroyed marker instance.');return o.a.createFromPosition(this._liveRange.end)}getRange(){if(!this._liveRange)throw new s.b('marker-destroyed: Cannot use a destroyed marker instance.');return i.a.createFromRange(this._liveRange)}}Object(l.a)(c,r.c)},function(e,t,a){'use strict';var n=a(50);class o extends n.a{constructor(e){super(),this.editor=e}set(e,t,a={}){if('string'==typeof t){const e=t;t=(t,a)=>{this.editor.execute(e),a()}}super.set(e,t,a)}}t.a=o},function(e,t,a){'use strict';var n=a(410),o=a(164),i=a(177),r=a(70),s=a(424),l=a(260),d=a(12),c=a(4);class m{constructor(e){this.model=e,this.view=new n.a,this.mapper=new o.a,this.modelToView=new i.a(this.model,{mapper:this.mapper,viewSelection:this.view.selection}),this.listenTo(this.model,'change',(e,t,a)=>{this.modelToView.convertChange(t,a)},{priority:'low'}),this.listenTo(this.model,'changesDone',()=>{const e=this.model.selection;this.modelToView.convertSelection(e),this.view.render()},{priority:'low'}),this.listenTo(this.model.markers,'add',(e,t)=>{this.modelToView.convertMarker('addMarker',t.name,t.getRange())}),this.listenTo(this.model.markers,'remove',(e,t)=>{this.modelToView.convertMarker('removeMarker',t.name,t.getRange())}),this.listenTo(this.view,'selectionChange',Object(s.a)(this.model,this.mapper)),this.modelToView.on('insert:$text',Object(r.f)(),{priority:'lowest'}),this.modelToView.on('remove',Object(r.h)(),{priority:'low'}),this.modelToView.on('selection',Object(l.a)(),{priority:'low'}),this.modelToView.on('selection',Object(l.b)(),{priority:'low'}),this.modelToView.on('selection',Object(l.d)(),{priority:'low'}),this.modelToView.on('selection',Object(l.c)(),{priority:'low'})}createRoot(e,t='main'){const a=this.view.createRoot(e,t),n=this.model.getRoot(t);return this.mapper.bindElements(n,a),a}destroy(){this.view.destroy(),this.stopListening()}}t.a=m,Object(c.a)(m,d.a)},function(e,t,a){'use strict';var n=a(111),o=a(411),i=a(153),r=a(254),s=a(73),l=a(94),d=a(16),c=a(255),m=a(417),u=a(419),p=a(420),g=a(421),f=a(4),h=a(12),b=a(422);class _{constructor(){this.domRoots=new Map,this.selection=new n.a,this.domConverter=new i.a,this.roots=new Map,this.set('isReadOnly',!1),this.set('isFocused',!1),this.renderer=new o.a(this.domConverter,this.selection),this.renderer.bind('isFocused').to(this),this._observers=new Map,this.addObserver(c.a),this.addObserver(m.a),this.addObserver(u.a),this.addObserver(p.a),this.addObserver(g.a),Object(s.f)(this),Object(l.b)(this),this.decorate('render')}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[a,n]of this.domRoots)t.observe(n,a);return t.enable(),t}getObserver(e){return this._observers.get(e)}createRoot(e,t='main'){const a='string'==typeof e?e:e.tagName,n=new r.a(a.toLowerCase(),t);return n.document=this,this.roots.set(t,n),n.on('change:children',(e,t)=>this.renderer.markToSync('children',t)),n.on('change:attributes',(e,t)=>this.renderer.markToSync('attributes',t)),n.on('change:text',(e,t)=>this.renderer.markToSync('text',t)),this.domConverter.isElement(e)&&this.attachDomRoot(e,t),n}attachDomRoot(e,t='main'){const a=this.getRoot(t);this.domRoots.set(t,e),this.domConverter.bindElements(e,a),this.renderer.markToSync('children',a),this.renderer.domDocuments.add(e.ownerDocument);for(const a of this._observers.values())a.observe(e,t)}getRoot(e='main'){return this.roots.get(e)}getDomRoot(e='main'){return this.domRoots.get(e)}render(){this.disableObservers(),this.renderer.render(),this.enableObservers()}focus(){if(!this.isFocused){const e=this.selection.editableElement;e?(this.domConverter.focus(e),this.render()):d.a.warn('view-focus-no-selection: There is no selection in any editable to focus.')}}scrollToTheSelection(){const e=this.selection.getFirstRange();e&&Object(b.a)({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}destroy(){for(const e of this._observers.values())e.destroy()}}t.a=_,Object(f.a)(_,h.a)},function(e,t,a){'use strict';var n=a(35),o=a(22),i=a(73),r=a(4),s=a(252),l=a(412),d=a(413),c=a(16),m=a(12),u=a(0);class p{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this._inlineFiller=null,this.isFocused=!1,this._fakeSelectionContainer=null}markToSync(e,t){if('text'===e)this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if('attributes'===e)this.markedAttributes.add(t);else if('children'===e)this.markedChildren.add(t);else throw new u.b('view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.')}}render(){let e;this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent));for(const t of this.markedTexts)!this.markedChildren.has(t.parent)&&this.domConverter.mapViewToDom(t.parent)&&this._updateText(t,{inlineFillerPosition:e});for(const e of this.markedAttributes)this._updateAttrs(e);for(const t of this.markedChildren)this._updateChildren(t,{inlineFillerPosition:e});if(e){const t=this.domConverter.viewPositionToDom(e),a=t.parent.ownerDocument;this._inlineFiller=Object(i.i)(t.parent)?t.parent:this._addInlineFiller(a,t.parent,t.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_addInlineFiller(e,t,a){const n=t instanceof Array?t:t.childNodes,o=n[a];if(this.domConverter.isText(o))return o.data=i.b+o.data,o;else{const o=e.createTextNode(i.b);return Array.isArray(t)?n.splice(a,0,o):Object(l.a)(t,a,o),o}}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is('text')?o.a.createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return t&&this.domConverter.isText(t.parent)&&Object(i.i)(t.parent)}_removeInlineFiller(){const e=this._inlineFiller;if(!Object(i.i)(e))throw new u.b('view-renderer-filler-was-lost: The inline filler node was lost.');Object(i.h)(e)?e.parentNode.removeChild(e):e.data=e.data.substr(i.c),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,a=e.offset;if(!this.domConverter.mapViewToDom(t.root))return!1;if(!t.is('element'))return!1;if(a===t.getFillerOffset())return!1;const o=e.nodeBefore,i=e.nodeAfter;return o instanceof n.a||i instanceof n.a?!1:!0}_updateText(e,t){const a=this.domConverter.findCorrespondingDomText(e),n=this.domConverter.viewToDom(e,a.ownerDocument),o=a.data;let r=n.data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(r=i.b+r),o!=r&&(a.data=r)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e),a=Array.from(t.attributes).map((e)=>e.name),n=e.getAttributeKeys();for(const a of n)t.setAttribute(a,e.getAttribute(a));for(const n of a)e.hasAttribute(n)||t.removeAttribute(n)}_updateChildren(e,t){function a(e,t){if(e===t)return!0;return n.isText(e)&&n.isText(t)?e.data===t.data:Object(i.g)(e,n.blockFiller)&&Object(i.g)(t,n.blockFiller)}const n=this.domConverter,o=n.mapViewToDom(e);if(o){const r=o.ownerDocument,c=t.inlineFillerPosition,m=o.childNodes,u=Array.from(n.viewChildrenToDom(e,r,{bind:!0}));c&&c.parent==e&&this._addInlineFiller(r,u,c.offset);const p=Object(s.a)(m,u,a);let g=0;const i=new Set;for(const e of p)'insert'===e?(Object(l.a)(o,g,u[g]),g++):'delete'===e?(i.add(m[g]),Object(d.a)(m[g])):g++;for(const e of i)e.parentNode||this.domConverter.unbindDomElement(e)}}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=t.createElement('div'),this._fakeSelectionContainer.style.position='fixed',this._fakeSelectionContainer.style.top=0,this._fakeSelectionContainer.style.left='-9999px',this._fakeSelectionContainer.appendChild(t.createTextNode('\xA0'))),this._fakeSelectionContainer.parentElement||e.appendChild(this._fakeSelectionContainer);const a=this.selection.fakeSelectionLabel||'\xA0';this._fakeSelectionContainer.firstChild.data=a;const n=t.getSelection();n.removeAllRanges();const o=t.createRange();o.selectNodeContents(this._fakeSelectionContainer),n.addRange(o),this.domConverter.bindFakeSelection(this._fakeSelectionContainer,this.selection)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(this._domSelectionNeedsUpdate(t)){const e=this.domConverter.viewPositionToDom(this.selection.anchor),a=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(e.parent,e.offset),t.extend(a.parent,a.offset)}}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);if(t&&this.selection.isEqual(t))return!1;if(!this.selection.isCollapsed&&this.selection.isSimilar(t)){const e={oldSelection:t,currentSelection:this.selection};return c.a.warn('renderer-skipped-selection-rendering: The selection was not rendered due to its similarity to the current one.',e),!1}return!0}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const t=e.activeElement,a=this.domConverter.mapDomToView(t);t&&a&&e.getSelection().removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}t.a=p,Object(r.a)(p,m.a)},function(e,t){'use strict';t.a=function(e,t,a){e.insertBefore(a,e.childNodes[t]||null)}},function(e,t){'use strict';t.a=function(e){const t=e.parentNode;t&&t.removeChild(e)}},function(e,t){'use strict';t.a=function(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}},function(e,t,a){'use strict';t.a=function(e,t){const a=Object(n.a)(e),o=Object(n.a)(t);let r=0;for(;a[r]==o[r]&&a[r];)r++;return 0==r?null:a[r-1]};var n=a(253)},function(e,t,a){'use strict';var n=a(96);t.a=function(e,t,a){a='function'==typeof a?a:void 0;var o=a?a(e,t):void 0;return o===void 0?Object(n.a)(e,t,a):!!o}},function(e,t,a){'use strict';var n=a(59),o=a(255),i=a(16),r=a(256);class s extends n.a{constructor(e){super(e),this.mutationObserver=e.getObserver(o.a),this.document=e,this.selection=e.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Object(r.a)((e)=>this.document.fire('selectionChangeDone',e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument;this._documents.has(t)||(this.listenTo(t,'selectionchange',()=>{this._handleSelectionChange(t)}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(e){if(this.isEnabled&&(this.document.isFocused||this.document.isReadOnly)){this.mutationObserver.flush();const t=e.defaultView.getSelection(),a=this.domConverter.domSelectionToView(t);if(!(this.selection.isEqual(a)&&this.domConverter.isDomSelectionCorrect(t))){if(60<++this._loopbackCounter)return void i.a.warn('selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.');if(this.selection.isSimilar(a))this.document.render();else{const e={oldSelection:this.selection,newSelection:a,domSelection:t};this.document.fire('selectionChange',e),this._fireSelectionChangeDoneDebounced(e)}}}}_clearInfiniteLoop(){this._loopbackCounter=0}}t.a=s},function(e,t){'use strict';var a=Date.now;t.a=a},function(e,t,a){'use strict';var n=a(75);class o extends n.a{constructor(e){super(e),this.domEventType=['focus','blur'],this.useCapture=!0,e.on('focus',()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.render(),0)}),e.on('blur',(t,a)=>{const n=e.selection.editableElement;(null===n||n===a.target)&&(e.isFocused=!1,e.render())})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}t.a=o},function(e,t,a){'use strict';var n=a(75),o=a(28);class i extends n.a{constructor(e){super(e),this.domEventType=['keydown','keyup']}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey||e.metaKey,shiftKey:e.shiftKey,get keystroke(){return Object(o.a)(this)}})}}t.a=i},function(e,t,a){'use strict';function n(e){return e==r.c.arrowright||e==r.c.arrowleft||e==r.c.arrowup||e==r.c.arrowdown}var o=a(59),i=a(111),r=a(28),s=a(256);class l extends o.a{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Object(s.a)((e)=>this.document.fire('selectionChangeDone',e),200)}observe(){const e=this.document;e.on('keydown',(t,a)=>{const o=e.selection;o.isFake&&n(a.keyCode)&&this.isEnabled&&(a.preventDefault(),this._handleSelectionMove(a.keyCode))},{priority:'lowest'})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,a=i.a.createFromSelection(t);a.setFake(!1),(e==r.c.arrowleft||e==r.c.arrowup)&&a.collapseToStart(),(e==r.c.arrowright||e==r.c.arrowdown)&&a.collapseToEnd();const n={oldSelection:t,newSelection:a,domSelection:null};this.document.fire('selectionChange',n),this._fireSelectionChangeDoneDebounced(n)}}t.a=l},function(e,t,a){'use strict';function n({target:e,viewportOffset:t=0}){const a=c(e);for(let n=a,r=null;n;){let s;s=n==a?m(e):m(r),i(s,()=>u(e,n));const l=u(e,n);o(n,l,t),n.parent==n?n=null:(r=n.frameElement,n=n.parent)}}function o(e,t,a){const n=t.clone().moveBy(0,a),o=t.clone().moveBy(0,-a),i=new g.a(e).excludeScrollbarsAndBorders();if(![o,n].every((e)=>i.contains(e))){let{scrollX:c,scrollY:m}=e;s(o,i)?m-=i.top-t.top+a:r(n,i)&&(m+=t.bottom-i.bottom+a),l(t,i)?c-=i.left-t.left+a:d(t,i)&&(c+=t.right-i.right+a),e.scrollTo(c,m)}}function i(e,t){const a=c(e);for(let n,o;e!=a.document.body;)o=t(),n=new g.a(e).excludeScrollbarsAndBorders(),n.contains(o)||(s(o,n)?e.scrollTop-=n.top-o.top:r(o,n)&&(e.scrollTop+=o.bottom-n.bottom),l(o,n)?e.scrollLeft-=n.left-o.left:d(o,n)&&(e.scrollLeft+=o.right-n.right)),e=e.parentNode}function r(e,t){return e.bottom>t.bottom}function s(e,t){return e.top<t.top}function l(e,t){return e.left<t.left}function d(e,t){return e.right>t.right}function c(e){return Object(p.a)(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function m(e){if(Object(p.a)(e)){let t=e.commonAncestorContainer;return t.nodeType==Node.TEXT_NODE&&(t=t.parentNode),t}return e.parentNode}function u(e,t){const a=c(e),n=new g.a(e);if(a===t)return n;for(let o=a;o!=t;){const e=o.frameElement,t=new g.a(e).excludeScrollbarsAndBorders();n.moveBy(t.left,t.top),o=o.parent}return n}t.a=n;var p=a(155),g=a(257);Object.assign({},{scrollViewportToShowTarget:n,scrollAncestorsToShowTarget:function(e){const t=m(e);i(t,()=>new g.a(e))}})},function(e,t){'use strict';t.a=function(e){return'[object Window]'==Object.prototype.toString.apply(e)}},function(e,t,a){'use strict';t.a=function(e,t){return(a,o)=>{const i=o.newSelection,r=new n.a,s=[];for(const e of i.getRanges())s.push(t.toModelRange(e));r.setRanges(s,i.isBackward),r.isEqual(e.selection)||e.enqueueChanges(()=>{e.selection.setTo(r)})}};var n=a(58)},function(e,t){'use strict';t.a=function(e){return e instanceof HTMLTextAreaElement?e.value:e.innerHTML}},function(e,t){'use strict';t.a=class{getHtml(e){const t=document.implementation.createHTMLDocument(''),a=t.createElement('div');return a.appendChild(e),a.innerHTML}}},function(e,t,a){'use strict';var n=a(428),o=a(60),i=a(429),r=a(430);t.a=class{constructor(e,t){this.editor=e,this.view=t,this.componentFactory=new n.a(e),this.focusTracker=new o.a,this._toolbarConfig=Object(r.a)(e.config.get('toolbar')),t.panel.bind('isVisible').to(this.focusTracker,'isFocused'),this._toolbarConfig&&this._toolbarConfig.viewportTopOffset&&(t.viewportTopOffset=this._toolbarConfig.viewportTopOffset),t.listenTo(e.editing.view,'render',()=>{t.panel.isVisible&&t.panel.pin({target:t.editableElement,positions:t.panelPositions})});const a=e.editing.createRoot(t.editableElement);t.editable.bind('isReadOnly').to(a),t.editable.bind('isFocused').to(this.focusTracker),t.editable.name=a.rootName,this.focusTracker.add(t.editableElement)}init(){const e=this.editor;this.view.init(),this._toolbarConfig&&this.view.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),Object(i.a)({origin:e.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:this.view.toolbar})}destroy(){this.view.destroy()}}},function(e,t,a){'use strict';var n=a(0);t.a=class{constructor(e){this.editor=e,this._components=new Map}*names(){yield*this._components.keys()}add(e,t){if(this.has(e))throw new n.b('componentfactory-item-exists: The item already exists in the component factory.',{name:e});this._components.set(e,t)}create(e){if(!this.has(e))throw new n.b('componentfactory-item-missing: The required component is not registered in the factory.',{name:e});return this._components.get(e)(this.editor.locale)}has(e){return this._components.has(e)}}},function(e,t){'use strict';t.a=function({origin:e,originKeystrokeHandler:t,originFocusTracker:a,toolbar:n,beforeFocus:o,afterBlur:i}){a.add(n.element),t.set('Alt+F10',(e,t)=>{a.isFocused&&!n.focusTracker.isFocused&&(o&&o(),n.focus(),t())}),n.keystrokes.set('Esc',(t,a)=>{n.focusTracker.isFocused&&(e.focus(),i&&i(),a())})}},function(e,t){'use strict';t.a=function(e){return Array.isArray(e)?{items:e}:e?Object.assign({items:[]},e):{items:[]}}},function(e,t,a){'use strict';var n=a(432),o=a(434),i=a(156),r=a(263),s=a(6);class l extends n.a{constructor(e,t){super(e),this.toolbar=new r.a(e),this.set('viewportTopOffset',0),s.a.extend(this.toolbar.template,{attributes:{class:['ck-editor-toolbar','ck-toolbar_floating']}}),this.panel=new i.a(e),this.panel.withArrow=!1,this.panelPositions=this._getPanelPositions(),s.a.extend(this.panel.template,{attributes:{class:'ck-toolbar-container'}}),this.editable=new o.a(e,t),this.body.add(this.panel),this.addChildren(this.editable)}init(){super.init(),this.panel.content.add(this.toolbar)}get editableElement(){return this.editable.element}_getPanelPositionTop(e,t){let a;return a=e.top>t.height+this.viewportTopOffset?e.top-t.height:e.bottom>t.height+this.viewportTopOffset+50?this.viewportTopOffset:e.bottom,a}_getPanelPositions(){return[(e,t)=>({top:this._getPanelPositionTop(e,t),left:e.left,name:'toolbar_west'}),(e,t)=>({top:this._getPanelPositionTop(e,t),left:e.left+e.width-t.width,name:'toolbar_east'})]}}t.a=l},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e){super(e),this.body=this.createCollection()}init(){this._renderBodyCollection(),super.init()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const e=this._bodyCollectionContainer=new o.a({tag:'div',attributes:{class:['ck-body','ck-rounded-corners','ck-reset_all']},children:this.body}).render();document.body.appendChild(e)}}t.a=i},function(e,t,a){'use strict';var n=a(166);t.a=function(e,t){return Object(n.a)(e,!0,!0,t)}},function(e,t,a){'use strict';var n=a(435),o=a(6);class i extends n.a{constructor(e,a){super(e,a);const n=this.bindTemplate,i=this.t;this.set('name',null);o.a.extend(this.template,{attributes:{role:'textbox',"aria-label":n.to('name',(e)=>i('Rich Text Editor, %0',[e])),class:'ck-editor__editable_inline'}})}}t.a=i},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e,t){super(e);const a=this.bindTemplate;t&&(this.element=this.editableElement=t),this.template=new o.a({tag:'div',attributes:{class:[a.to('isFocused',(e)=>e?'ck-focused':'ck-blurred'),'ck-editor__editable','ck-rounded-corners'],contenteditable:a.to('isReadOnly',(e)=>!e)}}),this.set('isReadOnly',!1),this.set('isFocused',!1),this.externalElement=t}init(){this.externalElement?this.template.apply(this.externalElement):this.editableElement=this.element,super.init()}destroy(){this.externalElement&&this.template.revert(this.externalElement),super.destroy()}}t.a=i},function(e,t,a){'use strict';function n(e,t,a){const{left:n,top:o,name:i}=e(t,a);return[i,a.clone().moveTo(n,o)]}function o(e,t,a,o,i){let r=0,s=0,l,d;const c=a.getArea();return e.some((e)=>{function m(){s=f,r=g,l=p,d=u}const[u,p]=n(e,t,a);let g,f;if(o)if(i){const e=o.getIntersection(i);g=e?e.getIntersectionArea(p):0}else g=o.getIntersectionArea(p);return i&&(f=i.getIntersectionArea(p)),i&&!o?f>s&&m():!i&&o?g>r&&m():f>s&&g>=r?m():f>=s&&g>r&&m(),g===c}),l?[d,l]:null}function i({left:e,top:t}){const{scrollX:a,scrollY:n}=r.a.window;return{left:e+a,top:t+n}}t.a=function({element:e,target:t,positions:a,limiter:m,fitInViewport:u}){Object(c.a)(t)&&(t=t()),Object(c.a)(m)&&(m=m());const p=Object(l.a)(e.parentElement),g=new s.a(e),f=new s.a(t);let h,b;if(!m&&!u)[b,h]=n(a[0],f,g);else{const e=m&&new s.a(m).getVisible(),t=u&&new s.a(r.a.window);[b,h]=o(a,f,g,e,t)||n(a[0],f,g)}let{left:_,top:k}=i(h);if(p){const e=i(new s.a(p)),t=Object(d.a)(p);_-=e.left,k-=e.top,_+=p.scrollLeft,k+=p.scrollTop,_-=t.left,k-=t.top}return{left:_,top:k,name:b}};var r=a(74),s=a(257),l=a(437),d=a(259),c=a(64)},function(e,t,a){'use strict';t.a=function(e){for(;e&&'html'!=e.tagName.toLowerCase();){if('static'!=n.a.window.getComputedStyle(e).position)return e;e=e.parentElement}return null};var n=a(74)},function(e,t){'use strict';t.a=function(e){return(t)=>t+e}},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e){super(e),this.template=new o.a({tag:'span',attributes:{class:['ck-toolbar__separator']}})}}t.a=i},function(e,t){'use strict';t.a=function(e){return e.bindTemplate.to((t)=>{t.target===e.element&&t.preventDefault()})}},function(e,t,a){var n=a(442);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-hidden{display:none!important}.ck-reset,.ck-reset_all,.ck-reset_all *,.ck-reset_all a,.ck-reset_all textarea{box-sizing:border-box;width:auto;height:auto;position:static}svg.ck-icon{min-width:20px;min-height:20px;font-size:1em;vertical-align:middle}svg.ck-icon,svg.ck-icon *{color:inherit;cursor:inherit}svg.ck-icon *{fill:currentColor}.ck-tooltip,.ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:999}.ck-tooltip__text{display:inline-block}.ck-tooltip__text:after{content:"";width:0;height:0}.ck-button,a.ck-button{display:inline-block;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.ck-button .ck-tooltip,a.ck-button .ck-tooltip{display:block}.ck-button:hover .ck-tooltip,a.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck-button .ck-button__label,.ck-button:focus:not(:hover) .ck-tooltip,a.ck-button .ck-button__label,a.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck-toolbar__separator{display:inline-block}.ck-toolbar__newline{display:block;clear:left}.ck-dropdown{display:inline-block;position:relative}.ck-dropdown:after{content:"";width:0;height:0;pointer-events:none;z-index:1;position:absolute;top:50%;transform:translateY(-50%)}.ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:999;position:absolute;left:0;transform:translateY(100%)}.ck-dropdown__panel-visible{display:inline-block}.ck-label,.ck-list__item{display:block}.cke-voice-label{display:none}.ck-balloon-panel{display:none;position:absolute;z-index:999}.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:1}.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:2}.ck-balloon-panel.ck-balloon-panel_arrow_n:before,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{z-index:1}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:after{z-index:2}.ck-balloon-panel.ck-balloon-panel_arrow_s:before,.ck-balloon-panel.ck-balloon-panel_arrow_se:before,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{z-index:1}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:after{z-index:2}.ck-balloon-panel_visible{display:block}.ck-editor .ck-sticky-panel.ck-sticky-panel_sticky{z-index:999;position:fixed;top:0}.ck-editor .ck-sticky-panel.ck-sticky-panel_sticky.ck-sticky-panel_sticky_bottom-limit{top:auto;position:absolute}.ck-reset,.ck-reset_all,.ck-reset_all *,.ck-reset_all a,.ck-reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck-reset_all,.ck-reset_all *,.ck-reset_all a,.ck-reset_all textarea{border-collapse:collapse;font:normal normal normal 12px/1.67 Helvetica,Arial,Tahoma,Verdana,Sans-Serif;color:#333;text-align:left;white-space:nowrap;cursor:auto;float:none}.ck-reset_all .ck-rtl *{text-align:right}.ck-reset_all iframe{vertical-align:inherit}.ck-reset_all textarea{white-space:pre-wrap}.ck-reset_all input[type=password],.ck-reset_all input[type=text],.ck-reset_all textarea{cursor:text}.ck-reset_all input[type=password][disabled],.ck-reset_all input[type=text][disabled],.ck-reset_all textarea[disabled]{cursor:default}.ck-reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.ck-reset_all button::-moz-focus-inner{padding:0;border:0}svg.ck-icon{width:1.67em;height:1.67em}.ck-tooltip{left:50%}.ck-tooltip__text{font-size:.9em;line-height:1.5;color:#fff;padding:.4em .64em;background:#333;position:relative;left:-50%}.ck-rounded-corners .ck-tooltip__text,.ck-tooltip__text.ck-rounded-corners{border-radius:2px}.ck-tooltip__text:after{border-style:solid;left:50%}.ck-tooltip.ck-tooltip_s{bottom:-5px;transform:translateY(100%)}.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:-5px;transform:translateX(-50%);border-color:transparent transparent #333;border-width:0 5px 5px}.ck-tooltip.ck-tooltip_n{top:-5px;transform:translateY(-100%)}.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:-5px;transform:translateX(-50%);border-color:#333 transparent transparent;border-width:5px 5px 0}.ck-tooltip,.ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}.ck-button,a.ck-button{background:#fff;border:1px solid #bfbfbf;white-space:nowrap;cursor:default;vertical-align:middle;padding:.4em;font-size:inherit}.ck-button:not(.ck-disabled):focus,.ck-button:not(.ck-disabled):hover,a.ck-button:not(.ck-disabled):focus,a.ck-button:not(.ck-disabled):hover{background:#e6e6e6;border-color:#acacac}.ck-button:not(.ck-disabled):active,a.ck-button:not(.ck-disabled):active{background:#d9d9d9;border-color:#a3a3a3;box-shadow:inset 0 2px 2px #bfbfbf}.ck-button.ck-disabled,a.ck-button.ck-disabled{background:#fff;border-color:#c6c6c6}.ck-button.ck-rounded-corners,.ck-rounded-corners .ck-button,.ck-rounded-corners a.ck-button,a.ck-button.ck-rounded-corners{border-radius:2px}.ck-button:focus,a.ck-button:focus{outline:none;border:1px solid #48a3f5;box-shadow:0 0 3px 2px #78bbf8}.ck-button .ck-icon,a.ck-button .ck-icon{float:left}.ck-button.ck-disabled .ck-button__label,.ck-button.ck-disabled .ck-icon,a.ck-button.ck-disabled .ck-button__label,a.ck-button.ck-disabled .ck-icon{opacity:.5}.ck-button.ck-button_with-text,a.ck-button.ck-button_with-text{padding:.4em .8em}.ck-button.ck-button_with-text .ck-icon,a.ck-button.ck-button_with-text .ck-icon{margin-left:-.4em;margin-right:.4em}.ck-button.ck-button_with-text .ck-button__label,a.ck-button.ck-button_with-text .ck-button__label{display:block}.ck-button.ck-on,a.ck-button.ck-on{background:#f7f7f7;border-color:#b9b9b9}.ck-button.ck-on:not(.ck-disabled):focus,.ck-button.ck-on:not(.ck-disabled):hover,a.ck-button.ck-on:not(.ck-disabled):focus,a.ck-button.ck-on:not(.ck-disabled):hover{background:#dedede;border-color:#a7a7a7}.ck-button.ck-on:not(.ck-disabled):active,a.ck-button.ck-on:not(.ck-disabled):active{background:#d2d2d2;border-color:#9d9d9d;box-shadow:inset 0 2px 2px #b9b9b9}.ck-button.ck-on.ck-disabled,a.ck-button.ck-on.ck-disabled{background:#f8f8f8;border-color:silver}.ck-button-action,a.ck-button-action{background:#61b145;border-color:#4e8e37;text-shadow:0 -1px #4e8e37;color:#fff}.ck-button-action:not(.ck-disabled):focus,.ck-button-action:not(.ck-disabled):hover,a.ck-button-action:not(.ck-disabled):focus,a.ck-button-action:not(.ck-disabled):hover{background:#579f3e;border-color:#467f32}.ck-button-action:not(.ck-disabled):active,a.ck-button-action:not(.ck-disabled):active{background:#52963b;border-color:#42782f;box-shadow:inset 0 2px 2px #498534}.ck-button-action.ck-disabled,a.ck-button-action.ck-disabled{background:#6fbc54;border-color:#5aa440}.ck-button-action:active,.ck-button-action:focus,.ck-button-action:hover,a.ck-button-action:active,a.ck-button-action:focus,a.ck-button-action:hover{text-shadow:0 -1px #3a6a29}.ck-button-bold,a.ck-button-bold{font-weight:700}.ck-button .ck-icon use,.ck-button .ck-icon use *,a.ck-button .ck-icon use,a.ck-button .ck-icon use *{color:inherit}.ck-button .ck-button__label,a.ck-button .ck-button__label{font-size:inherit;float:left;height:1.67em;line-height:inherit;font-weight:inherit;color:inherit;cursor:inherit}.ck-toolbar{padding:.4em;border:1px solid #bfbfbf;white-space:normal;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.ck-toolbar_floating{white-space:nowrap}.ck-rounded-corners .ck-toolbar,.ck-toolbar.ck-rounded-corners{border-radius:2px}.ck-toolbar__separator{width:1px;height:2.28em;vertical-align:middle;background:#bfbfbf}.ck-toolbar__newline{height:.4em}.ck-toolbar>*{margin-right:.4em}.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck-toolbar{border:0}.ck-dropdown{font-size:inherit}.ck-dropdown:after{border-style:solid;border-width:.4em .4em 0;border-color:#707070 transparent;right:.8em}.ck-dropdown .ck-button.ck-dropdown__button{padding-right:1.6em}.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:.5}.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck-dropdown__panel{background:#fff;border:1px solid #bfbfbf;bottom:1px;box-shadow:0 1px 2px 0 rgba(0,0,0,.2)}.ck-dropdown__panel.ck-rounded-corners,.ck-rounded-corners .ck-dropdown__panel{border-radius:2px}.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;overflow:hidden;list-style-type:none;background:#fff}.ck-list.ck-rounded-corners,.ck-rounded-corners .ck-list{border-radius:2px}.ck-list__item{padding:.64em;cursor:default;min-width:12em}.ck-list__item:focus,.ck-list__item:hover{background:#f7f7f7}.ck-list__item:focus{box-shadow:0 0 3px 2px #78bbf8;position:relative;z-index:1;outline:none}.ck-list__item_active{background:#1a8bf1;color:#fff}.ck-list__item_active:focus,.ck-list__item_active:hover{background:#0e7ee2}.ck-label{font-weight:700}.ck-input-text{box-shadow:inset 2px 2px 3px rgba(0,0,0,.1);background:#fff;border:1px solid #bfbfbf;padding:.4em .64em;min-width:21em}.ck-input-text.ck-rounded-corners,.ck-rounded-corners .ck-input-text{border-radius:2px}.ck-input-text:focus{outline:none;border:1px solid #48a3f5;box-shadow:0 0 3px 2px #78bbf8,inset 2px 2px 3px rgba(0,0,0,.1)}.ck-input-text[readonly]{border:1px solid #c6c6c6;background:#f2f2f2;color:#5c5c5c}.ck-editor__editable.ck-rounded-corners,.ck-rounded-corners .ck-editor__editable{border-radius:2px}.ck-editor__editable.ck-focused{outline:none;border:1px solid #48a3f5;box-shadow:inset 2px 2px 3px rgba(0,0,0,.1)}.ck-editor__editable_inline{overflow:auto;padding:0 .8em;border:1px solid transparent}.ck-editor-toolbar .ck-button{border-width:0}.ck-editor-toolbar .ck-button.ck-disabled,.ck-editor-toolbar .ck-button:not(:hover):not(:focus):not(.ck-on){background:#f7f7f7}.ck-editor-toolbar .ck-button.ck-on{background:#dedede;border-color:#acacac}.ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):focus,.ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):hover{background:#c6c6c6;border-color:#999}.ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):active{background:#b9b9b9;border-color:#8f8f8f;box-shadow:inset 0 2px 2px #a1a1a1}.ck-editor-toolbar .ck-button.ck-on.ck-disabled{background:#f7f7f7;border-color:#bfbfbf}.ck-editor-toolbar .ck-button.ck-dropdown__button{border-width:1px}.ck-editor-toolbar .ck-button.ck-dropdown__button:not(:hover):not(:focus):not(.ck-on){background:#fff}.ck-toolbar-container .ck-editor-toolbar{background:#f7f7f7}.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_n:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_ne:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_nw:after{border-bottom-color:#f7f7f7}.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_s:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_se:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_sw:after{border-top-color:#f7f7f7}.ck-balloon-panel{box-shadow:0 1px 2px 0 rgba(0,0,0,.2);min-height:15px;background:#fff;border:1px solid #bfbfbf}.ck-balloon-panel.ck-rounded-corners,.ck-rounded-corners .ck-balloon-panel{border-radius:2px}.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_n:before,.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before,.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{border-width:0 10px 15px}.ck-balloon-panel.ck-balloon-panel_arrow_n:before,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{border-color:transparent transparent #bfbfbf}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:after{border-color:transparent transparent #fff;margin-top:2px}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_s:before,.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:before,.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{border-width:15px 10px 0}.ck-balloon-panel.ck-balloon-panel_arrow_s:before,.ck-balloon-panel.ck-balloon-panel_arrow_se:before,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{border-color:#bfbfbf transparent transparent}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:after{border-color:#fff transparent transparent;margin-bottom:2px}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:-10px;top:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:20px;top:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:20px;top:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:-10px;bottom:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:20px;bottom:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:20px;bottom:-15px}.ck-editor .ck-sticky-panel.ck-sticky-panel_sticky{box-shadow:0 1px 2px 0 rgba(0,0,0,.2);border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}',''])},function(e){e.exports=function(e){var t='undefined'!=typeof window&&window.location;if(!t)throw new Error('fixUrls requires window.location');if(!e||'string'!=typeof e)return e;var a=t.protocol+'//'+t.host,n=a+t.pathname.replace(/\/[^\/]*$/,'/'),o=e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf('//')?o:0===o.indexOf('/')?a+o:n+o.replace(/^\.\//,''),'url('+JSON.stringify(i)+')'});return o}},function(e,t,a){'use strict';var n=a(2),o=a(445),i=a(451),r=a(454),s=a(461);class l extends n.a{static get requires(){return[o.a,i.a,r.a,s.a]}}t.a=l},function(e,t,a){'use strict';var n=a(2),o=a(446),i=a(448),r=a(449),s=a(450),l=a(262);class d extends n.a{static get pluginName(){return'Clipboard'}init(){function e(e,o){const i=o.dataTransfer,r=t.data.toView(t.data.getSelectedContent(a.selection));o.preventDefault(),n.fire('clipboardOutput',{dataTransfer:i,content:r,method:e.name})}const t=this.editor,a=t.document,n=t.editing.view;this._htmlDataProcessor=new l.a,n.addObserver(o.a),this.listenTo(n,'clipboardInput',(e,a)=>{if(t.isReadOnly)return;const o=a.dataTransfer;let s='';o.getData('text/html')?s=Object(r.a)(o.getData('text/html')):o.getData('text/plain')&&(s=Object(i.a)(o.getData('text/plain'))),s=this._htmlDataProcessor.toView(s),this.fire('inputTransformation',{content:s}),n.scrollToTheSelection()},{priority:'low'}),this.listenTo(this,'inputTransformation',(e,t)=>{if(!t.content.isEmpty){const e=this.editor.data,n=e.toModel(t.content,'$clipboardHolder');if(0==n.childCount)return;a.enqueueChanges(()=>{e.insertContent(n,a.selection)})}},{priority:'low'}),this.listenTo(n,'copy',e,{priority:'low'}),this.listenTo(n,'cut',(a,n)=>{t.isReadOnly?n.preventDefault():e(a,n)},{priority:'low'}),this.listenTo(n,'clipboardOutput',(e,n)=>{n.content.isEmpty||(n.dataTransfer.setData('text/html',this._htmlDataProcessor.toData(n.content)),n.dataTransfer.setData('text/plain',Object(s.a)(n.content))),'cut'==n.method&&a.enqueueChanges(()=>{t.data.deleteContent(a.selection,a.batch())})},{priority:'low'})}}t.a=d},function(e,t,a){'use strict';function n(e,t){const a=t.target.ownerDocument,n=t.clientX,o=t.clientY;let i;return a.caretRangeFromPoint&&a.caretRangeFromPoint(n,o)?i=a.caretRangeFromPoint(n,o):t.rangeParent&&(i=a.createRange(),i.setStart(t.rangeParent,t.rangeOffset),i.collapse(!0)),i?e.domConverter.domRangeToView(i):e.selection.getFirstRange()}var o=a(75),i=a(447);class r extends o.a{constructor(e){function t(t,a){a.preventDefault();const n=a.dropRange?[a.dropRange]:Array.from(e.selection.getRanges());e.fire('clipboardInput',{dataTransfer:a.dataTransfer,targetRanges:n})}super(e),this.domEventType=['paste','copy','cut','drop','dragover'],this.listenTo(e,'paste',t,{priority:'low'}),this.listenTo(e,'drop',t,{priority:'low'})}onDomEvent(e){const t={dataTransfer:new i.a(e.clipboardData?e.clipboardData:e.dataTransfer)};'drop'==e.type&&(t.dropRange=n(this.document,e)),this.fire(e.type,e,t)}}t.a=r},function(e,t){'use strict';function a(e){const t=e.files?Array.from(e.files):[],a=e.items?Array.from(e.items):[];return t.length?t:a.filter((e)=>'file'===e.kind).map((e)=>e.getAsFile())}class n{constructor(e){this.files=a(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}}t.a=n},function(e,t){'use strict';t.a=function(e){return e=e.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n\n/g,'</p><p>').replace(/\n/g,' ').replace(/^\s/,'&nbsp;').replace(/\s$/,'&nbsp;').replace(/\s\s/g,' &nbsp;'),-1<e.indexOf('</p><p>')&&(e=`<p>${e}</p>`),e}},function(e,t){'use strict';t.a=function(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1==t.length?' ':t)}},function(e,t){'use strict';function a(e){let t='';if(e.is('text')||e.is('textProxy'))t=e.data;else if(e.is('img')&&e.hasAttribute('alt'))t=e.getAttribute('alt');else{let o=null;for(const i of e.getChildren()){const e=a(i);o&&(o.is('containerElement')||i.is('containerElement'))&&(n.includes(o.name)||n.includes(i.name)?t+='\n':t+='\n\n'),t+=e,o=i}}return t}t.a=a;const n=['figcaption','li']},function(e,t,a){'use strict';var n=a(2),o=a(452),i=a(453);class r extends n.a{static get pluginName(){return'Enter'}init(){const e=this.editor,t=e.editing.view;t.addObserver(i.a),e.commands.add('enter',new o.a(e)),this.listenTo(t,'enter',(a,n)=>{e.execute('enter'),n.preventDefault(),t.scrollToTheSelection()},{priority:'low'})}}t.a=r},function(e,t,a){'use strict';function n(e,t,a,n){const i=a.isCollapsed,r=a.getFirstRange(),s=r.start.parent,l=r.end.parent;if(n.limits.has(s.name)||n.limits.has(l.name))return void(i||s!=l||e.deleteContent(a,t));if(i)o(t,a,r.start);else{const n=!(r.start.isAtStart&&r.end.isAtEnd);e.deleteContent(a,t,{leaveUnmerged:n}),n&&(s==l?o(t,a,a.focus):a.setCollapsedAt(l))}}function o(e,t,a){const n=a.parent,o=new n.constructor(n.name,n.getAttributes());a.isAtEnd?e.insert(r.a.createAfter(a.parent),o):a.isAtStart?e.insert(r.a.createBefore(a.parent),o):e.split(a),t.setCollapsedAt(a.parent.nextSibling)}var i=a(11),r=a(1);class s extends i.a{execute(){const e=this.editor.document,t=e.batch();e.enqueueChanges(()=>{n(this.editor.data,t,e.selection,e.schema),this.fire('afterExecute',{batch:t})})}}t.a=s},function(e,t,a){'use strict';var n=a(59),o=a(154),i=a(28);class r extends n.a{constructor(e){super(e),e.on('keydown',(t,a)=>{this.isEnabled&&a.keyCode==i.c.enter&&e.fire('enter',new o.a(e,a.domEvent))})}observe(){}}t.a=r},function(e,t,a){'use strict';var n=a(2),o=a(455),i=a(458);class r extends n.a{static get requires(){return[o.a,i.a]}static get pluginName(){return'Typing'}}t.a=r},function(e,t,a){'use strict';function n(e){return!!e.ctrlKey||y.includes(e.keyCode)}function o(e,t){return e instanceof p.a&&t instanceof p.a?e.data===t.data:e===t}function i(e){if(1==e.newChildren.length-e.oldChildren.length){const t=Object(g.a)(e.oldChildren,e.newChildren,o),a=Object(f.a)(t,e.newChildren);if(!(1<a.length)){const e=a[0];return e.values[0]instanceof p.a?e:void 0}}}function r(e){const t=e.map((e)=>e.node).reduce((e,t)=>e.getCommonAncestor(t,{includeSelf:!0}));return t?t.getAncestors({includeSelf:!0,parentFirst:!0}).find((e)=>e.is('containerElement')||e.is('rootElement')):void 0}function s(e){if(0==e.length)return!1;for(const t of e)if('children'===t.type&&!i(t))return!0;return!1}function l(e){return e.every((e)=>e.is('text'))}function d(e){let t=null,a=null;for(let n=0;n<e.length;n++){const o=e[n];'equal'!=o&&(t=null==t?n:t,a=n)}let n=0,o=0;for(let r=t;r<=a;r++)'insert'!=e[r]&&n++,'delete'!=e[r]&&o++;return{insertions:o,deletions:n,firstChangeAt:t}}var c=a(2),m=a(3),u=a(22),p=a(35),g=a(252),f=a(456),h=a(28),b=a(153),_=a(457);class k extends c.a{static get pluginName(){return'Input'}init(){const e=this.editor,t=e.editing.view,a=new _.a(e,e.config.get('typing.undoStep')||20);e.commands.add('input',a),this.listenTo(t,'keydown',(e,t)=>{this._handleKeydown(t,a)},{priority:'lowest'}),this.listenTo(t,'mutations',(e,t,a)=>{this._handleMutations(t,a)})}_handleKeydown(e,t){const a=this.editor.document,o=t.buffer;!t.isEnabled||n(e)||a.selection.isCollapsed||(o.lock(),a.enqueueChanges(()=>{this.editor.data.deleteContent(a.selection,o.batch)}),o.unlock())}_handleMutations(e,t){new w(this.editor).handle(e,t)}}t.a=k;class w{constructor(e){this.editor=e,this.editing=this.editor.editing}handle(e,t){if(s(e))this._handleContainerChildrenMutations(e,t);else for(const a of e)this._handleTextMutation(a,t),this._handleTextNodeInsertion(a)}_handleContainerChildrenMutations(e,t){const a=r(e);if(!a)return;const n=this.editor.editing.view.domConverter,o=n.mapViewToDom(a);if(!o)return;const i=new b.a,s=this.editor.data.toModel(i.domToView(o)).getChild(0),c=this.editor.editing.mapper.toModelElement(a),u=Array.from(s.getChildren()),p=Array.from(c.getChildren());if(!l(u)||!l(p))return;const f=u.map((e)=>e.data).join('').replace(/\u00A0/g,' '),h=p.map((e)=>e.data).join('');if(h===f)return;const _=Object(g.a)(h,f),{firstChangeAt:k,insertions:w,deletions:y}=d(_);let v=null;t&&(v=this.editing.mapper.toModelRange(t.getFirstRange()));const x=f.substr(k,w),A=m.a.createFromParentsAndOffsets(c,k,c,k+y);this.editor.execute('input',{text:x,range:A,resultRange:v})}_handleTextMutation(e,t){if('text'!=e.type)return;const a=e.newText.replace(/\u00A0/g,' '),n=e.oldText.replace(/\u00A0/g,' '),o=Object(g.a)(n,a),{firstChangeAt:i,insertions:r,deletions:s}=d(o);let l=null;t&&(l=this.editing.mapper.toModelRange(t.getFirstRange()));const c=new u.a(e.node,i),p=this.editing.mapper.toModelPosition(c),f=m.a.createFromPositionAndShift(p,s),h=a.substr(i,r);this.editor.execute('input',{text:h,range:f,resultRange:l})}_handleTextNodeInsertion(e){if('children'==e.type){const t=i(e),a=new u.a(e.node,t.index),n=this.editing.mapper.toModelPosition(a),o=t.values[0].data;this.editor.execute('input',{text:o.replace(/\u00A0/g,' '),range:new m.a(n)})}}}const y=[Object(h.a)('arrowUp'),Object(h.a)('arrowRight'),Object(h.a)('arrowDown'),Object(h.a)('arrowLeft'),9,16,17,18,20,27,33,34,35,36,229];for(let n=112;135>=n;n++)y.push(n)},function(e,t){'use strict';t.a=function(e,t){function a(){r&&(o.push(r),r=null)}function n(e){return r&&r.type==e}const o=[];let i=0,r;return e.forEach((e)=>{'equal'==e?(a(),i++):'insert'==e?(n('insert')?r.values.push(t[i]):(a(),r={type:'insert',index:i,values:[t[i]]}),i++):n('delete')?r.howMany++:(a(),r={type:'delete',index:i,howMany:1})}),a(),o}},function(e,t,a){'use strict';var n=a(11),o=a(264);class i extends n.a{constructor(e,t){super(e),this._buffer=new o.a(e.document,t)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.document,a=e.text||'',n=a.length,o=e.range||t.selection.getFirstRange(),i=e.resultRange;t.enqueueChanges(()=>{const e=o.isCollapsed;this._buffer.lock(),e||this._buffer.batch.remove(o),a&&this._buffer.batch.weakInsert(o.start,a),i?this.editor.data.model.selection.setRanges([i]):e&&this.editor.data.model.selection.setCollapsedAt(o.start.getShiftedBy(n)),this._buffer.unlock(),this._buffer.input(n)})}}t.a=i},function(e,t,a){'use strict';var n=a(2),o=a(459),i=a(460);class r extends n.a{static get pluginName(){return'Delete'}init(){const e=this.editor,t=e.editing.view;t.addObserver(i.a),e.commands.add('forwardDelete',new o.a(e,'forward')),e.commands.add('delete',new o.a(e,'backward')),this.listenTo(t,'delete',(a,n)=>{e.execute('forward'==n.direction?'forwardDelete':'delete',{unit:n.unit,sequence:n.sequence}),n.preventDefault(),t.scrollToTheSelection()})}}t.a=r},function(e,t,a){'use strict';var n=a(11),o=a(58),i=a(5),r=a(1),s=a(3),l=a(264),d=a(152);class c extends n.a{constructor(e,t){super(e),this.direction=t,this._buffer=new l.a(e.document,e.config.get('typing.undoStep'))}execute(e={}){const t=this.editor.document,a=this.editor.data;t.enqueueChanges(()=>{this._buffer.lock();const n=o.a.createFromSelection(t.selection),i=n.isCollapsed;if(n.isCollapsed&&a.modifySelection(n,{direction:this.direction,unit:e.unit}),this._shouldEntireContentBeReplacedWithParagraph(e.sequence||1))return void this._replaceEntireContentWithParagraph();if(n.isCollapsed)return;let r=0;n.getFirstRange().getMinimalFlatRanges().forEach((e)=>{r+=Object(d.a)(e.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),a.deleteContent(n,this._buffer.batch,{doNotResetEntireContent:i}),this._buffer.input(r),t.selection.setRanges(n.getRanges(),n.isBackward),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(1<e)return!1;const t=this.editor.document,a=t.selection,n=t.schema.getLimitElement(a),o=a.isCollapsed&&a.containsEntireContent(n);if(!o)return!1;if(!t.schema.check({name:'paragraph',inside:n.name}))return!1;const i=n.getChild(0);return i&&'paragraph'===i.name?!1:!0}_replaceEntireContentWithParagraph(){const e=this.editor.document,t=e.selection,a=e.schema.getLimitElement(t),n=new i.a('paragraph');this._buffer.batch.remove(s.a.createIn(a)),this._buffer.batch.insert(r.a.createAt(a),n),t.setCollapsedAt(n)}}t.a=c},function(e,t,a){'use strict';var n=a(59),o=a(154),i=a(28);class r extends n.a{constructor(e){super(e);let t=0;e.on('keyup',(e,a)=>{(a.keyCode==i.c.delete||a.keyCode==i.c.backspace)&&(t=0)}),e.on('keydown',(a,n)=>{const r={};if(n.keyCode==i.c.delete)r.direction='forward',r.unit='character';else if(n.keyCode==i.c.backspace)r.direction='backward',r.unit='codePoint';else return;r.unit=n.altKey?'word':r.unit,r.sequence=++t,e.fire('delete',new o.a(e,n.domEvent,r))})}observe(){}}t.a=r},function(e,t,a){'use strict';var n=a(2),o=a(462),i=a(21),r=a(467),s=a.n(r),l=a(468),d=a.n(l);class c extends n.a{static get requires(){return[o.a]}static get pluginName(){return'Undo'}init(){const e=this.editor,a=e.t;this._addButton('undo',a('Undo'),'CTRL+Z',s.a),this._addButton('redo',a('Redo'),'CTRL+Y',d.a),e.keystrokes.set('CTRL+Z','undo'),e.keystrokes.set('CTRL+Y','redo'),e.keystrokes.set('CTRL+SHIFT+Z','redo')}_addButton(e,t,a,n){const o=this.editor,r=o.commands.get(e);o.ui.componentFactory.add(e,(s)=>{const l=new i.a(s);return l.set({label:t,icon:n,keystroke:a,tooltip:!0}),l.bind('isEnabled').to(r,'isEnabled'),this.listenTo(l,'execute',()=>o.execute(e)),l})}}t.a=c},function(e,t,a){'use strict';var n=a(2),o=a(463),i=a(464);class r extends n.a{constructor(e){super(e),this._batchRegistry=new WeakSet}init(){this._undoCommand=new o.a(this.editor),this._redoCommand=new i.a(this.editor),this.editor.commands.add('undo',this._undoCommand),this.editor.commands.add('redo',this._redoCommand),this.listenTo(this.editor.document,'change',(e,t,a,n)=>{this._batchRegistry.has(n)||'transparent'==n.type||(this._redoCommand._createdBatches.has(n)?this._undoCommand.addBatch(n):!this._undoCommand._createdBatches.has(n)&&(this._undoCommand.addBatch(n),this._redoCommand.clearStack()),this._batchRegistry.add(n))},{priority:'highest'}),this.listenTo(this._undoCommand,'revert',(e,t,a)=>{this._redoCommand.addBatch(a)})}}t.a=r},function(e,t,a){'use strict';var n=a(265);class o extends n.a{execute(e=null){const t=e?this._stack.findIndex((t)=>t.batch==e):this._stack.length-1,a=this._stack.splice(t,1)[0];this.editor.document.enqueueChanges(()=>{const e=this._undo(a.batch),t=this.editor.document.history.getDeltas(a.batch.baseVersion);this._restoreSelection(a.selection.ranges,a.selection.isBackward,t),this.fire('revert',a.batch,e)}),this.refresh()}}t.a=o},function(e,t,a){'use strict';var n=a(265);class o extends n.a{execute(){const e=this._stack.pop();this.editor.document.enqueueChanges(()=>{const t=e.batch.deltas[e.batch.deltas.length-1],a=t.baseVersion+t.operations.length,n=this.editor.document.history.getDeltas(a);this._restoreSelection(e.selection.ranges,e.selection.isBackward,n),this._undo(e.batch)}),this.refresh()}}t.a=o},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(){super();const e=this.bindTemplate;this.set('content'),this.set('viewBox','0 0 20 20'),this.template=new o.a({tag:'svg',ns:'http://www.w3.org/2000/svg',attributes:{class:'ck-icon',viewBox:e.to('viewBox')}}),this.on('change:content',(e,t,a)=>{for(const n=new DOMParser().parseFromString(a.trim(),'image/svg+xml').firstChild;0<n.childNodes.length;)this.element.appendChild(n.childNodes[0])})}}t.a=i},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e){super(e),this.set('text',''),this.set('position','s');const t=this.bindTemplate;this.template=new o.a({tag:'span',attributes:{class:['ck-tooltip',t.to('position',(e)=>'ck-tooltip_'+e),t.if('text','ck-hidden',(e)=>!e.trim())]},children:[{tag:'span',attributes:{class:['ck-tooltip__text']},children:[{text:t.to('text')}]}]})}}t.a=i},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10l8 6-1-3.982c3.417 0 8.616.869 10 3.982 0-5.983-6.601-7.96-10-7.96 0-.85 1-3.32 1-4.04l-8 6z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 16l1-3.982c-3.417 0-8.616.869-10 3.982 0-5.983 6.601-7.96 10-7.96 0-.85-1-3.32-1-4.04l8 6-8 6z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e,t,a){'use strict';var n=a(2),o=a(76),i=a(471);class r extends n.a{static get requires(){return[o.a]}static get pluginName(){return'CKFinderUploadAdapter'}init(){const e=this.editor.config.get('ckfinder.uploadUrl');e&&(this.editor.plugins.get(o.a).createAdapter=(t)=>new s(t,e,this.editor.t))}}t.a=r;class s{constructor(e,a,n){this.loader=e,this.url=a,this.t=n}upload(){return new Promise((e,t)=>{this._initRequest(),this._initListeners(e,t),this._sendRequest()})}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open('POST',this.url,!0),e.responseType='json'}_initListeners(e,a){const n=this.xhr,o=this.loader,i=this.t,t=i('Cannot upload file:')+` ${o.file.name}.`;n.addEventListener('error',()=>a(t)),n.addEventListener('abort',()=>a()),n.addEventListener('load',()=>{const o=n.response;return o&&o.uploaded?void e({default:o.url}):a(o&&o.error&&o.error.message?o.error.message:t)}),n.upload&&n.upload.addEventListener('progress',(e)=>{e.lengthComputable&&(o.uploadTotal=e.total,o.uploaded=e.loaded)})}_sendRequest(){const e=new FormData;e.append('upload',this.loader.file),e.append('ckCsrfToken',Object(i.a)()),this.xhr.send(e)}}},function(e,t,a){'use strict';var n=a(12),o=a(4);class i{constructor(){const e=new window.FileReader;this._reader=e,this.set('loaded',0),e.onprogress=(e)=>{this.loaded=e.loaded}}get error(){return this._reader.error}read(e){const t=this._reader;return this.total=e.size,new Promise((a,n)=>{t.onload=()=>{a(t.result)},t.onerror=()=>{n('error')},t.onabort=()=>{n('aborted')},this._reader.readAsDataURL(e)})}abort(){this._reader.abort()}}t.a=i,Object(o.a)(i,n.a)},function(e,t){'use strict';function a(e){e=e.toLowerCase();const t=document.cookie.split(';');for(const a of t){const t=a.split('='),n=decodeURIComponent(t[0].trim().toLowerCase());if(n===e)return decodeURIComponent(t[1])}return null}function n(e,t){document.cookie=encodeURIComponent(e)+'='+encodeURIComponent(t)+';path=/'}function o(e){let t='';const a=new Uint8Array(e);window.crypto.getRandomValues(a);for(let n=0;n<a.length;n++){const e=s.charAt(a[n]%s.length);t+=0.5<Math.random()?e.toUpperCase():e}return t}t.a=function(){let e=a(i);return e&&e.length==r||(e=o(r),n(i,e)),e};const i='ckCsrfToken',r=40,s='abcdefghijklmnopqrstuvwxyz0123456789'},function(e,t,a){'use strict';var n=a(473),o=a(474),i=a(2);class r extends i.a{static get pluginName(){return'Autoformat'}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats()}_addListAutoformats(){const e=this.editor.commands;e.get('bulletedList')&&new n.a(this.editor,/^[*-]\s$/,'bulletedList'),e.get('numberedList')&&new n.a(this.editor,/^\d+[.|)]?\s$/,'numberedList')}_addBasicStylesAutoformats(){const e=this.editor.commands;e.get('bold')&&(new o.a(this.editor,/(\*\*)([^*]+)(\*\*)$/g,'bold'),new o.a(this.editor,/(__)([^_]+)(__)$/g,'bold')),e.get('italic')&&(new o.a(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,'italic'),new o.a(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,'italic')),e.get('code')&&new o.a(this.editor,/(`)([^`]+)(`)$/g,'code')}_addHeadingAutoformats(){Array.from(this.editor.commands.names()).filter((e)=>e.match(/^heading[1-6]$/)).forEach((e)=>{const t=e[7],a=new RegExp(`^(#{${t}})\\s$`);new n.a(this.editor,a,(t)=>{const{batch:a}=t;this.editor.execute(e,{batch:a})})})}_addBlockQuoteAutoformats(){this.editor.commands.get('blockQuote')&&new n.a(this.editor,/^>\s$/,'blockQuote')}}t.a=r},function(e,t,a){'use strict';var n=a(3),o=a(66);t.a=class{constructor(e,t,a){let i;if('function'==typeof a)i=a;else{i=(t)=>{const{batch:n}=t;e.execute(a,{batch:n})}}e.document.on('change',(a,r,s,l)=>{if('transparent'==l.type)return;if('insert'!=r)return;const d=s.range.getItems().next().value;if(!(d instanceof o.a))return;const c=d.textNode,m=c.data;if('paragraph'!==c.parent.name||!m)return;const u=t.exec(m);u&&e.document.enqueueChanges(()=>{const t=e.document.batch(),a=n.a.createFromParentsAndOffsets(c.parent,0,c.parent,u[0].length);t.remove(a),i({fixBatch:t,match:u})})})}}},function(e,t,a){'use strict';function n(e){return Array.from(e.getChildren()).reduce((e,t)=>e+t.data,'')}var o=a(151);t.a=class{constructor(e,t,a){let i,r,s,l;t instanceof RegExp?i=t:s=t,'string'==typeof a?r=a:l=a,s=s||((e)=>{let t;const a=[],n=[];for(;null!==(t=i.exec(e))&&!(t&&4>t.length);){let{index:e,1:o,2:i,3:r}=t;e+=t[0].length-(o+i+r).length;const s=[e,e+o.length],l=[e+o.length+i.length,e+o.length+i.length+r.length];a.push(s),a.push(l),n.push([e+o.length,e+o.length+i.length])}return{remove:a,format:n}}),l=l||((e,t)=>{for(const a of t)e.setAttribute(a,r,!0)}),e.document.on('change',(t,a,i,d)=>{if('transparent'==d.type)return;if('insert'!==a)return;const c=e.document.selection;if(!c.isCollapsed||!c.focus||!c.focus.parent)return;const m=c.focus.parent,u=n(m).slice(0,c.focus.offset),p=s(u),g=[];p.format.forEach((e)=>{void 0===e[0]||void 0===e[1]||g.push(o.a.createFromParentsAndOffsets(m,e[0],m,e[1]))});const f=[];p.remove.slice().reverse().forEach((e)=>{void 0===e[0]||void 0===e[1]||f.push(o.a.createFromParentsAndOffsets(m,e[0],m,e[1]))});g.length&&f.length&&e.document.enqueueChanges(()=>{const t=e.document.batch(),a=e.document.schema.getValidRanges(g,r);l(t,a);for(const e of f)t.remove(e)})})}}},function(e,t,a){'use strict';var n=a(2),o=a(476),i=a(21),r=a(477),s=a.n(r);class l extends n.a{static get requires(){return[o.a]}static get pluginName(){return'Bold'}init(){const e=this.editor,a=e.t,t=e.commands.get('bold'),n='CTRL+B';e.ui.componentFactory.add('bold',(o)=>{const r=new i.a(o);return r.set({label:a('Bold'),icon:s.a,keystroke:n,tooltip:!0}),r.bind('isOn','isEnabled').to(t,'value','isEnabled'),this.listenTo(r,'execute',()=>e.execute('bold')),r}),e.keystrokes.set(n,'bold')}}t.a=l},function(e,t,a){'use strict';var n=a(2),o=a(51),i=a(43),r=a(266);const s='bold';class l extends n.a{init(){const e=this.editor,t=e.data,a=e.editing;e.document.schema.allow({name:'$inline',attributes:s,inside:'$block'}),e.document.schema.allow({name:'$inline',attributes:s,inside:'$clipboardHolder'}),Object(o.a)().for(t.modelToView,a.modelToView).fromAttribute(s).toElement('strong'),Object(i.a)().for(t.viewToModel).fromElement('strong').fromElement('b').fromAttribute('style',{"font-weight":'bold'}).toAttribute(s,!0),e.commands.add(s,new r.a(e,s))}}t.a=l},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.135 10.409c.361.248.654.56.88.934.225.375.338.816.338 1.324 0 .609-.128 1.123-.385 1.543-.256.42-.624.751-1.103.994a5.908 5.908 0 0 1-1.755.55c-.663.107-1.442.16-2.338.16H4.539v-.66a22.5 22.5 0 0 0 .66-.076c.265-.033.45-.073.558-.118.208-.085.35-.196.427-.334.076-.138.114-.317.114-.537V5.732c0-.203-.031-.372-.093-.507s-.211-.254-.448-.355a3.326 3.326 0 0 0-.61-.182 14.136 14.136 0 0 0-.608-.114v-.66h6.52c1.64 0 2.825.226 3.552.677.727.45 1.09 1.116 1.09 1.995 0 .406-.08.763-.244 1.07a2.388 2.388 0 0 1-.702.8 4.214 4.214 0 0 1-.99.54c-.383.153-.795.28-1.234.381v.16c.44.046.896.143 1.37.292.473.15.885.343 1.234.58zm-2.723-3.611c0-.665-.187-1.184-.562-1.556-.375-.372-.937-.558-1.687-.558-.107 0-.247.004-.419.012l-.444.021v4.449h.44c.913 0 1.587-.213 2.021-.639.434-.425.651-1.002.651-1.73zm.592 5.759c0-.835-.248-1.475-.744-1.92-.496-.445-1.21-.668-2.14-.668a22.977 22.977 0 0 0-.82.034v4.389c.05.208.209.385.474.528.265.144.586.216.964.216.67 0 1.216-.225 1.636-.676.42-.452.63-1.086.63-1.903z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e,t,a){'use strict';var n=a(2),o=a(479),i=a(21),r=a(480),s=a.n(r);class l extends n.a{static get requires(){return[o.a]}static get pluginName(){return'Italic'}init(){const e=this.editor,a=e.t,t=e.commands.get('italic'),n='CTRL+I';e.ui.componentFactory.add('italic',(o)=>{const r=new i.a(o);return r.set({label:a('Italic'),icon:s.a,keystroke:n,tooltip:!0}),r.bind('isOn','isEnabled').to(t,'value','isEnabled'),this.listenTo(r,'execute',()=>e.execute('italic')),r}),e.keystrokes.set(n,'italic')}}t.a=l},function(e,t,a){'use strict';var n=a(2),o=a(51),i=a(43),r=a(266);const s='italic';class l extends n.a{init(){const e=this.editor,t=e.data,a=e.editing;e.document.schema.allow({name:'$inline',attributes:s,inside:'$block'}),e.document.schema.allow({name:'$inline',attributes:s,inside:'$clipboardHolder'}),Object(o.a)().for(t.modelToView,a.modelToView).fromAttribute(s).toElement('i'),Object(i.a)().for(t.viewToModel).fromElement('em').fromElement('i').fromAttribute('style',{"font-style":'italic'}).toAttribute(s,!0),e.commands.add(s,new r.a(e,s))}}t.a=l},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.825 3.914l-.126.558a5.701 5.701 0 0 0-.685.076c-.282.045-.49.088-.626.127-.237.073-.406.186-.508.338a1.586 1.586 0 0 0-.22.5l-2.03 8.769a1.24 1.24 0 0 0-.034.27c.001.13.03.24.086.33.056.09.157.17.304.237.085.04.27.086.558.14.288.053.502.086.643.097l-.127.558H5.656l.127-.558.677-.05c.293-.023.501-.057.625-.102a1.11 1.11 0 0 0 .5-.326c.112-.138.188-.306.228-.503l2.02-8.778a1.428 1.428 0 0 0 .035-.305.59.59 0 0 0-.072-.295c-.048-.085-.148-.161-.3-.229a3.457 3.457 0 0 0-.622-.19 5.001 5.001 0 0 0-.58-.106l.128-.558h5.403z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e,t,a){'use strict';var n=a(2),o=a(482),i=a(21),r=a(484),s=a.n(r),l=a(485),d=a.n(l);class c extends n.a{static get requires(){return[o.a]}static get pluginName(){return'BlockQuote'}init(){const e=this.editor,a=e.t,t=e.commands.get('blockQuote');e.ui.componentFactory.add('blockQuote',(n)=>{const o=new i.a(n);return o.set({label:a('Block quote'),icon:s.a,tooltip:!0}),o.bind('isOn','isEnabled').to(t,'value','isEnabled'),this.listenTo(o,'execute',()=>e.execute('blockQuote')),o})}afterInit(){const e=this.editor,t=e.commands.get('blockQuote');this.listenTo(this.editor.editing.view,'enter',(e,a)=>{const n=this.editor.document,o=n.selection.getLastPosition().parent;n.selection.isCollapsed&&o.isEmpty&&t.value&&(this.editor.execute('blockQuote'),this.editor.editing.view.scrollToTheSelection(),a.preventDefault(),e.stop())})}}t.a=c},function(e,t,a){'use strict';var n=a(2),o=a(483),i=a(43),r=a(51);class s extends n.a{init(){const e=this.editor,t=e.document.schema;e.commands.add('blockQuote',new o.a(e)),t.registerItem('blockQuote'),t.allow({name:'blockQuote',inside:'$root'}),t.allow({name:'$block',inside:'blockQuote'}),Object(i.a)().for(e.data.viewToModel).fromElement('blockquote').toElement('blockQuote'),Object(r.a)().for(e.data.modelToView,e.editing.modelToView).fromElement('blockQuote').toElement('blockquote')}afterInit(){const e=this.editor.document.schema;e.hasItem('listItem')&&e.allow({name:'listItem',inside:'blockQuote',attributes:['type','indent']})}}t.a=s},function(e,t,a){'use strict';function n(e){return'blockQuote'==e.parent.name?e.parent:null}function o(e){let t=0,a;const n=[];for(;t<e.length;){const o=e[t],i=e[t+1];a||(a=s.a.createBefore(o)),i&&o.nextSibling==i||(n.push(new d.a(a,s.a.createAfter(o))),a=null),t++}return n}function i(e,t){const a=e.check({name:'blockQuote',inside:s.a.createBefore(t)}),n=e.check({name:t.name,attributes:Array.from(t.getAttributeKeys()),inside:'blockQuote'});return a&&n}var r=a(11),s=a(1),l=a(5),d=a(3),c=a(61);class m extends r.a{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.document,a=t.schema,o=e.batch||t.batch(),r=Array.from(t.selection.getSelectedBlocks());t.enqueueChanges(()=>{if(this.value)this._removeQuote(o,r.filter(n));else{const e=r.filter((e)=>n(e)||i(a,e));this._applyQuote(o,e)}})}_getValue(){const e=Object(c.a)(this.editor.document.selection.getSelectedBlocks());return!!(e&&n(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.document.selection,t=this.editor.document.schema,a=Object(c.a)(e.getSelectedBlocks());return!!a&&i(t,a)}_removeQuote(e,t){o(t).reverse().forEach((t)=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){const a=s.a.createBefore(t.start.parent);return void e.move(t,a)}t.end.isAtEnd||e.split(t.end);const a=s.a.createAfter(t.end.parent);e.move(t,a)})}_applyQuote(e,t){const a=[];o(t).reverse().forEach((t)=>{let o=n(t.start);o||(o=new l.a('blockQuote'),e.wrap(t,o)),a.push(o)}),a.reverse().reduce((t,a)=>t.nextSibling==a?(e.merge(s.a.createAfter(t)),t):a)}}t.a=m},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.061 15.51v-.882c1.395-.847 2.345-1.633 2.85-2.358.37-.533.554-1.162.554-1.887 0-.437-.082-.759-.246-.964-.15-.205-.328-.307-.533-.307-.137 0-.328.048-.574.143-.37.123-.67.185-.902.185-.547 0-1.033-.205-1.456-.615-.424-.41-.636-.923-.636-1.538 0-.698.212-1.238.636-1.62a3.002 3.002 0 0 1 2.05-.78c.93 0 1.757.39 2.482 1.17.724.778 1.087 1.742 1.087 2.89 0 1.614-.602 3.084-1.805 4.41-.807.875-1.976 1.593-3.507 2.153zm-8.386 0v-.882c1.394-.847 2.345-1.633 2.85-2.358.37-.533.554-1.162.554-1.887 0-.437-.082-.759-.246-.964-.15-.205-.328-.307-.533-.307-.137 0-.328.048-.574.143-.37.123-.67.185-.903.185-.547 0-1.032-.205-1.456-.615-.424-.41-.636-.923-.636-1.538 0-.698.212-1.238.636-1.62a3.002 3.002 0 0 1 2.051-.78c.93 0 1.757.39 2.481 1.17.725.778 1.087 1.742 1.087 2.89 0 1.614-.601 3.084-1.804 4.41-.807.875-1.976 1.593-3.507 2.153z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e,t,a){var n=a(486);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'blockquote{border-left:5px solid #ccc;padding-left:20px;margin-left:0;font-style:italic;overflow:hidden}',''])},function(e,t,a){'use strict';var n=a(2),o=a(488),i=a(267),r=a(274);class s extends n.a{static get requires(){return[o.a,i.a,r.a]}static get pluginName(){return'EasyImage'}}t.a=s},function(e,t,a){'use strict';var n=a(2),o=a(76),i=a(489);class r extends n.a{static get requires(){return[o.a]}init(){const e=this.editor,t=e.config;t.define('cloudServices.uploadUrl','https://files.cke-cs.com/upload/');const a=t.get('cloudServices.token'),n=t.get('cloudServices.uploadUrl');a&&n&&(this._uploadGateway=new r._UploadGateway(a,n),e.plugins.get(o.a).createAdapter=(e)=>new s(this._uploadGateway,e))}}t.a=r;class s{constructor(e,t){this.uploadGateway=e,this.loader=t}upload(){return this.fileUploader=this.uploadGateway.upload(this.loader.file),this.fileUploader.on('progress',(e,t)=>{this.loader.uploadTotal=t.total,this.loader.uploaded=t.uploaded}),this.fileUploader.send()}abort(){this.fileUploader.abort()}}r._UploadGateway=i.a},function(e,t,a){'use strict';var n=a(490);t.a=class{constructor(e,t){if(!e)throw new Error('Token must be provided');if(!t)throw new Error('Api address must be provided');this._token=e,this._apiAddress=t}upload(e){return new n.a(e,this._token,this._apiAddress)}}},function(e,t,a){'use strict';function n(e,t=512){try{const a=e.match(s)[1],n=atob(e.replace(s,'')),o=[];for(let e=0;e<n.length;e+=t){const a=n.slice(e,e+t),r=Array(a.length);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);o.push(new Uint8Array(r))}return new Blob(o,{type:a})}catch(e){throw new Error('Problem with decoding Base64 image data.')}}function o(e){if('string'!=typeof e)return!1;const t=e.match(s);return!!(t&&t.length)}var i=a(4),r=a(8);const s=/^data:(\S*?);base64,/;class l{constructor(e,t,a){if(!e)throw new Error('File must be provided');if(!t)throw new Error('Token must be provided');if(!a)throw new Error('Api address must be provided');this.file=o(e)?n(e):e,this._token=t,this._apiAddress=a}onProgress(e){return this.on('progress',(t,a)=>e(a)),this}onError(e){return this.once('error',(t,a)=>e(a)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open('POST',this._apiAddress),e.setRequestHeader('Authorization',this._token),e.responseType='json',this.xhr=e}_attachXHRListeners(){function e(e){return()=>t.fire('error',e)}const t=this,a=this.xhr;a.addEventListener('error',e('Network Error')),a.addEventListener('abort',e('Abort')),a.upload&&a.upload.addEventListener('progress',(e)=>{e.lengthComputable&&this.fire('progress',{total:e.total,uploaded:e.loaded})}),a.addEventListener('load',()=>{const e=a.status,t=a.response;if(200>e||299<e)return this.fire('error',t.message||t.error)})}_sendRequest(){const e=new FormData,t=this.xhr;return e.append('file',this.file),new Promise((a,n)=>{t.addEventListener('load',()=>{const e=t.status,o=t.response;return 200>e||299<e?n(o.message||o.error):a(o)}),t.addEventListener('error',()=>n('Network Error')),t.addEventListener('abort',()=>n('Abort')),t.send(e)})}}Object(i.a)(l,r.c),t.a=l},function(e,t,a){'use strict';function n(){return(e,t,a,n)=>{const o=e.name.split(':'),i=o[0]+':'+o[1],r=t.item;if(a.consume(r,i)){const e=n.mapper.toViewElement(r),a=e.getChild(0),i=o[0];'removeAttribute'==i?a.removeAttribute(t.attributeKey):a.setAttribute(t.attributeKey,t.attributeNewValue)}}}function o(e,t,a){t=t.slice();for(const n={name:e.name,attributes:e.attributes,inside:t};t.length&&!a.check(n);){const e=t.pop(),n='string'==typeof e?e:e.name;if(a.limits.has(n))return null}return t.length?t:null}t.e=function(){return(e,t,a,n)=>{if(a.test(t.input,{name:!0,class:'image'})&&n.schema.check({name:'image',inside:t.context,attributes:'src'})){const e=Array.from(t.input.getChildren()).find((e)=>e.is('img'));if(e&&e.hasAttribute('src')&&a.test(e,{name:!0})){const o=n.convertItem(e,a,t);t.context.push(o);const r=n.convertChildren(t.input,a,t);t.context.pop(),s.a.insert(i.a.createAt(o),r),t.output=o}}}},t.b=function(e,t,a=n){for(const n of e)n.on(`addAttribute:${t}:image`,a()),n.on(`changeAttribute:${t}:image`,a()),n.on(`removeAttribute:${t}:image`,a())},t.d=function(){return(e,t,a,n)=>{const o=e.name.split(':'),i=o[0]+':'+o[1],r=t.item;if(a.consume(r,i)){const e=n.mapper.toViewElement(r),a=e.getChild(0),i=o[0];if('removeAttribute'==i){const e=t.attributeOldValue;e.data&&(a.removeAttribute('srcset'),a.removeAttribute('sizes'),e.width&&a.removeAttribute('width'))}else{const e=t.attributeNewValue;e.data&&(a.setAttribute('srcset',e.data),a.setAttribute('sizes','100vw'),e.width&&a.setAttribute('width',e.width))}}}},t.a=function(e,t,a,n){const i=t.input;if(a.test(i,{name:!0,attribute:['src']})){const e=o({name:'image',attributes:['src']},t.context,n.schema);if(e){const o=Object.assign({},t);o.context=e,t.output=n.convertItem(i,a,o),l.add(t.output)}}},t.c=function(e,t){if(t.output&&t.output.is('element')){const e=[];for(let a=t.output.childCount-1;0<=a;a--){const n=t.output.getChild(a);if(l.has(n)){const o=t.output.childCount-a-1;let i=null;0<o&&(i=t.output.clone(!1),i.appendChildren(t.output.removeChildren(a+1,o))),n.remove(),e.shift(),i&&e.unshift(i),e.unshift(n),0<t.output.childCount&&e.unshift(t.output)}}e.length&&(t.output=new r.a(e))}};var i=a(1),r=a(39),s=a(23);const l=new WeakSet},function(e,t,a){'use strict';function n(e,t){return e&&t&&e.priority==t.priority&&i(e.class)==i(t.class)}function o(e,t){if(e.priority>t.priority)return!0;return!(e.priority<t.priority)&&i(e.class)>i(t.class)}function i(e){return Array.isArray(e)?e.sort().join(','):e}var r=a(8),s=a(4);class l{constructor(){this._stack=[]}add(e){const t=this._stack,a=t[0];this._insertDescriptor(e);const o=t[0];a===o||n(a,o)||this.fire('change:top',{oldDescriptor:a,newDescriptor:o})}remove(e){const t=this._stack,a=t[0];this._removeDescriptor(e);const o=t[0];a===o||n(a,o)||this.fire('change:top',{oldDescriptor:a,newDescriptor:o})}_insertDescriptor(e){const t=this._stack,a=t.findIndex((t)=>t.id===e.id);if(!n(e,t[a])){-1<a&&t.splice(a,1);let n=0;for(;t[n]&&o(t[n],e);)n++;t.splice(n,0,e)}}_removeDescriptor(e){const t=this._stack,a=t.findIndex((t)=>t.id===e.id);-1<a&&t.splice(a,1)}}t.a=l,Object(s.a)(l,r.c)},function(e,t,a){'use strict';function n(e){return e==f.c.arrowright||e==f.c.arrowleft||e==f.c.arrowup||e==f.c.arrowdown}function o(e){return e==f.c.delete||e==f.c.backspace}function i(e){return Object(f.a)(e)==_}function r(e){for(;e;){if(e instanceof u.a&&!(e instanceof p.a))return!0;e=e.parent}return!1}var s=a(2),l=a(494),d=a(3),c=a(58),m=a(5),u=a(91),p=a(254),g=a(157),f=a(28),h=a(495),b=a.n(h);const _=Object(f.d)('Ctrl+A');class k extends s.a{static get pluginName(){return'Widget'}init(){const e=this.editor.editing.view;let t;this.editor.editing.modelToView.on('selection',(e,a,n,o)=>{t&&t.hasClass(g.a)&&t.removeClass(g.a);const i=o.viewSelection,r=i.getSelectedElement();r&&Object(g.c)(r)&&(i.setFake(!0,{label:Object(g.b)(r)}),r.addClass(g.a),t=r)},{priority:'low'}),e.addObserver(l.a),this.listenTo(e,'mousedown',(...e)=>this._onMousedown(...e)),this.listenTo(e,'keydown',(...e)=>this._onKeydown(...e),{priority:'high'})}_onMousedown(e,t){const a=this.editor,n=a.editing.view;let o=t.target;if(r(o))return;if(!Object(g.c)(o)&&(o=o.findAncestor(g.c),!o))return;t.preventDefault(),n.isFocused||n.focus();const i=a.editing.mapper.toModelElement(o);a.document.enqueueChanges(()=>{this._setSelectionOverElement(i)})}_onKeydown(e,t){const a=t.keyCode,r=a==f.c.delete||a==f.c.arrowdown||a==f.c.arrowright;let s=!1;o(a)?s=this._handleDelete(r):n(a)?s=this._handleArrowKeys(r):i(t)&&(s=this._selectAllNestedEditableContent()),s&&(t.preventDefault(),e.stop())}_handleDelete(e){if(this.editor.isReadOnly)return;const t=this.editor.document,a=t.selection;if(!a.isCollapsed)return;const n=this._getObjectElementNextToSelection(e);if(n)return t.enqueueChanges(()=>{const e=t.batch();for(let t=a.anchor.parent;t.isEmpty;){const a=t;t=a.parent,e.remove(a)}this._setSelectionOverElement(n)}),!0}_handleArrowKeys(e){const t=this.editor.document,a=t.schema,n=t.selection,o=n.getSelectedElement();if(o&&a.objects.has(o.name)){const a=e?n.getLastPosition():n.getFirstPosition(),o=t.getNearestSelectionRange(a,e?'forward':'backward');return o&&t.enqueueChanges(()=>{n.setRanges([o])}),!0}if(!n.isCollapsed)return;const i=this._getObjectElementNextToSelection(e);if(i instanceof m.a&&t.schema.objects.has(i.name))return t.enqueueChanges(()=>{this._setSelectionOverElement(i)}),!0}_selectAllNestedEditableContent(){const e=this.editor.document,t=e.selection,a=e.schema,n=a.getLimitElement(t);return t.getFirstRange().root!=n&&(e.enqueueChanges(()=>{t.setIn(n)}),!0)}_setSelectionOverElement(e){this.editor.document.selection.setRanges([d.a.createOn(e)])}_getObjectElementNextToSelection(e){const t=this.editor.document,a=t.schema,n=t.selection,o=this.editor.data,i=c.a.createFromSelection(n);o.modifySelection(i,{direction:e?'forward':'backward'});const r=e?i.focus.nodeBefore:i.focus.nodeAfter;return r instanceof m.a&&a.objects.has(r.name)?r:null}}t.a=k},function(e,t,a){'use strict';var n=a(75);class o extends n.a{constructor(e){super(e),this.domEventType='mousedown'}onDomEvent(e){this.fire(e.type,e)}}t.a=o},function(e,t,a){var n=a(496);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-widget{margin:.8em 0;padding:0}.ck-widget.ck-widget_selected,.ck-widget.ck-widget_selected:hover{outline:3px solid #48a3f5}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected{outline:3px solid #ddd}.ck-widget:hover{outline:3px solid #ffd25c}.ck-widget .ck-editable{border:1px solid transparent}.ck-widget .ck-editable.ck-editable_focused,.ck-widget .ck-editable:focus{outline:none;border:1px solid #48a3f5;box-shadow:inset 2px 2px 3px rgba(0,0,0,.1);background-color:#fff}',''])},function(e,t,a){'use strict';var n=a(2),o=a(21),i=a(498),r=a(269),s=a(500),l=a(158),d=a(502),c=a.n(d),m=a(273),u=a(36),p=a(503),g=a.n(p);class f extends n.a{static get requires(){return[i.a,l.a]}static get pluginName(){return'ImageTextAlternative'}init(){this._createButton(),this._createForm()}_createButton(){const e=this.editor,a=e.commands.get('imageTextAlternative'),n=e.t;e.ui.componentFactory.add('imageTextAlternative',(e)=>{const t=new o.a(e);return t.set({label:n('Change image text alternative'),icon:c.a,tooltip:!0}),t.bind('isEnabled').to(a,'isEnabled'),this.listenTo(t,'execute',()=>this._showForm()),t})}_createForm(){const e=this.editor,t=e.editing.view;this._balloon=this.editor.plugins.get('ContextualBalloon'),this._form=new s.a(e.locale),this.listenTo(this._form,'submit',()=>{e.execute('imageTextAlternative',{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,'cancel',()=>{this._hideForm(!0)}),this._form.keystrokes.set('Esc',(e,t)=>{this._hideForm(!0),t()}),this.listenTo(t,'render',()=>{Object(u.b)(t.selection)?this._isVisible&&Object(m.b)(e):this._hideForm(!0)},{priority:'low'}),Object(r.a)({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._form.element],callback:()=>this._hideForm()})}_showForm(){if(!this._isVisible){const e=this.editor,t=e.commands.get('imageTextAlternative'),a=this._form.labeledInput;this._balloon.hasView(this._form)||this._balloon.add({view:this._form,position:Object(m.a)(e)}),a.value=a.inputView.element.value=t.value||'',this._form.labeledInput.select()}}_hideForm(e){this._isVisible&&(this._balloon.remove(this._form),e&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView==this._form}}t.a=f},function(e,t,a){'use strict';var n=a(499),o=a(2);class i extends o.a{init(){this.editor.commands.add('imageTextAlternative',new n.a(this.editor))}}t.a=i},function(e,t,a){'use strict';var n=a(11),o=a(36);class i extends n.a{refresh(){const e=this.editor.document.selection.getSelectedElement();this.isEnabled=Object(o.a)(e),this.value=Object(o.a)(e)&&e.hasAttribute('alt')&&e.getAttribute('alt')}execute(e){const t=this.editor.document,a=t.selection.getSelectedElement();t.enqueueChanges(()=>{const n=e.batch||t.batch();n.setAttribute(a,'alt',e.newValue)})}}t.a=i},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(112),r=a(21),s=a(270),l=a(271),d=a(272),c=a(50),m=a(60),u=a(114);class p extends n.a{constructor(e){super(e);const a=this.locale.t;this.focusTracker=new m.a,this.keystrokes=new c.a,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(a('Save')),this.saveButtonView.type='submit',this.cancelButtonView=this._createButton(a('Cancel'),'cancel'),this._focusables=new i.a,this._focusCycler=new u.a({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),o.a.extend(this.saveButtonView.template,{attributes:{class:['ck-button-action']}}),this.template=new o.a({tag:'form',attributes:{class:['cke-text-alternative-form'],tabindex:'-1'},children:[this.labeledInput,{tag:'div',attributes:{class:['cke-text-alternative-form__actions']},children:[this.saveButtonView,this.cancelButtonView]}]}),Object(d.a)({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element)})}init(){super.init(),this.keystrokes.listenTo(this.element)}_createButton(e,t){const a=new r.a(this.locale);return a.label=e,a.withText=!0,t&&a.delegate('execute').to(this,t),a}_createLabeledInputView(){const e=this.locale.t,t=new s.a(this.locale,l.a);return t.label=e('Text alternative'),t}}t.a=p},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e){super(e),this.set('text'),this.set('for');const t=this.bindTemplate;this.template=new o.a({tag:'label',attributes:{class:['ck-label'],for:t.to('for')},children:[{text:t.to('text')}]})}}t.a=i},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M5.414 6.749L2.903 4.237a.49.49 0 1 1 .694-.694L6.394 6.34a10.662 10.662 0 0 1 2.127-.53c.366-.051.734-.081 1.103-.095a10.628 10.628 0 0 1 1.524.07c1.109.134 2.204.449 3.243.936a9.65 9.65 0 0 1 2.12 1.331c.276.231.542.484.784.766.18.211.349.439.488.692.169.307.301.664.301 1.039 0 .375-.132.732-.301 1.039a4.143 4.143 0 0 1-.488.691 6.668 6.668 0 0 1-.784.767 9.628 9.628 0 0 1-2.092 1.318l2.196 2.197a.49.49 0 1 1-.694.694l-2.485-2.484-.008.003-.931-.931.009-.003-6.215-6.215a9.887 9.887 0 0 0-.945.444l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.483 8.596a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2 1.497 1.497 0 0 0-.108.241.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226 2.613 2.613 0 0 0 .234.379l3.463 3.594a10.565 10.565 0 0 1-2.125-1 9.096 9.096 0 0 1-1.015-.721 6.672 6.672 0 0 1-.798-.764 4.325 4.325 0 0 1-.502-.69c-.184-.319-.329-.693-.329-1.089 0-.375.131-.732.301-1.039.139-.253.307-.481.488-.692.225-.263.471-.5.728-.719a9.538 9.538 0 0 1 2.096-1.341l.019-.009zm6.674.401a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112 6.86 6.86 0 0 0 .727-.613c.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286a1.966 1.966 0 0 0 .148-.292.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891 10.119 10.119 0 0 0-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.449 2.449 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>'},function(e,t,a){var n=a(504);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.cke-text-alternative-form{padding:1.2em;overflow:hidden}.cke-text-alternative-form:focus{outline:none}.cke-text-alternative-form .ck-label{margin-bottom:.4em}.cke-text-alternative-form__actions{clear:both;padding-top:1.2em}.cke-text-alternative-form__actions .ck-button{float:right}.cke-text-alternative-form__actions .ck-button+.ck-button{margin-right:.64em}.cke-text-alternative-form__actions .ck-button+.ck-button+.ck-button{float:left}',''])},function(e,t,a){var n=a(506);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-editor__editable .image{text-align:center;clear:both}.ck-editor__editable .image.image-style-align-center,.ck-editor__editable .image.image-style-align-left,.ck-editor__editable .image.image-style-align-right,.ck-editor__editable .image.image-style-side{max-width:50%}.ck-editor__editable .image.image-style-side{float:right;margin-left:2em}.ck-editor__editable .image.image-style-align-left{float:left;margin-right:2em}.ck-editor__editable .image.image-style-align-center{margin-left:auto;margin-right:auto}.ck-editor__editable .image.image-style-align-right{float:right;margin-left:2em}.ck-editor__editable .image>img{display:block;margin:0 auto;max-width:100%}',''])},function(e,t,a){'use strict';var n=a(2),o=a(275),i=a(510),r=a(511),s=a.n(r),l=a(276);class d extends n.a{static get requires(){return[o.a]}init(){const e=this.editor,a=e.t;e.ui.componentFactory.add('insertImage',(t)=>{const n=new i.a(t),o=e.commands.get('imageUpload');return n.set({label:a('Insert image'),icon:s.a,tooltip:!0,acceptedType:'image/*',allowMultipleFiles:!0}),n.bind('isEnabled').to(o),n.on('done',(t,a)=>{for(const n of Array.from(a)){const t=Object(l.a)(e.document.selection);Object(l.b)(n)&&e.execute('imageUpload',{file:n,insertAt:t})}}),n})}}t.a=d},function(e,t,a){'use strict';var n=a(5),o=a(3),i=a(58),r=a(76),s=a(11);class l extends s.a{execute(e){const t=this.editor,a=t.document,s=e.batch||a.batch(),l=e.file,d=a.selection,c=t.plugins.get(r.a);a.enqueueChanges(()=>{const r=c.createLoader(l);if(!r)return;const m=new n.a('image',{uploadId:r.id});let u;u=e.insertAt?new i.a([new o.a(e.insertAt)]):a.selection,t.data.insertContent(m,u,s),m.parent&&d.setRanges([o.a.createOn(m)])})}}t.a=l},function(e,t,a){'use strict';var n=a(2);class o extends n.a{static get pluginName(){return'Notification'}init(){this.on('show:warning',(e,t)=>{window.alert(t.message)},{priority:'lowest'})}showSuccess(e,t={}){this._showNotification({message:e,type:'success',namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:'info',namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:'warning',namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:'');this.fire(t,{message:e.message,type:e.type,title:e.title||''})}}t.a=o},function(e,t,a){'use strict';var n=a(21),o=a(7),i=a(6);class r extends n.a{constructor(e){super(e),this.fileInputView=new s(e),this.fileInputView.bind('acceptedType').to(this,'acceptedType'),this.set('allowMultipleFiles',!1),this.fileInputView.bind('allowMultipleFiles').to(this,'allowMultipleFiles'),this.fileInputView.delegate('done').to(this),this.on('execute',()=>{this.fileInputView.open()}),document.body.appendChild(this.fileInputView.element)}destroy(){document.body.removeChild(this.fileInputView.element),super.destroy()}}t.a=r;class s extends o.a{constructor(e){super(e),this.set('acceptedType'),this.set('allowMultipleFiles',!1);const t=this.bindTemplate;this.template=new i.a({tag:'input',attributes:{class:['ck-hidden'],type:'file',tabindex:'-1',accept:t.to('acceptedType'),multiple:t.to('allowMultipleFiles')},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire('done',this.element.files),this.element.value=''})}})}open(){this.element.click()}}},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.994C2 16.102 2.895 17 3.994 17h12.012A2 2 0 0 0 18 14.994V5.006A2.001 2.001 0 0 0 16.006 3H3.994A2 2 0 0 0 2 5.006v9.988zm1-9.992C3 4.45 3.45 4 4.007 4h11.986A1.01 1.01 0 0 1 17 5.002v9.996C17 15.55 16.55 16 15.993 16H4.007A1.01 1.01 0 0 1 3 14.998V5.002zm1.024 10H16v-3.096l-2.89-4.263-3.096 5.257-3.003-2.103L4 13.96l.024 1.043zM6.406 6A1.4 1.4 0 0 0 5 7.393a1.4 1.4 0 0 0 1.406 1.393 1.4 1.4 0 0 0 1.407-1.393A1.4 1.4 0 0 0 6.406 6z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e,t,a){'use strict';function n(){const e=new c.a('div',{class:'ck-progress-bar'});return e.setCustomProperty(f,!0),e}function o(e){for(const t of e.getChildren())if(t.getCustomProperty(f))return t}var i=a(2),r=a(70),s=a(76),l=a(513),d=a.n(l),c=a(94),m=a(275),u=a(514),p=a.n(u);class g extends i.a{static get requires(){return[m.a]}constructor(e){super(e),this.placeholder='data:image/svg+xml;utf8,'+encodeURIComponent(d.a)}init(){const e=this.editor;e.editing.modelToView.on('addAttribute:uploadStatus:image',(...e)=>this.uploadStatusChange(...e)),e.editing.modelToView.on('changeAttribute:uploadStatus:image',(...e)=>this.uploadStatusChange(...e))}uploadStatusChange(e,t,a){const i=this.editor,l=t.item,d=l.getAttribute('uploadId');if(a.consume(t.item,Object(r.b)(e.name))&&d){const e=i.plugins.get(s.a),a=this.placeholder,r=t.attributeNewValue,c=i.editing.mapper.toViewElement(l);if('reading'==r){c.addClass('ck-appear','ck-infinite-progress','ck-image-upload-placeholder');const e=c.getChild(0);return void e.setAttribute('src',a)}if('uploading'==r){const t=e.loaders.get(d);if(t){const e=n();c.removeClass('ck-infinite-progress','ck-image-upload-placeholder'),c.appendChildren(e),t.on('change:uploadedPercent',(t,a,n)=>{e.setStyle('width',n+'%'),i.editing.view.render()})}return}const m=o(c);m?m.remove():c.removeClass('ck-infinite-progress'),c.removeClass('ck-appear','ck-image-upload-placeholder')}}}t.a=g;const f=Symbol('progress-bar')},function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="none" fill-rule="evenodd"><rect width="700" height="250" fill="#F7F7F7" rx="4"/><text fill="#5F6F77" font-family="Arial,sans-serif" font-size="24"><tspan x="247.9" y="135">Uploading image\u2026</tspan></text></g></svg>\n'},function(e,t,a){var n=a(515);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'figure.image{position:relative;overflow:hidden}figure.image.ck-appear{animation:fadeIn .7s}figure.image.ck-infinite-progress:before{content:"";width:30px;height:2px;position:absolute;top:0;right:0;background:rgba(0,0,0,.1);animation-name:readingProgressAnimation;animation-duration:1.5s;animation-iteration-count:infinite;transition-timing-function:linear}figure.image.ck-image-upload-placeholder>img{width:100%}figure.image .ck-progress-bar{height:2px;width:0;position:absolute;top:0;left:0;background:#6ab5f9;transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes readingProgressAnimation{0%{width:30px;right:0}50%{width:45px}to{right:100%}}',''])},function(e,t,a){'use strict';function n(e,t){return Array.prototype.concat(...e.map((e)=>[e,t]))}var o=a(115),i=a(518),r=a(2),s=a(520),l=a(521),d=a(113),c=a(6),m=a(527),u=a.n(m);class p extends r.a{static get requires(){return[o.a,i.a]}static get pluginName(){return'Heading'}init(){const e=this.editor,a=new d.a,o=this._getLocalizedOptions(),i=[],r=e.t,t=r('Choose heading'),m=r('Heading');for(const t of o){const n=e.commands.get(t.modelElement),o=new s.a({commandName:t.modelElement,label:t.title,class:t.class});o.bind('isActive').to(n,'value'),a.add(o),i.push(n)}const u=new s.a({withText:!0,items:a,tooltip:m});u.bind('isEnabled').to(...n(i,'isEnabled'),(...e)=>e.some((e)=>e)),u.bind('label').to(...n(i,'value'),(...e)=>{const a=e.findIndex((e)=>e);return o[a]?o[a].title:t}),e.ui.componentFactory.add('headings',(t)=>{const a=Object(l.a)(u,t);return c.a.extend(a.template,{attributes:{class:['ck-heading-dropdown']}}),this.listenTo(a,'execute',(t)=>{e.execute(t.source.commandName),e.editing.view.focus()}),a})}_getLocalizedOptions(){const e=this.editor,a=e.t,t={Paragraph:a('Paragraph'),"Heading 1":a('Heading 1'),"Heading 2":a('Heading 2'),"Heading 3":a('Heading 3')};return e.config.get('heading.options').map((e)=>{const a=t[e.title];return a&&a!=e.title&&(e=Object.assign({},e,{title:a})),e})}}t.a=p},function(e,t,a){'use strict';function n(e,t){return t.check({name:'paragraph',inside:i.a.createBefore(e)})}var o=a(11),i=a(1),r=a(61);class s extends o.a{refresh(){const e=this.editor.document,t=Object(r.a)(e.selection.getSelectedBlocks());this.value=!!t&&t.is('paragraph'),this.isEnabled=!!t&&n(t,e.schema)}execute(e={}){const t=this.editor.document;t.enqueueChanges(()=>{const a=e.batch||t.batch(),o=(e.selection||t.selection).getSelectedBlocks();for(const e of o)!e.is('paragraph')&&n(e,t.schema)&&a.rename(e,'paragraph')})}}t.a=s},function(e,t,a){'use strict';var n=a(2),o=a(51),i=a(43),r=a(115),s=a(519);const l='paragraph';class d extends n.a{constructor(e){super(e),e.config.define('heading',{options:[{modelElement:'paragraph',title:'Paragraph',class:'ck-heading_paragraph'},{modelElement:'heading1',viewElement:'h2',title:'Heading 1',class:'ck-heading_heading1'},{modelElement:'heading2',viewElement:'h3',title:'Heading 2',class:'ck-heading_heading2'},{modelElement:'heading3',viewElement:'h4',title:'Heading 3',class:'ck-heading_heading3'}]})}static get requires(){return[r.a]}init(){const e=this.editor,t=e.data,a=e.editing,n=e.config.get('heading.options');for(const r of n)r.modelElement!==l&&(e.document.schema.registerItem(r.modelElement,'$block'),Object(o.a)().for(t.modelToView,a.modelToView).fromElement(r.modelElement).toElement(r.viewElement),Object(i.a)().for(t.viewToModel).fromElement(r.viewElement).toElement(r.modelElement),e.commands.add(r.modelElement,new s.a(e,r.modelElement)))}afterInit(){const e=this.editor,t=e.commands.get('enter'),a=e.config.get('heading.options');t&&this.listenTo(t,'afterExecute',(t,n)=>{const o=e.document.selection.getFirstPosition().parent,i=n.batch,r=a.some((e)=>o.is(e.modelElement));r&&!o.is(l)&&0===o.childCount&&i.rename(o,l)})}}t.a=d},function(e,t,a){'use strict';function n(e,t,a){return a.check({name:t,inside:i.a.createBefore(e)})}var o=a(11),i=a(1),r=a(61);class s extends o.a{constructor(e,t){super(e),this.modelElement=t}refresh(){const e=Object(r.a)(this.editor.document.selection.getSelectedBlocks());this.value=!!e&&e.is(this.modelElement),this.isEnabled=!!e&&n(e,this.modelElement,this.editor.document.schema)}execute(e={}){const t=this.editor,a=t.document;a.enqueueChanges(()=>{const t=e.batch||a.batch(),o=Array.from(a.selection.getSelectedBlocks()).filter((e)=>n(e,this.modelElement,a.schema));for(const e of o)e.is(this.modelElement)||t.rename(e,this.modelElement)})}}t.a=s},function(e,t,a){'use strict';var n=a(45),o=a(4),i=a(12);class r{constructor(e,t){t&&Object(n.a)(this,t),e&&this.set(e)}}t.a=r,Object(o.a)(r,i.a)},function(e,t,a){'use strict';function n(e){e.listenTo(document,'click',(t,{target:a})=>{e.element==a||e.element.contains(a)||(e.isOpen=!1)})}t.a=function(e,t){const a=Object(r.a)(e,t),s=a.listView=new o.a(t);return s.items.bindTo(e.items).using((e)=>{const a=new i.a(t);return a.bind(...Object.keys(e)).to(e),a}),s.items.delegate('execute').to(a),a.panelView.children.add(s),a.on('change:isOpen',(e,t,o)=>{o?n(a):a.stopListening(document)}),a.on('execute',()=>{a.isOpen=!1}),a.keystrokes.set('arrowdown',(e,t)=>{a.isOpen&&(s.focus(),t())}),a.keystrokes.set('arrowup',(e,t)=>{a.isOpen&&(s.focusLast(),t())}),a};var o=a(522),i=a(523),r=a(524)},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(60),r=a(114),s=a(50);class l extends n.a{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new i.a,this.keystrokes=new s.a,this._focusCycler=new r.a({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'arrowup',focusNext:'arrowdown'}}),this.template=new o.a({tag:'ul',attributes:{class:['ck-reset','ck-list']},children:this.items}),this.items.on('add',(e,t)=>{this.focusTracker.add(t.element)}),this.items.on('remove',(e,t)=>{this.focusTracker.remove(t.element)})}init(){this.keystrokes.listenTo(this.element),super.init()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}t.a=l},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(50);class r extends n.a{constructor(){super(),this.set('tabindex',-1),this.keystrokes=new i.a;const e=this.bindTemplate;this.template=new o.a({tag:'li',attributes:{class:['ck-list__item',e.to('class'),e.if('isActive','ck-list__item_active')],style:e.to('style'),tabindex:e.to('tabindex')},children:[{text:e.to('label')}],on:{click:e.to('execute')}})}init(){const e=(e,t)=>{this.fire('execute'),t()};this.keystrokes.listenTo(this.element),this.keystrokes.set('Enter',e),this.keystrokes.set('Space',e)}focus(){this.element.focus()}}t.a=r},function(e,t,a){'use strict';t.a=function(e,t){const a=new n.a(t);a.bind('label','isOn','isEnabled','withText','keystroke','tooltip').to(e);const r=new i.a(t);return new o.a(t,a,r)};var n=a(21),o=a(525),i=a(526)},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(60),r=a(50);class s extends n.a{constructor(e,t,a){super(e),o.a.extend(t.template,{attributes:{class:['ck-dropdown__button']}}),this.buttonView=t,this.panelView=a,this.set('isOpen',!1),this.focusTracker=new i.a,this.keystrokes=new r.a,this.template=new o.a({tag:'div',attributes:{class:['ck-dropdown']},children:[t,a]}),this.listenTo(t,'execute',()=>{this.isOpen=!this.isOpen}),a.bind('isVisible').to(this,'isOpen')}init(){this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const e=(e,t)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,t())};this.keystrokes.set('arrowdown',(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set('arrowright',(e,t)=>{this.isOpen&&t()}),this.keystrokes.set('arrowleft',e),this.keystrokes.set('esc',e),super.init()}focus(){this.buttonView.focus()}}t.a=s},function(e,t,a){'use strict';var n=a(7),o=a(6);class i extends n.a{constructor(e){super(e);const t=this.bindTemplate;this.set('isVisible',!1),this.children=this.createCollection(),this.template=new o.a({tag:'div',attributes:{class:['ck-reset','ck-dropdown__panel',t.if('isVisible','ck-dropdown__panel-visible')]},children:this.children,on:{selectstart:t.to((e)=>e.preventDefault())}})}}t.a=i},function(e,t,a){var n=a(528);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-heading_heading1{font-size:1.5em}.ck-heading_heading2{font-size:1.3em}.ck-heading_heading3{font-size:1.1em}[class*=ck-heading_]{line-height:21.6px;padding:9.6px}[class*=ck-heading_heading]{font-weight:700}.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}',''])},function(e,t,a){'use strict';var n=a(2),o=a(530),i=a(535),r=a.n(i);class s extends n.a{static get requires(){return[o.a]}static get pluginName(){return'ImageCaption'}}t.a=s},function(e,t,a){'use strict';function n(e,t,a,n){if('insert'===t){const e=new l.a({boundaries:a.range,ignoreElementEnd:!0});for(const t of e){const e=t.item;'elementStart'==t.type&&Object(h.a)(e)&&!Object(b.b)(e)&&n.document.enqueueChanges(()=>{Object(b.b)(e)||n.insert(p.a.createAt(e,'end'),new d.a('caption'))})}}}function o(e,t=!0){return(a,n,o,r)=>{const s=n.item;if((s.childCount||t)&&Object(h.a)(s.parent)){if(!o.consume(n.item,'insert'))return;const t=r.mapper.toViewElement(n.range.start.parent),a=e instanceof m.a?e.clone(!0):e();s.childCount||a.addClass('ck-hidden'),i(a,n.item,t,r.mapper)}}}function i(e,t,a,n){const o=g.a.createAt(a,'end');u.a.insert(o,e),n.bindElements(t,e)}function r(e){const t=e.getAncestors({includeSelf:!0}),a=t.find((e)=>'caption'==e.name);return a&&a.parent&&'image'==a.parent.name?a:null}var s=a(2),l=a(53),d=a(5),c=a(47),m=a(27),u=a(93),p=a(1),g=a(22),f=a(43),h=a(36),b=a(531);class _ extends s.a{init(){const e=this.editor,a=e.document,i=e.editing.view,r=a.schema,s=e.data,l=e.editing,d=e.t;this._createCaption=Object(b.a)(i,d('Enter image caption')),r.registerItem('caption','$block'),r.allow({name:'$inline',inside:'caption'}),r.allow({name:'caption',inside:'image'}),r.limits.add('caption'),a.on('change',n),Object(f.a)().for(s.viewToModel).from(b.c).toElement('caption'),s.modelToView.on('insert:caption',o(new c.a('figcaption'),!1)),l.modelToView.on('insert:caption',o(this._createCaption)),l.modelToView.on('insert',(e,t)=>this._fixCaptionVisibility(t.item),{priority:'high'}),l.modelToView.on('remove',(e,t)=>this._fixCaptionVisibility(t.sourcePosition.parent),{priority:'high'}),this.listenTo(i,'render',()=>this._updateCaptionVisibility(),{priority:'high'})}_updateCaptionVisibility(){const e=this.editor.editing.mapper;let t;this._lastSelectedCaption&&!this._lastSelectedCaption.childCount&&this._lastSelectedCaption.addClass('ck-hidden');const a=this.editor.document.selection,n=a.getSelectedElement();if(n&&n.is('image')){const a=Object(b.b)(n);t=e.toViewElement(a)}const o=a.getFirstPosition(),i=r(o.parent);i&&(t=e.toViewElement(i)),t&&(t.removeClass('ck-hidden'),this._lastSelectedCaption=t)}_fixCaptionVisibility(e){const t=r(e),a=this.editor.editing.mapper;if(t){const e=a.toViewElement(t);e&&(t.childCount?e.removeClass('ck-hidden'):e.addClass('ck-hidden'))}}}t.a=_},function(e,t,a){'use strict';t.a=function(e,t){return()=>{const a=new o.a('figcaption');return a.document=e,a.setCustomProperty(s,!0),Object(i.a)(a,t),Object(r.e)(a)}},t.b=function(e){for(const t of e.getChildren())if(t instanceof n.a&&'caption'==t.name)return t;return null},t.c=function(e){const t=e.parent;return'figcaption'==e.name&&t&&'figure'==t.name&&t.hasClass('image')?{name:!0}:null};var n=a(5),o=a(91),i=a(532),r=a(157);const s=Symbol('imageCaption')},function(e,t,a){'use strict';function n(e){const t=e.document;e.removeClass('ck-placeholder'),e.removeAttribute('data-placeholder'),u.has(t)&&u.get(t).delete(e)}function o(e){const t=u.get(e);for(const[a,n]of t)i(a,n)}function i(e,t){const a=e.document;if(a){const n=a.selection,o=n.anchor;if(t&&!t())return void e.removeClass('ck-placeholder');const i=!Array.from(e.getChildren()).some((e)=>!e.is('uiElement'));return!a.isFocused&&i?void e.addClass('ck-placeholder'):void(i&&o&&o.parent!==e?e.addClass('ck-placeholder'):e.removeClass('ck-placeholder'))}}t.a=function(e,t,a){const r=e.document;if(!r)throw new l.b('view-placeholder-element-is-detached: Provided element is not placed in document.');n(e),u.has(r)||(u.set(r,new Map),m.listenTo(r,'render',()=>o(r),{priority:'high'})),e.setAttribute('data-placeholder',t),u.get(r).set(e,a),i(e,a)};var r=a(45),s=a(8),l=a(0),d=a(533),c=a.n(d);const m={};Object(r.a)(m,s.c);const u=new WeakMap},function(e,t,a){var n=a(534);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-placeholder:before{content:attr(data-placeholder);cursor:text;color:#c2c2c2;pointer-events:none}',''])},function(e,t,a){var n=a(536);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-editor__editable .image>figcaption{color:#333;background-color:#f7f7f7;padding:.8em;font-size:.75em;outline-offset:-1px}',''])},function(e,t,a){'use strict';var n=a(2),o=a(538),i=a(21);class r extends n.a{static get requires(){return[o.a]}static get pluginName(){return'ImageStyle'}init(){const e=this.editor,t=e.plugins.get(o.a).imageStyles;for(const e of t)this._createButton(e)}_createButton(e){const t=this.editor,a=t.commands.get(e.name);t.ui.componentFactory.add(e.name,(n)=>{const o=new i.a(n);return o.set({label:e.title,icon:e.icon,tooltip:!0}),o.bind('isEnabled').to(a,'isEnabled'),o.bind('isOn').to(a,'value'),this.listenTo(o,'execute',()=>t.execute(e.name)),o})}}t.a=r},function(e,t,a){'use strict';function n(e){const t=b.defaultStyles,a=b.defaultIcons;if('string'==typeof e)t[e]?e=Object.assign({},t[e]):(l.a.warn('image-style-not-found: There is no such image style of given name.',{name:e}),e={name:e});else if(t[e.name]){const a=t[e.name],n=Object.assign({},e);for(const t in a)e.hasOwnProperty(t)||(n[t]=a[t]);e=n}return'string'==typeof e.icon&&a[e.icon]&&(e.icon=a[e.icon]),e}var o=a(2),i=a(539),r=a(268),s=a(540),l=a(16),d=a(541),c=a.n(d),m=a(542),u=a.n(m),p=a(543),g=a.n(p),f=a(544),h=a.n(f);class b extends o.a{static get requires(){return[r.a]}static get pluginName(){return'ImageStyleEngine'}init(){const e=this.editor,t=e.document,a=t.schema,n=e.data,o=e.editing;e.config.define('image.styles',['imageStyleFull','imageStyleSide']);const r=this.imageStyles;a.allow({name:'image',attributes:'imageStyle',inside:'$root'});const l=Object(s.a)(r);o.modelToView.on('addAttribute:imageStyle:image',l),n.modelToView.on('addAttribute:imageStyle:image',l),o.modelToView.on('changeAttribute:imageStyle:image',l),n.modelToView.on('changeAttribute:imageStyle:image',l),o.modelToView.on('removeAttribute:imageStyle:image',l),n.modelToView.on('removeAttribute:imageStyle:image',l),n.viewToModel.on('element:figure',Object(s.b)(r),{priority:'low'});for(const t of r)e.commands.add(t.name,new i.a(e,t))}get imageStyles(){if(this._cachedImageStyles)return this._cachedImageStyles;const e=[],t=this.editor,a=this.localizedDefaultStylesTitles,o=t.config.get('image.styles');for(let t of o)t=n(t),a[t.title]&&(t.title=a[t.title]),e.push(t);return this._cachedImageStyles=e}get localizedDefaultStylesTitles(){const e=this.editor.t;return{"Full size image":e('Full size image'),"Side image":e('Side image'),"Left aligned image":e('Left aligned image'),"Centered image":e('Centered image'),"Right aligned image":e('Right aligned image')}}}t.a=b,b.defaultStyles={imageStyleFull:{name:'imageStyleFull',title:'Full size image',icon:c.a,isDefault:!0},imageStyleSide:{name:'imageStyleSide',title:'Side image',icon:h.a,className:'image-style-side'},imageStyleAlignLeft:{name:'imageStyleAlignLeft',title:'Left aligned image',icon:u.a,className:'image-style-align-left'},imageStyleAlignCenter:{name:'imageStyleAlignCenter',title:'Centered image',icon:g.a,className:'image-style-align-center'},imageStyleAlignRight:{name:'imageStyleAlignRight',title:'Right aligned image',icon:h.a,className:'image-style-align-right'}},b.defaultIcons={full:c.a,left:u.a,right:h.a,center:g.a}},function(e,t,a){'use strict';var n=a(11),o=a(36);class i extends n.a{constructor(e,t){super(e),this.style=t}refresh(){const e=this.editor.document.selection.getSelectedElement();this.isEnabled=Object(o.a)(e),this.value=!!e&&(this.style.isDefault?!e.hasAttribute('imageStyle'):e.getAttribute('imageStyle')==this.style.name)}execute(e={}){if(this.value)return;const t=this.editor.document,a=t.selection.getSelectedElement();t.enqueueChanges(()=>{const n=e.batch||t.batch();n.setAttribute(a,'imageStyle',this.style.name)})}}t.a=i},function(e,t,a){'use strict';function n(e,t,a,n){const o=t.input,i=t.output;if(a.test(o,{class:e.className})&&Object(s.a)(i)){const r=[...i.getAttributeKeys(),'imageStyle'];n.schema.check({name:'image',inside:t.context,attributes:r})&&(a.consume(o,{class:e.className}),i.setAttribute('imageStyle',e.name))}}function o(e,t){for(const a of t)if(a.name===e)return a}function i(e,t,a){return t&&('changeAttribute'==e||'removeAttribute'==e)&&(a.removeClass(t.className),!0)}function r(e,t,a){return t&&('addAttribute'==e||'changeAttribute'==e)&&(a.addClass(t.className),!0)}t.a=function(e){return(t,a,n,s)=>{const l=t.name.split(':')[0],d=l+':imageStyle';if(n.test(a.item,d)){const t=o(a.attributeNewValue,e),c=o(a.attributeOldValue,e),m=s.mapper.toViewElement(a.item),u=i(l,c,m),p=r(l,t,m);(u||p)&&n.consume(a.item,d)}}},t.b=function(e){const t=e.filter((e)=>!e.isDefault);return(e,a,o,i)=>{for(const r of t)n(r,a,o,i)}};var s=a(36)},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h16v1H2v-1zm15-2H3V6h14v8zm-1-7H4v6h12V7zM2 3h16v1H2V3z"/></svg>'},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 15h16v1H2v-1zm11-3h5v1h-5v-1zm-2 1H2V6h9v7zm-1-6H3v5h7V7zm3 2h5v1h-5V9zm0-3h5v1h-5V6zM2 3h16v1H2V3z"/></svg>'},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M2 15h16v1H2v-1zm13-2H5V6h10v7zm-1-6H6v5h8V7zM2 3h16v1H2V3z" fill-rule="nonzero"/></svg>'},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 16H2v-1h16v1zM6.978 13H2v-1h4.978v1zM18 6v7H9V6h9zm-1 6V7h-7v5h7zM6.978 10H2V9h4.978v1zm0-3H2V6h4.978v1zM18 4H2V3h16v1z"/></svg>'},function(e,t,a){'use strict';var n=a(6),o=a(2),i=a(263),r=a(158),s=a(36),l=a(273);class d extends o.a{static get requires(){return[r.a]}static get pluginName(){return'ImageToolbar'}afterInit(){const e=this.editor,t=e.config.get('image.toolbar');t&&t.length&&(this._balloon=this.editor.plugins.get('ContextualBalloon'),this._toolbar=new i.a,n.a.extend(this._toolbar.template,{attributes:{class:'ck-editor-toolbar'}}),this._toolbar.fillFromConfig(t,e.ui.componentFactory),this.listenTo(e.editing.view,'render',()=>{this._checkIsVisible()},{priority:'low'}),this.listenTo(e.ui.focusTracker,'change:isFocused',()=>{this._checkIsVisible()},{priority:'low'}))}_checkIsVisible(){const e=this.editor;e.ui.focusTracker.isFocused?Object(s.b)(e.editing.view.selection)?this._showToolbar():this._hideToolbar():this._hideToolbar()}_showToolbar(){const e=this.editor;this._isVisible?Object(l.b)(e):!this._balloon.hasView(this._toolbar)&&this._balloon.add({view:this._toolbar,position:Object(l.a)(e),balloonClassName:'ck-toolbar-container ck-editor-toolbar-container'})}_hideToolbar(){this._isVisible&&this._balloon.remove(this._toolbar)}get _isVisible(){return this._balloon.visibleView==this._toolbar}}t.a=d},function(e,t,a){'use strict';function n(e){return e.getAncestors().find((e)=>e instanceof l.a)}var o=a(2),i=a(547),r=a(38),s=a(548),l=a(277),d=a(158),c=a(269),m=a(21),u=a(551),p=a(552),g=a.n(p),f=a(553),h=a.n(f);const b='Ctrl+K';class _ extends o.a{static get requires(){return[s.a,d.a]}static get pluginName(){return'Link'}init(){const e=this.editor;e.editing.view.addObserver(i.a),this.formView=this._createForm(),this._balloon=e.plugins.get(d.a),this._createToolbarLinkButton(),this._attachActions()}_createForm(){const e=this.editor,t=new u.a(e.locale),a=e.commands.get('link'),n=e.commands.get('unlink');return t.urlInputView.bind('value').to(a,'value'),t.urlInputView.bind('isReadOnly').to(a,'isEnabled',(e)=>!e),t.saveButtonView.bind('isEnabled').to(a),t.unlinkButtonView.bind('isEnabled').to(n),this.listenTo(t,'submit',()=>{e.execute('link',t.urlInputView.inputView.element.value),this._hidePanel(!0)}),this.listenTo(t,'unlink',()=>{e.execute('unlink'),this._hidePanel(!0)}),this.listenTo(t,'cancel',()=>this._hidePanel(!0)),t.keystrokes.set('Esc',(e,t)=>{this._hidePanel(!0),t()}),t}_createToolbarLinkButton(){const e=this.editor,a=e.commands.get('link'),n=e.t;e.keystrokes.set(b,(e,t)=>{t(),a.isEnabled&&this._showPanel(!0)}),e.ui.componentFactory.add('link',(e)=>{const t=new m.a(e);return t.isEnabled=!0,t.label=n('Link'),t.icon=g.a,t.keystroke=b,t.tooltip=!0,t.bind('isEnabled').to(a,'isEnabled'),this.listenTo(t,'execute',()=>this._showPanel(!0)),t})}_attachActions(){const e=this.editor.editing.view;this.listenTo(e,'click',()=>{const e=this._getSelectedLinkElement();e&&this._showPanel()}),this.editor.keystrokes.set('Tab',(e,t)=>{this._balloon.visibleView!==this.formView||this.formView.focusTracker.isFocused||(this.formView.focus(),t())},{priority:'high'}),this.editor.keystrokes.set('Esc',(e,t)=>{this._balloon.visibleView===this.formView&&(this._hidePanel(),t())}),Object(c.a)({emitter:this.formView,activator:()=>this._balloon.hasView(this.formView),contextElements:[this._balloon.view.element],callback:()=>this._hidePanel()})}_showPanel(e){const t=this.editor,a=t.commands.get('link'),n=t.commands.get('unlink'),o=t.editing,i=o.view,r=i.selection.isCollapsed,s=this._getSelectedLinkElement();this.formView.unlinkButtonView.isVisible=n.isEnabled,this.formView.urlInputView.inputView.element.value=a.value||'',this.listenTo(i,'render',()=>{const e=this._getSelectedLinkElement(),t=i.selection.isCollapsed;r&&!t||s!==e?this._hidePanel(!0):this._balloon.updatePosition(this._getBalloonPositionData())}),this._balloon.hasView(this.formView)?e&&this._balloon.visibleView===this.formView&&this.formView.urlInputView.select():(this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),e&&this.formView.urlInputView.select())}_hidePanel(e){this.stopListening(this.editor.editing.view,'render');this._balloon.hasView(this.formView)&&(e&&this.editor.editing.view.focus(),this.stopListening(this.editor.editing.view,'render'),this._balloon.remove(this.formView))}_getBalloonPositionData(){const e=this.editor.editing.view,t=this._getSelectedLinkElement(),a=t?e.domConverter.mapViewToDom(t):e.domConverter.viewRangeToDom(e.selection.getFirstRange());return{target:a}}_getSelectedLinkElement(){const e=this.editor.editing.view.selection;if(e.isCollapsed)return n(e.getFirstPosition());else{const t=e.getFirstRange().getTrimmed(),a=n(t.start),o=n(t.end);return a&&a==o?r.a.createIn(a).getTrimmed().isEqual(t)?a:null:null}}}t.a=_},function(e,t,a){'use strict';var n=a(75);class o extends n.a{constructor(e){super(e),this.domEventType='click'}onDomEvent(e){this.fire(e.type,e)}}t.a=o},function(e,t,a){'use strict';var n=a(2),o=a(51),i=a(43),r=a(277),s=a(549),l=a(550);class d extends n.a{init(){const e=this.editor,t=e.data,a=e.editing;e.document.schema.allow({name:'$inline',attributes:'linkHref',inside:'$block'}),e.document.schema.allow({name:'$inline',attributes:'linkHref',inside:'$clipboardHolder'}),Object(o.a)().for(t.modelToView,a.modelToView).fromAttribute('linkHref').toElement((e)=>{const t=new r.a('a',{href:e});return t.priority=5,t}),Object(i.a)().for(t.viewToModel).from({name:'a',attribute:{href:/.?/}}).toAttribute((e)=>({key:'linkHref',value:e.getAttribute('href')})),e.commands.add('link',new s.a(e)),e.commands.add('unlink',new l.a(e))}}t.a=d},function(e,t,a){'use strict';var n=a(11),o=a(26),i=a(3),r=a(278);class s extends n.a{refresh(){const e=this.editor.document;this.value=e.selection.getAttribute('linkHref'),this.isEnabled=e.schema.checkAttributeInSelection(e.selection,'linkHref')}execute(e){const t=this.editor.document,a=t.selection;t.enqueueChanges(()=>{const n=t.batch();if(a.isCollapsed){const t=a.getFirstPosition();if(a.hasAttribute('linkHref')){const t=Object(r.a)(a.getFirstPosition(),a.getAttribute('linkHref'));n.setAttribute(t,'linkHref',e),a.setRanges([t])}else{const r=new o.a(e,{linkHref:e});n.insert(t,r),a.setRanges([i.a.createOn(r)])}}else{const o=t.schema.getValidRanges(a.getRanges(),'linkHref');for(const t of o)n.setAttribute(t,'linkHref',e)}})}}t.a=s},function(e,t,a){'use strict';var n=a(11),o=a(278);class i extends n.a{refresh(){this.isEnabled=this.editor.document.selection.hasAttribute('linkHref')}execute(){const e=this.editor.document,t=e.selection;e.enqueueChanges(()=>{const a=t.isCollapsed?[Object(o.a)(t.getFirstPosition(),t.getAttribute('linkHref'))]:t.getRanges(),n=e.batch();for(const e of a)n.removeAttribute(e,'linkHref')})}}t.a=i},function(e,t,a){'use strict';var n=a(7),o=a(6),i=a(112),r=a(21),s=a(270),l=a(271),d=a(272),c=a(60),m=a(114),u=a(50);class p extends n.a{constructor(e){super(e);const a=e.t;this.focusTracker=new c.a,this.keystrokes=new u.a,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(a('Save')),this.saveButtonView.type='submit',this.cancelButtonView=this._createButton(a('Cancel'),'cancel'),this.unlinkButtonView=this._createButton(a('Unlink'),'unlink'),this._focusables=new i.a,this._focusCycler=new m.a({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),o.a.extend(this.saveButtonView.template,{attributes:{class:['ck-button-action']}}),this.template=new o.a({tag:'form',attributes:{class:['ck-link-form'],tabindex:'-1'},children:[this.urlInputView,{tag:'div',attributes:{class:['ck-link-form__actions']},children:[this.saveButtonView,this.cancelButtonView,this.unlinkButtonView]}]}),Object(d.a)({view:this});const t=[this.urlInputView,this.saveButtonView,this.cancelButtonView,this.unlinkButtonView];t.forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element)})}init(){return this.keystrokes.listenTo(this.element),super.init()}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const e=this.locale.t,t=new s.a(this.locale,l.a);return t.label=e('Link URL'),t.inputView.placeholder='https://example.com',t}_createButton(e,t){const a=new r.a(this.locale);return a.label=e,a.withText=!0,t&&a.delegate('execute').to(this,t),a}}t.a=p},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#222" fill-rule="evenodd"><path d="M14.2 10.956l1.227-1.227a3.995 3.995 0 0 0-.002-5.654 4 4 0 0 0-5.654-.002L7.698 6.145a3.995 3.995 0 0 0 .003 5.654c.39.39.84.682 1.32.878l-.305-.307.638-.638a2.99 2.99 0 0 1-.946-.64 2.995 2.995 0 0 1-.003-4.24l2.073-2.072a3 3 0 0 1 4.242 4.242l-1.226 1.227.707.707z"/><path d="M10.166 7.405c.41.192.795.457 1.133.796a3.995 3.995 0 0 1 .003 5.654l-2.073 2.072a4 4 0 0 1-5.654-.002 3.995 3.995 0 0 1-.002-5.654l1.362-1.363.707.707-1.362 1.363a3 3 0 0 0 4.243 4.243l2.072-2.073a2.995 2.995 0 0 0-.003-4.24 2.987 2.987 0 0 0-1.196-.733l.77-.77z"/></g></svg>'},function(e,t,a){var n=a(554);'string'==typeof n&&(n=[[e.i,n,'']]);var o={},i;o.transform=i;a(32)(n,o);n.locals&&(e.exports=n.locals),!1},function(e,t,a){t=e.exports=a(31)(void 0),t.push([e.i,'.ck-link-form{padding:1.2em;overflow:hidden}.ck-link-form:focus{outline:none}.ck-link-form .ck-input-text{width:100%}.ck-link-form .ck-label{margin-bottom:.2em}.ck-link-form__actions{clear:both;padding-top:1.2em}.ck-link-form__actions .ck-button{float:right}.ck-link-form__actions .ck-button+.ck-button{margin-right:.64em}.ck-link-form__actions .ck-button:last-child{float:left;margin-right:2.56em}',''])},function(e,t,a){'use strict';var n=a(556),o=a(561),i=a.n(o),r=a(562),s=a.n(r),l=a(2),d=a(21);class c extends l.a{static get requires(){return[n.a]}static get pluginName(){return'List'}init(){const e=this.editor.t;this._addButton('numberedList',e('Numbered List'),i.a),this._addButton('bulletedList',e('Bulleted List'),s.a),this.listenTo(this.editor.editing.view,'enter',(e,t)=>{const a=this.editor.document,n=a.selection.getLastPosition().parent;a.selection.isCollapsed&&'listItem'==n.name&&n.isEmpty&&(this.editor.execute('outdentList'),t.preventDefault(),e.stop())});const t=(e)=>(t,a)=>{const n=this.editor.commands.get(e);n.isEnabled&&(this.editor.execute(e),a())};this.editor.keystrokes.set('Tab',t('indentList')),this.editor.keystrokes.set('Shift+Tab',t('outdentList'))}_addButton(e,t,a){const n=this.editor,o=n.commands.get(e);n.ui.componentFactory.add(e,(i)=>{const r=new d.a(i);return r.set({label:t,icon:a,tooltip:!0}),r.bind('isOn','isEnabled').to(o,'value','isEnabled'),this.listenTo(r,'execute',()=>n.execute(e)),r})}}t.a=c},function(e,t,a){'use strict';function n(e){let t=1;for(const a of e.getChildren())if('ul'==a.name||'ol'==a.name)for(const e of a.getChildren())t+=n(e);return t}var o=a(557),i=a(558),r=a(2),s=a(115),l=a(559);class d extends r.a{static get requires(){return[s.a]}init(){const e=this.editor,t=e.document.schema;t.registerItem('listItem','$block'),t.allow({name:'listItem',inside:'$root',attributes:['type','indent']}),t.requireAttributes('listItem',['type','indent']);const a=e.data,r=e.editing;this.editor.document.on('change',Object(l.c)(this.editor.document),{priority:'high'}),this.editor.document.on('change',(e,t,a)=>{if('move'==t)for(const e of a.range.getItems())e.is('listItem')&&r.mapper.unbindModelElement(e)},{priority:'high'}),r.mapper.registerViewToModelLength('li',n),a.mapper.registerViewToModelLength('li',n),r.mapper.on('modelToViewPosition',l.e),r.mapper.on('viewToModelPosition',l.m),a.mapper.on('modelToViewPosition',l.e),r.modelToView.on('insert',l.k,{priority:'high'}),r.modelToView.on('insert:listItem',l.h),a.modelToView.on('insert',l.k,{priority:'high'}),a.modelToView.on('insert:listItem',l.h),r.modelToView.on('changeAttribute:type:listItem',l.g),a.modelToView.on('changeAttribute:type:listItem',l.g),r.modelToView.on('remove:listItem',l.j),r.modelToView.on('remove',l.i,{priority:'low'}),a.modelToView.on('remove:listItem',l.j),a.modelToView.on('remove',l.i,{priority:'low'}),r.modelToView.on('changeAttribute:indent:listItem',l.f),a.modelToView.on('changeAttribute:indent:listItem',l.f),a.viewToModel.on('element:ul',l.a,{priority:'high'}),a.viewToModel.on('element:ol',l.a,{priority:'high'}),a.viewToModel.on('element:li',l.b,{priority:'high'}),a.viewToModel.on('element:li',l.l),a.on('insertContent',l.d,{priority:'high'}),e.commands.add('numberedList',new o.a(e,'numbered')),e.commands.add('bulletedList',new o.a(e,'bulleted')),e.commands.add('indentList',new i.a(e,'forward')),e.commands.add('outdentList',new i.a(e,'backward'))}}t.a=d},function(t,a,n){'use strict';function o(e,t,a){const n=t?e[0]:e[e.length-1];if(n.is('listItem'))for(let o=n[t?'previousSibling':'nextSibling'],i=n.getAttribute('indent');o&&o.is('listItem')&&o.getAttribute('indent')>=a;)i>o.getAttribute('indent')&&(i=o.getAttribute('indent')),o.getAttribute('indent')==i&&e[t?'unshift':'push'](o),o=o[t?'previousSibling':'nextSibling']}function i(e,t){return t.check({name:'listItem',attributes:['type','indent'],inside:s.a.createBefore(e)})}var r=n(11),s=n(1),l=n(61);class d extends r.a{constructor(e,t){super(e),this.type='bulleted'==t?'bulleted':'numbered'}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const a=this.editor.document,n=Array.from(a.selection.getSelectedBlocks()).filter((e)=>i(e,a.schema)),r=!0===this.value;a.enqueueChanges(()=>{const i=t.batch||a.batch();if(r){let t=n[n.length-1].nextSibling,a=e,o=[];for(;t&&'listItem'==t.name&&0!==t.getAttribute('indent');){const e=t.getAttribute('indent');e<a&&(a=e);const n=e-a;o.push({element:t,indent:n}),t=t.nextSibling}o=o.reverse();for(const e of o)i.setAttribute(e.element,'indent',e.indent)}if(!r){let t=e;for(const e of n)e.is('listItem')&&e.getAttribute('indent')<t&&(t=e.getAttribute('indent'));t=0===t?1:t,o(n,!0,t),o(n,!1,t)}for(const e of n.reverse())r&&'listItem'==e.name?i.rename(e,'paragraph'):r||'listItem'==e.name?r||'listItem'!=e.name||e.getAttribute('type')==this.type||i.setAttribute(e,'type',this.type):i.setAttribute(e,'type',this.type).setAttribute(e,'indent',0).rename(e,'listItem')})}_getValue(){const e=Object(l.a)(this.editor.document.selection.getSelectedBlocks());return!!e&&e.is('listItem')&&e.getAttribute('type')==this.type}_checkEnabled(){if(this.value)return!0;const e=this.editor.document.selection,t=this.editor.document.schema,a=Object(l.a)(e.getSelectedBlocks());return!!a&&i(a,t)}}a.a=d},function(e,t,a){'use strict';function n(e,t){const a=o(e,!1);if(a)return void t.setAttribute(e,'type',a.getAttribute('type'));const n=o(e,!0);n&&t.setAttribute(e,'type',n.getAttribute('type'))}function o(e,t){for(let a=e[t?'nextSibling':'previousSibling'];a&&a.is('listItem')&&a.getAttribute('indent')>=e.getAttribute('indent');){if(a.getAttribute('indent')==e.getAttribute('indent'))return a;a=a[t?'nextSibling':'previousSibling']}return null}var i=a(11),r=a(61);class s extends i.a{constructor(e,t){super(e),this._indentBy='forward'==t?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.document,t=e.batch();let a=Array.from(e.selection.getSelectedBlocks());e.enqueueChanges(()=>{const e=a[a.length-1];for(let t=e.nextSibling;t&&'listItem'==t.name&&t.getAttribute('indent')>e.getAttribute('indent');)a.push(t),t=t.nextSibling;0>this._indentBy&&(a=a.reverse());for(const e of a){const a=e.getAttribute('indent')+this._indentBy;0>a?t.rename(e,'paragraph'):t.setAttribute(e,'indent',a)}0>this._indentBy&&(a=a.reverse());for(const e of a)n(e,t)})}_checkEnabled(){const e=Object(r.a)(this.editor.document.selection.getSelectedBlocks());if(!e||!e.is('listItem'))return!1;if(0<this._indentBy){const t=e.getAttribute('indent'),a=e.getAttribute('type');for(let n=e.previousSibling;n&&n.is('listItem')&&n.getAttribute('indent')>=t;){if(n.getAttribute('indent')==t)return n.getAttribute('type')==a;n=n.previousSibling}return!1}return!0}}t.a=s},function(e,t,a){'use strict';function n(e,t,a){let n=e.nodeAfter;n&&'listItem'==n.name&&t.enqueueChanges(()=>{const e=n.previousSibling,t=e&&e.is('listItem')?e.getAttribute('indent')+1:0;let o=n.getAttribute('indent')-t;const i=[];for(;n&&'listItem'==n.name&&n.getAttribute('indent')>t;){o>n.getAttribute('indent')&&(o=n.getAttribute('indent'));const e=n.getAttribute('indent')-o;i.push({item:n,indent:e}),n=n.nextSibling}if(0<i.length)for(const e of i.reverse())a.setAttribute(e.item,'indent',e.indent)})}function o(e,t,a,n){let o=e[t?'nodeBefore':'nodeAfter'];o&&o.is('listItem')&&0!==o.getAttribute('indent')&&a.enqueueChanges(()=>{const e=c(o,!t);if(e&&e!=o)for(const a=e.getAttribute('indent'),i=e.getAttribute('type');o&&o.is('listItem')&&o.getAttribute('indent')>=a;)o.getAttribute('type')!=i&&o.getAttribute('indent')==a&&n.setAttribute(o,'type',i),o=o[t?'previousSibling':'nextSibling']})}function i(e,t){const a='numbered'==e.getAttribute('type')?'ol':'ul',n=new u.a,o=new b.a(a,null);return o.appendChildren(n),t.bindElements(e,n),n}function r(e,t){const a=t.getNext?'nextSibling':'previousSibling',n=t.getNext?'nodeAfter':'nodeBefore',o=!!t.checkAllSiblings,i=!!t.sameIndent,r=!!t.biggerIndent,s=!!t.smallerIndent,l=!!t.isMapped,d=e instanceof g.a?e.getAttribute('indent'):t.indent;for(let c=e instanceof g.a?e[a]:e[n];c&&'listItem'==c.name;){const e=c.getAttribute('indent');if(i&&d==e||r&&d<e||s&&d>e){if(!l||t.mapper.toViewElement(c))return c;c=c[a];continue}if(!o)return null;c=c[a]}return null}function s(e,t){return e&&t&&('ul'==e.name||'ol'==e.name)&&e.name==t.name?y.a.mergeContainers(_.a.createAfter(e)):null}function l(e,t,a,n){const o=t.parent;let i=r(e,{sameIndent:!0,smallerIndent:!0,checkAllSiblings:!0}),l;if(i&&i.getAttribute('indent')==e.getAttribute('indent')){const e=a.toViewElement(i);l=y.a.breakContainer(_.a.createAfter(e))}else i=e.previousSibling,l=i&&'listItem'==i.name?i.getAttribute('indent')<e.getAttribute('indent')?a.toViewPosition(f.a.createAt(i,'end')):n.parent.is('ul')||n.parent.is('ol')?y.a.breakContainer(n):n:a.toViewPosition(f.a.createBefore(e));l=m(l),y.a.insert(l,o);const d=r(e,{biggerIndent:!0,getNext:!0,isMapped:!0,mapper:a});if(d){const e=a.toViewElement(d);y.a.breakContainer(_.a.createBefore(e));const n=_.a.createBefore(e.parent),o=c(d,!1),i=a.toViewElement(o),r=y.a.breakContainer(_.a.createAfter(i)),s=new k.a(n,r),l=_.a.createAt(t,'end');y.a.move(s,l)}s(o,o.nextSibling),s(o.previousSibling,o)}function d(e,t,a,n,o){const i=r(t,{sameIndent:!0,smallerIndent:!0,checkAllSiblings:!0,indent:e}),l=i?i.getAttribute('indent'):null;let d;if(!i)d=a;else if(l==e){const e=o.toViewElement(i).parent;d=_.a.createAfter(e)}else{const e=f.a.createAt(i,'end');d=o.toViewPosition(e)}d=m(d);for(const i of[...n.getChildren()])(i.is('ul')||i.is('ol'))&&(d=y.a.move(k.a.createOn(i),d).end,s(i,i.nextSibling),s(i.previousSibling,i))}function c(e,t){const a=e.getAttribute('indent'),n=t?'previousSibling':'nextSibling';let o=e;for(;e[n]&&e[n].is('listItem')&&e[n].getAttribute('indent')>=a;)e=e[n],e.getAttribute('indent')==a&&(o=e);return o}function m(e){return e.getLastMatchingPosition((e)=>e.item.is('uiElement'))}t.h=function(e,t,a,n){if(a.test(t.item,'insert')&&a.test(t.item,'addAttribute:type')&&a.test(t.item,'addAttribute:indent')){a.consume(t.item,'insert'),a.consume(t.item,'addAttribute:type'),a.consume(t.item,'addAttribute:indent');const e=t.item,o=i(e,n.mapper),r=n.mapper.toViewPosition(f.a.createBefore(e));l(e,o,n.mapper,r)}},t.g=function(e,t,a,n){if(!a.consume(t.item,'changeAttribute:type'))return;const o=n.mapper.toViewElement(t.item);y.a.breakContainer(_.a.createBefore(o)),y.a.breakContainer(_.a.createAfter(o));let i=o.parent;const r='numbered'==t.attributeNewValue?'ol':'ul';i=y.a.rename(i,r),s(i,i.nextSibling),s(i.previousSibling,i)},t.j=function(e,t,a,n){if(!a.consume(t.item,'remove'))return;let o=n.mapper.toViewPosition(t.sourcePosition);o=o.getLastMatchingPosition((e)=>!e.item.is('li'));const i=o.nodeAfter;y.a.breakContainer(_.a.createBefore(i)),y.a.breakContainer(_.a.createAfter(i));const r=i.parent,l=r.previousSibling,c=k.a.createOn(r);y.a.remove(c),l&&l.nextSibling&&s(l,l.nextSibling),d(t.item.getAttribute('indent')+1,t.sourcePosition,c.start,i,n.mapper),'$graveyard'==t.item.root.rootName&&n.mapper.unbindModelElement(t.item)},t.f=function(e,t,a,n){if(!a.consume(t.item,'changeAttribute:indent'))return;const o=n.mapper.toViewElement(t.item);y.a.breakContainer(_.a.createBefore(o)),y.a.breakContainer(_.a.createAfter(o));const i=o.parent,r=i.previousSibling,c=k.a.createOn(i);y.a.remove(c);let m;r&&r.nextSibling&&(m=s(r,r.nextSibling)),m||(m=c.start),d(t.attributeOldValue+1,t.range.start,c.start,o,n.mapper),l(t.item,o,n.mapper,m)},t.k=function(e,t,a,n){if('listItem'!=t.item.name){let e=n.mapper.toViewPosition(t.range.start);const a=[];for(;('ul'==e.parent.name||'ol'==e.parent.name)&&(e=y.a.breakContainer(e),'li'==e.parent.name);){const t=e,n=_.a.createAt(e.parent,'end');if(!t.isEqual(n)){const e=y.a.remove(new k.a(t,n));a.push(e)}e=_.a.createAfter(e.parent)}if(0<a.length){for(let t=0;t<a.length;t++){const n=e.nodeBefore,o=y.a.insert(e,a[t]);if(e=o.end,0<t){const t=s(n,n.nextSibling);t&&t.parent==n&&e.offset--}}s(e.nodeBefore,e.nodeAfter)}}},t.i=function(e,t,a,n){if(!t.item.is('listItem')){const e=n.mapper.toViewPosition(t.sourcePosition),a=e.nodeBefore,o=e.nodeAfter;s(a,o)}},t.l=function(e,t,a,n){if(a.consume(t.input,{name:!0})){const e=new g.a('listItem');t.indent=t.indent?t.indent:0,e.setAttribute('indent',t.indent);const o=t.input.parent&&'ol'==t.input.parent.name?'numbered':'bulleted';e.setAttribute('type',o),t.context.push(e),t.indent++;const i=new p.a;i.appendChildren(e);for(const o of t.input.getChildren()){const r=n.convertItem(o,a,t);'ul'==o.name||'ol'==o.name?i.appendChildren(Array.from(r.getChildren())):h.a.insert(f.a.createAt(e,'end'),r)}t.indent--,t.context.pop(),t.output=i}},t.a=function(e,t,a){if(a.test(t.input,{name:!0})){const e=Array.from(t.input.getChildren());for(const t of e)t.is('li')||t.remove()}},t.b=function(e,t,a){if(a.test(t.input,{name:!0})){if(0===t.input.childCount)return;const e=[...t.input.getChildren()];let a=!1,n=!0;for(const t of e)!a||t.is('ul')||t.is('ol')||t.remove(),t.is('text')?(n&&(t.data=t.data.replace(/^\s+/,'')),(!t.nextSibling||t.nextSibling.is('ul')||t.nextSibling.is('ol'))&&(t.data=t.data.replace(/\s+$/,''))):(t.is('ul')||t.is('ol'))&&(a=!0),n=!1}},t.e=function(e,t){const a=t.modelPosition.nodeBefore;if(a&&a.is('listItem')){const e=t.mapper.toViewElement(a),n=e.getAncestors().find((e)=>e.is('ul')||e.is('ol')),o=new w.a({startPosition:_.a.createAt(e,0)});for(const e of o)if('elementStart'==e.type&&e.item.is('li')){t.viewPosition=e.previousPosition;break}else if('elementEnd'==e.type&&e.item==n){t.viewPosition=e.nextPosition;break}}},t.m=function(e,t){const a=t.viewPosition,n=a.parent,o=t.mapper;if('ul'==n.name||'ol'==n.name){if(!a.isAtEnd){const e=o.toModelElement(a.nodeAfter);t.modelPosition=f.a.createBefore(e)}else{const e=o.toModelElement(a.nodeBefore),n=o.getModelLength(a.nodeBefore);t.modelPosition=f.a.createBefore(e).getShiftedBy(n)}e.stop()}else if('li'==n.name&&a.nodeBefore&&('ul'==a.nodeBefore.name||'ol'==a.nodeBefore.name)){const i=o.toModelElement(n);let r=1,s=a.nodeBefore;for(;s&&(s.is('ul')||s.is('ol'));)r+=o.getModelLength(s),s=s.previousSibling;t.modelPosition=f.a.createBefore(i).getShiftedBy(r),e.stop()}},t.c=function(e){return(t,a,i,r)=>{if('transparent'!=r.type)if('remove'==a){const t=i.range.end.offset-i.range.start.offset,a=i.sourcePosition._getTransformedByInsertion(i.range.start,t,!0);n(a,e,r),o(a,!1,e,r)}else if('move'==a){const t=i.range.end.offset-i.range.start.offset,a=i.sourcePosition._getTransformedByInsertion(i.range.start,t,!0);n(a,e,r),o(a,!1,e,r),n(i.range.start,e,r),o(i.range.start,!1,e,r),n(i.range.end,e,r),o(i.range.end,!0,e,r)}else if('rename'==a&&'listItem'==i.oldName&&'listItem'!=i.newName){const t=i.element;e.enqueueChanges(()=>{r.removeAttribute(t,'indent').removeAttribute(t,'type')});const a=f.a.createAfter(i.element);n(a,e,r)}else'insert'==a&&(n(i.range.start,e,r),o(i.range.start,!1,e,r),n(i.range.end,e,r),o(i.range.end,!0,e,r))}},t.d=function(e,[t,a]){let n=t.is('documentFragment')?t.getChild(0):t;if(n&&n.is('listItem')){const e=a.getFirstPosition();let t=null;if(e.parent.is('listItem')?t=e.parent:e.nodeBefore&&e.nodeBefore.is('listItem')&&(t=e.nodeBefore),t){const e=t.getAttribute('indent');if(0<e)for(;n&&n.is('listItem');)n.setAttribute('indent',n.getAttribute('indent')+e),n=n.nextSibling}}};var u=a(560),p=a(39),g=a(5),f=a(1),h=a(23),b=a(47),_=a(22),k=a(38),w=a(67),y=a(93)},function(e,t,a){'use strict';function n(){const e=!this.isEmpty&&('ul'==this.getChild(0).name||'ol'==this.getChild(0).name);return this.isEmpty||e?0:null}var o=a(47);class i extends o.a{constructor(e,t){super('li',e,t),this.getFillerOffset=n}}t.a=i},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 17h10v-1H7v1zM6 4v1h13V4H6zm1 6v1h11v-1H7zM2 2.5c0 .277.223.5.5.5H3v3.5a.499.499 0 1 0 1 0v-4c0-.277-.223-.5-.5-.5h-1c-.277 0-.5.223-.5.5zM2.5 8a.499.499 0 1 0 0 1H4v1H2.5c-.277 0-.5.223-.5.5v2c0 .277.223.5.5.5h2a.499.499 0 1 0 0-1H3v-1h1.5a.46.46 0 0 0 .188-.031.45.45 0 0 0 .28-.281A.461.461 0 0 0 5 10.5v-2a.46.46 0 0 0-.031-.187.45.45 0 0 0-.282-.282.463.463 0 0 0-.125-.03H2.5V8zm2.352 10.853a.493.493 0 0 0 .148-.35v-4.005A.493.493 0 0 0 4.505 14h-2.01a.494.494 0 0 0-.495.5c0 .268.222.5.495.5H4v1H2.495a.494.494 0 0 0-.495.5c0 .268.222.5.495.5H4v1H2.495a.494.494 0 0 0-.495.5c0 .268.222.5.495.5h2.01a.49.49 0 0 0 .351-.146z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 16v1h10v-1H6zM6 4v1h12V4H6zm0 6v1h11v-1H6zM1 4.5C1 3.672 1.666 3 2.5 3 3.328 3 4 3.666 4 4.5 4 5.328 3.334 6 2.5 6 1.672 6 1 5.334 1 4.5zm0 6C1 9.672 1.666 9 2.5 9c.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm0 6c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z" fill="#454545" fill-rule="evenodd"/></svg>'}])['default']});
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NewsForm_vue__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NewsForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NewsForm_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'news',
  components: {
    NewsForm: __WEBPACK_IMPORTED_MODULE_0__NewsForm_vue___default.a
  }
});

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(519)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"News.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(694);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(520)("45c0a9d5", content, true);

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "dashboard"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  })]), _vm._v(" "), _c('news-form')], 1)])
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=4.b0a13ab59b3c10255a14.js.map