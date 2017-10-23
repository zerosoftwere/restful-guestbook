from django.conf.urls import url, include
from rest_framework import urls


urlpatterns = [
    url(r'^api/', include('api.urls'))
]
