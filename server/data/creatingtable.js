import pool from "../src/config/db";

export const creatingtable =async()=>{
         const textq = `
    CREATE TABLE IF NOT EXISTS users(
    id Serial primary key ,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created at timestamp default now()
)
`
    try {
        pool.query(textq)
        console.log("table created if not existed");
        
    } catch (error) {
        console.log("error while creating table");
    }
}