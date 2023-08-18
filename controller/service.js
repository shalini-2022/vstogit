const mongoose=require('mongoose')
const schema=new mongoose.Schema(
   {
    Empid:String,
    Name: String,
    Father_Name: String,
    Date_of_Join: String,
    M2_Permenant_Date: String,
    Date_of_Resignation: String,
    Date_of_Birth: String,
    Mobile_NO: String,
    Postal_Address: String,
    Name_of_Nominee: String,
    Salary: String,
    Designation: String,
    Aadhar_No: String,
    PAN: String,
    Bank_AC_Number: String,
    IFSC_code: String,
    Emp_status: String,
    Company_Name: String
    }
)
const collect= mongoose.model('fileuploads',schema)
const savedetails= async(data)=>
{
    const details= new collect(data)
    const save= await details.save()
    return save
}
const showdetails=async(info)=>
{
    const show=await collect.findOne({Aadhar_No : info.Aadhar_No})
    return show
}
const updatedetails= async(set)=>
{
    const updateemail= await collect.findOneAndUpdate({Aadhar_No:set.Aadhar_No},
    { $set:
   {
    Name:set.Name,
    Father_Name:set.Father_Name,
    Date_of_Join:set.Date_of_Join,
    M2_Permenant_Date:set.M2_Permenant_Date,
    Date_of_Resignation:set.Date_of_Resignation,
    Date_of_Birth:set.Date_of_Birth,
    Mobile_NO:set.Mobile_NO,
    Postal_Address:set.collect,
    Name_of_Nominee:set.Name_of_Nominee,
    Salary:set.Salary,
    Designation:set.Designation,
    PAN:set.PAN,
    Bank_AC_Number:set.Bank_AC_Number,
    IFSC_code:set.IFSC_code,
    Emp_status:set.Emp_status,
    Company_Name:set.Company_Name 
  }
  })
    return updateemail
}

const onroll=async(data)=>
{
    const detail=await collect.find({Emp_status:data.Emp_status})
    return detail

}
const resigned=async(data)=>
{
    const detail=await collect.find({Emp_status:data.Emp_status})
    return detail

}
const roll = async(data)=>
{
    const count = await collect.aggregate([{$match : {Emp_status : data.Emp_status}},{$count : "on_roll counts"}])
    return count

}

const resign = async(data)=>
{
    const count = await collect.aggregate([{$match : {Emp_status : data.Emp_status}},{$count : "Resigned counts"}])
    return count

}
module.exports=
{
    savedetails,
    showdetails,
    updatedetails,
    onroll,
    resigned,
    roll,
    resign
    
    
}
