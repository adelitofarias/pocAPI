Feature: Consultar parametros da API openWeatherMap

    Como usuario, desejo consultar dados da API
    Para conferir se os repametros de tempo estão corretos

    @regression
    Scenario: Coletar parametros da requisicao
        Given que tenha acesso a api
        When realizar a requisicao 
        Then retornara todos os parametros de tempo para a cidade