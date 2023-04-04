//const url = "https://rickandmortyapi.com/api/character/?name=rick";
class RickandmortyapiService {
  _apiBase = "https://rickandmortyapi.com/api";
  async getResource(url: string) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  }

  async getAllCharacter(url: string) {
    const response = await this.getResource(`/character/`);

    return response.results;
  }

  async getPeopleByName(name: string) {
    return await this.getResource(`/character/?name=${name}`);
  }
}

export { RickandmortyapiService };
