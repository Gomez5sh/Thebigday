from django.urls import path
from django.urls.resolvers import URLPattern
from apps.guests.api.api import getGuestsAPIView, getSingleGuestAPIView
from apps.guests.api.api import postSingleGuestAPIView, postGuestsSENDinvitationAPIView
from apps.guests.api.api import getSongsAPIView, getPicturesGalleryAPIView
from apps.guests.api.api import CommentDonationsAPIView


urlpatterns = [
    path('guests/', getGuestsAPIView.as_view(), name='guests'),
    path('sigle_guest/<phone_number>', getSingleGuestAPIView.as_view(), name='single_guest'),
    path('single_guest/', postSingleGuestAPIView.as_view(), name='post_guest'),
    path('send_invitations/', postGuestsSENDinvitationAPIView.as_view(), name='send_invitations'),
    path('songs/', getSongsAPIView.as_view(), name='songs'),
    path('gallery_images/<gallery_name>', getPicturesGalleryAPIView.as_view(), name='gallery'),
    path('donation/message/', CommentDonationsAPIView.as_view(), name='donation_message'),
]