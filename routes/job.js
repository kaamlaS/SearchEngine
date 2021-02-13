const express = require('express')
const mockaroo = require('mockaroo')
const mysqlConnection = require('../connection')
const router = express.Router()
const fakeJobs = []

let id = 1

const client = new mockaroo.Client({
  apiKey: 'd769d9a0'
})

// search
router.get('/search', function (req, res) {
  const jobTitle = req.query.query.split(',')
  let Query = 'SELECT * FROM jobs WHERE jobs.job_title IN '
  const args = ['(']
  for (let i = 0; i < jobTitle.length; ++i) {
    args.push(JSON.stringify(jobTitle[i]))
    args.push(',')
  }
  args.pop()
  args.push(')')
  const b = args.join('')
  Query = Query + b
  console.log(Query)
  mysqlConnection.query(Query, function (err, result, field) {
    if (!err) {
      result = result.sort()
      res.send(JSON.stringify(result))
    } else {
      console.log(err)
    }
  })
})

// add a job
router.post('/create', function (req, res) {
  const Query = 'INSERT INTO `jobs` (`ID`, `job_title`, `company`, `location`, `post_date`, `apply_email`, `leave_type`) VALUES (?,?,?,?,?,?,?)'
  const job = [id, req.body.job_title, req.body.company, req.body.location, new Date(req.body.post_date), req.body.apply_email, req.body.leave_type]
  client.generate({
    count: 10,
    schema: 'JobListing'
  }).then(function (records) {
    for (let i = 0; i < records.length; i++) {
      fakeJobs.push(records[i])
    }
    mysqlConnection.query(Query, job, function (err, result, fields) {
      if (!err) {
        fakeJobs.push(JSON.stringify(job))
        res.send(fakeJobs)
      } else {
        res.send('invalid')
      }
    })
    id++
  })
})

// delete a job using the id
router.post('/delete', function (req, res) {
  const Query = 'DELETE FROM `jobs` WHERE `jobs`.`ID` = ?'
  mysqlConnection.query(Query, req.body.job_id, function (err, result) {
    if (!err && result.affectedRows !== 0) {
      res.send(result)
    } else {
      res.send('Invalid Id')
    }
  })
})

router.get('/', function (req, res) {
  res.send('Hi')
})

module.exports = router
