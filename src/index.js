const express = require('express');

const app = express();
app.use((req,res) => {
 res.status(200).send("This is express Application") 
})

const port = 3001;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
