from django.contrib import admin
from .models import Doctor, Schedule, SearchImages
# Register your models here.


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'image',
                    'rating', 'education', 'description', 'speciality']


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ['id', 'doctor', 'day', 'open', 'close']


@admin.register(SearchImages)
class SearchImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'key', 'img']


""" @admin.register(Specialities)
class SpecialitiesAdmin(admin.ModelAdmin):
    list_display = ['speciality', 'specialised']
 """
