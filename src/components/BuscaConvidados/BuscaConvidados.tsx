"use client";
import { useState } from "react";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
  push,
} from "firebase/database";
import { app } from "../../../services/firebaseConfig";
import Image from "next/image";
import whats from "../../../public/img/whatsapp--v5.png";

export default function BuscaConvidados() {
  const [nome, setNome] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim()) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const db = getDatabase(app);
      const convidadosRef = ref(db, "convidados");

      const consulta = query(
        convidadosRef,
        orderByChild("nome"),
        equalTo(nome)
      );
      const snapshot = await get(consulta);

      if (snapshot.exists()) {
        setMensagem("Você já confirmou sua presença!");
      } else {
        await push(convidadosRef, {
          nome,
          confirmado: true,
          dataConfirmacao: new Date().toISOString(),
        });

        const whatsAppMessage = `Olá! Gostaria de confirmar minha presença no casamento do Marcos e da Lígia. Meu nome é ${encodeURIComponent(
          nome
        )}.`;
        const whatsAppLink = `https://wa.me/5511932773883?text=${whatsAppMessage}`;

        window.location.href = whatsAppLink;

        setMensagem("Presença confirmada com sucesso!");
        setNome("");
      }
    } catch (error) {
      console.error("Erro ao confirmar presença:", error);
      setMensagem("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div
      className="flex flex-col items-center text-center bg-main-color py-8 px-36 max-md:px-14 rounded-2xl"
      onSubmit={handleConfirm}
    >
      <label htmlFor="nome" className="font-textFont text-2xl">
        Digite seu nome completo:
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="p-2 rounded-md border-2 border-sec-green font-textFont w-full active:bg-backgound-color capitalize"
      />
      {/* 
      <label htmlFor="chamadoPor" className="font-textFont text-2xl mt-4">
        Por quem você foi chamado?
      </label>
      <input
        type="text"
        name="chamadoPor"
        value={chamadoPor}
        onChange={(e) => setChamadoPor(e.target.value)}
        className="p-2 rounded-md border-2 border-sec-green w-full"
      /> */}

<button
        onClick={handleConfirm}
        className="flex items-center gap-2 rounded-2xl bg-sec-green p-3 mt-4 font-secTitleFont max-sm:font-semibold text-white hover:opacity-75 transition-all"
      >
        <Image src={whats} alt="Ícone do WhatsApp" className="w-8" />
        Confirmar presença
      </button>

      {mensagem && (
        <p
          className={`m-3 p-3 rounded-lg font-textFont text-white shadow-2xl ${
            mensagem.includes("erro") || mensagem.includes("campos") ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}
