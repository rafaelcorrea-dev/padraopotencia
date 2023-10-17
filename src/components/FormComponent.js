// FormComponent.jsx
import React, { useState } from "react";
import styles from "../../styles/components/FormComponent.module.scss";

function FormComponent({ onGenerate }) {
  const [tipoUC, setTipoUC] = useState("");
  const [descricaoUC, setDescricaoUC] = useState("");
  const [numeroAndares, setNumeroAndares] = useState("");
  const [numeroInicial, setNumeroInicial] = useState("");
  const [numeroFinal, setNumeroFinal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(
      tipoUC,
      descricaoUC,
      Number(numeroAndares),
      numeroInicial,
      numeroFinal,
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {/* <div>
        <label>
          Descrição:
          <input
            value={descricaoUC}
            onChange={(e) => setDescricaoUC(e.target.value)}
          />
        </label>
      </div> */}
      <div>
        <label>
          Descrição
          <select
            value={descricaoUC}
            onChange={(e) => setDescricaoUC(e.target.value)}
          >
            <option value="Apto">Apto</option>
            <option value="Condomínio">Condomínio</option>
            <option value="Sala Com.">Sala Com.</option>
            <option value="Casa">Casa</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Tipo de UC:
          <input value={tipoUC} onChange={(e) => setTipoUC(e.target.value)} />
        </label>
      </div>
      <label>
        Número de andares:
        <input
          value={numeroAndares}
          onChange={(e) => setNumeroAndares(e.target.value)}
        />
      </label>
      <label>
        Número inicial:
        <input
          value={numeroInicial}
          onChange={(e) => setNumeroInicial(e.target.value)}
        />
      </label>
      <label>
        Número final:
        <input
          value={numeroFinal}
          onChange={(e) => setNumeroFinal(e.target.value)}
        />
      </label>
      <button type="submit">Gerar Registros</button>
    </form>
  );
}

export default FormComponent;
