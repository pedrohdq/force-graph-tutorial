// components/SimpleButton.jsx

export default function SimpleButton({ text, color }) {
    return (
        <button style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: color || '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
        }}>
            {text || 'Clique aqui'}
        </button>
    )
}
