from django.db import models

class Purchase(models.Model):
    item = models.CharField(unique=True, max_length=50, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
