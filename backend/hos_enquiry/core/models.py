from django.db import models
from account.models import UserAccount as User
from django.dispatch import receiver
from django.db.models.signals import post_save
from multiselectfield import MultiSelectField
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
    name = models.CharField(max_length=100, default="DoctorName")
    email = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='default.jpg')
    rating = models.PositiveSmallIntegerField(choices=rate, default=5)
    education = models.CharField(
        max_length=200, default="Description/Education")
    description = models.TextField(default="Description of Doctor")
    speciality = MultiSelectField(
        choices=speciality_choices, max_length=100, blank=True)

    def __str__(self):
        return self.name

    def specialised(self):
        return "-".join([str(p) for p in self.speciality.all()])


def create_profile(sender, instance, created, **kwargs):
    if created:
        Doctor.objects.create(email=instance)


post_save.connect(create_profile, sender=User)

""" 
class Specialities(models.Model):
    user = models.ManyToManyField(User)
    speciality = models.CharField(max_length=200)

    def specialised(self):
        return "-".join([str(p) for p in self.user.all()])
 """


class Schedule(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    day = models.CharField(max_length=50, default='')
    open = models.TimeField()
    close = models.TimeField()
