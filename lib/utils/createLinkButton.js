'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unionClassNames = require('union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

var _selectionHasEntity = require('../utils/selectionHasEntity');

var _selectionHasEntity2 = _interopRequireDefault(_selectionHasEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (_ref) {
  var children = _ref.children;
  return function (_Component) {
    _inherits(linkButton, _Component);

    function linkButton() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, linkButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = linkButton.__proto__ || Object.getPrototypeOf(linkButton)).call.apply(_ref2, [this].concat(args))), _this), _this.activate = function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this.props.addLink();
      }, _this.preventBubblingUp = function (event) {
        event.preventDefault();
      }, _this.styleIsActive = function () {
        return (0, _selectionHasEntity2.default)(_this.props.getEditorState());
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(linkButton, [{
      key: 'render',
      value: function render() {
        var theme = this.props.theme;

        var className = this.styleIsActive() ? (0, _unionClassNames2.default)(theme.button, theme.active) : theme.button;
        return _react2.default.createElement(
          'div',
          {
            className: theme.buttonWrapper,
            onMouseDown: this.preventBubblingUp
          },
          _react2.default.createElement('button', {
            className: className,
            onClick: this.activate,
            type: 'button',
            children: children
          })
        );
      }
    }]);

    return linkButton;
  }(_react.Component);
};