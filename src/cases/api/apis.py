import re
from django.http import response
from django.utils.translation import activate
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

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