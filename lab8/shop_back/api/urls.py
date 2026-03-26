from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', views.ProductList, name='product-list'),
    path('products/<int:id>/', views.ProductDetail, name='product-detail'),
    path('categories/', views.CategoryList, name='category-list'),
    path('categories/<int:id>/', views.CategoryDetail, name='category-detail'),
    path('categories/<int:id>/products/', views.ProductsByCategory(), name='products-by-category'),
]