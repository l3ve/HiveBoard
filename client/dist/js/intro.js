'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function (_Component) {
    (0, _inherits3.default)(Intro, _Component);

    function Intro(props) {
        (0, _classCallCheck3.default)(this, Intro);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Intro).call(this, props));

        _this.state = {
            display: 'hidden'
        };
        return _this;
    }

    (0, _createClass3.default)(Intro, [{
        key: 'show',
        value: function show() {
            var _this2 = this;

            this.setState({
                display: 'start'
            });
            this.animationEnd(this.refs['intro-last'], function (dom) {
                _this2.setState({
                    display: 'during'
                }, function () {
                    _this2.animationEnd(_this2.refs['intro-logo'], function (dom) {
                        _this2.setState({
                            display: 'hidden'
                        });
                    });
                });
            });
        }
    }, {
        key: 'animationEnd',
        value: function animationEnd(dom) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

            dom.addEventListener('webkitAnimationEnd', function () {
                callback(this);
                dom = null;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var display = this.state.display;

            return _react2.default.createElement(
                'div',
                { ref: 'intro-logo', className: 'intro animated ' + display },
                _react2.default.createElement(
                    'span',
                    { className: 'f1 animated' },
                    'A'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'f2 animated' },
                    'C'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'f3 animated' },
                    'T'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'f4 animated' },
                    'r'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'f5 animated' },
                    'a'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'f6 animated' },
                    'c'
                ),
                _react2.default.createElement(
                    'span',
                    { ref: 'intro-last', className: 'f7 animated' },
                    'e'
                )
            );
        }
    }]);
    return Intro;
}(_react.Component);

exports.default = Intro;
//# sourceMappingURL=intro.js.map
