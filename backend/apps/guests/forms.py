from django import forms
from apps.guests.models import gallery

class GalleryForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['pictures'] = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}))
    
    class Meta:
        model = gallery
        fields = '__all__'
