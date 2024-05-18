// services/errorService.js
function error(res, message) {
    return res.status(400).json({
        message: message
    });
}

module.exports = error;
