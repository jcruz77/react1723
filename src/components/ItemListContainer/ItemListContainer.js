import { useEffect } from 'react'
import { getProducts } from '../../asyncMock'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProdcuts().then(res => {
            console.log(res)
            setProducts(res)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    
    const productosTransformados = products.map(product => <li>{product.name}</li>)

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ul>
                { productosTransformados }
            </ul>
        </div>
    
    )
}

export default ItemListContainer