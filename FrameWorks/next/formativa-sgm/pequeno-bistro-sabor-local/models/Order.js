import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: { type: Number, default: 1 },
    }
  ],
  status: {
    type: String,
    enum: ['Recebido', 'Em Preparo', 'Entregue'],
    default: 'Recebido',
  },
  total: { type: Number, default: 0 },
  closed: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
