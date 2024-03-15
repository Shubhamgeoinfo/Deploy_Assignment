import userModel from "../model/user.js";

const subscriber = async (req, res) => {
  try {
    const { email } = req.body;

    //save
    const user = await new userModel({
      email,
    }).save();

    res.status(201).send({
      success: true,
      message: "Subscribed",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Subscription Error",
      error,
    });
  }
};
export default subscriber;
