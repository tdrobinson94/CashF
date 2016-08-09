'use strict'

const Schema = use('Schema')

class AccountsSchema extends Schema {

  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('bank', 254)
      table.string('account_type', 254)
      table.string('account_title', 254)
      table.bigInteger('account_balance')
      table.integer('user_id').references('id').inTable('User')
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }

}

module.exports = AccountsSchema
