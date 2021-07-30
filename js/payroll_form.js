window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function() {
      if(name.value.length == 0) {
        textError.textContent = "";
        return;
      }
      try{
        (new EmployeePayrollData()).name = name.value;;
        textError.textContent="";   
      }catch (e) {
        textError.textContent = e;
      }
    });
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
}); 
});
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    }catch (e) {
        return;
    }
}
const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try{
    employeePayrollData.name = getInputValueById('#name');
  }catch (e){
    setTextValue('.text-error',e);
    throw e;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.departement = getSelectedValues('[name=departement]');
  employeePayrollData.salary = getSelectedValues('#salary');
  employeePayrollData.note = getSelectedValues('#note');
  let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
             getInputValueById('#year');
  employeePayrollData.date = Date.parse(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;           
}
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
    if(item.checked) selItems.push(item.value); 
  });
  return selItems;
}
/*
*1: querySelector is  the newer feature.
*2: The querySelector  method  can be used when selecting by element name,nesting, or class name.
*3: querySelector lets you find elements with rules that can't be expressed with getElementById
*/
const  getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

/*
* 1: getElementById is better supported than querySelector in the older version of the browsers.
* 2: The thing with getElementById is that it only allows to select an element by its id. 
*/
const getElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
}