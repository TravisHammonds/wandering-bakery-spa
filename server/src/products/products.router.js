const router = require('express').Router({mergeParams: true});
const controller = require('./products.controller');

router.route('/').get(controller.list);

module.exports = router;