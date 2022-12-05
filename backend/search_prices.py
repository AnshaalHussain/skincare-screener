from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# def google_search(search_query):
#     website = 'https://google.com'

#     path = '/Users/anshaal/Downloads/chromedriver_2'

#     driver = webdriver.Chrome(path)

#     driver.get(website)

#     # find html tag for search bar
#     search = driver.find_element_by_name("q")

#     # search query
#     search.send_keys(search_query)

#     # have enter key pressed
#     search.send_keys(Keys.RETURN)

#     time.sleep(5)


# google_search("Canmake Mermaid Skin Gel Uv Spf50")
# google_search("amazon")
