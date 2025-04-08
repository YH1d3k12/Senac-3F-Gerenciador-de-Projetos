const User = require('../models/user');

class UserController {
    static create(req, res) {
        const { name, email, password } = req.body;

        const user = new User(name, email, password);
        user.create();

        res.status(201).json(user);
    }

    static read(req, res) {
        const users = User.read();
        res.status(200).json(users);
    }

    static readOne(req, res) {
        const { id } = req.params;

        const user = User.readOne(parseInt(id));

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    }

    static update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const user = User.update(parseInt(id), name, email, password);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    }

    static delete(req, res) {
        const { id } = req.params;

        const result = User.delete(parseInt(id));

        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(204).json();
    }
}

module.exports = UserController
