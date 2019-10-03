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
)


//Catch-All route
app.get("*", (req, res) => {
    res.status(404).send({ message: "Not Found" });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Hear, Here!");
    rowdyResults.print();
})