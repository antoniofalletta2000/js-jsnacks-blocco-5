const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let nomi=[]

people.forEach(persona=>{
  if(persona.name==="Paolo"||persona.name==="Giulia"||persona.name==="Marco"){
    nomi.push(persona.name)
  }
})

console.log(nomi.join(" , "));
