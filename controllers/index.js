//DECLARATIONS: router, api-routes, home-routes --------------
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//EXPORT ROUTER
module.exports = router;