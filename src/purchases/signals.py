from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

from purchases.models import Purchase
from purchases.services import PurchaseToolkit


@receiver(post_save, sender=Purchase)
def purchase_post_save_receiver(sender, instance, created, *args, **kwargs):
    if created:
        PurchaseToolkit.pay_for_purchase(instance)