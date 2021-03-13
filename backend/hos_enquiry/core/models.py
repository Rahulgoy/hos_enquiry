from django.db import models

# Create your models here.
speciality_choices = (
    ('Cardiologist', 'Cardiologist'),
    ('Audiologist', 'Audiologist'),
    ('Dentist', 'Dentist'),
    ('ENT', 'ENT'),
    ('Gynaecologist', 'Gynaecologist'),
    ('Orthopaedic', 'Orthopaedic'),
    ('Paediatrician', 'Paediatrician'),
    ('Psychiatrists', 'Psychiatrists'),
    ('Veterinarian', 'Veterinarian'),
    ('Radiologist', 'Radiologist'),
    ('Pulmonologist', 'Pulmonologist'),
    ('Endocrinologist', 'Endocrinologist'),
    ('Oncologist', 'Oncologist'),
    ('Neurologist', 'Neurologist'),
    ('Cardiothoracic', 'Cardiothoracic'),

)
rate = (
    (1, 'one'),
    (2, 'two'),
    (3, 'three'),
    (4, 'four'),
    (5, 'five'),
)


class Profile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    image = models.ImageField()
    """ speciality = models.MultipleCho """
    rating = models.PositiveSmallIntegerField(choices=rate)
    education = models.CharField(max_length=200)

    def __str__(self):
        return self.name
