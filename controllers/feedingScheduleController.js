// controllers/feedingScheduleController.js
const FeedingSchedule = require('../models/FeedingSchedule');

exports.createFeedingSchedule = async (req, res) => {
  try {
    const feedingSchedule = await FeedingSchedule.create(req.body);
    res.status(201).json(feedingSchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFeedingSchedules = async (req, res) => {
  try {
    const feedingSchedules = await FeedingSchedule.findAll();
    res.status(200).json(feedingSchedules);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateFeedingSchedule = async (req, res) => {
  try {
    const feedingSchedule = await FeedingSchedule.findByPk(req.params.id);
    if (feedingSchedule) {
      await feedingSchedule.update(req.body);
      res.status(200).json(feedingSchedule);
    } else {
      res.status(404).json({ error: 'Feeding Schedule not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteFeedingSchedule = async (req, res) => {
  try {
    const feedingSchedule = await FeedingSchedule.findByPk(req.params.id);
    if (feedingSchedule) {
      await feedingSchedule.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Feeding Schedule not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
