import {NowRequest, NowResponse} from '@vercel/node'
import {MongoClient, Db} from 'mongodb'
import url from 'url'; //Alows break uri's
//Hot start serveless use cache to prevent many conections with server,
// share the variable with other servless functions
let cachedDb: Db = null;


async function connectToDatabase(uri: string){
  if(cachedDb){
    return cachedDb;
  }
  //Gives Aceess to db server
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // prevent errors of mongo warning etc at connection
  });

  const dbName = url.parse(uri).pathname.substr(1); //return /tokens database
  const db = client.db(dbName);
  //set cachedDb if was de first conection
  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response:NowResponse) =>{

  const { email } = request.body;
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('tokens');
  await collection.insertOne({
    email,
    checkinAt: new Date(),
  })

  return response.status(201).json({ok : true});
}