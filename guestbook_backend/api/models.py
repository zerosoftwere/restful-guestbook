from django.db import models
from django.conf import settings


class Entry(models.Model):
    date = models.DateTimeField(auto_now=True)
    content = models.TextField()
