package vue_grails

import grails.converters.JSON

class AuthController {

    def AuthenticationService

    def auth() {
        try {
            response.status = 200
            render AuthenticationService.serviceMethod(request.XML) as JSON
        } catch(error) {
            response.status = 401
            render([error: error.message] as JSON)
        }
    }
}
