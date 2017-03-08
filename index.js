'use strict'

const Trailpack = require('trailpack')

module.exports = class MyTrailpack extends Trailpack {

  /**
   * TODO document method
   */
  validate () {

    this.app.config.log.logger.info('My Trailpack is valid')
    return Promise.resolve()

  }

  /**
   * TODO document method
   */
  configure () {
    this.app.log.info('My Trailpack is configured')
    return Promise.resolve()

  }

  /**
   * TODO document method
   */
  initialize () {
    this.app.log.info('My Trailpack is initialized')
    return Promise.resolve()
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

