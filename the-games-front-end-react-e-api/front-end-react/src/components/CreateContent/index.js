import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (title && platform && genre && rating && year && price !== "") {
      const game = {
        title: title,
        year: year,
        price: price,
        descriptions: {
          platform: platform,
          genre: genre,
          rating: rating,
        },
      };

      try {
        const response = await axios.post("http://localhost:4000/games", game);
        if (response.status === 201) {
          alert("Jogo cadastrado com sucesso!");
          router.push("/"); // opcional: redireciona pra home
        } else {
          alert("Erro ao cadastrar o jogo.");
        }
      } catch (error) {
        console.error(error);
        alert("Erro ao conectar ao servidor.");
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>

      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChange={(e) => setPlatform(e.target.value)}
          value={platform}
        />

        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o gênero do jogo"
          className="inputPrimary"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />

        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira a classificação do jogo"
          className="inputPrimary"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />

        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />

        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>

      {/* Debug visual opcional:
      <div style={{ color: "white", marginTop: "20px" }}>
        {title} <br />
        {platform} <br />
        {genre} <br />
        {rating} <br />
        {year} <br />
        {price}
      </div> */}
    </div>
  );
};

export default CreateContent;