from django.contrib import admin
from apps.guests.models import Guests, Songs, gallery, picture
from import_export.admin import ImportExportActionModelAdmin
from apps.guests.forms import GalleryForm
from django.dispatch import receiver
from .utils import Util


# Register your models here.

@admin.register(Guests)
class ImportGuestsViewAdmin(ImportExportActionModelAdmin):
    pass

admin.site.register(Songs)

# @receiver(post_import, dispatch_uid='balabala...')
# def _post_import(model, **kwargs):
#     for guest  in model.objects.all():
#         sms_body = f"Hola {guest.first_name} {guest.second_name} has sido invitado a la boda "
#         sms_body += "David Peralta."
#         print(guest.phone_number)
#         print(sms_body)
        # Util.send_sms(sms_body, guest.phone_number)



@admin.register(gallery)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title',)
    add_form_template = 'admin/post_form.html'
    change_form_template = 'admin/post_form.html'

    def get_form(self, request, obj=None, **kwargs):
        try:
            instance = kwargs['instance']
            return GalleryForm(instance=instance)
        except KeyError:
            return GalleryForm
    
    def add_view(self, request, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context['form'] = self.get_form(request)
        return super(PostAdmin, self).add_view(request, form_url=form_url, extra_context=extra_context)
    
    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        post = gallery.objects.get(id=object_id)
        extra_context["form"] = self.get_form(request, instance=post)
        return super(PostAdmin, self).change_view(request, object_id, form_url=form_url, extra_context=extra_context)

    def save_model(self, request, obj, form, change):
        obj.save()
        pictures = request.FILES.getlist('pictures')
        for pic in pictures:
            picture.objects.create(gallery=obj, file=pic)
        return super().save_model(request, obj, form, change)
