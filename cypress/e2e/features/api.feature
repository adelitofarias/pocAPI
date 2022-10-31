Feature: Consultar parametros

    Como usuario, desejo consultar dados da API
    Para conferir se os repametros estão corretos

    Scenario: Coletar parametros da requisicao
        Given Que os parametros da requisicao estejam coerentes
        And informo o "<nome>"
        And informo a "<idade>"
        When todos os dados estiverem informados 
        Then a requisicao da API devera retornar 200

        Examples:
        | nome     | idade |
        | Teste    | 30    |