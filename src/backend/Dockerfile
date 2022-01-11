FROM python:latest

workdir /root

COPY src .

EXPOSE 5000
RUN pip install flask pymongo
CMD ["python","__init__.py"]