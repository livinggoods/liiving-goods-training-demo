
FROM python:2.7-alpine

ENV PYTHONUNBUFFERED 1

ENV HOST 0.0.0.0

COPY . /var/www/

WORKDIR /var/www/

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]