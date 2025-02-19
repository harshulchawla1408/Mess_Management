import React, { useState } from 'react';
import './BillManagement.css'; 

function BillManagement() {
  const mealPrices = {
    Breakfast: 30,
    Lunch: 50,
    Dinner: 70,
    Chips: 20,
    Tea: 10,
    Coffee: 15,
    Sandwich: 35,
    Burger: 30,
    Fries: 30,
    Biscuit: 10,
    Pastry: 20,
    Milkshake: 30,
    Omlette: 40,
  };

  const [selectedMeals, setSelectedMeals] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Chips: false,
    Tea: false,
    Coffee: false,
    Sandwich: false,
    Burger: false,
    Fries: false,
    Biscuit: false,
    Pastry: false,
    Milkshake: false,
    Omlette: false
  });
  const [dailyTotal, setDailyTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);

  const handleMealSelect = (meal) => {
    const isSelected = selectedMeals[meal];
    const newDailyTotal = isSelected
      ? dailyTotal - mealPrices[meal]
      : dailyTotal + mealPrices[meal];

    setSelectedMeals({
      ...selectedMeals,
      [meal]: !isSelected,
    });
    setDailyTotal(newDailyTotal);
  };

  const addToMonthlyTotal = () => {
    setMonthlyTotal(monthlyTotal + dailyTotal);
    setSelectedMeals({ breakfast: false, 
        lunch: false, 
        dinner: false, 
        Chips: false,
        Tea: false,
        Coffee: false,
        Sandwich: false,
        Burger: false,
        Fries: false,
        Biscuit: false,
        Pastry: false,
        Milkshake: false,
        Omlette: false, });
    setDailyTotal(0);
  };

  return (
    <div className="bill-management">
      <h2>Bill Management</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(mealPrices).map((meal, index) => (
              <tr key={index}>
                <td>{meal.charAt(0).toUpperCase() + meal.slice(1)}</td>
                <td>{mealPrices[meal]}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedMeals[meal]}
                    onChange={() => handleMealSelect(meal)}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td><strong>Daily Total</strong></td>
              <td colSpan="2">{dailyTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={addToMonthlyTotal}>
          Add to Monthly Bill
        </button>
      </div>

      <div className="monthly-total-container">
        <table className="table">
          <thead>
            <tr>
              <th>Monthly Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{monthlyTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BillManagement;
