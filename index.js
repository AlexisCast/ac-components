
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ac-components.cjs.production.min.js')
} else {
  module.exports = require('./ac-components.cjs.development.js')
}
