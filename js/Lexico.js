var codigo = 0;
var estado = 0;
const PALABRA_RESERVADA = "Palabra Reservada";
const BOOLEAN = "Boolean";
const OPERADOR = "Operador";
const AGRUPACION = "Agrupacion";
const SIGNO = "Signo";
const NUMERO_ENTERO = "Numero Entero";
const NUMERO_FLOAT = "Numero Float";
const IDENTIFICADOR = "Identificador";
var lexema = "";
var contadorLexemass = 0;

var textoEntrada ;
var tipo = "";

var lexemas = [];
var tokens = [];

var token = "";


function AnalizadorLexico() {


	textoEntrada = document.getElementById("contenido-archivo").value+" ";
	estado = 0;
	console.log(textoEntrada);
	for (var indice = 0; indice < textoEntrada.length; indice++) {



		codigo = textoEntrada.charCodeAt(indice);
		tipo = comprobarLexema(codigo);
		lexema += textoEntrada[indice];



		switch (estado) {
			case 0:
				switch (codigo) {
					case 86://VERDADERO
						estado = 53;
						break;
					case 118://variable
						estado = 1;
						break;
					case 101://entero
						estado = 9;
						break;
					case 100://decimal
						estado = 15;
						break;
					case 98://booleano
						estado = 22;
						break;
					case 99://cadena
						estado = 30;
						break;
					case 115://si o sino
						estado = 36;
						break;
					case 109://mientras
						estado = 40;
						break;
					case 104://hacer
						estado = 48;
						break;
					case 70://FALSO
						estado = 62;
						break;
					case 43://+
						estado = 67;
						token = OPERADOR;
						break;
					case 45://-
						estado = 67;
						token = OPERADOR;
						break;
					case 42://*
						estado = 67;
						token = OPERADOR;
						break;
					case 47:///
						estado = 67;
						token = OPERADOR;
						break;
					case 37://%
						estado = 67;
						token = OPERADOR;
						break;
					case 61://=
						estado = 68;
						token = OPERADOR;
						break;
					case 60://<
						estado = 68;
						token = OPERADOR;
						break;
					case 62://>
						estado = 68;
						token = OPERADOR;
						break;
					case 40://(
						estado = 67;
						token = AGRUPACION;
						break;
					case 41://)
						estado = 67;
						token = AGRUPACION;
						break;
					case 123://{
						estado = 67;
						token = AGRUPACION;
						break;
					case 125://}
						estado = 67;
						token = AGRUPACION;
						break;
					case 34://"
						estado = 67;
						token = SIGNO;
						break;
					case 59://;
						estado = 67;
						token = SIGNO;
						break;
					default:
						console.log("soy el default del estado 0");
						switch (tipo) {
							case "letra":
								estado = 71;
							case "numero":
								break;
								estado = 69;
							case "Espacio":
								lexema = ""
								break;
							default:


						}
						break;
				}
				break;
			//variable
			case 1:
				switch (codigo) {
					case 97:
						estado = 2;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 2:
				switch (codigo) {
					case 114:
						estado = 3;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 3:
				switch (codigo) {
					case 105:
						estado = 4;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 4:
				switch (codigo) {
					case 97:
						estado = 5;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 5:
				switch (codigo) {
					case 98:
						estado = 6;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 6:
				switch (codigo) {
					case 108:
						estado = 7;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 7:
				switch (codigo) {
					case 101:
						estado = 8;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 8:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//entero
			case 9:
				switch (codigo) {
					case 110:
						estado = 10;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 10:
				switch (codigo) {
					case 116:
						estado = 11;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 11:
				switch (codigo) {
					case 101:
						estado = 12;
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 12:
				switch (codigo) {
					case 114:
						estado = 13;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 13:
				switch (codigo) {
					case 111:
						estado = 14;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 14:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//decimal
			case 15:
				switch (codigo) {
					case 101:
						estado = 16;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 16:
				switch (codigo) {
					case 99:
						estado = 17;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 17:
				switch (codigo) {
					case 105:
						estado = 18;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 18:
				switch (codigo) {
					case 109:
						estado = 19;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 19:
				switch (codigo) {
					case 97:
						estado = 20;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 20: switch (codigo) {
				case 108:
					estado = 21;
					break;
				case 10:
					guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
					break;
				case 32:
					guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
					break;
				default:
					compararTipo(tipo);
					break;
			}
				break;
			case 21:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//booleano
			case 22:
				switch (codigo) {
					case 111:
						estado = 23;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 23:
				switch (codigo) {
					case 111:
						estado = 24;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 24:
				switch (codigo) {
					case 108:
						estado = 25;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 25:
				switch (codigo) {
					case 101:
						estado = 26;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 26:
				switch (codigo) {
					case 97:
						estado = 27;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 27:
				switch (codigo) {
					case 110:
						estado = 28;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 28:
				switch (codigo) {
					case 111:
						estado = 29;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 29:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//cadena
			case 30:
				switch (codigo) {
					case 97:
						estado = 31;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 31:
				switch (codigo) {
					case 100:
						estado = 32;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 32:
				switch (codigo) {
					case 101:
						estado = 33;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 33:
				switch (codigo) {
					case 110:
						estado = 34;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 34:
				switch (codigo) {
					case 97:
						estado = 35;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 35:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//sino
			case 36:
				switch (codigo) {
					case 105:
						estado = 37;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 37:
				switch (codigo) {
					case 110:
						estado = 38;
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 38:
				switch (codigo) {
					case 111:
						estado = 39;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 39:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//mientras
			case 40:
				switch (codigo) {
					case 105:
						estado = 41;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 41:
				switch (codigo) {
					case 101:
						estado = 42;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 42:
				switch (codigo) {
					case 110:
						estado = 43;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 43:
				switch (codigo) {
					case 116:
						estado = 44;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 44:
				switch (codigo) {
					case 114:
						estado = 45;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 45:
				switch (codigo) {
					case 97:
						estado = 46;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 46:
				switch (codigo) {
					case 115:
						estado = 47;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 47:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//hacer
			case 48:
				switch (codigo) {
					case 97:
						estado = 49;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 49:
				switch (codigo) {
					case 99:
						estado = 50;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 50:
				switch (codigo) {
					case 101:
						estado = 51;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 51:
				switch (codigo) {
					case 114:
						estado = 52;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 52:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, PALABRA_RESERVADA);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//verdadero
			case 53:
				switch (codigo) {
					case 101:
						estado = 54;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 54:
				switch (codigo) {
					case 114:
						estado = 55;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 55:
				switch (codigo) {
					case 100:
						estado = 56;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 56:
				switch (codigo) {
					case 97:
						estado = 57;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 57:
				switch (codigo) {
					case 100:
						estado = 58;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 58:
				switch (codigo) {
					case 101:
						estado = 59;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 59:
				switch (codigo) {
					case 114:
						estado = 60;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 60:
				switch (codigo) {
					case 111:
						estado = 61;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 61:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, BOOLEAN);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, BOOLEAN);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			//falso
			case 62:
				switch (codigo) {
					case 97:
						estado = 63;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 63:
				switch (codigo) {
					case 108:
						estado = 64;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 64:
				switch (codigo) {
					case 115:
						estado = 65;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 65:
				switch (codigo) {
					case 111:
						estado = 66;
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				break;
			case 66:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, BOOLEAN);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, BOOLEAN);
						break;
					default:
						compararTipo(tipo);
						break;
				}
				//signos

				//cambiar el compararTipo
				break;
			case 67:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, token);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, token);
						break;
					default:
						estado = 72;
						break;
				}
				break;
			case 68:
				switch (codigo) {
					case 61:
						estado = 67;
						break;
					case 32:
						guardarLexemas(lexemas, lexema, tokens, token);
						break;
					case 10:
						guardarLexemas(lexemas, lexema, tokens, token);
						break;
					default:
						estado = 72;
						break;
				}
				break;
			case 69:
				switch (tipo) {
					case "numero":
						estado = 69;
						break;
					case "espacio":
						guardarLexemas(lexemas, lexema, tokens, NUMERO_ENTERO);
						break;
					case "punto":
						estado = 70;
						break;
					default:
						estado = 72;
						break;
				}
				break;
			case 70:
				switch (tipo) {
					case "numero":
						estado = 70;
						break;
					case "espacio":
						guardarLexemas(lexemas, lexema, tokens, NUMERO_FLOAT);
						break;
					default:
						estado = 72;
						break;
				}
				break;
			case 71:
				switch (tipo) {
					case "letra":
						estado = 71;
						break;
					case "numero":
						estado = 71;
						break;
					case "esapacio":
						guardarLexemas(lexemas, lexema, tokens, IDENTIFICADOR);
						break;
					default:
						estado = 72;
						break;
				}
				break;
			case 72:
				switch (codigo) {
					case 32:
						guardarLexemas(lexemas, lexema, tokens, "ERROR");
						break;
				}
				break;
		}
	}

	for (var i = 0; i <= contadorLexemass; i++) {

		console.log("los tokens son:")
		console.log(tokens[i]);
		console.log("los lexemas son")
		console.log(lexemas[i]);

	}
	guardar();
}


function comprobarLexema(codigo) {
	if ((codigo >= 97 && codigo <= 122) || (codigo >= 65 && codigo <= 90)) {
		return ("letra");
	} else if (codigo >= 48 && codigo <= 57) {
		return ("numero");
	} else if (codigo == 46) {
		return ("punto");
	} else if (codigo == 32 || codigo == 10) {
		return ("Espacio");
	} else {
		return ("Error");
	}
}


function guardar(){


	for (var i = 0; i <= lexemasCorrectos.length; i++) {

		

		if(tokens[i]=="Identificador"){

			var fila="<tr><td>"+lexemasCorrectos[i]+"</td></tr>";
			var btn = document.createElement("TR");
		   btn.innerHTML=fila;
		document.getElementById("tablita").appendChild(btn);
		}
		

	}

}



function comprobarLexema(codigo) {
	if ((codigo >= 97 && codigo <= 122) || (codigo >= 65 && codigo <= 90)) {
		return ("letra");
	} else if (codigo >= 48 && codigo <= 57) {
		return ("numero");
	} else if (codigo == 46) {
		return ("punto");
	} else if (codigo == 32 || codigo == 10) {
		return ("Espacio");
	} else {
		return ("Error");
	}
}

function compararTipo(tipo) {
	switch (tipo) {
		case "letra":
			estado = 71;
			break;
		case "numero":
			estado = 71;
			break;
		default:
			estado = 72;
			break;
	}

	console.log("soy comparar tipo")
}

function guardarLexemas(vectorLexemas, lexemassss, vectorToken, token) {
	lexemas[contadorLexemass] = lexema;
	tokens[contadorLexemass] = token;
	contadorLexemass++;
	lexema = "";
	estado = 0;
}