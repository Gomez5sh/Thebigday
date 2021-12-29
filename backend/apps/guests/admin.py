from django.contrib import admin
from apps.guests.models import Guests
from import_export.admin import ImportExportActionModelAdmin

# Register your models here.

@admin.register(Guests)
class ImportGuestsViewAdmin(ImportExportActionModelAdmin):
    pass
