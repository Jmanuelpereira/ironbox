const express = require('express');
const router  = express.Router();

/* GET user page */
router.get('/task', (req, res, next) => {
  res.render('task/allTask');
});

module.exports = router;
