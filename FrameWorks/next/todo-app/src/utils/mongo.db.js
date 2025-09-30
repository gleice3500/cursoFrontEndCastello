import mongoose from 'mongoose';

//arrow function -> conexão
const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelece a conexão com o banco de dados
    .then(()=>console.log("conectaddo ao mongoDB"))
    .catch((err => console.erro("Erro ao conectar no mongoDB")))
}

export default connectMongo;