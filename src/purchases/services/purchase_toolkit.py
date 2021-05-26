from django.conf import settings


User = settings.AUTH_USER_MODEL

class PurchaseToolkit:

    @classmethod
    def check_balance(cls, user:User, price, bonus=False): #cls - to use this class inside of this method
        balance = user.balance if not bonus else user.bonus_balance
        if balance < price:
            return False

        return True

