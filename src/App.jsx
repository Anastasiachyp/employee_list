import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Image } from "semantic-ui-react";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    setEmployees(response.data.data);
  };

  const employeeList = employees.map((employee) => {
    return (
      <List.Item>
        <Image data-cy="avatar" src={employee.avatar} avatar />
        {employee.first_name} {employee.last_name}
      </List.Item>
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return <List data-cy="employee-list">{employeeList}</List>;
};

export default App;
