const file = require('fs').promises;

class CrearJson2{
    constructor(){}

    GuardarJson(object){
        try{
        let Json = JSON.stringify(object);
          return file.writeFile('./Index2.json', Json);
        }
        catch{
            console.log("no")
        }
    }

}

module.exports = new CrearJson2();