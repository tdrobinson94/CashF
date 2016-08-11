'use strict'

const Schema = use('Schema')

class AdduseridSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      table.integer('user_id')
    })
  }

  down () {
    this.table('accounts', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AdduseridSchema
