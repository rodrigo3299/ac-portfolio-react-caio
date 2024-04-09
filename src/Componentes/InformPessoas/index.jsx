function InformPessoas({ name, email, phone, text }) {
  return (
      <div className="personal-info">
        <h2>Informações Pessoais</h2>
        <p>Sobre mim : {name}</p>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
        <p>Habilidades: {text}</p>
       
      </div>
  );
}

export default InformPessoas;
