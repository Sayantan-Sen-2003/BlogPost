import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://media.istockphoto.com/id/1164822188/vector/male-avatar-profile-picture.jpg?s=1024x1024&w=is&k=20&c=tX9VBd9a8ShS3mU5uqjp1Tus40iKsBua_i2Ntf2ONd8=',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;