from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from accounts.models import user
from app.errors import ValidationError

from purchases.models import Purchase
from purchases.services import PurchaseToolkit
from accounts.services import add_item_to_inventory


@receiver(post_save, sender=Purchase)
def purchase_post_save_receiver(sender, instance, created, *args, **kwargs):
    if created:
        PurchaseToolkit.pay_for_purchase(instance)
        if instance.paid:
            add_item_to_inventory(instance.user, instance.item)


            
    


