 export default class Music {
    static intro(x) {
        return `Pesme sa albuma ${x._album}: ` 
    }
    constructor(izvođač, album, god, pesme = [])
    {
       this._izvođač = izvođač;
       this._album = album;
       this.god = god;
       this.pesme = pesme;
    }
    get date() {
        var year = new Date().getFullYear();
        return `Ovaj album je izdat pre ${year - this.god} god.`
    }
    /**
     * @param {any} value
     */
    set Hitovi(value) {
      this.pesme = value;
    }
    lista() {
       this.pesme.forEach((value) => console.log(value));
    }
}
console.log(45)

