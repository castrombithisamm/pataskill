from math import fabs
from django.shortcuts import render
from django.http import JsonResponse
from . import models
from rest_framework import viewsets
from .serializers import CourseSerializer, BannerSerializer
from .models import Course, Banners


# Create your views here.
# Home Page
def getRoutes(request):
    return JsonResponse('My Main', safe=False)

def  index(request):
    banners=models.Banners.objects.all()
    return render(request, 'index.html', {'banners':banners})


class CourseView(viewsets.ModelViewSet):
    serializer_class=CourseSerializer
    queryset=Course.objects.all()

class BannerView(viewsets.ModelViewSet):
    serializer_class=BannerSerializer
    queryset=Banners.objects.all()