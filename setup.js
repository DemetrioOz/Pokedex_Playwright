const browserConfig = {
  headless: false,
};

export const browserSetup = async (
  browserToLaunch,
  options = browserConfig
) => {
  const browser = await browserToLaunch.launch(options);
  return browser;
};

export const browserNewPage = async (browser, url, timeout = 50000) => {
  const page = await browser.newPage();
  page.setDefaultTimeout(timeout);

  await page.goto(url);
  return page;
};
