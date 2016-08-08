'use strict';

const User = use('App/Model/User');

const Hash = use('Hash');


class UserController {


  * show (request, response){
    return response.json(request.authUser);
  }


  * store (request, response){
    const input = request.only('email', 'password', 'username', 'firstname', 'lastname');
    input.password = yield Hash.make(input.password);

    const newUser = yield User.create(input);
    newUser.access_token = yield request.auth.generate(newUser);
    return response.json(newUser.toJSON());
  }

  * login (request, response){
    const input = request.only('username','password');

    try {
      const user = yield User.findBy('username', input.username)
      const verify = yield Hash.verify(input.password, user.password)

      if (!verify) { throw new Error('Password Mismatch')};

      return response.json(user.toJSON());

    } catch (e){
      return response.status(401).json({ error: e.message });
    }
  }
}

module.exports = UserController;
