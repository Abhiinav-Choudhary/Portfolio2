import pool from "../config/db";

export const getAllUserservice = async()=>{
const res = await pool.query("select * from users")
return res.rows
}
export const getUserservice = async(id)=>{
const res = await pool.query("select * from users where id=$1")
return res.rows[0]
}
export const createUserservice = async(name , email)=>{
const res = await pool.query("insert into users (name , email) values($1,$2) Returning *",[name,email])
return res.rows[0]
}
export const updateUserservice = async(id,name ,email)=>{
const res = await pool.query("update users set name=$1 , email =$2 where id=$3 returning *", [name , email ,id])
return res.rows[0]
}
export const deleteUserservice = async(id)=>{
const res = await pool.query("delete from users where id=$1 returning *", [id])
return res.rows[0]
}