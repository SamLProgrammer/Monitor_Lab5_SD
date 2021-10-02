const {Router} = require('express');
const { launchNewInstance, freeDockerResources } = require('../controller/monitor');
const router = Router();

router.get('/launchNew', launchNewInstance);
router.post('/freeDockerResources', freeDockerResources);

module.exports = router;
