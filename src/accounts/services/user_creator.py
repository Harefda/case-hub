from rest_framework.response import Response
from accounts.models import User


class UserCreator:
    def __init__(self, username, password):
        self.username = str(username).lower()
        self.password = password
        self.image = '/media/users/default_image.jpg'

    def __call__(self):
        if self.allowed_to_create():
            return self.create()
        else:
            return None

    def create(self):
        return User.objects.create_user(
            email=self.username,
            password=self.password,
            image=self.image
        )

    def allowed_to_create(self):
        if User.objects.filter(email=self.username).exists():
            return False

        return True