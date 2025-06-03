import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import portada from './imagenes/portada.jpg';
import github from './imagenes/github.png';
import linkedin from './imagenes/linkedin.png';
import gmail from './imagenes/gmail.png';
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
  const [posts, setPost] = useState<PostType[]>([]);

  const nuevoPost = (nuevoPost: PostType) => {
    setPost([...posts, nuevoPost]);
  };

  const eliminarPost = (id: number) => {
  setPost(posts.filter((post) => post.id !== id));
};

  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  return (
    <Router>
      <Routes>
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
                <h1>Soy Benjamín Briolini y este es mi espacio</h1>
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
                  <button
                    style={{
                      border: '2px solid #333546',
                      borderRadius: '15px',
                      padding: '10px 20px',
                      fontSize: '16px',
                    }}
                  >
                    Crear post
                  </button>
                </Link>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {posts.length === 0 ? (
                    <p>No hay posts creados.</p>
                  ) : (
                    posts.map((post) => (
                      <Card
                        key={post.id}
                        sx={{
                          width: 300,
                          margin: '1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          borderRadius: '15px',
                          border: '2px solid #333546',
                          height: 180,
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <CardContent style={{ flexGrow: 1 }}>
                          <Typography variant="h5">{post.title}</Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {post.content}
                          </Typography>
                        </CardContent>
                        <CardActions
                          style={{
                            justifyContent: 'space-between',
                            padding: '0 8px 8px',
                          }}
                        >
                          <Button variant="outlined" color="primary">
                            Ver más
                          </Button>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                              if (window.confirm('¿Estás seguro de que quieres eliminar este post?')) {
                                eliminarPost(post.id);
                              }
                            }}
                          >
                            Eliminar
                          </Button>
                        </CardActions>
                      </Card>
                    ))
                  )}
                </div>
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
                &copy; 2025 Benjamín Briolini. Todos los derechos reservados.
              </footer>
            </div>
          }
        />

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
                <h1 style={{ fontSize: '36px' }}>CREADOR DE POSTS</h1>
              </section>

              <main
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Card sx={{ maxWidth: 300, margin: '1rem' }}>
                  <CardContent>
                    <Typography variant="h5">Nuevo post</Typography>
                    <TextField
                      label="Título"
                      fullWidth
                      margin="normal"
                      value={titulo}
                      onChange={(evento) => setTitulo(evento.target.value)}
                    />
                    <TextField
                      label="Descripción"
                      multiline
                      rows={4}
                      fullWidth
                      margin="normal"
                      value={contenido}
                      onChange={(e) => setContenido(e.target.value)}
                    />
                  </CardContent>
                  <CardActions style={{ justifyContent: 'space-between' }}>
                    <Link to="/">
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => {
                          const nuevo: PostType = {
                            id: posts.length + 1,
                            title: titulo,
                            content: contenido,
                          };
                          nuevoPost(nuevo);
                          setTitulo('');
                          setContenido('');
                          window.alert('Usted ha creado un nuevo post!');
                        }}
                      >
                        Crear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button variant="outlined" color="error">
                        Salir
                      </Button>
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
