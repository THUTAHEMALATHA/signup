function signup(userName) {
    let users = ["admin", "user1", "testuser"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}
// 
function login(userName, password) {
    let users = ["admin", "user1", "testuser"];
    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== "Emp@123") {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}