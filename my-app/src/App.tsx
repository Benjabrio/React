import { useEffect, useState } from 'react';

type PostType = {
  id: number;
  title: string;
  content: string;
};

export default function App() {
  const [posts, setPosts] = useState<PostType[]>([]); 
  const [vista, setVista] = useState<'principal' | 'nuevo'>('principal');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
       <header 
        style={{ 
          width: '100%', 
          backgroundColor: '#4a90e2',
          padding: '100px',
          color: 'white',
          textAlign: 'center',
          fontSize: '40px'
        }}
      >
        Mi Blog Personal
      </header>
      {vista === 'principal' && (
      <>
      <h1>Bienvenidos!</h1>
      <h2>Soy Benjamín Briolini y este es mi espacio</h2>
      <h3>Para crear un post, dale al botón "crear post"</h3>
      <button onClick={() => setVista('nuevo')}>Crear post</button>
      {posts.length === 0 ? (
      <p>No hay posts creados.</p>
      ) : null}
      </>
      )}
      
    </div>  
    
  );

}