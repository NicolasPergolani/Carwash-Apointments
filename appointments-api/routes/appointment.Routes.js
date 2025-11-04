const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { authenticateJWT, authorizeAdmin } = require('../middlewares/auth.middleware');


router.get('/', authenticateJWT, appointmentController.getMyAppointments);
router.post('/', authenticateJWT, appointmentController.createAppointment);
router.get('/all', authenticateJWT, authorizeAdmin, appointmentController.getAllAppointments);
router.get('/user/:userId', authenticateJWT, authorizeAdmin, appointmentController.getUserAppointmentsAdmin);
router.delete('/cancel/:id', authenticateJWT, appointmentController.cancelAppointment);
router.delete('/:id', authenticateJWT, authorizeAdmin, appointmentController.deleteAppointment);
router.put('/:id', authenticateJWT, authorizeAdmin, appointmentController.updateAppointment);

module.exports = router;