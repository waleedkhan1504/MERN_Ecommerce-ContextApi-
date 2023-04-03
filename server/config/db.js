import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://waleed_khan:IZE6E8JwfNnj6ipf@cluster0.upk3cxm.mongodb.net/Ecommerce?retryWrites=true&w=majority`
         );
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
