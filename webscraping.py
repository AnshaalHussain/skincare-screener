from selenium import webdriver

website = 'https://incidecoder.com/products/canmake-mermaid-skin-gel-uv-spf-50-pa-01-clear'

path = '/Users/anshaal/Downloads/chromedriver'

driver = webdriver.Chrome(path)

driver.get(website)

driver.quit()
