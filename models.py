from django.db import models

class Ordenes(models.Model):
    id = models.IntegerField
    nombreCliente = models.CharField(max_length=150)
    total = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.nombreCliente