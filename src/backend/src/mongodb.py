import pymongo

def setup():
    myclient = pymongo.MongoClient("mongodb://mongo:27017/")
    print("creating db")
    mydb = myclient["student_databse"]
    mydb["student_basic"]
    mydb["detailed_info"]

def get_student_db():
    myclient = pymongo.MongoClient("mongodb://mongo:27017/")
    return myclient.student_database.student_basic

def get_student_extended():
    myclient = pymongo.MongoClient("mongodb://mongo:27017/")
    return myclient.student_database.detailed_info