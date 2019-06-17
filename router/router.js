const api = require('./../api/api');
const baseUrl = '/api';

const express = require('express');
const router = express.Router();


router.get(baseUrl + '/', api.testApi);

//获取文章列表
router.get(baseUrl + '/allArtical', api.getAllArtical);

//文章分页列表
router.get(baseUrl + '/articleList', api.getArticleList);

//获取分类列表
router.get(baseUrl + '/categoryList', api.getAllCategory);

//根据分类查询文章
router.get(baseUrl + '/getArticleById/:id', api.getArticleByCategoryId);



module.exports = router;