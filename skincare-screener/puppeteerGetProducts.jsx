// import puppeteer from "puppeteer";

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 100, // slow down by 250ms
  });

  const page = await browser.newPage();

  await page.goto("https://incidecoder.com/");

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box
  const f = await page.$("#query");
  await f.type("canmake uv gel");
  await page.keyboard.press("Enter");

  // Wait and click on first result
  const searchResultSelector = ".paddingbl";
  await page.waitForSelector(searchResultSelector);

  const itemsList = await page.$(".paddingbl");

  const urls = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".simpletextlistitem"),
      (element) => element.href
    )
  );

  const titles = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".simpletextlistitem"),
      (element) => element.textContent
    )
  );

  console.log("urls", urls);
  console.log("title", titles);

  const resultsArray = [];

  for (let i = 0, total_urls = urls.length; i < total_urls; i++) {
    if (urls[i] == null) {
      continue;
    }

    const resultsObj = { title: titles[i], url: urls[i] };

    await page.goto(urls[i]);

    // Get ingredients...
    let ingredientsList = await page.$eval(
      "#ingredlist-short",
      (text) => text.textContent
    );

    // Parses string of ingredients into an array format
    const ingredientsListArray = ingredientsList.split(",");

    // Removes white space from each ingredient
    for (item in ingredientsListArray) {
      ingredientsListArray[item] = ingredientsListArray[item].trim();
    }

    console.log("ingredientsListArray", ingredientsListArray);

    resultsObj["ingredients"] = ingredientsListArray;

    // Get image src...
    const imageSrc = await page.$eval(
      "#product-main-image img",
      (img) => img.src
    );

    console.log("img", imageSrc);
    resultsObj["product_img"] = imageSrc;

    // Get highlights...
    const highlightsList = await page.$eval(
      ".hashtags",
      (text) => text.textContent
    );

    // Parses string of highlights into an array format
    const highlightsListArray = highlightsList.split("#");

    // Strip white space, fix formatting:
    // formattedHighlightsListArray [ 'alcohol-free', 'fragrance & essentialoil-free' ]
    const formattedHighlightsListArray = highlightsListArray
      .filter((item) => item != "")
      .map((filteredItem) => {
        return filteredItem.trim();
      });

    console.log("filtered", formattedHighlightsListArray);
    resultsObj["highlights"] = formattedHighlightsListArray;

    console.log("resultsObj", resultsObj);

    resultsArray.push(resultsObj);
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }

  // await page.evaluate(() => console.log(`url is ${location.href}`));

  // await page.click(searchResultSelector);
  // await page.goBack();

  // const itemsList = await page.$(".paddingbl");
  // print("itemsList", itemsList);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector("text/Search results for ");
  // const fullTitle = await textSelector.evaluate((el) => el.textContent);

  // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);
  console.log("resultsArray", resultsArray);
  await browser.close();
})();
