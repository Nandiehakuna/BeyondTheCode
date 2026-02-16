import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config()

const app= express();
app.use(cors({origin:"https://localhost:5173"}))
app.use(express.json());

app.get("/", (_,res)=>{
    res.json({status:"ok", network:process.env.CARDANO_NETWORK})
})


const PORT= process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Minting service running on http://localhost:${PORT}`);
})