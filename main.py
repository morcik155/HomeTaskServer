from flask import Flask, render_template, session, request, redirect
import database
import datetime
import static.data.raspisanie as raspi

app = Flask(__name__)
app.secret_key = '12'

database.create_table_HomeTasks()
database.create_table_accounts()


@app.route('/login', methods=['GET', 'POST'])
def login():
    session['is_active'] = False
    if request.method == 'POST':
        login = request.form.get('login')
        password = request.form.get('password')
        data: list = database.read('accounts')
        server_data = []
        for i in data:
            d = []
            for j in i:
                d.append(j)
            d.pop(0)
            server_data.append(d)
        print(server_data)
        in_data = [login, password]
        print(in_data)
        if in_data in server_data:
            session['is_active'] = True
            session['user'] = login
            return redirect('/')
        else:
            return redirect('/login')
    else:
        return render_template('login.html')


@app.route('/')
def home():
    if session.get('is_active'):
        h = database.read('HomeTasks')
        subject = []
        dz = []
        date = []
        for i in h:
            subject.append(i[3])
            dz.append(i[2])
            if i[1] not in date:
                date.append(i[1])
        return render_template('home.html', index=range(len(date)), subject=subject, dz=dz,
                               date=date, index2=range(len(h)), index3=range(6))
    else:
        return redirect('/login')


@app.route('/edit', methods=['GET', 'POST'])
def edit():
    d = datetime.date.today().isoweekday()
    if request.method == 'POST':
        d2 = datetime.date.today()
        d3 = str(d2.day)
        d2 = str(d2.month)
        for i in range(1, len(raspi.d1[d - 1]) + 1):
            n = request.form.get(f'in{i}')
            data = []
            if d2 == '1':
                data.append(d3 + ' ' + 'ЯНВАРЯ')
            elif d2 == '2':
                data.append(d3 + ' ' + 'ФЕВРАЛЯ')
            elif d2 == '3':
                data.append(d3 + ' ' + 'МАРТА')
            elif d2 == '4':
                data.append(d3 + ' ' + 'АПРЕЛЯ')
            elif d2 == '5':
                data.append(d3 + ' ' + 'МАЯ')
            elif d2 == '6':
                data.append(d3 + ' ' + 'ИЮНЯ')
            elif d2 == '7':
                data.append(d3 + ' ' + 'ИЮЛЯ')
            elif d2 == '8':
                data.append(d3 + ' ' + 'АВГУСТА')
            elif d2 == '9':
                data.append(d3 + ' ' + 'СЕНТЯБРЯ')
            elif d2 == '10':
                data.append(d3 + ' ' + 'ОКТЯБРЯ')
            elif d2 == '11':
                data.append(d3 + ' ' + 'НОЯБРЯ')
            elif d2 == '12':
                data.append(d3 + ' ' + 'ДЕКАБРЯ')
            data.append(n)
            data.append(raspi.d1[d - 1][i - 1])
            data.append(session.get('user'))
            print(data)
            database.add('HomeTasks', data)
        return redirect('/')
    else:
        if session.get('is_active'):
            if d != 7:
                return render_template('edit.html', rasp=raspi.d1[d - 1], index=range(len(raspi.d1[d - 1])))


@app.route('/resetpassword')
def reset():
    if request.method == "POST":
        np = request.form.get('new_password')
        database.edit('accounts', session.get('user'), np)
    else:
        return render_template('reset.html')


if __name__ == '__main__':
    app.run()
