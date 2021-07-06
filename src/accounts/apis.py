from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response

from accounts.models import User
from accounts.services import UserToolkit
from accounts.serializers import UserSerializer
from app.errors import CredentialsError

@api_view(["POST"])
def create_user_api(request, *args, **kwargs):
    data = request.POST or request.data

    username = data.get('username')
    password = data.get('password')

    user = UserToolkit.create_user(password, username)

    if user is None:
        return Response({'error': "User wasn't created"}, status=400)

    serializers = UserSerializer(instance=user)
    return Response(serializers.data, status=200)

@api_view(["POST"])
def login_user_api(request, *args, **kwargs):
    data = request.POST or request.data

    username = data.get('username')
    password = data.get('password')

    try:
        user = UserToolkit.log_in_user(request, password, username)
    except CredentialsError as exc:
        return Response({'error': str(exc)}, status=400)
    except PermissionError as exc:
        return Response({'error': str(exc)}, status=400)

    

    return Response({}, status=200) #{} - empty json
        

