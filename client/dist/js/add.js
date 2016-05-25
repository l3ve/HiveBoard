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

var _db = require('./db.js');

var _co = require('co');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = function (_Component) {
    (0, _inherits3.default)(Add, _Component);

    function Add(props) {
        (0, _classCallCheck3.default)(this, Add);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Add).call(this, props));

        _this.state = {
            _cls: 'display'
        };
        return _this;
    }

    (0, _createClass3.default)(Add, [{
        key: 'show',
        value: function show() {
            this.setState({
                _cls: 'display'
            });
        }
    }, {
        key: 'hidden',
        value: function hidden() {
            this.setState({
                _cls: 'hidden'
            });
        }
    }, {
        key: 'insert',
        value: function insert() {
            var _name = this.refs['input_name'].value;
            var _href = this.refs['input_href'].value;
            var _chapter = this.refs['input_chapter'].value;
            var _img = this.refs['input_img'].value;
            var getAll = this.props.getAll;

            (0, _co.co)(_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _db.insert)({
                                    'name': _name,
                                    'href': _href,
                                    'img': _img,
                                    'id': new Date().getTime()
                                });

                            case 2:
                                getAll();
                                this.hidden();

                            case 4:
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

            var _cls = this.state._cls;

            return _react2.default.createElement(
                'div',
                { className: 'add ' + _cls },
                _react2.default.createElement(
                    'div',
                    { className: 'all_input' },
                    _react2.default.createElement(
                        'div',
                        { className: 'name-wrap' },
                        _react2.default.createElement('input', { ref: 'input-name', id: 'name', className: 'name', type: 'text' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'name' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '名字'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'href-wrap' },
                        _react2.default.createElement('input', { ref: 'input-href', id: 'href', className: 'href', type: 'text' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'href' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '连接'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'chapter-wrap' },
                        _react2.default.createElement('input', { ref: 'input-chapter', id: 'chapter', className: 'chapter', type: 'text' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'chapter' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '章节'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'img-wrap' },
                        _react2.default.createElement('input', { ref: 'input-img', id: 'img', className: 'img', type: 'text' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'img' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '图片'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { onClick: function onClick() {
                            _this2.insert();
                        } },
                    '一发入魂'
                )
            );
        }
    }]);
    return Add;
}(_react.Component);

Add.propTypes = {};

exports.default = Add;
//# sourceMappingURL=add.js.map
