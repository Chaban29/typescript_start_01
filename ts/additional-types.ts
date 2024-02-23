// Any

let test: any = 123;
test = '123';
test.map();

// Unknown

let test2: unknown = true;

let string_2: string = test;

// Void

const foo = (arg: string, next: number): void => {
  // return 100;
};
