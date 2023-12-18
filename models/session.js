import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, index: true },
  urls: [String],
});

const Session = new mongoose.model('Session', sessionSchema);

export default Session;