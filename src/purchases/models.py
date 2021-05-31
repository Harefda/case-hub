from django.db import models

class Purchase(models.Model):
    item = models.ForeignKey('cases.ItemInCase', related_name='purchases', on_delete=models.SET_NULL, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('accounts.User', related_name='purchases', on_delete=models.CASCADE)
    case = models.ForeignKey('cases.Case', related_name='purchases', on_delete=models.SET_NULL  , null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    paid = models.BooleanField(default=False)

    class Meta:
        verbose_name = ("Purchase")
        verbose_name_plural = ("Purchases")

    def __str__(self) -> str:
        return f"{self.case} - {self.user}"
