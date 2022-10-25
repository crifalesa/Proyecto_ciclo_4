const express = require ("express")
const app = express ()
app.get('/', function (req, res) {
    res.send ("hola tripulantes")
})
const port = 3000;

app.listen(port, () => {
    console.log ("el servidor esta corriendo por el puerto" + port)
});



