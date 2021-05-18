from django.contrib import admin

from cases.models import Case, ItemInCase


admin.site.register(Case)
admin.site.register(ItemInCase)