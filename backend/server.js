import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config();

connectDB()

const app = express()

// app.use((req, res, next) => {
//     console.log(req.originalUrl)
//     next()
// })


app.get('/', (req,res) => {
    res.send('API is running.....')
})

app.use('/api/products', productRoutes)

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack:process.env.NODE_ENV === 'production' ? null : err.stack
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server running in ${process.env.NODE} mode on port ${PORT}`.blue.bold))

// app.listen(5000, console.log('Server running on port 5000'))