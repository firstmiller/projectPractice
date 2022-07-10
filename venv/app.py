from flask import Flask, render_template, url_for, request, redirect
app = Flask(__name__)

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app


@app.route('/')
def index_rus():
    return render_template("index.html")
@app.route('/index_en')
def index_en():
    return render_template("index_en.html")
@app.route('/news_ru')
def news_ru():
    return render_template("news_ru.html")
@app.route('/students_ru')
def students_ru():
    return render_template("students_ru.html")
@app.route('/applicants_ru')
def applicants_ru():
    return render_template("applicants_ru.html")
@app.route('/education_ru')
def education_ru():
    return render_template("education_ru.html")
@app.route('/history_ru')
def history_ru():
    return render_template("history_ru.html")
@app.route('/about_ru')
def about_ru():
    return render_template("about_ru.html")
@app.route('/news_en')
def news_en():
    return render_template("news_en.html")
@app.route('/students_en')
def students_en():
    return render_template("students_en.html")
@app.route('/applicants_en')
def applicants_en():
    return render_template("applicants_en.html")
@app.route('/education_en')
def education_en():
    return render_template("education_en.html")
@app.route('/history_en')
def history_en():
    return render_template("history_en.html")
@app.route('/about_en')
def about_en():
    return render_template("about_en.html")

if __name__ == '__main__':
    app.run()
