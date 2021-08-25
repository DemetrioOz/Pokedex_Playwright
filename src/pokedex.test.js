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
  name: "",
  avatar: "",
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
    world.setLiga(pokemon);
  });
  it("Pokemon 2", async () => {
    world.setLiga(pokemon);
  });
  it("Pokemon 3", async () => {
    world.setLiga(pokemon);
  });
  it("Pokemon 4", async () => {
    world.setLiga(pokemon);
  });
  it("Pokemon 5", async () => {
    world.setLiga(pokemon);
  });
  it("Pokemon 6", async () => {
    world.setLiga(pokemon);
  });
});
