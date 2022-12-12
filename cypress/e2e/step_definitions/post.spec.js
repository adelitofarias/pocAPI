/// <reference types="cypress" />

import assertionsPOST from '../assertions/assertionsPOST';
import requestPOST from '../requests/requestsPOST'
import {Given, Then, When,And} from "@badeball/cypress-cucumber-preprocessor"

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
    if (dados.age === null || dados.name=== null) {
        console.log("variable is null");
    }
})

When ("a requisicao da API devera retornar 200", () => {

    requestPOST.postCadastroNomeIdade(dados).then(getDataResponse => {
        assertionsPOST.notNull(getDataResponse)
        assertionsPOST.deveConterStatus(getDataResponse, 200)
        assertionsPOST.deveConterDuracao(getDataResponse, 1500)
        assertionsPOST.deveConterStatusText(getDataResponse,"OK")
        assertionsPOST.deveConterNome(getDataResponse,"Teste")
        
    })
     
})