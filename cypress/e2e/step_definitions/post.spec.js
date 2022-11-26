/// <reference types="cypress" />

import {Given, Then, When, And} from "@badeball/cypress-cucumber-preprocessor"

const opstions = {
    method: 'POST',
        url: 'https://httpbin.org/post',
        body: null,
        headers: {
            'content-type': 'aplication/json'
        }
};

const dados = {
   name: '',
   age: ''
};

Given ("Que os parametros da requisicao estejam coerentes", () => {})

And ("informo o {string}", (nome)=> {
    dados.name = nome;
})

And ("informo a {string}", (idade)=> {
    dados.age = idade;
})

Then ("todos os dados estiverem informados", () => {
    opstions.body = {dados}
})

When ("a requisicao da API devera retornar 200", () => {
    cy.request(opstions).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");
        console.log(response);
    });
     
})