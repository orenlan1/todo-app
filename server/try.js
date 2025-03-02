

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://lanoren2:test123@cluster0.zhyz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { 
  tls: true, 
  tlsAllowInvalidCertificates: true, 
  autoSelectFamily: false,
});

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    await client.close();
  }
}

run();
