import { useState } from "react";

const Planeta = (props) => {
  const [planeta, setPlaneta] = useState(props);

  const borrarPlaneta = () => {
    setPlaneta("");
  };

  const mostrarPlaneta = () => {
    setPlaneta(props);
  };
  return (
    <div>
      <h1>{planeta.nombre}</h1>
      <p>{planeta.temperatura}</p>
      <p>{planeta.color}</p>
      <img src={planeta.imagen} alt="" />
      <button onClick={borrarPlaneta}>Borrar</button>
      <button onClick={mostrarPlaneta}>mostrar</button>
    </div>
  );
};

export default Planeta;
