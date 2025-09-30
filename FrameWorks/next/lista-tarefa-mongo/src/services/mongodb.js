//fazer a conexão com o MongoDB (mongoose)

const { default: mongoose } = require("mongoose")


// arrowFunction 

const connectMongo =  async () => {

    mongoose.connect(process.env.DATABASE_URL) //estabelece conexão com BD
          .then(() => console.log("conectou com o MongoDb"))
          .catch(err => console.error("erro ao conectar", err));
          
          //conexão simples com MongoDB
}

export default connectMongo;
//modulo pode ser usado em outras ações do código
