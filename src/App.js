//importamos el array sistemaSolar
import sistemaSolar from "./sistemaSolar";
//importamos el componente Planeta
import Planeta from "./planeta";
function App() {
  //Creamos la constante sistema y la igualamos a lo que devuelve la funcion .map()
  //Por parametros a la funcion .map le pasamos un parámetro que será la puerta de acceso a cada elemento del array sistemaSolar
  const sistema = sistemaSolar.map((planeta) => {
    //devolvemos El componente planeta con sus atributos
    return (
      <Planeta
        nombre={planeta.nombre}
        color={planeta.color}
        temperatura={planeta.temperatura}
        imagen={planeta.imagen}
      />
    );
  });

  //La función App devuelve la constnate sistema, que tiene el valor que devuelven los diferentes componentenes Planeta
  return sistema;
}

export default App;
