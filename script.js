const baseURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
let currentPage = 1;
let departmentFilter = '';
let genderFilter = '';
let sortSalary = '';

const employeeTable = document.getElementById('employee-data')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const departmentSelect = document.getElementById('department-filter')
const genderSelect = document.getElementById('gender-filter')
const sortSelect = document.getElementById('salary-sort')

prevBtn.addEventListener('click',() =>{
    if (currentPage>1){
        currentPage--;
        fetchEmployees();
    }
});
nextBtn.addEventListener('click',() => {
    currentPage++;
    fetchEmployees();
})
departmentSelect.addEventListener('change', () => {
    departmentFilter = departmentSelect.value;
    currentPage = 1;
    fetchEmployees();
})
genderSelect.addEventListener('change',() =>{
    genderFilter = genderSelect.value;
    currentPage = 1 ;
    fetchEmployees();
})
sortSelect.addEventListener('change',() =>{
    sortSalary = sortSelectt.value;
    fetchEmployees();
})
function fetchEmployees(){
    const url = '${baseURL}?page = ${currentPage}&limit10&filterBy=${department}'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Response', data);
        renderEmployee(data);
        updatePagination(data);
    })
    .catch(error =>console.error('Error fetch employees;', error));

}
function renderEmployees(data) {
    employeeTable.innerHTML = '';
    data.forEach((employee, index) => {
        const row = 
        <tr>
            <td>${index + 1 }</td>
            <td>${employee.name}</td>
            <td>${employee.gender}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        </tr>
        ;
    })
}
fetchEmployees();