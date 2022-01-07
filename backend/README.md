## Installation

In your terminal, git clone the directory with the following command:

```sh
git clone https://github.com/Gomez5sh/Thebigday.git
```
#### Installation steps

1. Ensure you have python3.8 and Docker installed

* if needed install libmysqlclient-dev -> sudo apt-get install libmysqlclient-dev

2. Clone the repository

3. create a virtual environment using `virtualenv env`

4. Activate the virtual environment by running `source env/bin/activate`

5. Install the dependencies using `pip install -r requirements.txt`

* Also you can only use `source env/bin/activate`

6. Run docker to mysql db `docker-compose up`

* To stop use `docker-compose stop`

7. Migrate existing db tables by running `python manage.py migrate`

8. Run the django collectstatic `python manage.py collectstatic`

9. Run the django development server using `python manage.py runserver`

## Information to admin django
```python
python manage.py createsuperuser
```
| user | password | Description |
| ----- | ----- | ------ |
| admin | 12345678 | Admin |
