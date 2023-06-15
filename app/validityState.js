export function validityVerify(e, field, errors, msg) {
    errors.forEach(type => {
        if(field.validity[type]) {
            const span = e.target.parentNode.childNodes[5];
            span.innerText = msg[type];
        } 

        if(field.checkValidity()) {
            const span = e.target.parentNode.childNodes[5];
            span.innerText = '';
        }
    })
}