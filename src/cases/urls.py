"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from cases import views
from cases.api import apis
from cases.services import get_all_items_in_case


urlpatterns = [
    path('case/<int:id>', views.case_page),
    path('api/case/list/', apis.get_all_cases_api),
    path('api/case/get/', apis.get_case_api),
    path('api/case/open/', apis.open_case_api),
]