from django.urls import path
from .views import SignupView, LoginView, LogoutView, VerifyEmailView

urlpatterns = [
    path('auth/signup/', SignupView.as_view(), name='signup'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    path('auth/verify-email/', VerifyEmailView.as_view(), name='verify-email'),
] 