import React, { useState } from 'react';
import './Menu.css';  

function Menu() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const weeklyMenus = {
    breakfast: [
      { day: 'Monday', menu: 'Pav Bhaji' },
      { day: 'Tuesday', menu: 'Chole Kulcha' },
      { day: 'Wednesday', menu: 'Aloo Parantha' },
      { day: 'Thursday', menu: 'Mix Parantha' },
      { day: 'Friday', menu: 'Sandwiches' },
      { day: 'Saturday', menu: 'Masala Dosa' },
      { day: 'Sunday', menu: 'Poha' },
    ],
    lunch: [
      { day: 'Monday', menu: 'Rajma, rice and roti' },
      { day: 'Tuesday', menu: 'Black chane, rice and roti ' },
      { day: 'Wednesday', menu: 'Kadhi and rice' },
      { day: 'Thursday', menu: 'White Chane and puri' },
      { day: 'Friday', menu: 'Matar Paneer, rice and roti' },
      { day: 'Saturday', menu: 'Black Dal and roti' },
      { day: 'Sunday', menu: 'Chane Bhature' },
    ],
    dinner: [
      { day: 'Monday', menu: 'Sarson ka Saag and Makki ki roti' },
      { day: 'Tuesday', menu: 'Aloo Gobhi with Ice cream' },
      { day: 'Wednesday', menu: 'Shahi Paneer with Gulab Jamun' },
      { day: 'Thursday', menu: 'Chilli Nutri with Custard' },
      { day: 'Friday', menu: 'Mix veg with Fruit cream' },
      { day: 'Saturday', menu: 'Aloo methi with Kulfi' },
      { day: 'Sunday', menu: 'Yellow Dal with Halwa' },
    ],
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="menu-page">
      <h2 className="page-title">Today's Menu</h2>
      <div className="meal-section">
        {['breakfast', 'lunch', 'dinner'].map((meal) => (
          <div
            key={meal}
            className="meal-card"
            onClick={() => handleMealClick(meal)}
          >
            <img
              src={`/images/${meal}.jpg`}
              alt={meal.charAt(0).toUpperCase() + meal.slice(1)}
              className="meal-image"
            />
            <h3>{meal.charAt(0).toUpperCase() + meal.slice(1)}</h3>
            <p>{meal === 'breakfast' ? 'Enjoy a healthy start to your day!' : meal === 'lunch' ? 'Delicious and balanced meals for the afternoon.' : 'End your day with a fulfilling meal.'}</p>
          </div>
        ))}
      </div>

      {selectedMeal && (
        <div className="weekly-menu">
          <h3>Weekly {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)} Menu</h3>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>Day</th>
                <th>Menu</th>
              </tr>
            </thead>
            <tbody>
              {weeklyMenus[selectedMeal].map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.menu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Menu;
