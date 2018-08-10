# Contains db connection and data models implementation

import os
from peewee import PostgresqlDatabase, Model
from dotenv import load_dotenv

load_dotenv()

db = PostgresqlDatabase(os.getenv("POSTGRES_DB_NAME"), user=os.getenv("POSTGRES_DB_USER"), password=os.getenv("POSTGRES_DB_PASSWORD"),
    host=os.getenv("POSTGRES_DB_HOST"), port=os.getenv("POSTGRES_DB_PORT"), autocommit=True, autorollback=True)


class BaseModel(Model):

    """
        Defines the rule to be used by all Data Models
    """

    @staticmethod
    def db_connect(models):
        db.connect(reuse_if_open=True)
        db.create_tables(models)

    class Meta:
        database = db


