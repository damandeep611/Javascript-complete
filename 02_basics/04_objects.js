// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "omni",
      lastname: "man",
    },
  },
};

// console.log(regularUser.fullName?.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// destructuring

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);
