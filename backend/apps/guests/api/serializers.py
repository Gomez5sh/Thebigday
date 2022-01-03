from rest_framework import serializers
from apps.guests.models import Guests

class guestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guests
        fields = '__all__'
