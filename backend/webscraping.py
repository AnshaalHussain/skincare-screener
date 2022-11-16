from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

website = 'https://incidecoder.com/'

path = '/Users/anshaal/Downloads/chromedriver'

driver = webdriver.Chrome(path)

driver.get(website)

# find html tag for search bar
search = driver.find_element_by_id("query")

# search query
search.send_keys("canmake")

# have enter key pressed
search.send_keys(Keys.RETURN)

# wait for page to load
# try:
#     main = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CLASS_NAME, "detailpage"))
#     )
# finally:
#     driver.quit()

main = driver.find_element_by_class_name("detailpage")
print(main.text)

# matches = driver.find_elements_by_class_name("hashtag")

# print("matches", matches)

# for match in matches:
#     print(match.text.split())

# time.sleep(5)

# driver.quit()
