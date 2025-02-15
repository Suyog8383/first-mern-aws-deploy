import mongoose from "mongoose";

const databaseConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://suyognagawade8383:suyognagawade8383@mern-demo.5hu08.mongodb.net/"
    )
    .then(() => console.log("database connected!"))
    .catch(() => console.log("Failed to connect!"));
};

export default databaseConnect;
