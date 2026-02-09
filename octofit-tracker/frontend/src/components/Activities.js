import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    console.log('Fetching Activities from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Activities data:', data);
        if (Array.isArray(data)) {
          setActivities(data);
        } else if (data.results) {
          setActivities(data.results);
        } else {
          setActivities([]);
        }
      })
      .catch(err => {
        console.log('Error fetching Activities:', err);
        setActivities([]);
      });
  }, []);
  return (
    <div className="card p-4">
      <h2 className="heading">Activities</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, idx) => (
            <tr key={idx}>
              <td>{activity.date}</td>
              <td>{activity.name || JSON.stringify(activity)}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Add Activity</button>
    </div>
  );
}

export default Activities;
