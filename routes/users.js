//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Importing the User model

// GET user details by ID
router.get('/:id', async function(req, res, next) {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ id: Number(userId) });
        console.log(user);

        // If no user found, return a 404 Not Found error
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // If user found, return the user details as JSON response
        res.json(user);
    } catch (err) {
        // Catching any errors that occur during the process
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

module.exports = router;