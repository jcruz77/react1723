
const products = [
    {
    id: '1',
    name: 'Cebollon',
    price: 1000,
    img: 'src',
    description: 'Doble hamburguesa, doble cheddar, doble panceta, cebolla caramelizada y ketchup',
    },
    {id: '2', name: 'Achura', price: 1800, description:'Queso azul, cebolla caramelizada, rúcula y mayonesa de berenjena'},
    {id: '3', name: 'Crispy', price: 1500, description:'Sánguche de pechuga de pollo frita, panceta ahumada, lechuga capuchina y tártara'},
]


export const getProdcuts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}