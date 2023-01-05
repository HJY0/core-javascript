/* eslint no-unused-vars: off */

/* function sumTo(n) {
  if (n==1) {
    return n;
  } else {
    
  }
} */


function sumTo(n) {
  let result = 0;

  for (let i=1; i<n; i++) {
    result = result + i;
  }

  return result;
}


let user = {
  name: 'john',
  surname: 'smith'
}

user.name = 'pete'

// delete user.name;

for (let key in user) {

  console.log(user.name);
}


