from rest_framework import routers
from django.urls import path, include
from . import views
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': '/api/users/',
        'teams': '/api/teams/',
        'activities': '/api/activities/',
        'workouts': '/api/workouts/',
        'leaderboard': '/api/leaderboard/',
    })

urlpatterns = [
    path('', api_root, name='api_root'),
    path('users/', views.UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', views.UserRetrieveUpdateDestroyView.as_view(), name='user-detail'),
    path('teams/', views.TeamListCreateView.as_view(), name='team-list-create'),
    path('teams/<int:pk>/', views.TeamRetrieveUpdateDestroyView.as_view(), name='team-detail'),
    path('activities/', views.ActivityListCreateView.as_view(), name='activity-list-create'),
    path('activities/<int:pk>/', views.ActivityRetrieveUpdateDestroyView.as_view(), name='activity-detail'),
    path('workouts/', views.WorkoutListCreateView.as_view(), name='workout-list-create'),
    path('workouts/<int:pk>/', views.WorkoutRetrieveUpdateDestroyView.as_view(), name='workout-detail'),
    path('leaderboard/', views.LeaderboardListView.as_view(), name='leaderboard-list'),
]
