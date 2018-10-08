import React, { Component } from 'react';
import './App.css';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';

const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      employee:  sampleEmployee
    };
  }

  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://randomuser.me/api?nat=fr")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data.results[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <GenerateEmployee selectEmployee={() =>  this.getEmployee()} />
        <DisplayEmployee  employee={this.state.employee}  />
      </div>
    );
  }
}

export default App;
