const Pet = ({name,breed,age}) => {
  return (
    <>
      <div>
        <p>Informações do pet:</p>
        <ul>
          <li>nome: {name}</li>
          <li>Raça: {breed}</li>
          <li>Idade: {age} anos</li>
        </ul>
      </div>
    </>
  );
};
export default Pet;
