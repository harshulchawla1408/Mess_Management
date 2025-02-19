const BASE_URL = 'https://api.hostel-mess.com';

export const getMealMenu = async () => {
  try {
    const response = await fetch(`${BASE_URL}/menu`);
    if (!response.ok) throw new Error('Error fetching menu');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// To fetch attendance records
export const getAttendance = async () => {
  try {
    const response = await fetch(`${BASE_URL}/attendance`);
    if (!response.ok) throw new Error('Error fetching attendance');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// To toggle attendance status for a student
export const toggleAttendance = async (studentId) => {
  try {
    const response = await fetch(`${BASE_URL}/attendance/toggle/${studentId}`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Error updating attendance');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// To submit feedback
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${BASE_URL}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData),
    });
    if (!response.ok) throw new Error('Error submitting feedback');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// To fetch feedbacks for the admin
export const getFeedbacks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/feedback`);
    if (!response.ok) throw new Error('Error fetching feedbacks');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// To get admin data, like menu or attendance updates
export const getAdminData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/admin/data`);
    if (!response.ok) throw new Error('Error fetching admin data');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// To update menu (admin functionality)
export const updateMenu = async (menuData) => {
  try {
    const response = await fetch(`${BASE_URL}/admin/menu`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menuData),
    });
    if (!response.ok) throw new Error('Error updating menu');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
