import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connection_url = process.env.CONNECT_URL;

const connect = async () => {
  if ( process.env.NODE_ENV !== "production" ){
    mongoose.set("debug", true);
  }

  mongoose
    .connect(connection_url, {
      dbName : "todo",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To MongoDB");
    })
    .catch((err) => {
      console.error("Connected faild to MongoDB")
      console.error(err)
    })

}

export default connect;