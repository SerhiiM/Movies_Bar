console.log('TARGET : ',process.env.TARGET)

module.exports = process.env.TARGET === 'desktop'
? require('./electron.config.js')
: require('./webpack.config.js')