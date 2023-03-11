function getName() {
    return "Hello";
}

const getUserName = () => {
    return "Kamrul Hasan";
}

const getUserAge = () => {
    return "26";
}

const getCGPA = () => {
    return "3.69";
}
const getAddress = () => {
    return "Dhaka, Bangladesh";
}

const getFullName = () => {
    return "Kamrul Hasan";
}

// exports.name = getName;
// exports.userName = getUserName;
// exports.age = getUserAge;

//or

module.exports = {
    //functions
    getUserName,
    getUserAge,
    getCGPA,
    getAddress,
    getFullName
}

