'use strict'

const Model = require('trails-model')

/**
 * @module Task
 * @description TODO document Model
 */
module.exports = class Task extends Model {

  static config () {
  }

  static schema () {
  	return {
      name: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
        required: true
      }
    }

  }
}
