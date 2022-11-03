//DECLARATIONS: router, api routes --------------
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//EXPORT ROUTER
module.exports = router;