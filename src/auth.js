import axios from "axios"

class AuthClient {
    constructor() {
        this.request = axios.create({
            baseURL:
                "https://interview-challenge-server.herokuapp.com/products",
            headers: {},
        })
    }

    getShoes() {
        return this.request({ method: "GET", url: "" }).then((response) => {
            if (response.status === 200) {
                return response.data
            }
        })
    }
}

export default new AuthClient()
