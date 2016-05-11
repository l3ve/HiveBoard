'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notification = require('./notification.jsx');

var _notification2 = _interopRequireDefault(_notification);

var _db = require('./db.js');

var _co = require('co');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


(0, _co.co)(regeneratorRuntime.mark(function _callee() {
    var b, _all, a, c, d;

    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _db.insert)('123', {
                        'content': 'Just Fun'
                    }).then(function (val) {});

                case 2:
                    b = _context.sent;
                    _context.next = 5;
                    return (0, _db.all)();

                case 5:
                    _all = _context.sent;
                    _context.next = 8;
                    return (0, _db.get)(123);

                case 8:
                    a = _context.sent;
                    _context.next = 11;
                    return [a, b];

                case 11:
                    c = _context.sent;
                    _context.next = 14;
                    return (0, _db.get)();

                case 14:
                    d = _context.sent;

                case 15:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

var ACT = function (_Component) {
    _inherits(ACT, _Component);

    function ACT(props) {
        _classCallCheck(this, ACT);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ACT).call(this, props));
        // tips.show('fuck!');
    }

    _createClass(ACT, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'ACT'
            );
        }
    }]);

    return ACT;
}(Component);

ReactDOM.render(React.createElement(ACT, null), document.querySelector('body'));
//# sourceMappingURL=actrace.js.map
