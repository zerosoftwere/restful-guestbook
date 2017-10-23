from django.db import models
from django.conf import settings


class Entry(models.Model):
    date = models.DateTimeField(auto_now=True)
    content = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='entries', on_delete=models.CASCADE)
