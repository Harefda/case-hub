from django.db import models


from items.utils import get_user_upload_image_path


class Case(models.Model):
    name = models.CharField(unique=True, max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=get_user_upload_image_path, null=True, blank=True)
    active = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    bonus = models.BooleanField(default=False)

    class Meta:
        verbose_name = ("Case")
        verbose_name_plural = ("Cases")

    def __str__(self) -> str:
        return f"{self.name}"



class ItemInCase(models.Model):
    item = models.ForeignKey('items.Item', related_name='ItemInCase', on_delete=models.CASCADE)
    case = models.ForeignKey('cases.Case', related_name='Case', on_delete=models.CASCADE)
    chance_of_drop = models.DecimalField(max_digits=100, decimal_places=2)

    class Meta:
        verbose_name = ("Item")
        verbose_name_plural = ("Items")

    def __str__(self) -> str:
        return f"{self.item}"