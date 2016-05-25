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

var _co = require('co');

var _db = require('./db.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
    (0, _inherits3.default)(List, _Component);

    function List() {
        (0, _classCallCheck3.default)(this, List);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
    }

    (0, _createClass3.default)(List, [{
        key: 'del',
        value: function del(id) {
            console.log(id);
            (0, _co.co)(_regenerator2.default.mark(function _callee() {
                var state;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _db.remove)(id);

                            case 2:
                                state = _context.sent;

                                console.log(state, 111);
                                this.props.getAll();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }).bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _data = this.props._data;

            return _react2.default.createElement(
                'div',
                { className: 'trace' },
                _data.name || _data.content,
                _react2.default.createElement(
                    'span',
                    { className: 'list-del-btn', onClick: function onClick() {
                            _this2.del(_data.id);
                        } },
                    '删除'
                )
            );
        }
    }]);
    return List;
}(_react.Component);

var Brief = function (_Component2) {
    (0, _inherits3.default)(Brief, _Component2);

    function Brief() {
        (0, _classCallCheck3.default)(this, Brief);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Brief).apply(this, arguments));
    }

    (0, _createClass3.default)(Brief, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var list = _props.list;
            var getAll = _props.getAll;
            // console.log(list);

            return _react2.default.createElement(
                'div',
                { className: 'brief' },
                list.map(function (one, index) {
                    return _react2.default.createElement(List, { key: index, _data: one, getAll: getAll });
                })
            );
        }
    }]);
    return Brief;
}(_react.Component);

Brief.propTypes = {};

exports.default = Brief;
//# sourceMappingURL=brief.js.map
