OctoFit Tracker backend notes

- MongoDB: use the official mongodb-org service and `mongosh` as needed.
- Check if `mongod` is running with: `ps aux | grep mongod`.
- Use Django ORM for database work; do not run direct MongoDB scripts to create models or data.
- We use `djongo`/`pymongo` to allow Django to talk to MongoDB via the Django ORM.

See `octofit_tracker/settings_mongo_example.py` for a sample `DATABASES` entry to use with `djongo`.
