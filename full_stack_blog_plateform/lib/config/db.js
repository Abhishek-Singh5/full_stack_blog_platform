import mongoose from "mongoose";

export const ConnectDB = async () => {

        await mongoose.connect('mongodb+srv://Blog:abhi123@cluster0.wsxufek.mongodb.net/Blog');
        console.log("DB Connected");

}

