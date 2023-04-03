import express from 'express';
import { categoryController, createCategoryControll, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router=express.Router();


//create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryControll)
//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)
//get all categories
router.get('/get-category',categoryController);
//get single categories
router.get('/single-category/:slug',singleCategoryController);
//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);
export default router;