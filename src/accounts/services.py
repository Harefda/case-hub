from accounts.models import UserItem
from accounts.models.user import User



def add_item_to_inventory(user:User, item_in_case):
    user_item = UserItem.objects.create(user=user, item=item_in_case)
    
    return user_item
    
