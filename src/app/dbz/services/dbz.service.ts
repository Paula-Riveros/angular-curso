import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Gokú',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ]

    get personajes(): Personaje[] {
        return [...this._personajes] // Rompe la referencia con el parametros _personajes. Las llaves
        // indican que es un arreglo y los 3 puntos son el operador 'spread' y este separa cada uno
        // de los elementos intependientes que tiene dicho arreglo y crea uno nuevo
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
      this._personajes.push(personaje);
    }

}