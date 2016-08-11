'use strict';

const Lucid = use('Lucid');

const Token = use('App/Model/Token');
// const Account = use('App/Modle/Account')

class User extends Lucid {

  static get hidden(){
    return ['password'];
  }

  static get rules () {
      return {
        username: 'required|unique:users',
        email: 'required|email|unique:users',
        password: 'required',
      }
    }

  apiTokens(){
    return this.hasMany(Token);
  }

  // accounts (){
  //   return this.hasMany(Account);
  // }

}

module.exports = User;
