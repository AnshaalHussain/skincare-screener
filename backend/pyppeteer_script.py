import asyncio
from pyppeteer import launch


def product_search(search_query):

    async def main(prod_search_query):
        # launch chromium browser in the background
        # browser = await launch({"headless": False, "args": ["--start-maximized"]})
        browser = await launch(handleSIGINT=False,
                               handleSIGTERM=False,
                               handleSIGHUP=False)

        # open a new tab in the browser
        page = await browser.newPage()

        # set page viewport to the largest size
        await page.setViewport({"width": 1600, "height": 900})

        # add URL to a new page and then open it
        await page.goto("https://incidecoder.com/")

        f = await page.querySelector("#query")
        await f.type(prod_search_query)
        await page.keyboard.press("Enter")

        # # wait for search results to load
        # await page.waitFor(4000)

        # wait and click on first result
        search_result_selector = ".paddingbl"
        await page.waitForSelector(search_result_selector)

        # get urls
        results_lst = await page.J('.paddingbl')
        urls = await results_lst.JJeval('.simpletextlistitem', '(element => element.map(n => n.href))')

        # get titles
        titles = await results_lst.JJeval('.simpletextlistitem', '(element => element.map(n => n.innerText))')

        results_arr = []

        for i in range(len(urls)):
            if urls[i] == "":
                continue

            await page.goto(urls[i])

            # Get ingredients...
            ingredients = await page.Jeval('#ingredlist-short', '(text) => text.textContent')

            # Parses string of ingredients into an array format
            ingredients_lst = ingredients.split(",")

            # Removes white space from each ingredient
            for i in range(len(ingredients_lst)):
                ingredients_lst[i] = ingredients_lst[i].strip()

            # Get image src...
            image_src = await page.Jeval("#product-main-image img", '(img) => img.src')

            # Get highlights...
            highlights_list = await page.Jeval('.hashtags', '(text) => text.textContent')

            # Parses string of highlights into an array format
            highlights_list_array = highlights_list.split("#")

            # Strip white space, fix formatting:
            # formatted_highlights_list_array [ 'alcohol-free', 'fragrance & essentialoil-free' ]
            formatted_highlights_list_array = []
            for i in range(len(highlights_list_array)):
                if highlights_list_array[i] == "":
                    continue
                highlight_copy = highlights_list_array[i].strip()
                formatted_highlights_list_array.append(highlight_copy)

            # add data to result_obj
            result_obj = {}
            result_obj["title"] = titles[i]
            result_obj["url"] = urls[i]
            result_obj["product_img"] = image_src
            result_obj["ingredients"] = ingredients_lst
            result_obj["highlights"] = formatted_highlights_list_array

            results_arr.append(result_obj)

        # close the browser
        await browser.close()

        return {"data": results_arr}

    return asyncio.new_event_loop().run_until_complete(main(search_query))
