// app/page.js

import SimpleButton from '@/components/SimpleButton'
import Counter from '@/components/Counter'
import CustomCounter from '@/components/CustomCounter'

export default function Home() {
    return (
        <main style={{
            padding: '40px',
            fontFamily: 'system-ui',
            display: 'flex',
            flexDirection: 'column',
            gaps: '20px'
        }}>
            <h1>Tutorial: Force Graph com D3.js</h1>
            <p>Vamos contruir um grafo de força interativo!</p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
                <SimpleButton text="Confirmar" color="#10b981" />
                <SimpleButton text="Cancelar" color="#ef4444"/>
                <SimpleButton text="Resetar" color="#6b7280" />
            </div>
           
            <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
            }}>
                <CustomCounter
                    label="Pontos"
                    initialValue={0}
                    step={10}
                    color="#10b981"
                />
                <CustomCounter
                    label="Vidas"
                    initialValue={3}
                    step={1}
                    color="#ef4444"
                />
                <CustomCounter
                    label="Moedas"
                    initialValue={100}
                    step={25}
                    color="#f59e0b"
                />
            </div>
        </main>
    )
}
