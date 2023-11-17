// SingleFormComponent.jsx
import React, { useState } from "react";
import styles from "styles/components/FormComponent.module.scss";

function SingleFormComponent({ onAdd }) {
  const [tipoUC, setTipoUC] = useState("");
  const [descricaoUC, setDescricaoUC] = useState("");
  const [carga, setCargaUC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(tipoUC, descricaoUC);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <label>
          Descrição:
          <input
            value={descricaoUC}
            onChange={(e) => setDescricaoUC(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tipo de UC:
          <select value={tipoUC} onChange={(e) => setTipoUC(e.target.value)}>
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Rural">Rural</option>
          </select>
        </label>
      </div>
      <button type="submit">Adicionar UC</button>
    </form>
  );
}

export default SingleFormComponent;
