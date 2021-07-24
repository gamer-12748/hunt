const express = require('express');
const app = express();
const port = process.env.PORT || 5090;
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//api for coockie changing ctf.
app.get('/api/hddn', (req, res) => {
    console.log(req.query)
    let secret = req.query.secret || null;
    if (secret == "newshepard") {
        res.send({
            "heading": "we really miss bhyi.tk but if you search well enough you may find an archive of it with a current ts member. it really has some well-known contributors.",
            "comment": "gYs9nS8LlZ8"
        })
    }
    else {
        res.send({ "heading": "sidney monster is your friend here", "comment": "once you figure it out, check out :the start of the hundred years war" })
    }
})

app.get('/dino', function(req, res) {
    res.sendFile(path.join(__dirname, '/dino.html'));
  });
  
  
//ejs file for cookie changing ctf.
app.get('*', async (req, res) => {
    res.render('index', { title: 'ChepBin' })
})

app.listen(port, () => console.log(`Server is running on port ${port} likely on localhost, if not on localhost then you are in production but you already know that!`));