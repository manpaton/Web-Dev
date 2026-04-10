from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet
from django.urls import path
from .fbv import products_list, product_detail
from .CBV import CBVProductListAPIView, CBVProductDetailAPIView
from .mixins import MixinsProductListAPIView, MixinsProductDetailAPIView
from .generics import *
urlpatterns = [
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('products-CBV/', CBVProductListAPIView.as_view()),
    path('product-CBV/<int:product_id>/', CBVProductDetailAPIView.as_view()),
    path('products-mixin/', MixinsProductListAPIView.as_view()),
    path('product-mixin/<int:product_id>/', MixinsProductDetailAPIView.as_view()),
    path('products-gen', GenProductListAPIView.as_view()),
    path('product-gen/<int:product_id>/', GenProductDetailAPIView.as_view()),
    path('categories/', GenCategoryListAPIView.as_view()),
    path('category/<int:category_id>/', GenCategoryDetailAPIView.as_view()),
    path('category/<int:category_id>/products', CategoryProductsAPIView.as_view()),
]