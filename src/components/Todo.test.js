import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe('Test for Todo component', () =>{
    test('Deve verificar se a descrição da tarefa aparesse no input', () => {
        const valorEsperado = "testando"
        render(<Todo />)
        const inputElement = screen.getByTestId('inputTask')
        fireEvent.change(inputElement, {target: {value: valorEsperado}})
        expect(inputElement.value).toEqual(valorEsperado)
        
        // 
        // console.log(inputElement)
    });

    test('Deve verificar se uma nova tarefa foi criada', ()=>{
        const valorEsperado = "testando"
        render(<Todo />)
        const inputElement = screen.getByTestId('inputTask')
        fireEvent.change(inputElement, {target: {value: valorEsperado}})

        const btnElement = screen.getByTestId('btnTask')
        fireEvent.click(btnElement)

        const tdNode = screen.getByText(valorEsperado)
        expect(tdNode).toBeDefined
        
    })
    
})
