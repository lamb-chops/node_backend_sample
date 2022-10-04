const express = require('express')
const { getBlogs } = require('../controller/getBlogs')
const { postBlog } = require('../controller/postBlog')
const { getBlog } = require('../controller/getBlog')

const router = express.Router()

router.get('/blog/:id', getBlog)
router.get('/blogs', getBlogs)
router.post('/blog/post', postBlog)

module.exports = router