'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('username', 20).notNullable().unique()
      table.string('firstname')
      table.string('lastname')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema
