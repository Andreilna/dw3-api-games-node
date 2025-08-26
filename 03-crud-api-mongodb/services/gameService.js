import Game from "../models/Games.js";

// O service será responsavel por conter os métodos de manipulação do banco

class gameService {
  // Buscando os registros do banco
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();