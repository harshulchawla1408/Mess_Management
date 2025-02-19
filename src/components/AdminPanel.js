// AdminPanel.js
import React from 'react';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <p>Manage the mess menu, attendance, and feedback from this panel.</p>
      <button className="btn btn-info m-2">Edit Menu</button>
      <button className="btn btn-warning m-2">Manage Attendance</button>
      <button className="btn btn-danger m-2">View Feedback</button>
    </div>
  );
}

export default AdminPanel;
