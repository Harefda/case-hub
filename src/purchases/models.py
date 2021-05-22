from django.db import models

class Purchase(models.Model):
    item = models.OneToOneField('items.Item', related_name='DroppedItem')
    timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('accounts.User', related_name='UserOpener')  
