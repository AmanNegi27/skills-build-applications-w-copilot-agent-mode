# Example DATABASES setting for Djongo + MongoDB
# Use this with Django's settings.py (adapt user/password/host as appropriate)

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'octofit',
        'CLIENT': {
            'host': 'mongodb://localhost:27017',
        }
    }
}

# NOTE: Always use Django ORM (models, migrations) for schema and data management.
