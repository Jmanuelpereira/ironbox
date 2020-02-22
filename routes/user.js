const express = require('express');
const router  = express.Router();

/* GET user page */
router.get('/user-dash', (req, res, next) => {
  res.render('/user/userDashboard');
});

module.exports = router;
