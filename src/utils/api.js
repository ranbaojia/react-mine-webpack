import axios from './axios'

 function fetchQqMusic(params){
    return axios({
      url: '/soso/fcgi-bin/client_search_cp',
      method: 'GET',
      params
    })
 }


 export default fetchQqMusic