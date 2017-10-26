from rest_framework import viewsets
from rest_framework import generics

from api.models import Entry
from api.serializers import EntrySerializer

class EntryList(generics.ListCreateAPIView):
    queryset = Entry.objects.order_by('-date')
    serializer_class = EntrySerializer
