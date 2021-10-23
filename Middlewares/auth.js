module.exports = (req, res, next) => {
  console.log(req.cookies);

  if (
    req.cookies.LogedIn !== undefined &&
    req.cookies.LogedIn.LogedIn === true
  ) {
    console.log("in first auth");
    req.isAuthenticated = true;
    res.name = req.cookies.LogedIn.name;
    res.mobile = req.cookies.LogedIn.mobile;
    res.usr = req.cookies.LogedIn.usr;
    res.email = req.cookies.LogedIn.email;
    console.log("auth true");
    console.log(req.cookies.LogedIn.mobile);
    next();
  } else {
    console.log("auth false");
    req.isAuthenticated = false;
    next();
  }
};
