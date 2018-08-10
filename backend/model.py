from peewee import CharField, TextField
from datetime import datetime
from database import BaseModel
from pydash import once


class TasksModel():
    __connect = once(BaseModel.db_connect)

    def __init__(self):
        self.__connect([self.__Model])

    def query(self):
        q = self.__Model.select()  # returns an array of all items
        return q

    def add(self, item):
        task = self.__Model.create(
            title=item['title'],
            description=item['details']
        )
        return task

    def remove(self, id):
        q = self.__Model.get(self.__Model.id == id)
        return q.delete_instance()  # returns number of rows deleted


    class __Model(BaseModel):

        """
            Outbox Data Model used as an inner class for purposes controlling scope of the model
            The methods implemented by the parent class Outbox provided functionality for interacting with the data model
        """

        title = CharField(unique=True, column_name='task_title')
        details = TextField(, column_name='task_details')
        created_on = DateTimeField(default=datetime.datetime.now)

        class Meta:
            table_name = 'tasks'
