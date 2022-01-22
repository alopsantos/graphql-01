import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://<user>:<password>@<database>.kjpwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
