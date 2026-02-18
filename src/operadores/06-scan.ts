import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators'


const numeros = [1,2,3,4,5];

/* const total Acumulador = (acc, cur) => {
    return acc + cur;
}*/

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from( numeros ).pipe(
    reduce( totalAcumulador, 0)
)
.subscribe( console.log );

//Scan
from( numeros ).pipe(
    scan( totalAcumulador, 0)
)
.subscribe( console.log );

//Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id:'ju', autenticado: false, token: null },
    { id:'ju', autenticado: true, token: 'AB' },
    { id:'ju', autenticado: true, token: 'AB12' }
]

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33})
);


const id$ = state$.pipe(
    map( state => state)
)

id$.subscribe( console.log );