module.exports = (req, res, next) => {
    if (req.cookies !== undefined && req.cookies.LogedIn === 'true') {
        req.isAuthenticated = true;
        next();
    }
    else {
        req.isAuthenticated = false;
        next();
    }
}