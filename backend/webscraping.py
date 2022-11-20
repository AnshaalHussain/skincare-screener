from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def find_image(driver):
    image_div = driver.find_element_by_id(
        "product-main-image")

    print("IMAGE DIV", image_div)

    src_tag = image_div.find_element(By.TAG_NAME, "img")
    src_image = src_tag.get_attribute('src')

    return src_image


def find_ingredients():
    website = 'https://incidecoder.com/products/canmake-mermaid-skin-gel-uv-spf-50-pa-01-clear'

    path = '/Users/anshaal/Downloads/chromedriver'

    driver = webdriver.Chrome(path)

    driver.get(website)

    ingredients_div = driver.find_element_by_id(
        "ingredlist-short")

    return ingredients_div.text.split(" ")


def find_highlights(driver):
    results_arr = []
    highlights_div = driver.find_elements_by_class_name(
        "hashtag")
    for item in highlights_div:
        results_arr.append(item.text)
        # print("IMAGE DIV", item.text)

    return results_arr


def product_search(search_query):
    website = 'https://incidecoder.com/'

    path = '/Users/anshaal/Downloads/chromedriver'

    driver = webdriver.Chrome(path)

    driver.get(website)

    # print("SRC_TAG", src_tag.get_attribute('src'))

    # find html tag for search bar
    search = driver.find_element_by_id("query")

    # search query
    search.send_keys(search_query)

    # have enter key pressed
    search.send_keys(Keys.RETURN)

    link = driver.find_elements_by_class_name("klavika")

    results_arr = []

    for item in link:
        # print("text", item.text, "url", item.get_attribute('href'))
        result_obj = {"title": item.text, "url": item.get_attribute('href')}

        try:
            element = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.LINK_TEXT, item.text))
            )
            element.click()
            result_obj["product_img"] = find_image(driver)
            results_arr.append(result_obj)
            driver.back()
            # image_div = driver.find_element_by_id("product-main-image")
            # print("IMAGE DIV", image_div)

        except:
            driver.quit()

        # try:
        #     # image = WebDriverWait(driver, 10).until(
        #     #     EC.presence_of_element_located((By.TAG_NAME, 'img'))
        #     # )
        #     # print("image", image.get_attribute('src'))
        #     image_element = WebDriverWait(driver, 100).until(
        #         EC.presence_of_element_located((By.ID, "product-main-image")))
        #     print("image div", image_element)
        # except:
        #     driver.quit()

    # image_locator = locate_with(By.TAG_NAME, "img").below(
    #     {By.ID: "product-main-image"})

    # image_div = driver.find_element_by_id("product-main-image")
    # print("IMAGE DIV", image_div)
    # img_src = image_div.find_elements(By.TAG_NAME, "img")

    # for item in img_src:
    #     print("image", item.get_attribute('src'))

    # print("results arr", results_arr)
    # time.sleep(1)
    # time.sleep(5)
    # print("RESULTS ARR", results_arr)

    driver.quit()
    return results_arr
    # name = link.text
    # url = link.get_attribute('href')
    # print("link", name)
    # print("url", url)

    # wait for page to load
    # try:
    #     main = WebDriverWait(driver, 10).until(
    #         EC.presence_of_element_located((By.CLASS_NAME, "detailpage"))
    #     )
    # finally:
    #     driver.quit()

    # main = driver.find_element_by_class_name("paddingbl")
    # link = driver.find_element_by_class_name("klavika").get_attribute('href')
    # results = main.text
    # print(results)
    # print("link", link)
    # return results

    # matches = driver.find_elements_by_class_name("hashtag")

    # print("matches", matches)

    # for match in matches:
    #     print(match.text.split())


# product_search("hada labo")

find_ingredients()

# find_highlights()
