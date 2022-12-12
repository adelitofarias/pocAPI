class RequestsPOST {

    postCadastroNomeIdade(dados) {
        return cy.request({
            method: 'POST',
            url:  'https://httpbin.org/post',
            headers: {'content-type': 'aplication/json'},
            body: dados
        })
    }
 
}

export default new RequestsPOST()