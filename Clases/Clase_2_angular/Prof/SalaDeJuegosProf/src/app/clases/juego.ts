export class Juego {
  nombre = 'Adivina el número secreto';
  numeroSecreto = 0;
  numeroIngresado = 0;
  jugador = 'Octavio';
  gano = false;

  constructor(nombre?: string, gano?: boolean) {
    if (nombre)
      this.nombre = nombre;

    if (gano)
      this.gano = gano;
  }


  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }

  public verificar() {
    if (this.numeroIngresado === this.numeroSecreto) {
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
  }
}
