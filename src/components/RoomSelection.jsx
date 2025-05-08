const RoomSelection = ({ selections, setSelections }) => {
    const rooms = [
      { id: 'auditorium', name: 'Auditorium Hall', capacity: 200, price: 5500 },
      { id: 'conference', name: 'Conference Room', capacity: 15, price: 3500 },
      { id: 'presentation', name: 'Presentation Room', capacity: 50, price: 700 },
      { id: 'largeMeeting', name: 'Large Meeting Room', capacity: 10, price: 900 },
      { id: 'smallMeeting', name: 'Small Meeting Room', capacity: 5, price: 1100 }
    ]
  
    const handleQuantityChange = (roomId, increment) => {
      setSelections(prev => ({
        ...prev,
        rooms: {
          ...prev.rooms,
          [roomId]: Math.max(0, prev.rooms[roomId] + increment)
        }
      }))
    }
  
    return (
      <section id="rooms" className="room-section">
        <h2>Room Selection</h2>
        <div className="room-grid">
          {rooms.map(room => (
            <div key={room.id} className="room-card">
              <h3>{room.name}</h3>
              <p>Capacity: {room.capacity} people</p>
              <p>Price: ${room.price}</p>
              <div className="quantity-control">
                <button 
                  onClick={() => handleQuantityChange(room.id, -1)}
                  disabled={selections.rooms[room.id] === 0}
                >
                  -
                </button>
                <span>{selections.rooms[room.id]}</span>
                <button 
                  onClick={() => handleQuantityChange(room.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default RoomSelection