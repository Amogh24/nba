import React, { useEffect, useState } from 'react';
import './App.css';
import Teams from './components/Teams'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import teamService from './services/teams';

const App = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    teamService.getAllTeams().then(res => {
      setTeams(res.data);
    });
  }, []);
  console.log(teams);
  return (
    <div align="center">
      <Router>
        <div>
          <Link to="/teams">teams</Link>
          <Link to="/players">players</Link>
        </div>
        <Switch>
          <Route path="/teams">
            <Teams teams={teams}/>
          </Route>
          <Route path='/players'>
            <div>Players page coming up</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
