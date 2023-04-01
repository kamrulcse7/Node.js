
// console.log(__dirname); // check current dirictory name
// console.log(__filename); // check file name 

// os //

// const os = require("os");
// console.log(os.userInfo()); // user info check
// console.log(os.homedir()); //pc homedir check
// console.log(os.hostname()); //hostname check
// console.log(os.totalmem()); // total memory check
// console.log(os.freemem()); // free memory check



// we can use only pc userInfo then apply this way
// const {userInfo, totalmem} = require("os");
// console.log(userInfo());
// console.log(totalmem());

// path //
const path = require("path");
// console.log(path.extname("info.txt")); // file name extension check

const joinName = path.join(__dirname + "/views");
const joinfileName = path.join(__dirname + "/../views");
console.log(joinName);
console.log(joinfileName);






