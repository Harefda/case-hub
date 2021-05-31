from django.db.models.query_utils import select_related_descend
from rest_framework import serializers

from cases.models import Case, ItemInCase


class ListCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = [
            "name",
            "price",
            "image",
            "timestamp",
            "update",
            "bonus"
        ]

class ItemInCaseSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    
    class Meta:
        model = ItemInCase
        fields = [
            "name",
            "price",
            "image",
        ]

    def get_name(self, obj):
        name = obj.item.name
        return name

    def get_price(self, obj):
        price = obj.item.price
        return price

    def get_image(self, obj):
        image = obj.item.image
        return image

class CaseSerializer(serializers.ModelSerializer):
    items = ItemInCaseSerializer(many=True)

    class Meta:
        model = Case
        fields = [
            "name",
            "price",
            "image",
            "timestamp",
            "update",
            "bonus",
            "items"
        ]

