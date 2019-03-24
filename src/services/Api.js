import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost:3000') => {

    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })

    const getCocktails = () => api.get('/markers')

    return {
        getCocktails,
    }
}

export default {
    create
}
