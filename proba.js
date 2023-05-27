

 export default function Play() {
   document.body.style.backgroundColor = "red";
}
export let user = {
  ime: "Aleksandar",
  prezime: "Pejinović"
}
export class Grupe {
   constructor(tim, država) {
      this.tim = tim;
      this.država = država;
   }
   get prikaz() {
      return this.tim + " je iz " + this.država 
   }
}



