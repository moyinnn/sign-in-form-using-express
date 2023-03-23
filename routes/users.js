var express = require('express');
var router = express.Router();
let login = require('../controller/authenticate/login')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login", (req, res) => {
  const username = req.body.username 
  const password = req.body.password

  let loginResult = login(username, password);

  if(loginResult){
    res.render("users", {username : username})
  }else{
    res.render("index", {error : true})
  }
})

module.exports = router;
