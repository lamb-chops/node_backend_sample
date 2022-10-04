const express = require('express')
const { getBlogs } = require('../controller/getBlogs')
const { postBlog } = require('../controller/postBlog')

const router = express.Router()

router.get('/blog/:id', getBlogs)
router.post('/blog/post', postBlog)

module.exports = router