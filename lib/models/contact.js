import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 254,
    },
    number: {
      type: String,
      required: true,
      maxlength: 15,
    },
    message: {
      type: String,
      required: true,
      maxlength: 2000,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.models.contact || mongoose.model('contact', Schema);
export default Contact;
