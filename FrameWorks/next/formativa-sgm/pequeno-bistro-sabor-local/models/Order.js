import mongoose from 'mongoose';

const PedidoSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },
  items: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, required: true, default: 1 },
  }],
  status: {
    type: String,
    enum: ['Recebido', 'Em Preparo', 'Entregue'],
    default: 'Recebido',
  },
  createdAt: { type: Date, default: Date.now }
});

const Pedido = mongoose.models.Pedido || mongoose.model('Pedido', PedidoSchema);

export default Pedido;
