from flask import Flask, render_template, request
app = Flask(__name__)

# Store answers in memory (for demo purposes, you could use a database in production)
answers = []

@app.route('/')
def index():
    return render_template('index.html', answers=answers)

@app.route('/submit', methods=['POST'])
def submit_answer():
    user_answer = request.form['user_answer']
    if user_answer:
        answers.append(user_answer)
    return render_template('index.html', answers=answers)

if __name__ == '__main__':
    app.run(debug=True)
