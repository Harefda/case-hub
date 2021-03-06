# Generated by Django 3.2.3 on 2021-05-26 16:43

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0002_auto_20210519_1907'),
    ]

    operations = [
        migrations.AddField(
            model_name='case',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='case',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='case',
            name='update',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
