from django.urls import path

from items.api import apis


urlpatterns = [
     path("api/item/get/", apis.get_item_api),
]
