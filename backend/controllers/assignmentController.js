// controllers/assignmentController.js
import Assignment from '../models/Assignment.js';

export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    await assignment.update(req.body);
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    await assignment.destroy();
    res.status(200).json({ message: 'Assignment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
