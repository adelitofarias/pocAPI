/// <reference types="cypress" />

import assertionsGET from '../assertions/assertionsGET';
import requestGET from '../requests/requestsGET'
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"

Given ("que tenha acesso a api", () => {})

Then ("realizar a requisicao", () => {})

When ("retornara todos os parametros de tempo para a cidade", () => {

    requestGET.getOpenWeatherAPI().then(getDataResponse => {
        assertionsGET.notNull(getDataResponse)
        assertionsGET.deveConterStatus(getDataResponse, 200)
        assertionsGET.deveConterDuracao(getDataResponse, 1500)
        assertionsGET.deveConterStatusText(getDataResponse,"OK")
        assertionsGET.deveConterCidade(getDataResponse,3397277)
        assertionsGET.deveConterCidadeName(getDataResponse,"João Pessoa")
        assertionsGET.deveConterCidadeCoordLat(getDataResponse,-7.115)
        assertionsGET.deveConterElementoCidade(getDataResponse,'city')
        assertionsGET.deveConterPropriedadeMaxTemp(getDataResponse,"number")
    })
     
})
