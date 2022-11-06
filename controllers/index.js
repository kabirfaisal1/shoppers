//DECLARATIONS: router, api routes --------------
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

//SET ROUTEr ====================
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//EXPORT ROUTER
module.exports = router;