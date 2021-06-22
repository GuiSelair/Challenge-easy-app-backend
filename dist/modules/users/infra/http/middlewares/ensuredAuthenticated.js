"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.json({
            error: true,
            errorMessage: "JWT TOKEN inexistente"
        });
    }
    var _a = authHeader.split(' '), token = _a[1];
    try {
        var decoded = jsonwebtoken_1.verify(token, "secredo");
        var sub = decoded.sub;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (error) {
        return response.json({
            error: true,
            errorMessage: "JWT TOKEN INVALIDO"
        });
    }
}
exports.default = ensureAuthenticated;
