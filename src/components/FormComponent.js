import React, { useState } from "react";
import styles from "styles/components/FormComponent.module.scss";
import InputComponent from "src/components/InputComponent";
import SelectComponent from "src/components/SelectComponent";
import { tiposUC, descricoesUC } from "src/components/constants";

function FormComponent({ onGenerate }) {
  const [tipoUC, setTipoUC] = useState(tiposUC[0]);
  const [descricaoUC, setDescricaoUC] = useState(descricoesUC[0]);
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
      <div>
        <label>
          Descrição:
          <SelectComponent
            value={descricaoUC}
            onChange={(e) => setDescricaoUC(e.target.value)}
            options={descricoesUC}
          />
        </label>
      </div>
      <div>
        <label>
          Tipo de UC:
          <SelectComponent
            value={tipoUC}
            onChange={(e) => setTipoUC(e.target.valeu)}
            options={tiposUC}
          />
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
