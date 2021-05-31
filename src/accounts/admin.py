from django.contrib import admin

from accounts.models import User, UserItem


admin.site.register(User)
admin.site.register(UserItem)