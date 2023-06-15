export function deleteData(storage, peopleName) {
    storage.forEach(item => {
        if(item.name == peopleName) {
            const index = storage.findIndex((item) => item.name == peopleName);
            storage.splice(index, 1);
            localStorage.setItem('Peoples', JSON.stringify(storage));
        }
    });
}