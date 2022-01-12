from rest_framework import serializers
from apps.guests.models import Guests, Songs

class guestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guests
        fields = '__all__'

class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = '__all__'