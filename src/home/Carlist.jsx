import React from "react";
import { meuCarro } from "../home/Constants/index"; // Importa o array de objetos

const CarList = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Lista de Carros</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {meuCarro.map((carro) => (
            <div
              key={carro.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={carro.img}
                alt={carro.modelo}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{carro.modelo}</h2>
              <p className="text-sm text-gray-600">{carro.fabricante}</p>
              <ul className="text-sm mt-4 space-y-1">
                <li><strong>Portas:</strong> {carro.portas}</li>
                <li><strong>Ar Condicionado:</strong> {carro.arcondicionado}</li>
                <li><strong>Vidro Elétrico:</strong> {carro.vidroEletrico}</li>
                <li><strong>Airbag:</strong> {carro.airbag}</li>
                <li><strong>ABS:</strong> {carro.abs}</li>
                <li><strong>Passageiros:</strong> {carro.passageiros}</li>
                <li><strong>Direção:</strong> {carro.direcao}</li>
                <li><strong>Porta-malas:</strong> {carro.portaMalas}</li>
              </ul>
              <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Selecionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;

