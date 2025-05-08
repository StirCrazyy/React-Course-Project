import { render, screen, fireEvent } from '@testing-library/react'
import ShowDetails from '../ShowDetails'

const mockSelections = {
  rooms: { auditorium: 1, conference: 0 },
  addOns: { speakers: 2, microphones: 1 },
  meals: { breakfast: 50, lunch: 0 }
}

describe('ShowDetails Component', () => {
  test('renders expense summary', () => {
    render(<ShowDetails selections={mockSelections} onClose={() => {}} />)
    expect(screen.getByText('Expense Summary')).toBeInTheDocument()
  })

  test('calculates total correctly', () => {
    render(<ShowDetails selections={mockSelections} onClose={() => {}} />)
    // Auditorium: 5500 + Speakers: 70 + Microphones: 45 + Breakfast: 2500 = 8115
    expect(screen.getByText('$8115')).toBeInTheDocument()
  })

  test('closes on button click', () => {
    const mockClose = jest.fn()
    render(<ShowDetails selections={mockSelections} onClose={mockClose} />)
    fireEvent.click(screen.getByText('Close'))
    expect(mockClose).toHaveBeenCalled()
  })
})