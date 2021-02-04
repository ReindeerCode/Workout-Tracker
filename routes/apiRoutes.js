//**start dependencies */
let db = require("../models");

//**end dependencies */

//**api routes */
module.exports = function (app) {
  //get Last Workout

  //add workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body, (error, data) => {
      if (error) {
        res.status(500).json({ err: error });
      } else {
        console.log("Nailed it");
        res.json(data);
      }
    });
  });

  //get all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  //add new workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true },
      (err, data) => {
        if (err) {
          res.status(500).json({ err: err });
        }
        res.json(data);
      }
    );
  });

  //get Workouts InRange
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (error, data) => {
      if (error) {
        res.status(500).json({ err: error });
      } else {
        res.json(data);
      }
    });
  });
};
