import express from 'express'
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controller/Usercontroller';
const router = express.Router();

router.get('/user/:id',getUser)
router.get('/users',getAllUser)
router.post('/create',createUser)
router.put('/user/:id',updateUser)
router.put('/user/:id',deleteUser)

export default router
