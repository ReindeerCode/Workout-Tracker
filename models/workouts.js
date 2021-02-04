const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required",
      },
      duration: {
        type: Number,
        required: "Duration is required",
        min: 1,
      },
      distance: {
        type: Number,
        min: 1,
      },
      weight: {
        type: Number,
        trim: true,
        min: 1,
      },
      reps: {
        type: Number,
        trim: true,
        min: 1,
      },
      sets: {
        type: Number,
        trim: true,
        min: 1,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
