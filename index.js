const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('food_final_part', 'initial_value', { httpOnly: false });
  next();
});

app.get('/', (req, res) => {
  const foodCookie = req.cookies.food_final_part;

  let htmlContent;
  if (foodCookie === 'corn') {
    htmlContent = '<h1>Here is the final part: flagCES{+hm89m_ed2} </h1>';
  } else {
    htmlContent = '<h1>Access Denied!</h1>';
  }

  // Send the HTML content
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
