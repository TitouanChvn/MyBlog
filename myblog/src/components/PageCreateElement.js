import React, { useState } from 'react';

const PageCreateElement = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitement des données du post
    console.log("Post créé : ", { title, author, date, description, image });
  }



  return (
    <div className="container">
      <div className="form-title">Nouveau Post</div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Titre : </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>

      <div className="form-control">
      <label>Auteur :</label>
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
      </div>

      <div className="form-control">
      <label>Date :</label>
        <input type="text" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="form-control">
      <label>Description :</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>

      <div className="form-control">
      <label>Image :</label>
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>


      <input type="submit" value="Créer le post" className='ButtonLogin'/>
    </form>




    </div>
  )
}

export default PageCreateElement
