const express = require('express');
const app = express();
// const ENV = process.env.ENV || "development";
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require("cors");

app.use(express.json());
app.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = (db) => {

  router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const queryString =`
    SELECT * FROM users WHERE username = $1 and password = $2;
    `;

    db.query(
      queryString, [username, password])
      .then(data => {
        if (data.rows.length > 0) {
          if (data.rows[0].is_admin) {
            console.log("INSIDE DATA.rows")
            res.redirect(200, '/admin')
          }
        } else {
          console.log("wrong username or password")
          res.send("wrong username or password")
        }
      })
      .catch(err => {
        res.redirect(500, "index");
      });
  })

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  /* GET admin page. */
  router.get('/admin', function(req, res, next) {
    res.render('admin', { title: 'Express' });
  });

  return router;
}