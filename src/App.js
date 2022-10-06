import Counter from './components/Counter/Counter';
import Effect from './components/Effect/Effect';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
    <button onClick={() => setShow(!show)}>Show/Hide</button> 
    {/*<Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <Counter render={<Title title='Contar Manzanas' text='verdes'/>}
      <Title title='Contar manzanas' text='rojas' />
      <ItemListContainer greeting={'hola desde itemListContainer'}
      </Counter>

    <Counter initial={0} stock={10} onAdd={handleOnAdd}/> */}
      {show ? <Effect /> : null}
      
      </div>
  );
}

 export default App;




