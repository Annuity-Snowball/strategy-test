from django.db import models
from django.contrib.auth.models import User as U
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.

class TimeStampedModel(models.Model):
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

class UserManager(BaseUserManager):
    # 일반 user 생성
    def create_user(self, email, nickname, name, password=None):
        if not email:
            raise ValueError('must have user email')
        if not nickname:
            raise ValueError('must have user nickname')
        if not name:
            raise ValueError('must have user name')
        user = self.model(
            email = self.normalize_email(email),
            nickname = nickname,
            name = name
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    def create_superuser(self, email, nickname, name, password=None):
        user = self.create_user(
            email,
            password = password,
            nickname = nickname,
            name = name
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(default='', max_length=100, null=False, blank=False, unique=True)
    nickname = models.CharField(default='', max_length=100, null=False, blank=False, unique=True)
    name = models.CharField(default='', max_length=100, null=False, blank=False)
    
    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)
    
    # 헬퍼 클래스 사용
    objects = UserManager()

    # 사용자의 username field는 nickname으로 설정
    USERNAME_FIELD = 'nickname'
    # 필수로 작성해야하는 field
    REQUIRED_FIELDS = ['email', 'name']

    def __str__(self):
        return self.nickname
    
class Portfolio_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=False)
    portfolio_name = models.CharField(max_length=50, unique=True)
    strategy_number = models.CharField(max_length=100)
    start_date = models.CharField(max_length=100)
    end_date = models.CharField(max_length=100)
    rebalancing_duration = models.CharField(max_length=100)
    input_money = models.CharField(max_length=100)
    input_way = models.CharField(max_length=100)
  
class Product_info(models.Model):
    portfolio = models.ForeignKey(Portfolio_info, on_delete=models.CASCADE, null=False)
    temp_id = models.CharField(max_length=100, default="0")
    first_group = models.CharField(max_length=100)
    second_group = models.CharField(max_length=100)
    third_group = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=1000, default="0") # 테이블 드랍을 안해서 디폴트 값이 있는데 추후 삭제할 것.
    rate = models.CharField(max_length=100, null=True, blank=True) # 테이블 드랍을 안해서 블랭크 값이 있는데 추후 삭제할 것.
    upper = models.CharField(max_length=30, null=True, blank=True)
    lower = models.CharField(max_length=30, null=True, blank=True)
    
  
# 결과금액, 누적수익율, 연평균수익율, MDD, 승률, 연최고수익률, 연최저수익률, 리스크, 수령기간, 수령금액, 세제혜택여부   
# class Portfolio_result(models.Model):
#     logic_info = models.OneToOneField(Portfolio_info, on_delete=models.CASCADE, null=True) #귀찮아서 일단 널 트루로 했는데 바꿔주기
#     result_money = models.CharField(max_length=100)
#     accumulate_return_rate = models.CharField(max_length=100)
#     annual_average_return_rate = models.CharField(max_length=100)
#     annual_highest_return_rate = models.CharField(max_length=100)
#     annual_lowest_return_rate = models.CharField(max_length=100)
#     accept_period = models.CharField(max_length=100)
#     accept_money = models.CharField(max_length=100)
#     win_rate = models.CharField(max_length=100)
#     mdd = models.CharField(max_length=100)
#     lisk = models.CharField(max_length=100)
#     benefits = models.CharField(max_length=100)

class Portfolio_result_temp(models.Model):
    logic_info = models.OneToOneField(Portfolio_info, on_delete=models.CASCADE, null=True) #귀찮아서 일단 널 트루로 했는데 바꿔주기
    recipt_money = models.CharField(max_length=100)
    recipt_period = models.CharField(max_length=100)
    recipt_benefit = models.CharField(max_length=100, default="0")
    