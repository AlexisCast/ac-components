import React from 'react';

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

export { Thing };
//# sourceMappingURL=ac-components.esm.js.map
