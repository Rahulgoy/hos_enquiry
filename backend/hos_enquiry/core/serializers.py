from rest_framework import serializers
from .models import Doctor, Schedule, Specialities


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'email', 'image', 'rating', 'education']


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['doctor', 'day', 'open', 'close']


class SpecialitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialities
        fields = ['speciality', 'specialised']
