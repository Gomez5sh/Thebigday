from rest_framework import serializers
from apps.guests.models import Guests, Songs, DonationMessajes

class guestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guests
        fields = '__all__'

class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = '__all__'


class DonationMessajesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationMessajes
        fields = '__all__'
