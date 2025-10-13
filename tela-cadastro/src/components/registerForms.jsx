import React, { useState } from "react";

export default function RegisterForms() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const cpfExists = users.some((user) => user.cpf === cpf);
    if (cpfExists) {
      alert("CPF já cadastrado!");
      return;
    }

    const newUser = { nome, cpf, telefone, senha };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuário cadastrado com sucesso!");
    setNome("");
    setCpf("");
    setTelefone("");
    setSenha("");
  };

  return (
    <div className="register-forms">
      <h2>Cadastro de Usuário</h2>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}
