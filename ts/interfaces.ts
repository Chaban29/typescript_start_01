interface User {
  name: string;
  ['last name']: string;
  national: string;
  age?: number | boolean;
}

interface CustomUser {
  user: User;
  bill: number;
}
