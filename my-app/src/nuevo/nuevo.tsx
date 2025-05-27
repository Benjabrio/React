import { useEffect, useState } from 'react';

export default function App() {
  const [vista, setVista] = useState<'principal' | 'nuevo'>('nuevo');
  
  return (
    <div>
      {vista === 'nuevo' && (
      <>
      <h1>Crear post</h1>
      <h3>Ingrese título</h3>
      <button onClick={() => setVista('principal')}>Crear post</button>
      </>
      )}
    </div>  
  );

}