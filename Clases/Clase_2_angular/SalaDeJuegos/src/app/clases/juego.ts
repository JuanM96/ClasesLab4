export class Juego {
    public nombre: string;
    public numeroSecreto: number;
    public gano: boolean;
    public jugador: string;

    constructor(nom:string,jug:string,gano:boolean = false){
        this.nombre = nom;
        this.jugador = jug;
        this.gano = gano;
    }

    public GenerarNuevo(){
        let numeroRandom:number = Math.floor((Math.random() * 100) + 1);
        this.numeroSecreto = numeroRandom;
        console.log(this.numeroSecreto);
    }
    public verificar(num : number){
        if (num == this.numeroSecreto) {
            this.gano = true;
        }
    }
}
