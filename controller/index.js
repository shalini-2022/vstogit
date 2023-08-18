const service=require('./service')
const csv = require('csvtojson')
const importuser=async(req,res)=>{
   try{
        if((req.file==undefined)||(req.file==null)){
           res.send({code:404,message:"please upload csv file...!"})
            return console.log('kindly select and upload csv file');
        }
        let path="./files/"+req.file.filename
        const details=await csv().fromFile(path)
    
        
        for (const item of details){
            const servicesave =await service.savedetails(item);
            
        
        }res.send({status:200,success:true ,message:"uploaded succesfully"})
    }catch(error){
        res.send({message:error,status:"not uploaded"})
    
   }    
  }
  const getuser=async(req,res)=>
{
    const fetchdetails=await service.showdetails(req.body)
    res.send(fetchdetails)
}
const alldetails= async(req,res)=>
{
    const update= await service.updatedetails(req.body)
    res.send(update)
}

const detail=async(req,res)=>
{
    const fetch=await service.onroll(req.body)
    res.send(fetch)
}
const update=async(req,res)=>
{
    const fetch=await service.resigned(req.body)
    res.send(fetch)
}
const onrollcount=async(req,res)=>
{
    const count=await service.roll(req.body)
    res.send(count)
}
const resigncount=async(req,res)=>
{
    const count=await service.resign(req.body)
    res.send(count)
}
    module.exports = 
    {
        importuser,
        getuser,
        alldetails,
        detail,
        update,
        onrollcount,
        resigncount
    }

