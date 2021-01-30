# Flask with MongoDB

## Ⅰ. Introduction

> - Flask와 MongoDB를 연결하여 간단한 웹 어플리케이션 구현
> - csv 리더를 활용하여 데이터를 읽어온 후 MongoDB에 연동하여 데이터베이스 생성 및 저장

## Ⅱ. Get Started - Flask 연동 및 데이터베이스 생성

```python
import pymongo
import csv

# Flask 연동
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 데이터베이스 연결, 컬렉션과 데이터베이스 생성 / 컬렉션 배치
client = pymongo.MongoClient('localhost', 27017)
db = client["netflix"]
col = db["titles"]
```

## Ⅲ. csv.DictReader

```python
# csv 파일을 읽기모드로 오픈 후 딕셔너리 형태로 읽어오기
reader = open('netflix_titles.csv', 'r')
data = csv.DictReader(reader, ('show_id', 'type', 'title', 'director', 'cast', 'country', 'date_added', 'release_year', 'rating', 'duration', 'listed_in', 'description'))

result = col.insert_many(data)
```

## Ⅳ. URL 설계(routing)

```python
# html 화면을 출력
@app.route("/")
def main():
    return render_template('main.html')

@app.route("/save", methods=['POST'])
def save():
    data = {
        "show_id": request.form['show_id'],
        "type": request.form['type'],
        "title": request.form['title'],
        "director": request.form['director'],
        "cast": request.form['cast'],
        "country": request.form['country'],
        "date_added": request.form['date_added'],
        "release_year": request.form['release_year'],
        "rating": request.form['rating'],
        "duration": request.form['duration'],
        "listed_in": request.form['listed_in'],
        "description": request.form['description'],
    }
    res = col.insert(data)
    return render_template('main.html')

@app.route("/list", methods=['GET'])
def list_title():
    count = col.count_documents({})
    title = col.find({})
    return render_template('list.html', count=count, title=title)

@app.route("/netflix/<show_id>", methods=['GET'])
def netflix(show_id):
    netflix = col.find_one({ 'show_id': show_id })
    return render_template('netflix.html', netflix=netflix)


# 특정 작품의 상세 정보를 출력하는 메소드
@app.route('/get', methods=['POST'])
def get():
    title_name = request.form['title']
    searched = col.find_one({'title':title_name})
    if searched:
        show_id = searched['show_id']
        return redirect(url_for('netflix', show_id=show_id))
    else:
        error = "Could not find that netflix"
        return render_template('main.html', error=error)
```
