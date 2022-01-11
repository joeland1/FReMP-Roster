from flask import Blueprint, jsonify, request
import json
import mongodb

bp = Blueprint('student', __name__, url_prefix='/student')
# mongoclient[db][table]
'''
student

{
    name: {
        first:
        last:
    }
    id: 
    gpa: 
    classes: [
        {name: }
    ]
}

'''
@bp.route('/create', endpoint='create', methods=['POST'])
def create():
    new_students = json.loads(request.headers['students'])

    return_students = []

    for student in new_students:
        student_col = mongodb.get_student_db()
        student_col.insert_one({"_id": student['id']})
        return_students.append(student['id'])

    return jsonify({
        'status': 'ok',
        'result': return_students
    }), 200

@bp.route('/get/<netid>', endpoint='get', methods=['GET'])
def get(netid):
    if not mongodb.get_student_db().find_one({'_id': netid}):
        return jsonify({
            'status': 'error',
            'desc': 'no student found'
        })
    
    return jsonify({
        'status': 'ok',
        'result': 
    }), 200 

@bp.route('/delete', endpoint='delete', methods=['POST','DELETE'])
def delete():
    token = "delet func"
    return jsonify({
        'status': 'ok',
        'result': str(token)
    }), 200