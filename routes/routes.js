const {Router} = require('express');
const { launchNewInstance, freeDockerResources, killInstance, disputeFirst } = require('../controller/monitor');
const router = Router();

router.get('/launchNew', launchNewInstance);
router.post('/kill', killInstance);
router.post('/freeDockerResources', freeDockerResources);
router.post('/disputeFirst', disputeFirst);

module.exports = router;
