import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

import BlogRouts from './routes/blogPost.routes'
import SessionUser from './routes/sessionUser.routes'
import AdminRoutes from './routes/adminUser.routes'
import Categoryroutes from './routes/category.routes'

app.use('/api/v1/blog', BlogRouts);
app.use('/api/v1/user', SessionUser);
app.use('/api/v1/admin', AdminRoutes)
app.use('/api/v1/category', Categoryroutes)

export default app