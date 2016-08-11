'use strict';


const Account = use("App/Model/Account");

class AccountsController {

  * store (request, response){
    const input = request.only('bank', 'account_type', 'account_title', 'account_balance');
    const theUser = request.authUser;
    input.user_id = theUser.id;

    const newAccount = yield Account.create(input);
    return response.json(newAccount.toJSON());
  }

}

module.exports = AccountsController;
