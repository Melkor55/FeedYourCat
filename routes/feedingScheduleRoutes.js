// routes/feedingScheduleRoutes.js
const express = require('express');
const feedingScheduleController = require('../controllers/feedingScheduleController');
const router = express.Router();

router.post('/feeding-schedules', feedingScheduleController.createFeedingSchedule);
router.get('/feeding-schedules', feedingScheduleController.getFeedingSchedules);
router.put('/feeding-schedules/:id', feedingScheduleController.updateFeedingSchedule);
router.delete('/feeding-schedules/:id', feedingScheduleController.deleteFeedingSchedule);

module.exports = router;
