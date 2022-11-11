/// <reference types="cypress" />

import assertions from '../assertions/assertions';
import request from '../requests/requests'
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"

Given ("que tenha acesso a api", () => {})

Then ("realizar a requisicao", () => {})

When ("retornara todos os parametros de tempo para a cidade", () => {

    request.getOpenWeatherAPI().then(getDataResponse => {
        assertions.notNull(getDataResponse)
        assertions.deveConterStatus(getDataResponse, 200)
        assertions.deveConterDuracao(getDataResponse, 1500)
        assertions.deveConterStatusText(getDataResponse,"OK")
        assertions.deveConterCidade(getDataResponse,3397277)
        assertions.deveConterCidadeName(getDataResponse,"João Pessoa")
        assertions.deveConterCidadeCoordLat(getDataResponse,-7.115)
        assertions.deveConterElementoCidade(getDataResponse,'city')
        assertions.deveConterPropriedadeMaxTemp(getDataResponse,"number")
    })
     
})
