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
  const [telefone, setTelefone] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(event.target.value);
    setTelefone(formatted);
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !telefone.trim()) {
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
          telefone,
          confirmado: true,
          dataConfirmacao: new Date().toISOString(),
        });

        const whatsAppMessage = `Olá! Gostaria de confirmar minha presença no casamento do Marcos e da Lígia. Meu nome é ${encodeURIComponent(
          nome
        )}.`;
        const whatsAppLink = `https://wa.me/5511932773883?text=${whatsAppMessage}`;

        window.open(whatsAppLink, "_blank");

        setMensagem("Presença confirmada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao confirmar presença:", error);
      setMensagem("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div
      className="flex flex-col items-center text-center bg-main-color py-8 px-36 max-md:px-14 rounded-2xl text-white"
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
        onChange={(e) => setNome(e.target.value.toUpperCase())}
        className="p-2 rounded-md border-2 border-sec-green font-textFont text-black w-full"
      />

      <label htmlFor="chamadoPor" className="font-textFont text-2xl mt-4">
        Insira seu telefone de contato
      </label>
      <input
        type="tel"
        name="telefone"
        value={telefone}
        placeholder="(XX) XXXXX-XXXX"
        maxLength={15}
        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
        onChange={handleChange}
        className="p-2 rounded-md border-2 font-textFont text-xl border-sec-green text-black w-full"
      />

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
            mensagem.includes("erro") || mensagem.includes("campos")
              ? "bg-red-600"
              : "bg-green-600"
          }`}
        >
          {mensagem}
        </p>
      )}
      {mensagem.includes("confirmada") && (
          <a
            href={`https://wa.me/5511932773883?text=Olá! Gostaria de confirmar minha presença no casamento do Marcos e da Lígia. Meu nome é ${nome}.`}
            className="bg-red-500 rounded-lg p-3 font-secTitleFont text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
             Não foi redirecionado? Clique aqui!
          </a>
      )}
    </div>
  );
}
