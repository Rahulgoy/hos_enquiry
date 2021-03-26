from django.contrib import admin
from .models import Doctor, Schedule, Specialities
# Register your models here.


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'image', 'rating', 'education']


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ['doctor', 'open', 'close']


@admin.register(Specialities)
class SpecialitiesAdmin(admin.ModelAdmin):
    list_display = ['speciality', 'specialised']
