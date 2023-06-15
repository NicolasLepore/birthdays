export function sendToLS(fields, storage) {
    fields.forEach((field, i) => {
        if(fields[i + 1] != undefined) {
            storage.push({ 
                name: fields[i].value, 
                birthday: fields[i + 1].value 
            });

            localStorage.setItem('Peoples', JSON.stringify(storage));
            
        } 
    });

}