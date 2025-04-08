const checkEmptyParam = require('../utils/checkEmptyParam');

const users = []

class User {
    constructor(name, email, password) {
        this.id = users.length + 1;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    create() {
        users.push(this);
    }

    static read() {
        const result = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }
        });

        return result;
    }

    static readOne(id) {
        const user = users.find(user => user.id === id);

        if (!user) {
            return false;
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        };
    }

    static update(id, name, email, password) {
        const user = users.find(user => user.id === id);

        if (!user) {
            return false;
        }

        user.name = checkEmptyParam(name) ? user.name : name;
        user.email = checkEmptyParam(email) ? user.email : email;
        user.password = checkEmptyParam(password) ? user.password : password;
        return user;
    }

    static delete(id) {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            return false;
        }
        else {
            users.splice(index, 1);
            return true;
        }
    }
}

module.exports = User;
