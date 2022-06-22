const makeReq = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    location === "Google"
      ? resolve("Google says Hi")
      : reject("We can only talk to google ");
  });
};
const processReq = (response) => {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
};

// makeReq("Google")
//   .then((response) => {
//     console.log("Response resolved");
//     return processReq(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
const doWork = async () => {
  //replacement of promise chaining
  //to catch the errors use try catch block
  try {
    const res = await makeReq("Google");
    const proc = await processReq(res);
    console.log(proc);
  } catch (err) {
    console.error(err);
  }
};
doWork();
