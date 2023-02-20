const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});