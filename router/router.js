const api = require('./../api/api');
const baseUrl = '/api';

const express = require('express');
const router = express.Router();


router.get(baseUrl + '/', api.testApi);

//获取文章列表
router.get(baseUrl + '/allArticle', api.getAllArtical);

module.exports = router;