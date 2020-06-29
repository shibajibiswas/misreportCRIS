const db = require("../model/dbConnectionORM");
const Reports = db.reports;
const Op = db.Sequelize.Op;

// Insertion of Data in mis_earning table in reportsmodel

exports.createEntry = (req, res) => {
  // Validate request
  if (!req.body.location) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a entry
  const report = {
    location: req.body.location,
    psgn: req.body.psgn,
    erng: req.body.erng
  };

  // Save report in the database 
  Reports.create(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Report."
      });
    });
};



exports.viewReports = (req, res) => {
    const location = req.query.location;
    var condition = location ? { LOCATION: { [Op.like]: `%${location}%` } } : null;
  
    Reports.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

