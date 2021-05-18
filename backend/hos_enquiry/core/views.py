from django.shortcuts import render
from .models import Doctor, Schedule, SearchImages
from .serializers import DoctorSerializer, ScheduleSerializer, SearchImageSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny


class DoctorLC(ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]


class DoctorRUD(RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]


""" class SpecialitiesLC(ListCreateAPIView):
    queryset = Specialities.objects.all()
    serializer_class = SpecialitiesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SpecialitiesRUD(RetrieveUpdateDestroyAPIView):
    queryset = Specialities.objects.all()
    serializer_class = SpecialitiesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
 """


class ScheduleLC(ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [AllowAny]


class ScheduleRUD(RetrieveUpdateDestroyAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [AllowAny]


class SearchImageLC(ListCreateAPIView):
    queryset = SearchImages.objects.all()
    serializer_class = SearchImageSerializer
    permission_classes = [AllowAny]


class SearchImageRUD(RetrieveUpdateDestroyAPIView):
    queryset = SearchImages.objects.all()
    serializer_class = SearchImageSerializer
    permission_classes = [AllowAny]
