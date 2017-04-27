const express = require('express');
const router = express.Router();

// Profile
router.get('/', (req, res, next) => {
  res.send('users route working')
});

module.exports = router;
