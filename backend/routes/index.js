const express = require('express');
const app = express();
// const ENV = process.env.ENV || "development";
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require("cors");
const jwt = require('jsonwebtoken');

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
          // if user is admin
          if (data.rows[0].is_admin) {
            console.log("INSIDE DATA.rows")
            const token = jwt.sign({userID: data.rows[0].id}, process.env.TOKEN_SECRET);
            // res.json({ data.rows[0], token })
            // res.end()
            return res.status(200).json({token});
            // res.render("admin")
          }
        // found nothing in database
        } else {
          // res.send("wrong username or password")
          // res.json({ msg: 'wrong username or password'});
          console.log("Inside terminal: wrong username or password")
          return res.status(401).json("Inside network: wrong username or password");
        }
      })
      .catch(err => {
        // res.json({error: err.message });
        res.redirect(500, "index");
      });
  })

  router.post('/logout', (req, res) => {
    req.session.user_id = null;
    return res.json(req.session.user_id);
  });

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  /* GET admin page. */
  router.get('/admin', function(req, res, next) {
    res.render('admin', { title: 'Express' });
  });

  router.get("/planets", (req, res) => {

    let queryString = `
    SELECT * FROM planets
    ORDER BY id;
    `;
    db.query(queryString)

      .then(data => {
        const allPlanets = data.rows
        
        console.log('DATA ROWS' + JSON.stringify(allPlanets))
        return res.json(allPlanets);
      })
      .catch(err => {
        res.status(500).send({ error: err.message });
      });
  });

  router.put("/planets/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updatePlanet = await db.query(
        "UPDATE planets SET description = $1 WHERE id = $2",
        [description, id]
      );
      res.json("Planet was updated!");
    }
    catch (err) {
      console.error(err.message);
    }
  });

  return router;
}