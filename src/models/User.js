import mongoose from "mongoose";

//Alejandro

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    username:{
        type: String,
        unique: true,
        required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: false,
      required: true,
    },
    verificationToken: {
        type: String,
        unique: false,
        required: false,
      },
      verifiedAccount: {
          type: Boolean,
          unique: false,
          required: false,
          default: false,
        },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);


// _id
// 66d4a77f8417216084c07abb
// name
// "test"
// createdAt
// ""
// email
// "test@gmail.com"
// password
// ""
// updatedAt
// ""
// username
// "test123"
// verificationToken
// ""
// verifiedAccount
// false