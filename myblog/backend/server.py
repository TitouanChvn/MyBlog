from flask import Flask
from flask_cors import CORS,cross_origin
import sqlite3


app = Flask(__name__)
cors = CORS(app)



@app.route('/feeddata', methods=['GET','POST'])
@cross_origin()
def data_from_database():
    conn = sqlite3.connect('backend\MyBlogdb.db')
    list = conn.execute('SELECT * FROM Feedcontent')
    return {
        'Feed_content': [dict(id=row[0], title=row[1], author=row[2], content=row[3], image=row[4], date=row[5]) for row in list.fetchall()]
    }
    


if __name__ == '__main__':
    app.run(debug=True)

