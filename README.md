Step 1: Planning
Design the Application:

The homepage (/) will display all posts and include a form to create new ones.
Each post should have a title, content, author, creation date, edit, and delete options.
The edit page (/edit/:id) will have a form to update an existing post.
Routes Breakdown:

GET /: Render the homepage with the list of posts and the creation form.
POST /create: Handle the creation of a new blog post.
GET /edit/:id: Render the edit page with the form pre-filled with the current post's data.
POST /edit/:id: Handle the submission of the edited blog post.
POST /delete/:id: Handle the deletion of a blog post.
