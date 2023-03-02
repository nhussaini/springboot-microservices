import { useState, useEffect } from 'react';
import EmployeeService from '../service/EmployeeService';
import axios from 'axios';

function EmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  function getEmployees() {
    axios.get('http://localhost:9191/api/employees/2').then((response) => {
      console.log('response', response.data);
    });
  }

  useEffect(() => {
    getEmployees();
  });

  return <div>{employees}</div>;
}
export default EmployeeComponent;
