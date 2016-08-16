'use strict'

const Schema = use('Schema')

class AddtimestampSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
        table.dropColumns('created_at', 'updated_at')
        table.date('published_at')
    })
  }

  down () {
    this.table('addtimestamp', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddtimestampSchema
