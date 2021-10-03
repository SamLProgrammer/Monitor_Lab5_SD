const {Router} = require('express');
const { launchNewInstance, freeDockerResources, killInstance } = require('../controller/monitor');
const router = Router();

router.get('/launchNew', launchNewInstance);
router.post('/kill', killInstance);
router.post('/freeDockerResources', freeDockerResources);

module.exports = router;
