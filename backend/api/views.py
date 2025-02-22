from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSerializer, LoginSerializer, VerifyEmailSerializer
import jwt
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'user': UserSerializer(user).data,
                'message': 'User created successfully. Please check your email to verify your account.'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                email=serializer.validated_data['email'],
                password=serializer.validated_data['password']
            )
            if user:
                if not user.email_verified:
                    return Response({
                        'error': 'Please verify your email before logging in.'
                    }, status=status.HTTP_400_BAD_REQUEST)
                login(request, user)
                return Response({
                    'user': UserSerializer(user).data,
                    'message': 'Logged in successfully.'
                })
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully.'})

class VerifyEmailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = VerifyEmailSerializer(data=request.data)
        if serializer.is_valid():
            try:
                payload = jwt.decode(
                    serializer.validated_data['token'],
                    settings.SECRET_KEY,
                    algorithms=['HS256']
                )
                user = User.objects.get(id=payload['user_id'])
                if not user.email_verified:
                    user.email_verified = True
                    user.save()
                    return Response({
                        'message': 'Email verified successfully.'
                    })
                return Response({
                    'message': 'Email already verified.'
                })
            except jwt.ExpiredSignatureError:
                return Response({
                    'error': 'Verification link has expired.'
                }, status=status.HTTP_400_BAD_REQUEST)
            except (jwt.DecodeError, User.DoesNotExist):
                return Response({
                    'error': 'Invalid verification token.'
                }, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 