import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Leaderboard data:', data);
        if (Array.isArray(data)) {
          setLeaderboard(data);
        } else if (data.results) {
          setLeaderboard(data.results);
        } else {
          setLeaderboard([]);
        }
      })
      .catch(err => {
        console.log('Error fetching Leaderboard:', err);
        setLeaderboard([]);
      });
  }, []);
    return (
      <div className="card p-4">
        <h2 className="heading">Leaderboard</h2>
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{entry.username || JSON.stringify(entry)}</td>
                <td>{entry.score || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Leaderboard;
