'use strict';


const Account = use("App/Model/Account");

class AccountsController {

  * show (request, response){
    const input = request.only('user_id');
    console.log(input);
    const accounts = yield Account.query().where('user_id', input.user_id).limit(1).fetch();
    return response.json(accounts.toJSON());
  }

  * store (request, response){
    const input = request.only('bank', 'account_type', 'account_title', 'account_balance');
    const theUser = request.authUser;
    input.user_id = theUser.id;
    // take user account id and check the databse for accounts
    // if they have an account, then respond with an error
    // TODO: Figure out how to see if an accout already exists.
    // let hasAccount = yield Account.query().where('user_id', input.user_id).limit(1).count()[0]['id'];
    // if (hasAccount > 0){
    //   return response.json({ error: 'User already has an account! '});
    // }

    const newAccount = yield Account.create(input);
    let hasAccount = yield newAccount.query().where('user_id', input.user_id).limit(1).fetch();
    return response.json(hasAccount.toJSON());
  }

  * delete (request, response){
    const input = request.only('id');
    input.user_id = request.authUser.id;
    // const account = yield Account.query().where(input).delete();
    const account = yield Account.findBy('id', request.param('id'));
    yield account.delete();
    console.log(account);
    yield response.status(204).json();
  }

}

module.exports = AccountsController;
