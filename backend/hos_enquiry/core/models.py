from django.db import models
from account.models import UserAccount as User
from django.dispatch import receiver
from django.db.models.signals import post_save
import weekday_field
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


class Doctor(models.Model):
    name = models.CharField(max_length=100)
    email = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True)
    rating = models.PositiveSmallIntegerField(choices=rate)
    education = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Specialities(models.Model):
    user = models.ManyToManyField(User)
    speciality = models.CharField(max_length=200)

    def specialised(self):
        return "\n".join([str(p) for p in self.user.all()])


class Schedule(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    day = models.CharField(max_length=50, default='')
    open = models.TimeField()
    close = models.TimeField()
