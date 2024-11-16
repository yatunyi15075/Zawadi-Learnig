// controllers/userController.js
import User from '../models/User';

export const getLeaderboard = async (req, res) => {
    try {
        const users = await User.findAll({
            order: [['score', 'DESC']],
            limit: 5 // Limit to top 5 users for the leaderboard
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard data', error });
    }
};
