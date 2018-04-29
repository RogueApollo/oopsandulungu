function pessoa(fullname, tamanho, dF, cF, eF, dN){
		this.nome = fullname;
		this.altura = tamanho;
		this.disciplina = dF;
		this.comida = cF;
		this.equipa = eF;
		this.data = dN;
		this.ola = function(){	
			console.log("Olá, chamo-me " + this.nome + ", tenho " + this.altura + " metros de altura, a minha disciplina favorita é " + this.disciplina + ", a minha comida favorita é " + this.comida + ", a minha equipa favorita é o " + this.equipa + " e nasci no dia " +this.data) 
		}
}

var andre = new pessoa("André Costa", "1,73", "London", "tacos", "Tondela", "01/01/2000")
	andre.ola();
	
var antonio = new pessoa("António Lourenço", "1,80", "História", "burrito", "Benfica", "03/02/2000")
	antonio.ola();
	
var beatriz = new pessoa("Beatriz Barreto", "1,60", "frances", "grelos", "Sporting", "04/03/2000")
	beatriz.ola();
	
var franciscoE = new pessoa("Francisco Esteves", "1,55", "geografia", "arroz", "Barcelona", "05/04/2000")
	franciscoE.ola();
	
var franciscoR = new pessoa("Francisco Rodrigues", "1,78", "psicologia", "brocolos", "Porto", "06/05/2000")
	franciscoR.ola();
	
var daniel = new pessoa("Daniel Serrano", "1,68", "aplicações informáticas", "peixe cru", "Manchester United", "07/06/2000")
	daniel.ola();
	
var fabio = new pessoa("Fábio Franco", "1,73", "português", "beringela", "Benfica", "08/07/2000")
	fabio.ola();
	
var joaoN = new pessoa("João Neves", "1,67", "educação fisica", "carne picada", "Benfica", "10/08/2000")
	joaoN.ola();
	
var joaoM = new pessoa("João Madeira", "1,85", "educação fisica", "baratas", "Benfica", "15/06/2000")
	joaoM.ola();
	
var goncalo = new pessoa("Gonçalo Simão", "1,78", "Bacalhau", "esparguete", "Sporting", "10/10/2000")
	goncalo.ola();
	
var luis = new pessoa("Luís Catarino", "1,86", "história", "bacalhau com natas", "Boavista", "11/11/2000")
	luis.ola();
	
var miguel = new pessoa("Miguel Pinto", "1,80", "física", "frango assado", "Benfica", "12/12/2000")
	miguel.ola();
	
var maria = new pessoa("Maria Inês", "1,70", "aplicações informáticas", "asiaticas", "Guimarães", "02/01/2000")
	maria.ola();
	
var nuno = new pessoa("Nuno Rodrigues", "1,72", "física", "pretos", "Liverpool", "03/05/2000")
	nuno.ola();
	
var pedro = new pessoa("Pedro Fonseca", "1,82", "matemática", "a minha vizinha", "Corinthians", "08/07/2000")
	pedro.ola();
	
var miguelD = new pessoa("Miguel Dionísio", "1,85", "inglês", "cu", "Arsenal", "06/03/2000")
	miguelD.ola();
	
var ricardoG = new pessoa("Ricardo Gonçalves", "1,83", "espanhol", "filetes de peixe", "Chelsea", "04/09/2000")
	ricardoG.ola();
	
var sandu = new pessoa("Sandu Lungu", "2,00", "tudo menos aplicações", "GRANDA BIFE", "Dynamo Kiev", "26/07/2000")
	sandu.ola();
	
var ricardoP = new pessoa("Ricardo Pereira", "1,71", "matemática", "agua", "Setúbal", "19/06/2000")
	ricardoP.ola();
	
var rodrigo = new pessoa("Rodrigo Valério", "1,89", "aplicações informáticas", "farinha", "CSKA", "25/04/2000")
	rodrigo.ola();
	
var samuel = new pessoa("Samuel Vaz", "1,72", "sociologia", "pão", "Zenit", "16/11/2000")
	samuel.ola();
	
var tomas = new pessoa("Tomás Feith", "1,71", "física", "tomates", "Dortmund", "27/10/2000")
	tomas.ola();
	
var tiago = new pessoa(" Tiago Arriegas", "1,80", "desenho", "polvo", "Villareal", "15/08/2000")
	tiago.ola();
	
var antonio = new pessoa("António Campaniço", "1,83", "artes", "cajus", "Milan", "08/11/2000")
	antonio.ola();
