import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema({
  products: { type: [], required: true },
});

export default cartSchema;
