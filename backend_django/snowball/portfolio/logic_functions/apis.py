from portfolio.models import User, Portfolio_info, Product_info, Portfolio_result
from portfolio.logic_functions.serializers import PortfolioInfoSerializer, UserSerializer, ProductInfoSerializer, PortfolioResultSerializer, calc_serializer
from rest_framework import viewsets     
from rest_framework.renderers import JSONRenderer 
from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from portfolio.core.core_code import backed_core

class UserApi(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = [permissions.IsAuthenticated]
        
  
# @method_decorator(csrf_exempt,name='dispatch')  
class ProductInfoApi(viewsets.ModelViewSet):
    queryset = Product_info.objects.all()
    serializer_class = ProductInfoSerializer
    permission_class = [permissions.AllowAny]
    
    # @login_required
    def list(self, request):
        queryset = self.get_queryset()
        serializer = ProductInfoSerializer(queryset, many=True)
        return Response(serializer.data)

    # @login_required    
    def create(self, request):
        serializer = ProductInfoSerializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(ProductInfoSerializer(rtn).data, status=status.HTTP_201_CREATED)
        else:
            print("this is product create failure")
        pass
    
    # @login_required
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
    
# @method_decorator(csrf_exempt,name='dispatch')
class PortfolioInfoApi(viewsets.ModelViewSet):
    queryset = Portfolio_info.objects.all()
    serializer_class = PortfolioInfoSerializer
    permission_class = [permissions.IsAuthenticated]
    
    # @login_required
    def list(self, request):
        queryset = self.get_queryset()
        serializer = PortfolioInfoSerializer(queryset, many=True)
        return Response(serializer.data)
    
    # @login_required
    def create(self, request):
        serializer = PortfolioInfoSerializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(PortfolioInfoSerializer(rtn).data, status=status.HTTP_201_CREATED)
        pass
    
    # @login_required
    def retrieve(self, request, pk=None):
        # user_id 세션에서 받기
        queryset = self.queryset.filter(user_id=pk).all()
        serializer = PortfolioInfoSerializer(queryset, many=True)
        return Response(serializer.data)
    
    # 꼭 저장을 이걸로 해야했을까....??????
    # 이걸로 처리를 해보자
    @action(methods=['post'], detail=False, url_path='allinone/create')
    def allinone_create(self, request, *args, **kwargs):
        portfolio_name=None # clear
        strategy_count=None # clear
        start_time=None # clear
        end_time=None # clear
        rebalance_cycle=None # clear
        input_type=None # clear
        input_money=None # clear
        variable_strategy_list=list()
        variable_product_list=list()
        
        for i,data in enumerate(request.data):
            if i == 0:
                serializer = self.get_serializer(data = data)
                serializer.is_valid(raise_exception=True)
                portfolio_name = serializer.validated_data['portfolio_name']
                strategy_count=serializer.validated_data['strategy_number']
                start_time=serializer.validated_data['start_date']
                end_time=serializer.validated_data['end_date']
                rebalance_cycle=serializer.validated_data['rebalancing_duration']
                input_money=serializer.validated_data['input_money']
                input_type=serializer.validated_data['input_way']
            else:
                serializer = ProductInfoSerializer(data = data)
                serializer.is_valid(raise_exception=True)
                
                temp1 = {
                    "strategy_kind": serializer.validated_data['name'],
                    "strategy_count": int(serializer.validated_data['number']),
                    "strategy_upper":int(serializer.validated_data['upper']),
                    "strategy_lower":int(serializer.validated_data['lower']),
                    }
                variable_strategy_list.append(temp1)
                
                temp2 = {
                    "strategy_rate":int(serializer.validated_data['rate']),
                }
                variable_product_list.append(temp2)
                        
        temp_return = backed_core(
            portfolio_name=portfolio_name, #string
            strategy_count=int(strategy_count), #int
            start_time=start_time, #string
            end_time=end_time, #string
            rebalance_cycle=int(rebalance_cycle), #int
            input_type=input_type, #string
            input_money=int(input_money), #int
            variable_strategy_list=variable_strategy_list, #[string, int, int, int]
            variable_product_list=variable_product_list #[int]
        )
        print(temp_return)
        return Response(temp_return)
        # return super().list(self, request, *args, **kwargs)
   
@method_decorator(csrf_exempt,name='dispatch')     
class PortfolioResultApi(viewsets.ModelViewSet):
    queryset = Portfolio_result.objects.all()
    serializer_class = PortfolioResultSerializer
    permission_class = [permissions.IsAuthenticated]
    
    # @login_required
    def create(self, request):
        serializer = PortfolioResultSerializer(data=request.data)
        if serializer.is_valid():
            rtn = serializer.create(request, serializer.data)
            return Response(PortfolioResultSerializer(rtn).data, status=status.HTTP_201_CREATED)
        pass