// components/CustomCounter.jsx

'use client'

import { useState } from 'react'

export default function CustomCounter({ label, initialValue, step, color }) {
    // Estado inicializado com o valor passado via props
    const [count, setCount] = useState(initialValue || 0)

    function increment() {
        setCount(count + (step || 1))
    }

    function decrement() {
        setCount(count - (step || 1))
    }

    function reset() {
        setCount(initialValue || 0)
    }

    return (
        <div style ={{
            padding: '20px',
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            color: 'white',
            minWidth: '200px'
        }}>
            <p style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                color: '#9ca3af'
            }}>
                {label || 'Contador'}
            </p>
            <p style={{
                margin: '0 0 16px 0',
                fontSize: '48px',
                fontWeight: 'bold',
                color: color || '#3b82f6',
                textAlign: 'center'
            }}>
                {count}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={decrement} style={buttonStyle}>
                    -
                </button>
                <button onClick={reset} style={buttonStyle}>
                    {'<-'}
                </button>
                <button onClick={increment} style={buttonStyle}>
                    +
                </button>
            </div>
        </div>
    )
}

// Estilo compartilhado para os botões
const buttonStyle = {
    flex: 1,
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#374151',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
}
