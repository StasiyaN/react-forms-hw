import { useRef } from 'react'

function RenderCounter() {
    const renderCount = useRef(0)
    renderCount.current += 1

    return <p>Количество рендеров: {renderCount.current}</p>
}

export default RenderCounter