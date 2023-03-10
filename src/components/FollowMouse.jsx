import { useState, useEffect } from 'react'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('effect', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Siempre desomontar el componenete o desuscribirse
    // --> cuando cambia la dependencia, antes de ejecutar el efecto de nuevo
    // --> cuando el componente se desomanta
    return () => {
      console.log('clean up')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  const activatePointer = () => {
    setEnabled(!enabled)
  }
  return (
    <>
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
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={activatePointer}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>

    </>
  )
}
