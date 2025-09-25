import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Criando a função que irá receber os dados do formulário e enviar para o back-end
  const handleSubmit = (event) => {
    // Evita o comportamento padrão do formulário que é recarregar a página
    event.preventDefault(); 
    // Aqui seria feito o envio dos dados para a API, porém iremos simular com um console.log
    console.log(name, email);
  };

  return (
    <>
      <h1>Formulário de cadastro:</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          // Quando o valor do input mudar, pegue o novo valor (e.tearget.value) e mande atualizar o estado name (setName())
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <br />
      <br />
      {name}
      <br />
      {email}
    </>
  );
};

export default UserForm;
