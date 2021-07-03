from django.conf import settings
from cases.models import Case, ItemInCase
from purchases.models import Purchase
from purchases.services import PurchaseToolkit


User = settings.AUTH_USER_MODEL

class PurchaseCreator:
    def __init__(self, user:User, case:Case, item:ItemInCase):
        self.user = user
        self.case = case
        self.item = item

    def __call__(self): #call class
        if self.allowed_to_create():
            return self.create()
        else:
            return None

    def create(self):
        return Purchase.objects.create(
            item=self.item, 
            user=self.user,
            case=self.case,
            price=self.case.price,
        )

    def allowed_to_create(self):
        if not PurchaseToolkit.check_balance(user=self.user, price=self.case.price, bonus=self.case.bonus):
            return False

        if not self.case.active:
            return False

        return True
