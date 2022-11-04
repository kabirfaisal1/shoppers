//DECLARATIONS: router, model routes------------------
const router = require('express').Router();
const userRoutes = require('./user-routes');
const searchRoutes = require('./id-search-routes');

//set router ---------------------------------
router.use('/users', userRoutes);
router.use('/searches', searchRoutes);

//EXPORT ROUTER ---------------------------------------
module.exports = router;
