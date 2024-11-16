// controllers/progressController.js
import Progress from '../models/Progress.js';

// Get all progress
export const getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve progress' });
  }
};

// Get progress by userId
export const getProgressByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const progress = await Progress.findAll({ where: { userId } });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user progress' });
  }
};

// Add new progress
export const createProgress = async (req, res) => {
  try {
    const { userId, course, completionPercentage, teacherFeedback, badges } = req.body;
    const newProgress = await Progress.create({ userId, course, completionPercentage, teacherFeedback, badges });
    res.status(201).json(newProgress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create progress entry' });
  }
};

// Update progress by id
export const updateProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, completionPercentage, teacherFeedback, badges } = req.body;
    const progress = await Progress.findByPk(id);

    if (!progress) return res.status(404).json({ error: 'Progress entry not found' });

    progress.course = course || progress.course;
    progress.completionPercentage = completionPercentage || progress.completionPercentage;
    progress.teacherFeedback = teacherFeedback || progress.teacherFeedback;
    progress.badges = badges || progress.badges;

    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update progress entry' });
  }
};

// Delete progress by id
export const deleteProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const progress = await Progress.findByPk(id);

    if (!progress) return res.status(404).json({ error: 'Progress entry not found' });

    await progress.destroy();
    res.json({ message: 'Progress entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete progress entry' });
  }
};
