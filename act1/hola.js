let texto='{"cuerpos":["ectomorfo","mesomorfo","endomorfo"], "posicion": ["parado","sentado","acostado"] }';

const info=json.parse(texto);

document.getElementById("hola").innerHTML=info.cuerpos[0] + " " + info.posicion[0];