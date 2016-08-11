'use strict'

const Schema = use('Schema')

class DropUserColumnSchema extends Schema {

  up () {
    this.table("accounts", (table) => {
      // table.dropColumn('user_id');
    })
  }

  down () {
    this.table('drop_user_column', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = DropUserColumnSchema
