// controllers/teacherCommentController.js
import TeacherComment from '../models/TeacherComment.js';

export const getAllComments = async (req, res) => {
  try {
    const comments = await TeacherComment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const comment = await TeacherComment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    const comment = await TeacherComment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const comment = await TeacherComment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    await comment.update(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await TeacherComment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    await comment.destroy();
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
