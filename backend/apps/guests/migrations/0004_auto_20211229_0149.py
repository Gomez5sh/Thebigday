# Generated by Django 3.1.6 on 2021-12-29 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guests', '0003_auto_20211229_0128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guests',
            name='phone_number',
            field=models.CharField(max_length=255, unique=True, verbose_name='Número Celular'),
        ),
    ]
