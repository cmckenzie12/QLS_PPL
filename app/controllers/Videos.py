from system.core.controller import *
class Videos(Controller):
    def __init__(self, action):
        super(Videos, self).__init__(action)
        self.load_model('Video')

    def index(self):
        # return self.load_view('video/index.html')
        videos = self.models['Video'].get_all_videos()
        return self.load_view('video/index.html', videos=videos)        

    def index_json(self):
        quotes = self.models['Video'].get_all_videos()
        return jsonify(videos=videos)

    def index_html(self):
        videos = self.models['Video'].get_all_videos()
        return self.load_view('partials/videos.html', videos=videos)

    def search(self):
        """ 
        A loaded model is accessible through the models attribute 
        self.models['WelcomeModel'].get_all_users()
        """
        return self.load_view('video/search.html')

    def add(self, video_id):
        self.models['Video'].add_video(video_id)
        return self.load_view('video/admin.html')

    def login(self):
        videos = self.models['Video'].get_all_videos()
        return self.load_view('video/admin.html', videos=videos)

    def logout(self):
        # session.flush()  
        return redirect('/')
