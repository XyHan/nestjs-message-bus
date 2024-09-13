"use strict";
exports.__esModule = true;
exports.CommandIdentifier = void 0;
var uuid_1 = require("uuid");
var CommandIdentifier = /** @class */ (function () {
    function CommandIdentifier(value) {
        this.value = value;
    }
    CommandIdentifier.fromString = function (value) {
        return new CommandIdentifier(value);
    };
    CommandIdentifier.generate = function () {
        return new CommandIdentifier((0, uuid_1.v4)());
    };
    CommandIdentifier.prototype.toString = function () {
        return this.value;
    };
    return CommandIdentifier;
}());
exports.CommandIdentifier = CommandIdentifier;
