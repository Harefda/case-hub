from django.shortcuts import render



def case_page(request, id):
    return render(request,'case.html', {})