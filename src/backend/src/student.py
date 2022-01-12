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
    
    student_col = mongodb.get_student_db()
    extra_info = mongodb.get_student_extended()

    for student in new_students:
        student_col.insert_one({
            "_id": student['id'],
            "last_name": student['name']['first'],
            "first_name": student['name']['last'],
            "gpa": student['gpa']
        })

        extra_info.insert_one({
            "_id": student['id'],
            "classes": student['classes']
        })

        return_students.append(student['id'])

    return jsonify({
        'status': 'ok',
        'result': return_students
    }), 200

@bp.route('/get/<netid>', endpoint='get', methods=['GET'])
def get(netid):
    student = mongodb.get_student_db().find_one({'_id': netid})
    if not student:
        return jsonify({
            'status': 'error',
            'desc': 'no student found'
        }), 406
    
    return jsonify({
        'status': 'ok',
        'result': student
    }), 200 

@bp.route('/get/<netid>/all', endpoint='get_plus', methods=['GET'])
def get_plus(netid):
    student_basic = mongodb.get_student_db().find_one({'_id': netid})
    if not student_basic:
        return jsonify({
            'status': 'error',
            'desc': 'no student found'
        }), 406
    
    extended_info = mongodb.get_student_extended().find_one({'_id': netid})

    return jsonify({
        'status': 'ok',
        'result': student_basic | extended_info
    }), 200

@bp.route('/delete/<netid>', endpoint='delete', methods=['POST','DELETE'])
def delete(netid):
    
    if mongodb.get_student_db().delete_one({'_id': netid}).deleted_count == 0:
        return jsonify({
            'status': 'error',
            'result': 'student not found'
        }), 406

    mongodb.get_student_extended().delete_one({'_id': netid})

    return jsonify({
        'status': 'ok',
        'result': netid
    }), 200

#this should be done for other stuff but just going to modify classes
#class:{'name': class_name_here}
@bp.route('/modify/<netid>', endpoint='modify_add', methods=['POST'])
def modify_add(netid):
    mongodb.get_student_extended().update_one({'_id': netid},{'$push':{'classes': json.loads(request.headers['class'])}})
    return jsonify({
        'status': 'ok',
        'change': 'add',
        'target': request.headers['class']
    }), 200

@bp.route('/modify/<netid>', endpoint='modify_del', methods=['DELETE'])
def modify_del(netid):
    target_class = json.loads(request.headers['class'])