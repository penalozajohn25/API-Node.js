const { stack } = require("../routes/products");

function erroLogs(err, req, res, next) {
    console.log('errorLogs');
    console.error(err);
    next(err);
}

function handlerError(err, req, res, next) {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = {
    erroLogs,
    handlerError
}