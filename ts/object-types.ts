const user: object = {
  name: 'Roman',
  ['last name']: 'Chaban',
  age: 23,
  dateOfBirthday: null,
};

user.valueOf;
user.toString;

const secondaryUser: {
  name: string;
  surName: string;
  age?: number;
} = {
  name: 'Roman',
  surName: 'Chaban',
  age: 23,
};

secondaryUser.age = 30;

console.log(secondaryUser);
