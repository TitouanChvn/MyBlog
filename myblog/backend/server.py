from flask import Flask
from flask_cors import CORS,cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route('/feeddata', methods=['GET','POST'])
@cross_origin()
def feed_data():
    return {
  "Feed_content":[
    {
      "id": 1,
      "title": "Titre1",
      "author": "Titoutan",
      "content": "Ici le contenu du post",
      "image": "/images/imagepublic1.jpg",
      "date": "2020-01-01"
    },
    {
      "id": 2,
      "title": "Titre2",
      "author": "Titoutan",
      "content": "Autre contenu de autre post",
      "image": "/images/imagepublic1.jpg",
      "date": "2020-01-01"
    },
    {
      "id": 3,
      "title": "Titre3",
      "author": "Editor2",
      "content": "Contenu d'un autre editeur",
      "image": "/images/imagepublic1.jpg",
        "date": "2020-01-01"
    },
    {
      "id": 3,
      "title": "Encore un autre élément",
      "author": "De Titoutan",
      "content": " BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU BEAUCOUP DE CONTENU ",
      "image": "/images/imagepublic1.jpg",
        "date": "2020-01-01"
    }
  ]
}

if __name__ == '__main__':
    app.run(debug=True)

