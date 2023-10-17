import FormComponent from "../src/components/FormComponent";
import SingleFormComponent from "../src/components/SingleFormComponent";
import UCDataTable from "../src/components/UCDataTable"; // Importe o componente UCDataTable
import React, { useState } from "react";

export default function DataTable() {
  const [gridData, setGridData] = useState([]);

  const handleDelete = (id) => {
    const newData = gridData.filter((row) => row.id !== id);
    setGridData(newData);
  };

  const handleAdd = (tipoUC, descricaoUC) => {
    const id = gridData.length + 1;

    const novoRegistro = {
      id: id,
      tipo: tipoUC,
      descricao: descricaoUC,
    };

    setGridData((prevData) => [...prevData, novoRegistro]);
  };

  const handleGenerate = (
    tipoUC,
    descricaoUC,
    numeroAndares,
    numeroInicial,
    numeroFinal,
  ) => {
    function gerarRegistros(
      tipoUC,
      descricaoUC,
      numeroAndares,
      numeroInicial,
      numeroFinal,
    ) {
      const registros = [];
      const numDigitos = String(numeroInicial).length;
      let id = gridData.length + 1; // Inicializar um ID para cada registro

      for (let andar = 1; andar <= numeroAndares; andar++) {
        for (
          let ucOffset = 0;
          ucOffset < numeroFinal - numeroInicial + 1;
          ucOffset++
        ) {
          let uc = Number(numeroInicial) + ucOffset;
          if (numDigitos < 3) {
            uc += (andar - 1) * 10;
          } else {
            uc += (andar - 1) * 100;
          }
          registros.push({
            id: id++, // Use e atualize o ID
            tipo: tipoUC,
            descricao: descricaoUC,
            complemento: String(uc).padStart(numDigitos, "0"),
          });
        }
      }
      return registros;
    }

    const listaDeUC = gerarRegistros(
      tipoUC,
      descricaoUC,
      numeroAndares,
      numeroInicial,
      numeroFinal,
    );
    setGridData((prevData) => [...prevData, ...listaDeUC]);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <SingleFormComponent onAdd={handleAdd} />
        <FormComponent onGenerate={handleGenerate} />
      </div>
      <UCDataTable data={gridData} onDelete={handleDelete} />
    </div>
  );
}
