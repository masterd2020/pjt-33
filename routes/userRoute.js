const express = require("express");

const { getAllUser, getUser, updateUser, deleteUser } = require ("../controllers/userController");

 class UserRouter {
   constructor(router) {
    this.router = router;
   }
   
   // All api routes definition
   apiRoute() {
     this.router
      .route("/")
      .get(getAllUser);
      
     this.router
      .route("/:id")
      .get(getUser)
      .patch(updateUser)
      .delete(deleteUser);
      
    return this.router;
  }
 }
 
 // Exporting the router returned from the class
module.exports = new UserRouter(express.Router()).apiRoute();
 