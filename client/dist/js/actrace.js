'use strict';

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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _notification = require('./dist/js/notification.js');

var _notification2 = _interopRequireDefault(_notification);

var _Intro = require('./dist/js/Intro.js');

var _Intro2 = _interopRequireDefault(_Intro);

var _db = require('./dist/js/db.js');

var _co = require('co');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _co.co)(_regenerator2.default.mark(function _callee() {
    var _all, _some, c;

    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _db.all)();

                case 2:
                    _all = _context.sent;
                    _context.next = 5;
                    return (0, _db.get)("123").then(function (val) {
                        // console.log(val);
                    });

                case 5:
                    _some = _context.sent;
                    _context.next = 8;
                    return [_some, _all];

                case 8:
                    c = _context.sent;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

// console.log(_all);

var ACT = function (_Component) {
    (0, _inherits3.default)(ACT, _Component);

    function ACT(props) {
        (0, _classCallCheck3.default)(this, ACT);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ACT).call(this, props));
        // tips.show('fuck!');
    }

    (0, _createClass3.default)(ACT, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refs.intro.show();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Intro2.default, { ref: 'intro' })
            );
        }
    }]);
    return ACT;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(ACT, null), document.querySelector('.actrace'));
//# sourceMappingURL=actrace.js.map
