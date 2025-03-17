// index.js: Responsible for starting the server and handling 
// environment configurations.
const port = 8080;
const app = require('./app');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})