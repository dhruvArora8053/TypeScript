// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

/*
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  //   tuple --> I want to have an array with exactly 2 elements, first should be a number, and secons should be a string, note: push is allowed
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author "],
};
*/

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

// let favouriteActivities: any[];
let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) ||Error!!||
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
