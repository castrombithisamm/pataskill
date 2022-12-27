from rest_framework import serializers
from .models import Course, Banners


class CourseSerializer(serializers.ModelSerializer):
     # create a meta class
    class Meta:
        model = Course
        fields = ('id','title', 'detail')

class BannerSerializer(serializers.ModelSerializer):
     # create a meta class
    class Meta:
        model = Banners
        fields = ('img','alt_text')