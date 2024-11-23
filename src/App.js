
import './App.css';
import logo from "./imagenes/logo1.png"
import pbi_services from "./imagenes/pbi_services.png"
import pbi_logo from "./imagenes/pbi.png"
import img1 from "./imagenes/img_1.jpg"
import img2 from './imagenes/img_2.png'
import img3 from './imagenes/img_3.jpg'
import img4 from './imagenes/body_bg.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='head'>
          <div className='containerLogo'>
              <img src={logo} className='Logo-header'/>
            </div>
            <p className='header-titulo'>BI SAPIENS</p> 
        </div>
        <p className='sub-titulo'>Somos una consultora que ofrece servicios de Buisness Intelligence</p>
      </header>
      <main>
        <div className='presentacion'>
          <p className='text'> <span className='negrita'>Business Intelligence (BI)</span>, es el proceso de recopilar, analizar y transformar datos en información útil, que resultara de mucho beneficio para la toma de decisiones estratégicas. 
            El BI hace posible el rapido acceso y la fácil lectura de los datos más relevantes, identificar patrones y tendencias como los tiempos de trabajo, gastos, rendimientos y resultados. 
            De esta forma podras conocer mejor el funcionamiento de tu negocio.
          </p>
          <div className='art-1 art'>
            <img src={img2} className='art-1-img'/>
          </div>       
        </div>
        <div className='servicios'>
          <p className='text'>Contratar nuestros servicios de BI es la mejor inversión para tu empresa, ya que permite transformar datos en información útil y tomar decisiones basadas en hechos.
            nuestros servicios incluyen:
          </p>
          <ul>
            <li>Analisis de requerimientos, definición de los temas de negocio</li>
            <li>Integración de Power BI con las fuentes de datos, y ejecución de queries</li>
            <li>Analisis de los datos, y explotación de los mismos con relación al tema de negocio</li>
            <li>Publicación y dar soporte a los reportes en la plataforma de Power BI Services</li>
            <li>Gestión de usuarios y privilegios</li>
          </ul>
        </div>        

       
        <div className='tools'>
          <p className='tools-titulo'>NUESTRAS HERRAMIENTAS</p>
          <div className='container-articulos'>
            <div className='tools-art pbi'>
              <div className='tools-art-header'>
                <img src={pbi_logo} className='tools-art-logo'/>
                <p className='tools-art-titulo'>POWER BI</p>
              </div>
              <div className='tools-art-desc'>
                <p className='item'>Análisis y evaluación de Necesidades para la integración de Power BI.</p>
                <p className='item'>Diseño y desarrollo de informes y Paneles de Control personalizados con visualizaciones interactivas y dinámicas.</p>
                <p className='item'>Integración de datos y fuentes de Datos locales y en la nube.</p>
              </div>
            </div>
            <div className='tools-art pbi_services'>
              <div className='tools-art-header'>
                <img src={pbi_services} className='tools-art-logo'/>
                <p className='tools-art-titulo'>POWER BI SERVICES</p>
              </div>
              <div className='tools-art-desc'>
                <p>lorem</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}


export default App;
