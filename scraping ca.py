import requests
from bs4 import BeautifulSoup
import json
import time
from datetime import datetime

def getInt(a):
    k = ''
    for i in range(2):
        if a[i] != ' ':
            k += a[i]
    return int(k)

def jamMenit(a):
    if 'menit' in a:
        return True
    else:
        return False

def get_current_time():
    current_time = datetime.now()
    return current_time

def fungsi(waktu):
    jamDanMenit = jamMenit(waktu)
    n = getInt(waktu)
    timestamp = time.time()
    if jamDanMenit:
        timestamp -= n * 60
    else:
        timestamp -= n * 3600

    # Convert Unix timestamp to datetime object
    date_time = datetime.utcfromtimestamp(timestamp)

    # Format the datetime object as a string
    formatted_date = date_time.strftime('%Y-%m-%d %H:%M:%S')
    return formatted_date

html = requests.get("https://www.republika.co.id/")
soup = BeautifulSoup(html.content, 'html.parser')

divs = soup.find_all('div', class_='caption')

dataset = []

for div in divs:
    subdiv = div.find('div')
    total = []
    try:
        kategoriWaktu = subdiv.text.strip().split('- ')
        if len(kategoriWaktu) == 2:
            kategori = kategoriWaktu[0]
            waktu = kategoriWaktu[1]
            total.extend((kategori, waktu))
    except AttributeError:
        pass

    subdiv = div.find('h3')
    if subdiv:
        title = subdiv.text.strip()
        total.append(title)

    if len(total) == 3:
        total[1] = fungsi(total[1])

        dataset.append({'kategori': total[0], 'waktu': total[1], 'judul': total[2], 'waktu scrapping': str(get_current_time())})
        print(total[0])
        print(total[1])
        print(total[2])
        print()

print(len(dataset))

# Save dataset to JSON FILE
with open('data.json', 'w') as json_file:
    json.dump(dataset, json_file, indent=2)
