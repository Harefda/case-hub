from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response

from accounts.models import User
from accounts.services import UserToolkit

@api_view(["POST"])
def create_user_api(request, *args, **kwargs):
    data = request.POST or request.data

    username = data.get('username')
    password = data.get('password')

    user = UserToolkit.create_user(password, username)

    if user is None:
        return Response({'error': "User wasn't created"}, status=400)

    return Response()