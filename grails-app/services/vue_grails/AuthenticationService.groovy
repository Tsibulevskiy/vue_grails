package vue_grails

import grails.gorm.transactions.Transactional

@Transactional
class AuthenticationService {

    private static final Map User = [email: '1@gmail.com', password: '123456']

    Map serviceMethod(def credentions) {
        String email = credentions.email
        String password = credentions.password

        Boolean isAuth = checkEmail(email, password)
        if (!isAuth) throw new Exception('Email not found')
        return [success: 'Complete', token: '123%1@gmail.com%456']
    }

    static Boolean checkEmail(String email, String password) {
        if (email == User.email && password == User.password) {
            return  true
        }
        return false
    }
}
