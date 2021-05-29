const mongoose = require('mongoose');
const config = require('config');

const db = process.env.MONGODB_URI || config.get("mongodbURI");

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://harsh123:tyagi123@cluster0.xl2mm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("DB connected!");
  } catch(err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = connectDb;