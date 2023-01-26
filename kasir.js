const express = require ("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasir"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

//BAGIAN PELANGGAN
app.get("/khasir", (req, res) => {
    
    let sql = "select * from data_pelanggan"

   
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_pelaggan : result 
            }            
        }
        res.json(response) 
    })
})


app.get("/khasir/:id", (req, res) => {
    let data = {
        id_pelanggan: req.params.id
    }
   
    let sql = "select * from data_pelanggan where ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_pelanggan: result 
            }            
        }
        res.json(response) 
    })
})



app.post("/khasir", (req,res) => {

  
    let data = {
        id_pelanggan: req.body.id_pelanggan,
        nama_pelanggan: req.body.nama_pelanggan,
    }

   
    let sql = "insert into data_pelanggan set ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})


app.put("/khasir", (req,res) => {

   
    let data = [
    
        {
            id_pelanggan: req.body.id_pelanggan,
            nama_pelanggan: req.body.nama_pelanggan,
           
        },

        
        {
            id_pelanggan: req.body.id_pelanggan
        }
    ]

   
    let sql = "update data_pelanggan set ? where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})



app.delete("/khasir/:id", (req,res) => {
    
    let data = {
        id_pelanggan : req.params.id
    }

    
    let sql = "delete from siswa where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})


//BAGIAN KASIR


app.get("/kasir", (req, res) => {
    
    let sql = "select * from kasir"

   
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                kasir : result 
            }            
        }
        res.json(response) 
    })
})


app.get("/kasir/:id", (req, res) => {
    let data = {
        id_kasir: req.params.id
    }
   
    let sql = "select * from kasir where ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                kasir: result 
            }            
        }
        res.json(response) 
    })
})



app.post("/kasir", (req,res) => {

  
    let data = {
        id_kasir: req.body.id_kasir,
        nama_kasir: req.body.nama_kasir,
        status_kasir : req.body.status_kasir
    }

   
    let sql = "insert into kasir set ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})


app.put("/kasir", (req,res) => {

   
    let data = [
    
        {
            id_kasir: req.body.id_kasir,
            nama_kasir: req.body.nama_kasir,
            status_kasir : req.body.status_kasir
        },

        
        {
            id_kasir: req.body.id_pelanggan
        }
    ]

   
    let sql = "update kasir set ? where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})



app.delete("/kasir/:id", (req,res) => {
    
    let data = {
        id_kasir : req.params.id
    }

    
    let sql = "delete from kasir where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

//BAGIAN MENU

app.get("/menu", (req, res) => {
    
    let sql = "select * from menu"

   
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                menu : result 
            }            
        }
        res.json(response) 
    })
})


app.get("/menu/:id", (req, res) => {
    let data = {
        id_menu: req.params.id
    }
   
    let sql = "select * from menu where ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                menu: result 
            }            
        }
        res.json(response) 
    })
})



app.post("/menu", (req,res) => {

  
    let data = {
        id_menu: req.body.id_menu,
        nama_menu: req.body.nama_menu,
        kategori: req.body.id_kategori,
        harga_menu: req.body.harga_menu,
        stok: req.body.stok,
        
    }

   
    let sql = "insert into menu set ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})


app.put("/menu", (req,res) => {

   
    let data = [
    
        {
            id_menu: req.body.id_menu,
            nama_menu: req.body.nama_menu,
            kategori: req.body.id_kategori,
            harga_menu: req.body.harga_menu,
            stok: req.body.stok,
           
        },

        
        {
            id_menu: req.body.id_menu
        }
    ]

   
    let sql = "update menu set ? where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})



app.delete("/menu/:id", (req,res) => {
    
    let data = {
        id_menu : req.params.id
    }

    
    let sql = "delete from menu where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})


app.listen(8000, () => {
    console.log("mantap")
})

