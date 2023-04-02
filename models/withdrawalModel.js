const mongoose = require('mongoose');

const WithdrawalSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Course',
  },
  courseName:{
    type: String,
    required: true
  },
  studentId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Student'
  },
  studentName :{
    type: String,
    required: true
  }
});

const Withdrawal = mongoose.model('Withdrawal', WithdrawalSchema);

module.exports = Withdrawal;
