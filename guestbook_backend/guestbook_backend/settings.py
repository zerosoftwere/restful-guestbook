import os

BASE_DIR = os.path.dirname(os.path.abspath(__name__))
DEBUG = True
ALLOWED_HOST = []
SECRET_KEY = '{{ secret_key }}'

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.staticfiles',
    'django.contrib.contenttypes',
    'rest_framework',
    'corsheaders',
    'api'
]

MIDDLEWARE_CLASSES = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'guestbook_backend.urls'
STATIC_URL = '/static/'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True
    }
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'db.sqlite3'
    }
}

CORS_ORIGIN_ALLOW_ALL = True
