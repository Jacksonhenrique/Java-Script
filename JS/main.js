
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    //window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    elemento.innerHTML="Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/* function soma(n1, n2){
    return n1+n2;
}

function validaIdade(idade){
   var validar;
    if(idade>=18){
        validar =  true;
    }else{
        validar =  false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade:");
console.log(validaIdade(idade));
 */
//alert(soma(10,5));


/* var d = new Date;
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
 */

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count = 5;
while(count<5){
    console.log(count);
    alert(count)
    count++;
}
*/



/*
var idade = prompt("Qual é a sua Idade");// comando prompt abre uma caixa de texto para usuario digitar
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor idade");
}
*/


/*
var frutas = [{nome:"Maça", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta ={nome:"Maça", cor:"Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

//Array e dicionário
//var lista = ["Maça", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.length);
//console.log(lista);
//console.log(lista.toString());

/*
var nome = "Master Chief";
var idade = 29;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do Mundo";
alert(nome + " tem " + idade + " anos ");
alert(idade+idade2);
console.log(nome);
console.log(n1+n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil"));
*/