const employees = [
  { id: 1, name: "bobo", sallery: 900000, department: "IT", DOB: "01/30/1990" },
  {
    id: 2,
    name: "mgmg",
    sallery: 850000,
    department: "Account",
    DOB: "10/15/1992",
  },
  {
    id: 3,
    name: "nono",
    sallery: 700000,
    department: "Finance",
    DOB: "04/9/2001",
  },
  {
    id: 4,
    name: "popo",
    sallery: 700000,
    department: "Design",
    DOB: "04/9/2007",
  },
  {
    id: 4,
    name: "koko aumg",
    sallery: 1706000,
    department: "IT",
    DOB: "04/9/2001",
  },
  {
    id: 5,
    name: "koko",
    sallery: 850000,
    department: "Finance",
    DOB: "09/25/1991",
  },
  {
    id: 6,
    name: "aungaung",
    sallery: 850000,
    department: "Finance",
    DOB: "09/25/1981",
  },
  {
    id: 7,
    name: "rose",
    sallery: 2850000,
    department: "Account",
    DOB: "09/25/1995",
  },
  {
    id: 8,
    name: "rose merry",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/1979",
  },
  {
    id: 9,
    name: "pp smith",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/2000",
  },
  {
    id: 10,
    name: "rr smith",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/1995",
  },
  {
    id: 11,
    name: "popo",
    sallery: 900000,
    department: "Account",
    DOB: "09/25/1997",
  },
  {
    id: 12,
    name: "willim",
    sallery: 900000,
    department: "Design",
    DOB: "09/25/1997",
  },
  {
    id: 13,
    name: "ko bo",
    sallery: 1706000,
    department: "IT",
    DOB: "04/9/1960",
  },
  {
    id: 14,
    name: "ko nyo",
    sallery: 200200,
    department: "IT",
    DOB: "04/9/1990",
  },
  {
    id: 15,
    name: "ko james",
    sallery: 200400,
    department: "IT",
    DOB: "04/9/1990",
  },
];

const employeesDetails = employees.map((employee) => {
  return `${employee.name} is works in the ${employee.department} department and earns ${(employee.sallery / 1000).toFixed(2)}k per year.`;
});

// console.log(employeesDetails);

const totalSallery = employees.reduce((total, employee) => {
  return total + parseInt(employee.sallery);
  //   console.log(total);
}, 0);
// console.log(totalSallery);

// const employeeBySallery = employees.reduce((acc, employee) => {
//   const key = employee.sallery;
//   const value = acc[key] || [];
//   return { ...acc, [key]: [...value, employee.name] };
// }, {});
// console.log(employeeBySallery);

// const employeeByDepartment = employees.reduce((acc, employee) => {
//   const key = employee.department;
//   // console.log("key is =>", key);
//   // console.log("acc is =>", acc);
//   const value = acc[key] || [];
//   // console.log("value is =>", value);
//   return { ...acc, [key]: [...value, employee.name] };
// }, {});

// console.log(employeeByDepartment);

const employeeBySallery = employees.reduce((acc, person) => {
  const salleryKey = person.sallery;
  const salleryValue = acc[salleryKey] || [];
  return { ...acc, [salleryKey]: [...salleryValue, person.name] };
}, {});
// console.log(employeeBySallery);

for (const person in employeeBySallery) {
  console.log(person, ":", employeeBySallery[person]);
}

employeeBySallery["890000"] = [...employeeBySallery["890000"], "htinkyaw"];
console.log(employeeBySallery);

const newEmployeeObj = [
  ...employees,
  { id: 478, name: "HTK", sallery: 900000, department: "Finance" },
];
console.log(newEmployeeObj);
