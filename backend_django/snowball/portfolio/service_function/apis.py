from django.shortcuts import render
from .serializers import UserSerializer
from portfolio.models import User
from rest_framework import viewsets
# from rest_framework import generics

# 회원가입
class UserAPI(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer