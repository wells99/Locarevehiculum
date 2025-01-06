import React, { useState, useEffect } from "react";
import Dateicon from "../assets/date.svg"

const LocalDate = () => {
  const [startDate, setStartDate] = useState(""); // Armazena a data inicial
  const [endDate, setEndDate] = useState(""); // Armazena a data final
  const [selectedLocal, setSelectedLocal] = useState(""); // Estado para armazenar o valor selecionado
  useEffect(() => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + 1); // Define o limite máximo de 1 ano

    // Formata as datas para o padrão ISO (yyyy-MM-ddTHH:mm)
    const formatDate = (date) =>
      date.toISOString().slice(0, 16); // yyyy-MM-ddTHH:mm

    const initialDate = formatDate(today);
    const suggestedEndDate = formatDate(new Date(today.getTime() + 24 * 60 * 60 * 1000)); // +1 dia

    setStartDate(initialDate);
    setEndDate(suggestedEndDate);

    // Define os limites no input diretamente pelo DOM
    const initialInput = document.getElementById("Initial");
    const endInput = document.getElementById("end");
    if (initialInput && endInput) {
      initialInput.min = initialDate;
      initialInput.max = formatDate(maxDate);
      endInput.min = initialDate;
      endInput.max = formatDate(maxDate);
    }
  }, []);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    
    
    setStartDate(newStartDate);

    // Ajusta a data final para ser pelo menos 1 dia depois
    const newEndDate = new Date(new Date(newStartDate).getTime() + 24 * 60 * 60 * 1000);
    setEndDate(newEndDate.toISOString().slice(0, 16));
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearch = () => {
    console.log("Local:", document.getElementById("Local").value);
    console.log("Data Inicial:", startDate);
    console.log("Data Final:", endDate);
    // Aqui você pode enviar essas informações para o backend
  };

  return (
    <div
      className="flex flex-col lg:items-end items-center justify-center lg:flex-row  
    lg:justify-center p-5 gap-2 min-w-[230px] 
    bg-gray-950 text-center
    py-8 lg:py-16 text-white"
    >
      <div className="flex flex-col">
        <label htmlFor="Local">Onde gostaria de pegar o veículo?</label>
        <select
          value={selectedLocal}
          name="Local"
          id="Local"
          className="border rounded-lg h-10 outline-none text-gray-900 mt-2"
          onChange={(e) => setSelectedLocal(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Sul">Digital College Sul</option>
          <option value="Aldeota">Digital College Aldeota</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="Initial" className="ml-2">
          Data de Início
        </label>
        <input
          type="datetime-local"
          name="Initial"
          id="Initial"
          className="border ml-2 rounded-lg h-10 text-pretoProjeto outline-none mt-2"
          value={startDate}
          onChange={handleStartDateChange}
        />
        
      </div>

      <div className="flex flex-col">
        <label htmlFor="end" className="ml-2">
          Data de Entrega
        </label>
        <input
          type="datetime-local"
          name="end"
          id="end"
          className="border ml-2 rounded-lg text-pretoProjeto h-10 outline-none mt-2"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>

      <button
        type="button"
        className="mb-2 mt-6 lg:mt-0"
        onClick={handleSearch}
      >
        <a
          href="#"
          className="bg-gradient-to-b from-orange-500 to-orange-800
                   py-2  px-3 rounded-md text-white font-semibold 
                 border-2 border-none hover:opacity-80  transition duration-200 "
        >
          Buscar
        </a>
      </button>
    </div>
  );
};

export default LocalDate;
