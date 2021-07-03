from accounts.models import UserItem

from django.contrib.auth import authenticate, login, get_user_model
from django.conf import settings


#ТУЛКИТ ПОЛЬЗУЕТСЯ КРЕАТЕРОМ

User = get_user_model()

class UserToolkit:
    @classmethod
    def add_item_to_inventory(cls, user:User, item_in_case):
        user_item = UserItem.objects.create(user=user, item=item_in_case)
        return user_item

    @classmethod
    def create_user(cls, password, username):
        from accounts.services import UserCreator
        user = UserCreator(password=password, username=username)()
        return user