var express = require('express'),                    //modulo para comunicação via http
    bodyParser = require('body-parser'),             //modulo para pega as variaveis do body
    mongodb = require('mongodb'),                    //modulo nativo de mongodb
    objectId = require('mongodb').ObjectId,          //transforma parametros em json, será explicado com mais detalhes em suas aplicações.
    cors = require('cors');    //modulo para possiveis problemas com o acess-control--allow-origin com as aplicações

var app = express();    //abrindo conexão com o express(http)

var db = new mongodb.Db(                    //configurando a comunicação com o banco de dados.
    'indoor',                              //utilizar o documento indoor.
    new mongodb.Server('localhost', 27017, {}),     //configurando o ip a ser utilizado e a porta do banco de dados.
    {}
);


//Ativando middlewares
app.use(bodyParser.urlencoded({extended: true})); //pegar variaveis do body com formato xml.
app.use(bodyParser.json());      //pegar variaveis do body com formato json
app.use(cors());    //configuração de controle remoto

//criação de lista de sites que podem utilizar a sua API, utilizar isto quando a aplicação for implementada em grande escala.
/*   QUANDO FOR COLOCAR ISTO EM AÇÃO EM CADA ROTA COLOCAR cors(corsOptionsDelegate), Para mais detalhes: https://www.npmjs.com/package/cors
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  }else{
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
*/
var port = 8080;          //definir porta
app.listen(port);         //escutar a porta


console.log('Servidor HTTP esta escutando na porta ' + port); //log para mostrar que conseguiu rodar a api com sucesso e em qual porta.

//Get All Scanners
app.get('/api-iot/scanners', function (req, res) {   //rota definida para receber get na extensão '/api-iot/scanners'
    console.log("get all scanners stored in DB");   //log para saber que entrou nesta função.

    db.open(function (err, mongocliente) {     //abrindo comunicação com o banco
        mongocliente.collection('scanners', function (err, collection) {   //selecionando qual coleção vai utilizar
            collection.find().toArray(function (err, result) {  //procurando todos os documentos no banco da coleção scanners
                console.log(result);//console para mostrar todas as informações de todos os scanners O formato é de vetor
                res.send(result);   //mandando a informação para quem pesquisa
                mongocliente.close();  //fechando comunicação com o banco.
            });
        });
    });
});
//GET scanners by name
app.get('/api-iot/scanners/:name', function (req, res) {
    var data = req.params;
    console.log(data);
    db.open(function (err, mongocliente) {
        mongocliente.collection('scanners', function (err, collection) {
            collection.find(data).toArray(function (err, result) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(result);
                }
                mongocliente.close();
            });
        });
    })
});

//Get ALL beacons
app.get('/api-iot/beacons', function (req, res) {

    console.log("get all beacons stored in DB");   //log para saber que entrou nesta função.
    db.open(function (err, mongocliente) {    //abrindo comunicação com o banco
        mongocliente.collection('beacons', function (err, collection) {   //selecionando qual coleção vai utilizar
            collection.find().toArray(function (err, result) {   //procurando todos os documentos no banco da coleção scanners
                res.json(result);     //log para mostrar todos os beacons  no console
                console.log(result);  //mandando a informação para quem pesquisa
                mongocliente.close();   //fechando comunicação com o banco.
            });
        });
    });
});
//GET scanners by name
app.get('/api-iot/beacons/:name', function (req, res) {
    var data = req.params;
    console.log(data);
    db.open(function (err, mongocliente) {
        mongocliente.collection('beacons', function (err, collection) {
            collection.find(data).toArray(function (err, result) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(result);
                }
                mongocliente.close();
            });
        });
    })
});

//Register New Beacons
app.post('/api-iot/beacons/insert', function (req, res) {     //rota definida como "/api-iot/beacons" e metodo de requisição definido como post
    //dando acesso a captura de informações via scripts ( web/mobile etc..)
    console.log("Post beacons into DB");   //log para informar que chegou neste função
    var data = req.body;   //está capturando a informação que foi mandanda para a aplicação (no caso da web o body).
    console.log("beacons:" + data);       //mostrando no console qual a informação que está chegando.
    db.open(function (err, mongocliente) {             //abrindo conexão com o banco
        mongocliente.collection('beacons', function (err, collection) {     //selecionando a coleção do beacon.
            collection.findOne({"addr": data.addr}, function (err, document) {  //está procurando no banco um beacon que tenha o mesmo addr.
                if (document === null) {                   //está verificando se achou algum beacon com o mesmo addr
                    collection.insert(data);                //está inserindo a informação coletada, no banco de dados na coleção beacons.
                    res.send("insert :" + data + "into db");  //está mandando um xml dizendo que a informação foi cadastrada.

                }
                else {
                    console.log("documento ja existente");   //dando um log no console mostrando que ja existe um beacons com o addr em questão, futuramente colocar uma mensagem de retorno para o cliente que foi impossivel cadastrar pelo motivo de ja existir.
                }
                mongocliente.close();//está fechando o banco antes de inserir.
            });
        });
    });
});
//Register New Scanners
app.post('/api-iot/scanners/insert', function (req, res) {     //rota definida como "/api-iot/scanners" e metodo de requisição definido como post
    // res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Post beacons into DB");   //log para informar que chegou neste função
    var data = req.body;   //está capturando a informação do body da aplicação.

    console.log("Scanners:" + JSON.stringify(data));       //mostrando no console qual a informação que está chegando.
    db.open(function (err, mongocliente) {             //abrindo conexão com o banco
        mongocliente.collection('scanners', function (err, collection) {     //selecionando a coleção scanners.
            collection.findOne({"addr": data.addr}).then(function (sucess) {
                if (sucess === null) {                   //está verificando se achou algum scanner com o mesmo addr
                    collection.insert(data);                //está inserindo a informação coletada, no banco de dados na coleção scanner.
                    res.send("insert :" + data + "into db");  //está mandando um xml dizendo que a informação foi cadastrada.
                }
                else {
                    console.log("documento ja existente");   //dando um log no console mostrando que ja existe um scanner com o addr em questão, futuramente colocar uma
                    res.send("tudo ok");//mensagem de retorno para o cliente que foi impossivel cadastrar pelo motivo de ja existir.
                }
                mongocliente.close();    //fechando comunicação com o banco.
            }).catch(function (error) {
                res.JSON(error);
            });
        });

    });
});


