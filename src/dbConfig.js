import mongoose from "mongoose";

const URI_MONGO =
  "mongodb+srv://disagustinalopez:RtPszX4bFwr4t0VB@cluster0.mfqjqym.mongodb.net/prueba666?retryWrites=true&w=majority";
mongoose.connect(URI_MONGO, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conectado a la base de datos");
  }
});
