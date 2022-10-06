import {useState, useEffect} from 'react'

const Effect = () => {
    const [title, setTitle] = useState('Primer titulo')
    const [count, setCount] = useState(0)

    const handleClick = () => console.log('hice click')

    useEffect(() => {
        console.log('agrego event listener')
        const boton = document.getElementById('boton')

        boton.addEventListener('click', handleClick)

        return () => {
            console.log('se va a desmontar el componente')
            console.log('se va a eliminar el event listener')
            boton.removeEventListener('click', handleClick)
        }
    }, [])

    console.log('Se hace render')

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )










}