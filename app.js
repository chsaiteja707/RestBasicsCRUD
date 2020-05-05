const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const url='Add your key here';

const dataRoutes=require('./routes/dataroutes');
const adminRoutes=require('./routes/adminroutes');

const app=express();

app.use(bodyParser.json());
app.use(dataRoutes);
app.use(adminRoutes);

mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
  .then(result => {
    console.log('connected to db')
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });