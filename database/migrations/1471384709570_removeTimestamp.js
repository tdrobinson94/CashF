'use strict'

const Schema = use('Schema')

class RemoveTimestampSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      // table.timestamps('created_at', 'updated_at')
    })
  }

  down () {
    this.table('accounts', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = RemoveTimestampSchema
