module.exports = (req, res, next) => {
  console.log(req.cookies.LogedIn.LogedIn);
  if (req.cookies !== undefined && req.cookies.LogedIn.LogedIn === true) {
    req.isAuthenticated = true;
    res.name = req.cookies.LogedIn.name;
    console.log("auth true");
    next();
  } else {
    console.log("auth false");
    req.isAuthenticated = false;
    next();
  }
};
