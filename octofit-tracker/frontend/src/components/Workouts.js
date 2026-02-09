import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Workouts data:', data);
        if (Array.isArray(data)) {
          setWorkouts(data);
        } else if (data.results) {
          setWorkouts(data.results);
        } else {
          setWorkouts([]);
        }
      })
      .catch(err => {
        console.log('Error fetching Workouts:', err);
        setWorkouts([]);
      });
  }, []);
  return (
    <div className="card p-4">
      <h2 className="heading">Workouts</h2>
      <table className="table table-hover">
        <thead className="table-success">
          <tr>
            <th>Workout</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {/* ...existing code... */}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Add Workout</button>
    </div>
  );
}

export default Workouts;
