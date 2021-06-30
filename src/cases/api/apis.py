import re
from django.http import response
from django.utils.translation import activate
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from app.errors import ValidationError
from cases.models import Case, ItemInCase
from cases.services import open_case
from cases.api.serializers import (
    ListCaseSerializer,
    ItemInCaseSerializer,
    CaseSerializer,
)


@api_view(["GET"])
def get_all_cases_api(request):
    cases = Case.objects.filter(active=True)
    serializer = ListCaseSerializer(instance=cases, many=True)

    return Response(serializer.data, status=200)


@api_view(["GET"])
def get_case_api(request, *args, **kwargs):
    case_id = request.GET.get("id")
    if case_id is None:
        return Response({"error": "Case id is required"}, status=400)

    try:
        case = Case.objects.get(id=case_id)
    except Case.DoesNotExist:
        return Response({"error": f"Item with id - {case_id} doesn't exist"}, status=400)

    serializer = CaseSerializer(instance=case)
    return Response(serializer.data, status=200)


@api_view(['GET'])
def get_itemincase_api(request):            
    itemincase_id = request.GET.get("id")
    if itemincase_id is None:
        return Response({"error": "itemincase id is requried"}, status=400)

    try:
        itemincase = ItemInCase.objects.get(id=itemincase_id)
    except ItemInCase.DoesNotExist:
        return Response({"error": f"itemincase with id - {itemincase_id} doens't exist"}, status=400)

    serializers = ItemInCaseSerializer(instance=itemincase)
    return Response(serializers.data, status=200)


@api_view(["POST"])
def open_case_api(request):
    data = request.POST or request.data
    case_id = data.get("case_id")
    if case_id is None:
        return Response({"error": "case id is required"}, status=400)

    try:
        case = Case.objects.get(id=case_id)
    except Case.DoesNotExist:
        return Response({"error": f"case with id - {case_id} doesn't exist"}, status=404)

    user = request.user
    if not user.is_authenticated:
        return Response({"error": f"user is not authenticated"}, status=400)

    try:
        item = open_case(case, user)
    except ValidationError:
        return Response({"error": "You are not allowed to open this case"}, status=400)

    return Response({"item_id": item.id})