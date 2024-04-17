const mongoose =  require("mongoose");

//const uri = "mongodb+srv://201306:pwtUEi88GbKVQi35@apistest.4uuw4pp.mongodb.net/?retryWrites=true&w=majority&appName=ApisTest";
const URI = "mongodb+srv://201306:pwtUEi88GbKVQi35@apistest.4uuw4pp.mongodb.net/";
const ConectDB = async () =>{
    try {
        await mongoose.connect(URI,{})
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = ConectDB;