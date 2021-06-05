# Generated by Django 3.2.3 on 2021-05-16 12:39

from django.db import migrations, models
import items.utils


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=items.utils.get_item_upload_image_path),
        ),
        migrations.AlterField(
            model_name='item',
            name='name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
