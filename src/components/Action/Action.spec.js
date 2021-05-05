import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Action from './Action'


it('Should not let you claim the trophy', () => {
    const { container, debug, getByText } = render(<Action />)

    const button = getByText('Reinvindicar').closest('button')
    fireEvent.click(button)

    expect(getByText('Você não tem todas as recompensas para reinvindicar o troféu')).toBeTruthy()
    debug()
})