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

var Detail = function (_Component) {
    (0, _inherits3.default)(Detail, _Component);

    function Detail() {
        (0, _classCallCheck3.default)(this, Detail);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Detail).apply(this, arguments));
    }

    (0, _createClass3.default)(Detail, [{
        key: 'render',
        value: function render() {
            var detail = this.props.detail;

            console.log(detail);
            return _react2.default.createElement(
                'div',
                { key: detail.id, className: 'detail' },
                _react2.default.createElement(
                    'p',
                    { className: 'name' },
                    _react2.default.createElement(
                        'a',
                        { href: detail.href, target: '_back' },
                        detail.name
                    )
                ),
                _react2.default.createElement('img', { src: detail.img, alt: 'bg' })
            );
        }
    }]);
    return Detail;
}(_react.Component);

Detail.propTypes = {};

exports.default = Detail;
//# sourceMappingURL=detail.js.map
