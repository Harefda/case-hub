from django.db import models

from items.utils import get_user_upload_image_path


class Item(models.Model):
    name = models.CharField(unique=True, max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=get_user_upload_image_path, null=True, blank=True)

    class Meta:
        verbose_name = ("Item")
        verbose_name_plural = ("Items")

    def __str__(self):
        return f"{self.name}"