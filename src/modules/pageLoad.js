import '../css/styles.css';
import {header} from './header';
import {organ} from './organ';

const pageLoad = () => {

    const body = document.getElementsByTagName('body')[0];
    
    body.appendChild(header);
    body.appendChild(organ);
 
 }

export {pageLoad}