const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // Database calls, cryptography, network
  setTimeout(function () {
    // console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log("promise Consumed");
});

// promise without storing in variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("2nd async task in progress");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("async 2nd resolved");
});

// ? promise 3rd
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "superman", email: "superman@lois.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  // console.log(user);
});

// ? using reject in promise

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "martian", password: "mars" });
    } else {
      reject("something went wrong is a error");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    // console.log("the promise is either resolved or rejected");
  });

// ?promise 5 - the user of async with try and catch block
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "martian", password: "mars" });
    } else {
      reject("something went wrong is a error");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhar")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
