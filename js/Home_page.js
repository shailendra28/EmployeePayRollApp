window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});
// Template literal ES6 feacher
const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salar</th><th>Start Date</th><th>Actions</th>"
  let innerHtml = `${headerHtml}`;
  let empPayrollList = createEmployeePayrollJSON();
  for (const empPayrollData of empPayrollList) {
  innerHtml = `${innerHtml} 
  <tr>
      <td><img class="profile" alt=""src="${empPayrollData._profilePic}"></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._statrDate}</td>
      <td>
        <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
             src="../assets/icons/delete-black-18dp.svg">
          <img id="${empPayrollData._id}" alt="edit" onclick="update(this)"
             src="../assets/icons/create-black-18dp.svg">
      </td>
    </tr>
  `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
 }

 const createEmployeePayrollJSON = () => {
   let empPayrollListLocal = [
     {
       _name: 'Shailendra Yadav',
       _gender:'male',
       _department:[
         'Sales',
         'Finance'
       ],
       _salary: '500000',
       _statrDate: '29 Oct 2019',
       _note: '',
       _id: new Date().getTime(),
       _profilePic: '../assets/profile-images/Ellipse -2.png'
      },
      {
        _name: 'Devika kumari Mathur',
        _gender: 'female',
        _department: [
          'Sales'
        ],
        _salary: '400000',
        _statrDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: '../assets/profile-images/Ellipse -1.png'
      }
   ];
   return empPayrollListLocal;
 }

 const  getDeptHtml = (deptList) => {
   let deptHtml = '';
   for (const dept of deptList) {
     deptHtml =`${deptHtml} <div class='dept-label'>${dept}</div>`
   }
   return deptHtml;
 }