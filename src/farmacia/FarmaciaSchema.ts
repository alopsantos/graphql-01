import mongoose, { Schema } from "mongoose";

type Farmacia = {
  description: String;
  title: String;
  category: String;
};

const FarmaciaSchema = new Schema({
  description: String,
  title: String,
  category: String,
});

export default mongoose.model<Farmacia>("Farmacia", FarmaciaSchema);
