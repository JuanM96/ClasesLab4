export class Juego {
    public nombre: string;
    public numeroSecreto: number;
    public gano: boolean;
    public jugador: string;

    constructor(){
        this.nombre = "Adivina El Numero";
        this.gano = false;
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
