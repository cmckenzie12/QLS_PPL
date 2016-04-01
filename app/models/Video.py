from system.core.model import Model

class Video(Model):
    def __init__(self):
        super(Video, self).__init__()

    def get_all_videos(self):
        return self.db.query_db("SELECT * FROM videos")
    def add_video(self, video_id):
    	query = "INSERT INTO videos (video_id, created_at) VALUES ('{}', NOW())".format(video_id)
    	return self.db.query_db(query)