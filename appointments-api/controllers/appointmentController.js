const appointmentService = require('../services/appointment.service');

// Crear turno (usuario)
exports.createAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.createAppointment(req.user, req.body);
    res.status(201).json({ appointment });
  } catch (err) {
    next(err);
  }
};

// Ver mis turnos (usuario)
exports.getMyAppointments = async (req, res, next) => {
  try {
    const appointments = await appointmentService.getMyAppointments(req.user);
    res.json({ appointments });
  } catch (err) {
    next(err);
  }
};

// Cancelar turno propio
exports.cancelAppointment = async (req, res, next) => {
  try {
    await appointmentService.cancelAppointment(req.user, req.params.id);
    res.status(200).json({ message: 'Cita cancelada correctamente' });
  } catch (err) {
    next(err);
  }
};

// Ver todos los turnos (admin)
exports.getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await appointmentService.getAllAppointments(req.user);
    res.json({ appointments });
  } catch (err) {
    next(err);
  }
};

// Editar turno (admin)
exports.updateAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.updateAppointment(req.user, req.params.id, req.body);
    res.json({ appointment });
  } catch (err) {
    next(err);
  }
};

// Eliminar turno (admin)
exports.deleteAppointment = async (req, res, next) => {
  try {
    await appointmentService.deleteAppointment(req.user, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

// Ver turnos de un usuario (admin)
exports.getUserAppointmentsAdmin = async (req, res, next) => {
  try {
    const appointments = await appointmentService.getUserAppointmentsAdmin(req.params.userId);
    res.json({ appointments });
  } catch (err) {
    next(err);
  }
};

