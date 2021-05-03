from django.urls import path
from .views import DoctorLC, DoctorRUD, ScheduleLC, ScheduleRUD

urlpatterns = [
    path('profile/', DoctorLC.as_view()),
    path('profile/<int:pk>/', DoctorRUD.as_view()),
    path('schedule/', ScheduleLC.as_view()),
    path('schedule/<int:pk>/', ScheduleRUD.as_view()),
]
