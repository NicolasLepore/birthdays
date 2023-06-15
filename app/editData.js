export async function editData(tdName, tdBirthday, form) {
    form.childNodes[1].childNodes[3].value = tdName;
    form.childNodes[3].childNodes[3].value = tdBirthday;
}