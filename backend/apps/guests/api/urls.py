from django.urls import path
from django.urls.resolvers import URLPattern
from apps.guests.api.api import getGuestsAPIView, getSingleGuestAPIView
from apps.guests.api.api import postSingleGuestAPIView

urlpatterns = [
    path('guests/', getGuestsAPIView.as_view(), name='guests'),
    path('sigle_guest/<phone_number>', getSingleGuestAPIView.as_view(), name='single_guest'),
    path('single_guest/', postSingleGuestAPIView.as_view(), name='post_guest'),
]