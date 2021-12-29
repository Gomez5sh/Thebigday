from django.db import models

# Create your models here.
class BaseModel(models.Model):

    # Define fields here
    id = models.AutoField(primary_key = True)
    state = models.BooleanField('Estado', default = True)
    created_date = models.DateField('Fecha de Creación', auto_now=False, auto_now_add=True)
    modified_date = models.DateField('Fecha de Modificacíon', auto_now=True, auto_now_add=False)
    deleted_date = models.DateField('Fecha de Eliminacíon', auto_now=True, auto_now_add=False)
    
    class Meta:
        abstract = True
        verbose_name = 'Modelo Base'
        verbose_name_plural = 'Modelos Base'

