const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
    Workout.find({})
        .then((worhoutData) => {
            res.json(workoutData);
        })
        .catch((err) => res.json(err.message));
});

router.post("/workouts", (req, res) => {
    Workout.create({})
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch((err) => {
            res.json(err.message);
        });
});

router.put("workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(

        req.params.id, {
        $push: {
            exercises: req.body,
        },
    },
        { new: true }
    )
        .then((updateWorkout) => {
            res.json(updatedWorkout);
        })
        .catch((err) => {
            res.json(err.message);
        });
});

module.exports = router;