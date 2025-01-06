import React, { useState } from "react";
import { meuCarro } from "../Constants/index.jsx"; // Array de carros
import { CarIcons } from "../Constants/index.jsx"; // Ícones

const CarList = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Carros disponíveis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meuCarro.map((carro) => (
            <div key={carro.id} className="h-96 w-96 [perspective:1000px] mx-auto">
              <div
                className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
                  flippedCards[carro.id] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Parte da Frente */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-xl font-bold mb-2">{carro.modelo}</h2>
                    <img
                      src={carro.img}
                      alt={carro.modelo}
                      className="h-3/5 w-full object-contain mb-2"
                    />
                    <button
                      onClick={() => handleFlip(carro.id)}
                      className="py-2 px-4 mt-2 bg-black text-white rounded-md hover:bg-yellow-500 hover:text-black transition duration-200"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                {/* Parte de Trás */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-white px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg mb-6">
                      {carro.modelo} - {carro.fabricante}
                    </h2>
                    <div className="flex flex-row gap-2">
                      {/* Coluna Esquerda */}
                      <div className="flex flex-col gap-2">
                        <InfoItem icon={CarIcons.portas} text={`${carro.portas} Portas`} />
                        <InfoItem icon={CarIcons.Vidro} text={carro.vidroEletrico} />
                        <InfoItem icon={CarIcons.Airbag} text={carro.airbag} />
                        <InfoItem icon={CarIcons.Abs} text={carro.abs} />
                      </div>

                      {/* Coluna Direita */}
                      <div className="flex flex-col gap-2">
                        <InfoItem icon={CarIcons.ArCondicionado} text={carro.arcondicionado} />
                        <InfoItem icon={CarIcons.Pessoa} text={carro.passageiros} />
                        <InfoItem icon={CarIcons.Direcao} text={carro.direcao} />
                        <InfoItem icon={CarIcons.PortaMalas} text={carro.portaMalas} />
                      </div>
                    </div>
                    <button
                      onClick={() => handleFlip(carro.id)}
                      className="py-2 px-4 mt-5 bg-white text-black rounded-md hover:bg-yellow-500 transition duration-200"
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, text }) => (
  <div className="flex flex-row p-2 bg-slate-400 rounded-md items-center gap-2 w-36 h-12">
    <img src={icon} alt="icon" className="w-5" />
    <p>{text}</p>
  </div>
);

export default CarList;
