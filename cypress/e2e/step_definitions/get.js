/// <reference types="cypress" />

import {Given, Then, When, And} from "@badeball/cypress-cucumber-preprocessor"

const opstions = {
    method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/forecast?id=3397277&appid=aa8da36c131ecd59e8fd066c5900102a&units=metric',
        headers: {
            'content-type': 'aplication/json'
        }
};

Given ("que tenha acesso a api", () => {})

Then ("realizar a requisicao", () => {})

When ("retornara status 200", () => {
    cy.request(opstions).then((response) => {

        expect(response.duration,"a duracao do tempo de respota deve ser abaixo de 1500ms").to.be.below(1500);
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");

        expect(response.body).to.be.not.null
        expect(response.body.city.name).to.eq("João Pessoa");
        expect(response.body).to.have.property('city');
        
        expect(response.body.list[0].main.temp_max, "Temperatura na cidade de João Pessoa").to.eq(24.76);
        expect(response.body.list[0].main.temp_max).to.be.an("number");
   

        expect(response.body.city.coord.lat).to.eq(-7.115);

        console.log(response);
    });
     
})
