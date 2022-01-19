from cgitb import lookup
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.guests.api.serializers import SongsSerializer, formConfirmationSerializer, gallerySerializer, guestSerializer, pictureSerializer
from apps.guests.models import Guests, Songs, formConfirmation, gallery, picture, singleImages
from apps.guests.api.serializers import DonationMessajesSerializer, singleImagesSerializer, formConfirmationSerializer
from apps.guests.models import DonationMessajes
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

class CommentDonationsAPIView(CreateAPIView):
    '''POST and GET comment to donation'''
    serializer_class = DonationMessajesSerializer

    def post(self, request):
        new_comment = request.data
        serializer_post = self.serializer_class(data= new_comment)
        serializer_post.is_valid(raise_exception=True)
        serializer_post.save()
        return Response(serializer_post.data, status= status.HTTP_201_CREATED)

    def get(self, request):
        comments = DonationMessajes.objects.all()
        serializer_get = self.serializer_class(comments, many=True)
        return Response(serializer_get.data)


class getPostSingleImagesAPIView(ListCreateAPIView):
    serializer_class = singleImagesSerializer
    queryset = singleImages.objects.all()

class getFamilyGroupAPIView(ListAPIView):
    ''' Get family group by the given number'''
    serializer_class = guestSerializer

    def get_queryset(self):
        phone= self.kwargs['phone_number']
        family_num = Guests.objects.filter(phone_number = phone).values('family_group')
        if family_num.count() == 0:
            return Guests.objects.none()
        family_num = family_num[0]['family_group']
        family_group = Guests.objects.filter(family_group = family_num).exclude(phone_number = phone)
        return family_group

class FormConfirmationAPIView(ListCreateAPIView):
    ''' Form confirmarion get/post'''
    serializer_class = formConfirmationSerializer
    def post(self, request):
        form_data = request.data
        serializer_post = self.serializer_class(data= form_data)
        serializer_post.is_valid(raise_exception=True)
        serializer_post.save()
        return Response(serializer_post.data, status= status.HTTP_201_CREATED)

    def get_queryset(self):
        return formConfirmation.objects.all()

        