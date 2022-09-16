from tkinter.messagebox import NO
from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(User)
admin.site.register(Portfolio_info)
admin.site.register(Product_info)
admin.site.register(Portfolio_result)
admin.site.register(Notice)

