import { sendToLS } from './app/storage.js';
import { createTable } from './app/table.js';
import { editData } from './app/editData.js';
import { deleteData } from './app/deleteData.js';
import { validityVerify } from './app/validityState.js';

const storage = JSON.parse(localStorage.getItem('Peoples')) || [];

const form = document.querySelector('#form');
const fields = document.querySelectorAll('[required]');
const tbody = document.querySelector('tbody');

const errorsType = [
    'badInput', 
    'customError',
    'patternMismatch',
    'rangeOverflow',
    'rangeUnderflow',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valueMissing',
];

const messages = {
    badInput: 'Insira um valor válido', 
    customError: 'Insira um valor válido',
    patternMismatch: 'Insira um nome com caracteres de A-Z, nao incluindo números',
    rangeOverflow: 'Insira uma quantidade númerica menor que 120',
    rangeUnderflow: 'Insira uma quantidade númerica maior que 2',
    stepMismatch: 'Insira um valor válido',
    tooLong: 'Insira uma quantidade de caracteres menor que 120',
    tooShort: 'Insira uma quantidade de caracteres maior que 2',
    typeMismatch: 'Insira um valor de texto',
    valueMissing: 'Não é possivel deixar o campo vázio'
}

//Cria a tabela com os dados existentes no localStorage
storage.forEach(people => {
    createTable(tbody, form, storage, people, editData, deleteData);
})

//Realiza a alteração nas validações
fields.forEach(field => {
    field.addEventListener('blur', (e) => {
        validityVerify(e, field, errorsType, messages);
    });

    field.addEventListener('invalid', (e) => {
        e.preventDefault();
    })
});

//Envia os novos dados registrados para o LocalStorage e cria a tabela com esses dados
form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendToLS(fields, storage);
    createTable(tbody, form, storage, storage[storage.length - 1], editData, deleteData);
});