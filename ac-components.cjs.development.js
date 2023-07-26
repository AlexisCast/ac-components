'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
const Thing = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", null, children || 'the snozzberries taste like snozzberries');
};

exports.Thing = Thing;
//# sourceMappingURL=ac-components.cjs.development.js.map
