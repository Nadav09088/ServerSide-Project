//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calorieSchema = new Schema(
    {
        user_id: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: false,
            default: () => new Date().getFullYear(),
        },
        month: {
            type: Number,
            required: false,
            default: () => new Date().getMonth() + 1,
        },
        day: {
            type: Number,
            required: false,
            default: () => new Date().getDate(),
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["breakfast", "lunch", "dinner", "other"],
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false }
);

const calories = mongoose.model("calories", calorieSchema);

module.exports = calories;
