import { API_URL } from './config';
module.exports = (key='',id='') => {
    let body = {};
    body.key =key;

    return new Promise((resolve,reject) => {
      fetch(API_URL+id+'&fields=items(contentDetails%2Cid%2Csnippet)&key='+key)
      // ,{
      //     method: 'post',
      //     body: JSON.stringify(body)
      // })
      .then(res => res.json())
      .then(json =>resolve(json))
      .catch(e => console.log((e)))
    });
}
