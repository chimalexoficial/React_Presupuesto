import { useState } from 'react'
import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal';
import { generarId } from './helpers';
import ListadoGastos from './components/ListadoGastos';
import { formatearFecha } from './helpers';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 700);
  }

  const guardarGasto = (gasto) => {
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setModal(false);
  }



  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto} />


      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos} />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleNuevoGasto} />
          </div>
        </>)}

      {modal ? <Modal setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        generarId={generarId} /> : null}


    </div>

  )
}

export default App
