import * as env from 'dotenv'
import express from 'express'
import router from './middleware/task/task';
import mongoose from 'mongoose'
env.config();

const port = process.env.PORT || 3000;
const app = express();


//connect to the DB
mongoose.connect(process.env.DB_CONNECTION as string, () => {
    console.log('connected to the DB');
});


//apps settings
app.use(express.json()); // Express JSON Parser
app.use(express.urlencoded({ extended: false })); // Express URL Encoded Parser
app.set("trust proxy", 1);


app.use("/task", router)

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => console.log("Server is running on port " + port));