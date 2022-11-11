class Assertions {

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

    deveConterCidade(response, id) {
        expect(response.body.city.id, `o id da cidade eh ${id}`).to.eq(id)
    }

    deveConterCidadeName(response, cidade) {
        expect(response.body.city.name, `a cidade eh${cidade}`).to.eq(cidade);
    }

    deveConterCidadeCoordLat(response, coordLat) {
        expect(response.body.city.coord.lat, `a cidade eh${coordLat}`).to.eq(coordLat);
    }

    deveConterElementoCidade(response, elemento) {
        expect(response.body, `o elemento ${elemento} esta presente`).to.have.property(elemento);
    }

    deveConterPropriedadeMaxTemp(response, maxTemp) {
        expect(response.body.list[0].main.temp_max, `a temperatura maxima eh um ${maxTemp}`).to.be.an(maxTemp);
    }
    
}

export default new Assertions()