"use client";
import { useState } from "react";

export default function BuscaConvidados() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const buscarConvidado = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?nome=${encodeURIComponent(nome)}`
      );

      const data = await response.json();

      if (data.encontrado) {
        setMensagem(`Olá, ${data.nome}. Você está na lista!`);
        setMostrarConfirmar(true);
      } else {
        setMensagem("Nome não encontrado na lista.");
        setMostrarConfirmar(false);
      }
    } catch (error) {
      console.error("Erro ao buscar convidado:", error);
      setMensagem("Erro ao buscar convidado.");
      setMostrarConfirmar(false);
    }
  };

  return (
    <>
      <div className="bg-main-color py-8 px-36 max-md:px-14 rounded-2xl text-center flex flex-col items-center">
        <label htmlFor="nome" className="font-textFont text-2xl">
          Digite seu nome completo:
        </label>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 rounded-md bg-none border-2 border-sec-green w-full"
        />
        <button
          onClick={buscarConvidado}
          className="bg-sec-green p-3 my-4 font-secTitleFont font-bold text-2xl rounded-lg text-backgound-color hover:opacity-65"
        >
          Buscar
        </button>
      </div>
      <div>
        <p>{mensagem}</p>
        {mostrarConfirmar && <button>Confirmar presença</button>}
      </div>
    </>
  );
}
