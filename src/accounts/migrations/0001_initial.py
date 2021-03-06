# Generated by Django 3.2.3 on 2021-05-14 17:04

import accounts.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('name', models.TextField(unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('image', models.ImageField(upload_to=accounts.utils.get_user_upload_image_path)),
                ('is_superuser', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
    ]
