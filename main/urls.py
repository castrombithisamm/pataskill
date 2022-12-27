from django.urls import path, include
from django.contrib import admin
from main import views
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static



router = routers.DefaultRouter()
router.register(r'tasks',views.CourseView, 'task')
router.register(r'banners',views.BannerView, 'banner')


urlpatterns = [
    path('', views.index, name="index"),
    path('api/', include(router.urls)),
    path('api1/', include(router.urls)),

    # path('', views.getRoutes, name="routes")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)