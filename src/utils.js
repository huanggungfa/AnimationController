export function __$styleInject(css) {
    css = css || '';
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

export function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}
