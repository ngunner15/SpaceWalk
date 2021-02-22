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
        
        // console.log('DATA ROWS' + JSON.stringify(allPlanets))
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

  router.get("/photos", (req, res) => {
    let queryString = `
    SELECT * FROM photos;
    `;
    db.query(queryString)

      .then(data => {
        const allPhotos = data.rows
  
        return res.json(allPhotos);
      })
      .catch(err => {
        res.status(500).send({ error: err.message });
      });
  });

  router.get("/favourites/:id", (req, res) => {
    let userId = req.params.id;

    let queryString = `
    SELECT * FROM favourites
    JOIN users ON favourites.user_id = users.id
    JOIN photos ON favourites.photo_id = photos.id
    WHERE users.id = $1;
    `
    db.query(queryString, [req.params.id])

      .then(data => {
        const allFavs = data.rows
        // console.log('DATA ROWS' + JSON.stringify(allFavs))
        return res.json(allFavs);
      })
      .catch(err => {
        res.status(500).send({ error: err.message });
      });
  });

  // search
  router.get("/photossearch", async (req, res) => {
    try {
      const queryString =`SELECT * FROM photos WHERE title ILIKE $1;`

      const photos = await db.query(queryString, [`%${req.query.title}%`])
      res.json(photos.rows)
    
    } catch (err) {
      console.error(err.message);
    }
  });

  //add into favourites
  router.post("/favourites", (req, res) => {
    const queryString =`
    INSERT INTO favourites (user_id, photo_id)
    VALUES ($1, $2);
    `;
    db.query(queryString, [1, req.body.key])
      .then(data => {
        res.status(200).send(200);
        console.log("req.body.key IS " + req.body.key)
      })
      .catch(err => {
        res.status(500).send({ error: err.message });
      });
  });

  // delete the selected favourite photo
  router.delete("/favourites/:id", (req, res) => {
    const queryString = `
    DELETE FROM favourites
    WHERE user_id = $1 AND photo_id = $2;
    `;
    db.query(queryString, [req.params.id, req.body.key])
      .then(() => {
        console.log("DELETED")
        return res.status(200).send("200");
      })
      .catch(err => {
        res.status(500).send({ error: err.message });
      });
  });

  return router;
}