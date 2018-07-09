export class Model {
  constructor() {

  }

  loadData(url, handler) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.addEventListener('load', function() {
      let json = JSON.parse(this.responseText);
      handler(json);
    })
    xhr.send();
  }


  loadDT(url) {
    axios.get(url).then(function(response) {
      console.log(response);
    })
  }

}