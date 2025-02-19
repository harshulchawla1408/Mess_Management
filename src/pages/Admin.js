import React from 'react';
import AdminPanel from '../components/AdminPanel';

function Admin() {
  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <p>Manage the hostel mess system's meals, attendance, and feedback.</p>
      <AdminPanel />
    </div>
  );
}
export default Admin;