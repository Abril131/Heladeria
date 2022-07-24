
const comentar = () => {
    listaC = JSON.parse(localStorage.getItem("auxComentario"))
    console.log(listaC)

    let comentarioC = document.getElementById("contenido").value
    let cadena = ""

    comentarioC = (comentarioC == "") ? "" : comentarioC
    listaC.push({comentario: comentarioC})

    let longitud = listaC.length

    for (let i=0; i<longitud; i++){
        cadena += listaC[i].comentario+"\n";
    }

    document.getElementById("comentarios").innerHTML = cadena
    localStorage.setItem("auxComentario",JSON.stringify(listaC))
}

/*const lista=[];
let i = 0;

const comentar = () => {
    let comentario = document.getElementById("contenido").value;
    document.getElementById("comentarios").innerHTML=comentario;
}

const mostrarCom = () => {
    let comen = document.getElementById("contenido").value;
    let longitud = lista.length;
    lista [i] = {coment:comen};
    

    for(j = 0; j<longitud; j++){
        cadena += lista[j].coment + "\n";
    }
    document.getElementById("comentarios").innerHTML = cadena;
    console.log("Comentarios "+i+" : "+lista[j]);
    i++;
}*/


/*const mostrarCom2 = () => {
   
    
}*/