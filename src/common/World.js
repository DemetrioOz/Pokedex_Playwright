class world {
  constructor() {
    this.liga = [];
  }

  setLiga(pokemon) {
    this.liga.push(pokemon);
  }

  getLiga() {
    return this.liga;
  }
}

export default world;
