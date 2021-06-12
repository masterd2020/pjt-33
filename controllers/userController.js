const User = require("../models/userModel");
const CRUDAPI = require("./CRUD");
const api = new CRUDAPI(User);

exports.getAllUser = api.getAllData();
exports.getUser = api.getData();
exports.updateUser = api.updateData();
exports.deleteUser = api.deleteData();
