package vue_grails

import grails.converters.JSON

class AuthController {

    def AuthenticationService

    def auth() {
        try {
            response.status = 200
            render AuthenticationService.serviceMethod(request.XML) as JSON
        } catch(e) {
            response.status = 401
            render([error: e.message] as JSON)
        }
    }
}
