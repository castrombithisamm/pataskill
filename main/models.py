from statistics import mode
from turtle import title
from django.db import models
from django.core.validators import FileExtensionValidator
from django.utils.html import mark_safe

# Banners

class Banners(models.Model):
    id = models.AutoField(primary_key=True)
    img=models.FileField(upload_to="banners/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])] )

    alt_text=models.CharField(max_length=150)
    

    
    def __str__(self):
        return self.alt_text

    def image_tag(self):
        return mark_safe('<img src="%s" width="20" />' % (self.img.url) )


# Create your models here.
class Course(models.Model):
    id = models.AutoField(primary_key=True)
    title=models.CharField(max_length=300)
    detail=models.TextField(max_length=500)

    def __str__(self):
        return self.title




