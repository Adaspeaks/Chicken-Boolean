const router = require('express').Router();
const userRoutes = require('./userRoutes');
const spoonacular = require('./spoonacular')

router.use('/users', userRoutes);
router.use(`/search`, spoonacular);

module.exports = router;