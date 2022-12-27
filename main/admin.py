from django.contrib import admin
from . import models

# Register your models here.
class BannerAdmin(admin.ModelAdmin):
    list_display=('alt_text','image_tag')
admin.site.register(models.Banners, BannerAdmin)


class CourseAdmin(admin.ModelAdmin):
    list_display=('title', 'detail')
admin.site.register(models.Course, CourseAdmin)