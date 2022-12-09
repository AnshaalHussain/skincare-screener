from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

from selenium.webdriver.chrome.options import Options

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager


def find_image(driver):
    image_div = driver.find_element_by_id(
        "product-main-image")

    src_tag = image_div.find_element(By.TAG_NAME, "img")
    src_image = src_tag.get_attribute('src')

    return src_image


def find_ingredients(driver):

    ingredients_div = driver.find_element_by_id(
        "ingredlist-short")

    return ingredients_div.text.split(" ")


def find_highlights(driver):
    results_arr = []
    highlights_div = driver.find_elements_by_class_name(
        "hashtag")
    for item in highlights_div:
        results_arr.append(item.text)

    return results_arr


def product_search(search_query):

    website = 'https://incidecoder.com/'

    path = '/Users/anshaal/Downloads/chromedriver_2'

    chromeOptions = Options()
    chromeOptions.headless = True
    chromeOptions.add_argument("--window-size=1920,1080")

    # user_agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36'
    chromeOptions.add_argument(
        'user-agent="MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"')

    # driver = webdriver.Chrome(path)
    driver = webdriver.Chrome(
        ChromeDriverManager().install(), options=chromeOptions)

    driver.get(website)

    # find html tag for search bar
    search = driver.find_element_by_id("query")

    # search query
    search.send_keys(search_query)

    # have enter key pressed
    search.send_keys(Keys.RETURN)

    link = driver.find_elements_by_class_name("klavika")

    url_arr = []
    results_arr = []

    # grab urls and titles

    for item in link:
        result_obj = {"title": item.text,
                      "url": item.get_attribute('href')}
        # print("ROBJ", result_obj)
        url_arr.append(result_obj)

    # print("url_arr", url_arr)

    # for item in url_arr:
    #     print(item)

    # for item in link:
    for item in url_arr:
        print("ITEM", item["title"])
        print("URL", item["url"])
        # time.sleep(2)
        # try:
        # print("TRYING...")
        # print("PAGE SOURCE:", driver.page_source)
        # driver.get_screenshot_as_file("screenshot.png")

        # look for link element with product name text
        # element = WebDriverWait(driver, 20).until(
        #     EC.presence_of_element_located((By.LINK_TEXT, item["title"]))
        # )

        if item["url"] == None:
            # print("TRUEEWWWWWWWW")
            continue

        driver.get(item["url"])
        new_result_obj = {}
        # result_obj = {"title": item.text,
        #               "url": item.get_attribute('href')}
        # print("RESULT_OBJ: ", result_obj)
        # print("ELEMENT: ", element)
        # element.click()
        new_result_obj["title"] = item["title"]
        new_result_obj["url"] = item["url"]
        new_result_obj["product_img"] = find_image(driver)
        new_result_obj["ingredients"] = find_ingredients(driver)
        new_result_obj["highlights"] = find_highlights(driver)
        results_arr.append(new_result_obj)
        driver.back()

        # new_links = driver.find_elements_by_class_name("klavika")
        # print("NEW_LINKS", new_links)

        # time.sleep(10)
        # driver.get_screenshot_as_file("screenshot_2.png")

        # get_next_element = WebDriverWait(driver, 20).until(
        #     EC.presence_of_element_located((By.LINK_TEXT, item.text)))
        # except:
        #     print("EXCEPTION")
        #     driver.quit()
        # driver.back()

    print("results", results_arr)

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


# product_search("canmake")

# find_ingredients()

# find_highlights()
