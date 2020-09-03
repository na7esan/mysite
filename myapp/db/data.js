require('dotenv').config();
const data = {
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
  mongoClusterName: process.env.MONGO_CLUSTER_NAME,
  mongoDbName: process.env.MONGO_DB_NAME
}
console.log(process.env.KEY1);  //=> VALUE1
console.log(process.env.KEY2);  //=> VALUE2
console.log(process.env.KEY3);  //=> VALUE3

exports.data = data;
