const router = require('express').Router();
let User = require('../models/users.model');

router.route('/add').post((req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email_id = req.body.email_id;
  const mobile_no = req.body.mobile_no;
  const password = req.body.password;

  const newUser = new User({first_name, last_name, email_id, mobile_no, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;