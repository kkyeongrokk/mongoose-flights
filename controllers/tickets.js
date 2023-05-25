const Ticket = require('../models/ticket');

module.exports = {
  create,
  new: newTicket
};

async function create(req, res) {
  req.body.flight = req.params.id;
  await Ticket.create(req.body);
  
  res.redirect(`/flights/${req.params.id}`);
}

async function newTicket(req, res) {
  res.render('tickets/new', { flightId: req.params.id })
}