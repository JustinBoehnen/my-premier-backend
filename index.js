const express = require('express')
const userRoutes = require('./routes/users')

var app = express()

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
