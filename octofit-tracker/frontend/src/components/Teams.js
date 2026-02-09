import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Teams data:', data);
        if (Array.isArray(data)) {
          setTeams(data);
        } else if (data.results) {
          setTeams(data.results);
        } else {
          setTeams([]);
        }
      })
      .catch(err => {
        console.log('Error fetching Teams:', err);
        setTeams([]);
      });
  }, []);
  return (
    <div className="card p-4">
      <h2 className="heading">Teams</h2>
      <ul className="list-group mb-3">
        {teams.map((team, idx) => (
          <li key={idx}>{team.name || JSON.stringify(team)}</li>
        ))}
      </ul>
      <form className="d-flex gap-2">
        <input className="form-control" type="text" placeholder="Team Name" />
        <button className="btn btn-success">Add Team</button>
      </form>
    </div>
  );
}

export default Teams;
