export function getList(){
  return fetch('http://localhost:8080/list')
    .then(list => list.json());
}
