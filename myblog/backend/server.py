from flask import Flask,request
from flask_cors import CORS,cross_origin
import sqlite3
import os


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def get_free_post_id():
    conn = sqlite3.connect('backend\MyBlogdb.db')
    list = conn.execute('SELECT * FROM Feedcontent')
    id_used=[]
    new=1
    for row in list.fetchall():
        id_used.append(row[0])
    id_used.sort()
    #print(id_used)
    while new in id_used:
        new+=1    
    return new

        


@app.route('/feeddata', methods=['GET','POST'])
@cross_origin()
def data_from_database():
    conn = sqlite3.connect('backend\MyBlogdb.db')
    list = conn.execute('SELECT * FROM Feedcontent')
    return {
        'Feed_content': [dict(id=row[0], title=row[1], author=row[2], content=row[3], image=row[4], date=row[5]) for row in list.fetchall()]
    }


@app.route('/login', methods=['GET','POST'])
@cross_origin()
def login_id():
    return {'Log': {'login' : '1'}}


@app.route('/posts', methods=['GET','POST'])
@cross_origin()
def posts():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        content = request.form['description']
        image = request.files['image']
        date = request.form['date']
        print(title)
        print(author)
        print(content)
        print(image)
        print(date)
    id = get_free_post_id()
    if image:
        filename = image.filename
        #if file already exists in the folder, delete it
        try:
            os.remove(f"public\images\{id}.jpg")
        except:
            pass
        image.save(f"public\images\{id}.jpg")
        image_path_saved="images\\"+str(id)+".jpg"
    print(title, author, content, image, date)
    conn = sqlite3.connect('backend\MyBlogdb.db')
    #create a new post in the database
    conn.execute('INSERT INTO Feedcontent (id,title, author, content, image, date) VALUES (?,?,?,?,?,?)', (id,title, author, content,image_path_saved, date))
    conn.commit()
    conn.close()
    return '', 204


@app.route('/deletePost', methods=['POST'])
@cross_origin()
def deletePost():
    if request.method == 'POST':
        id = request.form['id']
        print(id)
        conn=sqlite3.connect('backend\MyBlogdb.db')
        conn.execute('DELETE FROM Feedcontent WHERE id=?', (id,))
        conn.commit()
        conn.close()
        try:
            os.remove(f"public\images\{id}.jpg")
        except:
            pass
        
        return '', 204


if __name__ == '__main__':
    app.run(debug=True)

