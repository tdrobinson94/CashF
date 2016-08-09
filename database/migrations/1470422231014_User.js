'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.table('users', (table) => {
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema
