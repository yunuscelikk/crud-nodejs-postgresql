const postRoutes = require("./routes/postRoutes");
const express = require("express");
const app = express();


app.use(express.json());

app.use("/post", postRoutes)

app.get("/health", (req, res) => {
    res.status(200).json({ 
        status: "success",
        message: 'Server is running'
    });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on ', PORT);
})