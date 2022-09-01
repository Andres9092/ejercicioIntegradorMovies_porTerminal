let moviesHD = {   // armo el objeto de metodos de funciones.

    movies : require ('./Movies'),  //paso como valor de propiedad el requerim del modulo de movies exportado en archivo ''Movies.js'' -> ES UN ARRAY DE OBJETOS

    listMovies : function (){
        let archivo = this.movies //llamo al valor de la prop 'movies'
        console.log (`LISTADO DE TITULOS\n--------------------`);
        archivo.forEach (function(elemento,index){
             console.log (`${index+1} - ${elemento.title}`);  //imprime para cada objeto del array el indice y el valor de la prop titulo, uno abajo del otro en SERIE.
        })                                  // empleo lexico de tipo 'backticks o plantillas literales'.
        },
    
    search : function (parametro){
        let buscarEn = this.movies;  // ARRAY DE OBJETOS
        let filtro = buscarEn.filter(buscarEn => buscarEn.id == parametro);  //Barre el array de objetos, uno a uno, y devuelve los que cumplen la condicion.
        return filtro;
        },

    searchMovies :  function (parametro){  //'parametro' sera el valor dado por terminal.
        let buscarEn = this.movies;  // ARRAY DE OBJETOS
        let elemento = buscarEn.find (pelicula => pelicula.title == parametro || pelicula.id == parametro); //barre array de objetos, uno a uno, y devuelve el primer objeto que cumpla alguna de las dos condiciones.
        
        if (elemento == undefined){  // si el array devuelvo esta vacio de objetos, no se cummplio ninguna condicion.
            console.log (null);  
        }
        else console.log (elemento);  //devuelve el valor de 'objeto.title' o 'obbjeto.id' del objeto que cumpla la condicion.
    },

    searchMoviesByGender : function (parametro){
        let buscarEn = this.movies;  // Array de objetos.
        let filtro = buscarEn.filter ( function (pelicula){  //barre array de objetos y guarda en 'filtro' los objetos que cumplan la condicion.
           return pelicula.genre == parametro
        });
        if (filtro[0] != undefined){ // es decir que el array tiene objetos filtrados dentro que cumplen condicion.
            console.log (`LISTADO DE TITULOS\n--------------------`);
        filtro.forEach (function(elemento,index){   //imprime por consola todos los objetos que cumplan condicion del filtro, mostrando unicamente el indice y el titulo.
            console.log (`${index+1} - ${elemento.title}`)
            });
        } else {  // el array no tiene objetos dentro, es decir no cumple condicion.
            console.log ( null );
        }     
    },

    totalPriece : function(){
        let peliculas = this.movies; // array de objetos.
        let precios = [];
        peliculas.forEach(function(pelicula){
            precios.push(pelicula.price);
        })
        let total = precios.reduce (function( acumulador, precio){
            return acumulador + precio;
        })
        console.log (total);
        },

    changeMovieGenre :  function( parametro1, parametro2){
        let pelicula = this.search( parametro1);
        console.log (pelicula);
        pelicula[0].genre = parametro2;
        console.log (pelicula);   
        }
};

module.exports = moviesHD;
