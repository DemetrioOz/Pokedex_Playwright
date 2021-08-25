import selectors from "./selectors";

export async function pesquisa(page, name) {
  try {
    await page.waitForLoadState();
    await page.click("text=Aceitar tudo");
    await page.waitForSelector(selectors.inputPesquisa);
    await page.fill(selectors.inputPesquisa, name);
    await page.press(selectors.inputPesquisa, "Enter");
  } catch (error) {
    throw error;
  }
}

export async function seleciona(page) {
  try {
    await page.waitForTimeout(1000);
    await page.click(selectors.CardPokemon);
  } catch (error) {
    throw error;
  }
}

export async function puxaTitulo(page) {
  try {
    await page.waitForLoadState();
    return await page.title();
  } catch (error) {
    throw error;
  }
}

export async function puxaDados(page) {
  try {
    await page.waitForTimeout(1000);
    let dados = await page.textContent(selectors.TituloPokemon);

    let dadosSplit = dados.trim().replace("\n", "").replace(" ", "").split(" ");

    let name = dadosSplit[0];
    let id = dadosSplit[dadosSplit.length - 1];

    let type = await page.textContent(selectors.TypePokemon);

    let image = await page.getAttribute(selectors.ImagemPokemon, "src");

    return { name, id, type, image };
  } catch (error) {
    throw error;
  }
}
