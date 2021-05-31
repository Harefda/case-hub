from django.conf import settings
from app.errors import ValidationError


User = settings.AUTH_USER_MODEL

class PurchaseToolkit:

    @classmethod
    def check_balance(cls, user:User, price, bonus=False): #cls - to use this class inside of this method
        balance = user.balance if not bonus else user.bonus_balance
        if balance < price:
            return False

        return True

    @classmethod
    def pay_for_purchase(cls, purchase):
        user = purchase.user
        if purchase.case.bonus == True:
            if user.bounus_balance >= purchase.price:
                user.bonus_balance -= purchase.price
            else:
                raise ValidationError(f"User {user} doesn't have enough bonus_balance")

        else:
            if user.balance >= purchase.price:
                user.balance -= purchase.price
            else:
                raise ValidationError(f"User {user} doesn't have enough balance")

        user.save()
        purchase.paid = True
        purchase.save()