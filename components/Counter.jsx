// components/Counter.jsx

'use client'

import { useState } from 'react'

export default function Counter() {
    // userState retorna um array com dois elementos:
    // [0] = o valor atual do estado
    // [1] = uma função para atualizar esse estado
    const [count, setCount] = useState(0)

    // Função que será chamada quando clicar no botão
    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            color: 'white',
            display: 'inline-block'
        }}>
            <p style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                color: '#9ca3af'
            }}>
                Contador
            </p>
            <p style={{
                margin: '0 0 16px 0',
                fontSize: '32px',
                fontWeight: 'bold'
            }}>
                {count}
            </p>
            <button
                onClick={handleClick}
                style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                }}
            >
                Incrementar
            </button>
        </div>
    )
}
