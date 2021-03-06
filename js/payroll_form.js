let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
      output.textContent = salary.value;
    });
    checkForUpdate();    
});

const save = () => {
  try {
         let employeePayrollData = createEmployeePayroll();
         createAndUpdateStorage(employeePayrollData);
  } catch (e) {
      return;
  }
}

function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
  
  if(employeePayrollList != undefined) {
      console.log("Data: " ,employeePayrollData);
      employeePayrollList.push(employeePayrollData);
  } else {
      employeePayrollList = [employeePayrollData]
  }
  alert(JSON.stringify(employeePayrollData));
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}


const createEmployeePayroll = () => {
  console.log("clicked");
  let employeePayrollData = new EmployeePayrollData();
  try {
      employeePayrollData.name = getInputValueById('#name');
  } catch (e) {
      setTextValue('.text-error', e);
      throw e;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.department = getSelectedValues('[name=department]');
  employeePayrollData.salary = getInputValueById('#salary');
  employeePayrollData.note = getInputValueById('#notes');
  let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
             getInputValueById('#year');
  employeePayrollData.date = Date.parse(date);
  alert(JSON.stringify(employeePayrollData));
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

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
}

const setForm = () => {
  setValue('#name', employeePayrollObj._name);
  setSelectedValues('[name=profile]', employeePayrollObj._profilePic);
  setSelectedValues('[name=gender]', employeePayrollObj._gender);
  setSelectedValues('[name=department]', employeePayrollObj._department);
  setValue('#salary', employeePayrollObj._salary);
  setTextValue('.salary-output', employeePayrollObj._salary);
  setValue('#notes', employeePayrollObj._note);
  let date = stringifyDate(employeePayrollObj._startDate).split(" ");
  setValue('#day', date[0]);
  setValue('#month', date[1]);
  setValue('#year', date[2]);
}

const resetForm = () => {
  setValue('#name','');
  unsetSelectedValues('[name=profile]');
  unsetSelectedValues('[name=gender]');
  unsetSelectedValues('[name=department]');
  setValue('#salary','');
  setValue('#notes', '');
  setSelectedIndex('#day', 0);
  setSelectedIndex('#month', 0);
  setSelectedIndex('#year', 0);
}

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
      item.checked = false;
  }); 
}

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}

const setSelectedIndex = (id, index) => {
  const element = document.querySelector(id);
  element.selectedIndex = index;
}

const checkForUpdate = () => {
  const employeePayrollJson = localStorage.getItem('editEmp');
  isUpdate = employeePayrollJson ? true : false;
  if (!isUpdate) return;
  employeePayrollObj = JSON.parse(employeePayrollJson);
  setForm();
}

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
    if(Array.isArray(value)) {
      if (value.includes(item.value)) {
        item.checked = true;
      }
    }
  });
}