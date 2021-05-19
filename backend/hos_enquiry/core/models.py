from django.db import models
from account.models import UserAccount as User
from django.dispatch import receiver
from django.db.models.signals import post_save
from multiselectfield import MultiSelectField
# Create your models here.
speciality_choices = (
    ('Cardiologist', 'Cardiologist'),
    ('Skin Specialist', 'Skin Specialist'),
    ('Dentist', 'Dentist'),
    ('ENT', 'ENT'),
    ('Gynaecologist', 'Gynaecologist'),
    ('Paediatrician', 'Paediatrician'),
    ('General physician', 'General physician'),
    ('Radiologist', 'Radiologist'),
    ('Ophthalmalogist', 'Ophthalmalogist'),
    ('Oncologist', 'Oncologist'),
    ('Neurologist', 'Neurologist'),
    ('Orthopadics', 'Orthopadics'),

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
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=100,)
    image = models.ImageField(blank=True, default='default.jpg')
    rating = models.PositiveSmallIntegerField(choices=rate, default=5)
    education = models.CharField(
        max_length=200, default="Education")
    description = models.TextField(default="Description of Doctor")
    speciality = models.TextField(
        max_length=500, blank=True)

    def __str__(self):
        return self.name

    def specialised(self):
        return "-".join([str(p) for p in self.speciality.all()])


def create_profile(sender, instance, created, **kwargs):
    """ print(sender.email)
    print(instance.name)
    print(instance.email) """
    if created:
        Doctor.objects.create(email=instance.get_email(),
                              name=instance.get_full_name(), user=instance)


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


class SearchImages(models.Model):
    name = models.CharField(max_length=100, default="Image", blank=True)
    key = models.CharField(max_length=100, blank=True)
    img = models.ImageField(blank=True, default='default.jpg')

    def __str__(self):
        return self.name
