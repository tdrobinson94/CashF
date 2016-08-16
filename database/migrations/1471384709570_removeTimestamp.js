'use strict'

const Schema = use('Schema')

class RemoveTimestampSchema extends Schema {

  up () {
    this.table('remove_timestamp', (table) => {
      table.dropColumn('created_at')
    })
  }

  down () {
    this.table('remove_timestamp', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = RemoveTimestampSchema
