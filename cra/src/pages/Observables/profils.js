import Axios from 'axios';
import { makeAutoObservable } from 'mobx'

class Profile {
    _users = [];
    _usersEndpointUrl = `${process.env.PUBLIC_URL}/data/users.json`;

    constructor() {
        makeAutoObservable(this);
        this.fetchUser();
    }

    fetchUser() {
        Axios.get(this._usersEndpointUrl)
            .then((result) => {
                this.users = result.data;
            });
    }

    get users() {
        return this._users;
    }

    set users(users) {
        this._users = users;
    }
}

export default new Profile();