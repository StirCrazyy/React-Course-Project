const AddOns = ({ selections, setSelections }) => {
    const addOns = [
      { id: 'speakers', name: 'Speakers', price: 35 },
      { id: 'microphones', name: 'Microphones', price: 45 },
      { id: 'whiteboards', name: 'Whiteboards', price: 80 },
      { id: 'projectors', name: 'Projectors', price: 200 },
      { id: 'signage', name: 'Signage', price: 80 }
    ]
  
    const handleQuantityChange = (itemId, increment) => {
      setSelections(prev => ({
        ...prev,
        addOns: {
          ...prev.addOns,
          [itemId]: Math.max(0, prev.addOns[itemId] + increment)
        }
      }))
    }
  
    return (
      <section id="addons" className="addons-section">
        <h2>Audio/Visual Equipment</h2>
        <div className="addons-grid">
          {addOns.map(item => (
            <div key={item.id} className="addon-card">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <button 
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={selections.addOns[item.id] === 0}
                >
                  -
                </button>
                <span>{selections.addOns[item.id]}</span>
                <button 
                  onClick={() => handleQuantityChange(item.id, 1)}
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
  
  export default AddOns