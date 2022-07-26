from dataclasses import field, fields
from django.contrib.auth.models import User
from portfolio.models import User, Portfolio_info, Product_info, Portfolio_result_temp
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Customizes JWT default Serializer to add more information about user"""
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.name
        token['email'] = user.email

        return token

### user serializer ###

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
        
### portfolio serializer ### 
    
class PortfolioInfoSerializer(serializers.Serializer): 
    portfolio_name = serializers.CharField(max_length=50)
    strategy_number = serializers.CharField(max_length=100)
    start_date = serializers.CharField(max_length=100)
    end_date = serializers.CharField(max_length=100)
    rebalancing_duration = serializers.CharField(max_length=100)
    input_money = serializers.CharField(max_length=100)
    input_way = serializers.CharField(max_length=100)
    user_id = serializers.CharField(max_length=100)
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Portfolio_info
        fields = ('portfolio_name', 'strategy_number', 'start_date', 'end_date', 'rebalancing_duration', 'input_money', 'input_way', 'user', 'user_id')
    
    def create(self, request, data, commit=True):
        instance = Portfolio_info()        
        
        # 아이디값을 세션에서 얻어야할 듯.
        # users = User.objects.filter(id=request.user.id).first()
        temp_user_id = data.get("user_id")
        users = User.objects.filter(id=int(temp_user_id)).first()
        
        instance.user = users
        
        instance.portfolio_name = data.get("portfolio_name")
        instance.strategy_number = data.get("strategy_number")
        instance.start_date = data.get("start_date")
        instance.end_date = data.get("end_date")
        instance.rebalancing_duration = data.get("rebalancing_duration")
        instance.input_money = data.get("input_money")
        instance.input_way = data.get("input_way")
        
        if commit:
            try:
                instance.save()
            except Exception as e:
                print(e)
        return instance  
    
class ProductInfoSerializer(serializers.Serializer):
    temp_id = serializers.CharField(max_length=100)
    first_group = serializers.CharField(max_length=100)
    second_group = serializers.CharField(max_length=100)
    third_group = serializers.CharField(max_length=100)
    name = serializers.CharField(max_length=100)
    number = serializers.CharField(max_length=100)
    rate = serializers.CharField(max_length=100)
    upper = serializers.CharField(max_length=100, default="0")
    lower = serializers.CharField(max_length=100, default="0")
    portfolio = PortfolioInfoSerializer(read_only=True) 
    
    class Meta:
        model = Product_info
        # fields = ['first_group', 'second_group', 'third_group', 'detail', 'portfolio', 'rate']
        fileds = '__all__'
    
    def create(self, request, data, commit=True):
        instance = Product_info()
        
        instance.temp_id = data.get("temp_id")
        instance.first_group = data.get("first_group")
        instance.second_group = data.get("second_group")
        instance.third_group = data.get("third_group")
        instance.name = data.get("name")
        instance.number = data.get("number")
        instance.rate = data.get("rate")
        instance.upper = data.get("upper")
        instance.lower = data.get("lower")
         
        portfolios = Portfolio_info.objects.filter(id=instance.temp_id).first()
        instance.portfolio = portfolios
        
        if commit:
            try:
                instance.save()
            except Exception as e:
                print(e)
        return instance 

# class PortfolioResultSerializer(serializers.Serializer):
#     result_money = serializers.CharField(max_length=100)
#     accumulate_return_rate = serializers.CharField(max_length=100)
#     annual_average_return_rate = serializers.CharField(max_length=100)
#     annual_highest_return_rate = serializers.CharField(max_length=100)
#     annual_lowest_return_rate = serializers.CharField(max_length=100)
#     accept_period = serializers.CharField(max_length=100)
#     accept_money = serializers.CharField(max_length=100)
#     win_rate = serializers.CharField(max_length=100)
#     mdd = serializers.CharField(max_length=100)
#     lisk = serializers.CharField(max_length=100)
#     benefits = serializers.CharField(max_length=100)
#     logic_info = PortfolioInfoSerializer(read_only=True)
    
#     class Meta:
#         model = Portfolio_result
#         fields = ['result_money', 'accumulate_return_rate', 'annual_average_return_rate', 'annual_highest_return_rate', 'annual_lowest_return_rate', 'accept_period', 'accept_money', 'win_rate', 'mdd', 'lisk', 'benefits']
        
#     def create(self, request, data, commit=True):
#         instance = Portfolio_result()
        
#         # 리퀘스트에서 받아야하는데....
#         logic_infos = Portfolio_info.objects.filter(id=request.portfolio.id).first()
        
#         instance.logic_info = logic_infos
        
#         instance.result_money = data.get("result_money")
#         instance.accumulate_return_rate = data.get("accumulate_return_rate")
#         instance.annual_average_return_rate = data.get("annual_average_return_rate")
#         instance.annual_highest_return_rate = data.get("annual_highest_return_rate")
#         instance.annual_lowest_return_rate = data.get("annual_lowest_return_rate")
#         instance.accept_period = data.get("accept_period")
#         instance.accept_money = data.get("accept_money")
#         instance.win_rate = data.get("win_rate")
#         instance.mdd = data.get("mdd")
#         instance.lisk = data.get("lisk")
#         instance.benefits = data.get("benefits")
        
#         if commit:
#             try:
#                 instance.save()
#             except Exception as e:
#                 print(e)
#         return instance 

class PortfolioTempResultSerializer(serializers.Serializer):
    class Meta:
        model = Portfolio_result_temp
        fields = '__all__'


class ProductTempSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_info
        fields = '__all__'
        read_only_fields = ('portfolio',)
        
class PortfolioTempSerializer(serializers.ModelSerializer): 
    Product_info_set = ProductTempSerializer(many=True, read_only=True)
    Product_info_count = serializers.IntegerField(source='Product_info_set.count', read_only=True)
    
    class Meta:
        model = Portfolio_info
        fields = ('id', 'portfolio_name', 'strategy_number', 'start_date', 'end_date', 'rebalancing_duration', 'input_money', 'input_way', 'user', 'Product_info_count', 'Product_info_set')
        
class test_portfolioInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_info
        fields = '__all__'
        
# class PortfolioInfoResultSerialzer(serialzers.ModelSerializer):
#     information = test_portfolioInfoSerializer(read_on)
        
    