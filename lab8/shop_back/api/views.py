from gc import get_objects
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category


def ProductList(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name,
        })
    return JsonResponse(data, safe=False)

def ProductDetail(request, id):
    product = get_object_or_404(Product, id=id)
    data ={
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name,
    }
    return JsonResponse(data, safe=False)

def CategoryList(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name,
        })
    return JsonResponse(data, safe=False)

def CategoryDetail(request, id):
    category = get_object_or_404(Category, id=id)
    data ={
        'id': category.id,
        'name': category.name,
    }
    return JsonResponse(data, safe=False)

def ProductsByCategory(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.product_set.all()
    data = []
    for product in products:
        data.append({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": category.name
        })
    return JsonResponse(data, safe=False)