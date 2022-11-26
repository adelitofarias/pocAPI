const API_URL = Cypress.env('API_URL')
const ID = Cypress.env('ID')
const APPID = Cypress.env('APPID')

class Requests {

    getOpenWeatherAPI() {
        return cy.request({
            method: 'GET',
            url:  `${API_URL}id=${ID}&appid=${APPID}&units=metric`,
            headers: {
            'content-type': 'aplication/json'
            }
        })
    }
 
}

export default new Requests()