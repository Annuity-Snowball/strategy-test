from datetime import date, timedelta
import pymysql
import copy

from portfolio.core.dpys.getDatainfo import getDailyDateInfo, getPayInDateInfo, getRebalanceDateInfo, getYearlyDateInfo

from portfolio.core.dpys.portpolioVariables import get_portVariables, get_returns,get_winRate, get_mdd, receipt_simul,cal_receiptValue 

# db = pymysql.connect(host='localhost', port=3306, user='snowball_test', passwd='909012', db='snowball_database', charset='utf8') 
# snowball=db.cursor() 

class Portfolio():
    def __init__(self,portfolio_name,
                 strategy_count,
                 start_time,
                 end_time,
                 rebalance_cycle,
                 input_type,
                 input_money,
                 rate_list):
        self.portfolio_id='123456' 
        self.portfolio_name = portfolio_name
        
        if strategy_count<=5:
            self.strategy_count=strategy_count
        elif strategy_count>5: 
            print('error!') 

        self.strategy_ratio=list()
        for rate_dick in rate_list:
            strategy_ratio=rate_dick['strategy_rate']
            self.strategy_ratio.append(strategy_ratio)
            
        if sum(self.strategy_ratio)!=100:
            print('error') # 추후 수정 필요
            
        self.start_time=start_time
        self.end_time=end_time
        self.rebalance_cycle = rebalance_cycle
        self.input_type = input_type
        self.input_money = input_money
        
        pass 
    
    def returnToBacktest(self):
        return self.portfolio_id, self.strategy_ratio, self.start_time, self.end_time, self.rebalance_cycle, self.input_type, self.input_money
              
class Strategy():
    def __init__(self,strategy_kind, product_count_per_strategy, strategy_upper, strategy_lower):
        
        self.strategy_kind=strategy_kind
        self.product_count_per_strategy = product_count_per_strategy
        if self.strategy_kind == 'PER':
            self.per_min = strategy_upper
            self.per_max = strategy_lower
        
    def getProductListQuery(self):
        
        if self.strategy_kind == 'PER 저':
            self.sql_query='select product_date,product_ticker from product_evaluate order by per asc limit '+str(self.product_count_per_strategy)
        
        elif self.strategy_kind == 'PER 고':
            self.sql_query='select product_date,product_ticker from product_evaluate order by per desc limit '+str(self.product_count_per_strategy)
             
        elif self.strategy_kind == 'PER':
            self.sql_query='select product_date,product_ticker from product_evaluate where per >= '+self.per_min+' and per <='+self.per_max+' order by per asc limit '+str(self.product_count_per_strategy)
        
        elif self.strategy_kind == 'PBR 저':
            self.sql_query='select product_date,product_ticker from product_evaluate order by pbr asc limit '+str(self.product_count_per_strategy)
            
        elif self.strategy_kind == 'PBR 고':
            self.sql_query='select product_date,product_ticker from product_evaluate order by pbr desc limit '+str(self.product_count_per_strategy)
        pass
        
        return self.strategy_kind,self.sql_query

def backTesting(portfolio_id, strategy_ratio, portfolio_start_time, 
                portfolio_end_time, rebalance_cycle, input_type, input_money, 
                strategy_kinds, stratgy_sql_query_list, first_moneying, snowdata):
    input_date_list = list()
    rebalance_date_list = list()
    test_dates=getDailyDateInfo(portfolio_start_time, portfolio_end_time)
    test_start_rebalance_dates=getRebalanceDateInfo(portfolio_start_time, portfolio_end_time, input_type, rebalance_cycle)
    test_start_rebalance_input_money=first_moneying # sangsu_check 3 고정(마지막)
    default_test_start_rebalance_input_money = test_start_rebalance_input_money
    test_input_date_lists=getPayInDateInfo(portfolio_start_time, portfolio_end_time, input_type)
    tax_benfit_date_list = getYearlyDateInfo(portfolio_start_time, portfolio_end_time)
    input_money_count = 0
    input_money_to_portfolio=dict()
    
    snowball = snowdata
    
    for test_date in test_dates:
        if test_date in test_input_date_lists[1:]:
            input_money_count+=1
        input_money_to_portfolio[test_date] = input_money *input_money_count +test_start_rebalance_input_money
        
    for tax in range(2):
    
        tax_benefit_money = default_test_start_rebalance_input_money
        total_balance_account= dict()
        total_portfolio_account = dict()
        test_start_rebalance_input_money =  default_test_start_rebalance_input_money
        balance_amount = 0
        rebalance_date=None
        for test_date in test_dates:
            if (test_date in tax_benfit_date_list) and tax ==1:
                if tax_benefit_money >= 7000000:
                    tax_benefit_money = 7000000 * 0.165
                else:
                    tax_benefit_money *= 0.165
                balance_amount += tax_benefit_money
                tax_benefit_money =0
                
            if test_date in test_start_rebalance_dates:
                if test_date in test_input_date_lists and test_date != test_start_rebalance_dates[0]:
                    test_start_rebalance_input_money+=input_money
                    tax_benefit_money += input_money
                    
                rebalance_date=test_date
                portfolio_product_price = getPortfolioRebalanceProductPrice(stratgy_sql_query_list, strategy_kinds, rebalance_date, snowball)
                rebalance_balance_account,portfolio_product_count = getPortfolioRabalanceInfo(portfolio_product_price,test_start_rebalance_input_money+balance_amount,strategy_ratio,test_date)
                portfolio_rebalance_product_value=getPortfolioProductValue(portfolio_product_price,portfolio_product_count)
                portfolio_rebalance_strategy_value=getPortfolioStrategyValue(portfolio_rebalance_product_value)
                
                portfolio_rebalance_value=getPortfolioValue(portfolio_rebalance_strategy_value)
                total_portfolio_account[rebalance_date]=portfolio_rebalance_value[rebalance_date]
                
                total_balance_account[rebalance_date] = rebalance_balance_account[rebalance_date]
                balance_amount=0
                balance_amount+=total_balance_account[rebalance_date]
                
            elif test_date in test_input_date_lists:
                portfolio_product_price=getPortfolioProductPrice(portfolio_product_price, test_date, snowball)
                
                tax_benefit_money += input_money
                
                input_balance_account,new_portfolio_product_count=getPortfolioProductInfo(portfolio_product_price,input_money,strategy_ratio, test_date)
                
                portfolio_product_count = getPortfolioProductAccumulateCount(portfolio_product_count,new_portfolio_product_count)
                
                portfolio_product_value=getPortfolioProductValue(portfolio_product_price,portfolio_product_count)
                
                portfolio_strategy_value=getPortfolioStrategyValue(portfolio_product_value)
                
                portfolio_rebalance_value=getPortfolioValue(portfolio_strategy_value)
                total_portfolio_account[test_date]=portfolio_rebalance_value[test_date]
                last_date = list(total_portfolio_account.keys())[-1]
                test_start_rebalance_input_money=total_portfolio_account[last_date]
                
                total_balance_account=getBalaceAccumulate(input_balance_account,total_balance_account)
                
                balance_amount=total_balance_account[list(total_balance_account.keys())[-1]]
                
            else:
                portfolio_product_price=getPortfolioProductPrice(portfolio_product_price, test_date, snowball)
                portfolio_product_count=changeDateDictKey(portfolio_product_count,test_date)
                portfolio_product_value=getPortfolioProductValue(portfolio_product_price,portfolio_product_count)
                portfolio_strategy_value=getPortfolioStrategyValue(portfolio_product_value)
                portfolio_rebalance_value=getPortfolioValue(portfolio_strategy_value)
                total_portfolio_account[test_date]=portfolio_rebalance_value[test_date]
                last_date = list(total_portfolio_account.keys())[-1]
                test_start_rebalance_input_money=total_portfolio_account[last_date]
                
                total_balance_account[test_date] = balance_amount
        if tax == 0: 
            real_portfolio_account=getRealPortfolioValue(total_portfolio_account,total_balance_account) 
            portfolio_result = get_portVariables(real_portfolio_account,input_money_to_portfolio)
            portfolio_receipt = receipt_simul(portfolio_result,10)

        elif tax == 1:
            real_portfolio_account_tax_benefit=getRealPortfolioValue(total_portfolio_account,total_balance_account)
            portfolio_result_tax_benefit = get_portVariables(real_portfolio_account_tax_benefit,input_money_to_portfolio)
            portfolio_receipt_tax_benefit = receipt_simul(portfolio_result_tax_benefit,10)
    

    # print("*************** 세제혜택X ***************")
    # print()
    # print('포트폴리오 가치 추이(잔액포함0):',real_portfolio_account)
    # print()
    # print('포트폴리오 납입금액 추이:', input_money_to_portfolio)
    # print()
    # print('포트폴리오 결과 :',portfolio_result)
    # print()
    # print('포트폴리오 수령방법 :',portfolio_receipt)
    
    # print()
    # print("*************** 세제혜택0 ***************")
    # print()
    # print('포트폴리오 가치 추이(잔액포함0):',real_portfolio_account_tax_benefit)
    # print()
    # print('포트폴리오 납입금액 추이:', input_money_to_portfolio)
    # print()
    # print('포트폴리오 결과 :', portfolio_result_tax_benefit)
    # print()
    # print('포트폴리오 수령방법 :',portfolio_receipt_tax_benefit)
    
    return_value = {
        "input_money_portfolio":input_money_to_portfolio,
        "no_tax":{
            "real_portfolio_account":real_portfolio_account,
            "portfolio_result":portfolio_result,
            "portfolio_receipt":portfolio_receipt
        },
        "yes_tax":{
            "real_portfolio_account":real_portfolio_account_tax_benefit,
            "portfolio_result":portfolio_result_tax_benefit,
            "portfolio_receipt":portfolio_receipt_tax_benefit
        }
    }
    
    snowball.close() 
    
    return return_value
 
# 날짜지정이 안되어 있는 쿼리문에서 날짜를 지정하는 부분을 추가해서 반환하는 함수 - 리밸런싱 날짜들을 받자!
def getProductTicker(sql_query,interval_dates, snowball):
    product_ticker_infos=list()
    for interval_date in interval_dates:
        get_product_ticker_query=sql_query.split(' ')
        if get_product_ticker_query[4] == 'where':
            get_product_ticker_query.insert(5,"product_date = '"+str(interval_date)+"' and")
        else:
            get_product_ticker_query.insert(4,"where product_date = '"+str(interval_date)+"'") 
        get_product_ticker_query=" ".join(get_product_ticker_query)
        snowball.execute(get_product_ticker_query) 
        results=list(snowball.fetchall())
        for i in range(len(results)):
            results[i] = list(results[i]) 
            results[i][0] = str(results[i][0])             
        
        product_ticker_infos.append(results)
    return product_ticker_infos

def getProductPrice(product_date,product_ticker, snowball):
    sql_query = "select high_price from price_"+product_ticker+" where product_date='"+product_date+"'"

    snowball.execute(sql_query) 
    result=snowball.fetchone()
    result=list(result)
    result.insert(0,product_ticker) 
    return result
  
def getPortfolioProductPrice(portfolio_rebalance_product_price, test_date, snowball):
    product_price = copy.deepcopy(portfolio_rebalance_product_price)
    for strategy_kind_dict in product_price:
        for strategy_kind_key in strategy_kind_dict.keys():
            temp = strategy_kind_dict[strategy_kind_key] 
            if len(list(temp.keys())) ==0: 
                continue
            temp[test_date] = temp.pop(list(temp.keys())[0])
            for i,product_list in enumerate(temp[test_date]):
                temp[test_date][i] = getProductPrice(test_date,product_list[0], snowball)
    return product_price

def getPortfolioProductInfo(portfolio_product_price,input_money,strategy_ratio, test_date):
    portfolio_product_count=copy.deepcopy(portfolio_product_price)
    
    input_balance_account=dict()
    input_balance_account[test_date] = 0
    input_money_ratio=list()

    for i in strategy_ratio:
        input_money_ratio.append(i*input_money//100)
    for i,money in enumerate(input_money_ratio):
        product_price_dict = list(portfolio_product_count[i].values())[0]
        if len(list(product_price_dict)) <=0:
            input_balance_account[test_date] += money
            continue
        
        price_lists=product_price_dict[test_date] 
        money_to_price_list = money//len(price_lists)
        for price_list in price_lists:
            input_balance_account[test_date] += money_to_price_list % price_list[1]
            price_list[1] = int(money_to_price_list // price_list[1])
    return input_balance_account,portfolio_product_count
def getPortfolioProductAccumulateCount(Portfolio_rebalance_product_count,Portfolio_product_count):
    
    portfolio_rebalance_product_count = copy.deepcopy(Portfolio_rebalance_product_count)
    portfolio_product_count = copy.deepcopy(Portfolio_product_count)
    
    for i in range(len(portfolio_product_count)):
        product_strategy_key=list(portfolio_product_count[i].keys())[0]
        product_strategy_value=portfolio_product_count[i][product_strategy_key]
        if len(list(product_strategy_value))<=0: 
            continue 
        product_strategy_value_key=list(product_strategy_value.keys())[0] 
        
        rebalance_product_strategy_key=list(portfolio_rebalance_product_count[i].keys())[0]
        rebalance_product_strategy_value=portfolio_rebalance_product_count[i][rebalance_product_strategy_key]
        rebalance_product_strategy_value_key=list(rebalance_product_strategy_value.keys())[0]
        
        for i,product_list in enumerate(product_strategy_value[product_strategy_value_key]):
            product_list[1]+=rebalance_product_strategy_value[rebalance_product_strategy_value_key][i][1]
    return portfolio_product_count

def getPortfolioRebalanceProductPrice(stratgy_sql_query_list,strategy_kinds,rebalance_date, snowball):
    portfolio_rebalance_product_price = list()
    
    # '포트폴리오'를 구성하는 '전략종류' for 문이 돈다
    for i,sql_query in enumerate(stratgy_sql_query_list):
        # print()
        
        product_ticker_infos = getProductTicker(sql_query,[rebalance_date], snowball)
        # product_ticker_info 는 조회날짜 별로 전략에 따라 선택한 금융상품들의 티커의 정보를 담고 잇음
        # ex) product_ticker_infos = 
        # [
        #  [['2021-01-01', 'bank'], ['2021-01-01', 'energy'], ['2021-01-01', 'kospi']], 
        #  [['2021-02-01', 'bank'], ['2021-02-01', 'kospi'], ['2021-02-01', 'energy']], 
        #  [['2021-03-01', 'bank'], ['2021-03-01', 'kospi'], ['2021-03-01', 'energy']]
        # ]
        
        strategy_dict=dict() # key가 '전략명(전략종류)'등인 딕셔너리, '전략종류'가 바뀔 때마다 갱신을 해줘야 하므로 dict()로 초기화해주는 부분 필요
        
        product_dict=dict() # key가 '전략명(전략종류)'로 선택한 '금융상품'의 날짜' 인 딕셔러니
        
        # 3. 날짜에 대응하는 금융상품의 가격을 가져오는 부분 구현
        for product_ticker_info in product_ticker_infos:
            # print("product_ticker_info :",product_ticker_info)
            # ex) product_ticker_info = [['2021-01-01', 'bank'], ['2021-01-01', 'energy'], ['2021-01-01', 'kospi']]
            
            for product_date,product_ticker in product_ticker_info:
                # print('product_date, product_ticker :',product_date,product_ticker)
                
                # product_price_info 는 조회날짜 별로 전략에 따라 선택한 금융상품들의 가격의 정보를 담고 잇음
                product_price_info=getProductPrice(product_date,product_ticker, snowball)
                # print('product_price_info :',product_price_info)
                # ex) product_price_info = ['china', 5952.0]
                
                # key가 '전략명(전략종류)'로 선택한 '금융상품'의 날짜'인 딕셔러니 업데이트
                # key값이 product_date인 딕셔너리에 추가
                if product_date in product_dict:
                    product_dict[product_date].append(product_price_info)
                else: # 처음에는 key값이 product_date 인 딕셔너리가 없으니 생성을 해줘야 한다.
                    product_dict[product_date] = [product_price_info]
                    
        
        strategy_dict[strategy_kinds[i]]=product_dict #  key가 '전략명(전략종류)'등인 딕셔너리 업데이트
        
        
        # 이 부분을 통해서 for 문을 돌면서 '전략1','전략2' 등 전략들이 다 추가가 된다!
        portfolio_rebalance_product_price.append(strategy_dict)
    
    # 결과값을 반환!
    return portfolio_rebalance_product_price

# 리밸런싱 하는 날들에 새로 구매한 금융상품들과 그 개수를 반환, 잔액도 반환 - 리밸런싱에 사용
def getPortfolioRabalanceInfo(portfolio_rebalance_product_price,rebalance_input_money,strategy_ratio,test_date):
    
    portfolio_rebalance_product_count=copy.deepcopy(portfolio_rebalance_product_price)
    

    rebalance_balance_account=dict() # 일자별 잔액현황 선언
    rebalance_balance_account[test_date] =0 # 일자별 잔액현황 초기화
    input_money_ratio=list()
    for amount in strategy_ratio:
        input_money_ratio.append(amount*rebalance_input_money//100)

    # print('input_money_ratio :',input_money_ratio)
    # for i,input_money_ratio in enumerate(input_money_ratio_list): # input_money_ratio_list 는 [[400000, 600000], [800000, 1200000], [1200000, 1800000]] 
        #전략별로 반복
    for j,strategy_kind_money in enumerate(input_money_ratio): # input_money_ratio 는 ex) [400000, 600000], strategy_kind_money는 한 전략을 구입할 금액
        product_price_dict = list(portfolio_rebalance_product_count[j].values())[0]
        
        if len(product_price_dict) <= 0: # 해당 전략으로 살 상품이 없는경우
            rebalance_balance_account[test_date] +=strategy_kind_money # 할당된 금액 전체가 잔액이 된다
            continue
        price_lists=product_price_dict[test_date]
            
        # print('strategy_kind_money :', strategy_kind_money)
        # print('price_lists :', price_lists)
        strategy_product_money = int(strategy_kind_money // len(price_lists)) # strategy_product_money 는 전략에 해당하는 금융상품들중 한 금융상품을 구입할 금액
        # print('strategy_product_money :', strategy_product_money)
        # print('before balance_account : ',balance_account)
        for price_list in price_lists:
            # print('price_list[1] :',price_list[1])
            rebalance_balance_account[test_date] += strategy_product_money%price_list[1]
            # print('after balance_account : ',balance_account)
            price_list[1] = int(strategy_product_money//price_list[1])
                
            # print('after price_lists :', price_lists)
            # print()  
            
    # 일자별 잔액현황하고, 일자별 포트폴리오의 금융상품 개수들 반환
    return rebalance_balance_account, portfolio_rebalance_product_count

# 포트폴리오 내 새로 구매한 금융상품들 가치 반환
def getPortfolioProductValue(portfolio_rebalance_product_price,portfolio_rebalance_product_count):
    product_price = copy.deepcopy(portfolio_rebalance_product_price)
    product_count = copy.deepcopy(portfolio_rebalance_product_count)
    for i in range(len(product_price)):
        price_strategy_key=list(product_price[i].keys())[0]
        price_strategy_value=product_price[i][price_strategy_key]
        strategy_value_keys=list(price_strategy_value.keys())
        
        count_strategy_value=product_count[i][price_strategy_key]
        
        for strategy_value_key in strategy_value_keys:
            price_lists=price_strategy_value[strategy_value_key]
            count_lists=count_strategy_value[strategy_value_key]
            
            for i in range(len(price_lists)):
                price_lists[i][1] = price_lists[i][1] * count_lists[i][1]
    return(product_price)

# 포트폴리오 내 전략별 가치 반환
def getPortfolioStrategyValue(portfolio_rebalance_product_value):
    product_value = copy.deepcopy(portfolio_rebalance_product_value)
    for i in range(len(product_value)):
        price_strategy_key=list(product_value[i].keys())[0]
        price_strategy_value=product_value[i][price_strategy_key]
        strategy_value_keys=list(price_strategy_value.keys()) # strategy_value_keys 는 '2021-05-01' 등 날짜들
        
        
        for strategy_value_key in strategy_value_keys:
            sum=0
            price_lists=price_strategy_value[strategy_value_key]
            for price_list in price_lists:
                sum+=price_list[1]
            price_strategy_value[strategy_value_key] = sum
    return(product_value)

# 포트폴리오 내 가치반환(잔액포함X?)
def getPortfolioValue(portfolio_rebalance_strategy_value):
    portfolio_strategy_value = copy.deepcopy(portfolio_rebalance_strategy_value)
    portfolio_value=dict()

    # 전략별로 반복
    for i in range(len(portfolio_strategy_value)):
        price_strategy_key=list(portfolio_strategy_value[i].keys())[0]
        price_strategy_value=portfolio_strategy_value[i][price_strategy_key]
        strategy_value_keys=list(price_strategy_value.keys()) # strategy_value_keys 는 '2021-05-01' 등 날짜들
        
        
        for strategy_value_key in strategy_value_keys:
            if strategy_value_key in portfolio_value:
                portfolio_value[strategy_value_key]+=price_strategy_value[strategy_value_key]
            else:
                portfolio_value[strategy_value_key]=price_strategy_value[strategy_value_key]
    return(portfolio_value)

# 날짜 킷값 변경하는 함수
def changeDateDictKey(product_count,new_date):
    for i in range(len(product_count)):
        price_strategy_key=list(product_count[i].keys())[0]
        price_strategy_value=product_count[i][price_strategy_key]
        if len(list(price_strategy_value.keys())) <=0: # 전략에 해당하는 금융상품이 없는 경우
            continue
        price_strategy_value[new_date]=price_strategy_value.pop(list(price_strategy_value.keys())[0])
    return(product_count)

# 누적되는 잔액계좌 구하는 함수
def getBalaceAccumulate(input_balance_account,total_balance_account):
    new_balance_account_key = list(input_balance_account.keys())[0]

    total_balance_account[new_balance_account_key]=total_balance_account[list(total_balance_account.keys())[-1]]+list(input_balance_account.values())[0]
    
    return total_balance_account

# 포트폴리오 생성하기 위해서 내용을 입력받는 함수
def makePortfolio(): # sangsu_check 1 고정
    portfolio_name = input("포트폴리오명은? : ")
    strategy_count = int(input("포트폴리오의 구성 전략 개수는? : "))
    start_time = input("백테스트 시작날짜(ex 20220101) : ")
    end_time = input("백테스트 끝날짜(ex 20220101) : ")
    rebalance_cycle = int(input("리밸런싱 주기(달 기준) : "))
    input_type = input("주기적으로 납입하는 방식 선택 : ")
    input_money = int(input("주기적으로 납입하는 금액 입력 : "))
    return portfolio_name, strategy_count, start_time, end_time, rebalance_cycle, input_type, input_money
   
# 전략을 생성하기 위해서 내용을 입력받는 함수
def makeStrategy(i): # sangsu_check 2 고정
    strategy_kind = input(str(i+1)+"번째 전략 종류를 입력하세요(ex PER 저, PBR 저) : ")
    product_count = int(input("전략의 구성 금융상품 개수를 입력하세요 : "))
    return strategy_kind, product_count
   
# 잔액포함 포트폴리오 가치 반환하는 함수
def getRealPortfolioValue(total_portfolio_account,total_balance_account):
    real_portfolio_account = dict()

    for portfolio_key in total_portfolio_account.keys():
        real_portfolio_account[portfolio_key]=total_portfolio_account[portfolio_key]+total_balance_account[portfolio_key]
    return real_portfolio_account


# 김상수 코드입니다
def backed_core(portfolio_name, strategy_count, start_time, end_time, rebalance_cycle, input_type, input_money, variable_strategy_list, variable_product_list):
    db = pymysql.connect(host='localhost', port=3306, user='snowball_test', passwd='909012', db='snowball_database', charset='utf8') 
    snowball=db.cursor() 
    
    portfolio_instance=Portfolio(portfolio_name, strategy_count, start_time, end_time, rebalance_cycle, input_type, input_money, variable_product_list)
    
    strategy_list = list() # '포트폴리오'를 구성하는 '전략'들을 담을 '전략 리스트' 생성, '전략리스트' == '포트폴리오' 라고 생각해도 무관
    for strategy_dick in variable_strategy_list: # '포트폴리오'를 구성하는 '전략의 개수'만큼 반복
    #     # point1 variable-strategy-list 사용
        strategy_kind = strategy_dick['strategy_kind']
        product_count = strategy_dick['strategy_count'] # 'makeStrategy() 함수'를 이용해서 '전략종류(PER 저 등)'와 '전략으로 선택할 금융상품 개수'를 입력받음
        strategy_upper = strategy_dick['strategy_upper']
        strategy_lower = strategy_dick['strategy_lower']
        strategy_list.append(Strategy(strategy_kind, product_count, strategy_upper, strategy_lower)) # 'Strategy() 클래스'를 이용해서 생성한 '전략'들을 '전략 리스트'에 추가
    
    # variable_product_list (밑의 딕셔너리의 리스트)
    # strategy_rate 
    # strategy_upper (default:0)
    # strategy_lower (default:0)
    variable_product_list
    
    # 접속하기 - 해당 데이터 베이스에 접속
    

    # 백테스트 함수 사용하기 위해서 리스트들 생성
    stratgy_kind_list = list() # '전략종류들을 담을 리스트' 생성 - '포트폴리오'를 구성하는 모든 '전략'들의 '전략종류'들이 담김
    stratgy_sql_query_list = list() # '전략종류를 통해 데이터베이스에서 정보를 가져올 쿼리문을 담을 리스트' 생성 - '포트폴리오'를 구성하는 모든 '전략'들의 '전략종류를 통해 데이터베이스에서 정보를 가져올 쿼리문'들이 담김
    # point2 variable-product-list 사용
    for strategy_object in strategy_list: # '전략리스트' 에 있는 모든 '전략'들에 대해서 반복
        stratgy_kind_list.append(strategy_object.getProductListQuery()[0]) # '전략'의 '전략종류'을 '전략종류들을 담을 리스트'에 추가
        stratgy_sql_query_list.append(strategy_object.getProductListQuery()[1]) # '전략'의 '전략종류를 통해 데이터베이스에서 정보를 가져올 쿼리문'을 해당 리스트에 추가
    
    
    # 백테스트 함수 실행, 마지막 1은 세제혜택 여부에 따라 1 또는 0
    # hmm... 스노우볼을 넘겨줄거임
    return backTesting(*portfolio_instance.returnToBacktest(), stratgy_kind_list, stratgy_sql_query_list, 0, snowball)
     
 
 
 
# 실행하는 부분이 메인함수이면 실행 
if __name__ == "__main__":
    # 'makePortfoili() 함수' 를 이용해서 '포트폴리오 입력 변수'들을 생성
    portfolio_name, strategy_count, start_time, end_time, rebalance_cycle, input_type, input_money=makePortfolio()
    # '포트폴리오 입력 변수'와 'Portfolio() 클래스'를 이용해서 '포트폴리오 객체' 생성
    portfolio_1=Portfolio(portfolio_name, strategy_count, start_time, end_time, rebalance_cycle, input_type, input_money) # 포트폴리오면, 구성전략개수, 시작날짜, 끝날짜, 리밸런싱주기(달), 납입방법, 주기적납부금액
    
    
    strategy_list = list() # '포트폴리오'를 구성하는 '전략'들을 담을 '전략 리스트' 생성, '전략리스트' == '포트폴리오' 라고 생각해도 무관
    for i in range(strategy_count): # '포트폴리오'를 구성하는 '전략의 개수'만큼 반복
        strategy_kind, product_count = makeStrategy(i) # 'makeStrategy() 함수'를 이용해서 '전략종류(PER 저 등)'와 '전략으로 선택할 금융상품 개수'를 입력받음
        strategy_list.append(Strategy(strategy_kind, product_count)) # 'Strategy() 클래스'를 이용해서 생성한 '전략'들을 '전략 리스트'에 추가
    
    # 접속하기 - 해당 데이터 베이스에 접속
    # db = pymysql.connect(host='localhost', port=3306, user='snowball_test', passwd='909012', db='snowball_database', charset='utf8') 
    # snowball=db.cursor() 

    # 백테스트 함수 사용하기 위해서 리스트들 생성
    stratgy_kind_list = list() # '전략종류들을 담을 리스트' 생성 - '포트폴리오'를 구성하는 모든 '전략'들의 '전략종류'들이 담김
    stratgy_sql_query_list = list() # '전략종류를 통해 데이터베이스에서 정보를 가져올 쿼리문을 담을 리스트' 생성 - '포트폴리오'를 구성하는 모든 '전략'들의 '전략종류를 통해 데이터베이스에서 정보를 가져올 쿼리문'들이 담김
    for strategy_object in strategy_list: # '전략리스트' 에 있는 모든 '전략'들에 대해서 반복
        stratgy_kind_list.append(strategy_object.getProductListQuery()[0]) # '전략'의 '전략종류'을 '전략종류들을 담을 리스트'에 추가
        stratgy_sql_query_list.append(strategy_object.getProductListQuery()[1]) # '전략'의 '전략종류를 통해 데이터베이스에서 정보를 가져올 쿼리문'을 해당 리스트에 추가
    
    
    # 백테스트 함수 실행, 마지막 1은 세제혜택 여부에 따라 1 또는 0
    backTesting(*portfolio_1.returnToBacktest(), stratgy_kind_list, stratgy_sql_query_list)
    db.close()  