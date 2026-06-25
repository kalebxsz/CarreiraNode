// opção recomendada quando tiver mais de 2 expressões 

const bateria = 25

if (bateria <= 20) {
    console.log('Crítica')
}else if(bateria > 20 && bateria < 80){
    console.log('Moderada')
}else{
    console.log('Cheia')
}

// Opção com ternario, não recomendada quando for para mais de 2 expressões 

const bateria2 = 90;
 
const statusBateria = (bateria2 < 20) 
  ? "Crítica" 
  : (bateria2 <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);
