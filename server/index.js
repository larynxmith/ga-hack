//required
let express = require('express')
let rowdyLogger = require('rowdy-logger')

//instance
let app = express()
let rowdyResults = rowdyLogger.begin(app)

//middleware

//routes
app.use(
    "/auth",
    expressJwt({
        secret: process.env.JWT_SECRET
    }).unless({
        path: [
            { url: "/auth/login", methods: ["POST"] },
            { url: "/auth/signup", methods: ["POST"] }
        ]
    }),
    require("./controllers/auth")
); 