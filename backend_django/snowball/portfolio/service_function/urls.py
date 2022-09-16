from django.urls import path, include
from portfolio.service_function.apis import *

from rest_framework import routers

# portfolioInfo_basic = PortfolioInfoApi.as_view({
#     'get': 'list',
#     'post': 'create'
# })

# portfolioInfo_detail = PortfolioInfoApi.as_view({
#     'get': 'retrieve',
# })
ServiceRouter = routers.DefaultRouter()
ServiceRouter.register(r'user', UserAPI)

urlpatterns =[
]