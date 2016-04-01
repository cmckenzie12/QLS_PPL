from system.core.router import routes

routes['default_controller'] = 'Videos'
routes['GET']['/search'] = 'Videos#search'
routes['GET']['/add/<video_id>'] = 'Videos#add'
routes['GET']['/login'] = 'Videos#login'
routes['GET']['/logout'] = 'Videos#logout'
