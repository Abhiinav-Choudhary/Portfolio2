const handleResponse = (res , status , message , data=null)=>{
return res.status.json({
    status,
    message,
    data
})
}

export const createUser =async(req , res ,next)=>{
    const {name , email} = req.body
try {
    const user = await createUser(name , email)
    handleResponse(res , 200 , "User created successfully",user)
} catch (error) {
    next(error)
}
}
export const getUser =async(req , res ,next)=>{
    
try {
    const user = await getUser(req.params.id)
    handleResponse(res , 200 , "User retrived successfully",user)
} catch (error) {
    next(error)
}
}
export const getAllUser =async(req,res,next)=>{
    // const {name , email} = req.body
try {
    const user = await getAllUser()
    handleResponse(res , 200 , "all User retrived successfully",user)
} catch (error) {
    next(error)
}
}
export const  updateUser=async(req ,res ,next)=>{
    const {name , email} = req.body
try {
    const user = await updateUser(req.params.id,name ,email)
    handleResponse(res , 200 , " User updated successfully")
} catch (error) {
    next(error)
}
}
export const deleteUser =async(req,res,next)=>{
 
try {
    const user = await deleteUser(req.params.id)
    handleResponse(res , 200 , "User deleted successfully",user)
} catch (error) {
    next(error)
}
}