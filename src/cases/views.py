from django.shortcuts import render


def case_page(request):
    return render(request, 'case.html', {})