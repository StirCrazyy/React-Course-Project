import PropTypes from 'prop-types'

const ShowDetails = ({ selections, onClose }) => {
    const rooms = [
      { id: 'auditorium', name: 'Auditorium Hall', price: 5500 },
      { id: 'conference', name: 'Conference Room', price: 3500 },
      { id: 'presentation', name: 'Presentation Room', price: 700 },
      { id: 'largeMeeting', name: 'Large Meeting Room', price: 900 },
      { id: 'smallMeeting', name: 'Small Meeting Room', price: 1100 }
    ]
  
    const addOns = [
      { id: 'speakers', name: 'Speakers', price: 35 },
      { id: 'microphones', name: 'Microphones', price: 45 },
      { id: 'whiteboards', name: 'Whiteboards', price: 80 },
      { id: 'projectors', name: 'Projectors', price: 200 },
      { id: 'signage', name: 'Signage', price: 80 }
    ]
  
    const meals = [
      { id: 'breakfast', name: 'Breakfast', price: 50 },
      { id: 'lunch', name: 'Lunch', price: 60 },
      { id: 'highTea', name: 'High Tea', price: 25 },
      { id: 'dinner', name: 'Dinner', price: 70 }
    ]
  
    const calculateTotal = () => {
      let total = 0;
      
      // Calculate rooms total
      rooms.forEach(room => {
        total += room.price * selections.rooms[room.id];
      });
      
      // Calculate add-ons total
      addOns.forEach(addon => {
        total += addon.price * selections.addOns[addon.id];
      });
      
      // Calculate meals total
      meals.forEach(meal => {
        total += meal.price * selections.meals[meal.id];
      });
      
      return total;
    }
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Expense Summary</h2>
          <div className="summary-table">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map(room => selections.rooms[room.id] > 0 && (
                  <tr key={room.id}>
                    <td>{room.name}</td>
                    <td>${room.price}</td>
                    <td>{selections.rooms[room.id]}</td>
                    <td>${room.price * selections.rooms[room.id]}</td>
                  </tr>
                ))}
                {addOns.map(addon => selections.addOns[addon.id] > 0 && (
                  <tr key={addon.id}>
                    <td>{addon.name}</td>
                    <td>${addon.price}</td>
                    <td>{selections.addOns[addon.id]}</td>
                    <td>${addon.price * selections.addOns[addon.id]}</td>
                  </tr>
                ))}
                {meals.map(meal => selections.meals[meal.id] > 0 && (
                  <tr key={meal.id}>
                    <td>{meal.name}</td>
                    <td>${meal.price}/person</td>
                    <td>{selections.meals[meal.id]}</td>
                    <td>${meal.price * selections.meals[meal.id]}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total</td>
                  <td>${calculateTotal()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }
  
  ShowDetails.propTypes = {
    selections: PropTypes.shape({
      rooms: PropTypes.object.isRequired,
      addOns: PropTypes.object.isRequired,
      meals: PropTypes.object.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
  }
  
  export default ShowDetails