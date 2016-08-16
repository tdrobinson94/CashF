'use strict'

const Schema = use('Schema')

class RemoveTimestampSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      table.dropColumn('created_at')
    })
  }

  down () {
    this.table('accounts', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = RemoveTimestampSchema
