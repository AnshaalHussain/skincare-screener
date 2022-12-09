from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# gather product data based on incoming POST request


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

    # settings to make headless chrome browser work
    chromeOptions = Options()
    # chromeOptions.headless = True
    chromeOptions.add_argument('--no-sandbox')
    chromeOptions.add_argument('--headless')
    chromeOptions.binary_location = "chromedriver"
    chromeOptions.add_argument("--disable-gpu")
    chromeOptions.add_argument("--window-size=1920,1080")
    chromeOptions.add_argument('--disable-dev-shm-usage')
    chromeOptions.add_argument(
        'user-agent="MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"')

    driver = webdriver.Chrome(
        ChromeDriverManager().install(), options=chromeOptions)

    # go to url
    driver.get(website)

    # find html tag for search bar
    search = driver.find_element_by_id("query")

    # search query
    search.send_keys(search_query)

    # have enter key pressed
    search.send_keys(Keys.RETURN)

    # find list of elements containing product data
    link = driver.find_elements_by_class_name("klavika")

    url_arr = []
    results_arr = []

    # loop through list to grab urls and titles from results page
    for item in link:
        result_obj = {"title": item.text,
                      "url": item.get_attribute('href')}
        url_arr.append(result_obj)

    # click on each url to store product title, url, image, ingredients, hightlights in an object, then append obj to results_arr
    for item in url_arr:
        if item["url"] == None:
            continue

        driver.get(item["url"])

        new_result_obj = {}

        new_result_obj["title"] = item["title"]
        new_result_obj["url"] = item["url"]
        new_result_obj["product_img"] = find_image(driver)
        new_result_obj["ingredients"] = find_ingredients(driver)
        new_result_obj["highlights"] = find_highlights(driver)

        results_arr.append(new_result_obj)

    driver.quit()
    return results_arr
