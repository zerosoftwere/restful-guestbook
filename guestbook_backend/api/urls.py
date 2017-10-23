from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^entries/$', views.EntryList.as_view(), name='entry-list'),
    url(r'^entries/(?P<pk>[0-9]+)/$', views.EntryDetail.as_view(), name='entry-detail'),
    url(r'^users/$', views.UserList.as_view(), name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view(), name='user-detail')
]
