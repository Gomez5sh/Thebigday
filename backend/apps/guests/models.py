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

