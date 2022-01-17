from distutils.command.upload import upload
from django.db import models
from django.db.models.fields import BLANK_CHOICE_DASH

# Create your models here.

class Guests(models.Model):
    first_name = models.CharField('Primer nombre', max_length=80, null=False, blank=False)
    second_name = models.CharField('Segundo nombre', max_length=80, null=True, blank=True)
    last_name = models.CharField('Primer apellido', max_length=80, null=False, blank=False)
    sec_last_name = models.CharField('Segundo apellido', max_length=80, null=True, blank=True)
    email = models.EmailField('Correo Electronico', max_length=255, null=True)
    phone_number = models.CharField('Número Celular',max_length=255, blank=False, null=False, unique=True)

    class Meta:
        verbose_name = 'Importar invitador'
        verbose_name_plural = 'Importaciones invitados'
    
    def __str__(self):
       return f'{self.phone_number} {self.first_name} {self.last_name}'


class Songs(models.Model):
    title = models.CharField('Titulo', max_length=255, null=False, blank=False)
    artist = models.CharField('Artista', max_length=255, null=False, blank=False)
    image = models.ImageField('Imagen', upload_to='static/images/songs', null=True, blank=True)
    song_url = models.URLField('URL de la cancion', max_length=255, null=True, blank=True)
    duration = models.CharField('Duración', max_length=255, null=False, blank=False)
    lyrics = models.TextField('Letra', blank=True)

    class Meta:
        verbose_name = 'Canción'
        verbose_name_plural = 'Canciones'

    def __str__(self):
        return f'{self.title}'

class gallery(models.Model):
    title = models.CharField('Titulo galeria', max_length=255, null=False, blank=False)

class picture(models.Model):
    gallery = models.ForeignKey(to = gallery, on_delete=models.CASCADE)
    file = models.ImageField('Imagen', upload_to='static/images/pictures', null=True, blank=True)
