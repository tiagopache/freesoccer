require('any-promise/register/q');

import app from './config/App';
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Free Soccer listening port ${port}`);
});
