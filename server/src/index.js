import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoute.js'
import dotenv from 'dotenv'
import errorHandling from '../middleware/errorHandling.js'
import { creatingtable } from '../data/creatingtable.js'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

// error handling
app.use(errorHandling)
// route
app.use('/api',userRouter)

creatingtable()

Port=process.env.PORT || 5001
app.listen(Port,()=>{
console.log(`Server is listening on PORT ${Port}` );

})