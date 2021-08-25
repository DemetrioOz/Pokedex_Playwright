const selectors = {
  inputPesquisa: "input[id='searchInput']",
  BtnPesquisar: "text=Pesquisar",
  CardPokemon: "ul[class='results']>li",
  TituloPokemon: "div[class='pokedex-pokemon-pagination-title']>div",
  ImagemPokemon: "(//div[@class='profile-images']/img)[1]",
  TypePokemon:
    "(//div[@class='pokedex-pokemon-attributes active']/div/ul/li/a)[2]",
};

export default selectors;
