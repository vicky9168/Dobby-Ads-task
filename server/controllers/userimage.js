import userimage from "../models/image.js";
import fs from "fs"


export const imgpost =async(req,res,next) => {
    try {
        const img = new userimage({
           user:req.body.user,
           name:req.body.name,
            img:{
                data:fs.readFileSync('uploads',req.filename),
                contentType:"image/png"
            }
        })
        const result = await img.save();
              res.send({msg:"Image uploaded Successfully",result})
    } catch (error) {
    res.status(500).json({ msg: error });
        
    }
}
export const imgget =async(req,res,next) => {
    try {
        
        //       res.send({msg:"image get Successfully",result})
    } catch (error) {
    res.status(500).json({ msg: error });
        
    }
}
export const search =async(req,res,next) => {

        try {
            const name = req.params.name;
   let data = await userimage.find(
    { 
        "$or":[{"city":{$regex: new RegExp(name, "i")}}]
    //   cities:{"$in" :[{$regex:["name"]}]}
    }
   ).populate({
    path: 'user',
});
   res.json(data);
    } catch (error) {
    res.status(500).json({ msg: error });
        
    }
}