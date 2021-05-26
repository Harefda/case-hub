import random
from app.errors import ValidationError
from cases.models import ItemInCase
from accounts.models import User
from purchases.services import PurchaseToolkit, PurchaseCreator


def get_random_item(case):
    items = get_all_items_in_case(case)
    random_num = random.randint(0, 10000)
    count = 0

    for item in items:
        count += float(item.chance_of_drop) * 100
        if count > random_num:
            return item


def get_all_items_in_case(case):
    items = ItemInCase.objects.filter(case=case).order_by('?') #case=case cause sorting by case
    return items


def allowed_to_open_case(case, user):
    if not PurchaseToolkit.check_balance(
        user=user,
        price=case.price,
        bonus=case.bonus
    ):
        return False

    return True

def open_case(case, user):
    if allowed_to_open_case(case, user):
        random_item = get_random_item(case)
        purchase = PurchaseCreator(user=user, case=case, item=random_item)()
        return random_item

    else:
        raise ValidationError('You are not allowed to open this case')