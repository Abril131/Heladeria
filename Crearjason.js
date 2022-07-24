const file = require('fs').promises;
//const JsonChido = require('../Index.json');
class CrearJson{
    constructor(){}

    GuardarJson(object){
        try{
        let Json = JSON.stringify(object);
          return file.writeFile('./Index.json', Json);
        }
        catch{
            console.log("no")
        }
    }

}

module.exports = new CrearJson();