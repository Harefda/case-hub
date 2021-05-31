from django.db import models


class UserItem(models.Model):
    user = models.ForeignKey('accounts.User', related_name='items', on_delete=models.CASCADE)
    item = models.OneToOneField('cases.ItemInCase', on_delete=models.CASCADE)