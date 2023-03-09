import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('Hola')
  }, [enabled])

  const activatePointer = () => {
    setEnabled(!enabled)
  }

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#097',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px,0px)'
      }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={activatePointer}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
