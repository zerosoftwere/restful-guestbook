from rest_framework import serializers
from django.contrib.auth.models import User

from api.models import Entry

class EntrySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Entry
        fields = ['id', 'date', 'content', 'owner']

class UserSerializer(serializers.ModelSerializer):
    entries = serializers.PrimaryKeyRelatedField(many=True, queryset=Entry.objects.all())
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'entries']
