const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const DB = 'mongodb+srv://Tanishaa:tanisha31@atlascluster.hlmvjmy.mongodb.net/Mernuser?retryWrites=true&w=majority&appName=AtlasCluster'
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(DB).then(() => {

  console.log('MongoDB database connection established successfully');
}).catch(() => console.log('no connectionm'));

// Define routes here

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
