//Nivell 1 ex 1
//resolve: funcion de JS, la funcion entiende que ha funcionado
//reject: funcion de JS, la funcion entiende que ha dado error
const prom = false; // variable que definirá si el resultado va a resolve o reject
const miFuncion = new Promise((resolve, reject) => {
  if (prom) {
    const respuesta = "Promesa is true usamos resolve";
    resolve(respuesta);
  } else {
    const respuesta = "Promesa is false usamos reject";
    reject(respuesta);
  }
});

miFuncion //<=la promesa
  .then((res) => {
    //resolve data
    console.log(res);
  })
  .catch((err) => {
    //reject data
    console.log(err);
  });

const funcionQueRetornaPromise = () => {
  return new Promise((resolve, reject) => {
    if (prom) {
      resolve("Resolve: La promesa era true");
    } else {
      reject("Reject: La promesa era falsa");
    }
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
funcionQueRetornaPromise();

//NIVELL 1 ex 2
let x = Math.floor(Math.random() * 5);
x = x % 2;
const ultimafun = (x) => {
  let res;
  if (x == 0) {
    res = "x es par";
  } else {
    res = "x es impar";
  }
  return res;
};
const nuevafun = () => {
  const mensaje = ultimafun(x);
  console.log(`Nivell 1 ex 2: ${x} ${mensaje}`);
};
nuevafun();

//NIVELL 2 ex 1
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];
let idEmpleado = 1; //Math.floor(Math.random(1) * 4);
const getEmployee = () => {
  let respuesta = "";
  const employee = new Promise((resolve, reject) => {
    //Codigo apra buscar el ID
    let a = employees.find((x) => {
      return x.id === idEmpleado;
    });
    a ? resolve(a.name) : reject("No se encontró el empleado");
  });
  employee
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err;
    });

  return employee;
};
// getEmployee();
//NIVELL 2 ex 2
const getSalary = () => {
  const salary = new Promise((resolve, reject) => {
    let a = salaries.find((x) => {
      return x.id === idEmpleado;
    });
    a ? resolve(a.salary) : reject("No se encontró el salario");
  });
  salary
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return salary;
};
// getSalary();
//NIVELL 2 ex 3
const exTres = () => {
  Promise.all([getEmployee, getSalary]).then((res) =>
    console.log("Respuesta ex 3:", res)
  );
};
getEmployee();
getSalary();
exTres();
