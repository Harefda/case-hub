from django.shortcuts import render


def profile_page(request):
    return render(request, 'inventory.html', {})

def login_page(request):
    return render(request, 'login.html', {})