'use strict';


const Account = use("App/Model/Account");

class AccountsController {

  * show (request, response){
    const input = request.only('user_id');
    console.log(input);
    // const newAccount = yield Account.findBy('user_id', input.user_id);
    const accounts = yield Account.query().where('user_id', input.user_id).fetch();
    return response.json(accounts.toJSON());
  }

  * store (request, response){
    const input = request.only('bank', 'account_type', 'account_title', 'account_balance');
    const theUser = request.authUser;
    input.user_id = theUser.id;

    const newAccount = yield Account.create(input);
    return response.json(newAccount.toJSON());
  }

  * delete (request, response){
    const input = request.only('id');
    input.user_id = request.authUser.id;
    const account = yield Account.query().where(input).delete();
    return response.status(204).json();
  }

}

module.exports = AccountsController;
