from pymongo import MongoClient

client = MongoClient("mongodb://root:rootpassword123@127.0.0.1:27017/admin")

db = client.test_db
collection = db.test_collection

collection.insert_one({"name": "RouteGo"})
print(list(collection.find()))
