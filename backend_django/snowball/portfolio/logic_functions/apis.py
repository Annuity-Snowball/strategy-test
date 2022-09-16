from portfolio.models import User, Portfolio_info, Product_info, Portfolio_result
from portfolio.logic_functions.serializers import PortfolioInfoSerializer, UserSerializer, ProductInfoSerializer, PortfolioResultSerializer
from rest_framework import viewsets     
from rest_framework import permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

class UserApi(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = [permissions.IsAuthenticated]
    
@method_decorator(csrf_exempt,name='dispatch')
class PortfolioInfoApi(viewsets.ModelViewSet):
    queryset = Portfolio_info.objects.all()
    serializer_class = PortfolioInfoSerializer
    permission_class = [permissions.IsAuthenticated]
    
    @login_required
    def list(self, request):
        queryset = self.get_queryset()
        serializer = PortfolioInfoSerializer(queryset, many=True)
        return Response(serializer.data)
    
    @login_required
    def create(self, request):
        serializer = PortfolioInfoSerializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(PortfolioInfoSerializer(rtn).data, status=status.HTTP_201_CREATED)
        pass
    
    @login_required
    def retrieve(self, request, pk=None):
        # user_id 세션에서 받기
        queryset = self.queryset.filter(user_id=pk).all()
        serializer = PortfolioInfoSerializer(queryset, many=True)
        return Response(serializer.data)
    
  
@method_decorator(csrf_exempt,name='dispatch')  
class ProductInfoApi(viewsets.ModelViewSet):
    queryset = Product_info.objects.all()
    serializer_class = ProductInfoSerializer
    permission_class = [permissions.AllowAny]
    
    @login_required
    def list(self, request):
        queryset = self.get_queryset()
        serializer = ProductInfoSerializer(queryset, many=True)
        return Response(serializer.data)

    @login_required    
    def create(self, request):
        serializer = ProductInfoSerializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(ProductInfoSerializer(rtn).data, status=status.HTTP_201_CREATED)
        pass
    
    @login_required
    def retrieve(self, request, pk=None):
        # user_id 세션에서 받기
        queryset = self.queryset.filter(portfolio_id=pk).all()
        serializer = ProductInfoSerializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(methods=['post'], detail=False, url_path='multiple/create')
    def multiple_create(self, request, *args, **kwargs):
        for data in request.data:
            print(data)
            serializer = self.get_serializer(data = data)
            serializer.is_valid(raise_exception=True)
            self.create(serializer)
        return super().list(self, request, *args, **kwargs)
   
@method_decorator(csrf_exempt,name='dispatch')     
class PortfolioResultApi(viewsets.ModelViewSet):
    queryset = Portfolio_result.objects.all()
    serializer_class = PortfolioResultSerializer
    permission_class = [permissions.IsAuthenticated]
    
    @login_required
    def create(self, request):
        serializer = PortfolioResultSerializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(PortfolioResultSerializer(rtn).data, status=status.HTTP_201_CREATED)
        pass
    
# class complexApi(viewsets.ModelViewSet):
    