
const router = require('express').Router()

let user = {}
router.post('/login', function(req, res, next) {
  console.log(req.body)
  let body = req.body
  user.name = body.username
  user.pwd = body.password
  res.send({
    code: 20000,
    data: {
      token: "jdfakngognopegori42h"
    }
  })
})
router.get('/info', function(req, res, next) {
  res.send({
    code: 20000,
    data: {
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      name: user.name,
      roles: [user.name],
      role: [user.name]
    }
  })
})

router.post('/logout', function(req, res, next) {
  res.send({
    code: 20000,
  })
})


module.exports = router
