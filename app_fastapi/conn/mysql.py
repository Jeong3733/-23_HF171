import pymysql
from pymysql import cursors, connect

mysql_params = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "1234",
    "database": "checker",
    "cursorclass": pymysql.cursors.DictCursor,
}

conn = pymysql.connect(**mysql_params)

db = connect(host='localhost',
             port=3306,
             user='root',
             password='1234',
             database='checker',
             cursorclass=cursors.DictCursor)
