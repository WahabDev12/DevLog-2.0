const express = require("express");
const connectDB = require("./config/db");
const app = express();


// Connect to Database
connectDB();

const PORT = process.env.PORT || 5000

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req,res)=>{
    return res.json({msg:"Welcome to DevLog"})
});



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
