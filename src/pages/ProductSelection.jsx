import { useState } from 'react'
import Navigation from '../components/Navigation'
import RoomSelection from '../components/RoomSelection'
import AddOns from '../components/AddOns'
import Meals from '../components/Meals'
import ShowDetails from '../components/ShowDetails'

const ProductSelection = () => {
  const [showModal, setShowModal] = useState(false)
  const [selections, setSelections] = useState({
    rooms: {
      auditorium: 0,
      conference: 0,
      presentation: 0,
      largeMeeting: 0,
      smallMeeting: 0
    },
    addOns: {
      speakers: 0,
      microphones: 0,
      whiteboards: 0,
      projectors: 0,
      signage: 0
    },
    meals: {
      breakfast: 0,
      lunch: 0,
      highTea: 0,
      dinner: 0
    }
  })

  return (
    <div className="product-selection">
      <Navigation onShowDetails={() => setShowModal(true)} />
      <div className="sections">
        <RoomSelection selections={selections} setSelections={setSelections} />
        <AddOns selections={selections} setSelections={setSelections} />
        <Meals selections={selections} setSelections={setSelections} />
      </div>
      {showModal && (
        <ShowDetails 
          selections={selections} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  )
}

export default ProductSelection