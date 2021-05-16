from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics

from items.models import Item
from items.api.serializers import ItemSerializer


@api_view(["GET"])
def get_item_api(request, *args, **kwargs):
    item_id = request.GET.get("id")
    if item_id is None:
        return Response({"error": "Item id is required"}, status=400)

    try:
        item = Item.objects.get(id=item_id)

    except Item.DoesNotExist:
        return Response({"error": f"Item with id - {item_id} doesn't exist"}, status=400)

    serializer = ItemSerializer(instance=item)
    return Response(serializer.data, status=200)    