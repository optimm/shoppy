module.exports = (req, res, next) => {
  console.log(req.cookies);

  if (
    req.cookies.LogedIn !== undefined &&
    req.cookies.LogedIn.LogedIn === true
  ) {
    console.log("in first auth");
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
