from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.permissions import IsOwnerOrReadOnly
from rest_framework import authentication
from rest_framework import generics

from api.models import Entry
from api.serializers import EntrySerializer, UserSerializer


class DefaultsMixin(object):
    authentication_classes = [
        authentication.BasicAuthentication,
        authentication.TokenAuthentication
    ]

class EntryList(generics.ListCreateAPIView):
    queryset = Entry.objects.order_by('-date')
    serializer_class = EntrySerializer
    permission_classes = [
        IsAuthenticatedOrReadOnly
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class EntryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
    permission_classes = [
        IsOwnerOrReadOnly
    ]


class DefaultsUserMixin(object):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserList(DefaultsUserMixin, generics.ListAPIView):
    pass

class UserDetail(DefaultsUserMixin, generics.RetrieveAPIView):
    pass
