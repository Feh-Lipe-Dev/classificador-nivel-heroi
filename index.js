const heroName = 'Capitão Dev';
let xpPoints = 7500;
let level = '';

if(xpPoints <= 1000){
  level = 'Ferro'
}
else if(xpPoints <= 2000){
  level = 'Bronze'
  }
else if(xpPoints <= 5000){
  level = 'Prata'
}
else if(xpPoints <= 7000){
  level = 'Ouro'
}
else if(xpPoints <= 8000){
  level = 'Platina'
}
else if(xpPoints <= 9000){
  level = 'Ascedente'
}else if(xpPoints <= 10000){
  level = 'Imortal'
}else{
  level = 'Radiante'
};

console.log('O herói de nome ' + heroName + ' está no nível ' + level + '.');