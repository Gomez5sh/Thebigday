from django.urls import path
from django.urls.resolvers import URLPattern
from apps.guests.api.api import getGuestsAPIView, getSingleGuestAPIView

urlpatterns = [
    path('guests/', getGuestsAPIView.as_view(), name='guests'),
    path('sigle_guest/<phone_number>', getSingleGuestAPIView.as_view(), name='single_guest')
]