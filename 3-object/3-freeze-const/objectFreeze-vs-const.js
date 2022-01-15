const user = {
    first_name: 'bolaji',
    last_name: 'ayodeji',
    contact: {
      email: 'hi@bolajiayodeji.com',
      telephone: 08109445504,
    }
  }
  user.address = '2970 Amsterdam';
  Object.freeze(user);
  user.last_name = 'Samson'; // this won't work, user is still immutable!
  user.contact.telephone = 81429; // this will work because the nested object is not frozen
  console.log(user);

  // const and Object.freeze() are not the same,
  // const prevents reassignment and Object.freeze() prevents mutability
