from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^entries/$', views.EntryList.as_view(), name='entry-list')
]
