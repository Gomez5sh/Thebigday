from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.guests.api.serializers import guestSerializer
from apps.guests.models import Guests
import json
from django.http import HttpResponse

class getGuestsAPIView(ListAPIView):
    '''Return all guests'''
    serializer_class = guestSerializer
    queryset = Guests.objects.all()

    def get_queryset(self):
        return self.queryset


class getSingleGuestAPIView(ListAPIView):
    '''Return guest by phone number'''
    serializer_class = guestSerializer
    queryset = Guests.objects.all()
    lookup_field = 'phone_number'

    def get_queryset(self):
        phone = self.kwargs['phone_number']
        return self.queryset.filter(phone_number = phone)

class postSingleGuestAPIView(CreateAPIView):
    ''' Add new guest to the weeding list'''
    serializer_class = guestSerializer

    def post(self, request):
        new_guest = request.data
        serializer_post = self.serializer_class(data= new_guest)
        serializer_post.is_valid(raise_exception=True)
        serializer_post.save()
        return Response(serializer_post.data, status= status.HTTP_201_CREATED)

