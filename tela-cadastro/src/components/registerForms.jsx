import React, { useState } from "react";
import "../styles/registerForms.css";

export default function RegisterForms() {
    const [nome, SetNome] = useState("");
    const [cpf, SetCpf] = useState("");
    const [telefone, SetTelefone] = useState("");
    const [senha, SetSenha] = useState("");

    // Função para registrar o usuário
    const HandleRegister = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const cpfExists = users.some(user => user.cpf === cpf);
        if (cpfExists) {
            alert("CPF já cadastrado!");
            return;
        }

        const newUser = { nome, cpf, telefone, senha };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuário cadastrado com sucesso!");

        // Limpar os campos após o cadastro
        setNome("");
        setCpf("");
        setTelefone("");
        setSenha("");


    };

    return (
        <div className="register-forms">
            <h2>Cadastro de Usuário</h2>

            <input type="text" placeholder="nome" value={nome} onChange={(e) => SetNome(e.target.value)} />

            <input type="text" placeholder="cpf" value={cpf} onChange={(e) => SetCpf(e.target.value)} />

            <input type="text" placeholder="telefone" value={telefone} onChange={(e) => SetTelefone(e.target.value)} />

            <input type="password" placeholder="senha" value={senha} onChange={(e) => SetSenha(e.target.value)} />


            <button onClick={HandleRegister}>Cadastrar</button>
        </div>
    )
}