# Generated by Django 3.2.3 on 2021-05-26 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210514_2017'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='balance',
            field=models.DecimalField(decimal_places=2, default='0.00', max_digits=50),
        ),
    ]
