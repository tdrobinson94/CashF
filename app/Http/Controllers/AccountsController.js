'use strict';

class AccountsController {

  * store (request, response){
    const input = request.only('bank', 'account_type', 'account_title', 'account_balance');

    const newAccount = yield User.create(input);

    return response.json(newUser.toJSON());


  }

}

module.exports = AccountsController;
