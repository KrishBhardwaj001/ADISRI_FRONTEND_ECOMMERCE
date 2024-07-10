# Generated by Django 5.0.6 on 2024-07-09 06:40

import Products.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0003_alter_product_subject'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='Page10_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page11_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page12_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page13_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page14_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page15_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page16_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page17_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page4_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page5_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page6_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page7_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page8_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AddField(
            model_name='book',
            name='Page9_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AlterField(
            model_name='book',
            name='Index_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AlterField(
            model_name='book',
            name='Page1_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AlterField(
            model_name='book',
            name='Page2_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
        migrations.AlterField(
            model_name='book',
            name='Page3_Image',
            field=models.ImageField(blank=True, null=True, upload_to=Products.models.book_image_upload_path),
        ),
    ]