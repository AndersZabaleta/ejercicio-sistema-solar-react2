import sistemaSolar from "./sistemaSolar";
import Planeta from "./planeta";
import { useState } from "react";

function App() {
  const [sistemaEstado, setSistemaEstado] = useState(sistemaSolar);

  const borrar = () => {
    const array = [];
    for (let i = 0; i < sistemaEstado.length - 1; i++) {
      array.push(sistemaEstado[i]);
    }
    setSistemaEstado(array);
  };

  const mostrarTodos = () => {
    setSistemaEstado(sistemaSolar);
  };

  const sistema = sistemaEstado.map((planeta) => {
    return (
      <Planeta
        nombre={planeta.nombre}
        color={planeta.color}
        temperatura={planeta.temperatura}
        imagen={planeta.imagen}
      />
    );
  });

  return (
    <div>
      {sistema}
      <button onClick={borrar}>Borrar Último</button>
      <button onClick={mostrarTodos}>Mostrar Todos</button>
    </div>
  );
}

export default App;
