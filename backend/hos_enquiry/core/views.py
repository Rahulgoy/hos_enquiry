from django.shortcuts import render
from .models import Doctor, Specialities, Schedule
from .serializers import DoctorSerializer, SpecialitiesSerializer, ScheduleSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class DoctorLC(ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DoctorRUD(RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SpecialitiesLC(ListCreateAPIView):
    queryset = Specialities.objects.all()
    serializer_class = SpecialitiesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SpecialitiesRUD(RetrieveUpdateDestroyAPIView):
    queryset = Specialities.objects.all()
    serializer_class = SpecialitiesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ScheduleLC(ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ScheduleRUD(RetrieveUpdateDestroyAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
