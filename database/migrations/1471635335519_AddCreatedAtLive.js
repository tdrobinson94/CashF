'use strict'

const Schema = use('Schema')
const Env = use('Env')

class AddCreatedAtLiveSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      // alter accounts table
      if( Env.get('NODE_ENV') !== 'development'){
        table.timestamps()
      }
    })
  }

  down () {
    this.table('accounts', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddCreatedAtLiveSchema
