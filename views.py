from django.shortcuts import render, get_object_or_404, redirect
from .models import Ordenes
from .forms import OrdenesForm

def lista_orden(request):
    ordenes = Ordenes.objects.all()
    return render(request, 'lista_orden.html', {'ordenes': ordenes})

def nuevo_orden(request):
    if request.method == 'POST':
        form = OrdenesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_orden')
    else:
        form = OrdenesForm()
    return render(request, 'editar_orden.html', {'form': form})
    
def editar_orden(request, pk):
    orden = get_object_or_404(Ordenes, pk=pk)
    if request.method == 'POST':
        form = OrdenesForm(request.POST, instance=orden)
        if form.is_valid():
            form.save()
            return redirect('detalle_orden', pk=orden.pk)
    else:
        form = OrdenesForm(instance=orden)
    return render(request, 'editar_orden.html', {'form': form})

def detalle_orden(request, pk):
    orden = get_object_or_404(Ordenes, pk=pk)
    return render(request, 'detalle_orden.html', {'orden': orden})

def eliminar_orden(request, pk):
    orden = get_object_or_404(Ordenes, pk)
    orden.delete()
    return redirect('lista_orden')