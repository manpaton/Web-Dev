from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name', 'price']
    def get_queryset(self):
        queryset = Product.objects.all()

        category = self.request.query_params.get('category')
        is_active = self.request.query_params.get('is_active')

        if category:
            queryset = queryset.filter(category_id=category)

        if is_active is not None:
            if is_active.lower() == 'true':
                queryset = queryset.filter(is_active=True)
            elif is_active.lower() == 'false':
                queryset = queryset.filter(is_active=False)

        return queryset

    @action(detail=False)
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)

        search = request.query_params.get('search')
        ordering = request.query_params.get('ordering')

        if search:
            queryset = queryset.filter(name__icontains=search)

        if ordering:
            queryset = queryset.order_by(ordering)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)