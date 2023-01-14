import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const PageCreateElement = () => {
  const navigate = useNavigate();
  

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);



  const handleSubmit = async event => {
    event.preventDefault();
    if (!title || !author || !date || !description || !image) {
      alert('Please fill all the fields')
      return
    }
    // Traitement des données du post
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('image', image);


    console.log(image);
    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      if (!response.ok) {
        console.log("erreur de débutant");
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
      navigate('/');
    }

    // Redirection vers la page d'accueil
    navigate('/');
  }



  return (
    <div className="container">
      <div className="form-title">Nouveau Post</div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
        <input type="file" onChange={event => setImage(event.target.files[0])} id="image" name='image' />
      </div>


      <input type="submit" value="Créer le post" className='ButtonLogin'/>
    </form>
    </div>
  )
}

export default PageCreateElement
