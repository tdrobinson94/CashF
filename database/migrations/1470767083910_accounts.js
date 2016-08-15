'use strict'

const Schema = use('Schema')

class AccountsSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      table.date('published_date')
    })
  }

  down () {
    this.drop('accounts')
  }

}

module.exports = AccountsSchema
