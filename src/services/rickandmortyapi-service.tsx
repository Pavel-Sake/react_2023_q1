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

  async getPeopleByName(name: string) {
    return await this.getResource(`/character/?name=${name}`);
  }
  async getLocationById(id: string) {
    return await this.getResource(`/location/${id}`);
  }
}

export { RickandmortyapiService };
