const { Router } = require('express');

const router = Router();

const connection = require('./conf');

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'UNESCO WORLD HERITAGE'
  });
});

// 1. Get all sites
router.get('/api/sites', (req, res) => {
  let sql = 'SELECT * FROM site';
  const sqlValues = [];
  // 2. Filter country starts with
  if (req.query.country) {
    sql += ` WHERE country LIKE '${req.query.country}%'`;
    sqlValues.push(req.query.country);
  }
  // 3. Filter site_name countains
  if (req.query.site_name) {
    sql += ` WHERE site_name LIKE '%${req.query.site_name}%' `;
    sqlValues.push(req.query.site_name);
  }
  // 4. Filter inscription year > than
  if (req.query.inscription_year) {
    sql += ' WHERE inscription_year > ?';
    sqlValues.push(req.query.inscription_year);
  }

  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting this site');
    } else if (results.length === 0) {
      res.status(404).send('Site list not found');
    } else {
      res.json(results);
    }
  });
});

// 5. Get all sites
router.get('/api/sites/ordered', (req, res) => {
  const sorter = 'site_name';
  const getAllOrdered = `SELECT * FROM site ORDER BY ${sorter} ASC`;
  connection.query(getAllOrdered, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting the ordered sites');
    } else {
      res.json(results);
    }
  });
});

// 6. Get one site from ID
router.get('/api/sites/:id', (req, res) => {
  const getOneSite = req.params.id;
  connection.query('SELECT * FROM site WHERE id = ?;', [getOneSite], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting this site ID');
    } else {
      res.json(results[0]);
    }
  });
});

// 7. Post a new site
router.post('/api/sites', (req, res) => {
  const siteData = req.body;
  connection.query('INSERT INTO site SET ?', siteData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving a new site');
    } else {
      res.sendStatus(200);
    }
  });
});

// 8. Put a site from id
router.put('/api/sites/:id', (req, res) => {
  const siteData = req.body;
  const idSite = req.params.id;
  connection.query('UPDATE site SET ? WHERE id = ?', [siteData, idSite], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating a new site');
    } else {
      res.sendStatus(200);
    }
  });
});

// 9. Put a site boolean is_in_danger 
router.put('/api/sites/is-in-danger', (req, res) => {
  connection.query(' UPDATE site SET is_in_danger = NOT is_in_danger', (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating a site boolean');
    } else {
      res.sendStatus(200);
    }
  });
});

// 10. Delete site from id
router.delete('/api/sites/:id', (req, res) => {
  const idSite = req.params.id;
  connection.query('DELETE FROM site WHERE id = ?', [idSite], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting a site');
    } else {
      res.sendStatus(200);
    }
  });
});

// 11. Delete site if site_in_danger is false
router.delete('/api/sites/indangered', (req, res) => {
  connection.query('DELETE FROM site WHERE is_in_danger = false', (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting a site');
    } else {
      res.sendStatus(200);
    }
  });
});


// 12. Get all countires
router.get('/api/countries', (req, res) => {
  let sql = 'SELECT * FROM country';
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting the countries');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
