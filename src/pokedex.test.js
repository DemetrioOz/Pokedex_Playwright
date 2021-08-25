import { chromium } from "playwright";

import * as setup from "../setup";

import * as pageActions from "./pages/actions";

import Services from "./app/Service";

import World from "./common/World";
let world = new World();

let browser;
let page;

jest.setTimeout(10 * 20000);

const user = {
  name: "Matheus Dama",
  avatar: "https://avatars.githubusercontent.com/u/55540506?v=4",
};

beforeEach(async () => {
  browser = await setup.browserSetup(chromium);
  page = await setup.browserNewPage(
    browser,
    "https://www.pokemon.com/br/pokedex/"
  );
});

afterEach(async () => {
  await browser.close();
});

afterAll(async () => {
  let liga = world.getLiga();
  let services = new Services();
  await services.createReporter(user, liga);
});

describe("Pokedex", () => {
  it("Pokemon 1", async () => {
    let name = "Flygon";
    await pageActions.pesquisa(page, name);
    await pageActions.seleciona(page);
    // let title = await pageActions.puxaTitulo(page, name);

    // expect(title).toBe(`${name} | Pokédex`);
    let pokemon = await pageActions.puxaDados(page);

    world.setLiga(pokemon);
  });
  it("Pokemon 2", async () => {
    let name = "Mudkip";
    await pageActions.pesquisa(page, name);
    await pageActions.seleciona(page);
    let title = await pageActions.puxaTitulo(page, name);

    expect(title).toBe(`${name} | Pokédex`);
    let pokemon = await pageActions.puxaDados(page);

    world.setLiga(pokemon);
  });
  it("Pokemon 3", async () => {
    let name = "Pikachu";
    await pageActions.pesquisa(page, name);
    await pageActions.seleciona(page);
    let title = await pageActions.puxaTitulo(page, name);

    expect(title).toBe(`${name} | Pokédex`);
    let pokemon = await pageActions.puxaDados(page);

    world.setLiga(pokemon);
  });
  it("Pokemon 4", async () => {
    let name = "Mightyena";
    await pageActions.pesquisa(page, name);
    await pageActions.seleciona(page);
    let title = await pageActions.puxaTitulo(page, name);

    expect(title).toBe(`${name} | Pokédex`);
    let pokemon = await pageActions.puxaDados(page);

    world.setLiga(pokemon);
  });
  it("Pokemon 5", async () => {
    let name = "Walrein";
    await pageActions.pesquisa(page, name);
    await pageActions.seleciona(page);
    let title = await pageActions.puxaTitulo(page, name);

    expect(title).toBe(`${name} | Pokédex`);
    let pokemon = await pageActions.puxaDados(page);

    world.setLiga(pokemon);
  });
  it("Pokemon 6", async () => {
    let name = "Torkoal";
    await pageActions.pesquisa(page, name);
    await pageActions.seleciona(page);
    let title = await pageActions.puxaTitulo(page, name);

    // expect(title).toBe(`${name} | Pokédex`);
    let pokemon = await pageActions.puxaDados(page);

    world.setLiga(pokemon);
  });
});
