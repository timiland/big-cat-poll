const express = require('express');
const router = express.Router();

//Cat Model
const Cat = require('../../models/Cat');

// @route Get api/cats
// @desc Get All Cats
// @access Public
router.get('/', (req, res) => {
  Cat.find()
    .sort({ votes: 1 })
    .then(cats => res.json(cats));
});

router.post('/:id', (req, res) => {
  Cat.findByIdAndUpdate(req.params.id, { $inc: { votes: 1 } }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
