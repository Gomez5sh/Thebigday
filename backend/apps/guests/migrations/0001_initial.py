# Generated by Django 3.1.6 on 2021-12-29 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Guests',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=80, verbose_name='Primer nombre')),
                ('second_name', models.CharField(blank=True, max_length=80, verbose_name='Segundo nombre')),
                ('last_name', models.CharField(max_length=80, verbose_name='Primer apellido')),
                ('sec_last_name', models.CharField(blank=True, max_length=80, verbose_name='Segundo apellido')),
                ('email', models.EmailField(max_length=255, null=True, verbose_name='Correo Electronico')),
                ('phone_number', models.CharField(max_length=255, verbose_name='Número Celular')),
            ],
            options={
                'verbose_name': 'Importar invitador',
                'verbose_name_plural': 'Importaciones invitados',
            },
        ),
    ]
