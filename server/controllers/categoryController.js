import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryControll=async(req,res)=>{
try {
    const {name}=req.body;
    if(!name){
        res.status(401).send({message:'name is required'});
    }
    //existing category
const existingCategory=await categoryModel.findOne({name})
if(existingCategory){
    return res.status(401).send({message:'category with the name already exist'});
}
const category=await new  categoryModel({name,slug:slugify(name)}).save()
res.status(201).send({
    success:true,
    message:'new category created',
    category
})
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'error in category',
        error
    })
}
}
//update-category controller

export const updateCategoryController=async(req,res)=>{
    try {
        const {name}=req.body;
        const {id}=req.params
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:'category updated successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({  
        success:false,
        message:'error in updation category',
        error
    })
    }
}
//get all categories
export const categoryController=async( req,res)=>{
    try {
        const category= await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:'alll categories list',
            category
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in get all cat',
            error
        })      
    }
}
export const singleCategoryController=async(req,res)=>{
    try {
       
        const  category=await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'success in get sing cate',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            message:'error is single cat',
            error,
        })
    }
}
//delete category
export const deleteCategoryController=async(req ,res)=>{
try {
    const {id}=req.params
    const category=await categoryModel.findByIdAndDelete(id )
    res.status(200).send({
        success:true,
        message:'category deleted successfully',
        category
    })
    
    
} catch (error) {
    console.log(error)
    res.status(401).send({
        success:false,
        message:'error is delete cat',
        error,
    })
    
}
}