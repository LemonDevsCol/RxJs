import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, massa eu placerat laoreet, augue tortor euismod dolor, vel semper diam arcu a arcu. Morbi condimentum iaculis lacus non porttitor. Phasellus fermentum tellus nisi, a vehicula neque commodo quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lorem purus, maximus quis pulvinar ac, lobortis ut libero. Cras dapibus nunc a interdum vestibulum. Mauris id nibh diam. Nunc condimentum elit ac condimentum fermentum. Proin risus justo, porta sit amet ullamcorper molestie, imperdiet ac sapien. Cras vehicula ante eget pretium tincidunt. Vivamus molestie ante nibh, quis fringilla est convallis vehicula.
<br/><br/>
Nunc ac commodo enim, vitae convallis quam. Donec ut lobortis lorem. Pellentesque mauris elit, commodo blandit enim posuere, blandit viverra lectus. Proin sed rhoncus diam. In a velit eu arcu pellentesque accumsan. Aliquam sollicitudin, purus aliquet lobortis porttitor, enim velit vulputate enim, eu cursus odio odio ac ante. Nunc mollis vel nisi sit amet scelerisque. Aliquam quis nisi sapien. Phasellus tempor massa quam, non fringilla diam finibus quis. Vivamus iaculis erat leo, tempus tempus arcu maximus eget. Sed rutrum congue odio, ut scelerisque ipsum egestas at. Vivamus ac lacus tincidunt, facilisis libero vel, faucibus augue. Proin sed rutrum odio. Ut tempor sem quis efficitur congue.
<br/><br/>
Ut interdum neque arcu, non cursus elit vulputate ut. Suspendisse porta luctus ex, non elementum justo ornare id. Sed consectetur ullamcorper massa, ut consectetur nulla lacinia eleifend. In hac habitasse platea dictumst. Nam est libero, tempor vel turpis vitae, feugiat venenatis lectus. Curabitur et lectus nec dolor vestibulum semper ac aliquam nulla. Ut magna augue, finibus at sapien vel, dignissim malesuada dui. Morbi imperdiet dignissim aliquet. Vestibulum placerat, felis vitae porttitor consequat, dui felis cursus diam, ac elementum orci massa non velit. Curabitur egestas, risus sed laoreet tempor, augue leo iaculis est, vel consequat orci ex in sem. Aenean tempor pulvinar molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id sodales neque. Fusce dictum ut urna vitae tempor.
<br/><br/>
Etiam hendrerit tincidunt tortor, vel suscipit ante gravida a. Proin a tortor nec nibh ultrices mattis. Pellentesque a orci massa. Proin in nisl erat. Proin eget diam a dolor consectetur finibus. Donec in neque id odio cursus ultrices. Nullam ut pharetra nibh. Maecenas iaculis convallis nisi, vel laoreet sapien tincidunt id. Nunc bibendum lorem sit amet blandit lacinia. Sed tristique porttitor augue, quis cursus massa scelerisque id. Mauris sit amet nulla et neque imperdiet vehicula. Aenean metus leo, pellentesque quis feugiat a, auctor porttitor massa. Nulla porttitor sem nec venenatis fermentum. Integer erat lectus, sagittis id nisl non, placerat iaculis nunc. Etiam finibus facilisis nibh, sed consequat turpis auctor ac. Duis nisi magna, consequat vel urna a, laoreet facilisis felis.
<br/><br/>
Maecenas accumsan dapibus pretium. Vestibulum elementum felis vitae purus vehicula, a feugiat lectus sollicitudin. Donec convallis justo sed eros posuere, ornare convallis tellus suscipit. Nam gravida ante vitae purus cursus, eget tincidunt neque faucibus. Vivamus et odio non mauris fermentum commodo. Curabitur velit erat, vestibulum eu mi et, porta posuere lectus. Fusce vehicula, mi et blandit hendrerit, ante mauris ornare leo, vel blandit odio nibh aliquet est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut iaculis urna, et mollis odio. Proin eget dolor suscipit, mattis augue in, pulvinar erat. Ut eu nisi erat.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, massa eu placerat laoreet, augue tortor euismod dolor, vel semper diam arcu a arcu. Morbi condimentum iaculis lacus non porttitor. Phasellus fermentum tellus nisi, a vehicula neque commodo quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lorem purus, maximus quis pulvinar ac, lobortis ut libero. Cras dapibus nunc a interdum vestibulum. Mauris id nibh diam. Nunc condimentum elit ac condimentum fermentum. Proin risus justo, porta sit amet ullamcorper molestie, imperdiet ac sapien. Cras vehicula ante eget pretium tincidunt. Vivamus molestie ante nibh, quis fringilla est convallis vehicula.
<br/><br/>
Nunc ac commodo enim, vitae convallis quam. Donec ut lobortis lorem. Pellentesque mauris elit, commodo blandit enim posuere, blandit viverra lectus. Proin sed rhoncus diam. In a velit eu arcu pellentesque accumsan. Aliquam sollicitudin, purus aliquet lobortis porttitor, enim velit vulputate enim, eu cursus odio odio ac ante. Nunc mollis vel nisi sit amet scelerisque. Aliquam quis nisi sapien. Phasellus tempor massa quam, non fringilla diam finibus quis. Vivamus iaculis erat leo, tempus tempus arcu maximus eget. Sed rutrum congue odio, ut scelerisque ipsum egestas at. Vivamus ac lacus tincidunt, facilisis libero vel, faucibus augue. Proin sed rutrum odio. Ut tempor sem quis efficitur congue.
<br/><br/>
Ut interdum neque arcu, non cursus elit vulputate ut. Suspendisse porta luctus ex, non elementum justo ornare id. Sed consectetur ullamcorper massa, ut consectetur nulla lacinia eleifend. In hac habitasse platea dictumst. Nam est libero, tempor vel turpis vitae, feugiat venenatis lectus. Curabitur et lectus nec dolor vestibulum semper ac aliquam nulla. Ut magna augue, finibus at sapien vel, dignissim malesuada dui. Morbi imperdiet dignissim aliquet. Vestibulum placerat, felis vitae porttitor consequat, dui felis cursus diam, ac elementum orci massa non velit. Curabitur egestas, risus sed laoreet tempor, augue leo iaculis est, vel consequat orci ex in sem. Aenean tempor pulvinar molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id sodales neque. Fusce dictum ut urna vitae tempor.
<br/><br/>
Etiam hendrerit tincidunt tortor, vel suscipit ante gravida a. Proin a tortor nec nibh ultrices mattis. Pellentesque a orci massa. Proin in nisl erat. Proin eget diam a dolor consectetur finibus. Donec in neque id odio cursus ultrices. Nullam ut pharetra nibh. Maecenas iaculis convallis nisi, vel laoreet sapien tincidunt id. Nunc bibendum lorem sit amet blandit lacinia. Sed tristique porttitor augue, quis cursus massa scelerisque id. Mauris sit amet nulla et neque imperdiet vehicula. Aenean metus leo, pellentesque quis feugiat a, auctor porttitor massa. Nulla porttitor sem nec venenatis fermentum. Integer erat lectus, sagittis id nisl non, placerat iaculis nunc. Etiam finibus facilisis nibh, sed consequat turpis auctor ac. Duis nisi magna, consequat vel urna a, laoreet facilisis felis.
<br/><br/>
Maecenas accumsan dapibus pretium. Vestibulum elementum felis vitae purus vehicula, a feugiat lectus sollicitudin. Donec convallis justo sed eros posuere, ornare convallis tellus suscipit. Nam gravida ante vitae purus cursus, eget tincidunt neque faucibus. Vivamus et odio non mauris fermentum commodo. Curabitur velit erat, vestibulum eu mi et, porta posuere lectus. Fusce vehicula, mi et blandit hendrerit, ante mauris ornare leo, vel blandit odio nibh aliquet est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut iaculis urna, et mollis odio. Proin eget dolor suscipit, mattis augue in, pulvinar erat. Ut eu nisi erat.
<br/><br/>
Maecenas accumsan dapibus pretium. Vestibulum elementum felis vitae purus vehicula, a feugiat lectus sollicitudin. Donec convallis justo sed eros posuere, ornare convallis tellus suscipit. Nam gravida ante vitae purus cursus, eget tincidunt neque faucibus. Vivamus et odio non mauris fermentum commodo. Curabitur velit erat, vestibulum eu mi et, porta posuere lectus. Fusce vehicula, mi et blandit hendrerit, ante mauris ornare leo, vel blandit odio nibh aliquet est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut iaculis urna, et mollis odio. Proin eget dolor suscipit, mattis augue in, pulvinar erat. Ut eu nisi erat.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, massa eu placerat laoreet, augue tortor euismod dolor, vel semper diam arcu a arcu. Morbi condimentum iaculis lacus non porttitor. Phasellus fermentum tellus nisi, a vehicula neque commodo quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lorem purus, maximus quis pulvinar ac, lobortis ut libero. Cras dapibus nunc a interdum vestibulum. Mauris id nibh diam. Nunc condimentum elit ac condimentum fermentum. Proin risus justo, porta sit amet ullamcorper molestie, imperdiet ac sapien. Cras vehicula ante eget pretium tincidunt. Vivamus molestie ante nibh, quis fringilla est convallis vehicula.
<br/><br/>
Nunc ac commodo enim, vitae convallis quam. Donec ut lobortis lorem. Pellentesque mauris elit, commodo blandit enim posuere, blandit viverra lectus. Proin sed rhoncus diam. In a velit eu arcu pellentesque accumsan. Aliquam sollicitudin, purus aliquet lobortis porttitor, enim velit vulputate enim, eu cursus odio odio ac ante. Nunc mollis vel nisi sit amet scelerisque. Aliquam quis nisi sapien. Phasellus tempor massa quam, non fringilla diam finibus quis. Vivamus iaculis erat leo, tempus tempus arcu maximus eget. Sed rutrum congue odio, ut scelerisque ipsum egestas at. Vivamus ac lacus tincidunt, facilisis libero vel, faucibus augue. Proin sed rutrum odio. Ut tempor sem quis efficitur congue.
<br/><br/>
Ut interdum neque arcu, non cursus elit vulputate ut. Suspendisse porta luctus ex, non elementum justo ornare id. Sed consectetur ullamcorper massa, ut consectetur nulla lacinia eleifend. In hac habitasse platea dictumst. Nam est libero, tempor vel turpis vitae, feugiat venenatis lectus. Curabitur et lectus nec dolor vestibulum semper ac aliquam nulla. Ut magna augue, finibus at sapien vel, dignissim malesuada dui. Morbi imperdiet dignissim aliquet. Vestibulum placerat, felis vitae porttitor consequat, dui felis cursus diam, ac elementum orci massa non velit. Curabitur egestas, risus sed laoreet tempor, augue leo iaculis est, vel consequat orci ex in sem. Aenean tempor pulvinar molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id sodales neque. Fusce dictum ut urna vitae tempor.
<br/><br/>
Etiam hendrerit tincidunt tortor, vel suscipit ante gravida a. Proin a tortor nec nibh ultrices mattis. Pellentesque a orci massa. Proin in nisl erat. Proin eget diam a dolor consectetur finibus. Donec in neque id odio cursus ultrices. Nullam ut pharetra nibh. Maecenas iaculis convallis nisi, vel laoreet sapien tincidunt id. Nunc bibendum lorem sit amet blandit lacinia. Sed tristique porttitor augue, quis cursus massa scelerisque id. Mauris sit amet nulla et neque imperdiet vehicula. Aenean metus leo, pellentesque quis feugiat a, auctor porttitor massa. Nulla porttitor sem nec venenatis fermentum. Integer erat lectus, sagittis id nisl non, placerat iaculis nunc. Etiam finibus facilisis nibh, sed consequat turpis auctor ac. Duis nisi magna, consequat vel urna a, laoreet facilisis felis.
<br/><br/>
Maecenas accumsan dapibus pretium. Vestibulum elementum felis vitae purus vehicula, a feugiat lectus sollicitudin. Donec convallis justo sed eros posuere, ornare convallis tellus suscipit. Nam gravida ante vitae purus cursus, eget tincidunt neque faucibus. Vivamus et odio non mauris fermentum commodo. Curabitur velit erat, vestibulum eu mi et, porta posuere lectus. Fusce vehicula, mi et blandit hendrerit, ante mauris ornare leo, vel blandit odio nibh aliquet est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut iaculis urna, et mollis odio. Proin eget dolor suscipit, mattis augue in, pulvinar erat. Ut eu nisi erat.
`;


const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


const calcularProcentajeScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    //console.log({scrollTop, scrollHeight, clientHeight});

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}


const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    //map( event => calcularProcentajeScroll(event) ),
    map( calcularProcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});