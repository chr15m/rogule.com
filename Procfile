# wsgi: dotted.module:entry_point
web: cd build && node server.js
analytics: ./bin/analytics
# release: make PROD=1
# static: public
# cron: */5 * * * * python batch.py
cron: 0 0 1 * * ./bin/archive-cron-wrapper
# somepyworker: python somescript.py
# somenodeworker: node somescript.js
