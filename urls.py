from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('orden/nuevo/', views.nuevo_orden, name='nuevo_orden'),
    path('orden/<int:pk>/editar', views.editar_orden, name='editar_orden'),
    path('orden/<int:pk>/detalle', views.detalle_orden, name='detalle_orden'),
    path('orden/listado/', views.lista_orden, name="lista_orden")

]
