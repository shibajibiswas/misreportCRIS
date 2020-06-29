const express = require('express');
const {viewReports, createEntry} = require('../controller/reportops')

const router=express.Router();

router
.route('/')
.get(viewReports)
.post(createEntry)



module.exports = router;
