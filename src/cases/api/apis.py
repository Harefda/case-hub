from rest_framework.decorators import api_view
from rest_framework.response import Response

from cases.models import Case, ItemInCase
from cases.services import open_case


