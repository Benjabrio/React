import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//Imagenes de los logos del contacto
import portada from './imagenes/portada.jpg';
import github from './imagenes/github.png';
import linkedin from './imagenes/linkedin.png';
import gmail from './imagenes/gmail.png';
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';

type PostType = {
  id: number;
  title: string;
  content: string;
};

export default function App() {
  const [posts] = useState<PostType[]>([]);

  return (
    <Router>
      <Routes>
        {/* Ruta principal (home) */}
        <Route
          path="/"
          element={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                alignItems: 'center',
              }}
            >
              <header
                style={{
                  width: '100%',
                  backgroundColor: '#333546',
                  padding: '0',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '40px',
                }}
              >
                <img
                  src={portada}
                  alt="Portada"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </header>

              <section
                id="sobre-mi"
                style={{
                  backgroundColor: '#333546',
                  padding: '0',
                  width: '100%',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <div>
                  <h1>Soy Benjamín Briolini y este es mi espacio</h1>
                </div>
              </section>

              <main
                style={{
                  backgroundColor: '#A2845E',
                  padding: '0',
                  boxSizing: 'border-box',
                  width: '100%',
                  color: 'white',
                  textAlign: 'center',
                  flex: 1,
                }}
              >
                <h2>Bienvenidos a mi blog personal!</h2>
                <h3>Para crear un post, dale al botón "crear post"</h3>
                <Link to="/nuevo">
                  <button>Crear post</button>
                </Link>
                {posts.length === 0 ? <p>No hay posts creados.</p> : null}
              </main>

              <section
                id="contacto"
                style={{
                  backgroundColor: '#333546',
                  padding: '2px 0',
                  width: '100%',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <div>
                  <h2>Contacto</h2>
                  <a href="https://github.com/Benjabrio" target="_blank">
                    <img
                      src={github}
                      alt="GitHub"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/benjamín-briolini/"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </a>
                  <a href="mailto:benjamin.briolini@gmail.com">
                    <img
                      src={gmail}
                      alt="Gmail"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </a>
                </div>
              </section>

              <footer
                style={{
                  backgroundColor: '#333546',
                  color: 'white',
                  padding: '15px 0',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <div>&copy; 2025 Benjamín Briolini. Todos los derechos reservados.</div>
              </footer>
            </div>
          }
        />

        {/* NUEVA PÁGINA con ruta /nuevo  */}
        <Route
          path="/nuevo"
          element={
            <div
              style={{
                backgroundColor: '#333546',
                color: 'white',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <header
                style={{
                  width: '100%',
                  backgroundColor: '#333546',
                  padding: '15px 0',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '40px',
                }}
              ></header>

              <section
                id="sobre-mi"
                style={{
                  backgroundColor: '#A2845E',
                  padding: '2px 0',
                  width: '100%',
                  color: 'white',
                  textAlign: 'center',
                }}
                >
                  <h1 style={{fontSize:'36px'}}>CREADOR DE POSTS</h1>
              </section>


              <main style={{ padding: '20px', textAlign: 'center'}}>
                <Card sx={{ maxWidth: 300, margin: '1rem' }}>
                  <CardContent>
                    <Typography variant="h5">Nuevo post</Typography>
                    <TextField label="Título" fullWidth margin="normal" />
                    <TextField label="Descripción" multiline rows={4} fullWidth margin="normal" />
                  </CardContent>
                  <CardActions style={{ justifyContent: 'space-between' }}>
                    <Button variant="outlined" color="success">Crear Post</Button>
                    <Link to="/">
                      <Button variant="outlined" color="error">Volver</Button>
                    </Link>
                  </CardActions>
                </Card>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
