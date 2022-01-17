from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from apps.guests.models import Guests, Songs, picture, gallery
from apps.guests.models import DonationMessajes


class guestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guests
        fields = '__all__'

class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = '__all__'

class pictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = picture
        fields = '__all__'

class gallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = gallery
        fields = '__all__'

class DonationMessajesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationMessajes
        fields = '__all__'
