import gameService from "../services/gameService.js";

const getAllgames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Código 200 (OK) - Requisição feita com sucesso
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. " });
  }
};

export default { getAllgames };