import { useState } from "react";
import styles from "styles/components/FormComponent.module.scss";
import { descricoesUC, tiposUC } from "src/components/constants";
import SelectComponent from "src/components/SelectComponent";
import InputComponent from "src/components/InputComponent";

function SingleFormComponent({ onAdd }) {
  const [descricaoUC, setDescricaoUC] = useState(descricoesUC[0]);
  const [complementoUC, setComplementoUC] = useState("");
  const [tipoUC, setTipoUC] = useState(tiposUC[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(descricaoUC, complementoUC, tipoUC);
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
          Complemento:
          <InputComponent
            value={complementoUC}
            onChange={(e) => setComplementoUC(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tipo de UC:
          <SelectComponent
            value={tipoUC}
            onChange={(e) => setTipoUC(e.target.value)}
            options={tiposUC}
          />
        </label>
      </div>
      <button type="submit">Adicionar UC</button>
    </form>
  );
}

export default SingleFormComponent;
