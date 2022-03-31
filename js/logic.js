// ------------- DATA
function getData() {
  return JSON.parse(localStorage.getItem("items"));
}

// ------------- FIND
function find(id, cart=getData()) {
  const even = (itemincart) => itemincart.id == id;
  
  return cart.findIndex(even);
}
function relativeFind(id) {
  let datas = getData();
  const even = (data) => {
    console.log(data);
    return data.id.toString().includes(id, 0);
  };
  return datas.filter(even);
}
// ------------------ CRUD
function setData(data) {
  localStorage.setItem("items", JSON.stringify(data));
}
function addData(data) {
  console.log(data);
  let baseData = getData();
  baseData.push(data);
  setData(baseData);
}
function getDataByID(id) {
  return getData()[find(id,getData())];
}
function deleteByID(id) {
  let data = getData();
  data.splice(find(id,data), 1);
  setData(data);
}
function updateByID(data, id){
  //  chưa test
  let temp = getData();
  temp[find( id, temp)] = data;
  setData(temp);
}
export { find, relativeFind, getData, setData, deleteByID, getDataByID, updateByID, addData };
