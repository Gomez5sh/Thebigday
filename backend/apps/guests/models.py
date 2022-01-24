from distutils.command.upload import upload
from tabnanny import verbose
from django.db import models
from django.db.models.fields import BLANK_CHOICE_DASH

# Create your models here.

class Guests(models.Model):
    first_name = models.CharField('Primer nombre', max_length=80, null=False, blank=False)
    second_name = models.CharField('Segundo nombre', max_length=80, null=True, blank=True)
    last_name = models.CharField('Primer apellido', max_length=80, null=False, blank=False)
    sec_last_name = models.CharField('Segundo apellido', max_length=80, null=True, blank=True)
    email = models.EmailField('Correo Electronico', max_length=255, null=True, unique=True)
    phone_number = models.CharField('Número Celular',max_length=255, blank=False, null=False, unique=True)
    family_group = models.CharField('Grupo familiar', max_length=80, blank=False, null=False)

    class Meta:
        verbose_name = 'Importar invitador'
        verbose_name_plural = 'Importaciones invitados'
    
    def __str__(self):
       return f'{self.phone_number} {self.first_name} {self.last_name} ID = {self.id}'


class Songs(models.Model):
    title = models.CharField('Titulo', max_length=255, null=False, blank=False)
    artist = models.CharField('Artista', max_length=255, null=False, blank=False)
    image = models.ImageField('Imagen', upload_to='backend/static/images/songs', null=True, blank=True)
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
    file = models.ImageField('Imagen', upload_to='backend/static/images/pictures', null=True, blank=True)

class DonationMessajes(models.Model):
    full_name = models.CharField('Nombre Completo', max_length=255, null=False, blank=False)
    message = models.TextField('Mensaje', blank=False)
    relationship = models.CharField('Relacion', max_length=255, null=False, blank=False)
    class Meta:
        verbose_name = 'Comentario'
        verbose_name_plural = 'Comentarios'

    def __str__(self):
        return f'{self.full_name} {self.message}'

class singleImages(models.Model):
    file = models.ImageField('Imagen', upload_to='backend/static/images/bigStory', null=False, blank=False)
    date = models.DateField('Fecha', auto_now_add=True, blank=False)
    title = models.CharField('Titulo', max_length=255, blank=False)
    message = models.TextField('Mensaje', blank=False)


class formConfirmation(models.Model):
    vaccine_choices = [
        ('n_dose', 'Sin dosis'),
        ('f_dose', 'Primera dosis'),
        ('s_dose', 'Segunda dosis'),
        ('t_dose', 'Tercera dosis'),
    ]
    guest = models.ForeignKey(to = Guests, on_delete=models.CASCADE)
    vaccine = models.CharField(max_length=6, choices=vaccine_choices, blank=False, null=False)
    vaccine_card = models.ImageField('Carnet Vacunacion', upload_to='backend/static/images/vaccine_card', null=False, blank=False)
    own_symptons = models.BooleanField(default=False)
    near_symptons = models.BooleanField(default=False)
    contact_covid_person = models.BooleanField(default=False)
    has_fever = models.BooleanField(default=False)
    additional_info = models.TextField('Texto adicional', blank=True)


    class Meta:
        verbose_name = 'Formulario COVID'
        verbose_name_plural = 'Formulario COVID'



