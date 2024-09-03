const signup = require("../models/signup");

// 2 crete route handler

exports.getLogin = async (req, res) => {
  try {
    //  extract title and description from request body

    const response = await signup.find({});
    // create a new todo object and insert in db

    // send a json response with a success flag

    res.status(200).json({
      success: true,
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

exports.getLoginbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await signup.find({ _id: id });

    if (!response) {
      res.status(404).json({
        success: false,
        message: "no data found with this id ",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "Data found succcessfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "nhi fetch ho paya ",
      message: err.messgage,
    });
  }
};

exports.getLoginbyUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const response = await signup.find({ username: username });

    if (!response) {
      res.status(404).json({
        success: false,
        message: "no data found with this id ",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "Data found succcessfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "nhi fetch ho paya ",
      message: err.messgage,
    });
  }
};

exports.getLoginbyEmail = async (req, res) => {
  try {
    const email = req.params.email;

    // Find user by email
    const response = await signup.find({ email: email });

    // If no user found, return a 404 error
    if (response.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No user found with this email.",
      });
    }

    // Return the user data if found
    res.status(200).json({
      success: true,
      data: response,
      message: "Data found successfully.",
    });
  } catch (err) {
    console.error(err);
    // Return 500 for internal server errors
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};
