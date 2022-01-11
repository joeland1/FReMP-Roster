from flask import Flask, jsonify
import student
import mongodb

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify({
        'hello': 'world'
    })

if __name__ == "__main__":
    mongodb.setup()
    app.register_blueprint(student.bp)
    app.run(host="0.0.0.0")