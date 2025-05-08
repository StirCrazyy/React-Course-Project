const Meals = ({ selections, setSelections }) => {
    const meals = [
      { id: 'breakfast', name: 'Breakfast', price: 50 },
      { id: 'lunch', name: 'Lunch', price: 60 },
      { id: 'highTea', name: 'High Tea', price: 25 },
      { id: 'dinner', name: 'Dinner', price: 70 }
    ]
  
    const handlePeopleChange = (mealId, value) => {
      // Ensure input is a positive number
      const numValue = Math.max(0, parseInt(value) || 0)
      if (numValue > 1000) {
        alert("Maximum 1000 people allowed per meal")
        return
      }
      
      setSelections(prev => ({
        ...prev,
        meals: {
          ...prev.meals,
          [mealId]: numValue
        }
      }))
    }
  
    return (
      <section id="meals" className="meals-section">
        <h2>Meal Selection</h2>
        <div className="meals-grid">
          {meals.map(meal => (
            <div key={meal.id} className="meal-card">
              <h3>{meal.name}</h3>
              <p>Price per person: ${meal.price}</p>
              <div className="meal-input">
                <label htmlFor={meal.id}>Number of people:</label>
                <input
                  type="number"
                  id={meal.id}
                  min="0"
                  value={selections.meals[meal.id]}
                  onChange={(e) => handlePeopleChange(meal.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Meals