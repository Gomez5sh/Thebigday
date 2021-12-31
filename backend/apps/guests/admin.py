from django.contrib import admin
from apps.guests.models import Guests
from import_export.admin import ImportExportActionModelAdmin

from django.dispatch import receiver
from import_export.signals import post_import
from .utils import Util


# Register your models here.

@admin.register(Guests)
class ImportGuestsViewAdmin(ImportExportActionModelAdmin):
    pass

@receiver(post_import, dispatch_uid='balabala...')
def _post_import(model, **kwargs):
    for guest  in model.objects.all():
        sms_body = f"Hola {guest.first_name} {guest.second_name} has sido invitado a la boda "
        sms_body += "David Peralta."
        print(guest.phone_number)
        print(sms_body)
        Util.send_sms(sms_body, guest.phone_number)
