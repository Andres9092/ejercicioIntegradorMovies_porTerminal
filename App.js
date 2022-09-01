const funciones = require ( "./Funciones.js");

const accion = process.argv [2];  //cargo accion a pasar por terminal en posicion '2'.

const parametro1 = process.argv [3];  // cargo accion en terminal : 'Titulo', 'ID' o 'Genero'.

const parametro2 = process.argv [4]; // cargo parametro por terminal : 'Titulo', 'ID' o 'Genero'.

switch (accion) {

    case 'Listar':

        funciones.listMovies ();  //llamo a modulo del archivo ''Funciones.js''  --> es un OBJETO CON METODOS. DE ESTE OBJETO LLAMO A LA PROP ''listMovies''
    break;

    case 'Buscar':
        
        switch ( parametro1) {
            case 'Titulo':
                funciones.searchMovies ( parametro2);
            break;

            case 'ID':
                funciones.searchMovies ( parametro2);
            break;

            case 'Genero':
                funciones.searchMoviesByGender ( parametro2);
            break

            default:
                console.log ( 'Defina un tipo de busqueda.')
        }
    break;

    case 'Total':
        funciones.totalPriece ();
    break;

    case 'Modificar':
        funciones.changeMovieGenre ( parametro1, parametro2)
    break;

    default:
        console.log ("No se entiende que quiere hacer") 
}

