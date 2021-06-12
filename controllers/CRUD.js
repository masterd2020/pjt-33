const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


class CRUDAPI {
  constructor(Model) {
    this.Model = Model;
  }
  
  noId() {
    this.next(new AppError("No data found with that ID", 400));
  }
  
  createData() {
    return catchAsync(async (req, res, next) => {
      const data = await this.Model.create(req.body);
      
      return res.status(201).json({
        status: "success",
        data
      });
    });
  }
  
  getAllData() {
    return catchAsync(async (req, res, next) => {
      const data = await this.Model.find();
      
      if(!data) {
        return this.noId();
      }
      
      return res.status(200).json({
        status: "success",
        data
      });
    });
  }
  
  getData() {
    return catchAsync(async (req, res, next) => {
      const {id} = req.params;
      const data = await this.Model.findById(id);
      
      if(!data) {
        return this.noId();
      }
      
      return res.status(200).json({
        status: "success",
        data
      });
    });
  }
  
  updateData() {
    return catchAsync(async (req, res, next) => {
      const {id} = req.params;
      const data = await this.Model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidator: true
      });
      
      if(!data) {
        return this.noId();
      }
      
      return res.status(200).json({
        status: "success",
        data
      });
    });
  }
  
  deleteData() {
    return catchAsync(async (req, res, next) => {
      const {id} = req.params;
      const data = await this.Model.findByIdAndDelete(id);
      
      if(!data) {
        return this.noId();
      }
      
      return res.status(200).json({
        status: "success",
        data
      });
    });
  }
}

module.exports = CRUDAPI;