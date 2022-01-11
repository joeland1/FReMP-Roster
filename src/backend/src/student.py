from flask import Blueprint, jsonify, request
import json

bp = Blueprint('student', __name__, url_prefix='/student')

@bp.route('/create', endpoint='create', methods=['POST'])
def create():
    new_students = json.loads(request.headers['students'])

    return_students = []

    for student in new_students:
        return_students.append(student['name'])

    return jsonify({
        'status': 'ok',
        'result': return_students
    }), 200

@bp.route('/delete', endpoint='delete', methods=['POST','DELETE'])
def delete():
    token = "delet func"
    return jsonify({
        'status': 'ok',
        'result': str(token)
    }), 200