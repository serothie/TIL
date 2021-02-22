import pymysql
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

from flask import jsonify
from flask import request
from flask import session

from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash

app = Flask(__name__)
api = Api(app)

db = pymysql.connect(
        user = 'root',
        passwd = '372114',
        host = '127.0.0.1',
        port = 3306,
        db = 'backend_assignment',
        charset = 'utf8'
    )
cursor = db.cursor()

"""
Board APIs - 게시판 CRUD

Create API : name 을 입력받아 새로운 게시판을 만듭니다.
Read API : 현재 등록된 게시판 목록을 가져옵니다.
Update API : 기존 게시판의 name 을 변경합니다.
Delete API : 특정 게시판을 제거합니다.
"""

parser = reqparse.RequestParser()
parser.add_argument('id')
parser.add_argument('name')

class Board(Resource):
    def get(self):
        sql = "SELECT id, name FROM `board`"
        cursor.execute(sql)
        result = cursor.fetchall()
        return jsonify(status = "success", result = result)
        
    def post(self):
        args = parser.parse_args()
        sql = "INSERT INTO `board` (`name`) VALUES (%s)"
        cursor.execute(sql, (args['name']))
        db.commit()
        return jsonify(status = "success", result = {"name": args["name"]})
        
    def put(self):
        args = parser.parse_args()
        sql = "UPDATE `board` SET name = %s WHERE `id` = %s"
        cursor.execute(sql, (args['name'], args["id"]))
        db.commit()    
        return jsonify(status = "success", result = {"id": args["id"], "name": args["name"]})
    
    def delete(self):
        args = parser.parse_args()
        sql = "DELETE FROM `board` WHERE `id` = %s"
        cursor.execute(sql, (args["id"], ))
        db.commit()
        return jsonify(status = "success", result = {"id": args["id"]})

api.add_resource(Board, '/board')

"""
BoardArticle APIs - 게시판 글 CRUD

Create API : title, content 를 입력받아 특정 게시판(board)에 새로운 글을 작성합니다.
Read API : 게시판의 글 목록을 가져오거나, 특정 게시판(board)에 글의 내용을 가져옵니다.
Update API : 게시판 글의 title, content를 변경합니다.
Delete API : 특정 게시판 글을 제거합니다.
"""

parser.add_argument('id')
parser.add_argument('title')
parser.add_argument('content')
parser.add_argument('board_id')

class BoardArticle(Resource):
    def get(self, board_id=None, board_article_id=None):
        if board_article_id:
            sql = "SELECT id, title, content FROM `boardArticle` WHERE `id` = %s AND `board_id` = %s"
            cursor.execute(sql, (board_article_id, board_id,))
            result = cursor.fetchone()
        else:
            sql = "SELECT id, title, content FROM `boardArticle` WHERE `board_id` = %s"
            cursor.execute(sql, (board_id,))
            result = cursor.fetchall()
        return jsonify(status='success', result=result)
    
    def post(self, board_id):
        args = parser.parse_args()
        sql = "INSERT INTO `boardArticle` (`title`, `content`, `board_id`) VALUES (%s, %s, %s)"
        cursor.execute(sql, (args['title'], args['content'], board_id))
        db.commit()

        return jsonify(status=" success", result = {"title": args["title"], "content": args["content"], "board_id": board_id})
    
    def put(self, board_id, board_article_id):
        args = parser.parse_args()
        sql = "UPDATE `boardArticle` SET title = %s, content = %s WHERE `id`= %s AND `board_id`= %s"
        cursor.execute(sql, (args['title'], args['content'], board_article_id, board_id))
        db.commit()
        return jsonify(status=" success", result = {"title": args["title"], "content": args["content"], "board_article_id": board_article_id, "board_id": board_id})
    
    def delete(self, board_id, board_article_id):
        args = parser.parse_args()
        sql = "DELETE FROM `boardArticle` WHERE `id`= %s"
        cursor.execute(sql, (args['id'],))
        db.commit()
        return jsonify(status = "success", result = {"id": args["id"]})

api.add_resource(BoardArticle, '/board/<board_id>', '/board/<board_id>/<board_article_id>')

"""
User APIs : 유저 SignUp / Login / Logout

SignUp API : *fullname*, *email*, *password* 을 입력받아 새로운 유저를 가입시킵니다.
Login API : *email*, *password* 를 입력받아 특정 유저로 로그인합니다.
Logout API : 현재 로그인 된 유저를 로그아웃합니다.
"""

app.config.from_mapping(SECRET_KEY='dev')

parser.add_argument('id')
parser.add_argument('fullname')
parser.add_argument('email')
parser.add_argument('password')

@app.route('/auth/signup', methods=['GET', 'POST'])
def signup():
    args = parser.parse_args()
    if request.method == 'POST':
        sql = "SELECT `email` FROM `user` WHERE `email` = %s"
        cursor.execute(sql, (args['email'],))
        result = cursor.fetchone()
        if result:
            return jsonify(status = "failure", result = {'message': f"email '{args['email']}' is already registered'"})
        else:
            pw_hash = generate_password_hash(args['password'])
            sql = "INSERT INTO `user` (`fullname`, `email`, `password`) VALUES (%s, %s, %s)"
            cursor.execute(sql, (args['fullname'], args['email'], pw_hash))
            db.commit
            return jsonify(status = "success", result = {"fullname": args["fullname"], "email": args["email"], "password": pw_hash})
    else:
        sql = "SELECT `fullname`, `email`, `password` FROM `user`"
        cursor.execute(sql)
        result = cursor.fetchall()
        return jsonify(status = "success", result = result)
        

@app.route('/auth/login', methods=['GET', 'POST'])
def login():
    args = parser.parse_args()
    if request.method == 'POST':
        sql = "SELECT `password` FROM `user` WHERE `email` = %s"
        cursor.execute(sql, (args['email'],))
        result = cursor.fetchone()
        if result:
            if check_password_hash(result[0], args['password']):
                session.clear()
                session['user_email'] = args['email']
                return jsonify(status = 'success', session = session['user_email'], result = {'message': f"email '{args['email']}' is logged in'"})
            else:
                return jsonify(status = 'failure', result = {'message': f"email '{args['email']}' password is wrong'"})
        else:
            return jsonify(status = "failure", result = {'message': f"email '{args['email']}' is not registered"})
            
@app.route('/auth/logout')
def logout():
    msg = {'message': f"email '{session['user_email']}' is logged out"}
    session.clear()
    return jsonify(status = 'success', result = {'message': msg})

"""
Dashboard APIs
RecentBoardArticle API : 모든 게시판에 대해 각각의 게시판의 가장 최근 n 개의 게시판 글의 title 을 가져옵니다. 
(k 개의 게시판이 있다면 최대 k * n 개의 게시판 글의 title 을 반환합니다.)
"""

class DashBoard(Resource):
    def get(self):
        sql = "SELECT title FROM `boardArticle`"
        cursor.execute(sql)
        result = cursor.fetchall()
        return jsonify(status='success', result=result)
    
api.add_resource(DashBoard, '/dashboard')