from django.contrib import admin
from .models import *

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    search_fields = ('name',)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name','price','description','category')
    list_filter = ('is_active', 'category')
    search_fields = ('name',)

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)