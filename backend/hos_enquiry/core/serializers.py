from rest_framework import serializers
from .models import Doctor, Schedule, SearchImages


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'email', 'image',
                  'rating', 'education', 'description', 'speciality']


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'doctor', 'day', 'open', 'close']


class SearchImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchImages
        fields = ['id', 'name', 'img']


""" 
class SpecialitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialities
        fields = ['speciality', 'specialised']
 """
