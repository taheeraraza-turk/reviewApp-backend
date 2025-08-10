require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product'); // path check kar lo agar different ho toh

const products = [

  {
    title: 'Classic Mug',
    description: 'Ceramic coffee mug, 350ml',
    image: 'https://media.istockphoto.com/id/470789558/photo/coffee-drink-in-cafeteria.jpg?s=612x612&w=0&k=20&c=hAGHDHS10qgbfVScu5WWFyMI-fILBhyF7BwL04jhw9Q=',
    price: 29.99,
  },
  {
    title: 'Wireless Earbuds',
    description: 'Bluetooth 5.2 with case',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoocpwHIvArfVbsUGJvLu8CuXVKMc6Iwdxg&s',
    price: 49.99,
  },
  {
    title: 'Notebook Pro',
    description: 'Hardcover notebook, 200 pages',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80',
    price: 9.99,
  },
  {
    title: 'Desk Lamp',
    description: 'LED lamp with dimmer',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    price: 19.99,
  },


];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Seeding error:', err);
    process.exit(1);
  });

