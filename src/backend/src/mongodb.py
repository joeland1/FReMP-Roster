import pymongo

def setup():
    myclient = pymongo.MongoClient("mongodb://mongo:27017/")
    print("creating db")
    mydb = myclient["students"]