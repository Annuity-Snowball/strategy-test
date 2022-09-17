from django.urls import path, include
from portfolio.logic_functions.apis import *

from rest_framework import routers

# portfolioInfo_basic = PortfolioInfoApi.as_view({
#     'get': 'list',
#     'post': 'create'
# })

# portfolioInfo_detail = PortfolioInfoApi.as_view({
#     'get': 'retrieve',
# })
portfolioRouter = routers.DefaultRouter()
portfolioRouter.register(r'portfolio_info', PortfolioInfoApi)
portfolioRouter.register(r'product_info', ProductInfoApi)
portfolioRouter.register(r'portfolioTempresult', PortfolioTempResultApi)
portfolioRouter.register(r'portfolio_info_temp', PortfolioTempApi)

urlpatterns =[
]