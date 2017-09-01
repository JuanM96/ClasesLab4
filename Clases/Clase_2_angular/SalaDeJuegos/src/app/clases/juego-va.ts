export class JuegoVA {
    public nombre: string;
    public numero1: number;
    public numero2: number;
    public operador: string;
    
    public gano: boolean;

    constructor(){
        this.nombre = "Velocidad Aritmetica";
        this.gano = false;
    }

    public GenerarNuevo(){
        this.numero1 = Math.floor((Math.random() * 10) + 1);
        this.numero2 = Math.floor((Math.random() * 10) + 1);
        let opcion = Math.floor((Math.random() * 4) + 1);
        switch (opcion) {
            case 1:
                this.operador = "+";
                break;
            case 2:
                this.operador = "-";
                break;
            case 3:
                this.operador = "*";
                break;
            case 4:
                this.operador = "/";
                break;
        
            default:
                this.operador = "null?"
                break;
        }
    }
    /*public verificar(num : number){
        if (num == this.numeroSecreto) {
            this.gano = true;
        }
    }*/
}
