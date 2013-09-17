from django.conf.urls import patterns, url

from mainSite import views

urlpatterns = patterns('',
    url(r'^$', views.landing, name='landing'),
    url(r'^testing/$', views.testing, name='testing'),

)