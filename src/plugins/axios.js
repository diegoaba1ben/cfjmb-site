import axios from 'axios' //importación de axios


//Creación de una instancia de axios
const instance = axios.create({
    baseURL: 'https://localhost:8080/api', //esto se reemplaza si se va utilizar un servidor
    timeout: 1000, //Tiempo de espera en microsegundos
    headers: { 'X-Custom-header' : 'foobar'}

})

//Aquí pueden desarrollarse interceptores
instance.interceptors.request.use (config => {
    //Lógica del interceptor
    return  config
}, error => {
    //Lógica del interceptor si hay error
    return Promise.reject(error)
})

//Datos de respuesta
instance.interceptors.response.use(response => {
    //Lógica para la respuesta
    return response
}, error => {
    //Lógica con el error de la respuesta
    return Promise.reject(error)
})
export default instance