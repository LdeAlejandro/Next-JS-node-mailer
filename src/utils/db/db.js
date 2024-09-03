import mongoose from 'mongoose';

const connect = async () => {
  try {

    if (!process.env.MONGO) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGO);
    console.log('**************************************************\nMongoDB connected successfully\n**************************************************');
    
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw new Error('Connection failed!');
  }
};

export default connect;
