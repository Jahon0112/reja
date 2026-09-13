// question
const http = require("http");
const mongodb = require("mongodb");
//mongodb maqsadli obyekt(connect degan callbackga ega method bor)

let db;
const connectionString = "mongodb+srv://danny01nny_db_user:ps5hnmZ3VxaSxIpj@cluster0.xlqa6m9.mongodb.net/reja_db";

mongodb.connect(
   connectionString, 
   {
    // question 
   useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
   if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connected successfully");
        // question
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
      let PORT =3000;
      server.listen(PORT, function(){
      console.log
      (`The server is running successfully on port:${PORT}, http://localhost:${PORT}`);
});
    }
})
