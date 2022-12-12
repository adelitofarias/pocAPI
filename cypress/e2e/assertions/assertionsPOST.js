class AssertionsPOST {

    notNull(response){
        expect(response).to.be.not.null
    }

    deveConterStatus(response, status) {
        expect(response.status, `status eh ${status}`).to.eq(status)
    }

    deveConterDuracao(response, duracao) {
        expect(response.duration, `a duracao do tempo de respota deve ser abaixo de ${duracao}`).to.be.below(duracao)
    }

    deveConterStatusText(response, statusText) {
        expect(response.statusText, `o statusText eh de ${statusText}`).to.eq(statusText)
    }



    deveConterNome(response, nome) {
        expect(response.body.data, `o nome cadastrado eh ${nome}`).to.contain(nome)
    }

    

    
}

export default new AssertionsPOST()