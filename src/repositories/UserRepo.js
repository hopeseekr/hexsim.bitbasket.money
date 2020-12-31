"use strict";

export class UserRepo
{
    axios = null;
    user_id = null;
    user = null;

    constructor(axios, user_id) {
        this.axios = axios;
        this.user_id = user_id;
    }

    get() {
        return this.user;
    }

    fetchInfo() {
        return new Promise((resolve, reject) => {
        this.axios.get('/users/' + this.id)
            .then(response => {
                console.log(response.data);

                const name = response.data.basicInfo.name;

                const makeUser = function (response) {
                    return {
                        username: response.data.email,
                    };
                };

                this.user = makeUser(response);

                resolve(this.user);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}
