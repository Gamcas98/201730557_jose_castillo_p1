

function procesarEntrada(id) {


    //varibales boleanas para saber que tipo de token estamos recibiendo
    var punto = false;
    var identificador = false;
    var numero = false;
    var tipo = "";
    var falso = false;
    var verdadero = false;
    var variable = false;



    var error = false;
    //variable para traer el texto que este en el text area
    var textoEntrada = document.getElementById(id).value + " ";
    var banderas = false;
    var caracterUnico = false;

    //variables que nos sirven para darle un valor al texto que vamos leyendo
    var lexemas = "";
    var columna = 0;
    var fila = 0;

    //vectores que almacenan los lexemas correctos y sus filas y columnas
    var lexemasCorrectos = [];
    var contadorCorrectos = 0;
    var filaLexemaCorrectos = [];
    var columnaLexemaCorrectos = [];

    //vectores que almacenan los lexemas incorrectos
    var contadorIncorrectos = 0;
    var lexemasIncorrectos = [];
    var filaLexemaIncorrectos = [];
    var columnaLexemaIncorrectos = [];
    var filaI = 0;
    var columnaI = 0;

    //variable para almacenar el codigo ascii del texto que este entrando
    var codigo = 0;

    //variables que almacenan en valor de los tokens
    var token = "";
    var tokens = [];

    //ciclo principal que va a recorrer la longitud del texto de entrada caracter por caracter

    for (var indice = 0; indice < textoEntrada.length; indice++) {

        //inicializamos codigo convirtiendo el texto de entrada a su valor en codigo asccii
        codigo = textoEntrada.charCodeAt(indice);
        //inicializamos tipo con una funcion que nos devuelve que tipo de lexema que vamos a analizar
        tipo = comprobarLexema(codigo);

        //miramos si tenemos salto de linea o espacios
        if (textoEntrada[indice] == "\n" || textoEntrada[indice] == " ") {

            if (textoEntrada[indice - 1] !== " " && textoEntrada[indice - 1] !== "\n") {
                if (error == false) {
                    lexemasCorrectos[contadorCorrectos] = lexemas;
                    filaLexemaCorrectos[contadorCorrectos] = fila;
                    columnaLexemaCorrectos[contadorCorrectos] = columna;
                    tokens[contadorCorrectos] = token;
                    contadorCorrectos++;
                } else if (error == true) {
                    lexemasIncorrectos[contadorIncorrectos] = lexemas;
                    filaLexemaIncorrectos[contadorIncorrectos] = filaI;
                    columnaLexemaIncorrectos[contadorIncorrectos] = columnaI;
                    contadorIncorrectos++;
                    error = false;
                }
            }
            //si tenemos un salto de linea sumamos a la fila y reiniciamos la columna
            if (textoEntrada == "\n") {
                fila++;
                columna = 0;
            }
            indice++;
            lexemas = "";
            //reiniciamos las variables en cada salto de linea o espacio
            numero = false;
            identificador = false;
            caracterUnico = false;

            //verificamos que tipo de lexema esta entrando
        } else if (identificador == false && numero == false && caracterUnico == false && falso == false) {

            //la funcion comprobarLexema nos da el valor de tipo
            // podemos tener los identificadores, numeros, decimales, etc
            switch (tipo) {
                case "letra":
                    identificador = true;
                    token = "Identificador";
                    break;
                case "digito":
                    numero = true;
                    token = "digito";
                    break;
                case "Puntuacion":
                    caracterUnico = true;
                    token = "Puntuacion";
                    break;
                case "Aritmeticos":
                    caracterUnico = true;
                    token = "Aritmeticos";
                    break;
                case "agrupacion":
                    caracterUnico = true;
                    token = "agrupacion";
                    break;
                case "Signo":
                    caracterUnico = true;
                    token = "Signo";
                    break;
                case "falso":
                    falso = true;
                    token = "falso";
                    break;
                case "verdadero":
                    verdadero = true;
                    token = "verdadero";
                    break;
                case "variable":
                    variable = true;
                    token = "palabra variable";
                    break;
            }

            //si tipo nos regreso una letra entonces puede ser que tengamos un identificador
            //pero si el siguiente caracter es algo diferente a una letra o numero entonces es un error
        } else if (identificador == true) {
            if ((tipo !== "letra") && (tipo !== "digito")) {
                error = true;
                filaI = fila;
                columnaI = columna;
            }
            //si tipo nos trajo un numero, nos quedamos esperando otro numero o un punto y mas numeros
        } else if (numero == true) {
            if (tipo !== "digito") {
                if (punto == false && codigo == 46) {
                    punto = true;
                    token = "Decimal";
                } else {
                    error = true;
                    filaI = fila;
                    columnaI = columna;
                }
            }

            //si recibimos una F mayuscula nos quedamos esperando las demas letras de la palabra falso
        } else if (falso == true) {
            if ((tipo !== "falso")) {
                error = true;
                filaI = fila;
                columnaI = columna;
            }
            //si recibimos una V mayuscula nos quedmos esperando las demas letras de la palabra verdadero
        } else if (verdadero == true) {
            if ((tipo !== "verdadero")) {
                error = true;
                filaI = fila;
                columnaI = columna;
            }
        } else if (variable == true) {
            if ((tipo !== "variable")) {
                error = true;
                filaI = fila;
                columnaI = columna;
            }
        } else if (caracterUnico == true) {
            error = true;
        }
        lexemas += textoEntrada[indice];
        columna++;
    }

    //guardamos los tokens 
    guardar(lexemasCorrectos, tokens);

}



//funcion que nos regresa un String dependiendo el codigo ascii del codigo leido
function comprobarLexema(codigo) {
    if (codigo == 86 || codigo == 69 || codigo == 68 || codigo == 79 || codigo == 82 || codigo == 65) {
        return ("verdadero");
    } else if (codigo == 118 || codigo == 97 || codigo == 114 || codigo == 105 || codigo == 98 || codigo == 108 || codigo == 101) {
        return ("variable");

    } else if (codigo == 70 || codigo == 65 || codigo == 76 || codigo == 79 || codigo == 83) {
        return ("falso");
    }
    else if ((codigo >= 97 && codigo <= 122) || (codigo >= 65 && codigo <= 69) || (codigo >= 71 && codigo <= 90)) {
        return ("letra");
    } else if (codigo >= 48 && codigo <= 57) {
        return ("digito");
    } else if (codigo == 58 || codigo == 59 || codigo == 44 || codigo == 46) {//codigo 46 es el punto .
        return ("Puntuacion");

    } else if (codigo == 37 || codigo == 42 || codigo == 43 || codigo == 45 || codigo == 47 || codigo == 60 || codigo == 61 || codigo == 62) {
        return ("Aritmeticos");
    } else if (codigo == 40 || codigo == 41 || codigo == 91 || codigo == 93 || codigo == 123 || codigo == 125) {
        return ("agrupacion");
    } else if (codigo == 34 || codigo == 59) {
        return ("Signo");
    }
    else if (codigo == 65 || codigo == 70 || codigo == 76 || codigo == 79 || codigo == 83) {
        return ("falso");
    }

}


//funcion para guardar en la tabla todos los tokens analizados
function guardar(lexemas, tokens) {


    for (var i = 0; i <= lexemas.length; i++) {



        if (tokens[i] == "Identificador") {

            var fila = "<tr><td><td></td><td></td><td></td><td></td><td></td><td></td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else if (tokens[i] == "digito") {

            var fila = "<tr><td><td></td><td></td><td></td><td></td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else if (tokens[i] == "Aritmeticos") {

            var fila = "<tr><td></td><td></td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else if (tokens[i] == "agrupacion") {

            var fila = "<tr><td><td></td><td></td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else if (tokens[i] == "Decimal") {

            var fila = "<tr><td><td><td></td><td></td><td></td><td></td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else if (tokens[i] == "Signo") {

            var fila = "<tr><td><td><td></td><td></td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        } else if (tokens[i] == "falso" || tokens[i] == "verdadero") {

            var fila = "<tr><td><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);

        } else if (tokens[i] == "palabra variable") {

            var fila = "<tr><td>" + lexemas[i] + "</td></tr>";
            var btn = document.createElement("TR");
            btn.innerHTML = fila;
            document.getElementById("tablita").appendChild(btn);
        }

    }

}

//funcion para recargar la pagina
function preguntar() {
    var preg = confirm("Se Perderan todas las palabras analizadas!, Estas Seguro?");

    if (preg == true) {
        location.reload();
        alert("La recargo el compa");
    } else {
        alert("No la recargo el compa");
    }
}