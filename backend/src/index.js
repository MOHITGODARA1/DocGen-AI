import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/connectmongodb.js";


dotenv.config();
const PORT=process.env.PORT ||3000;

connectDB().then(()=>{
  app.listen(PORT, () => {        
    console.log(`Server running on http://localhost:${PORT}`);
    }
  )
}
).catch((err)=>{
  console.log("Faild to connect Database",err);
  process.exit(1);
}

)

// Start Server
