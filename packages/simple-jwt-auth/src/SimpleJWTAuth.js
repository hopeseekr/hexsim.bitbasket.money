"use strict";

import jwtDecode from 'jwt-decode';

class SimpleJWTAuth
{
    constructor(router) {
        this.router = router;
    }

    login(token, expiresIn) {
        localStorage.setItem('jwt', token);
        localStorage.setItem('jwt-expires', (new Date).setSeconds(expiresIn));

        return jwtDecode(token);
    }

    isLoggedIn() {
        const jwtToken = localStorage.getItem('jwt');
        const jwtExpires = localStorage.getItem('jwt-expires');

        if (!jwtToken) {
            return false;
        }

        return jwtExpires >= (new Date()).getTime();
    }

    logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('jwt-expires');

        this.router.push('/login');
    }
}

export default SimpleJWTAuth;