
import './App.css';
import logo from "./imagenes/logo1.png"
import img1 from "./imagenes/img_1.jpg"
import img2 from './imagenes/img_2.png'
import img3 from './imagenes/img_3.jpg'
import img4 from './imagenes/img_4.webp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='containerLogo'>
          <img src={logo} className='Logo-header'/>
        </div>
        <p className='header-titulo'>BI SAPIENS</p> 
      </header>
      <main>
        <div className='presentacion'>
          <p className='text'><span className='negrita'>Contratar nuestros servicios de BI</span> es la mejor inversión para tu empresa, 
          ya que permite transformar datos en información útil y tomar decisiones basadas en hechos.</p>
          <p className='text'>
           <span className='negrita'>Business Intelligence (BI)</span>, es el proceso de recopilar, analizar y transformar datos en información útil, que resultara de mucho beneficio para la toma de decisiones estratégicas. 
          El BI hace posible el rapido acceso y la fácil lectura de los datos más relevantes, identificar patrones y tendencias como los tiempos de trabajo, gastos, rendimientos y resultados. 
          De esta forma podras conocer mejor el funcionamiento de tu negocio.
          </p>
        </div>
        <div className='art-1 art'>
          <img src={img2} className='art-1-img'/>
        </div>
        <div className='servicios'>
          <p className='segundo-titulo'>NUESTROS SERVICIOS</p>
          <div className=''>

          </div>
        </div>
      </main>
    </div>
  );
}

const style = StyleSheet.Cre

export default App;
