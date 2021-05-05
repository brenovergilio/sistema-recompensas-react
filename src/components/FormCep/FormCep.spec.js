import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, getByPlaceholderText, act } from '@testing-library/react'
import FormCep from './FormCep'

global.fetch = jest.fn().mockImplementation(() =>
 Promise.resolve({
     json: () => ({
        cep: '79002060',
        logradouro: 'Rua Joel Dibo',
        bairro: 'Centro'
     })
 }))

it('Should render cep form', async () => {
    const { debug, getByPlaceholderText, container } = render(<FormCep />)
    const cepInput = getByPlaceholderText('CEP').closest('input')
    
    fireEvent.change(cepInput, { target: { value : '79002060'} })
    
    await act(() => global.fetch)

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(container).toMatchSnapshot()
})
