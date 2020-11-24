//Creamos la función Planeta que recibe por parametros los props (props es un objeto que contiene los atributos que le hemos dado a Planeta en la función App)

const Planeta = (props) => {
  //La función Planeta devuelve el código JSX con el valor del objeto props como contenido
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>{props.color}</p>
      <p>{props.temperatura}</p>
      <img src={props.imagen} alt="" />
    </div>
  );
};

//Exportamos la función Planeta
export default Planeta;
