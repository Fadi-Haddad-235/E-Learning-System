const mongoose = require('mongoose');

const WithdrawalSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Course',
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }]
});

const Withdrawal = mongoose.model('Withdrawal', WithdrawalSchema);

module.exports = Withdrawal;
