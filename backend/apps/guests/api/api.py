from cgitb import lookup
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.guests.api.serializers import SongsSerializer, gallerySerializer, guestSerializer, pictureSerializer
from apps.guests.models import Guests, Songs, gallery, picture
from apps.guests.utils import Util

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


class postGuestsSENDinvitationAPIView(APIView):
    ''' Send SMS invitation to all guests'''
    serializer_class = guestSerializer

    def post(self, request):
        guests = Guests.objects.all()

        invited = []
        for guest in guests:
            sms_body = f"Hola {guest.first_name} {guest.last_name} has sido invitado a la boda de David Peralta y Viviana Sandoval que se llevará a cabo el xx/xx/xxxx"
            try:
                Util.send_sms.delay(sms_body, guest.phone_number)
            except Exception as e:
                message = {
                    'error': 'Error sending SMSes to all guests',
                    'SMSes sent successfully': invited,
                    'count': len(invited),
                    'error message': str(e)
                }
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
            invited.append({'phone_number': guest.phone_number, 'full_name': guest.first_name + ' ' + guest.last_name})

        message = {
            'SMSes sent successfully': invited,
            'count': len(invited),
        }
        return Response(message, status= status.HTTP_202_ACCEPTED)

class getSongsAPIView(ListAPIView):
    ''' Get list of weeding songs'''
    serializer_class = SongsSerializer
    queryset = Songs.objects.all()

    def get_queryset(self):
        return self.queryset

class getPicturesGalleryAPIView(ListAPIView):
    ''' Get pictures of the weeding'''
    serializer_class = pictureSerializer
    queryset = gallery.objects.all()

    def get_queryset(self):
        gallery_name = self.kwargs['gallery_name']
        id_gallery = self.queryset.filter(title=gallery_name).values('id')[0]['id']
        return picture.objects.filter(gallery_id= id_gallery)

