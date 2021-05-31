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

