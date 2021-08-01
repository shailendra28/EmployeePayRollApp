window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});
// Template literal ES6 feacher
const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salar</th><th>Start Date</th><th>Actions</th>"
let empPayrollData = createEmployeePayrollJSON()[1];
  const innerHtml =`${headerHtml}
    <tr>
      <td><img class="profile" alt=""src="${empPayrollData._profilePic}"></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td><div class='dept-level'>${empPayrollData._department[0]}</div>
        <div class='dept-level'>${empPayrollData._department[1]}</div></td>
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
       _profilePic: '../assets/profile-image/Ellipse -2.png'
      },
      {
        _name: 'Devika kumari Mathur',
        _gender: 'male',
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