from rest_framework import routers
from .api import ProjectViewSet

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()

router.register('api/projects', ProjectViewSet, 'projects')

urlpatterns = router.urls

# Añadir esta parte para servir archivos multimedia en desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)