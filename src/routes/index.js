const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

router.get('/contacts', (req, res, next) => {
    Contact.find((err, contacts) => {
        res.json(contacts);
    })
});

router.get('/contacts/:id', (req, res, next) => {
    Contact.find({_id: req.params.id}, (err, result) => {
        if(err) {
            res.json({ status: false, message: 'No contact found'})
        } else {
            res.json(result)
        }
    })
})

router.post('/contacts', (req, res, next) => {
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    contact.save((err, contact) => {
        if(err) {
            res.json({status: false, message: 'Failed to add contact' })
        } else {
            res.json({ status: true, message: 'Contact added successfully' })
        }
    })
})

router.delete('/contacts/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id}, (err, result) => {
        if(err) {
            res.json({ status: false, message: 'Failed to delete the contact' })
        } else {
            res.json(result)
        }
    })
})

module.exports = router;