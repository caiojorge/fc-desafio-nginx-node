const express = require('express');
const app = express()
const port = 3000
const mysql = require('mysql');
const nomes = ['Wesley','Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Julia'];

function random() {
    const index = Math.floor(Math.random() * nomes.length);
    return nomes[index];
}

function saveOnDb(){
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database:'desafio'
    };

    try {
        const nome = random();
        const connection = mysql.createConnection(config)
        const sql = `INSERT INTO people(nome) values(?)`
        connection.query(sql, [nome], (error, results, fields) => {
            if (error) {
                return console.log(error);
            }
            console.log('Nome inserido com sucesso!')
        });

        connection.end()
    } catch (error) {
        console.log(error)
    }
    
}

function getPeople(callback){
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database:'desafio'
    };

    try {
        const connection = mysql.createConnection(config)
    
        const sql = 'SELECT * FROM people';

        connection.query(sql, (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        connection.end();
        callback(null, results);
    });
    } catch (error) {
        console.log(error)  
    }
    
}

try {
    saveOnDb();
} catch (error) {
    console.log(error)
}

app.get('/', (req,res) => {
    //res.send('<h1>Full Cycle</h1>')
    getPeople((error, people) => {
        if (error) {
            res.send('<h1>Full Cycle</h1>')
            return;
        }
        res.send('<h1>Full Cycle</h1><ul>' + people.map(p => `<li>${p.nome}</li>`).join('') + '</ul>');
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

