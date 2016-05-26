'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
            _cls: 'display',
            _nameCls: 'empty',
            _hrefCls: 'empty',
            _chapterCls: 'empty',
            _imgCls: 'empty'
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
        key: 'handleChange',
        value: function handleChange(ref) {
            if (this.refs[ref].value.length != 0) {
                this.setState((0, _defineProperty3.default)({}, '_' + ref + 'Cls', 'fill'));
            } else {
                this.setState((0, _defineProperty3.default)({}, '_' + ref + 'Cls', 'empty'));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state;
            var _cls = _state._cls;
            var _nameCls = _state._nameCls;
            var _hrefCls = _state._hrefCls;
            var _chapterCls = _state._chapterCls;
            var _imgCls = _state._imgCls;

            return _react2.default.createElement(
                'div',
                { className: 'add ' + _cls },
                _react2.default.createElement(
                    'div',
                    { className: 'all_input' },
                    _react2.default.createElement(
                        'div',
                        { className: 'name-wrap' },
                        _react2.default.createElement('input', { ref: 'name', onChange: function onChange() {
                                _this2.handleChange('name');
                            }, id: 'name', className: 'name ' + _nameCls, type: 'text' }),
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
                        _react2.default.createElement('input', { ref: 'href', onChange: function onChange() {
                                _this2.handleChange('href');
                            }, id: 'href', className: 'href ' + _hrefCls, type: 'text' }),
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
                        _react2.default.createElement('input', { ref: 'chapter', onChange: function onChange() {
                                _this2.handleChange('chapter');
                            }, id: 'chapter', className: 'chapter ' + _chapterCls, type: 'text' }),
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
                        _react2.default.createElement('input', { ref: 'img', onChange: function onChange() {
                                _this2.handleChange('img');
                            }, id: 'img', className: 'img ' + _imgCls, type: 'text' }),
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
                    { className: 'save-btn', onClick: function onClick() {
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
