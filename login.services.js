const { query } = require('../Database/database');
const bcrypt = require("bcrypt");
const moment = require("moment");

// service to register a user
async function registerUser(username, password, confirmPassword, email) {
    // sql to retrieve from database all existingUsers with the same username or email inputted
    const userCheckSql = "SELECT * FROM user WHERE username = ? OR email = ?";
    const existingUsers = await query(userCheckSql, [username, email]);

    // checks if user already exists
    if (existingUsers.length > 0) {
        throw new Error("User already exists");
    }

    // checks if password and confirmPassword match
    if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    // hashes the password for added security
    const hashedPassword = await bcrypt.hash(password, 12);

    const joinDate = moment().format('YYYY-MM-DD');
    // sql to input the username, password, email and joinDate into the database to register the user
    const sql = "INSERT INTO user (username, password, email, joinDate) VALUES (?, ?, ?, ?)";
    const result = await query(sql, [username, hashedPassword, email, joinDate]);

    return result.insertId;
}

// service to login a user
async function loginUser(username, password) {
    // retrieves the user with the inputted username from database
    const sql = "SELECT * FROM user WHERE username = ?";
    const users = await query(sql, [username]);

    // checks if user exists or not
    if (users.length === 0) {
        throw new Error("Invalid credentials");
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.Password);

    // checks if the passwords match
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    return {
        message: "Logged in successfully!",
        userId: user.userID
    };
}

// exports the functions
module.exports = {
    registerUser,
    loginUser
};