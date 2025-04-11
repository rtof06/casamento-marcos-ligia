"use client";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../../services/firebaseConfig";
import { useState } from "react";

interface Convidado {
  id: string;
  nome: string;
  telefone: string;
  dataConfirmacao?: string; // Pode ser opcional
}

export default function Convidados() {
  const [convidados, setConvidados] = useState<Convidado[]>([]);
  const [senha, setSenha] = useState("");
  const [autenticado, setAtutenticado] = useState(false);
  const [filtro, setFiltro] = useState("");

  function formatarData(dataString: string | undefined) {
    if (!dataString) return "Não confirmada";
    const data = new Date(dataString);
    return data.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (senha === "1234") {
      setAtutenticado(true);
      const db = getDatabase(app);
      const dbRef = ref(db, "convidados");

      get(dbRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const listaConvidados = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setConvidados(listaConvidados);
          } else {
            console.log("Nenhum dado disponível.");
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar os convidados:", error);
        });
    } else {
      alert("Senha incorreta!");
    }
  }

  const convidadosFiltrados = convidados.filter((convidado) =>
    convidado.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <main className="flex justify-center items-center h-screen">
      <form
        className={
          autenticado
            ? `hidden`
            : `flex flex-col justify-center items-center p-10 gap-2 rounded-2xl bg-main-color`
        }
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="senha"
          className="text-white font-secTitleFont text-2xl"
        >
          Insira a senha para visualizar os convidados:
        </label>
        <input
          type="password"
          id="senha"
          className="text-xl p-2 rounded-md"
          maxLength={4}
          inputMode="numeric"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          type="submit"
          className="font-secTitleFont bg-sec-green p-4 rounded-lg text-white hover:bg-third-green transition-all"
        >
          Mostrar convidados
        </button>
      </form>

      {convidados.length > 0 && (
        <section className="flex flex-col items-center gap-4 mx-5">
          <h1 className="font-titleFont font-bold text-4xl">
            Confirmados: {convidados.length}
          </h1>
          <div className="flex gap-2 justify-center items-center bg-main-color p-4 rounded-lg">
            <label
              htmlFor="buscarConvidado"
              className="font-textFont text-white text-xl"
            >
              Buscar nome:
            </label>
            <input
              type="search"
              className="border p-2 rounded-md font-textFont"
              id="buscarConvidado"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>

          {/* Grid de convidados filtrados */}
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2">
            {convidadosFiltrados.length > 0 ? (
              convidadosFiltrados.map((convidado) => (
                <div
                  key={convidado.id}
                  className="flex flex-col bg-main-color p-4 rounded-lg text-center font-textFont"
                >
                  <p className="text-white font-bold text-xl">
                    {convidado.nome}
                  </p>
                  <p className="text-white text-xl max-md:text-lg">📞 {convidado.telefone}</p>
                  <p className="text-white">
                    ✅ Confirmado em: {formatarData(convidado.dataConfirmacao)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-white">Nenhum convidado encontrado.</p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
