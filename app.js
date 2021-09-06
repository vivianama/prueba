//var tareas = require('./tareas.json')
var fs = require('fs')
var tareas = fs.readFileSync('./tareas.json', 'utf-8')
let tareasOBJ = JSON.parse(tareas)

function listar(unArray  ){
    
    
    for( i = 0; i<unArray.length; i++){
        console.log(unArray[i].titulo)
    }
}

listar(tareasOBJ.tareas)


function agregar(unaTarea){
    tareas
}