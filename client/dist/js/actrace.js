'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _notification = require('./notification.js');

var _notification2 = _interopRequireDefault(_notification);

var _brief = require('./brief.js');

var _brief2 = _interopRequireDefault(_brief);

var _detail = require('./detail.js');

var _detail2 = _interopRequireDefault(_detail);

var _add = require('./add.js');

var _add2 = _interopRequireDefault(_add);

var _intro = require('./intro.js');

var _intro2 = _interopRequireDefault(_intro);

var _db = require('./db.js');

var _co = require('co');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACT = function (_Component) {
    (0, _inherits3.default)(ACT, _Component);

    function ACT(props) {
        (0, _classCallCheck3.default)(this, ACT);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ACT).call(this, props));

        _this.state = {
            list: [],
            detail: {}
        };
        // tips.show('fuck!');
        return _this;
    }

    (0, _createClass3.default)(ACT, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.refs.intro.show();
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getAll();
        }
    }, {
        key: 'showAdd',
        value: function showAdd() {
            this.refs.add.show();
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            (0, _co.co)(_regenerator2.default.mark(function _callee() {
                var _all;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _db.all)();

                            case 2:
                                _all = _context.sent;

                                this.setState({
                                    list: _all,
                                    detail: _all[0]
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }).bind(this, null));
        }
    }, {
        key: 'toDetail',
        value: function toDetail(obj) {
            this.setState({
                detail: obj
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state;
            var list = _state.list;
            var detail = _state.detail;

            return _react2.default.createElement(
                'div',
                { className: 'actrace' },
                _react2.default.createElement(_intro2.default, { ref: 'intro' }),
                _react2.default.createElement(
                    'div',
                    { className: 'add-btn', onClick: function onClick() {
                            _this2.showAdd();
                        } },
                    'ADD'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'warp' },
                    _react2.default.createElement(_brief2.default, { list: list, getAll: function getAll() {
                            return _this2.getAll();
                        }, toDetail: function toDetail(data) {
                            return _this2.toDetail(data);
                        } }),
                    _react2.default.createElement(_detail2.default, { detail: detail })
                ),
                _react2.default.createElement(_add2.default, { ref: 'add', getAll: function getAll() {
                        return _this2.getAll();
                    } })
            );
        }
    }]);
    return ACT;
}(_react.Component);

exports.default = ACT;
//# sourceMappingURL=actrace.js.map
