from flask import Flask
from flask import render_template
import urllib, json
app = Flask(__name__) 

@app.route("/") 
def hello_world():
    with open("key_nasa.txt") as file:
        key = file.readlines()[0]
    url = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=" + key)
    data = json.loads(url.read())
    pic = data['url']
    info = data['explanation']
    #print(data)
    return render_template('main.html', pic = pic, info = info )


app.run()  
                
