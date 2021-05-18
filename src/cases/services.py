from accounts.utils import get_upload_image_path
import random

from cases.models import ItemInCase


def get_all_items_in_case(case):
    items = ItemInCase.objects.filter(case=case).order_by('?') #case=case cause sorting by case
    return items


def open_case(case):
    items = get_all_items_in_case(case)
    random_num = random.randint(0, 10000)
    count = 0

    for item in items:
        count += float(item.chance_of_drop) * 100
        if count > random_num:
            return item
