import pickle
import json
from itertools import chain
from collections import Counter
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait

PRINT_COUNTS = False
WOOLWORTHS = 'https://www.woolworths.com.au/shop/search/products'

# Recipes
with open('./src/data/recipes.json') as f:
    recipes = json.load(f)

# Get unique ingredient list
recipe_ingredients = [[i[0] for i in r['ingredients']] for r in recipes]
ingredients = list(chain(*recipe_ingredients))
unique_ingredients = set(ingredients)

# Count ingredients
if PRINT_COUNTS:
    print(' -- Ingredient Counts -- ')
    counts = Counter(ingredients)
    for name, count in sorted(counts.items(), key=lambda e: e[1], reverse=True):
        print(f'{name} (x{count})')

# Acquire prices 😎 (woolworths)
driver = webdriver.Chrome()
driver.get(WOOLWORTHS)
prices = {}
for ingredient in unique_ingredients:
    search_bar = driver.find_element_by_id('wx-headerSearch')
    search_bar.clear()
    search_bar.send_keys(ingredient)
    search_bar.send_keys(Keys.RETURN)
    
    grid = WebDriverWait(driver, 3000).until(lambda d: d.find_element_by_class_name('product-grid'))
    price = WebDriverWait(driver, 3000).until(lambda d: d.find_element_by_class_name('shelfProductTile-cupPrice'))
    prices[ingredient] = price.text

for k, v in prices.items():
    print(f'{k}: {v}')

with open('src/data/ingredient_prices.pkl', 'wb') as f:
    pickle.dump(prices, f)
