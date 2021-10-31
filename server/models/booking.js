const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Schema.Types.Date
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);