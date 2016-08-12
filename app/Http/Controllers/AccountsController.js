'use strict';


const Account = use("App/Model/Account");

class AccountsController {

  * show (request, response){
    const input = request.only('user_id');
    console.log(input);
    // const newAccount = yield Account.findBy('user_id', input.user_id);
    const newAccount = yield Account.query().where('user_id', input.user_id).fetch();
    return response.json(newAccount.toJSON());
  }

  * store (request, response){
    const input = request.only('bank', 'account_type', 'account_title', 'account_balance');
    const theUser = request.authUser;
    input.user_id = theUser.id;

    const newAccount = yield Account.create(input);
    return response.json(newAccount.toJSON());
  }

}

module.exports = AccountsController;
