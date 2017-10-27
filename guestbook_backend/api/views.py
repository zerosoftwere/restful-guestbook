from rest_framework.views import APIView
from rest_framework.response import Response;
from rest_framework import status
from api.models import Entry
from api.serializers import EntrySerializer

class EntryList(APIView):
    def get(self, request, format=None):
        entries = Entry.objects.order_by('-date')
        serializer = EntrySerializer(entries, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = EntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, format=None):
        Entry.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
