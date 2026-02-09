from django.contrib import admin
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response
import os


@api_view(['GET'])
def api_root(request, format=None):
    codespace = os.getenv("CODESPACE_NAME")

    if codespace:
        base_url = f"https://{codespace}-8000.app.github.dev"
    else:
        base_url = "http://localhost:8000"

    return Response({
        "users": f"{base_url}/api/users/",
        "teams": f"{base_url}/api/teams/",
        "activities": f"{base_url}/api/activities/",
        "workouts": f"{base_url}/api/workouts/",
        "leaderboard": f"{base_url}/api/leaderboard/",
    })


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('octofit_tracker.api_urls')),
    path('', api_root, name='api-root'),
]
