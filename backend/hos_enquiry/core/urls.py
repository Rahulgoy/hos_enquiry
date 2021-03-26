from django.urls import path
from .views import DoctorLC, DoctorRUD

urlpatterns = [
    path('profile/', DoctorLC.as_view()),
    path('profile/<int:pk>/', DoctorRUD.as_view()),
]
