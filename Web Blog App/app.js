const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

app.post('/create', (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: Date.now().toString(), // Unique ID
    title,
    content,
    author,
    createdAt: new Date().toLocaleString(),
  };
  posts.push(newPost);
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  res.render('edit', { post });
});

app.post('/edit/:id', (req, res) => {
  const { title, content, author } = req.body;
  const post = posts.find(p => p.id === req.params.id);
  post.title = title;
  post.content = content;
  post.author = author;
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  posts = posts.filter(post => post.id !== req.params.id);
  res.redirect('/');
});

