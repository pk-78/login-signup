const signup = require("../models/signup");

// 2 crete route handler

exports.createSignups = async (req, res) => {
  try {
    //  extract title and description from request body

    const { username, email, password } = req.body;
    // create a new todo object and insert in db

    const response = await signup.create({ username, email, password });

    // send a json response with a success flag

    res.status(200).json({
      succes: true,
      data: response,
      message: "Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      succes: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
