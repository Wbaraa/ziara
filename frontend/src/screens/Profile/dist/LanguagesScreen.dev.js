"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var RNLocalize = _interopRequireWildcard(require("react-native-localize"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// ziara/frontend/src/i18n.js
// هنا نتأكد أن i18n ليس undefined
// قائمة الترجمات
_i18nJs["default"].translations = {
  en: {
    languageLabel: 'English'
  },
  ar: {
    languageLabel: 'العربية'
  } // ... أضف ترجمات أخرى إن أردت

};
_i18nJs["default"].fallbacks = true; // استخدام الإنجليزية إذا لم توجد ترجمة
// استخرج رمز اللغة من إعداد الجهاز

var locales = RNLocalize.getLocales();

if (Array.isArray(locales) && locales.length > 0) {
  _i18nJs["default"].locale = locales[0].languageTag.split('-')[0]; // 'en-US' → 'en'
}

var _default = _i18nJs["default"];
exports["default"] = _default;