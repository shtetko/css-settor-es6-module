export default function(element, styleObject) {
    if ( typeof element != 'object') console.error(`Uncaught TypeError: check your element`);
    
    for(const objProp in styleObject) {
        if ( element.style[objProp] === undefined ) console.warn(`'${objProp}' is not css properties > ${objProp}: ${styleObject[objProp]}.`);
        element.style[objProp] = styleObject[objProp];
    }
}