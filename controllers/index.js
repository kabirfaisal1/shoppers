//DECLARATIONS: router, api routes --------------
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);

//EXPORT ROUTER
module.exports = router;