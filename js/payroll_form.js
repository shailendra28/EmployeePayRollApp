window.addEventListener("DOMContentLoaded", () => {

  const name = document.getElementById("name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
    } else {
      try {
        (new EmployeePayrollData).name = name.value;
        nameError.textContent = "";
      } catch (error) {
        nameError.textContent = error;
      }
    }
  });
  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  salary.oninput = function () {
    output.textContent = salary.value;
  };
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
  if (employeePayrollList != undefined) {
    employeePayrollList.push(employeePayrollData);
  } else {
    employeePayrollList = [employeePayrollData]
  }
  alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}
const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = getInputValueById('#name');
  } catch (e) {
    setTextValue('.text-error', e);
    throw e;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.departement = getSelectedValues('[name=departement]');
  employeePayrollData.salary = getSelectedValues('#salary');
  employeePayrollData.note = getSelectedValues('#note');
  let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
    getInputValueById('#year');
  employeePayrollData.date = Date.parse(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
    if (item.checked) selItems.push(item.value);
  });
  return selItems;
}
/*
*1: querySelector is  the newer feature.
*2: The querySelector  method  can be used when selecting by element name,nesting, or class name.
*3: querySelector lets you find elements with rules that can't be expressed with getElementById
*/
const getInputValueById = (id) => {
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
const resetForm = () => {
  setValue('#name', '');
  unsetSelectedValues('[name=profile]');
  unsetSelectedValues('[name=gender]');
  unsetSelectedValues('[name=department]');
  setValue('#salary', '');
  setValue('#notes', '');
  setValue('#day', '1');
  setValue('#month', 'January');
  setValue('#year', '2021');
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